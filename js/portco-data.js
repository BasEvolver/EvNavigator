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
// --- NEW DATA FOR PERSONA DASHBOARDS ---
const ceoDashboardData = {
kpis: {
playStatus: { value: '78%', change: '+2% from last quarter' },
budgetAdherence: { value: '-1.2%', change: '-1.1% from last quarter' },
goalCompletion: { value: '68%', change: '+3% from last quarter' },
activePlays: { value: '42', change: '-5 from last quarter' }
},
departmentPlays: [
{ name: 'Post-Acquisition Integration', department: 'Operations', status: 'On Track', progress: 80, phase: 'Transformation' },
{ name: 'Market Expansion Strategy', department: 'Marketing', status: 'On Track', progress: 65, phase: 'Growth' },
{ name: 'Cost Reduction Initiative', department: 'Finance', status: 'At Risk', progress: 40, phase: 'Transformation' },
{ name: 'Systems Migration', department: 'IT', status: 'At Risk', progress: 55, phase: 'Transformation' },
{ name: 'Talent Development Program', department: 'HR', status: 'On Track', progress: 72, phase: 'Growth' },
{ name: 'New Product Launch', department: 'Product Dev', status: 'Behind', progress: 30, phase: 'Growth' },
{ name: 'Vendor Consolidation', department: 'Operations', status: 'Behind', progress: 20, phase: 'Strategy' }
],
departmentUpdates: [
{ department: 'Product Development', time: 'Today, 10:45 AM', content: "The New Product Launch play is facing headwinds due to complexities with the cloud integration component. We've had to restructure the dev team to bring in more specialized expertise. We expect a 3-week delay to the original timeline.", metrics: { complete: 35, budget: -18.2, progress: -2.0 } },
{ department: 'Marketing', time: 'Yesterday, 4:30 PM', content: "Market Expansion Strategy is proceeding ahead of schedule. We've successfully launched in two new territories in the APAC region, with initial lead-gen exceeding targets by 15%. Pipeline generation is up 15% and we're seeing strong early conversion data.", metrics: { complete: 65, budget: 2.0, progress: 2.0 } },
{ department: 'Operations', time: 'Yesterday, 11:15 AM', content: "Post-Acquisition Integration of TechCore is on track. Customer data migration is 95% complete, and financial systems are running in parallel. The team is working closely with the IT department to de-risk the upcoming System Migration play by fixing known challenges with legacy system compatibility.", metrics: { complete: 80, budget: -1.2, progress: 0.0 } },
{ department: 'Finance', time: 'Mar 17, 2025', content: "The Cost Reduction Initiative is showing mixed results. We've achieved the targeted savings in procurement and operational expenses, but IT spend is over budget due to higher cloud costs than initially projected. We've implemented additional cost controls and will take a more in-depth approach for Q2.", metrics: { complete: 40, budget: -2.3, progress: -1.0 } },
{ department: 'Human Resources', time: 'Mar 16, 2025', content: "Talent Development Program has been rolled out successfully to all departments. We've achieved 92% employee participation and initial feedback from the new training modules is positive. The leadership training component is showing early signs of success, with a 5% improvement in management effectiveness scores.", metrics: { complete: 72, budget: 1.8, progress: 1.0 } }
],
aiSuggestions: [
{ title: 'Add budget context', content: "Company-wide budget adherence has improved to -1.2% variance, with Marketing and HR teams operating under budget. Finance team is working to address the 3.5% overspend in the Cost Reduction Initiative." },
{ title: 'Add growth metrics', content: "The Market Expansion Strategy has already resulted in a 12% increase in qualified leads and a 7% increase in new customer acquisitions, exceeding our quarterly targets by 5%." },
{ title: 'Add risk assessment', content: "The delay in the New Product Launch presents a moderate risk to Q2 revenue targets. I would recommend we develop a phased rollout approach to mitigate the impact while addressing the technical challenges." }
]
};
const croRenewalData = {
opportunities: [
{ account: 'Global Enterprises Inc.', segment: 'Gold', value: 3245000, date: 'July 15, 2025', circumstance: 'Business Success' },
{ account: 'Apex Solutions', segment: 'Gold', value: 2780000, date: 'August 3, 2025', circumstance: 'Technical Success' },
{ account: 'Titan Industries', segment: 'Gold', value: 4120000, date: 'August 17, 2025', circumstance: 'Business Success' },
{ account: 'NeoGen Systems', segment: 'Silver', value: 785000, date: 'July 8, 2025', circumstance: 'Technical Success' },
{ account: 'Velocity Partners', segment: 'Silver', value: 640000, date: 'September 5, 2025', circumstance: 'Struggler' },
{ account: 'Stellar Technologies', segment: 'Silver', value: 925000, date: 'July 28, 2025', circumstance: 'Business Success' },
{ account: 'Fusion Micro', segment: 'Bronze', value: 125000, date: 'September 14, 2025', circumstance: 'Technical Success' },
{ account: 'Horizon Solutions', segment: 'Bronze', value: 95000, date: 'July 5, 2025', circumstance: 'Struggler' },
{ account: 'Nimbus Data', segment: 'Bronze', value: 72000, date: 'August 11, 2025', circumstance: 'Technical Success' },
{ account: 'Pulse Innovations', segment: 'Bronze', value: 135000, date: 'September 29, 2025', circumstance: 'Business Success' },
]
};
const commandCenterData = {
techflow: {
liveScorecard: {
financialHealth: { score: 8.4, change: "+0.2 today" },
operations: { score: 7.8, change: "+0.1 today" },
growthPotential: { score: 9.1, change: "+0.3 today" },
strategicFit: { score: 6.7, change: "Under review" }
},
recentActivity: [
{ text: "Valuation Model Complete", time: "2 hours ago", status: "success" },
{ text: "Customer Churn Anomaly Detected", time: "4 hours ago", status: "error", action: "navigate-to-workstream-tab", target: "Commercial & Customer" },
{ text: "Synergy Analysis Updated", time: "6 hours ago", status: "info" }
],
workstreams: [
{ title: "Data Extraction", status: "COMPLETED", values: [{value: 247, label: "DOCUMENTS"}, {value: "1,834", label: "DATA POINTS"}] },
{ title: "Anomaly Detection", status: "IN PROGRESS", hasPing: true, values: [{value: 3, label: "CRITICAL FLAGS"}, {value: 12, label: "MINOR ISSUES"}] },
{ title: "Valuation Modeling", status: "COMPLETED", values: [{value: "8.2M", label: "SYNERGY VALUE"}] },
{ title: "Growth Modeling", status: "PENDING", values: [{value: "-", label: "SCENARIOS"}, {value: "-", label: "GROWTH RATE"}] },
{ title: "IC Dashboard", status: "PENDING", values: [{value: "-", label: "READINESS"}, {value: "5 days", label: "REMAINING"}] }
]
},
cloudvantage: {
kpis: [
{ label: 'ARR', value: '$78M', change: '+4% QoQ', isGood: true },
{ label: 'Net Revenue Retention', value: '128%', change: '+3% vs Target', isGood: true },
{ label: 'EBITDA Margin', value: '31%', change: '-1% vs Target', isGood: false },
{ label: 'Rule of 40', value: '58%', change: 'Healthy', isGood: true }
],
plays: [
{ name: 'Post-Acquisition Integration', status: 'On Track' },
{ name: 'AI-Powered Feature Dev', status: 'Behind' }
],
aiSynthesis: "NRR is strong at 128%, but the AI Feature delay poses a moderate risk to the Q4 launch."
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