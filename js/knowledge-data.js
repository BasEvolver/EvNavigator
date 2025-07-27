// js/knowledge-data.js - FINAL, RICH, & UNABRIDGED VERSION
// This file is a one-to-one mapping of all relevant data from the source CSVs.
// The 'links' array is now fully populated.

const knowledgeGraphData = {
    nodes: [
        // --- GROUP 1: INPUT DOCUMENTS (Fully Enriched) ---
        { 
            id: 'DDI-001', 
            label: 'Corporate charter and articles of incorporation', 
            group: 'input_document', 
            description: 'Foundational legal document establishing company structure, purpose, and authorized shares', 
            fullPath: '\\Dataroom\\Corporate & Legal\\Corporate_Charter_and_Articles.pdf',
            revisions: 1,
            contentOverview: 'The legal articles of incorporation filed with the state, outlining the company name, purpose, stock structure, and registered agent.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Standard legal document, appears complete and properly filed. No amendments noted.'
            },
            workstream: 'Business & Strategy', category: 'Corporate & Legal', subCategory: 'Corporate Structure & Governance', topic: 'Corporate Structure & Governance'
        },
        { 
            id: 'DDI-002', 
            label: 'Bylaws and amendments', 
            group: 'input_document', 
            description: 'Corporate governance rules, procedures, and director/officer powers', 
            fullPath: '\\Dataroom\\Corporate & Legal\\Bylaws_and_Amendments_v2.docx',
            revisions: 2,
            contentOverview: 'Details the internal rules of the corporation, including director elections, board meetings, officer duties, and shareholder voting procedures. Includes one amendment from 2023 related to board size.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Document is well-structured and appears to be standard for a company of this size. Version 2 incorporated requested clarifications.'
            },
            workstream: 'Business & Strategy', category: 'Corporate & Legal', subCategory: 'Corporate Structure & Governance', topic: 'Corporate Structure & Governance'
        },
        { 
            id: 'DDI-003', 
            label: 'Board of directors meeting minutes (last 3 years)', 
            group: 'input_document', 
            description: 'Record of board decisions, strategic direction, and governance oversight', 
            fullPath: '\\Dataroom\\Corporate & Legal\\Board_Minutes_2022-2025_Q2.zip',
            revisions: 1,
            contentOverview: 'A collection of signed PDFs for all quarterly board meetings over the last 36 months. Includes resolutions, financial reviews, and strategic discussions.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Minutes for Q2 2023 are missing signatures. Several key strategic decisions appear to have been made outside of formal board meetings.'
            },
            workstream: 'Business & Strategy', category: 'Corporate & Legal', subCategory: 'Corporate Structure & Governance', topic: 'Corporate Structure & Governance'
        },
        { 
            id: 'DDI-004', 
            label: 'Shareholder meeting minutes (last 3 years)', 
            group: 'input_document', 
            description: 'Shareholder voting history and major corporate decisions', 
            fullPath: '\\Dataroom\\Corporate & Legal\\Shareholder_Meeting_Minutes_Annual.pdf',
            revisions: 1,
            contentOverview: 'Minutes from the annual shareholder meetings, primarily covering board member elections and approval of stock option plans.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Standard documentation, appears complete for a privately held company.'
            },
            workstream: 'Business & Strategy', category: 'Corporate & Legal', subCategory: 'Corporate Structure & Governance', topic: 'Corporate Structure & Governance'
        },
        { 
            id: 'DDI-005', 
            label: 'Capitalization table and ownership records', 
            group: 'input_document', 
            description: 'Current ownership structure, equity distribution, and dilution analysis.', 
            fullPath: '\\Dataroom\\Corporate & Legal\\Capitalization_Table_v3.xlsx',
            revisions: 3,
            contentOverview: 'Contains a detailed breakdown of all shareholders, share classes (Common, Preferred), options, warrants, and convertible notes. Includes fully diluted share count.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Multiple unsigned SAFE notes are not reflected, requiring manual reconciliation. Version 3 clarified some, but not all, discrepancies from v2.'
            },
            workstream: 'Business & Strategy', category: 'Corporate & Legal', subCategory: 'Corporate Structure & Governance', topic: 'Corporate Structure & Governance'
        },
        { 
            id: 'DDI-006', 
            label: 'Shareholder agreements and voting agreements', 
            group: 'input_document', 
            description: 'Key shareholder rights, restrictions, and control provisions', 
            fullPath: '\\Dataroom\\Corporate & Legal\\Shareholder_Agreements_Executed.zip',
            revisions: 1,
            contentOverview: 'Executed copies of all shareholder, voting, and right of first refusal (ROFR) agreements for major investors.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Appears to be a complete set of executed documents. Legal review is required to confirm terms.'
            },
            workstream: 'Business & Strategy', category: 'Corporate & Legal', subCategory: 'Corporate Structure & Governance', topic: 'Corporate Structure & Governance'
        },
        { 
            id: 'DDI-007', 
            label: 'Stock option and warrant schedules', 
            group: 'input_document', 
            description: 'Employee and advisor equity participation and dilution impact', 
            fullPath: '\\Dataroom\\HR\\Stock_Option_Ledger_2025-07-15.xlsx',
            revisions: 2,
            contentOverview: 'A detailed ledger of all stock options and warrants granted, including grant date, vesting schedule, strike price, and expiration date.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The ledger does not fully reconcile with the total option pool authorized in the board minutes. A -2% variance needs to be explained.'
            },
            workstream: 'Business & Strategy', category: 'Corporate & Legal', subCategory: 'Corporate Structure & Governance', topic: 'Corporate Structure & Governance'
        },
        { 
            id: 'DDI-008', 
            label: 'Corporate organizational charts', 
            group: 'input_document', 
            description: 'Visual representation of legal entity structure and subsidiaries', 
            fullPath: '\\Dataroom\\Corporate & Legal\\Legal_Entity_Org_Chart.pptx',
            revisions: 1,
            contentOverview: 'A PowerPoint slide showing the parent company and its two wholly-owned subsidiaries (one domestic, one international).',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Clear and straightforward representation of the legal structure.'
            },
            workstream: 'Business & Strategy', category: 'Corporate & Legal', subCategory: 'Corporate Structure & Governance', topic: 'Corporate Structure & Governance'
        },
        { 
            id: 'DDI-009', 
            label: 'Material contracts and agreements', 
            group: 'input_document', 
            description: 'All contracts >$X threshold impacting revenue, costs, or operations', 
            fullPath: '\\Dataroom\\Legal\\Material_Contracts_Summary.docx',
            revisions: 1,
            contentOverview: 'A summary document listing all contracts with a total value greater than $500,000. Includes customer, vendor, and partnership agreements.',
            qualityAssessment: {
                rating: 'Bad',
                justification: 'This is only a summary list, not the contracts themselves. The actual contracts must be requested and uploaded.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Legal & Compliance', topic: 'Legal & Compliance'
        },
        { 
            id: 'DDI-010', 
            label: 'Customer contracts and MSAs', 
            group: 'input_document', 
            description: 'Revenue-generating agreements with key terms and renewal dates', 
            fullPath: '\\Dataroom\\Legal\\Customer_Contracts_Top_50.zip',
            revisions: 2,
            contentOverview: 'A zip file containing executed Master Service Agreements (MSAs) and Statements of Work (SOWs) for the top 50 customers by revenue.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Several contracts contain non-standard termination for convenience clauses. Version 2 added missing SOWs for two key accounts.'
            },
            workstream: 'Commercial & Customer', category: 'Corporate & Legal', subCategory: 'Legal & Compliance', topic: 'Legal & Compliance'
        },
        { 
            id: 'DDI-011', 
            label: 'Supplier and vendor agreements', 
            group: 'input_document', 
            description: 'Key operational vendor relationships and supply chain dependencies', 
            fullPath: '\\Dataroom\\Operations\\Key_Vendor_Agreements.zip',
            revisions: 1,
            contentOverview: 'Contracts for key technology and service vendors, including AWS, Salesforce, and major data providers.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Appears to be a complete set of agreements for critical vendors.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Legal & Compliance', topic: 'Legal & Compliance'
        },
        { 
            id: 'DDI-012', 
            label: 'Employment agreements (key personnel)', 
            group: 'input_document', 
            description: 'Contracts for C-suite and key management including terms and restrictions', 
            fullPath: '\\Dataroom\\HR\\Executive_Employment_Agreements.zip',
            revisions: 1,
            contentOverview: 'Executed employment agreements for all C-level executives and VPs. Includes details on compensation, severance, and non-compete clauses.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Complete and signed agreements provided.'
            },
            workstream: 'Business & Strategy', category: 'Corporate & Legal', subCategory: 'Legal & Compliance', topic: 'Legal & Compliance'
        },
        { 
            id: 'DDI-013', 
            label: 'Real estate leases and property documents', 
            group: 'input_document', 
            description: 'Facility commitments, lease terms, and property ownership', 
            fullPath: '\\Dataroom\\Corporate & Legal\\Real_Estate_Leases.pdf',
            revisions: 1,
            contentOverview: 'Lease agreement for the primary headquarters. No other properties are owned or leased.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Standard commercial lease agreement.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Legal & Compliance', topic: 'Legal & Compliance'
        },
        { 
            id: 'DDI-014', 
            label: 'Litigation files and court documents', 
            group: 'input_document', 
            description: 'Active, threatened, and historical legal proceedings and disputes', 
            fullPath: '\\Dataroom\\Legal\\Litigation_Summary.docx',
            revisions: 2,
            contentOverview: 'A memo from legal counsel summarizing one active litigation case (patent dispute) and two settled cases from the past 5 years.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The summary is helpful, but the underlying court filings and discovery documents should be requested for a full assessment of the active case.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Legal & Compliance', topic: 'Legal & Compliance'
        },
        { 
            id: 'DDI-015', 
            label: 'Settlement agreements and legal opinions', 
            group: 'input_document', 
            description: 'Resolution of past disputes and legal risk mitigation', 
            fullPath: '\\Dataroom\\Legal\\Settlement_Agreements.zip',
            revisions: 1,
            contentOverview: 'Executed settlement agreements for two prior employee disputes. Contains confidentiality clauses.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Standard settlement documents.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Legal & Compliance', topic: 'Legal & Compliance'
        },
        { 
            id: 'DDI-016', 
            label: 'Insurance policies and claims history', 
            group: 'input_document', 
            description: 'Coverage levels, claims experience, and risk transfer mechanisms', 
            fullPath: '\\Dataroom\\Risk\\Insurance_Policies_2025.pdf',
            revisions: 1,
            contentOverview: 'Binder for all current insurance policies, including D&O, E&O, and Cybersecurity. Includes a 3-year claims history report.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Cybersecurity coverage limit of $1M appears low for a company of this size and data sensitivity.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Legal & Compliance', topic: 'Legal & Compliance'
        },
        { 
            id: 'DDI-017', 
            label: 'FCPA compliance policies and procedures', 
            group: 'input_document', 
            description: 'Anti-corruption compliance framework and controls', 
            fullPath: '\\Dataroom\\Risk\\FCPA_Compliance_Policy.docx',
            revisions: 1,
            contentOverview: 'Internal policy document outlining rules for international business dealings and gift-giving.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Policy appears standard. No international sales currently, so risk is low.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Legal & Compliance', topic: 'Legal & Compliance'
        },
        { 
            id: 'DDI-018', 
            label: 'International transaction records', 
            group: 'input_document', 
            description: 'Cross-border transactions requiring compliance review', 
            fullPath: '\\Dataroom\\Financials\\International_Transactions.xlsx',
            revisions: 1,
            contentOverview: 'Ledger of all transactions with non-domestic entities. Primarily vendor payments for software licenses.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Records are clean and show no high-risk country transactions.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Legal & Compliance', topic: 'Legal & Compliance'
        },
        { 
            id: 'DDI-019', 
            label: 'Third-party due diligence files', 
            group: 'input_document', 
            description: 'Due diligence on agents, distributors, and business partners', 
            fullPath: '\\Dataroom\\Partners\\Partner_Diligence_Files.zip',
            revisions: 1,
            contentOverview: 'Background checks and diligence files for the three active reseller partners.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Basic diligence appears to have been performed.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Legal & Compliance', topic: 'Legal & Compliance'
        },
        { 
            id: 'DDI-020', 
            label: 'Patent portfolios and IP registrations', 
            group: 'input_document', 
            description: 'Intellectual property assets, protection scope, and strategic value', 
            fullPath: '\\Dataroom\\Legal\\IP_Portfolio_Schedule.xlsx',
            revisions: 1,
            contentOverview: 'A schedule listing all registered patents and trademarks, including application numbers, grant dates, and jurisdictions.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Clear and well-organized schedule of registered intellectual property.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Intellectual Property', topic: 'Intellectual Property'
        },
        { 
            id: 'DDI-021', 
            label: 'Trade secrets documentation', 
            group: 'input_document', 
            description: 'Confidential information and trade secret protection measures', 
            fullPath: '\\Dataroom\\Legal\\Trade_Secret_Policy.docx',
            revisions: 1,
            contentOverview: 'Internal policy defining what constitutes a trade secret and the procedures for protecting it.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Standard policy document.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Intellectual Property', topic: 'Intellectual Property'
        },
        { 
            id: 'DDI-022', 
            label: 'IP litigation history', 
            group: 'input_document', 
            description: 'IP-related disputes and enforcement actions', 
            fullPath: '\\Dataroom\\Legal\\IP_Litigation_History.docx',
            revisions: 1,
            contentOverview: 'Summary of one active patent infringement case where the company is the defendant.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Active litigation poses a significant contingent liability risk that needs to be quantified.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Intellectual Property', topic: 'Intellectual Property'
        },
        { 
            id: 'DDI-023', 
            label: 'Freedom to operate analyses', 
            group: 'input_document', 
            description: 'Analysis of potential IP infringement risks in operations', 
            fullPath: '\\Dataroom\\Legal\\Freedom_To_Operate_Analysis.pdf',
            revisions: 1,
            contentOverview: 'A third-party legal opinion from 2022 regarding freedom to operate for the core product.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The analysis is over two years old and does not cover recent product launches. A refresh is needed.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Intellectual Property', topic: 'Intellectual Property'
        },
        { 
            id: 'DDI-024', 
            label: 'Trademark and copyright registrations', 
            group: 'input_document', 
            description: 'Brand protection and marketing asset ownership', 
            fullPath: '\\Dataroom\\Legal\\Trademarks_and_Copyrights.xlsx',
            revisions: 1,
            contentOverview: 'List of all registered trademarks for product names and logos.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Appears to be a complete and well-maintained list.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Intellectual Property', topic: 'Intellectual Property'
        },
        { 
            id: 'DDI-025', 
            label: 'License agreements (inbound/outbound)', 
            group: 'input_document', 
            description: 'IP licensing arrangements affecting operations or revenue', 
            fullPath: '\\Dataroom\\Legal\\License_Agreements.zip',
            revisions: 1,
            contentOverview: 'Contains agreements for inbound open-source libraries and one outbound technology licensing deal.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Standard agreements, but open-source licenses should be scanned for compliance issues.'
            },
            workstream: 'Financial & Risk', category: 'Corporate & Legal', subCategory: 'Intellectual Property', topic: 'Intellectual Property'
        },
        { 
            id: 'DDI-026', 
            label: 'Audited financial statements (last 5 years)', 
            group: 'input_document', 
            description: 'Audited P&L, balance sheet, and cash flow statements', 
            fullPath: '\\Dataroom\\Financials\\Audited_Financial_Statements_2020-2024.pdf',
            revisions: 1,
            contentOverview: 'Complete audited financials prepared by PwC for the last five fiscal years. Includes management letter and notes to the financial statements.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Document is from a reputable third-party auditor (PwC) and appears complete and well-organized.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Core Financial Statements', topic: 'Core Financial Statements'
        },
        { 
            id: 'DDI-027', 
            label: 'Interim financial statements (monthly/quarterly)', 
            group: 'input_document', 
            description: 'Current year performance and trend analysis', 
            fullPath: '\\Dataroom\\Financials\\Interim_Financials_2025_Q2.xlsx',
            revisions: 2,
            contentOverview: 'Unaudited monthly financial packages for the current fiscal year, including P&L, balance sheet, and cash flow statement.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Unaudited internal documents. While detailed, they require reconciliation against audited financials to be fully trusted.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Core Financial Statements', topic: 'Core Financial Statements'
        },
        { 
            id: 'DDI-028', 
            label: 'Trial balances and general ledger details', 
            group: 'input_document', 
            description: 'Detailed account-level financial data for verification', 
            fullPath: '\\Dataroom\\Financials\\General_Ledger_Export.csv',
            revisions: 1,
            contentOverview: 'A CSV export of the general ledger for the last 12 months, providing transaction-level detail.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Raw data export allows for deep-dive analysis and verification of top-level statements.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Core Financial Statements', topic: 'Core Financial Statements'
        },
        { 
            id: 'DDI-029', 
            label: 'Management accounts and reporting packages', 
            group: 'input_document', 
            description: 'Internal management reporting and performance metrics', 
            fullPath: '\\Dataroom\\Financials\\Management_Reporting_Pack_June_2025.pdf',
            revisions: 1,
            contentOverview: 'The monthly reporting package provided to the management team, including KPI dashboards and departmental budget vs. actuals.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides valuable insight into how management views and measures the business.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Core Financial Statements', topic: 'Core Financial Statements'
        },
        { 
            id: 'DDI-030', 
            label: 'Budget vs. actual variance reports', 
            group: 'input_document', 
            description: 'Performance against plan and variance explanations', 
            fullPath: '\\Dataroom\\Financials\\BvA_Analysis_Q2_2025.xlsx',
            revisions: 1,
            contentOverview: 'Spreadsheet containing budget vs. actuals for all departments, with written explanations for significant variances.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Detailed variance analysis is provided, showing a good level of financial control.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Core Financial Statements', topic: 'Core Financial Statements'
        },
        { 
            id: 'DDI-031', 
            label: 'Financial models and projections', 
            group: 'input_document', 
            description: 'Forward-looking financial forecasts and scenario analysis', 
            fullPath: '\\Dataroom\\Financials\\Management_5_Year_Model.xlsx',
            revisions: 3,
            contentOverview: 'Management\'s 5-year financial model, including key assumptions for growth, hiring, and margins.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The model contains several aggressive assumptions, particularly regarding new product revenue, that are not supported by historical performance.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Financial Planning', topic: 'Financial Analysis & Planning'
        },
        { 
            id: 'DDI-032', 
            label: 'Capital expenditure budgets and plans', 
            group: 'input_document', 
            description: 'Future investment requirements and capital allocation', 
            fullPath: '\\Dataroom\\Financials\\Capex_Budget_2026.pdf',
            revisions: 1,
            contentOverview: 'The approved capital expenditure budget for the next fiscal year, primarily focused on data center hardware upgrades.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Clear and detailed budget.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Financial Planning', topic: 'Financial Analysis & Planning'
        },
        { 
            id: 'DDI-033', 
            label: 'Asset replacement schedules', 
            group: 'input_document', 
            description: 'Timing and cost of asset renewals and replacements', 
            fullPath: '\\Dataroom\\Operations\\Asset_Replacement_Schedule.xlsx',
            revisions: 1,
            contentOverview: 'A schedule of key IT and facility assets with their expected end-of-life and replacement costs.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides good visibility into future capital needs.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Financial Planning', topic: 'Financial Analysis & Planning'
        },
        { 
            id: 'DDI-034', 
            label: 'Working capital schedules', 
            group: 'input_document', 
            description: 'AR, inventory, and AP analysis and cash conversion cycle', 
            fullPath: '\\Dataroom\\Financials\\Working_Capital_Analysis.xlsx',
            revisions: 2,
            contentOverview: 'Monthly breakdown of working capital components for the last 24 months.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Detailed schedules allow for a thorough analysis of the cash conversion cycle.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Financial Planning', topic: 'Financial Analysis & Planning'
        },
        { 
            id: 'DDI-035', 
            label: 'Accounts receivable aging reports', 
            group: 'input_document', 
            description: 'Collection patterns and credit risk assessment', 
            fullPath: '\\Dataroom\\Financials\\AR_Aging_June_2025.pdf',
            revisions: 1,
            contentOverview: 'The most recent accounts receivable aging report, showing amounts outstanding by customer and by age bucket (e.g., 30, 60, 90+ days).',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'A notable increase in the 90+ day bucket suggests potential collection issues that could impact cash flow.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Financial Planning', topic: 'Financial Analysis & Planning'
        },
        { 
            id: 'DDI-036', 
            label: 'Inventory analysis and turnover data', 
            group: 'input_document', 
            description: 'Inventory management and turnover optimization', 
            fullPath: '\\Dataroom\\Operations\\Inventory_Analysis.xlsx',
            revisions: 1,
            contentOverview: 'Not applicable for this SaaS business.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'N/A'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Financial Planning', topic: 'Financial Analysis & Planning'
        },
        { 
            id: 'DDI-037', 
            label: 'Accounts payable schedules', 
            group: 'input_document', 
            description: 'Payment terms and supplier relationship management', 
            fullPath: '\\Dataroom\\Financials\\AP_Aging_June_2025.pdf',
            revisions: 1,
            contentOverview: 'The most recent accounts payable aging report, showing amounts owed to vendors.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'No significant issues noted; payments appear to be current.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Financial Planning', topic: 'Financial Analysis & Planning'
        },
        { 
            id: 'DDI-038', 
            label: 'Accounting policy manual', 
            group: 'input_document', 
            description: 'Accounting principles and policy documentation', 
            fullPath: '\\Dataroom\\Financials\\Accounting_Policy_Manual.docx',
            revisions: 2,
            contentOverview: 'The company\'s internal manual outlining all key accounting policies and procedures.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Comprehensive and well-documented.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Accounting & Tax', topic: 'Accounting & Tax'
        },
        { 
            id: 'DDI-039', 
            label: 'Revenue recognition policies', 
            group: 'input_document', 
            description: 'Revenue accounting methodology and compliance', 
            fullPath: '\\Dataroom\\Financials\\Revenue_Recognition_Policy.pdf',
            revisions: 3,
            contentOverview: 'A detailed policy document on how the company recognizes revenue, particularly for multi-year contracts and professional services.',
            qualityAssessment: {
                rating: 'Bad',
                justification: 'The policy for recognizing perpetual license revenue over 18 months is non-standard and aggressive. This is a critical finding.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Accounting & Tax', topic: 'Accounting & Tax'
        },
        { 
            id: 'DDI-040', 
            label: 'Management letters from auditors', 
            group: 'input_document', 
            description: 'Auditor recommendations and management responses', 
            fullPath: '\\Dataroom\\Financials\\Auditor_Management_Letters.zip',
            revisions: 1,
            contentOverview: 'Letters from PwC to management for the last 3 audits, highlighting areas for improvement in internal controls.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The same issue regarding manual journal entry controls has been raised for three consecutive years without being fully remediated.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Accounting & Tax', topic: 'Accounting & Tax'
        },
        { 
            id: 'DDI-041', 
            label: 'Audit adjustments and communications', 
            group: 'input_document', 
            description: 'Year-end audit adjustments and auditor communications', 
            fullPath: '\\Dataroom\\Financials\\Audit_Adjustments_2024.xlsx',
            revisions: 1,
            contentOverview: 'A schedule of all proposed and accepted audit adjustments for the most recent fiscal year-end.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'No material adjustments were required, indicating clean bookkeeping.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Accounting & Tax', topic: 'Accounting & Tax'
        },
        { 
            id: 'DDI-042', 
            label: 'Tax returns (last 5 years)', 
            group: 'input_document', 
            description: 'Federal and state tax compliance history', 
            fullPath: '\\Dataroom\\Financials\\Tax_Returns_2020-2024.zip',
            revisions: 1,
            contentOverview: 'Filed federal and state corporate tax returns for the last five years.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Appears to be a complete set of filed returns.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Accounting & Tax', topic: 'Accounting & Tax'
        },
        { 
            id: 'DDI-043', 
            label: 'Tax provisions and correspondence', 
            group: 'input_document', 
            description: 'Tax liability accruals and authority interactions', 
            fullPath: '\\Dataroom\\Financials\\Tax_Provisions_Workpapers.xlsx',
            revisions: 1,
            contentOverview: 'Workpapers detailing the calculation of the company\'s income tax provision. Includes correspondence with the IRS.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'No active audits or disputes with tax authorities.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Accounting & Tax', topic: 'Accounting & Tax'
        },
        { 
            id: 'DDI-044', 
            label: 'Transfer pricing documentation', 
            group: 'input_document', 
            description: 'Intercompany pricing methodology and compliance', 
            fullPath: '\\Dataroom\\Financials\\Transfer_Pricing_Study.pdf',
            revisions: 1,
            contentOverview: 'A third-party study supporting the transfer pricing methodology between the US parent and its international subsidiary.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'A formal study is in place, which is a best practice.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Accounting & Tax', topic: 'Accounting & Tax'
        },
        { 
            id: 'DDI-045', 
            label: 'Expense registers and cost accounting data', 
            group: 'input_document', 
            description: 'Detailed expense categorization and cost allocation', 
            fullPath: '\\Dataroom\\Financials\\Expense_Register_YTD.csv',
            revisions: 1,
            contentOverview: 'A detailed transaction log of all operating expenses for the current year.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides necessary detail for QoE analysis.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Cost Structure', topic: 'Cost Structure'
        },
        { 
            id: 'DDI-046', 
            label: 'Payroll data and compensation analysis', 
            group: 'input_document', 
            description: 'Employee costs and compensation benchmarking', 
            fullPath: '\\Dataroom\\HR\\Payroll_Register_YTD.xlsx',
            revisions: 1,
            contentOverview: 'A detailed payroll register showing salary, bonus, and benefits costs for every employee.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Essential data for analyzing headcount costs and profitability.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Cost Structure', topic: 'Cost Structure'
        },
        { 
            id: 'DDI-047', 
            label: 'Vendor contracts and supplier agreements', 
            group: 'input_document', 
            description: 'Key supplier relationships and pricing terms', 
            fullPath: '\\Dataroom\\Operations\\Key_Vendor_Agreements.zip',
            revisions: 1,
            contentOverview: 'A collection of contracts for the top 20 vendors by annual spend.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides visibility into key cost drivers and contractual commitments.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Cost Structure', topic: 'Cost Structure'
        },
        { 
            id: 'DDI-048', 
            label: 'Cost of goods sold breakdowns', 
            group: 'input_document', 
            description: 'Direct costs and margin analysis by product/service', 
            fullPath: '\\Dataroom\\Financials\\COGS_Analysis.xlsx',
            revisions: 2,
            contentOverview: 'A detailed breakdown of COGS, including hosting costs, third-party software royalties, and support personnel salaries.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides the necessary detail to analyze gross margins accurately.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Cost Structure', topic: 'Cost Structure'
        },
        { 
            id: 'DDI-049', 
            label: 'Product/service profitability analysis', 
            group: 'input_document', 
            description: 'Profitability by product line, service, or customer segment', 
            fullPath: '\\Dataroom\\Financials\\Product_Profitability_Model.xlsx',
            revisions: 1,
            contentOverview: 'An internal analysis model showing profitability for each of the company\'s main product lines.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The cost allocation methodology in the model seems simplistic and may not accurately reflect true product-level profitability.'
            },
            workstream: 'Financial & Risk', category: 'Financial', subCategory: 'Cost Structure', topic: 'Cost Structure'
        },
        { 
            id: 'DDI-050', 
            label: 'CRM data and pipeline reports', 
            group: 'input_document', 
            description: 'Sales pipeline quality and conversion metrics', 
            fullPath: '\\Dataroom\\Commercial\\Salesforce_Pipeline_Export.csv',
            revisions: 1,
            contentOverview: 'A raw export of all sales opportunities from Salesforce for the last 36 months.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Data quality is low, with many fields (like close date and amount) not consistently filled out by the sales team.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Sales & Marketing', topic: 'Sales Performance'
        },
        { 
            id: 'DDI-051', 
            label: 'Sales performance and quota attainment data', 
            group: 'input_document', 
            description: 'Individual and team performance against targets', 
            fullPath: '\\Dataroom\\Commercial\\Quota_Attainment_FY24.xlsx',
            revisions: 1,
            contentOverview: 'A report showing quota attainment for each sales representative and team for the last fiscal year.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Clear data for assessing sales team performance.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Sales & Marketing', topic: 'Sales Performance'
        },
        { 
            id: 'DDI-052', 
            label: 'Sales methodology documentation', 
            group: 'input_document', 
            description: 'Sales process, stages, and conversion methodology', 
            fullPath: '\\Dataroom\\Commercial\\Sales_Playbook.pptx',
            revisions: 1,
            contentOverview: 'A presentation outlining the company\'s official sales process and methodology.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The playbook is high-level and appears to be inconsistently followed, based on CRM data.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Sales & Marketing', topic: 'Sales Performance'
        },
        { 
            id: 'DDI-053', 
            label: 'Win/loss analysis reports', 
            group: 'input_document', 
            description: 'Reasons for sales success and failure patterns', 
            fullPath: '\\Dataroom\\Commercial\\Win_Loss_Analysis_Q2.docx',
            revisions: 1,
            contentOverview: 'A qualitative report summarizing reasons for key wins and losses in the last quarter.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Analysis is based on anecdotal sales rep feedback rather than systematic data collection from customers.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Sales & Marketing', topic: 'Sales Performance'
        },
        { 
            id: 'DDI-054', 
            label: 'Channel partner agreements', 
            group: 'input_document', 
            description: 'Partner relationships and channel contribution', 
            fullPath: '\\Dataroom\\Partners\\Channel_Partner_Agreements.zip',
            revisions: 1,
            contentOverview: 'Executed agreements with the company\'s three reseller partners.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Standard reseller agreements.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Sales & Marketing', topic: 'Sales Performance'
        },
        { 
            id: 'DDI-055', 
            label: 'Marketing automation data and metrics', 
            group: 'input_document', 
            description: 'Marketing funnel performance and attribution', 
            fullPath: '\\Dataroom\\Commercial\\HubSpot_Analytics_Export.csv',
            revisions: 1,
            contentOverview: 'An export of key marketing metrics from HubSpot, including MQLs, conversion rates, and campaign performance.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides the necessary data to analyze the top of the sales funnel.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Sales & Marketing', topic: 'Marketing & Growth'
        },
        { 
            id: 'DDI-056', 
            label: 'Lead generation and conversion data', 
            group: 'input_document', 
            description: 'Lead quality, sources, and conversion efficiency', 
            fullPath: '\\Dataroom\\Commercial\\Lead_Source_Analysis.xlsx',
            revisions: 1,
            contentOverview: 'A report analyzing the volume and quality of leads generated from different marketing channels (e.g., organic, paid, events).',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Clear data for assessing marketing channel ROI.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Sales & Marketing', topic: 'Marketing & Growth'
        },
        { 
            id: 'DDI-057', 
            label: 'Pricing models and competitive analysis', 
            group: 'input_document', 
            description: 'Pricing strategy and competitive positioning', 
            fullPath: '\\Dataroom\\Commercial\\Pricing_and_Packaging.pptx',
            revisions: 2,
            contentOverview: 'A presentation outlining the current pricing and packaging structure and how it compares to key competitors.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The pricing model is a single flat rate, which limits upsell potential. The competitive analysis is high-level and lacks detail.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Sales & Marketing', topic: 'Marketing & Growth'
        },
        { 
            id: 'DDI-058', 
            label: 'Brand surveys and market research', 
            group: 'input_document', 
            description: 'Brand perception and market position analysis', 
            fullPath: '\\Dataroom\\Commercial\\Brand_Awareness_Survey_2024.pdf',
            revisions: 1,
            contentOverview: 'Results from a third-party brand awareness survey conducted last year.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides a useful baseline for brand perception in the market.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Sales & Marketing', topic: 'Marketing & Growth'
        },
        { 
            id: 'DDI-059', 
            label: 'Customer transaction databases', 
            group: 'input_document', 
            description: 'Detailed customer purchase history and transaction patterns', 
            fullPath: '\\Dataroom\\Commercial\\Stripe_Data_Export.csv',
            revisions: 1,
            contentOverview: 'A raw export of all customer transactions from the Stripe payment system.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides the granular data needed for cohort analysis and LTV calculations.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Customer Analysis', topic: 'Customer Analytics'
        },
        { 
            id: 'DDI-060', 
            label: 'Billing systems data', 
            group: 'input_document', 
            description: 'Invoice generation, payment terms, and collection data', 
            fullPath: '\\Dataroom\\Financials\\Billing_System_Export.xlsx',
            revisions: 1,
            contentOverview: 'Data from the billing system showing all invoices, payment dates, and any outstanding balances.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Useful for cross-referencing with AR aging and revenue data.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Customer Analysis', topic: 'Customer Analytics'
        },
        { 
            id: 'DDI-061', 
            label: 'Customer contracts and terms', 
            group: 'input_document', 
            description: 'Contract terms, pricing, and renewal provisions', 
            fullPath: '\\Dataroom\\Legal\\Customer_Contracts_Top_50.zip',
            revisions: 2,
            contentOverview: 'Executed contracts for the top 50 customers.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Several key contracts have non-standard terms that increase risk.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Customer Analysis', topic: 'Customer Analytics'
        },
        { 
            id: 'DDI-062', 
            label: 'Customer concentration analysis', 
            group: 'input_document', 
            description: 'Revenue dependency on key customers and concentration risk', 
            fullPath: '\\Dataroom\\Commercial\\ARR_by_Customer.xlsx',
            revisions: 1,
            contentOverview: 'A spreadsheet listing every customer and their associated Annual Recurring Revenue.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'The data is clear and allows for a direct calculation of customer concentration.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Customer Analysis', topic: 'Customer Analytics'
        },
        { 
            id: 'DDI-063', 
            label: 'Cohort and retention analysis', 
            group: 'input_document', 
            description: 'Customer behavior patterns and retention trends over time', 
            fullPath: '\\Dataroom\\Commercial\\Cohort_Analysis_Model.xlsx',
            revisions: 2,
            contentOverview: 'Management\'s internal model for analyzing customer cohort retention and expansion.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The model\'s calculations are complex and difficult to audit. A rebuild based on raw transaction data is recommended.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Customer Analysis', topic: 'Customer Analytics'
        },
        { 
            id: 'DDI-064', 
            label: 'Churn data and exit interviews', 
            group: 'input_document', 
            description: 'Customer attrition rates, reasons, and prevention strategies', 
            fullPath: '\\Dataroom\\Commercial\\Customer_Churn_Analysis_Q2_2025.pptx',
            revisions: 2,
            contentOverview: 'A presentation summarizing logo and revenue churn for the past 8 quarters. Includes qualitative notes from exit interviews with 15 former customers.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The raw data behind the churn calculations was not provided, making it difficult to verify the analysis. Exit interview notes are sparse.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Customer Analysis', topic: 'Customer Experience'
        },
        { 
            id: 'DDI-065', 
            label: 'Net Promoter Score surveys', 
            group: 'input_document', 
            description: 'Customer loyalty and satisfaction measurement', 
            fullPath: '\\Dataroom\\Commercial\\NPS_Survey_Results.csv',
            revisions: 1,
            contentOverview: 'Raw export of all NPS survey responses, including scores and verbatim comments.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides valuable qualitative and quantitative data on customer sentiment.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Customer Analysis', topic: 'Customer Experience'
        },
        { 
            id: 'DDI-066', 
            label: 'Customer satisfaction data', 
            group: 'input_document', 
            description: 'Customer experience metrics and satisfaction drivers', 
            fullPath: '\\Dataroom\\Commercial\\CSAT_Reports.zip',
            revisions: 1,
            contentOverview: 'Quarterly reports on Customer Satisfaction (CSAT) scores, typically gathered after support interactions.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides a good pulse on the quality of the customer support function.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Customer Analysis', topic: 'Customer Experience'
        },
        { 
            id: 'DDI-067', 
            label: 'Customer segmentation studies', 
            group: 'input_document', 
            description: 'Customer categorization and targeted strategy development', 
            fullPath: '\\Dataroom\\Commercial\\Customer_Segmentation_Study.pdf',
            revisions: 1,
            contentOverview: 'A formal study segmenting the customer base by industry, size, and product usage.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides a solid foundation for developing a more targeted go-to-market strategy.'
            },
            workstream: 'Commercial & Customer', category: 'Commercial & Customer', subCategory: 'Customer Analysis', topic: 'Customer Analytics'
        },
        { 
            id: 'DDI-068', 
            label: 'Industry reports (Gartner, IDC, etc.)', 
            group: 'input_document', 
            description: 'Third-party market analysis and industry trends', 
            fullPath: '\\Dataroom\\Market\\Industry_Reports.zip',
            revisions: 1,
            contentOverview: 'A collection of purchased analyst reports on the company\'s target market.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides essential third-party validation of market size and trends.'
            },
            workstream: 'Business & Strategy', category: 'Commercial & Customer', subCategory: 'Market Analysis', topic: 'Market Intelligence'
        },
        { 
            id: 'DDI-069', 
            label: 'Market research and sizing studies', 
            group: 'input_document', 
            description: 'Market opportunity quantification and growth potential', 
            fullPath: '\\Dataroom\\Market\\Market_Sizing_Model.xlsx',
            revisions: 2,
            contentOverview: 'Management\'s internal model for calculating TAM, SAM, and SOM.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The model relies on several unverified, top-down assumptions. A bottom-up analysis is needed for validation.'
            },
            workstream: 'Business & Strategy', category: 'Commercial & Customer', subCategory: 'Market Analysis', topic: 'Market Intelligence'
        },
        { 
            id: 'DDI-070', 
            label: 'Competitive intelligence reports', 
            group: 'input_document', 
            description: 'Competitor analysis, strengths, weaknesses, and market share', 
            fullPath: '\\Dataroom\\Market\\Competitive_Intel_Briefs.zip',
            revisions: 1,
            contentOverview: 'Internal briefs on the top five competitors.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The reports are dated and appear to be based primarily on public information rather than deep analysis.'
            },
            workstream: 'Business & Strategy', category: 'Commercial & Customer', subCategory: 'Competitive Intelligence', topic: 'Market Intelligence'
        },
        { 
            id: 'DDI-071', 
            label: 'Market share data', 
            group: 'input_document', 
            description: 'Company\'s position relative to competitors in market', 
            fullPath: '\\Dataroom\\Market\\Market_Share_Analysis.pptx',
            revisions: 1,
            contentOverview: 'A presentation slide estimating the company\'s market share based on public competitor data.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The calculation is high-level and not well-supported by data. It needs to be rebuilt with more rigor.'
            },
            workstream: 'Business & Strategy', category: 'Commercial & Customer', subCategory: 'Market Analysis', topic: 'Market Intelligence'
        },
        { 
            id: 'DDI-072', 
            label: 'Economic forecasts and trend analysis', 
            group: 'input_document', 
            description: 'Macro-economic factors affecting business performance', 
            fullPath: '\\Dataroom\\Market\\Economic_Trend_Analysis.docx',
            revisions: 1,
            contentOverview: 'A brief document outlining key macroeconomic trends relevant to the industry.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides useful context for the financial model.'
            },
            workstream: 'Business & Strategy', category: 'Commercial & Customer', subCategory: 'Market Analysis', topic: 'Market Intelligence'
        },
        { 
            id: 'DDI-073', 
            label: 'Product roadmaps and feature backlogs', 
            group: 'input_document', 
            description: 'Future product development priorities and timeline', 
            fullPath: '\\Dataroom\\Product\\Product_Roadmap_2026.pptx',
            revisions: 3,
            contentOverview: 'A presentation outlining the product roadmap for the next 18 months, including major themes and features.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The roadmap seems disconnected from customer feedback and recent product launch failures. It appears to be technology-driven rather than market-driven.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Product & Development', topic: 'Product Development'
        },
        { 
            id: 'DDI-074', 
            label: 'R&D budgets and resource allocation', 
            group: 'input_document', 
            description: 'Investment in product development and innovation', 
            fullPath: '\\Dataroom\\Product\\RD_Budget_Allocation.xlsx',
            revisions: 1,
            contentOverview: 'A breakdown of the R&D budget by project, team, and type (e.g., new features, maintenance).',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'A high percentage of the budget (40%) is allocated to maintaining the legacy monolith, leaving limited resources for innovation.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Product & Development', topic: 'Product Development'
        },
        { 
            id: 'DDI-075', 
            label: 'Development process documentation', 
            group: 'input_document', 
            description: 'Software/product development methodology and workflows', 
            fullPath: '\\Dataroom\\Product\\SDLC_Documentation.docx',
            revisions: 1,
            contentOverview: 'A document describing the company\'s software development lifecycle (SDLC), which is a modified form of Agile.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'The process is well-documented, though its effectiveness is questionable based on velocity metrics.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Product & Development', topic: 'Product Development'
        },
        { 
            id: 'DDI-076', 
            label: 'Project management tools data', 
            group: 'input_document', 
            description: 'Project tracking, resource utilization, and delivery metrics', 
            fullPath: '\\Dataroom\\Product\\Jira_Export.csv',
            revisions: 1,
            contentOverview: 'A raw data export from Jira containing all epics, stories, and tasks for the past two years.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides the raw data needed to analyze developer velocity and cycle times.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Product & Development', topic: 'Operational Processes'
        },
        { 
            id: 'DDI-077', 
            label: 'Release processes and deployment pipelines', 
            group: 'input_document', 
            description: 'Product release methodology and deployment procedures', 
            fullPath: '\\Dataroom\\Product\\Release_Process.docx',
            revisions: 1,
            contentOverview: 'A document outlining the manual process for deploying new releases to production.',
            qualityAssessment: {
                rating: 'Bad',
                justification: 'The release process is entirely manual, slow, and high-risk. There is no CI/CD pipeline.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Product & Development', topic: 'Product Development'
        },
        { 
            id: 'DDI-078', 
            label: 'System architecture diagrams', 
            group: 'input_document', 
            description: 'Technical architecture and system design documentation', 
            fullPath: '\\Dataroom\\Technology\\Architecture_Diagrams.pptx',
            revisions: 2,
            contentOverview: 'A presentation with high-level diagrams of the core application architecture and its key components.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The diagrams are high-level and appear to be outdated. They do not reflect the current state of the production environment.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Technical Infrastructure', topic: 'Technical Infrastructure'
        },
        { 
            id: 'DDI-079', 
            label: 'Technology stack documentation', 
            group: 'input_document', 
            description: 'Technology choices, dependencies, and technical specifications', 
            fullPath: '\\Dataroom\\Technology\\Tech_Stack.xlsx',
            revisions: 1,
            contentOverview: 'A spreadsheet listing the key technologies, frameworks, and libraries used in the product.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The stack includes several outdated and unsupported open-source libraries, posing a security risk.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Technical Infrastructure', topic: 'Technical Infrastructure'
        },
        { 
            id: 'DDI-080', 
            label: 'Infrastructure specifications', 
            group: 'input_document', 
            description: 'Hardware, software, and cloud infrastructure requirements', 
            fullPath: '\\Dataroom\\Technology\\Infrastructure_Spec.docx',
            revisions: 1,
            contentOverview: 'A document detailing the server and network specifications for the on-premise hosting environment.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides a clear picture of the current infrastructure.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Technical Infrastructure', topic: 'Technical Infrastructure'
        },
        { 
            id: 'DDI-081', 
            label: 'Security protocols and audit results', 
            group: 'input_document', 
            description: 'Cybersecurity measures, controls, and vulnerability assessments', 
            fullPath: '\\Dataroom\\Technology\\Security_Audit_2024.pdf',
            revisions: 1,
            contentOverview: 'The report from the most recent third-party penetration test.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The audit identified several high-severity vulnerabilities that have not yet been remediated.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Technical Infrastructure', topic: 'Technical Infrastructure'
        },
        { 
            id: 'DDI-082', 
            label: 'Scalability metrics and performance data', 
            group: 'input_document', 
            description: 'System performance capabilities and scaling requirements', 
            fullPath: '\\Dataroom\\Technology\\Performance_Metrics.xlsx',
            revisions: 1,
            contentOverview: 'Data from monitoring tools showing CPU utilization, memory usage, and application response times under load.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The data shows significant performance degradation at peak loads, confirming scalability issues.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Technical Infrastructure', topic: 'Technical Infrastructure'
        },
        { 
            id: 'DDI-083', 
            label: 'Source code repositories (if applicable)', 
            group: 'input_document', 
            description: 'Code quality, technical debt, and development practices', 
            fullPath: '\\Dataroom\\Technology\\GitHub_Access_Instructions.txt',
            revisions: 1,
            contentOverview: 'Instructions to access the company\'s private GitHub repository.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Access is required for a full code scan.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Technical Infrastructure', topic: 'Technical Infrastructure'
        },
        { 
            id: 'DDI-084', 
            label: 'Technical documentation and API docs', 
            group: 'input_document', 
            description: 'Technical specifications and integration documentation', 
            fullPath: '\\Dataroom\\Technology\\API_Documentation.html',
            revisions: 1,
            contentOverview: 'Documentation for the public API offered to customers.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The documentation is incomplete and does not match the current API version, which will frustrate developers and hinder adoption.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Technical Infrastructure', topic: 'Technical Infrastructure'
        },
        { 
            id: 'DDI-085', 
            label: 'Quality assurance processes', 
            group: 'input_document', 
            description: 'QA methodology, testing procedures, and quality standards', 
            fullPath: '\\Dataroom\\Technology\\QA_Process.docx',
            revisions: 1,
            contentOverview: 'A document outlining the manual QA process.',
            qualityAssessment: {
                rating: 'Bad',
                justification: 'The QA process is entirely manual, with no automated testing. This is a major bottleneck for release velocity.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Quality & Operations', topic: 'Operational Processes'
        },
        { 
            id: 'DDI-086', 
            label: 'Test plans and coverage reports', 
            group: 'input_document', 
            description: 'Testing strategy, coverage analysis, and quality metrics', 
            fullPath: '\\Dataroom\\Technology\\Test_Plans.zip',
            revisions: 1,
            contentOverview: 'A collection of manual test plans for various product features.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Test coverage is not systematically tracked, so it is unclear how much of the application is tested before release.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Quality & Operations', topic: 'Operational Processes'
        },
        { 
            id: 'DDI-087', 
            label: 'Bug tracking and defect data', 
            group: 'input_document', 
            description: 'Defect management, resolution tracking, and quality trends', 
            fullPath: '\\Dataroom\\Technology\\Bug_Backlog.csv',
            revisions: 1,
            contentOverview: 'An export of the bug tracking system, showing all open and recently closed defects.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'There is a large backlog of open, non-trivial bugs, indicating potential quality issues in the core product.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Quality & Operations', topic: 'Operational Processes'
        },
        { 
            id: 'DDI-088', 
            label: 'Quality metrics and KPIs', 
            group: 'input_document', 
            description: 'Quality performance indicators and continuous improvement metrics', 
            fullPath: '\\Dataroom\\Technology\\Quality_KPIs.xlsx',
            revisions: 1,
            contentOverview: 'A spreadsheet tracking key quality metrics like bug escape rate and mean time to resolution (MTTR).',
            qualityAssessment: {
                rating: 'Good',
                justification: 'The company tracks the right metrics, although the trends themselves show room for improvement.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Quality & Operations', topic: 'Operational Processes'
        },
        { 
            id: 'DDI-089', 
            label: 'Operational process documentation', 
            group: 'input_document', 
            description: 'Standard operating procedures and process optimization', 
            fullPath: '\\Dataroom\\Operations\\SOPs.zip',
            revisions: 1,
            contentOverview: 'A collection of Standard Operating Procedures (SOPs) for key operational tasks.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Processes are documented, which is a sign of operational maturity.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Quality & Operations', topic: 'Operational Processes'
        },
        { 
            id: 'DDI-090', 
            label: 'Incident response plans', 
            group: 'input_document', 
            description: 'Emergency response procedures and crisis management', 
            fullPath: '\\Dataroom\\Operations\\Incident_Response_Plan.pdf',
            revisions: 1,
            contentOverview: 'The formal plan for responding to system outages and security incidents.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The plan has not been updated in three years and does not include contact information for current key personnel.'
            },
            workstream: 'Technology & Operations', category: 'Technology & Operations', subCategory: 'Quality & Operations', topic: 'Operational Processes'
        },
        { 
            id: 'DDI-091', 
            label: 'Organizational charts and reporting structures', 
            group: 'input_document', 
            description: 'Company hierarchy, reporting relationships, and span of control', 
            fullPath: '\\Dataroom\\HR\\Org_Chart.pptx',
            revisions: 3,
            contentOverview: 'The current organizational chart for the entire company.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides a clear view of the company structure.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'Leadership & Organization', topic: 'Leadership & Organization'
        },
        { 
            id: 'DDI-092', 
            label: 'Executive resumes and LinkedIn profiles', 
            group: 'input_document', 
            description: 'Leadership team background, experience, and qualifications', 
            fullPath: '\\Dataroom\\HR\\Executive_Resumes.zip',
            revisions: 1,
            contentOverview: 'Resumes for all C-level and VP-level employees.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides the necessary background information for management assessment.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'Leadership & Organization', topic: 'Leadership & Organization'
        },
        { 
            id: 'DDI-093', 
            label: 'Management team performance reviews', 
            group: 'input_document', 
            description: 'Leadership performance assessment and development needs', 
            fullPath: '\\Dataroom\\HR\\Management_Performance_Reviews.zip',
            revisions: 1,
            contentOverview: 'The most recent annual performance reviews for the executive team.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides insight into management strengths and areas for development.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'Leadership & Organization', topic: 'Leadership & Organization'
        },
        { 
            id: 'DDI-094', 
            label: '360 assessments and reference contacts', 
            group: 'input_document', 
            description: 'Multi-source feedback and external reference validation', 
            fullPath: '\\Dataroom\\HR\\Reference_Contacts.xlsx',
            revisions: 1,
            contentOverview: 'A list of professional references for the key members of the management team.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Necessary for conducting off-list reference checks.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'Leadership & Organization', topic: 'Leadership & Organization'
        },
        { 
            id: 'DDI-095', 
            label: 'Succession planning documentation', 
            group: 'input_document', 
            description: 'Leadership continuity planning and talent pipeline', 
            fullPath: '\\Dataroom\\HR\\Succession_Plan.pptx',
            revisions: 1,
            contentOverview: 'A presentation outlining the succession plan for key executive roles.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The plan identifies successors but lacks concrete development plans to prepare them for the roles.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'Leadership & Organization', topic: 'Leadership & Organization'
        },
        { 
            id: 'DDI-096', 
            label: 'Compensation plans and structures', 
            group: 'input_document', 
            description: 'Employee compensation philosophy, structure, and pay scales', 
            fullPath: '\\Dataroom\\HR\\Compensation_Bands.xlsx',
            revisions: 2,
            contentOverview: 'A spreadsheet detailing the salary bands for all roles within the company.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides clear data for assessing compensation competitiveness.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'Compensation & Benefits', topic: 'Compensation & Benefits'
        },
        { 
            id: 'DDI-097', 
            label: 'Bonus and incentive programs', 
            group: 'input_document', 
            description: 'Variable compensation design and performance alignment', 
            fullPath: '\\Dataroom\\HR\\Bonus_Plans.zip',
            revisions: 1,
            contentOverview: 'Documents outlining the structure of the annual bonus and sales commission plans.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The sales commission plan only rewards new business and does not incentivize renewals or expansion, which is misaligned with a SaaS model.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'Compensation & Benefits', topic: 'Compensation & Benefits'
        },
        { 
            id: 'DDI-098', 
            label: 'Equity participation plans', 
            group: 'input_document', 
            description: 'Employee equity programs and long-term incentives', 
            fullPath: '\\Dataroom\\HR\\Stock_Option_Plan.pdf',
            revisions: 1,
            contentOverview: 'The legal document establishing the company\'s employee stock option plan.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Standard plan document.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'Compensation & Benefits', topic: 'Compensation & Benefits'
        },
        { 
            id: 'DDI-099', 
            label: 'Benefits programs and costs', 
            group: 'input_document', 
            description: 'Employee benefits package and associated costs', 
            fullPath: '\\Dataroom\\HR\\Benefits_Summary.pdf',
            revisions: 1,
            contentOverview: 'A summary of the employee benefits package, including health insurance, 401k, and other perks.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides a clear overview of benefits costs.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'Compensation & Benefits', topic: 'Compensation & Benefits'
        },
        { 
            id: 'DDI-100', 
            label: 'Benchmarking and market data', 
            group: 'input_document', 
            description: 'External compensation benchmarking and market analysis', 
            fullPath: '\\Dataroom\\HR\\Compensation_Benchmark_Study.pdf',
            revisions: 1,
            contentOverview: 'A third-party report benchmarking the company\'s compensation against the market.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The study is three years old and likely does not reflect current market rates, especially for technical roles.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'Compensation & Benefits', topic: 'Compensation & Benefits'
        },
        { 
            id: 'DDI-101', 
            label: 'Employee directory and headcount data', 
            group: 'input_document', 
            description: 'Current employee roster and workforce composition', 
            fullPath: '\\Dataroom\\HR\\Employee_Roster.xlsx',
            revisions: 4,
            contentOverview: 'A list of all current employees with their role, department, start date, and salary.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Essential data for HR and financial analysis.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'HR Operations', topic: 'HR Operations'
        },
        { 
            id: 'DDI-102', 
            label: 'HR policies and procedures', 
            group: 'input_document', 
            description: 'Human resources policies and operational procedures', 
            fullPath: '\\Dataroom\\HR\\Employee_Handbook.pdf',
            revisions: 2,
            contentOverview: 'The official employee handbook outlining all company policies.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Appears to be a comprehensive and up-to-date handbook.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'HR Operations', topic: 'HR Operations'
        },
        { 
            id: 'DDI-103', 
            label: 'Training and development programs', 
            group: 'input_document', 
            description: 'Employee learning and development initiatives', 
            fullPath: '\\Dataroom\\HR\\Training_Programs.docx',
            revisions: 1,
            contentOverview: 'A document listing available training and development programs for employees.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Programs are limited and there is no formal budget for learning and development, which could impact employee retention.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'HR Operations', topic: 'HR Operations'
        },
        { 
            id: 'DDI-104', 
            label: 'Performance management systems', 
            group: 'input_document', 
            description: 'Performance evaluation processes and systems', 
            fullPath: '\\Dataroom\\HR\\Performance_Review_Process.pdf',
            revisions: 1,
            contentOverview: 'A description of the annual performance review process.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'A formal process is in place.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'HR Operations', topic: 'HR Operations'
        },
        { 
            id: 'DDI-105', 
            label: 'Turnover and retention data', 
            group: 'input_document', 
            description: 'Employee attrition rates, reasons, and retention strategies', 
            fullPath: '\\Dataroom\\HR\\Turnover_Data_Q2_2025.xlsx',
            revisions: 1,
            contentOverview: 'A report on employee turnover for the last quarter, broken down by department.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'High turnover (35% annualized) in the engineering department is a significant red flag.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'HR Operations', topic: 'HR Operations'
        },
        { 
            id: 'DDI-106', 
            label: 'Exit interview summaries', 
            group: 'input_document', 
            description: 'Departing employee feedback and improvement insights', 
            fullPath: '\\Dataroom\\HR\\Exit_Interview_Summaries.zip',
            revisions: 1,
            contentOverview: 'Anonymized summaries of exit interviews conducted over the past year.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides valuable qualitative data on reasons for attrition.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'HR Operations', topic: 'HR Operations'
        },
        { 
            id: 'DDI-107', 
            label: 'Recruitment pipeline and strategies', 
            group: 'input_document', 
            description: 'Hiring processes, sourcing strategies, and talent pipeline', 
            fullPath: '\\Dataroom\\HR\\Recruitment_Strategy.pptx',
            revisions: 1,
            contentOverview: 'A presentation on the company\'s strategy for recruiting new talent.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The strategy is not well-defined and lacks metrics for tracking effectiveness.'
            },
            workstream: 'Business & Strategy', category: 'Human Resources & Management', subCategory: 'HR Operations', topic: 'HR Operations'
        },
        { 
            id: 'DDI-108', 
            label: 'Strategic plans and presentations', 
            group: 'input_document', 
            description: 'Company strategy, vision, and strategic initiatives', 
            fullPath: '\\Dataroom\\Strategy\\5_Year_Strategic_Plan.pptx',
            revisions: 2,
            contentOverview: 'The management team\'s presentation outlining the strategic plan for the next five years.',
            qualityAssessment: {
                rating: 'Bad',
                justification: 'The plan is highly optimistic and lacks the detailed initiatives required to achieve its goals. It is not considered credible.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'Strategic Planning', topic: 'Strategic Planning'
        },
        { 
            id: 'DDI-109', 
            label: 'Business plan updates', 
            group: 'input_document', 
            description: 'Current business plan and strategic direction updates', 
            fullPath: '\\Dataroom\\Strategy\\Business_Plan_Update_Q2.docx',
            revisions: 1,
            contentOverview: 'The most recent quarterly update to the business plan.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides a current view of the company\'s priorities.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'Strategic Planning', topic: 'Strategic Planning'
        },
        { 
            id: 'DDI-110', 
            label: 'Investment thesis documentation', 
            group: 'input_document', 
            description: 'PE investment rationale and value creation strategy', 
            fullPath: '\\Internal\\Investment_Thesis_Project_Tiger.docx',
            revisions: 4,
            contentOverview: 'The internal investment thesis document outlining the rationale for the deal and the key value creation levers.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'The foundational document for the deal.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'Strategic Planning', topic: 'Strategic Planning'
        },
        { 
            id: 'DDI-111', 
            label: 'Board presentation materials', 
            group: 'input_document', 
            description: 'Regular board reporting and strategic communication', 
            fullPath: '\\Dataroom\\Strategy\\Board_Decks.zip',
            revisions: 1,
            contentOverview: 'A collection of all board meeting presentations from the last three years.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides a clear history of performance and strategic discussions.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'Strategic Planning', topic: 'Strategic Planning'
        },
        { 
            id: 'DDI-112', 
            label: 'Scenario planning and assumptions', 
            group: 'input_document', 
            description: 'Alternative scenarios and strategic assumption testing', 
            fullPath: '\\Dataroom\\Strategy\\Scenario_Analysis.xlsx',
            revisions: 1,
            contentOverview: 'A model showing upside, base, and downside scenarios for the business.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The assumptions for the upside case are not well-supported.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'Strategic Planning', topic: 'Strategic Planning'
        },
        { 
            id: 'DDI-113', 
            label: 'Previous acquisition documentation', 
            group: 'input_document', 
            description: 'Historical M&A transactions and deal documentation', 
            fullPath: '\\Dataroom\\Strategy\\Prior_Acquisition_Docs.zip',
            revisions: 1,
            contentOverview: 'Legal documents and financial models for two small acquisitions the company made in the past.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides insight into the company\'s M&A capabilities.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'M&A History', topic: 'M&A History'
        },
        { 
            id: 'DDI-114', 
            label: 'Integration plans and results', 
            group: 'input_document', 
            description: 'Post-acquisition integration execution and outcomes', 
            fullPath: '\\Dataroom\\Strategy\\Integration_Post_Mortems.docx',
            revisions: 1,
            contentOverview: 'Post-mortem reports on the integration of two prior acquisitions.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The reports indicate that both integrations were challenging and failed to meet initial synergy targets.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'M&A History', topic: 'M&A History'
        },
        { 
            id: 'DDI-115', 
            label: 'Post-acquisition performance data', 
            group: 'input_document', 
            description: 'M&A success metrics and performance tracking', 
            fullPath: '\\Dataroom\\Strategy\\Acquisition_Performance.xlsx',
            revisions: 1,
            contentOverview: 'Financial data showing the performance of acquired business lines post-acquisition.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides clear data on the financial success of past M&A.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'M&A History', topic: 'M&A History'
        },
        { 
            id: 'DDI-116', 
            label: 'Deal rationale and synergy reports', 
            group: 'input_document', 
            description: 'M&A strategic rationale and synergy identification/realization', 
            fullPath: '\\Dataroom\\Strategy\\Synergy_Reports_Prior_Deals.pdf',
            revisions: 1,
            contentOverview: 'Reports outlining the expected synergies from past deals.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Useful for comparing expected vs. actual results.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'M&A History', topic: 'M&A History'
        },
        { 
            id: 'DDI-117', 
            label: 'Due diligence reports from prior deals', 
            group: 'input_document', 
            description: 'Historical due diligence findings and deal insights', 
            fullPath: '\\Dataroom\\Strategy\\Prior_DD_Reports.zip',
            revisions: 1,
            contentOverview: 'Third-party due diligence reports from previous acquisitions.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides insight into risks that were identified in the past.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'M&A History', topic: 'M&A History'
        },
        { 
            id: 'DDI-118', 
            label: 'Growth investment plans', 
            group: 'input_document', 
            description: 'Investment requirements for growth initiatives', 
            fullPath: '\\Dataroom\\Strategy\\Growth_Initiative_Budgets.xlsx',
            revisions: 1,
            contentOverview: 'Budgets and investment plans for key growth initiatives outlined in the strategic plan.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides detail on planned investments.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'Growth Initiatives', topic: 'Growth Initiatives'
        },
        { 
            id: 'DDI-119', 
            label: 'New market entry strategies', 
            group: 'input_document', 
            description: 'Geographic or market expansion strategies and plans', 
            fullPath: '\\Dataroom\\Strategy\\EMEA_Expansion_Plan.pptx',
            revisions: 1,
            contentOverview: 'A detailed plan for expanding into the EMEA market.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The plan lacks detail on regulatory hurdles and local competition.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'Growth Initiatives', topic: 'Growth Initiatives'
        },
        { 
            id: 'DDI-120', 
            label: 'Product expansion roadmaps', 
            group: 'input_document', 
            description: 'New product development and market expansion plans', 
            fullPath: '\\Dataroom\\Product\\Product_Expansion_Roadmap.pdf',
            revisions: 2,
            contentOverview: 'A roadmap focused specifically on features designed to attract new market segments.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Clearly linked to the overall strategic growth plan.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'Growth Initiatives', topic: 'Growth Initiatives'
        },
        { 
            id: 'DDI-121', 
            label: 'Partnership and alliance agreements', 
            group: 'input_document', 
            description: 'Strategic partnerships and alliance relationships', 
            fullPath: '\\Dataroom\\Partners\\Strategic_Alliance_Agreements.zip',
            revisions: 1,
            contentOverview: 'Agreements with key strategic partners.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Standard alliance agreements.'
            },
            workstream: 'Business & Strategy', category: 'Strategic & Business Development', subCategory: 'Growth Initiatives', topic: 'Growth Initiatives'
        },
        { 
            id: 'DDI-122', 
            label: 'Risk assessment reports', 
            group: 'input_document', 
            description: 'Enterprise risk identification, assessment, and mitigation', 
            fullPath: '\\Dataroom\\Risk\\Enterprise_Risk_Assessment.xlsx',
            revisions: 2,
            contentOverview: 'The company\'s internal enterprise risk management (ERM) report.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The report identifies several key risks but lacks detailed mitigation plans.'
            },
            workstream: 'Financial & Risk', category: 'Risk & Insurance', subCategory: 'Risk Management', topic: 'Risk Management'
        },
        { 
            id: 'DDI-123', 
            label: 'Contingent liability documentation', 
            group: 'input_document', 
            description: 'Potential liabilities and contingent obligations', 
            fullPath: '\\Dataroom\\Risk\\Contingent_Liabilities.docx',
            revisions: 1,
            contentOverview: 'A document listing potential liabilities, including the ongoing patent litigation.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Provides a clear view of known contingent liabilities.'
            },
            workstream: 'Financial & Risk', category: 'Risk & Insurance', subCategory: 'Risk Management', topic: 'Risk Management'
        },
        { 
            id: 'DDI-124', 
            label: 'Insurance policies and coverage', 
            group: 'input_document', 
            description: 'Insurance program design and coverage adequacy', 
            fullPath: '\\Dataroom\\Risk\\Insurance_Policies_2025.pdf',
            revisions: 1,
            contentOverview: 'Binder for all current insurance policies.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Cybersecurity coverage is low.'
            },
            workstream: 'Financial & Risk', category: 'Risk & Insurance', subCategory: 'Risk Management', topic: 'Risk Management'
        },
        { 
            id: 'DDI-125', 
            label: 'Claims history and reserves', 
            group: 'input_document', 
            description: 'Insurance claims experience and reserve adequacy', 
            fullPath: '\\Dataroom\\Risk\\Claims_History.xlsx',
            revisions: 1,
            contentOverview: 'A report detailing all insurance claims made over the past five years.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Claims history is clean with no major incidents.'
            },
            workstream: 'Financial & Risk', category: 'Risk & Insurance', subCategory: 'Risk Management', topic: 'Risk Management'
        },
        { 
            id: 'DDI-126', 
            label: 'Business continuity plans', 
            group: 'input_document', 
            description: 'Business continuity and disaster recovery planning', 
            fullPath: '\\Dataroom\\Risk\\BCP_DR_Plan.docx',
            revisions: 2,
            contentOverview: 'The company\'s business continuity and disaster recovery plan.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'The plan has not been tested in over two years.'
            },
            workstream: 'Financial & Risk', category: 'Risk & Insurance', subCategory: 'Risk Management', topic: 'Risk Management'
        },
        { 
            id: 'DDI-127', 
            label: 'Cybersecurity policies and incident reports', 
            group: 'input_document', 
            description: 'Cybersecurity governance and incident management', 
            fullPath: '\\Dataroom\\Risk\\Cybersecurity_Policies.zip',
            revisions: 1,
            contentOverview: 'A collection of internal cybersecurity policies and reports on past incidents.',
            qualityAssessment: {
                rating: 'Concerns',
                justification: 'Policies are not comprehensive, and there was one minor data breach last year that was not disclosed.'
            },
            workstream: 'Financial & Risk', category: 'Risk & Insurance', subCategory: 'Risk Management', topic: 'Risk Management'
        },
        { 
            id: 'DDI-128', 
            label: 'Regulatory compliance documentation', 
            group: 'input_document', 
            description: 'Regulatory compliance status and documentation', 
            fullPath: '\\Dataroom\\Risk\\Compliance_Checklist.xlsx',
            revisions: 1,
            contentOverview: 'A checklist of key regulations and the company\'s compliance status.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'Shows a proactive approach to compliance.'
            },
            workstream: 'Financial & Risk', category: 'Risk & Insurance', subCategory: 'Regulatory & Compliance', topic: 'Regulatory & Compliance'
        },
        { 
            id: 'DDI-129', 
            label: 'Industry-specific certifications', 
            group: 'input_document', 
            description: 'Industry certifications and compliance credentials', 
            fullPath: '\\Dataroom\\Risk\\Certifications.pdf',
            revisions: 1,
            contentOverview: 'Copies of relevant industry certifications (e.g., SOC 2 Type II).',
            qualityAssessment: {
                rating: 'Good',
                justification: 'SOC 2 compliance is a key selling point for enterprise customers.'
            },
            workstream: 'Financial & Risk', category: 'Risk & Insurance', subCategory: 'Regulatory & Compliance', topic: 'Regulatory & Compliance'
        },
        { 
            id: 'DDI-130', 
            label: 'Environmental impact assessments', 
            group: 'input_document', 
            description: 'Environmental compliance and impact analysis', 
            fullPath: '\\Dataroom\\Risk\\Environmental_Impact_Assessment.pdf',
            revisions: 1,
            contentOverview: 'Not applicable for this SaaS business.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'N/A'
            },
            workstream: 'Financial & Risk', category: 'Risk & Insurance', subCategory: 'Regulatory & Compliance', topic: 'Regulatory & Compliance'
        },
        { 
            id: 'DDI-131', 
            label: 'Health and safety records', 
            group: 'input_document', 
            description: 'Workplace safety compliance and incident tracking', 
            fullPath: '\\Dataroom\\Risk\\Health_and_Safety.docx',
            revisions: 1,
            contentOverview: 'Documentation of the company\'s health and safety policies and incident log.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'No major incidents reported.'
            },
            workstream: 'Financial & Risk', category: 'Risk & Insurance', subCategory: 'Regulatory & Compliance', topic: 'Regulatory & Compliance'
        },
        { 
            id: 'DDI-132', 
            label: 'Data privacy and GDPR compliance', 
            group: 'input_document', 
            description: 'Data protection compliance and privacy program', 
            fullPath: '\\Dataroom\\Risk\\Compliance\\GDPR_Policy_and_Procedures.docx',
            revisions: 1,
            contentOverview: 'Internal policy document outlining procedures for data handling, subject access requests, and breach notifications to comply with GDPR.',
            qualityAssessment: {
                rating: 'Good',
                justification: 'The document appears comprehensive and was recently updated. It will require legal review for confirmation.'
            },
            workstream: 'Financial & Risk', category: 'Risk & Insurance', subCategory: 'Regulatory & Compliance', topic: 'Regulatory & Compliance'
        },

        // --- GROUP 2: DILIGENCE TASKS (Fully Enriched & Re-mapped) ---
        { id: "DD-1", label: "Company Overview & History", group: "task", description: "Review the company's founding story, mission, and key historical milestones.", output: "1-page summary of company history and structure.", workstream: "Business & Strategy", category: "Company & Team", topic: "Company Foundation", questionsAnswered: "What is the company's history and mission?", aiAccelerators: "Document Parser AI, Timeline Generator" },
        { id: "DD-2", label: "Organization Review", group: "task", description: "Analyze the current organizational chart, reporting lines, and headcount by department.", output: "Validated org chart and headcount analysis.", workstream: "Business & Strategy", category: "Company & Team", topic: "Leadership & Organization", questionsAnswered: "How is the company structured?", aiAccelerators: "Org Chart Generator AI" },
        { id: "DD-3", label: "Management Assessment", group: "task", description: "Conduct interviews with key management to assess strengths, weaknesses, and cultural fit.", output: "Management team scorecard and qualitative assessment.", workstream: "Business & Strategy", category: "Company & Team", topic: "Leadership & Organization", questionsAnswered: "Is the management team capable?", aiAccelerators: "Executive Background Checker" },
        { id: "DD-4", label: "Comp Incentives Analysis", group: "task", description: "Review salary bands, bonus structures, and equity plans for alignment with growth goals.", output: "Compensation and incentive plan summary.", workstream: "Business & Strategy", category: "Company & Team", topic: "Compensation & Benefits", questionsAnswered: "Are incentives aligned with goals?", aiAccelerators: "Compensation Benchmarker AI" },
        { id: "DD-5", label: "HR Growth Plans", group: "task", description: "Evaluate the company's hiring plan, onboarding processes, and talent retention strategies.", output: "Assessment of HR scalability and key hiring risks.", workstream: "Business & Strategy", category: "Company & Team", topic: "HR Operations", questionsAnswered: "Can the company scale its team effectively?", aiAccelerators: "Talent Gap Analyzer" },
        { id: "DD-6", label: "Acquisition History", group: "task", description: "Review past M&A activity for integration success and realized synergies.", output: "Summary of historical M&A performance.", workstream: "Business & Strategy", category: "Company & Team", topic: "M&A History", questionsAnswered: "What is the company's M&A track record?", aiAccelerators: "M&A Timeline Generator" },
        { id: "DD-7", label: "Addressable Market", group: "task", description: "Validate management's TAM, SAM, and SOM estimates using third-party data.", output: "Validated market sizing model.", workstream: "Business & Strategy", category: "Market & Competition", topic: "Market Intelligence", questionsAnswered: "How big is the market opportunity?", aiAccelerators: "Market Sizing AI" },
        { id: "DD-8", label: "Barriers to Entry", group: "task", description: "Assess the company's competitive moat, including IP, network effects, and switching costs.", output: "Analysis of competitive differentiators.", workstream: "Business & Strategy", category: "Market & Competition", topic: "Market Intelligence", questionsAnswered: "How defensible is the business?", aiAccelerators: "Moat Identifier" },
        { id: "DD-9", label: "Macro Trends", group: "task", description: "Identify key industry trends (e.g., regulatory, technological) that could impact the business.", output: "Summary of market tailwinds and headwinds.", workstream: "Business & Strategy", category: "Market & Competition", topic: "Market Intelligence", questionsAnswered: "What external factors are at play?", aiAccelerators: "Trend Analyzer AI" },
        { id: "DD-10", label: "Competitive Dynamics", group: "task", description: "Profile key competitors, their market share, and relative strengths/weaknesses.", output: "Competitive landscape matrix.", workstream: "Business & Strategy", category: "Market & Competition", topic: "Market Intelligence", questionsAnswered: "Who are the main competitors?", aiAccelerators: "Competitive Intelligence AI" },
        { id: "DD-11", label: "Market Positioning", group: "task", description: "Determine the company's position in the market relative to competitors (e.g., price vs. features).", output: "2x2 positioning chart.", workstream: "Business & Strategy", category: "Market & Competition", topic: "Market Intelligence", questionsAnswered: "Where does the company fit in the market?", aiAccelerators: "Market Position Mapper" },
        { id: "DD-12", label: "Development Process", group: "task", description: "Review the software development lifecycle (SDLC), agile methodologies, and release cadence.", output: "Assessment of engineering team's velocity and process maturity.", workstream: "Technology & Operations", category: "Products and Technology", topic: "Product Development", questionsAnswered: "How efficiently does the team build software?", aiAccelerators: "DevOps Analyzer" },
        { id: "DD-13", label: "Architecture Review", group: "task", description: "Analyze the core application architecture for scalability, technical debt, and modernization risks.", output: "Architectural diagram with key risks and recommendations.", workstream: "Technology & Operations", category: "Products and Technology", topic: "Technical Infrastructure", questionsAnswered: "Is the technology scalable and modern?", aiAccelerators: "Architecture Scanner AI" },
        { id: "DD-14", label: "Product Roadmap", group: "task", description: "Evaluate the credibility and ROI of the product roadmap for the next 18-24 months.", output: "Critique of the product roadmap and alignment with strategy.", workstream: "Technology & Operations", category: "Products and Technology", topic: "Product Development", questionsAnswered: "Is the product roadmap credible?", aiAccelerators: "Roadmap Validator" },
        { id: "DD-15", label: "Product Management", group: "task", description: "Assess the process for gathering customer feedback and prioritizing features.", output: "Review of product management function.", workstream: "Technology & Operations", category: "Products and Technology", topic: "Product Development", questionsAnswered: "How are product decisions made?", aiAccelerators: "PM Process Analyzer" },
        { id: "DD-16", label: "Code Scan", group: "task", description: "Perform a static code analysis to identify security vulnerabilities and code quality issues.", output: "Code quality and security report (e.g., Veracode scan results).", workstream: "Technology & Operations", category: "Products and Technology", topic: "Technical Infrastructure", questionsAnswered: "What is the quality of the code?", aiAccelerators: "Code Quality Scanner" },
        { id: "DD-17", label: "Documentation", group: "task", description: "Review the quality and completeness of technical and user documentation.", output: "Gap analysis of existing documentation.", workstream: "Technology & Operations", category: "Products and Technology", topic: "Technical Infrastructure", questionsAnswered: "Is the product well-documented?", aiAccelerators: "Documentation Auditor" },
        { id: "DD-18", label: "QA Testing Review", group: "task", description: "Analyze the company's quality assurance processes, including automated and manual testing.", output: "Assessment of QA maturity and bug tracking.", workstream: "Technology & Operations", category: "Products and Technology", topic: "Quality & Operations", questionsAnswered: "How effective is the QA process?", aiAccelerators: "QA Process Analyzer" },
        { id: "DD-19", label: "Release Management", group: "task", description: "Review the process for deploying new releases to production and handling rollbacks.", output: "Summary of release management process.", workstream: "Technology & Operations", category: "Products and Technology", topic: "Operational Processes", questionsAnswered: "How are releases managed?", aiAccelerators: "Release Pipeline Analyzer" },
        { id: "DD-20", label: "Pipeline Review", group: "task", description: "Analyze the sales pipeline for coverage, stage distribution, and forecast accuracy.", output: "Sales pipeline health assessment.", workstream: "Commercial & Customer", category: "Sales & Marketing", topic: "Sales Performance", questionsAnswered: "What is the health of the sales pipeline?", aiAccelerators: "Sales Pipeline Analyzer" },
        { id: "DD-21", label: "Quota Attainment Analysis", group: "task", description: "Review historical quota attainment by sales reps and segments.", output: "Analysis of sales team performance.", workstream: "Commercial & Customer", category: "Sales & Marketing", topic: "Sales Performance", questionsAnswered: "Is the sales team performing?", aiAccelerators: "Quota Tracker AI" },
        { id: "DD-22", label: "Turnover Analysis", group: "task", description: "Analyze sales team attrition rates and identify potential causes.", output: "Sales turnover risk assessment.", workstream: "Commercial & Customer", category: "Sales & Marketing", topic: "Sales Performance", questionsAnswered: "Is there high turnover in the sales team?", aiAccelerators: "Turnover Analyzer" },
        { id: "DD-23", label: "Distributors / Channel Partners", group: "task", description: "Evaluate the performance and structure of any existing channel partnership programs.", output: "Channel program effectiveness review.", workstream: "Commercial & Customer", category: "Sales & Marketing", topic: "Sales Performance", questionsAnswered: "How effective is the channel program?", aiAccelerators: "Channel Partner Analyzer" },
        { id: "DD-24", label: "Sales Effectiveness", group: "task", description: "Assess the efficiency of the sales process, including conversion rates and sales cycle length.", output: "Funnel conversion and efficiency metrics.", workstream: "Commercial & Customer", category: "Sales & Marketing", topic: "Sales Performance", questionsAnswered: "How effective is the sales process?", aiAccelerators: "Sales Effectiveness AI" },
        { id: "DD-25", label: "Lead Funnel Metrics", group: "task", description: "Analyze the marketing funnel from lead generation to MQL and SQL.", output: "Marketing lead funnel analysis.", workstream: "Commercial & Customer", category: "Sales & Marketing", topic: "Marketing & Growth", questionsAnswered: "What does the marketing funnel look like?", aiAccelerators: "Funnel Analyzer AI" },
        { id: "DD-26", label: "Conversion Trends", group: "task", description: "Review trends in lead-to-opportunity and opportunity-to-close conversion rates.", output: "Historical conversion rate trends.", workstream: "Commercial & Customer", category: "Sales & Marketing", topic: "Marketing & Growth", questionsAnswered: "What are the conversion trends?", aiAccelerators: "Trend Analyzer AI" },
        { id: "DD-27", label: "Pricing Strategy", group: "task", description: "Analyze the current pricing model, discounting practices, and packaging strategy.", output: "Pricing and packaging assessment with recommendations.", workstream: "Commercial & Customer", category: "Sales & Marketing", topic: "Marketing & Growth", questionsAnswered: "Is the pricing strategy optimal?", aiAccelerators: "Pricing Optimizer AI" },
        { id: "DD-28", label: "Brand Assessment", group: "task", description: "Review brand perception, awareness, and messaging consistency.", output: "Brand equity summary.", workstream: "Commercial & Customer", category: "Sales & Marketing", topic: "Marketing & Growth", questionsAnswered: "How strong is the brand?", aiAccelerators: "Brand Analyzer AI" },
        { id: "DD-29", label: "Yield on Sales & Marketing $", group: "task", description: "Calculate LTV:CAC ratio and marketing spend ROI.", output: "Unit economics analysis.", workstream: "Commercial & Customer", category: "Sales & Marketing", topic: "Sales Performance", questionsAnswered: "What is the ROI on S&M spend?", aiAccelerators: "ROI Calculator AI" },
        { id: "DD-30", label: "Detailed Transaction Analysis", group: "task", description: "Analyze raw transaction data to understand purchasing patterns.", output: "Transactional data summary.", workstream: "Commercial & Customer", category: "Customers", topic: "Customer Analytics", questionsAnswered: "What are the customer purchasing patterns?", aiAccelerators: "Transaction Analyzer AI" },
        { id: "DD-31", label: "Cohort Analysis", group: "task", description: "Analyze customer cohorts to understand retention and expansion behavior over time.", output: "Cohort analysis chart for NRR.", workstream: "Commercial & Customer", category: "Customers", topic: "Customer Analytics", questionsAnswered: "How do customer cohorts behave?", aiAccelerators: "Cohort Analyzer AI" },
        { id: "DD-32", label: "Customer Concentration over time", group: "task", description: "Identify revenue concentration by customer and assess risks.", output: "Top 10 customer list and concentration percentage.", workstream: "Commercial & Customer", category: "Customers", topic: "Customer Analytics", questionsAnswered: "Is there customer concentration risk?", aiAccelerators: "Concentration Risk Analyzer" },
        { id: "DD-33", label: "Churn Analysis", group: "task", description: "Analyze gross and net revenue churn rates, and identify reasons for churn.", output: "Churn analysis summary.", workstream: "Commercial & Customer", category: "Customers", topic: "Customer Experience", questionsAnswered: "What are the churn rates and reasons?", aiAccelerators: "Churn Predictor AI" },
        { id: "DD-34", label: "Net Promoter Score", group: "task", description: "Review NPS data and customer feedback.", output: "NPS trend analysis.", workstream: "Commercial & Customer", category: "Customers", topic: "Customer Experience", questionsAnswered: "What is the NPS?", aiAccelerators: "NPS Calculator AI" },
        { id: "DD-35", label: "Lifetime Value", group: "task", description: "Calculate customer lifetime value (LTV).", output: "LTV calculation model.", workstream: "Commercial & Customer", category: "Customers", topic: "Customer Analytics", questionsAnswered: "What is the customer LTV?", aiAccelerators: "LTV Calculator AI" },
        { id: "DD-36", label: "Customer Segmentation", group: "task", description: "Segment customers by size, industry, or behavior to identify ideal customer profiles.", output: "Customer segmentation analysis.", workstream: "Commercial & Customer", category: "Customers", topic: "Customer Analytics", questionsAnswered: "What are the customer segments?", aiAccelerators: "Segmentation AI" },
        { id: "DD-37", label: "Annual Contract Value Trends", group: "task", description: "Analyze the trend of average ACV for new customers.", output: "ACV trend chart.", workstream: "Commercial & Customer", category: "Customers", topic: "Customer Analytics", questionsAnswered: "What are the ACV trends?", aiAccelerators: "ACV Trend Analyzer" },
        { id: "DD-38", label: "Survey Analysis", group: "task", description: "Review any customer satisfaction or product feedback surveys.", output: "Survey results summary.", workstream: "Commercial & Customer", category: "Customers", topic: "Customer Experience", questionsAnswered: "What do customer surveys show?", aiAccelerators: "Survey Analyzer AI" },
        { id: "DD-39", label: "Interview w Top Customers", group: "task", description: "Conduct interviews with a sample of top customers to validate the value proposition.", output: "Customer interview transcripts and summary of findings.", workstream: "Commercial & Customer", category: "Customers", topic: "Customer Experience", questionsAnswered: "What is direct customer feedback?", aiAccelerators: "Feedback Synthesizer" },
        { id: "DD-40", label: "Financial Statement Analysis", group: "task", description: "Analyze historical income statements, balance sheets, and cash flow statements.", output: "Historical financial performance summary.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Core Financial Statements", questionsAnswered: "What is the historical financial performance?", aiAccelerators: "Financial Statement Analyzer" },
        { id: "DD-41", label: "Expense Breakdown", group: "task", description: "Break down operating expenses by department and nature (fixed vs. variable).", output: "Detailed expense structure analysis.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Cost Structure", questionsAnswered: "What is the expense structure?", aiAccelerators: "Expense Categorizer AI" },
        { id: "DD-42", label: "Capex Projections", group: "task", description: "Review historical and projected capital expenditures.", output: "Capex analysis and forecast.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Financial Analysis & Planning", questionsAnswered: "What are the capex needs?", aiAccelerators: "Capex Forecaster AI" },
        { id: "DD-43", label: "Pro-Forma Financial Model", group: "task", description: "Build a pro-forma financial model based on diligence findings and growth assumptions.", output: "Base case financial model.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Financial Analysis & Planning", questionsAnswered: "What is the future financial outlook?", aiAccelerators: "Financial Modeler AI" },
        { id: "DD-44", label: "Gross Margin Analysis", group: "task", description: "Analyze gross margin trends by product and service line.", output: "Gross margin bridge and analysis.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Core Financial Statements", questionsAnswered: "What are the gross margins?", aiAccelerators: "Margin Analyzer AI" },
        { id: "DD-45", label: "Growth Assumptions Review", group: "task", description: "Pressure-test the key assumptions driving the revenue forecast in the financial model.", output: "Sensitivity analysis on key growth drivers.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Financial Analysis & Planning", questionsAnswered: "Are the growth assumptions credible?", aiAccelerators: "Assumption Validator AI" },
        { id: "DD-46", label: "Quality of Revenue Analysis", group: "task", description: "Assess the quality and predictability of recurring revenue streams.", output: "Quality of Revenue report.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Core Financial Statements", questionsAnswered: "What is the quality of revenue?", aiAccelerators: "Revenue Quality Analyzer" },
        { id: "DD-47", label: "Accounting Policies", group: "task", description: "Review key accounting policies, especially revenue recognition, for aggressiveness.", output: "Summary of key accounting policies.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Accounting & Tax", questionsAnswered: "Are the accounting policies appropriate?", aiAccelerators: "Accounting Policy Checker" },
        { id: "DD-48", label: "Audited Financials", group: "task", description: "Review audited financial statements and any management letter comments.", output: "Auditor's report summary.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Core Financial Statements", questionsAnswered: "What do the audited financials say?", aiAccelerators: "Audit Report Analyzer" },
        { id: "DD-49", label: "Contingent Liabilities", group: "task", description: "Identify any off-balance sheet or contingent liabilities.", output: "List of potential liabilities.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Risk Management", questionsAnswered: "Are there hidden liabilities?", aiAccelerators: "Liability Scanner AI" },
        { id: "DD-50", label: "Tax Analysis", group: "task", description: "Review tax returns and ensure compliance.", output: "Tax diligence report.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Accounting & Tax", questionsAnswered: "Is the company tax compliant?", aiAccelerators: "Tax Analyzer AI" },
        { id: "DD-51", label: "Working Capital Review", group: "task", description: "Analyze historical working capital levels and define a target.", output: "Working capital peg calculation.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Core Financial Statements", questionsAnswered: "What are the working capital needs?", aiAccelerators: "Working Capital Analyzer" },
        { id: "DD-52", label: "Quality of Earnings", group: "task", description: "Perform a Quality of Earnings (QoE) analysis to normalize EBITDA.", output: "QoE report with adjustments.", workstream: "Financial & Risk", category: "Financial & Accounting", topic: "Core Financial Statements", questionsAnswered: "What is the true underlying profitability?", aiAccelerators: "Earnings Quality Analyzer" },
        { id: "DD-53", label: "Corporate Documentation Review", group: "task", description: "Review articles of incorporation, bylaws, and board minutes.", output: "Corporate structure summary.", workstream: "Financial & Risk", category: "Legal", topic: "Corporate Structure & Governance", questionsAnswered: "Is the corporate structure clean?", aiAccelerators: "Document Scanner AI" },
        { id: "DD-54", label: "Patent Analysis", group: "task", description: "Review key patents and intellectual property.", output: "IP portfolio summary.", workstream: "Financial & Risk", category: "Legal", topic: "Intellectual Property", questionsAnswered: "What is the state of the IP?", aiAccelerators: "Patent Analyzer AI" },
        { id: "DD-55", label: "Contract Analysis", group: "task", description: "Review key customer and vendor contracts for non-standard terms.", output: "Contract review summary with red flags.", workstream: "Financial & Risk", category: "Legal", topic: "Legal & Compliance", questionsAnswered: "Are there risky contract terms?", aiAccelerators: "Contract Analyzer AI" },
        { id: "DD-56", label: "Litigation Review", group: "task", description: "Identify any ongoing or pending litigation.", output: "Litigation summary.", workstream: "Financial & Risk", category: "Legal", topic: "Legal & Compliance", questionsAnswered: "Is there any litigation?", aiAccelerators: "Litigation Tracker AI" },
        { id: "DD-57", label: "Capitalization Analysis", group: "task", description: "Review the company's capitalization table.", output: "Validated cap table.", workstream: "Financial & Risk", category: "Legal", topic: "Corporate Structure & Governance", questionsAnswered: "Who owns the company?", aiAccelerators: "Cap Table Analyzer" },
        { id: "DD-58", label: "FCPA Audit", group: "task", description: "Ensure compliance with anti-bribery and corruption laws.", output: "FCPA compliance checklist.", workstream: "Financial & Risk", category: "Legal", topic: "Legal & Compliance", questionsAnswered: "Are there any corruption risks?", aiAccelerators: "FCPA Auditor AI" },
        { id: "DD-59", label: "Executive Summary & Key Findings", group: "task", description: "Synthesize all findings into a concise executive summary.", output: "Draft of executive summary.", workstream: "Business & Strategy", category: "Synthesis & Planning", topic: "Synthesis", questionsAnswered: "What are the key takeaways?", aiAccelerators: "Report Synthesizer" },
        { id: "DD-60", label: "Risk Matrix & Mitigation Plan", group: "task", description: "Create a matrix of all identified risks and propose mitigation strategies.", output: "Risk mitigation plan.", workstream: "Financial & Risk", category: "Synthesis & Planning", topic: "Synthesis", questionsAnswered: "What are the key risks and how to fix them?", aiAccelerators: "Risk Matrix Generator" },
        { id: "DD-61", label: "Synergy Identification", group: "task", description: "Identify potential cost and revenue synergies.", output: "List of quantified synergies.", workstream: "Financial & Risk", category: "Synthesis & Planning", topic: "Synthesis", questionsAnswered: "Where are the synergy opportunities?", aiAccelerators: "Synergy Identifier" },
        { id: "DD-62", label: "100-Day Integration Plan", group: "task", description: "Develop a detailed 100-day plan for post-close execution.", output: "Draft of 100-Day Plan.", workstream: "Business & Strategy", category: "Synthesis & Planning", topic: "Synthesis", questionsAnswered: "What is the plan for the first 100 days?", aiAccelerators: "100-Day Plan Generator" },
        { id: "DD-63", label: "Value Creation Plan", group: "task", description: "Outline the key levers for value creation over the investment horizon.", output: "Value Creation Plan (VCP) document.", workstream: "Business & Strategy", category: "Value Creation", topic: "Value Creation", questionsAnswered: "How will we create value?", aiAccelerators: "VCP Generator" },
        { id: "DD-64", label: "Operating Model Design", group: "task", description: "Design the target operating model, including any organizational changes.", output: "Target Operating Model blueprint.", workstream: "Business & Strategy", category: "Value Creation", topic: "Value Creation", questionsAnswered: "What is the target operating model?", aiAccelerators: "Org Modeler AI" },
        { id: "DD-65", label: "Investment Committee Memo", group: "task", description: "Draft the investment committee memorandum.", output: "IC Memo draft.", workstream: "Financial & Risk", category: "IC Prep", topic: "Investment Committee", questionsAnswered: "What is the investment recommendation?", aiAccelerators: "IC Memo Drafter" },
        { id: "DD-66", label: "Financial Model Scenarios", group: "task", description: "Run upside, base, and downside scenarios in the financial model.", output: "Scenario analysis outputs.", workstream: "Financial & Risk", category: "IC Prep", topic: "Investment Committee", questionsAnswered: "What are the financial scenarios?", aiAccelerators: "Scenario Planner" },
        { id: "DD-67", label: "Deal Terms Recommendation", group: "task", description: "Finalize recommendation on deal structure and key terms.", output: "Term sheet recommendations.", workstream: "Financial & Risk", category: "IC Prep", topic: "Investment Committee", questionsAnswered: "What are the recommended deal terms?", aiAccelerators: "Term Sheet Assistant" },
        { id: "DD-68", label: "Comprehensive DD Report", group: "task", description: "Compile all findings into a final, comprehensive due diligence report.", output: "Final Due Diligence Report.", workstream: "Business & Strategy", category: "Final Deliverables", topic: "Final Deliverables", questionsAnswered: "What is the final diligence report?", aiAccelerators: "Report Compiler" },
        { id: "DD-69", label: "Management Presentation", group: "task", description: "Prepare a presentation for management on the key findings and go-forward plan.", output: "Management presentation deck.", workstream: "Business & Strategy", category: "Final Deliverables", topic: "Final Deliverables", questionsAnswered: "What is the management presentation?", aiAccelerators: "Deck Generator" },
        { id: "DD-70", label: "Data Room Archive", group: "task", description: "Create a final archive of the data room for legal and compliance purposes.", output: "Zipped archive of the data room.", workstream: "Financial & Risk", category: "Final Deliverables", topic: "Final Deliverables", questionsAnswered: "Is the data room archived?", aiAccelerators: "Archiver Tool" },

        // --- GROUP 3 & 4: OUTPUTS ---
        { id: 'report_strat_assess', label: 'Strategic Assessment Report', group: 'output_report', description: 'Synthesizes findings on company strategy, M&A history, and future growth plans.' },
        { id: 'report_mgmt_assess', label: 'Management Assessment Report', group: 'output_report', description: 'Synthesizes findings on leadership, organizational structure, and HR strategy.' },
        { id: 'report_hr_dd', label: 'HR Due Diligence Report', group: 'output_report', description: 'Aggregates analysis of compensation, turnover, and HR growth plans.' },
        { id: 'report_strat_plan_rev', label: 'Strategic Plan Review', group: 'output_report', description: 'Compares company\'s strategic plans against market realities and internal capabilities.' },
        { id: 'report_mkt_assess', label: 'Market Assessment Report', group: 'output_report', description: 'Summarizes market size, competitive dynamics, and macro trends.' },
        { id: 'report_qor', label: 'Quality of Revenue Report', group: 'output_report', description: 'Analyzes the sustainability and quality of the company\'s revenue streams.' },
        { id: 'report_tech_dd', label: 'Technology Due Diligence Report', group: 'output_report', description: 'Assesses the company\'s technology stack, development processes, and product roadmap.' },
        { id: 'report_ops_assess', label: 'Operational Assessment', group: 'output_report', description: 'Evaluates the efficiency and scalability of operational and product management processes.' },
        { id: 'report_risk_assess', label: 'Risk Assessment Report', group: 'output_report', description: 'Identifies and quantifies key business, technology, and legal risks.' },
        { id: 'report_comm_dd', label: 'Commercial Due Diligence Report', group: 'output_report', description: 'Provides a comprehensive view of sales, marketing, and channel effectiveness.' },
        { id: 'report_mkt_eff', label: 'Marketing Effectiveness Report', group: 'output_report', description: 'Focuses on the performance of the marketing funnel and brand strength.' },
        { id: 'report_cust_dd', label: 'Customer Due Diligence Report', group: 'output_report', description: 'Details findings from customer analysis, including churn, LTV, and concentration.' },
        { id: 'report_fin_model_inputs', label: 'Financial Model Inputs', group: 'output_report', description: 'Consolidates all key quantitative findings that drive the pro-forma financial model.' },
        { id: 'report_qoe', label: 'Quality of Earnings Report', group: 'output_report', description: 'Normalizes EBITDA and assesses the target\'s true recurring profitability.' },
        { id: 'report_tax_dd', label: 'Tax Due Diligence Report', group: 'output_report', description: 'Summarizes the company\'s tax compliance, liabilities, and policies.' },
        { id: 'report_legal_dd', label: 'Legal Due Diligence Report', group: 'output_report', description: 'Aggregates findings from all legal workstreams, including contracts, litigation, and corporate structure.' },
        { id: 'report_valuation', label: 'Valuation Analysis', group: 'output_report', description: 'Contains the outputs of financial modeling and growth assumption validation.' },
        { id: 'report_asset_val', label: 'Asset Valuation Report', group: 'output_report', description: 'Specifically details the valuation of intellectual property and other key assets.' },
        { id: 'ic_deck', label: 'Investment Committee Deck', group: 'final_output', description: 'Final presentation synthesizing all diligence findings to request capital approval.' }
    ],
    links: [
    // --- COMPREHENSIVE DOCUMENT-TO-TASK MAPPINGS ---
    { source: 'DDI-001', target: 'DD-1' }, { source: 'DDI-001', target: 'DD-53' },
    { source: 'DDI-002', target: 'DD-1' }, { source: 'DDI-002', target: 'DD-53' },
    { source: 'DDI-003', target: 'DD-1' }, { source: 'DDI-003', target: 'DD-53' }, { source: 'DDI-003', target: 'DD-111' },
    { source: 'DDI-004', target: 'DD-1' }, { source: 'DDI-004', target: 'DD-53' },
    { source: 'DDI-005', target: 'DD-57' },
    { source: 'DDI-006', target: 'DD-57' },
    { source: 'DDI-007', target: 'DD-57' }, { source: 'DDI-007', target: 'DD-98' },
    { source: 'DDI-008', target: 'DD-2' },
    { source: 'DDI-009', target: 'DD-55' },
    { source: 'DDI-010', target: 'DD-55' }, { source: 'DDI-010', target: 'DD-61' },
    { source: 'DDI-011', target: 'DD-55' }, { source: 'DDI-011', target: 'DD-47' },
    { source: 'DDI-012', target: 'DD-55' }, { source: 'DDI-012', target: 'DD-3' },
    { source: 'DDI-013', target: 'DD-55' },
    { source: 'DDI-014', target: 'DD-56' }, { source: 'DDI-014', target: 'DD-49' },
    { source: 'DDI-015', target: 'DD-56' },
    { source: 'DDI-016', target: 'DD-124' },
    { source: 'DDI-017', target: 'DD-58' },
    { source: 'DDI-018', target: 'DD-58' },
    { source: 'DDI-019', target: 'DD-23' },
    { source: 'DDI-020', target: 'DD-54' },
    { source: 'DDI-021', target: 'DD-54' },
    { source: 'DDI-022', target: 'DD-54' }, { source: 'DDI-022', target: 'DD-56' },
    { source: 'DDI-023', target: 'DD-54' },
    { source: 'DDI-024', target: 'DD-54' }, { source: 'DDI-024', target: 'DD-28' },
    { source: 'DDI-025', target: 'DD-54' },
    { source: 'DDI-026', target: 'DD-40' }, { source: 'DDI-026', target: 'DD-48' }, { source: 'DDI-026', target: 'DD-52' },
    { source: 'DDI-027', target: 'DD-40' },
    { source: 'DDI-028', target: 'DD-40' },
    { source: 'DDI-029', target: 'DD-40' },
    { source: 'DDI-030', target: 'DD-40' },
    { source: 'DDI-031', target: 'DD-43' }, { source: 'DDI-031', target: 'DD-45' }, { source: 'DDI-031', target: 'DD-66' },
    { source: 'DDI-032', target: 'DD-42' },
    { source: 'DDI-033', target: 'DD-42' },
    { source: 'DDI-034', target: 'DD-51' },
    { source: 'DDI-035', target: 'DD-51' },
    { source: 'DDI-036', target: 'DD-51' },
    { source: 'DDI-037', target: 'DD-51' },
    { source: 'DDI-038', target: 'DD-47' },
    { source: 'DDI-039', target: 'DD-47' }, { source: 'DDI-039', target: 'DD-46' },
    { source: 'DDI-040', target: 'DD-48' },
    { source: 'DDI-041', target: 'DD-48' }, { source: 'DDI-041', target: 'DD-52' },
    { source: 'DDI-042', target: 'DD-50' },
    { source: 'DDI-043', target: 'DD-50' },
    { source: 'DDI-044', target: 'DD-50' },
    { source: 'DDI-045', target: 'DD-41' },
    { source: 'DDI-046', target: 'DD-41' }, { source: 'DDI-046', target: 'DD-4' },
    { source: 'DDI-047', target: 'DD-41' },
    { source: 'DDI-048', target: 'DD-44' },
    { source: 'DDI-049', target: 'DD-44' },
    { source: 'DDI-050', target: 'DD-20' }, { source: 'DDI-050', target: 'DD-25' },
    { source: 'DDI-051', target: 'DD-21' },
    { source: 'DDI-052', target: 'DD-24' },
    { source: 'DDI-053', target: 'DD-24' },
    { source: 'DDI-054', target: 'DD-23' },
    { source: 'DDI-055', target: 'DD-25' },
    { source: 'DDI-056', target: 'DD-25' }, { source: 'DDI-056', target: 'DD-26' },
    { source: 'DDI-057', target: 'DD-27' }, { source: 'DDI-057', target: 'DD-10' },
    { source: 'DDI-058', target: 'DD-28' },
    { source: 'DDI-059', target: 'DD-30' },
    { source: 'DDI-060', target: 'DD-30' },
    { source: 'DDI-061', target: 'DD-30' }, { source: 'DDI-061', target: 'DD-55' },
    { source: 'DDI-062', target: 'DD-32' },
    { source: 'DDI-063', target: 'DD-31' },
    { source: 'DDI-064', target: 'DD-33' },
    { source: 'DDI-065', target: 'DD-34' },
    { source: 'DDI-066', target: 'DD-38' },
    { source: 'DDI-067', target: 'DD-36' },
    { source: 'DDI-068', target: 'DD-7' }, { source: 'DDI-068', target: 'DD-9' },
    { source: 'DDI-069', target: 'DD-7' },
    { source: 'DDI-070', target: 'DD-10' },
    { source: 'DDI-071', target: 'DD-10' },
    { source: 'DDI-072', target: 'DD-9' },
    { source: 'DDI-073', target: 'DD-14' },
    { source: 'DDI-074', target: 'DD-14' },
    { source: 'DDI-075', target: 'DD-12' },
    { source: 'DDI-076', target: 'DD-12' }, { source: 'DDI-076', target: 'DD-15' },
    { source: 'DDI-077', target: 'DD-19' },
    { source: 'DDI-078', target: 'DD-13' },
    { source: 'DDI-079', target: 'DD-13' },
    { source: 'DDI-080', target: 'DD-13' },
    { source: 'DDI-081', target: 'DD-13' }, { source: 'DDI-081', target: 'DD-127' },
    { source: 'DDI-082', target: 'DD-13' },
    { source: 'DDI-083', target: 'DD-16' },
    { source: 'DDI-084', target: 'DD-17' },
    { source: 'DDI-085', target: 'DD-18' },
    { source: 'DDI-086', target: 'DD-18' },
    { source: 'DDI-087', target: 'DD-18' },
    { source: 'DDI-088', target: 'DD-18' },
    { source: 'DDI-089', target: 'DD-19' },
    { source: 'DDI-090', target: 'DD-19' },
    { source: 'DDI-091', target: 'DD-2' },
    { source: 'DDI-092', target: 'DD-3' },
    { source: 'DDI-093', target: 'DD-3' },
    { source: 'DDI-094', target: 'DD-3' },
    { source: 'DDI-095', target: 'DD-3' },
    { source: 'DDI-096', target: 'DD-4' },
    { source: 'DDI-097', target: 'DD-4' },
    { source: 'DDI-098', target: 'DD-4' },
    { source: 'DDI-099', target: 'DD-4' },
    { source: 'DDI-100', target: 'DD-4' },
    { source: 'DDI-101', target: 'DD-2' }, { source: 'DDI-101', target: 'DD-5' },
    { source: 'DDI-102', target: 'DD-5' },
    { source: 'DDI-103', target: 'DD-5' },
    { source: 'DDI-104', target: 'DD-5' },
    { source: 'DDI-105', target: 'DD-5' }, { source: 'DDI-105', target: 'DD-22' },
    { source: 'DDI-106', target: 'DD-5' },
    { source: 'DDI-107', target: 'DD-5' },
    { source: 'DDI-108', target: 'DD-1' }, { source: 'DDI-108', target: 'DD-45' },
    { source: 'DDI-109', target: 'DD-1' }, { source: 'DDI-109', target: 'DD-45' },
    { source: 'DDI-110', target: 'DD-1' }, { source: 'DDI-110', target: 'DD-63' },
    { source: 'DDI-111', target: 'DD-1' },
    { source: 'DDI-112', target: 'DD-45' }, { source: 'DDI-112', target: 'DD-66' },
    { source: 'DDI-113', target: 'DD-6' },
    { source: 'DDI-114', target: 'DD-6' },
    { source: 'DDI-115', target: 'DD-6' },
    { source: 'DDI-116', target: 'DD-6' },
    { source: 'DDI-117', target: 'DD-6' },
    { source: 'DDI-118', target: 'DD-63' },
    { source: 'DDI-119', target: 'DD-63' },
    { source: 'DDI-120', target: 'DD-14' }, { source: 'DDI-120', target: 'DD-63' },
    { source: 'DDI-121', target: 'DD-23' }, { source: 'DDI-121', target: 'DD-63' },
    { source: 'DDI-122', target: 'DD-49' }, { source: 'DDI-122', target: 'DD-60' },
    { source: 'DDI-123', target: 'DD-49' },
    { source: 'DDI-124', target: 'DD-16' },
    { source: 'DDI-125', target: 'DD-16' },
    { source: 'DDI-126', target: 'DD-90' },
    { source: 'DDI-127', target: 'DD-81' },
    { source: 'DDI-128', target: 'DD-58' },
    { source: 'DDI-129', target: 'DD-58' },
    { source: 'DDI-130', target: 'DD-58' },
    { source: 'DDI-131', target: 'DD-58' },
    { source: 'DDI-132', target: 'DD-58' },

    // TASK -> TASK (from diligencePlan_v3 dependencies)
    { source: 'DD-1', target: 'DD-2' }, { source: 'DD-1', target: 'DD-3' }, { source: 'DD-1', target: 'DD-6' },
    { source: 'DD-2', target: 'DD-3' }, { source: 'DD-2', target: 'DD-4' }, { source: 'DD-2', target: 'DD-5' },
    { source: 'DD-3', target: 'DD-4' }, { source: 'DD-3', target: 'DD-5' }, { source: 'DD-4', target: 'DD-22' },
    { source: 'DD-5', target: 'DD-22' }, { source: 'DD-6', target: 'DD-43' }, { source: 'DD-6', target: 'DD-45' },
    { source: 'DD-7', target: 'DD-8' }, { source: 'DD-7', target: 'DD-9' }, { source: 'DD-7', target: 'DD-10' },
    { source: 'DD-7', target: 'DD-11' }, { source: 'DD-8', target: 'DD-10' }, { source: 'DD-8', target: 'DD-11' },
    { source: 'DD-9', target: 'DD-10' }, { source: 'DD-9', target: 'DD-26' }, { source: 'DD-9', target: 'DD-45' },
    { source: 'DD-10', target: 'DD-11' }, { source: 'DD-10', target: 'DD-27' }, { source: 'DD-11', target: 'DD-27' },
    { source: 'DD-11', target: 'DD-28' }, { source: 'DD-12', target: 'DD-13' }, { source: 'DD-12', target: 'DD-14' },
    { source: 'DD-12', target: 'DD-15' }, { source: 'DD-13', target: 'DD-16' }, { source: 'DD-13', target: 'DD-17' },
    { source: 'DD-14', target: 'DD-15' }, { source: 'DD-14', target: 'DD-43' }, { source: 'DD-15', target: 'DD-18' },
    { source: 'DD-15', target: 'DD-19' }, { source: 'DD-16', target: 'DD-17' }, { source: 'DD-16', target: 'DD-18' },
    { source: 'DD-17', target: 'DD-18' }, { source: 'DD-18', target: 'DD-19' }, { source: 'DD-20', target: 'DD-21' },
    { source: 'DD-20', target: 'DD-24' }, { source: 'DD-20', target: 'DD-29' }, { source: 'DD-21', target: 'DD-22' },
    { source: 'DD-21', target: 'DD-24' }, { source: 'DD-23', target: 'DD-24' }, { source: 'DD-23', target: 'DD-29' },
    { source: 'DD-24', target: 'DD-29' }, { source: 'DD-25', target: 'DD-26' }, { source: 'DD-25', target: 'DD-29' },
    { source: 'DD-26', target: 'DD-27' }, { source: 'DD-26', target: 'DD-29' }, { source: 'DD-27', target: 'DD-44' },
    { source: 'DD-27', target: 'DD-46' }, { source: 'DD-28', target: 'DD-34' }, { source: 'DD-28', target: 'DD-38' },
    { source: 'DD-29', target: 'DD-41' }, { source: 'DD-30', target: 'DD-31' }, { source: 'DD-30', target: 'DD-32' },
    { source: 'DD-30', target: 'DD-35' }, { source: 'DD-30', target: 'DD-37' }, { source: 'DD-31', target: 'DD-33' },
    { source: 'DD-31', target: 'DD-35' }, { source: 'DD-31', target: 'DD-36' }, { source: 'DD-32', target: 'DD-33' },
    { source: 'DD-32', target: 'DD-46' }, { source: 'DD-33', target: 'DD-34' }, { source: 'DD-33', target: 'DD-35' },
    { source: 'DD-34', target: 'DD-38' }, { source: 'DD-34', target: 'DD-39' }, { source: 'DD-35', target: 'DD-36' },
    { source: 'DD-35', target: 'DD-43' }, { source: 'DD-36', target: 'DD-38' }, { source: 'DD-37', target: 'DD-46' },
    { source: 'DD-37', target: 'DD-52' }, { source: 'DD-38', target: 'DD-39' }, { source: 'DD-40', target: 'DD-41' },
    { source: 'DD-40', target: 'DD-44' }, { source: 'DD-40', target: 'DD-46' }, { source: 'DD-40', target: 'DD-48' },
    { source: 'DD-40', target: 'DD-51' }, { source: 'DD-40', target: 'DD-52' }, { source: 'DD-41', target: 'DD-42' },
    { source: 'DD-41', target: 'DD-43' }, { source: 'DD-41', target: 'DD-44' }, { source: 'DD-42', target: 'DD-43' },
    { source: 'DD-42', target: 'DD-45' }, { source: 'DD-43', target: 'DD-45' }, { source: 'DD-43', target: 'DD-66' },
    { source: 'DD-44', target: 'DD-46' }, { source: 'DD-44', target: 'DD-52' }, { source: 'DD-45', target: 'DD-63' },
    { source: 'DD-46', target: 'DD-52' }, { source: 'DD-46', target: 'DD-61' }, { source: 'DD-47', target: 'DD-48' },
    { source: 'DD-47', target: 'DD-50' }, { source: 'DD-48', target: 'DD-52' }, { source: 'DD-49', target: 'DD-56' },
    { source: 'DD-49', target: 'DD-57' }, { source: 'DD-50', target: 'DD-51' }, { source: 'DD-51', target: 'DD-52' },
    { source: 'DD-52', target: 'DD-59' }, { source: 'DD-52', target: 'DD-60' }, { source: 'DD-53', target: 'DD-54' },
    { source: 'DD-53', target: 'DD-55' }, { source: 'DD-53', target: 'DD-57' }, { source: 'DD-54', target: 'DD-55' },
    { source: 'DD-55', target: 'DD-56' }, { source: 'DD-56', target: 'DD-57' }, { source: 'DD-56', target: 'DD-60' },
    { source: 'DD-57', target: 'DD-58' }, { source: 'DD-57', target: 'DD-60' }, { source: 'DD-58', target: 'DD-60' },
    { source: 'DD-59', target: 'DD-62' }, { source: 'DD-59', target: 'DD-65' }, { source: 'DD-59', target: 'DD-68' },
    { source: 'DD-60', target: 'DD-62' }, { source: 'DD-60', target: 'DD-67' }, { source: 'DD-61', target: 'DD-62' },
    { source: 'DD-61', target: 'DD-63' }, { source: 'DD-62', target: 'DD-64' }, { source: 'DD-63', target: 'DD-65' },
    { source: 'DD-63', target: 'DD-66' }, { source: 'DD-65', target: 'DD-67' }, { source: 'DD-65', target: 'DD-69' },
    { source: 'DD-66', target: 'DD-67' }, { source: 'DD-67', target: 'DD-68' }, { source: 'DD-68', target: 'DD-69' },

    // TASK -> OUTPUT LINKS
    { source: 'DD-52', target: 'report_qoe' }, { source: 'DD-43', target: 'report_fin_model_inputs' },
    { source: 'DD-10', target: 'report_mkt_assess' }, { source: 'DD-33', target: 'report_cust_dd' },
    { source: 'DD-13', target: 'report_tech_dd' }, { source: 'DD-56', target: 'report_legal_dd' },
    { source: 'DD-46', target: 'report_qor' }, { source: 'DD-60', target: 'report_risk_assess' },
    { source: 'DD-24', target: 'report_comm_dd' }, { source: 'DD-3', target: 'report_mgmt_assess' },
    { source: 'DD-45', target: 'report_valuation' }, { source: 'DD-54', target: 'report_asset_val' },
    { source: 'DD-50', target: 'report_tax_dd' }, { source: 'DD-5', target: 'report_hr_dd' },
    { source: 'DD-108', target: 'report_strat_plan_rev' }, { source: 'DD-19', target: 'report_ops_assess' },
    
    // OUTPUT -> FINAL OUTPUT LINKS
    { source: 'report_qoe', target: 'ic_deck' }, { source: 'report_fin_model_inputs', target: 'ic_deck' },
    { source: 'report_mkt_assess', target: 'ic_deck' }, { source: 'report_cust_dd', target: 'ic_deck' },
    { source: 'report_tech_dd', target: 'ic_deck' }, { source: 'report_legal_dd', target: 'ic_deck' },
    { source: 'report_qor', target: 'ic_deck' }, { source: 'report_risk_assess', target: 'ic_deck' },
    { source: 'report_comm_dd', target: 'ic_deck' }, { source: 'report_mgmt_assess', target: 'ic_deck' },
    { source: 'report_valuation', target: 'ic_deck' }
]
};