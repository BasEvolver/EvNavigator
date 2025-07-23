// js/MaturityModel.js
// This file contains the complete, structured data model for the maturity assessment.
// It is the central "knowledge base" for ARIA to understand the characteristics of
// SaaS maturity across various disciplines and capabilities.
// VERIFIED COMPLETE: 2023-10-27

const maturityModel = {
  "summary": {
    "controlQuestion": "How can we strategically align our sales, marketing, product development, and operations to create an intelligent platform that maximizes customer value, reduces costs, and enhances agility?",
    "levels": [
      "Sales is mostly opportunistic. Partners and direct sales are not aligned. Marketing lacks cross-funtionally coordination and is poorly funded.  Product offerings are basic without inputs.  Development is fragmented across offerings and codelines.  Run operations are organically grown vs. purpose built.",
      "Product and departmental level programmatic initiatives, with decisions documented at department control points. Cross-department and focused team collaboration is the default and costly. High reliance on product-specific specialists and labor-intensive deployment and support functions.",
      "Value-based application functionality, automated provisioning and patching. Reduced costs due to automation and division of work. Process acceleration through automation ",
      "Emergence of Platform capabilities, Cloud applications are adding unique / value-add capabilities. Proactive and prioritized initiatives aimed at improving customer experience / reducing risk. Reducing TCO, Increased agility in responding to market dynamics / customer requirements",
      "Intelligent platform capabilities with low-barrier to entry customer experiences. Platform native up- and cross-sell capabilities. Embedded Analytics, Data-as-a-service monetization capability, including native GenAI productivity features. "
    ]
  },
  "disciplines": {
    "D1": {
      "id": "D1",
      "name": "Sales",
      "controlQuestion": "How effectively does your sales process align with customer needs, optimize revenue predictability, and maintain strong customer relationships?",
      "levels": [
        "Unpredictable and lacking clarity. Sales roles undefined and unsegmented. No active pipeline management or forecasting mechanisms. Inconsistent sales messaging.",
        "Centralized sales pipeline management with clear account segmentation. Forecasting process in place. Optimized sales incentives. Marketing activities inform sales opportunities at a basic level.",
        "Sales hygiene and value-selling based close plans improve revenue predictability. Sophisticated sales processes with priority on collaboration. Runrate, pipeline management, and forecasting have gone from art to science.",
        "Up- and cross-sell consumption mechanisms embedded on the platform. Transparent discounting philosophy motivating volume consumption.",
        "Cross-functional teams use sales plans to inform key functions. Strong focus on lifetime-time strategic customer relationships. Sales process is data-driven and performance metrics are highly objective."
      ],
      "capabilities": {
        "C110": {
          "id": "C110",
          "name": "Sales Strategy",
          "controlQuestion": "How can we strategically align our sales efforts to maximize customer value and optimize revenue?",
          "benefitsAnalysis": "Improved alignment and strategic focus lead to higher revenue growth and better resource allocation.",
          "domains": {}
        },
        "C120": {
            "id": "C120",
            "name": "Sales Operations",
            "controlQuestion": "How can we optimize our sales processes to improve efficiency and effectiveness?",
            "benefitsAnalysis": "Enhanced process efficiency reduces costs and increases sales productivity.",
            "domains": {}
        },
        "C130": {
            "id": "C130",
            "name": "Account Management",
            "controlQuestion": "How can we effectively manage customer relationships to maximize retention and growth?",
            "benefitsAnalysis": "Stronger customer relationships lead to higher retention rates and increased customer lifetime value.",
            "domains": {}
        },
        "C140": {
            "id": "C140",
            "name": "Pipeline Management",
            "controlQuestion": "How can we effectively manage our sales pipeline to optimize opportunity conversion?",
            "benefitsAnalysis": "Better pipeline management increases conversion rates and accelerates sales cycles.",
            "domains": {}
        },
        "C150": {
            "id": "C150",
            "name": "Sales Performance Management",
            "controlQuestion": "How can we track and improve sales performance to achieve our goals?",
            "benefitsAnalysis": "Improved performance tracking leads to higher sales effectiveness and goal achievement.",
            "domains": {}
        },
        "C160": {
            "id": "C160",
            "name": "Contract Management",
            "controlQuestion": "How can we effectively manage contracts to ensure compliance and optimize value?",
            "benefitsAnalysis": "Effective contract management reduces legal risks and maximizes contract value.",
            "domains": {}
        },
        "C170": {
            "id": "C170",
            "name": "Sales Excellence",
            "controlQuestion": "How can we achieve and maintain superior sales performance?",
            "benefitsAnalysis": "Superior sales practices lead to higher sales performance and competitive advantage.",
            "domains": {}
        },
        "C180": {
            "id": "C180",
            "name": "Customer Success",
            "controlQuestion": "How can we ensure our customers achieve their desired outcomes and remain satisfied?",
            "benefitsAnalysis": "Enhanced customer success efforts lead to higher customer satisfaction and retention.",
            "domains": {}
        }
      }
    },
    "D2": {
      "id": "D2",
      "name": "Marketing",
      "controlQuestion": "How effectively does your marketing strategy align with organizational goals, customer needs, and innovative practices?",
      "levels": [
        "No defined marketing strategy or supporting plan. Ad-hoc campaigns, social, comms, and events. Opportunistic and feature-focused messaging. Little interaction between marketing and sales.",
        "Annual and quarterly marketing plan with budget but lack of forecast results. Demand generation focused. Early adoption of marketing tools. Immature data acquisition, maintenance, and retention policies.",
        "Defined processes for strategizing, creating, and posting content. Tailored content to organization-wide value messages. Good integration with sales. Basic ABM campaigns delivered in sync with sales. Product launch and sustain processes.",
        "Multi-year marketing strategy and plan in support of organization strategic goals with detailed ROI forecasts. Digital-first marketing strategy with advanced analytics. Advanced tool integration and field/partner alignment. Significant brand development and brand management focus.",
        "Fully tracked and measured communication across the complete SaaS customer lifecycle. Digital marketing as a primary focus. Extensive ABM activity to named strategic accounts. Significant brand credibility supports higher margin sales. Recognized as a marketing innovator."
      ],
      "capabilities": {
        "C210": { "id": "C210", "name": "Brand Awareness and Credibility", "controlQuestion": "Is the company/product brand well known among the target audience and partner network?", "benefitsAnalysis": "Strategic enhancement of brand equity leading to increased market share, improved partner relationships, and higher profitability through premium pricing.", "domains": {} },
        "C220": { "id": "C220", "name": "Planning and Budgeting", "controlQuestion": "Is there a comprehensive marketing budget aligned with company goals?", "benefitsAnalysis": "Effective allocation of marketing resources aligned with strategic goals, leading to sustainable growth and a strong competitive position in the market.", "domains": {} },
        "C230": { "id": "C230", "name": "Digital Marketing and Analytics", "controlQuestion": "What infrastructure is used for sales and marketing?", "benefitsAnalysis": "Leveraging cutting-edge technology to drive marketing innovation, resulting in enhanced customer engagement, improved lead quality, and increased marketing effectiveness.", "domains": {} },
        "C240": { "id": "C240", "name": "Account Based Marketing (ABM)", "controlQuestion": "Does the company use account-specific messaging based on relevant and accurate data?", "benefitsAnalysis": "High ROI demand generation activity that supports increased market share and higher profitability through premium pricing and margin retention.", "domains": {} },
        "C250": { "id": "C250", "name": "Product Marketing", "controlQuestion": "Does the company have a formal product lifecycle marketing methodology that is used strategically?", "benefitsAnalysis": "Improved product lifecycle performance (market share, revenue, and margin) with smoother revenue flow and lower EOL write-off.", "domains": {} }
      }
    },
    "D3": {
      "id": "D3",
      "name": "Partner",
      "controlQuestion": "How effectively does your organization’s partner strategy align with scalability, strategic alignment, and optimized performance?",
      "levels": [
        "Opportunistic sell-with engagements. Partners are managed by sales as an afterthought, resulting in poor coordination. Partner programs and incentives are in the early stages.",
        "Formal partner organization. Annual planning and initial development of partner programs, incentives, and enablement occur.",
        "Sell-Through models aims to extend reach through marketplace and resell partner models. Annual partner plans and dedicated partner managers are established.",
        "Channel-aligned programmatic partner-led offerings become prominent. Hyper scaler preferred GTM (vertical sell motions and full platform marketplace) and GSI-aligned offerings drive deal closures.",
        "Significant scale and reach through programmatic customer delivery models."
      ],
      "capabilities": {
        "C310": { "id": "C310", "name": "Sell With", "controlQuestion": "Are the rules of engagement and partner co-selling for your direct sales and partners clear?", "benefitsAnalysis": "Clear rules of engagement enhance collaboration and sales effectiveness.", "domains": {} },
        "C320": { "id": "C320", "name": "Sell To", "controlQuestion": "Do you sell your technology to others for their offerings?", "benefitsAnalysis": "Selling technology to others expands market reach and revenue streams.", "domains": {} },
        "C330": { "id": "C330", "name": "Sell Through", "controlQuestion": "Do you use distributors, resellers, and/or SIs as part of your resell strategy?", "benefitsAnalysis": "Using distributors and resellers increases market penetration and sales volume.", "domains": {} },
        "C340": { "id": "C340", "name": "Hyperscaler", "controlQuestion": "Do you co-sell with Hyperscalers? Do you sell your offerings on a Hyperscaler’s marketplace?", "benefitsAnalysis": "Co-selling with Hyperscalers and selling on their marketplace increases visibility and sales opportunities.", "domains": {} },
        "C350": { "id": "C350", "name": "Partner Operations", "controlQuestion": "How effectively are partner operations managed to ensure smooth collaboration and efficiency?", "benefitsAnalysis": "Efficient partner operations enhance collaboration, reduce operational costs, and improve partner satisfaction.", "domains": {} },
        "C360": { "id": "C360", "name": "Partner Marketing", "controlQuestion": "How effectively does the company support partners in marketing their offerings?", "benefitsAnalysis": "Effective partner marketing support increases brand visibility, market reach, and sales opportunities.", "domains": {} },
        "C370": { "id": "C370", "name": "Partner Enablement", "controlQuestion": "How effectively are partners enabled with the necessary tools, resources, and training to succeed?", "benefitsAnalysis": "Effective partner enablement improves partner performance, satisfaction, and loyalty.", "domains": {} },
        "C380": { "id": "C380", "name": "Partner Support", "controlQuestion": "How effectively does the company provide support to partners to resolve issues and enhance collaboration?", "benefitsAnalysis": "Effective partner support improves partner satisfaction, reduces churn, and enhances collaboration.", "domains": {} }
      }
    },
    "D4": {
      "id": "D4",
      "name": "Build",
      "controlQuestion": "How effectively does your organization’s product and engineering strategy align with scalability, automation, data monetization, Ai and customer-centric approaches?",
      "levels": [
        "Mapping and analysis of cloud potential. Multiple code lines exist. Significant workload on quality and release management. Some awareness of cloud computing.",
        "Organizations begin planning to convert to single-tenant cloud offerings. Documentation, process, and security improve. Data starts being used for analytics. Teams continue to grapple with supporting on-prem and cloud versions.",
        "Single-tenant cloud offerings are in the market. Automation drives product delivery, and data monetization efforts increase. Development team prioritizing cloud-native codebases. Multi-tenant SaaS architecture under design consideration. ",
        "Multi-tenant cloud offerings are available. All customers operate on a single code line. Data monetization becomes a revenue stream..",
        "A fully automated, multi-tenant application with embedded Analytics and GenAI capabilities. Data-centric business models thrive. Simplified customer onboarding. Organization moves to customer-driven approach."
      ],
      "capabilities": {
        "C410": { "id": "C410", "name": "Applications", "controlQuestion": "How are applications architected and/or structured?", "benefitsAnalysis": "Cloud application patterns enhance lifecycle development, offering high availability, resiliency, and the benefits of SOA, leading to efficient feature development and integration.", "domains": {} },
        "C420": { "id": "C420", "name": "Technical Architecture", "controlQuestion": "Do standard architectural designs exist to guide cloud-based service deployments?", "benefitsAnalysis": "Pre-defining selected patterns establishes reusable building blocks for cloud service deployments.", "domains": {} },
        "C430": { "id": "C430", "name": "Data", "controlQuestion": "Does the enterprise have a published data management framework for cloud platforms?", "benefitsAnalysis": "Solid data management minimizes errors and establishes clear access rules and actions for data handling.", "domains": {} },
        "C440": { "id": "C440", "name": "Ai", "controlQuestion": "How are machine learning systems developed, deployed to production, and standardized across the business?", "benefitsAnalysis": "Managing ML platforms as products ensures a consistent experience for IT consumers in adopting and deploying capabilities.", "domains": {} },
        "C450": { "id": "C450", "name": "PaaS", "controlQuestion": "How are your applications structured or integrated with PaaS as the foundational platform?", "benefitsAnalysis": "Pre-defined PaaS elements enable consistent application development, leading to consistent platform selection, orchestration, and lifecycle management.", "domains": {} },
        "C460": { "id": "C460", "name": "DevOps", "controlQuestion": "How is your cloud architecture defined to support DevOps?", "benefitsAnalysis": "A defined cloud architecture aligns operations and development with business objectives, leveraging cloud capabilities.", "domains": {} },
        "C470": { "id": "C470", "name": "Security", "controlQuestion": "Do clear security frameworks exist for each class of application?", "benefitsAnalysis": "Improved security posture reduces risk and compliance issues, ensuring safe and reliable cloud operations.", "domains": {} },
        "C480": { "id": "C480", "name": "FinOps", "controlQuestion": "Do FinOps teams exist to ensure ROI and profitability from inception to deployment?", "benefitsAnalysis": "Business cases align production costs with revenue, enabling direct portfolio analysis and investment in potential improvements.", "domains": {} }
      }
    },
    "D5": {
      "id": "D5",
      "name": "Run",
      "controlQuestion": "How effectively does your organization’s support strategy align with scalability, automation, proactive service, and customer-centric approaches?",
      "levels": [
        "Operations are managed internally for on-premises and co-location environments. Support to individual consumers is provided on a per-incident basis, and Professional Service is available per project and charged extra.",
        "Teams are combined into shared support groups focused on supporting hosted and single-tenant off-premise products. Professional Service supports installations and customizations but is charged extra.",
        "Central customer experience team emerges, covering all post-purchase needs, including 24/7 support. Separate public and private cloud services support teams are no longer needed.",
        "Centralized team manages operational processes across all products, guided by cloud-specific KPIs. Reactive and early proactive support are part of the subscription.",
        "Common support functions are automated, offering consumer self-service. Proactive support informs customers ahead of service problems. "
      ],
      "capabilities": {
        "C180": { "id": "C180", "name": "Customer Success", "controlQuestion": "How effectively are customers engaged to ensure their success?", "benefitsAnalysis": "Effective customer engagement improves customer retention and satisfaction.", "domains": {} },
        "C501": { "id": "C501", "name": "Functional Support", "controlQuestion": "How effectively is functional support provided to customers?", "benefitsAnalysis": "Effective functional support improves customer satisfaction and product usage.", "domains": {} },
        "C510": { "id": "C510", "name": "Technical Support", "controlQuestion": "How effectively is technical support provided to customers?", "benefitsAnalysis": "Effective technical support improves customer satisfaction and reduces downtime.", "domains": {} },
        "C520": { "id": "C520", "name": "Professional Services", "controlQuestion": "How effectively are professional services delivered to customers?", "benefitsAnalysis": "Effective professional services enhance customer satisfaction and product value.", "domains": {} },
        "C530": { "id": "C530", "name": "Customer Success", "controlQuestion": "How effectively is customer success managed to ensure customers achieve their desired outcomes?", "benefitsAnalysis": "Effective customer success management improves customer retention and satisfaction.", "domains": {} },
        "C540": { "id": "C540", "name": "Security Operations", "controlQuestion": "How effectively are security operations managed to protect the SaaS product and customer data?", "benefitsAnalysis": "Effective security operations protect against threats and ensure data integrity.", "domains": {} },
        "C550": { "id": "C550", "name": "Compliance and Governance", "controlQuestion": "How effectively are compliance and governance practices implemented to ensure regulatory adherence?", "benefitsAnalysis": "Effective compliance and governance practices ensure regulatory adherence and reduce risk.", "domains": {} },
        "C560": { "id": "C560", "name": "DevOps and CI/CD", "controlQuestion": "How effectively are DevOps and CI/CD practices implemented to improve software delivery?", "benefitsAnalysis": "Effective DevOps and CI/CD practices improve software quality and delivery speed.", "domains": {} },
        "C570": { "id": "C570", "name": "Customer Onboarding", "controlQuestion": "How effectively are new customers onboarded to ensure a smooth start?", "benefitsAnalysis": "Effective customer onboarding improves customer satisfaction and reduces time to value.", "domains": {} },
        "C580": { "id": "C580", "name": "Voice of the Customer", "controlQuestion": "How effectively is customer feedback collected and analyzed to drive improvements?", "benefitsAnalysis": "Effective voice of the customer programs improve product and customer experience.", "domains": {} },
        "C590": { "id": "C590", "name": "Self Service", "controlQuestion": "Are customers able to maximize the benefit of the solution by themselves, including administration, consuming additional services and support?", "benefitsAnalysis": "Efficient subscription management improves customer retention and revenue.", "domains": {} }
      }
    },
    "D6": {
      "id": "D6",
      "name": "Context",
      "controlQuestion": "How does the organizational structure transform from rigidity to agility across the supporting functions within the organization?",
      "levels": [
        "Strategy is ad-hoc and opportunistic, primarily driven by immediate market demands. The culture is product-centric with siloed departments. Organizational structure is rigid, hindering quick adaptation to change.",
        "Strategy begins to incorporate customer feedback and market trends. Culture shifts towards collaboration but remains within departmental confines. Organizational structure is more defined with roles aligned towards common goals.",
        "Strategy is data-informed, enabling predictive market engagement. Culture embraces continuous improvement and learning. The organization is streamlined with integrated processes that enhance efficiency.",
        "Strategy is platform-centric, focusing on scalability and ecosystem development. Culture is innovation-driven, with cross-functional teams working towards shared objectives. The organization is agile, with flexible structures that support rapid growth.",
        "Strategy is visionary, anticipating future trends and customer needs. Culture is fully customer-centric and embraces change as a constant. The organization is holacratic, with teams empowered to make decisions that drive SaaS success."
      ],
      "capabilities": {
        "C610": { "id": "C610", "name": "Strategy", "controlQuestion": "Does a formal enterprise-level strategy exist positioning the use of cloud-based services, data, and AI?", "benefitsAnalysis": "Ensures coherence and direction across the organization, enhancing strategic focus and effectiveness.", "domains": {} },
        "C620": { "id": "C620", "name": "Organization", "controlQuestion": "Has both the Business and Technical organizational structure been updated to enable cloud-based service delivery, data management, and AI implementations?", "benefitsAnalysis": "Ensures clear roles and responsibilities, enhancing efficiency and alignment with strategic goals.", "domains": {} },
        "C630": { "id": "C630", "name": "Culture", "controlQuestion": "Are the aspirations, norms, and values of the organization conducive to achieving the strategy for cloud, data, and AI?", "benefitsAnalysis": "Drives continuous improvement and competitive advantage.", "domains": {} },
        "C640": { "id": "C640", "name": "Compensation", "controlQuestion": "How is the compensation scheme (including rewards and incentives) designed to drive achievement of group, division, and performance targets?", "benefitsAnalysis": "Drives motivation and performance.", "domains": {} },
        "C650": { "id": "C650", "name": "Skills", "controlQuestion": "Do employees have the right skills and expertise needed to ensure successful development and adoption? (e.g., ITaaS, Brokerage, Service Management, ITIL, Business Acumen, etc.)", "benefitsAnalysis": "Ensures employees can effectively implement and manage cloud, data, and AI initiatives.", "domains": {} },
        "C660": { "id": "C660", "name": "Compliance", "controlQuestion": "How does the enterprise verify that both the on- and off-premises services meet defined compliance requirements?", "benefitsAnalysis": "Reduces legal risks and ensures adherence to regulations.", "domains": {} },
        "C670": { "id": "C670", "name": "Governance & Control (G&C)", "controlQuestion": "Is Risk Management updated for Cloud, Data, and AI?", "benefitsAnalysis": "Reduces the likelihood and impact of adverse events.", "domains": {} },
        "C680": { "id": "C680", "name": "Procurement", "controlQuestion": "Is the Procurement Tooling cloud-aware for Cloud, Data, and AI?", "benefitsAnalysis": "Ensures timely and cost-effective acquisition of services.", "domains": {} },
        "C690": { "id": "C690", "name": "Innovation Management", "controlQuestion": "How effectively does the organization foster and manage innovation to stay competitive and drive growth?", "benefitsAnalysis": "Drives continuous improvement and competitive advantage.", "domains": {} },
        "C700": { "id": "C700", "name": "Sustainability", "controlQuestion": "How effectively does the organization incorporate sustainability practices into its operations and strategy?", "benefitsAnalysis": "Ensures long-term viability and compliance with regulations.", "domains": {} },
        "C710": { "id": "C710", "name": "Customer Insights and Analytics", "controlQuestion": "How effectively does the organization leverage customer data and analytics to drive decision-making and improve customer experiences?", "benefitsAnalysis": "Provides valuable insights for decision-making and strategy.", "domains": {} },
        "C720": { "id": "C720", "name": "Vendor Management", "controlQuestion": "How effectively does the organization manage its relationships with vendors and suppliers to ensure quality and reliability?", "benefitsAnalysis": "Ensures quality and reliability of services.", "domains": {} },
        "C730": { "id": "C730", "name": "IT Infrastructure", "controlQuestion": "How effectively does the organization manage its IT infrastructure to support business operations and growth?", "benefitsAnalysis": "Ensures reliability and performance.", "domains": {} }
      }
    },
    "D7": {
      "id": "D7",
      "name": "Cloud",
      "controlQuestion": "How effectively does your organization’s cloud strategy align with your business needs, and how has the transition to the cloud improved operational efficiency and business agility?",
      "levels": [
        "Some applications have been moved to the cloud in response to immediate needs. No comprehensive cloud strategy. The organization is reacting to immediate business needs rather than following a strategic plan.",
        "Development of a cloud-first strategy. Applications are being systematically moved to the cloud. The organization has developed a cloud-first strategy and is systematically migrating applications to the cloud.",
        "Most applications are in the cloud. Automated deployment and scaling of applications. The organization has automated the deployment and scaling of applications in the cloud.",
        "All applications are cloud-native. Use of platform services for maximum scalability and performance. The organization has transitioned all applications to be cloud-native and is using platform services to maximize scalability and performance.",
        "Advanced use of cloud technologies such as serverless and edge computing. Cloud infrastructure dynamically adapts to workload needs. The organization is using advanced cloud technologies and the cloud infrastructure dynamically adapts to workload needs."
      ],
      "capabilities": {
        "C740": { "id": "C740", "name": "Cloud Security", "controlQuestion": "How secure are your cloud-based systems and data?", "benefitsAnalysis": "", "domains": {} },
        "C750": { "id": "C750", "name": "Cloud Service Management", "controlQuestion": "How effectively are you managing your cloud services?", "benefitsAnalysis": "", "domains": {} },
        "C760": { "id": "C760", "name": "Cloud Data Management", "controlQuestion": "How effectively are you managing and leveraging your data in the cloud?", "benefitsAnalysis": "", "domains": {} },
        "C770": { "id": "C770", "name": "Cloud DevOps", "controlQuestion": "How well are your DevOps practices integrated with your cloud operations?", "benefitsAnalysis": "", "domains": {} },
        "C780": { "id": "C780", "name": "Cloud Innovation", "controlQuestion": "How is cloud technology driving innovation in your business?", "benefitsAnalysis": "", "domains": {} }
      }
    },
    "D8": {
      "id": "D8",
      "name": "Data",
      "controlQuestion": "How effectively is your organization leveraging data as a strategic asset, and how has the use of data analytics and machine learning improved decision-making and business outcomes?",
      "levels": [
        "Data is used to support decision-making. Initial data governance policies have been implemented. The organization is beginning to use data to inform decision-making but lacks a comprehensive data strategy.",
        "Data is seen as a key asset. Comprehensive data governance policies are in place. The organization recognizes data as a key asset and has implemented comprehensive data governance policies.",
        "Automated data collection and analysis. Use of data analytics to drive decision-making. The organization has automated data collection and analysis and is using data analytics to drive decision-making.",
        "Data is fully integrated into all business processes. Use of advanced analytics and machine learning. The organization has fully integrated data into all business processes and is using advanced analytics and machine learning.",
        "Data is used to proactively drive business strategy. Advanced use of AI and machine learning for predictive analytics. The organization is using data and AI to proactively drive business strategy."
      ],
      "capabilities": {
        "C800": { "id": "C800", "name": "Data-Driven Features", "controlQuestion": "How effectively are data-driven features integrated into your software solutions?", "benefitsAnalysis": "", "domains": {} },
        "C810": { "id": "C810", "name": "Data Monetization", "controlQuestion": "How effectively is data monetized in your software solutions?", "benefitsAnalysis": "", "domains": {} },
        "C820": { "id": "C820", "name": "Data Security", "controlQuestion": "How effectively is data secured in your software solutions?", "benefitsAnalysis": "", "domains": {} },
        "C830": { "id": "C830", "name": "Data Analytics", "controlQuestion": "How effectively is data analytics used to inform decision-making and strategy?", "benefitsAnalysis": "", "domains": {} },
        "C840": { "id": "C840", "name": "Data Infrastructure", "controlQuestion": "How effectively is your data infrastructure able to scale and adapt to business needs?", "benefitsAnalysis": "", "domains": {} }
      }
    },
    "D9": {
      "id": "D9",
      "name": "Ai",
      "controlQuestion": "How effectively is your organization integrating AI into business processes and the business platform, and how has the use of AI improved customer interactions, business strategy, and the ability to adapt to business needs and predict future trends?",
      "levels": [
        "AI is used to solve specific problems as they arise. No comprehensive AI strategy. The organization is using AI to address immediate problems but lacks a strategic plan for its use.",
        "Development of an AI-first strategy. AI is systematically integrated into business processes. The organization has developed an AI-first strategy and is systematically integrating AI into business processes.",
        "Most business processes are augmented with AI. Automated decision-making using AI. The organization is using AI to augment most business processes and has automated many decision-making processes.",
        "AI is fully integrated into the business platform. Use of AI to drive customer interactions and business strategy. The organization has fully integrated AI into the business platform and is using AI to drive customer interactions and business strategy.",
        "Advanced use of AI technologies such as deep learning and autonomous systems. AI dynamically adapts to business needs and predicts future trends. The organization is using advanced AI technologies and AI dynamically adapts to business needs and predicts future trends."
      ],
      "capabilities": {
        "C910": { "id": "C910", "name": "Natural Language Processing (NLP)", "controlQuestion": "How effectively is NLP integrated into your software solutions?", "benefitsAnalysis": "", "domains": {} },
        "C920": { "id": "C920", "name": "Machine Learning (ML)", "controlQuestion": "How effectively is ML integrated into your software solutions?", "benefitsAnalysis": "", "domains": {} },
        "C930": { "id": "C930", "name": "Computer Vision", "controlQuestion": "How effectively is computer vision integrated into your software solutions?", "benefitsAnalysis": "", "domains": {} },
        "C940": { "id": "C940", "name": "Predictive Analytics", "controlQuestion": "How effectively is predictive analytics used in your software solutions?", "benefitsAnalysis": "", "domains": {} },
        "C950": { "id": "C950", "name": "Robotic Process Automation (RPA)", "controlQuestion": "How effectively is RPA integrated into your software solutions?", "benefitsAnalysis": "", "domains": {} },
        "C960": { "id": "C960", "name": "Speech Recognition", "controlQuestion": "How effectively is speech recognition integrated into your software solutions?", "benefitsAnalysis": "", "domains": {} },
        "C970": { "id": "C970", "name": "AI Security", "controlQuestion": "How effectively is AI security integrated into your software solutions?", "benefitsAnalysis": "", "domains": {} },
        "C980": { "id": "C980", "name": "General AI (GenAI)", "controlQuestion": "How effectively is GenAI integrated into your software solutions?", "benefitsAnalysis": "", "domains": {} }
      }
    }
  }
};