// js/portco-data.js - Contains the data and simulation logic for the PortCo page.

const FILTER_DATA = {
    workstreams: [ { label: 'Business & Strategy' }, { label: 'Commercial & Customer' }, { label: 'Technology & Operations' }, { label: 'Financial & Risk' }, { label: 'Synthesis' }, { label: 'Value Creation' }, { label: 'Investment Committee' }, { label: 'Final Deliverables' } ],
    statuses: ['In Progress', 'Upcoming', 'Completed', 'Late', 'Blocked']
};

const projectResources = [
    { name: 'Alex (Analyst)', role: 'Internal', hours: 45 },
    { name: 'Brenda (VP)', role: 'Internal', hours: 35 },
    { name: 'EY', role: 'Partner', hours: 50 },
    { name: 'PwC', role: 'Partner', hours: 25 },
    { name: 'Sarah (Associate)', role: 'Internal', hours: 48 },
];

const portcoResponses = {
    // --- GENERIC DILIGENCE PROMPTS (Mainly for TechFlow) ---
    "Replan the project assuming the market data arrives on Thursday.": {
        renderFunc: () => {
            const newPlan = JSON.parse(JSON.stringify(diligencePlan_v3));
            const marketTask = newPlan.find(t => t.id === 'DD-7');
            const dependentTask = newPlan.find(t => t.id === 'DD-8');
            if (marketTask) marketTask.startDay = 4;
            if (dependentTask) dependentTask.startDay = 5;
            const newGanttHTML = generateGanttHTML(newPlan, loadState());
            return `<div class="portfolio-response-card"><p data-typing-text="OK. I have updated the project plan to reflect the delay in the 'Addressable Market' task (DD-7) to Thursday. I also shifted its direct dependent, 'Barriers to Entry' (DD-8). Please review the updated Gantt chart below."></p>${newGanttHTML}</div>`;
        },
        followUpQuestions: ["What is the new critical path?", "Are any resources overallocated now?"]
    },
    "Can we start the analysis 2 days earlier?": {
        renderFunc: () => {
            const newPlan = JSON.parse(JSON.stringify(diligencePlan_v3));
            const tasksToAccelerate = ['DD-40', 'DD-41', 'DD-42', 'DD-43', 'DD-44', 'DD-45', 'DD-46', 'DD-47', 'DD-48', 'DD-49', 'DD-50', 'DD-51', 'DD-52', 'DD-53', 'DD-54', 'DD-55', 'DD-56', 'DD-57', 'DD-58'];
            const statusOverrides = {};
            newPlan.forEach(task => {
                if (tasksToAccelerate.includes(task.id)) {
                    task.startDay -= 2;
                    statusOverrides[task.id] = 'In Progress';
                }
            });
            const newGanttHTML = generateGanttHTML(newPlan, loadState(), statusOverrides);
            return `<div class="portfolio-response-card"><p data-typing-text="I've re-planned the project to start non-dependent analysis workstreams two days earlier. Several key financial and legal tasks are now 'In Progress' today, which should help us get ahead of any potential issues."></p>${newGanttHTML}</div>`;
        },
        followUpQuestions: ["Are there any new resource conflicts with this plan?", "What is the impact on the final IC memo date?"]
    },
    "Draft a polite but firm follow-up email to the CTO of TechFlow regarding the urgent need for GitHub credentials for task DD-16.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Generated Email Draft</h4><div class="email-draft"><p><strong>To:</strong> cto@techflow.com</p><p><strong>Subject:</strong> Following Up: GitHub Access for Technical Diligence (Task DD-16)</p><hr/><p data-typing-text="Hi [CTO Name],\n\nHope you're having a good week. I'm writing to follow up on our request for admin-level access to the company's GitHub repository. This is a critical prerequisite for our 'Code Scan' (DD-16) task, which is now blocking a key part of our technical diligence stream.\n\nCould you please let us know when you might be able to provide the credentials? Any information on the timeline would be very helpful for our planning.\n\nThanks for your help,"></p></div></div>`,
        followUpQuestions: ["Send the email.", "What is the impact of a 5-day delay on this task?"]
    },
    "What is the impact of the 1-day delay on the critical path?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Critical Path Impact Analysis</h4><p class="response-text" data-typing-text="A one-day delay on a non-critical task like 'Comp Incentives Analysis' (DD-4) has no immediate impact on the project's critical path or final delivery date, as there is sufficient slack in its dependent tasks. However, the delay on 'Competitive Dynamics' (DD-10) is more significant. It directly pushes out the 'Market Positioning' task (DD-11) by one day. While this doesn't delay the final IC memo date, it reduces our buffer for the 'Synthesis' phase by one day, increasing the risk if further delays occur in the Commercial workstream."></p></div>`,
        followUpQuestions: ["Which tasks are on the critical path?", "Re-plan the project to mitigate this risk."]
    },
    "Which resources are overallocated next week?": {
        renderFunc: () => {
            const overallocated = projectResources.filter(r => r.hours > 40);
            return `<div class="portfolio-response-card"><h4 class="response-title">Resource Allocation Summary: Next Week</h4><p class="response-text mb-4" data-typing-text="Based on the current plan, ${overallocated.length} resources are projected to be overallocated next week."></p><div class="data-table-container"><table class="data-table"><thead><tr><th>Resource</th><th>Role</th><th>Projected Hours</th><th>Recommendation</th></tr></thead><tbody>${overallocated.map(r => `<tr><td>${r.name}</td><td><span class="status-badge ${r.role === 'Partner' ? 'status-pending' : 'status-progress'}">${r.role}</span></td><td class="text-error">${r.hours}</td><td>${r.role === 'Partner' ? 'Request additional partner staffing.' : 'Offload tasks to Brenda.'}</td></tr>`).join('')}</tbody></table></div></div>`;
        },
        followUpQuestions: ["Draft an email to EY requesting additional staff.", "Which tasks can be offloaded from Alex?"]
    },
    "Assess the critical path impact of a 3-day delay on task DD-16.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Impact Analysis: 3-Day Delay on 'Code Scan' (DD-16)</h4><p class="response-text" data-typing-text="The 'Code Scan' task is a direct dependency for 'Documentation' (DD-17) and 'QA Testing Review' (DD-18). A 3-day delay will cause the following cascade:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><b>DD-17 (Documentation):</b> Start date pushed back 3 days. This is not on the critical path but reduces available slack.</li><li><b>DD-18 (QA Testing Review):</b> Start date pushed back 3 days. This task IS on the critical path for the Technology workstream.</li><li><b>Final Deliverables:</b> This delay consumes all remaining slack in the Technology workstream, putting the final 'Comprehensive DD Report' (DD-68) delivery date at risk. Any further delays in this stream will push out the final deadline.</li></ul><div class="judgement-box warning mt-4"><p class="judgement-title">Recommendation:</p><p class="judgement-text" data-typing-text="We should immediately escalate the request for credentials to the target CEO and simultaneously begin planning for a compressed QA review cycle to mitigate the timeline risk."></p></div></div>`,
        followUpQuestions: ["Draft an escalation email to the target CEO.", "Re-plan the project with a compressed QA cycle."]
    },
    "Draft an internal email to the Head of Marketing at TechFlow, asking for an ETA on the NPS survey reminder campaign for task DD-34.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Generated Email Draft</h4><div class="email-draft"><p><strong>To:</strong> marketing.head@techflow.com</p><p><strong>Subject:</strong> ETA for NPS Survey Reminder Campaign (Task DD-34)</p><hr/><p data-typing-text="Hi [Name],\n\nHope you're well. We've noticed the response rate on the initial NPS survey is still hovering around 15%. To get a statistically significant result for our customer diligence, we'll need to boost that number.\n\nCould you please provide an estimated timeline for when your team can push out a reminder campaign to the non-respondents? This data is a key input for our upcoming analysis.\n\nAppreciate your team's support on this.\n\nBest,"></p></div></div>`,
        followUpQuestions: []
    },
    "Draft an email to the CFO of TechFlow requesting the 2023 K-1 schedules required by EY for task DD-50.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Generated Email Draft</h4><div class="email-draft"><p><strong>To:</strong> cfo@techflow.com</p><p><strong>Subject:</strong> Urgent: 2023 K-1 Schedules for Tax Diligence (DD-50)</p><hr/><p data-typing-text="Hi [CFO Name],\n\nOur external tax advisors, EY, have informed us that they've paused their analysis pending receipt of the complete 2023 K-1 schedules.\n\nThis documentation is critical for completing the tax diligence workstream (DD-50). Could you please have these uploaded to the data room at your earliest convenience?\n\nPlease let us know if you have an estimated timeline for this. Thank you.\n\nBest,"></p></div></div>`,
        followUpQuestions: []
    },
    // --- DILIGENCE HUB WORKSTREAM PROMPTS ---
    "Summarize the key risks for Business & Strategy.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Key Risks: Business & Strategy</h4><p class="response-text" data-typing-text="Based on the initial findings, the key risks in this workstream are:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>Lack of GTM Experience:</strong> The management team is technically proficient but lacks the experience to scale a sales and marketing organization in a PE-backed environment.</li><li><strong>Uncredible Strategic Plan:</strong> The 5-year plan's growth targets are not supported by historical performance or concrete initiatives.</li><li><strong>Competitive Pressure:</strong> The company is being squeezed between larger, feature-rich platforms and more agile, new entrants.</li></ul></div>`,
        recommendedActions: [
            { text: "Draft IC memo slide", description: "Summarize these risks for the Investment Committee.", prompt: "Draft an IC memo slide for this section." },
            { text: "Identify key contacts", description: "List the main points of contact for this workstream.", prompt: "Who are the key contacts for Business & Strategy?" }
        ],
        followUpQuestions: ["Which of these risks has the biggest financial impact?", "What is the mitigation plan for the GTM experience gap?"]
    },
    "Summarize the key risks for Commercial & Customer.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Key Risks: Commercial & Customer</h4><p class="response-text" data-typing-text="The key commercial risks identified are:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>Customer Concentration:</strong> The top 2 customers account for 28% of ARR, and a key contract is up for renewal soon with unfavorable terms.</li><li><strong>Inefficient Funnel:</strong> A significant (80%) drop-off from MQL to SQL indicates a misalignment between sales and marketing.</li><li><strong>Poor Revenue Quality:</strong> A flat pricing model and lack of an expansion-focused sales motion are limiting NRR and LTV.</li></ul></div>`,
        recommendedActions: [
            { text: "Draft IC memo slide", description: "Summarize these risks for the Investment Committee.", prompt: "Draft an IC memo slide for this section." },
            { text: "Identify key contacts", description: "List the main points of contact for this workstream.", prompt: "Who are the key contacts for Commercial & Customer?" }
        ],
        followUpQuestions: ["Model the financial impact of losing the top customer.", "What are the top 3 initiatives to improve funnel conversion?"]
    },
    "Summarize the key risks for Technology & Operations.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Key Risks: Technology & Operations</h4><p class="response-text" data-typing-text="The primary technology and operational risks are:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>Technical Debt:</strong> The legacy monolithic architecture is hindering scalability and developer velocity, requiring a costly and lengthy migration.</li><li><strong>Failed Product Launches:</strong> The last three product launches have generated zero revenue, indicating issues with product-market fit and GTM execution.</li><li><strong>Inefficient R&D:</strong> Developer velocity is well below industry benchmarks, while R&D spend as a percentage of revenue is too high.</li></ul></div>`,
        recommendedActions: [
            { text: "Draft IC memo slide", description: "Summarize these risks for the Investment Committee.", prompt: "Draft an IC memo slide for this section." },
            { text: "Identify key contacts", description: "List the main points of contact for this workstream.", prompt: "Who are the key contacts for Technology & Operations?" }
        ],
        followUpQuestions: ["What is the estimated cost to remediate the technical debt?", "Develop a post-mortem plan for the failed launches."]
    },
    "Summarize the key risks for Financial & Risk.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Key Risks: Financial & Risk</h4><p class="response-text" data-typing-text="The key financial risks identified are:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>Non-Standard ARR Composition:</strong> The reported ARR is inflated with non-recurring and non-standard revenue streams, which will lead to a significant valuation adjustment.</li><li><strong>Inconsistent Pricing:</strong> Wide variance in maintenance fees suggests a lack of pricing discipline, impacting revenue predictability.</li><li><strong>Aggressive Revenue Recognition:</strong> The policy of recognizing some perpetual license revenue over 18 months is non-standard and inflates short-term performance.</li></ul></div>`,
        recommendedActions: [
            { text: "Draft IC memo slide", description: "Summarize these risks for the Investment Committee.", prompt: "Draft an IC memo slide for this section." },
            { text: "Identify key contacts", description: "List the main points of contact for this workstream.", prompt: "Who are the key contacts for Financial & Risk?" }
        ],
        followUpQuestions: ["What is the adjusted 'true' ARR for TechFlow?", "Draft an email to the CFO about the revenue recognition policy."]
    },
    "Draft an IC memo slide for this section.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Generated IC Memo Slide</h4><div class="board-slide"><div class="slide-title">Key Diligence Risks & Mitigations</div><p class="text-sm text-secondary mb-4" data-typing-text="This is a sample slide based on the highest priority risks identified across all workstreams."></p><ul><li><strong>Risk:</strong> Customer Concentration (Top 2 customers = 28% of ARR).<br/><strong>Mitigation:</strong> Secure early renewal of largest contract pre-close; launch customer diversification plan in first 100 days.</li><li><strong>Risk:</strong> Significant Technical Debt (Legacy Monolith).<br/><strong>Mitigation:</strong> Earmark $4.5M of investment for a 2-year migration to microservices; hire new VP of Engineering.</li><li><strong>Risk:</strong> Non-Standard ARR Composition.<br/><strong>Mitigation:</strong> Re-state financials to reflect true recurring revenue; adjust valuation model accordingly.</li></ul></div></div>`,
        followUpQuestions: ["Export this slide to PowerPoint.", "Add the 'Failed Product Launches' risk to this slide."]
    },
    "Who are the key contacts for Business & Strategy?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Key Contacts: Business & Strategy</h4><div class="data-table-container"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Area of Expertise</th></tr></thead><tbody><tr><td>John Carter</td><td>CEO, TechFlow</td><td>Product Vision & Company History</td></tr><tr><td>Sarah Mills</td><td>COO, TechFlow</td><td>Organizational Structure & HR</td></tr><tr><td>David Chen</td><td>Partner, Market Insights LLC</td><td>Third-Party Market Analysis</td></tr></tbody></table></div></div>`,
        followUpQuestions: ["Draft an email to John Carter to schedule an interview.", "What were the key takeaways from the Sarah Mills interview?"]
    },
    "Who are the key contacts for Commercial & Customer?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Key Contacts: Commercial & Customer</h4><div class="data-table-container"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Area of Expertise</th></tr></thead><tbody><tr><td>Jessica Ray</td><td>CRO, TechFlow</td><td>Sales Strategy & Pipeline</td></tr><tr><td>Michael Brown</td><td>Head of Marketing, TechFlow</td><td>Lead Generation & Brand</td></tr><tr><td>Emily White</td><td>Director of CS, TechFlow</td><td>Customer Health & Renewals</td></tr></tbody></table></div></div>`,
        followUpQuestions: ["Draft an email to Jessica Ray about the sales funnel.", "What is Emily White's perspective on the high churn rate?"]
    },
    "Who are the key contacts for Technology & Operations?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Key Contacts: Technology & Operations</h4><div class="data-table-container"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Area of Expertise</th></tr></thead><tbody><tr><td>Alex Johnson</td><td>CTO, TechFlow</td><td>Architecture & Roadmap</td></tr><tr><td>Priya Singh</td><td>VP of Engineering, TechFlow</td><td>Development Process & Team Velocity</td></tr><tr><td>Chris Green</td><td>Lead Architect, TechFlow</td><td>Technical Debt & Migration Plan</td></tr></tbody></table></div></div>`,
        followUpQuestions: ["Draft an email to Alex Johnson about the migration plan.", "What are Priya Singh's thoughts on the R&D inefficiency?"]
    },
    "Who are the key contacts for Financial & Risk?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Key Contacts: Financial & Risk</h4><div class="data-table-container"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Area of Expertise</th></tr></thead><tbody><tr><td>Laura Davis</td><td>CFO, TechFlow</td><td>Financial Statements & Forecast</td></tr><tr><td>Mark Wilson</td><td>Controller, TechFlow</td><td>Accounting Policies & QoE</td></tr><tr><td>Robert Lee</td><td>Partner, EY</td><td>Third-Party Tax & Audit</td></tr></tbody></table></div></div>`,
        followUpQuestions: ["Draft an email to Laura Davis about the ARR composition.", "What were the key findings from the EY audit report?"]
    },
    "Model the financial impact of 'Non-Standard ARR Composition'": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Financial Impact Simulation: ARR Re-statement</h4><p class="response-text mb-4" data-typing-text="This model simulates the impact of adjusting TechFlow's reported ARR to reflect only true, recurring subscription revenue."></p><div class="data-table-container"><table class="data-table"><thead><tr><th>Line Item</th><th>Management Case</th><th>Adjustment</th><th>Base Case</th></tr></thead><tbody><tr><td>Reported ARR</td><td>$12,000,000</td><td></td><td>$12,000,000</td></tr><tr><td>Less: Perpetual License Amortization</td><td></td><td class="text-error">($2,760,000)</td><td></td></tr><tr><td>Less: Legacy Maintenance Fees</td><td></td><td class="text-error">($2,160,000)</td><td></td></tr><tr class="font-bold"><td>Adjusted "True" ARR</td><td></td><td></td><td>$7,080,000</td></tr><tr><td>Implied Valuation (@ 8x)</td><td>$96,000,000</td><td></td><td class="text-error font-bold">$56,640,000</td></tr></tbody></table></div></div>`,
        followUpQuestions: ["Update the investment model with this adjustment.", "What multiple should we apply to the maintenance revenue stream?"]
    },

    // --- CLOUDVANTAGE SPECIFIC PROMPTS ---
    "Generate a risk mitigation plan for the AI feature delay.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Risk Mitigation Plan: AI Feature Delay</h4><p class="response-text" data-typing-text="The AI-Powered Feature is currently 'At Risk' due to technical complexities in integrating with the legacy NewCo data models. Here is a proposed mitigation plan:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>De-scope MVP:</strong> Reduce the initial launch scope to focus only on the core predictive analytics feature. Defer the NLP and reporting components to Phase 2.</li><li><strong>Dedicated Squad:</strong> Assign a dedicated 'Tiger Team' of 2 senior CloudVantage engineers and 1 NewCo data architect to resolve the integration blockers.</li><li><strong>Weekly Steering Committee:</strong> Institute a weekly check-in with the Head of Product and Engineering to monitor progress and remove roadblocks.</li></ul></div>`,
        recommendedActions: [
            { text: "Draft board update on new plan", description: "Create a concise summary for the board about the revised AI feature strategy.", prompt: "Draft a board update on this new plan." },
            { text: "Estimate budget impact", description: "Analyze the financial implications of the delay and the new plan.", prompt: "What is the budget impact of the AI feature delay?" }
        ],
        followUpQuestions: ["Who is the lead engineer on the AI feature?", "What is the new projected launch date?"]
    },
    "Analyze the key drivers of our Net Revenue Retention.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">NRR Driver Analysis (128%)</h4><p class="response-text" data-typing-text="The exceptional 128% NRR is primarily driven by two factors:"></p><ol class="list-decimal pl-6 mt-2 text-secondary"><li><strong>Expansion to Enterprise Tier:</strong> 60% of the expansion ARR came from 15 mid-market customers upgrading to the new Enterprise pricing tier.</li><li><strong>Cross-sell of 'Analytics Suite':</strong> 30% of the expansion ARR was generated by cross-selling the new Analytics module into the existing customer base.</li></ol><p class="response-text mt-2" data-typing-text="Gross Revenue Retention remains healthy at 96%, indicating low logo churn."></p></div>`,
        recommendedActions: [
            { text: "Draft board update on NRR", description: "Summarize this outperformance for the next board presentation.", prompt: "Draft a board update on the NRR outperformance." },
            { text: "Identify next upsell candidates", description: "Find customers who fit the profile of recent upgraders.", prompt: "Which customers are the best candidates for the next upsell campaign?" }
        ],
        followUpQuestions: ["What is the gross retention of the legacy NewCo customers?", "How does our NRR compare to last quarter?"]
    },
    "Prepare QBR materials for the NewCo acquisition.": {
        renderFunc: () => `<div class="portfolio-response-card">
            <h4 class="response-title">QBR Summary: NewCo Integration & Performance</h4>
            <div class="board-slide">
                <div class="slide-title">Top-Line Status: NewCo Integration</div>
                <p class="text-sm text-secondary mb-4" data-typing-text="The integration of NewCo is <strong>On Track</strong> against the 100-day plan. Key highlights include the successful migration of 95% of customers to the CloudVantage billing system and the launch of the first joint marketing campaign. Headcount synergies are tracking ahead of schedule."></p>
                <div class="kpi-grid" style="grid-template-columns: repeat(3, 1fr);">
                    <div class="kpi-card !p-3"><p class="kpi-label">Synergy Realized</p><p class="kpi-value">$1.2M</p><p class="kpi-detail text-success">vs. $1.0M Target</p></div>
                    <div class="kpi-card !p-3"><p class="kpi-label">Cross-Sell ARR</p><p class="kpi-value">$250k</p><p class="kpi-detail text-success">New ARR</p></div>
                    <div class="kpi-card !p-3"><p class="kpi-label">Customer Retention</p><p class="kpi-value">98%</p><p class="kpi-detail">Post-Acquisition</p></div>
                </div>
                <p class="text-sm text-secondary mt-4"><strong>Focus for Next Quarter:</strong> Accelerate cross-sell velocity and finalize the joint product roadmap.</p>
            </div>
        </div>`,
        recommendedActions: [
            { text: "Analyze renewal uplift opportunities", description: "Drill down into the renewal book to identify pricing uplift potential.", prompt: "Analyze NewCo renewal uplift opportunities." },
            { text: "Draft a revised sales comp plan", description: "Create a new compensation plan that incentivizes cross-selling NewCo products.", prompt: "Draft a revised sales comp plan." }
        ],
        followUpQuestions: ["Who are the key employees to retain at NewCo?", "What has been the customer feedback on the acquisition?"]
    },
    "Let's process renewals for our newco acquisition.": {
        renderFunc: () => `<div class="portfolio-response-card">
            <p class="response-text" data-typing-text="Of course. I've analyzed the renewal portfolio from the NewCo acquisition against our firm's pricing playbook. Based on customer segment, current contract value, and their success circumstance, I've identified several cohorts for specific price uplifts."></p>
            <div class="judgement-box success mt-4">
                <p class="judgement-title">Playbook Best Practice:</p>
                <p class="judgement-text" data-typing-text="My recommendation is a **20% uplift** for underpriced Gold customers in 'Business Success', **10%** for other Gold customers, **10%** for Silver customers who have achieved 'Technical Success', and a standard **25%** uplift for all Bronze segment customers to align them with our standard pricing. Shall I move forward?"></p>
            </div>
        </div>`,
        followUpQuestions: ["Yes, please generate conversation guides for each segment action.", "Which customers are at the highest risk of churning with this increase?"]
    },
    "Yes, please generate conversation guides for each segment action.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Conversation Guides Generated</h4><p class="response-text" data-typing-text="I'm generating conversation guides for each customer segment with the latest product value additions included. This will include specific talking points for:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li>Gold segment (20% uplift for underpriced + Business Success)</li><li>Gold segment (10% standard uplift)</li><li>Silver segment (10% uplift with Technical Success)</li><li>Bronze segment (25% uplift)</li></ul><p class="response-text mt-2" data-typing-text="The documents will be displayed in the main panel once complete and assigned to the appropriate Account Managers."></p></div>`,
        followUpQuestions: ["Assign these renewal targets to the account owners.", "What is the total expected ARR uplift from this plan?"]
    },
    "Apply the recommended uplifts and show the financial impact.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Financial Impact of NewCo Price Uplift</h4><div class="data-table-container"><table class="data-table"><thead><tr><th>Segment</th><th>Current ARR</th><th>Uplift %</th><th>New ARR</th><th>ARR Increase</th></tr></thead><tbody><tr><td>Gold (Success)</td><td>$3,245,000</td><td>20%</td><td>$3,894,000</td><td class="text-success">$649,000</td></tr><tr><td>Silver (Success)</td><td>$925,000</td><td>10%</td><td>$1,017,500</td><td class="text-success">$92,500</td></tr><tr><td>Bronze</td><td>$220,000</td><td>25%</td><td>$275,000</td><td class="text-success">$55,000</td></tr><tr class="font-bold"><td>Total</td><td>$4,390,000</td><td></td><td>$5,186,500</td><td class="text-success">$796,500</td></tr></tbody></table></div><p class="response-text mt-4" data-typing-text="Executing this pricing playbook on the identified segments would result in an additional <strong>$796,500</strong> in ARR, an 18% increase on this cohort."></p></div>`,
        followUpQuestions: ["Generate conversation guides for the sales team.", "Which customers are at the highest risk of churning with this increase?"]
    },
    "Who is the lead engineer on the AI feature?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Lead Engineer: AI-Powered Feature</h4><p class="response-text" data-typing-text="The lead engineer for the AI-Powered Feature is <strong>David Lee</strong>. He was a principal engineer at NewCo and has the most expertise on the data models that are causing the integration complexities."></p></div>`,
        followUpQuestions: ["What is David Lee's current workload?", "Draft an email to David to schedule a technical review."]
    },
    "Draft a board update on the NRR outperformance.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Generated Board Update Slide</h4><div class="board-slide"><div class="slide-title">Q2 Key Highlight: NRR Outperformance</div><ul data-typing-text="<li>CloudVantage achieved a Net Revenue Retention of <strong>128%</strong> in Q2, significantly exceeding the target of 125% and top-quartile benchmarks.</li><li>This was driven by a <strong>60%</strong> contribution from mid-market customers upgrading to the new Enterprise tier and a <strong>30%</strong> contribution from cross-selling the 'Analytics Suite'.</li><li>This result validates our GTM strategy and demonstrates strong product stickiness and pricing power.</li>"></ul></div></div>`,
        followUpQuestions: ["Export this slide to PowerPoint.", "Add a chart showing NRR trend."]
    },
    "What is the budget impact of the AI feature delay?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Budget Impact: AI Feature Delay</h4><p class="response-text mb-4" data-typing-text="The delay and the proposed mitigation plan are projected to have the following impact on the H2 budget:"></p><div class="data-table-container"><table class="data-table"><thead><tr><th>Item</th><th>Original Budget</th><th>Revised Forecast</th><th>Variance</th></tr></thead><tbody><tr><td>R&D Headcount</td><td>$2,500,000</td><td>$2,850,000</td><td class="text-error">($350,000)</td></tr><tr><td>Infrastructure Costs</td><td>$400,000</td><td>$450,000</td><td class="text-error">($50,000)</td></tr><tr class="font-bold"><td>Total Impact</td><td>$2,900,000</td><td>$3,300,000</td><td class="text-error">($400,000)</td></tr></tbody></table></div><p class="response-text mt-4" data-typing-text="The variance is primarily due to the need for dedicated senior engineering resources and additional cloud computing resources for data model testing."></p></div>`,
        followUpQuestions: ["Can we reallocate budget from other areas to cover this?", "What is the ROI on this additional spend?"]
    },
    // --- NEW FOLLOW-UP RESPONSES ---
    "What are the dependencies for the 'Audited Financials' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Dependencies for DD-48: Audited Financials</h4><p class="response-text" data-typing-text="This task has one primary predecessor:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>DD-40: Financial Statement Analysis:</strong> This task must be completed first to develop a baseline understanding of the company's financials before diving into the audited details. The current status of DD-40 is <strong>Completed</strong>.</li></ul></div>`,
        followUpQuestions: ["Who is assigned to the 'Audited Financials' task?"]
    },
    "Who is assigned to the 'Audited Financials' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Team for DD-48: Audited Financials</h4><p class="response-text" data-typing-text="The following team members are assigned to this task:"></p><div class="data-table-container mt-2"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Responsibility</th></tr></thead><tbody><tr><td>Brenda (VP)</td><td>Internal</td><td>Overall review and sign-off.</td></tr><tr><td>Sarah (Associate)</td><td>Internal</td><td>Detailed analysis and summary report.</td></tr><tr><td>PwC</td><td>Partner</td><td>Provide audited statements and answer clarifying questions.</td></tr></tbody></table></div></div>`,
        followUpQuestions: ["What is the current status of this task?"]
    },
    "What are the dependencies for the 'Architecture Review' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Dependencies for DD-13: Architecture Review</h4><p class="response-text" data-typing-text="This task is dependent on the completion of the following predecessor:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>DD-12: Development Process:</strong> A full understanding of the SDLC and release cadence is required before the architecture can be properly assessed for scalability and efficiency. The current status of DD-12 is <strong>In Progress</strong>.</li></ul></div>`,
        followUpQuestions: ["Who is assigned to the 'Architecture Review' task?", "What is the status of the DD-12 deliverable?"]
    },
    "Who is assigned to the 'Architecture Review' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Team for DD-13: Architecture Review</h4><p class="response-text" data-typing-text="This is a specialized task led by our internal and external technology experts:"></p><div class="data-table-container mt-2"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Responsibility</th></tr></thead><tbody><tr><td>Peter Wood</td><td>Sr. Director, Digital Value Creation</td><td>Lead reviewer, focus on scalability and PE value levers.</td></tr><tr><td>AWS</td><td>Partner</td><td>Provide Well-Architected Framework review and cloud-readiness assessment.</td></tr><tr><td>Alex Johnson (CTO)</td><td>Target</td><td>Provide documentation and answer technical questions.</td></tr></tbody></table></div></div>`,
        followUpQuestions: ["What are the dependencies for the 'Architecture Review' task?", "Draft an email to the CTO about the DD-12 deliverable."]
    }
};

// --- DATA FOR CLOUDVANTAGE PAGE ---

const cloudVantageKpis = [
    { label: 'ARR', value: '$78M', change: '+4% QoQ', changeColor: 'var(--status-success)' },
    { label: 'Net Revenue Retention', value: '128%', change: '+3% vs Target', changeColor: 'var(--status-success)' },
    { label: 'EBITDA Margin', value: '31%', change: '-1% vs Target', changeColor: 'var(--status-error)' },
    { label: 'Rule of 40', value: '58%', change: 'Healthy', changeColor: 'var(--status-success)' }
];

const cloudVantagePrograms = [
    { name: 'Enterprise GTM Strategy', dept: 'Sales', status: 'On Track', statusClass: 'status-completed', progress: 75 },
    { name: 'ABM Campaign Launch', dept: 'Marketing', status: 'On Track', statusClass: 'status-completed', progress: 90 },
    { name: 'Channel Partner Program', dept: 'Partners', status: 'At Risk', statusClass: 'status-warning', progress: 45 },
    { name: 'Platform Scalability Initiative', dept: 'Engineering', status: 'On Track', statusClass: 'status-completed', progress: 60 },
    { name: 'AI-Powered Feature Dev', dept: 'Product', status: 'Behind', statusClass: 'status-error', progress: 30 },
    { name: 'Leadership Development', dept: 'HR', status: 'On Track', statusClass: 'status-completed', progress: 85 }
];

const portcoPageData = {
    'cloudvantage': {
        briefing: {
            title: "Q2 Performance Briefing: CloudVantage",
            text: "CloudVantage is <strong>Healthy</strong> and tracking ahead of its Q2 plan. Net Revenue Retention is exceptionally strong at <strong>128%</strong>, driven by the new enterprise GTM strategy. However, the <strong>AI-Powered Feature development is now 'At Risk'</strong> due to technical complexities, which could impact the critical Q4 launch."
        },
        actions: [
            { text: "Generate risk mitigation plan for AI feature", description: "Use ARIA to create a plan to get the delayed AI feature back on track.", prompt: "Generate a risk mitigation plan for the AI feature delay." },
            { text: "Analyze drivers of 128% NRR", description: "Ask ARIA to break down the key factors contributing to the strong Net Revenue Retention.", prompt: "Analyze the key drivers of our Net Revenue Retention." },
            { text: "Review 'At Risk' Channel Partner Program", description: "See the detailed status of the partner program in the data view below.", specialAction: "scroll-to-programs" }
        ],
        prompts: ["Prepare QBR materials for the NewCo acquisition.", "Who is the lead engineer on the AI feature?", "Draft a board update on the NRR outperformance.", "What is the budget impact of the AI feature delay?"]
    }
};