// js/refinery-artifacts.js - Contains the raw, normalized outputs for the refinery simulation.

const mockNormalizedOutputs = {
    'Financial_Statements_2024.pdf': {
        main: `{
  "document_title": "Financial_Statements_2024.pdf",
  "source_path": "/Data Room/Financials/",
  "ingestion_date": "2025-08-10T14:30:00Z",
  "content_type": "Financial Report",
  "sections": [
    {
      "section_title": "Auditor's Notes - FY2024",
      "content": [
        { "type": "paragraph", "text": "The company's reported Annual Recurring Revenue (ARR) reached $12M for FY2024. A significant portion of this is derived from the Global FinCorp account." },
        { "type": "critical_finding", "text": "The auditor's notes highlight a non-standard revenue recognition policy for perpetual licenses, where revenue is recognized over 18 months. This may overstate the true recurring nature of the revenue." }
      ]
    },
    {
      "section_title": "Key Metrics Summary",
      "content": [
        { "type": "table_summary", "data": { "Revenue": "$25M", "Gross Margin": "72%", "EBITDA": "$6.8M" } }
      ]
    }
  ]
}`
    },
    'TechFlow_CIM.pptx': {
        main: `{
  "document_title": "TechFlow_CIM.pptx",
  "source_path": "/Data Room/Strategic/",
  "ingestion_date": "2025-08-11T10:00:00Z",
  "content_type": "Presentation",
  "slides": [
    {
      "slide_number": 5,
      "title": "TechFlow Vision",
      "content": [
        { "type": "heading", "text": "Data and Processes are Interdependent" },
        { "type": "key_statement", "text": "Can't have faster processes without better data, and can't have better data without better data processes." },
        { "type": "list", "title": "Core Principles", "items": ["Focus on data and data processes", "Deliver flexible and extensible platforms", "Empower business users with low-/no-code tools", "Commitment to customer success"] }
      ]
    },
    {
      "slide_number": 6,
      "title": "TechFlow at a Glance",
      "content": [
        { "type": "subheading", "text": "Low / No-Code Multi-Domain Data Management & Process Automation Software" },
        { "type": "subheading", "text": "Strong Business Performance – A Rule of >50 Company" },
        { "type": "table_reference", "file": "TechFlow_CIM_metrics_data.csv" }
      ]
    },
    {
      "slide_number": 8,
      "title": "TechFlow Highlights - Growth & M&A",
      "content": [
        { "type": "subheading", "text": "Exciting Organic Growth Opportunities" },
        { "type": "list", "items": ["Market Tailwinds: Growing data volumes and rising complexity.", "Continued Core Market Penetration: Significant whitespace remains.", "Cross-Sell and Up-Sell: Accelerate selling AutomatePro to Studio customer base."] },
        { "type": "subheading", "text": "Ideal Platform for M&A-Driven Adjacency Expansion Strategy" },
        { "type": "list", "items": ["Proven Ability to Acquire: DataFlow acquisition.", "Highly Loyal Customer Base: 105% net retention.", "Obvious Adjacencies for Entry: Data Governance, Data Quality, Reporting and Analytics."] }
      ]
    },
    {
      "slide_number": 45,
      "title": "Summary Consolidated P&L",
      "content": [
        { "type": "key_metric", "metric": "2021E Total Revenue", "value": "96336399" },
        { "type": "key_metric", "metric": "2021E Recurring Revenue %", "value": "64%" },
        { "type": "key_metric", "metric": "2021E Adjusted EBITDA Margin %", "value": "40.0%" }
      ]
    }
  ]
}`,
        csv_metadata: `Column Name,Data Type,Description
Total Revenue 2021E,Currency,"Projected total revenue for the fiscal year 2021."
Organic Revenue Growth 2021E,Percentage,"Year-over-year organic growth projection for 2021."
Recurring Revenue,Percentage,"The portion of total revenue that is from recurring sources like subscriptions."
Gross Margin 2021E,Percentage,"Projected gross margin for the fiscal year 2021."
Adjusted EBITDA 2021E,Currency,"Projected Adjusted Earnings Before Interest, Taxes, Depreciation, and Amortization."
Gross Retention 2020,Percentage,"Gross dollar retention rate for the fiscal year 2020."
NPS (Customer),Number,"Net Promoter Score from the latest customer survey."
Diversified Customers,Number,"Total number of active, diversified customers."
Net Retention,Percentage,"Net dollar retention rate, including upsells and expansion."`,
        csv_data: `Total Revenue 2021E,Organic Revenue Growth 2021E,Recurring Revenue,Gross Margin 2021E,Adjusted EBITDA 2021E,Gross Retention 2020,NPS (Customer),Diversified Customers,Net Retention
96000000,20%,64%,84%,38000000,96%,51,2000,105%`
    }
};