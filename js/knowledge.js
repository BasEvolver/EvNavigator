// js/knowledge.js - Redesigned for a complex graph experience

document.addEventListener('DOMContentLoaded', async () => {
    await loadSharedComponents();
    if (typeof knowledgeGraphData === 'undefined') {
        console.error("CRITICAL ERROR: knowledge-data.js is not loaded.");
        return;
    }
    
    // --- D3 SETUP ---
    const graphContainer = document.getElementById('knowledge-graph-card');
    const width = graphContainer.clientWidth;
    const height = graphContainer.clientHeight;
    const svg = d3.select(graphContainer).append("svg").attr("width", width).attr("height", height);

    // --- NEW: Updated Group Definitions & Colors ---
    const appColors = {
        input_document: 'var(--text-secondary)',
        task: 'var(--accent-teal)',
        output_report: 'var(--status-success)',
        final_output: 'var(--accent-blue)',
    };
    const color = d3.scaleOrdinal(Object.keys(appColors), Object.values(appColors));

    svg.append('defs').append('marker').attr('id', 'arrow').attr('viewBox', '0 -5 10 10')
        .attr('refX', 25).attr('markerWidth', 7).attr('markerHeight', 7).attr('orient', 'auto-start-reverse')
        .append('path').attr('d', 'M0,-5L10,0L0,5').style('fill', 'var(--text-muted)');

    // --- UI CONTROLS (Legend & Filters) ---
    const legendData = [
        { label: "Diligence Task", group: "task", shape: "rect" },
        { label: "Final Output", group: "final_output", shape: "circle" },
        { label: "Major Report", group: "output_report", shape: "circle" },
        { label: "Input Document", group: "input_document", shape: "path" }
    ];
    const filterData = legendData.map(d => ({...d, id: d.group}));

    function createControlPanel(containerId, title, data, type) {
        const panel = d3.select(containerId);
        panel.html(''); // Clear previous content
        panel.append("h3").attr("class", "control-title").text(title);
        const items = panel.selectAll(".item").data(data).join("div").attr("class", `${type}-item`);
        if (type === 'filter') {
            items.append("input").attr("type", "checkbox").attr("id", d => `check-${d.id}`).attr("value", d => d.id).property("checked", true).on("change", applyFilters);
            items.append("label").attr("for", d => `check-${d.id}`).text(d => d.label);
        } else {
            const legendSvg = items.append("svg").attr("width", 20).attr("height", 20);
            legendSvg.each(function(d) {
                const g = d3.select(this);
                if (d.shape === 'rect') g.append('rect').attr('width', 15).attr('height', 15).attr('x', 0).attr('y', 2.5).attr('rx', 3).style("fill", color(d.group));
                else if (d.shape === 'circle') g.append('circle').attr('r', 8).attr('cx', 8).attr('cy', 10).style("fill", color(d.group));
                else if (d.shape === 'path') g.append('path').attr('d', `M 0,0 L 12,0 L 16,4 L 16,16 L 0,16 Z M 12,0 L 12,4 L 16,4 Z`).style("fill", color(d.group)).attr("transform", "scale(0.8) translate(0,2)");
            });
            items.append("span").text(d => d.label);
        }
    }
    createControlPanel("#legend-container", "Legend", legendData, "legend");
    createControlPanel("#filter-container", "Display Controls", filterData, "filter");

    // --- SIMULATION & DRAWING ---
    const mainContainer = svg.append("g");
    const linkGroup = mainContainer.append("g").attr("class", "links");
    const nodeGroup = mainContainer.append("g").attr("class", "nodes");

    let link, node;
    // --- NEW: Tuned Simulation Parameters ---
    const simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.id).distance(180).strength(0.2))
        .force("charge", d3.forceManyBody().strength(-900))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(d => (d.w / 2 || d.size || 20) + 25).strength(0.9))
        .on("tick", ticked);

    function updateGraph(nodesData, linksData) {
        const linkedByIndex = {};
        linksData.forEach(d => {
            linkedByIndex[`${d.source.id || d.source},${d.target.id || d.target}`] = 1;
        });
        function areNodesConnected(a, b) {
            return linkedByIndex[`${a.id},${b.id}`] || linkedByIndex[`${b.id},${a.id}`] || a.id === b.id;
        }

        link = linkGroup.selectAll(".link").data(linksData, d => `${d.source.id}-${d.target.id}`).join("path").attr("class", "link").attr("marker-end", "url(#arrow)");

        node = nodeGroup.selectAll(".node").data(nodesData, d => d.id)
            .join(enter => {
                const g = enter.append("g").attr("class", "node").call(drag(simulation));
                g.append(d => { // --- NEW: Shape logic based on group ---
                    if (d.group === 'task') return document.createElementNS(d3.namespaces.svg, 'rect');
                    if (['output_report', 'final_output'].includes(d.group)) return document.createElementNS(d3.namespaces.svg, 'circle');
                    if (d.group === 'input_document') return document.createElementNS(d3.namespaces.svg, 'path');
                    return document.createElementNS(d3.namespaces.svg, 'circle'); // Fallback
                });
                g.append("text").text(d => d.label);
                return g;
            });

        node.each(function(d) {
            const g = d3.select(this);
            g.select('rect').attr('width', d.w || 150).attr('height', d.h || 50).attr('x', -(d.w || 150) / 2).attr('y', -(d.h || 50) / 2).attr('rx', 8).style("fill", color(d.group));
            g.select('circle').attr('r', d.size || 25).style("fill", color(d.group));
            const docPath = `M -14,-18 H 6 V -14 H 10 V -18 L 16,-12 V 18 H -14 Z M 10,-14 V -12 H 6 Z`;
            g.select('path').attr('d', docPath).style("fill", color(d.group));
            
            g.select("text").call(wrapText, (d.w || 140) - 10).style("fill", 'white').style("font-size", "11px").style("font-weight", "600");
        });

        node.on('mouseover', (event, d) => {
            node.classed('faded', o => !areNodesConnected(d, o));
            link.classed('faded', l => d.id !== (l.source.id || l.source) && d.id !== (l.target.id || l.target));
            link.classed('highlighted', l => d.id === (l.source.id || l.source) || d.id === (l.target.id || l.target));
        }).on('mouseout', () => {
            node.classed('faded', false);
            link.classed('faded', false);
            link.classed('highlighted', false);
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

    // --- NEW: Detail Pane Logic (Replaces Modal) ---
    const detailPaneContent = document.getElementById('detail-pane-content');
    function showDetails(d) {
        detailPaneContent.innerHTML = `
            <div class="detail-header" style="border-left-color: ${color(d.group)};">
                <h3 class="detail-title">${d.label}</h3>
                <p class="detail-group">${d.group.replace(/_/g, ' ').toUpperCase()}</p>
            </div>
            <div class="detail-body">
                <div class="detail-section">
                    <strong>Description:</strong>
                    <p>${d.description || 'N/A'}</p>
                </div>
                <div class="detail-section">
                    <strong>Location:</strong>
                    <p>${d.location || 'N/A'}</p>
                </div>
                <div class="detail-section">
                    <strong>Priority / Status:</strong>
                    <p>${d.priority || d.workstream || 'N/A'}</p>
                </div>
            </div>
        `;
    }

    // --- NEW: Search Logic ---
    const searchInput = document.getElementById('knowledge-search-input');
    const clearSearchBtn = document.getElementById('knowledge-search-clear');
    
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        clearSearchBtn.style.display = searchTerm ? 'block' : 'none';

        if (!searchTerm) {
            node.classed('faded', false).classed('highlighted-search', false);
            return;
        }
        
        node.classed('faded', true).classed('highlighted-search', false);
        
        node.filter(d => d.label.toLowerCase().includes(searchTerm))
            .classed('faded', false)
            .classed('highlighted-search', true);
    }
    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        handleSearch();
    });

    // --- FILTERING ---
    function applyFilters() {
        const selectedGroups = new Set();
        d3.selectAll("#filter-container input:checked").each(function() {
            selectedGroups.add(d3.select(this).attr("value"));
        });
        const filteredNodes = knowledgeGraphData.nodes.filter(n => selectedGroups.has(n.group));
        const visibleNodeIds = new Set(filteredNodes.map(n => n.id));
        const filteredLinks = knowledgeGraphData.links.filter(l => visibleNodeIds.has(l.source) && visibleNodeIds.has(l.target));
        updateGraph(filteredNodes, filteredLinks);
    }

    // --- ZOOM ---
    const zoom = d3.zoom().on("zoom", (event) => mainContainer.attr("transform", event.transform));
    svg.call(zoom);

    // --- TEXT WRAPPING UTILITY ---
    function wrapText(selection, width) {
        selection.each(function() {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word, line = [], lineNumber = 0, lineHeight = 1.1,
                y = text.attr("y") || 0, dy = 0,
                tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
            const numLines = text.selectAll("tspan").size();
            text.selectAll("tspan").attr("y", -( (numLines - 1) * 10 / 2) );
        });
    }

    // --- INITIAL DRAW ---
    // NEW: Hide documents by default for a cleaner initial view
    d3.select("#check-input_document").property("checked", false);
    applyFilters();
});