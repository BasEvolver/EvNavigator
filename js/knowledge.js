// js/knowledge.js - FINAL VERSION with Corrected Filtering, Tree-View, and Dynamic Re-Layout

document.addEventListener('DOMContentLoaded', async () => {
    await loadSharedComponents();
    if (typeof knowledgeGraphData === 'undefined' || !knowledgeGraphData.nodes) {
        console.error("CRITICAL ERROR: knowledge-data.js is not loaded.");
        return;
    }

    const nodeMap = new Map(knowledgeGraphData.nodes.map(node => [node.id, node]));
    
    // --- D3 SETUP & COLOR SCALES ---
    const graphContainer = document.getElementById('knowledge-graph-card');
    const width = graphContainer.clientWidth;
    const height = graphContainer.clientHeight;
    const svg = d3.select(graphContainer).append("svg").attr("width", width).attr("height", height);

    const appColors = {
        input_document: 'var(--node-fill-subtle)',
        task: 'var(--accent-blue)',
        output_direct: 'var(--status-success)',
        output_report: 'var(--accent-blue)',
        final_output: 'var(--purple)',
    };
    const groupColor = d3.scaleOrdinal(Object.keys(appColors), Object.values(appColors));

    const workstreamColors = {
        'Business & Strategy': 'var(--accent-blue)',
        'Commercial & Customer': 'var(--accent-teal)',
        'Technology & Operations': 'var(--purple)',
        'Financial & Risk': 'var(--status-warning)',
    };
    const allWorkstreamColors = { ...workstreamColors, 'Synthesis': 'var(--text-secondary)', 'Value Creation': 'var(--text-secondary)', 'Investment Committee': 'var(--text-secondary)', 'Final Deliverables': 'var(--text-secondary)' };
    const workstreamColorScale = d3.scaleOrdinal(Object.keys(allWorkstreamColors), Object.values(allWorkstreamColors));

    svg.append('defs').append('marker').attr('id', 'arrow').attr('viewBox', '0 -5 10 10')
        .attr('refX', 25).attr('markerWidth', 7).attr('markerHeight', 7).attr('orient', 'auto-start-reverse')
        .append('path').attr('d', 'M0,-5L10,0L0,5').style('fill', 'var(--text-muted)');

    // --- UI CONTROLS (Legend & Filters) ---
    function createLegend() {
        const panel = d3.select("#legend-container");
        panel.html('');
        panel.append("h3").attr("class", "control-title").text("Legend");
        
        const nodeTypeData = [
            { label: "Input Document", color: 'var(--text-secondary)', shape: 'path' },
            { label: "Task", color: 'var(--accent-blue)', shape: 'rect' },
            { label: "Direct Deliverable", color: 'var(--status-success)', shape: 'diamond' },
            { label: "Major Report", color: 'var(--accent-blue)', shape: 'circle' },
            { label: "Final Output", color: 'var(--purple)', shape: 'circle' }
        ];
        
        nodeTypeData.forEach(d => {
            const item = panel.append("div").attr("class", "legend-item");
            const svg = item.append("svg").attr("width", 20).attr("height", 20);
            if (d.shape === 'circle') svg.append('circle').attr('r', 8).attr('cx', 10).attr('cy', 10).style("fill", d.color);
            else if (d.shape === 'rect') svg.append('rect').attr('width', 16).attr('height', 16).attr('x', 2).attr('y', 2).attr('rx', 3).style("fill", d.color);
            else if (d.shape === 'path') svg.append('path').attr('d', `M 0,0 L 12,0 L 16,4 L 16,16 L 0,16 Z M 12,0 L 12,4 L 16,4 Z`).style("fill", d.color).attr("transform", "scale(0.9) translate(2,2)");
            else if (d.shape === 'diamond') svg.append('path').attr('d', 'M 0 -10 L 10 0 L 0 10 L -10 0 Z').style("fill", d.color).attr("transform", "translate(10, 10)");
            item.append("span").text(d.label);
        });

        panel.append("h4").attr("class", "legend-subheader").text("Workstreams (Tasks)");
        
        Object.keys(workstreamColors).forEach(ws => {
            const item = panel.append("div").attr("class", "legend-item");
            item.append("div").style("width", "16px").style("height", "16px").style("background-color", workstreamColorScale(ws)).style("border-radius", "3px").style("margin-left", "2px");
            item.append("span").text(ws);
        });
    }

    function createFilterPanels() {
        const filterHierarchy = {};
        knowledgeGraphData.nodes.forEach(n => {
            if (n.workstream && n.category && n.topic) {
                if (!filterHierarchy[n.workstream]) filterHierarchy[n.workstream] = {};
                if (!filterHierarchy[n.workstream][n.category]) filterHierarchy[n.workstream][n.category] = new Set();
                filterHierarchy[n.workstream][n.category].add(n.topic);
            }
        });

        const nodeTypes = [
            { id: 'input_document', label: 'Input Document' }, { id: 'task', label: 'Task' },
            { id: 'output_direct', label: 'Direct Deliverable' }, { id: 'output_report', label: 'Major Report' },
            { id: 'final_output', label: 'Final Output' }
        ];

        const ntContainer = d3.select("#nodetype-filter-container");
        ntContainer.html('');
        const ntHeader = ntContainer.append("div").attr("class", "filter-header");
        ntHeader.append("h3").attr("class", "control-title").text("Node Types");
        ntHeader.append("div").html(`<button class="filter-action-btn" data-action="filter-all" data-target="#nodetype-filter-container">All</button> / <button class="filter-action-btn" data-action="filter-none" data-target="#nodetype-filter-container">None</button>`);
        nodeTypes.forEach(nt => {
            ntContainer.append("div").attr("class", "filter-item")
                .html(`<label>${nt.label}</label><label class="toggle-switch"><input type="checkbox" data-filter-key="group" data-filter-value="${nt.id}" checked><span class="slider round"></span></label>`);
        });

        const wsContainer = d3.select("#workstream-filter-container");
        wsContainer.html('');
        const wsHeader = wsContainer.append("div").attr("class", "filter-header");
        wsHeader.append("h3").attr("class", "control-title").text("Topics");
        wsHeader.append("div").html(`<button class="filter-action-btn" data-action="filter-all" data-target="#workstream-filter-container">All</button> / <button class="filter-action-btn" data-action="filter-none" data-target="#workstream-filter-container">None</button>`);
        
        for (const ws of Object.keys(filterHierarchy).sort()) {
            const wsItem = wsContainer.append("div").attr("class", "filter-tree-item is-parent");
            const wsLabel = wsItem.append("div").attr("class", "filter-parent-label").attr("data-action", "toggle-children");
            wsLabel.html(`<svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg><span>${ws}</span>`);
            wsItem.append("label").attr("class", "toggle-switch").html(`<input type="checkbox" class="parent-toggle" data-workstream="${ws}" checked><span class="slider round"></span>`);
            
            const catContainer = wsItem.append("div").attr("class", "filter-tree-children collapsed");
            for (const cat of Object.keys(filterHierarchy[ws]).sort()) {
                const catItem = catContainer.append("div").attr("class", "filter-tree-item is-parent");
                const catLabel = catItem.append("div").attr("class", "filter-parent-label").attr("data-action", "toggle-children");
                catLabel.html(`<svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg><span>${cat}</span>`);
                catItem.append("label").attr("class", "toggle-switch").html(`<input type="checkbox" class="category-toggle" data-workstream="${ws}" data-category="${cat}" checked><span class="slider round"></span>`);
                
                const topicContainer = catItem.append("div").attr("class", "filter-tree-children collapsed");
                for (const topic of Array.from(filterHierarchy[ws][cat]).sort()) {
                    topicContainer.append("div").attr("class", "filter-tree-item")
                        .html(`<label>${topic}</label><label class="toggle-switch"><input type="checkbox" class="topic-toggle" data-workstream="${ws}" data-category="${cat}" data-topic="${topic}" checked><span class="slider round"></span></label>`);
                }
            }
        }
    }

    createLegend();
    createFilterPanels();

    // --- SIMULATION & DRAWING ---
    const mainContainer = svg.append("g");
    const linkGroup = mainContainer.append("g").attr("class", "links");
    const nodeGroup = mainContainer.append("g").attr("class", "nodes");
    let link, node;
    const simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.id).distance(120).strength(0.3))
        .force("charge", d3.forceManyBody().strength(-800))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(d => (d.group === 'input_document' ? 55 : 45)).strength(1))
        .on("tick", ticked);

    function updateGraph(nodesData, linksData) {
        const linkedByIndex = {};
        linksData.forEach(d => { linkedByIndex[`${d.source.id || d.source},${d.target.id || d.target}`] = 1; });
        function areNodesConnected(a, b) { return linkedByIndex[`${a.id},${b.id}`] || linkedByIndex[`${b.id},${a.id}`] || a.id === b.id; }

        link = linkGroup.selectAll(".link").data(linksData, d => `${d.source.id}-${d.target.id}`).join("path").attr("class", "link").attr("marker-end", "url(#arrow)");

        node = nodeGroup.selectAll(".node").data(nodesData, d => d.id)
            .join(enter => {
                const g = enter.append("g").attr("class", "node").call(drag(simulation));
                g.append(d => {
                    if (d.group === 'task') return document.createElementNS(d3.namespaces.svg, 'rect');
                    if (d.group === 'output_direct') return document.createElementNS(d3.namespaces.svg, 'path');
                    if (['output_report', 'final_output'].includes(d.group)) return document.createElementNS(d3.namespaces.svg, 'circle');
                    if (d.group === 'input_document') return document.createElementNS(d3.namespaces.svg, 'path');
                    return document.createElementNS(d3.namespaces.svg, 'circle');
                });
                g.append("text").text(d => d.label);
                return g;
            });

        node.each(function(d) {
            const g = d3.select(this);
            if (d.group === 'task') {
                g.select('rect').attr('width', 150).attr('height', 45).attr('x', -75).attr('y', -22.5).attr('rx', 8).style("fill", workstreamColorScale(d.workstream));
                g.select("text").call(wrapText, 140).style("fill", 'white').style("font-size", "10px").style("font-weight", "600");
            } else if (d.group === 'input_document') {
                g.select('path').attr('d', `M -22,-26 H 12 V -20 H 20 V -26 L 28,-18 V 26 H -22 Z M 20,-20 V -18 H 12 Z`).style("fill", groupColor(d.group));
                g.select("text").call(wrapText, 44).style("fill", 'var(--node-text-subtle)').style("font-size", "9px");
            } else if (d.group === 'output_direct') {
                g.select('path').attr('d', 'M 0 -25 L 25 0 L 0 25 L -25 0 Z').style("fill", groupColor(d.group));
                g.select("text").call(wrapText, 40).style("fill", 'var(--node-text-subtle)').style("font-size", "9px");
            } else {
                const size = d.group === 'final_output' ? 35 : 28;
                g.select('circle').attr('r', size).style("fill", groupColor(d.group));
                g.select("text").call(wrapText, size * 1.7).style("fill", 'var(--node-text-subtle)').style("font-size", "10px").style("font-weight", "600");
            }
        });

        node.on('mouseover', (event, d) => {
            node.classed('faded', o => !areNodesConnected(d, o));
            link.classed('faded', l => d.id !== (l.source.id || l.source) && d.id !== (l.target.id || l.target));
            link.classed('highlighted', l => d.id === (l.source.id || l.source) || d.id === (l.target.id || l.target));
        }).on('mouseout', () => {
            node.classed('faded', false); link.classed('faded', false); link.classed('highlighted', false);
        }).on('click', (event, d) => {
            showDetails(d);
            node.classed('selected', o => o.id === d.id);
        });

        simulation.nodes(nodesData);
        simulation.force("link").links(linksData);
        simulation.alpha(1).restart();
    }

    function ticked() {
        link.attr("d", d => `M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`);
        node.attr("transform", d => `translate(${d.x},${d.y})`);
    }

    function drag(simulation) {
      function dragstarted(event, d) { if (!event.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; }
      function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
      function dragended(event, d) { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }
      return d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
    }

    const detailPaneContent = document.getElementById('detail-pane-content');
    function showDetails(d) {
        const predecessors = knowledgeGraphData.links.filter(l => l.target === d.id).map(l => nodeMap.get(l.source)).filter(Boolean);
        const successors = knowledgeGraphData.links.filter(l => l.source === d.id).map(l => nodeMap.get(l.target)).filter(Boolean);
        const renderConnections = (title, items) => !items || items.length === 0 ? '' : `<div class="detail-section"><strong>${title}:</strong><ul class="detail-section-list">${items.map(item => `<li>${item.label}</li>`).join('')}</ul></div>`;
        let detailHTML = `<div class="detail-header" style="border-left-color: ${d.group === 'task' ? workstreamColorScale(d.workstream) : groupColor(d.group)};"><h3 class="detail-title">${d.label}</h3><p class="detail-group">${d.group.replace(/_/g, ' ').toUpperCase()}</p></div><div class="detail-body"><div class="detail-section"><strong>Description:</strong><p>${d.description || 'N/A'}</p></div>`;
        if (d.group === 'input_document') detailHTML += `<div class="detail-section"><strong>Content Overview:</strong><p>${d.contentOverview || 'N/A'}</p></div><div class="detail-section"><strong>Quality Assessment:</strong><div class="quality-badge ${d.qualityAssessment?.rating.toLowerCase()}">${d.qualityAssessment?.rating}</div><p><em>${d.qualityAssessment?.justification}</em></p></div><div class="detail-grid"><div><strong>Full Path:</strong><p>${d.fullPath}</p></div><div><strong>Revisions:</strong><p>${d.revisions}</p></div></div>`;
        if (d.group === 'task') detailHTML += `<div class="detail-grid"><div><strong>Workstream:</strong><p>${d.workstream}</p></div><div><strong>Category:</strong><p>${d.category}</p></div></div><div class="detail-section"><strong>Questions Answered:</strong><p><em>"${d.questionsAnswered}"</em></p></div><div class="detail-section"><strong>AI Accelerators:</strong><p>${d.aiAccelerators}</p></div>${renderConnections('Inputs', predecessors)}<div class="detail-section"><strong>Direct Outputs:</strong><p>${d.directOutputs}</p></div>${renderConnections('Successors', successors)}`;
        detailHTML += `</div>`;
        detailPaneContent.innerHTML = detailHTML;
    }

    const searchInput = document.getElementById('knowledge-search-input');
    const clearSearchBtn = document.getElementById('knowledge-search-clear');
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        clearSearchBtn.style.display = searchTerm ? 'flex' : 'none';
        if (!searchTerm) { node.classed('faded', false).classed('highlighted-search', false); return; }
        node.classed('faded', true).classed('highlighted-search', false);
        node.filter(d => d.label.toLowerCase().includes(searchTerm)).classed('faded', false).classed('highlighted-search', true);
    }
    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', () => { searchInput.value = ''; handleSearch(); });

    // --- CORRECTED & ENHANCED FILTERING LOGIC ---
    function applyFilters() {
        const selectedNodeTypes = new Set();
        d3.selectAll('#nodetype-filter-container input[type="checkbox"]:checked').each(function() { selectedNodeTypes.add(this.dataset.filterValue); });
        
        const selectedTopics = new Set();
        d3.selectAll('#workstream-filter-container .topic-toggle:checked').each(function() { selectedTopics.add(this.dataset.topic); });

        // 1. Find all tasks that match the selected topics. These are our "seed" nodes.
        const seedTaskIds = new Set(
            knowledgeGraphData.nodes
                .filter(n => n.group === 'task' && selectedTopics.has(n.topic))
                .map(n => n.id)
        );

        // 2. Find all nodes that are DIRECTLY connected to our seed tasks.
        const visibleNodeIds = new Set(seedTaskIds);
        knowledgeGraphData.links.forEach(link => {
            const sourceId = link.source.id || link.source;
            const targetId = link.target.id || link.target;

            if (seedTaskIds.has(sourceId)) {
                visibleNodeIds.add(targetId);
            }
            if (seedTaskIds.has(targetId)) {
                visibleNodeIds.add(sourceId);
            }
        });

        // 3. Filter the full node list based on the visible IDs AND the selected node types
        const filteredNodes = knowledgeGraphData.nodes.filter(n =>
            visibleNodeIds.has(n.id) && selectedNodeTypes.has(n.group)
        );

        // 4. Filter links to only include those connecting two visible nodes
        const finalVisibleIds = new Set(filteredNodes.map(n => n.id));
        const filteredLinks = knowledgeGraphData.links.filter(l =>
            finalVisibleIds.has(l.source.id || l.source) && finalVisibleIds.has(l.target.id || l.target)
        );
        
        updateGraph(filteredNodes, filteredLinks);
    }

    // --- EVENT LISTENERS ---
    document.body.addEventListener('click', function(event) {
        const target = event.target.closest('[data-action]');
        if (!target) return;

        const action = target.dataset.action;
        if (action === 'toggle-children') {
            const parent = d3.select(target.parentNode);
            parent.select('.chevron-icon').classed('expanded', !parent.select('.chevron-icon').classed('expanded'));
            parent.select('.filter-tree-children').classed('collapsed', !parent.select('.filter-tree-children').classed('collapsed'));
        } else if (action === 'filter-all' || action === 'filter-none') {
            const container = d3.select(target.closest('.control-card'));
            const shouldBeChecked = action === 'filter-all';
            container.selectAll('input[type="checkbox"]').property('checked', shouldBeChecked);
            applyFilters();
        } else if (action === 'reset-graph') {
            d3.selectAll('input[type="checkbox"]').property('checked', true);
            d3.selectAll('.filter-tree-children').classed('collapsed', true);
            d3.selectAll('.chevron-icon').classed('expanded', false);
            applyFilters();
        } else if (action === 're-layout-graph') {
            simulation.alpha(1).restart();
        }
    });

    d3.select("#workstream-filter-container").on("change", function(event) {
        const target = event.target;
        if (target.classList.contains('parent-toggle')) {
            const isChecked = target.checked;
            const ws = target.dataset.workstream;
            d3.selectAll(`.category-toggle[data-workstream="${ws}"], .topic-toggle[data-workstream="${ws}"]`).property('checked', isChecked);
        } else if (target.classList.contains('category-toggle')) {
            const isChecked = target.checked;
            const cat = target.dataset.category;
            d3.selectAll(`.topic-toggle[data-category="${cat}"]`).property('checked', isChecked);
        }
        applyFilters();
    });
    d3.select("#nodetype-filter-container").on("change", applyFilters);

    const zoom = d3.zoom().on("zoom", (event) => mainContainer.attr("transform", event.transform));
    svg.call(zoom);

    function wrapText(selection, width) {
        selection.each(function() {
            var text = d3.select(this), words = text.text().split(/\s+/).reverse(), word, line = [], lineNumber = 0, lineHeight = 1.1, y = text.attr("y") || 0, dy = 0, tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop(); tspan.text(line.join(" ")); line = [word];
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
            const numLines = text.selectAll("tspan").size();
            text.selectAll("tspan").attr("y", -( (numLines - 1) * 10 / 2) );
        });
    }

    applyFilters();
});