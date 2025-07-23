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
    "Replan the project assuming the market data arrives on Thursday.": {
        renderFunc: () => {
            const newPlan = JSON.parse(JSON.stringify(diligencePlan_v3));
            const marketTask = newPlan.find(t => t.id === 'DD-7');
            const dependentTask = newPlan.find(t => t.id === 'DD-8');
            if (marketTask) marketTask.startDay = 4; // Assuming Thursday is Day 4
            if (dependentTask) dependentTask.startDay = 5;
            const newGanttHTML = generateGanttHTML(newPlan, loadState());
            return `<div class="portfolio-response-card"><p>OK. I have updated the project plan to reflect the delay in the 'Addressable Market' task (DD-7) to Thursday. I also shifted its direct dependent, 'Barriers to Entry' (DD-8). Please review the updated Gantt chart below.</p>${newGanttHTML}</div>`;
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
                    // Override status to 'In Progress' because we are simulating starting them now.
                    statusOverrides[task.id] = 'In Progress';
                }
            });

            const newGanttHTML = generateGanttHTML(newPlan, loadState(), statusOverrides);
            return `<div class="portfolio-response-card"><p>That's a great suggestion. I've re-planned the project to start the non-dependent analysis workstreams two days earlier. As you can see in the updated Gantt chart, several key financial and legal tasks are now 'In Progress' today, which should help us get ahead of any potential issues.</p>${newGanttHTML}</div>`;
        },
        followUpQuestions: ["Are there any new resource conflicts with this plan?", "What is the impact on the final IC memo date?", "Which tasks still cannot be moved?"]
    },
    "Draft a polite but firm follow-up email to the CTO of TechFlow regarding the urgent need for GitHub credentials for task DD-16.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Generated Email Draft</h4><div class="email-draft"><p><strong>To:</strong> cto@techflow.com</p><p><strong>Subject:</strong> Following Up: GitHub Access for Technical Diligence (Task DD-16)</p><hr/><p>Hi [CTO Name],</p><p>Hope you're having a good week. I'm writing to follow up on our request for admin-level access to the company's GitHub repository. This is a critical prerequisite for our 'Code Scan' (DD-16) task, which is now blocking a key part of our technical diligence stream.</p><p>Could you please let us know when you might be able to provide the credentials? Any information on the timeline would be very helpful for our planning.</p><p>Thanks for your help,</p></div></div>`,
        followUpQuestions: ["Send the email.", "What is the impact of a 5-day delay on this task?"]
    },
    "Provide me with a current overview and understanding of the 'Audited Financials' task.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Status Update: DD-48 Audited Financials</h4><p class="response-text">This task involves a detailed review of the audited financial statements for the past three fiscal years, including any management letter comments from the auditor (PwC). The primary goal is to verify the accuracy of reported numbers and identify any areas of concern flagged by the auditors, which could impact our Quality of Earnings adjustments. The task is currently marked 'Upcoming' and is dependent on the completion of the initial 'Financial Statement Analysis' (DD-40).</p></div>`,
        followUpQuestions: ["Summarize the key findings from last year's audit.", "Have there been any auditor changes in the last 5 years?"]
    },
    "What is the impact of the 1-day delay on the critical path?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Critical Path Impact Analysis</h4><p class="response-text">A one-day delay on a non-critical task like 'Comp Incentives Analysis' (DD-4) has no immediate impact on the project's critical path or final delivery date, as there is sufficient slack in its dependent tasks. However, the delay on 'Competitive Dynamics' (DD-10) is more significant. It directly pushes out the 'Market Positioning' task (DD-11) by one day. While this doesn't delay the final IC memo date, it reduces our buffer for the 'Synthesis' phase by one day, increasing the risk if further delays occur in the Commercial workstream.</p></div>`,
        followUpQuestions: ["Which tasks are on the critical path?", "Re-plan the project to mitigate this risk."]
    },
    "Which resources are overallocated next week?": {
        renderFunc: () => {
            const overallocated = projectResources.filter(r => r.hours > 40);
            return `<div class="portfolio-response-card">
                        <h4 class="response-title">Resource Allocation Summary: Next Week</h4>
                        <p class="response-text mb-4">Based on the current plan, ${overallocated.length} resources are projected to be overallocated next week.</p>
                        <div class="data-table-container">
                            <table class="data-table">
                                <thead><tr><th>Resource</th><th>Role</th><th>Projected Hours</th><th>Recommendation</th></tr></thead>
                                <tbody>
                                ${overallocated.map(r => `
                                    <tr>
                                        <td>${r.name}</td>
                                        <td><span class="status-badge ${r.role === 'Partner' ? 'status-pending' : 'status-progress'}">${r.role}</span></td>
                                        <td class="text-error">${r.hours}</td>
                                        <td>${r.role === 'Partner' ? 'Request additional partner staffing.' : 'Offload tasks to Brenda.'}</td>
                                    </tr>
                                `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>`;
        },
        followUpQuestions: ["Draft an email to EY requesting additional staff.", "Which tasks can be offloaded from Alex?"]
    },
    "Assess the critical path impact of a 3-day delay on task DD-16.": {
        renderFunc: () => `<div class="portfolio-response-card">
            <h4 class="response-title">Impact Analysis: 3-Day Delay on 'Code Scan' (DD-16)</h4>
            <p class="response-text">The 'Code Scan' task is a direct dependency for 'Documentation' (DD-17) and 'QA Testing Review' (DD-18). A 3-day delay will cause the following cascade:
            <ul class="list-disc pl-6 mt-2 text-secondary">
                <li><b>DD-17 (Documentation):</b> Start date pushed back 3 days. This is not on the critical path but reduces available slack.</li>
                <li><b>DD-18 (QA Testing Review):</b> Start date pushed back 3 days. This task IS on the critical path for the Technology workstream.</li>
                <li><b>Final Deliverables:</b> This delay consumes all remaining slack in the Technology workstream, putting the final 'Comprehensive DD Report' (DD-68) delivery date at risk. Any further delays in this stream will push out the final deadline.</li>
            </ul>
            </p>
            <div class="judgement-box warning mt-4">
                <p class="judgement-title">Recommendation:</p>
                <p class="judgement-text">We should immediately escalate the request for credentials to the target CEO and simultaneously begin planning for a compressed QA review cycle to mitigate the timeline risk.</p>
            </div>
        </div>`,
        followUpQuestions: ["Draft an escalation email to the target CEO.", "Re-plan the project with a compressed QA cycle."]
    },
    "Draft an internal email to the Head of Marketing at TechFlow, asking for an ETA on the NPS survey reminder campaign for task DD-34.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Generated Email Draft</h4><div class="email-draft"><p><strong>To:</strong> marketing.head@techflow.com</p><p><strong>Subject:</strong> ETA for NPS Survey Reminder Campaign (Task DD-34)</p><hr/><p>Hi [Name],</p><p>Hope you're well. We've noticed the response rate on the initial NPS survey is still hovering around 15%. To get a statistically significant result for our customer diligence, we'll need to boost that number.</p><p>Could you please provide an estimated timeline for when your team can push out a reminder campaign to the non-respondents? This data is a key input for our upcoming analysis.</p><p>Appreciate your team's support on this.</p><p>Best,</p></div></div>`,
        followUpQuestions: []
    },
    "Draft an email to the CFO of TechFlow requesting the 2023 K-1 schedules required by EY for task DD-50.": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Generated Email Draft</h4><div class="email-draft"><p><strong>To:</strong> cfo@techflow.com</p><p><strong>Subject:</strong> Urgent: 2023 K-1 Schedules for Tax Diligence (DD-50)</p><hr/><p>Hi [CFO Name],</p><p>Our external tax advisors, EY, have informed us that they've paused their analysis pending receipt of the complete 2023 K-1 schedules.</p><p>This documentation is critical for completing the tax diligence workstream (DD-50). Could you please have these uploaded to the data room at your earliest convenience?</p><p>Please let us know if you have an estimated timeline for this. Thank you.</p><p>Best,</p></div></div>`,
        followUpQuestions: []
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
        prompts: ["Who is the lead engineer on the AI feature?", "Draft a board update on the NRR outperformance.", "What is the budget impact of the AI feature delay?"]
    }
};