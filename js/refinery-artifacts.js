// js/refinery-artifacts.js - Contains the raw, normalized outputs for the refinery simulation.

const mockNormalizedOutputs = {
    'TechFlow Consolidated P&L.xls': {
        bs_metadata: `sheet,column_name,dtype,non_null,unique
BS - Consolidated,2,object,33,30
BS - Consolidated,3,object,33,30
BS - Consolidated,4,object,33,31
BS - Consolidated,6,object,33,31
BS - Consolidated,col,object,34,31
BS - Consolidated,col_2,object,34,30
BS - Consolidated,col_3,object,34,29
BS - Consolidated,col_4,object,34,30
BS - Consolidated,col_15,object,34,32
BS - Consolidated,col_16,object,34,31`,
        bs_data: `2,3,4,6,col,col_2,col_3,col_4,col_15,col_16
2018-01-01 00:00:00,2018-02-28 00:00:00,2018-03-31 00:00:00,2018-04-30 00:00:00,Q1 2018A,Q2 2018A,Q3 2018A,Q4 2018A,FY2019A,FY2020A
16452516.15,15137519.51,13243279.82,14347466.23,13243279.82,10478218.98,9728091.88,12784647.69,10401523.99,17840395.88
16195606.75,14306427.18,17978605.02,16327205.23,17978605.02,13302288.37,13959002.95,20598039.72,26754680.55,24432376.58
1638455,1638455,1621901,1651901,1621901,1816961,3192507,3779009,2126749.94,2613883.45
3953742.3,4267576.76,4078462.89,4092304.11,4078462.89,3842973.76,3726837.66,4565916.71,6531901.18,6528218.99
38240320.2,35349978.44,36922248.73,36418876.57,36922248.73,29440442.11,30606439.5,41727613.12,45814855.66,51414874.9`,
        pl_metadata: `sheet,column_name,dtype,non_null,unique
P&L - Consolidated (Pro Forma),col,object,100,76
P&L - Consolidated (Pro Forma),2018-01-01 00:00:00,object,50,41
P&L - Consolidated (Pro Forma),2018-02-01 00:00:00,object,50,40
P&L - Consolidated (Pro Forma),2018-03-04 00:00:00,object,50,40
P&L - Consolidated (Pro Forma),Q1 2018A,object,50,41
P&L - Consolidated (Pro Forma),Q2 2018A,object,50,41
P&L - Consolidated (Pro Forma),FY 2018A,object,64,48
P&L - Consolidated (Pro Forma),FY2019A,float64,84,76
P&L - Consolidated (Pro Forma),FY2020A,float64,84,78
P&L - Consolidated (Pro Forma),FY2021E,float64,84,69`,
        pl_data: `col,2018-01-01 00:00:00,2018-02-01 00:00:00,2018-03-04 00:00:00,Q1 2018A,Q2 2018A,FY 2018A,FY2019A,FY2020A,FY2021E
License,694543.14,1832806.21,2636289.89,5163639.24,5146538.87,21912905.91,22784640.48,19230401.06,24275143.28
Term License,0,0,0,0,0,-1718427,4373223.43,3983147.55,7685198.85
New,163842.36,428538.07,629048.76,1221429.19,1377005.57,5471526.85,6236139.03,5053116.24,6768373.93
Renewal,2987719.03,1966454.93,2912062.87,7866236.83,6227237.48,30271317.04,35297593.15,38155749.97,43948423.67
Services,240686.97,206605.41,286525.47,733817.85,1523993.72,4496695.13,4864631.2,5256334.59,5448520.22
Total Revenue,4470486.89,4976128.59,6976853.72,16423469.2,16934061.64,71471373.91,86365301.25,81674305.38,96336399.44`
    },
    'Updated_Pricing_Model_Analysis.docx': {
        main: `### Updated Pricing Model Analysis - Executive Summary

**Objective:** To transition from a legacy flat-rate model to a value-based, three-tiered structure to increase NRR and better align price with customer value.

---

### 1. Proposed Tiers

*   **Starter:** Aimed at new customers, providing core functionality for a single department.
*   **Professional (Recommended):** Includes advanced features like API access and enhanced reporting. Designed for growing teams.
*   **Enterprise:** Full platform access, dedicated support, and usage-based components for high-volume data processing.

---

### 2. Key Value Levers

- **Expansion Revenue:** The tiered model creates a clear path for upsell as customer usage and needs grow.
- **New Logo Acquisition:** The 'Starter' tier provides a lower-friction entry point for smaller customers.
- **NRR Improvement:** We project a 5-7 point increase in Net Revenue Retention within 18 months of implementation.

---

### 3. Competitive Positioning

This change aligns our pricing with market leaders like **Integrix** and **MasterData Inc.** while maintaining a competitive advantage on total cost of ownership for the Professional tier.`
    },
    'TechFlow_CIM.pptx': {
        main: `{
  "document_title": "TechFlow_CIM.pptx",
  "source_path": "/Data Room/Strategic/",
  "ingestion_date": "2025-08-11T10:00:00Z",
  "content_type": "Presentation",
  "slides": [
    {
      "slide_number": 6,
      "title": "TechFlow at a Glance",
      "content": [
        { "type": "subheading", "text": "Low / No-Code Multi-Domain Data Management & Process Automation Software" },
        { "type": "subheading", "text": "Strong Business Performance – A Rule of >50 Company" }
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
}`
    }
};