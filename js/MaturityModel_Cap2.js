// js/MaturityModel_Cap.js
// This is a streamlined version of the maturity model, containing only the hierarchy
// of disciplines and capabilities. Each capability includes a list of its associated domains
// (ID and Name only), making it lightweight and ideal for navigation components.
// VERIFIED COMPLETE AND CORRECTED: 2025-07-23

const maturityModel_Cap = {
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
      "controlQuestion": "How effectively does your sales process align with customer needs, optimize revenue predictability, and maintain strong customer relationships? ",
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
          "levels": [
            "Sales efforts are opportunistic and uncoordinated.",
            "Structured sales plans with documented processes.",
            "Automated tools for sales planning and forecasting.",
            "Integrated sales strategies across platforms, enhancing alignment.",
            "Data-driven strategies with predictive insights, optimizing sales effectiveness."
          ],
          "domains": [
            { "id": "D-111", "name": "Market Analysis" },
            { "id": "D-112", "name": "Competitive Analysis" },
            { "id": "D-113", "name": "Sales Forecasting" },
            { "id": "D-114", "name": "Strategic Planning" },
            { "id": "D-115", "name": "Market Segmentation" },
            { "id": "D-116", "name": "Value Proposition Development" },
            { "id": "D-117", "name": "Go-to-Market Strategy" }
          ]
        },
        "C120": {
          "id": "C120",
          "name": "Sales Operations",
          "controlQuestion": "How can we optimize our sales processes to improve efficiency and effectiveness?",
          "benefitsAnalysis": "Enhanced process efficiency reduces costs and increases sales productivity.",
          "levels": [
            "Sales processes are inefficient and lack formal optimization.",
            "Documented processes with regular reviews and updates.",
            "Automated tools enhance process efficiency and consistency.",
            "Processes are integrated across platforms, improving agility.",
            "Continuous improvement driven by real-time data and advanced analytics."
          ],
          "domains": [
            { "id": "D-121", "name": "Sales Process Optimization" },
            { "id": "D-122", "name": "Sales Tools & Technology" },
            { "id": "D-123", "name": "Sales Training & Development" },
            { "id": "D-124", "name": "Sales Data Management" },
            { "id": "D-125", "name": "Sales Reporting & Analytics" },
            { "id": "D-126", "name": "Territory Management" },
            { "id": "D-127", "name": "Sales Compensation Planning" }
          ]
        },
        "C130": {
          "id": "C130",
          "name": "Account Management",
          "controlQuestion": "How can we effectively manage customer relationships to maximize retention and growth?",
          "benefitsAnalysis": "Stronger customer relationships lead to higher retention rates and increased customer lifetime value.",
          "levels": [
            "Customer relationships are managed informally and inconsistently.",
            "Documented processes for managing customer relationships.",
            "Automated tools enhance relationship management efficiency.",
            "Relationship management is integrated across platforms, improving coordination.",
            "Predictive models optimize customer engagement and retention."
          ],
          "domains": [
            { "id": "D-131", "name": "Customer Relationship Management (CRM)" },
            { "id": "D-132", "name": "Account Planning" },
            { "id": "D-133", "name": "Customer Retention" },
            { "id": "D-134", "name": "Customer Segmentation" },
            { "id": "D-135", "name": "Customer Feedback Management" },
            { "id": "D-136", "name": "Renewal Management" },
            { "id": "D-137", "name": "Upselling & Cross-selling" }
          ]
        },
        "C140": {
          "id": "C140",
          "name": "Pipeline Management",
          "controlQuestion": "How can we effectively manage our sales pipeline to optimize opportunity conversion?",
          "benefitsAnalysis": "Better pipeline management increases conversion rates and accelerates sales cycles.",
          "levels": [
            "Pipeline management is informal and inconsistent.",
            "Documented processes for managing the sales pipeline.",
            "Automated tools enhance pipeline management efficiency.",
            "Pipeline management is integrated across platforms, improving visibility.",
            "Predictive models optimize opportunity management and conversion rates."
          ],
          "domains": [
            { "id": "D-141", "name": "Opportunity Management" },
            { "id": "D-142", "name": "Sales Funnel Analysis" },
            { "id": "D-143", "name": "Forecasting & Reporting" },
            { "id": "D-144", "name": "Deal Qualification" },
            { "id": "D-145", "name": "Pipeline Health Monitoring" },
            { "id": "D-146", "name": "Sales Cycle Management" },
            { "id": "D-147", "name": "Win/Loss Analysis" }
          ]
        },
        "C150": {
          "id": "C150",
          "name": "Sales Performance Management",
          "controlQuestion": "How can we track and improve sales performance to achieve our goals?",
          "benefitsAnalysis": "Improved performance tracking leads to higher sales effectiveness and goal achievement.",
          "levels": [
            "Performance tracking is informal and inconsistent.",
            "Documented processes for tracking and reviewing performance.",
            "Automated tools enhance performance tracking and reporting.",
            "Performance management is integrated across platforms, improving visibility.",
            "Real-time performance data and advanced analytics drive continuous improvement."
          ],
          "domains": [
            { "id": "D-151", "name": "Performance Metrics" },
            { "id": "D-152", "name": "Sales Incentives" },
            { "id": "D-153", "name": "Sales Coaching" },
            { "id": "D-154", "name": "Performance Reviews" },
            { "id": "D-155", "name": "Goal Setting" },
            { "id": "D-156", "name": "Sales Dashboards" },
            { "id": "D-157", "name": "Pipeline Reviews" }
          ]
        },
        "C160": {
          "id": "C160",
          "name": "Contract Management",
          "controlQuestion": "How can we effectively manage contracts to ensure compliance and optimize value?",
          "benefitsAnalysis": "Effective contract management reduces legal risks and maximizes contract value.",
          "levels": [
            "Contract management is informal and inconsistent.",
            "Documented processes for managing contracts.",
            "Automated tools enhance contract management efficiency.",
            "Contract management is integrated across platforms, improving coordination.",
            "Predictive models optimize contract performance and compliance."
          ],
          "domains": [
            { "id": "D-161", "name": "Contract Negotiation" },
            { "id": "D-162", "name": "Legal Compliance" },
            { "id": "D-163", "name": "Renewal Management" },
            { "id": "D-164", "name": "Contract Drafting" },
            { "id": "D-165", "name": "Contract Review" },
            { "id": "D-166", "name": "Contract Lifecycle Management" },
            { "id": "D-167", "name": "SLA Management" }
          ]
        },
        "C170": {
          "id": "C170",
          "name": "Sales Excellence",
          "controlQuestion": "How can we achieve and maintain superior sales performance?",
          "benefitsAnalysis": "Superior sales practices lead to higher sales performance and competitive advantage.",
          "levels": [
            "Sales practices are informal and inconsistent.",
            "Documented best practices with regular updates.",
            "Automated tools enhance the efficiency and consistency of sales practices.",
            "Sales practices are integrated across platforms, improving alignment.",
            "Data-driven best practices optimize sales performance and effectiveness."
          ],
          "domains": [
            { "id": "D-171", "name": "Content Creation" },
            { "id": "D-172", "name": "Sales Training" },
            { "id": "D-173", "name": "Sales Playbooks" },
            { "id": "D-174", "name": "Sales Collateral Development" },
            { "id": "D-175", "name": "Competitive Intelligence" },
            { "id": "D-176", "name": "Product Training" },
            { "id": "D-177", "name": "Sales Coaching" }
          ]
        },
        "C180": {
          "id": "C180",
          "name": "Customer Success",
          "controlQuestion": "How can we ensure our customers achieve their desired outcomes and remain satisfied?",
          "benefitsAnalysis": "Enhanced customer success efforts lead to higher customer satisfaction and retention.",
          "levels": [
            "Customer success efforts are informal and inconsistent.",
            "Documented processes for ensuring customer success.",
            "Automated tools enhance customer success management efficiency.",
            "Customer success is integrated across platforms, improving coordination.",
            "Predictive models optimize customer engagement and satisfaction."
          ],
          "domains": [
            { "id": "D-181", "name": "Onboarding" },
            { "id": "D-182", "name": "Customer Support" },
            { "id": "D-183", "name": "Upselling & Cross-selling" },
            { "id": "D-184", "name": "Customer Health Scoring" },
            { "id": "D-185", "name": "Churn Management" },
            { "id": "D-186", "name": "Customer Advocacy" },
            { "id": "D-187", "name": "Customer Training" }
          ]
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
        "C210": {
          "id": "C210",
          "name": "Brand Awareness and Credibility",
          "controlQuestion": "Is the company/product brand well known among the target audience and partner network?",
          "benefitsAnalysis": "Strategic enhancement of brand equity leading to increased market share, improved partner relationships, and higher profitability through premium pricing.",
          "levels": [
            "Very low brand awareness (<10%) among the target audience. Few in-bound leads (<5%) from brand awareness.",
            "Limited brand awareness (<25%) among the target audience. Some in-bound leads (<10%) from brand awareness.",
            "Medium brand awareness (~50%) with limited understanding of position/offering. Growing in-bound leads (>20%). Limited partner brand affinity.",
            "High brand awareness (>75%) with good understanding of position/offering. Good level of in-bound leads (>33%). Good partner brand affinity. Some analyst recognition.",
            "Very high brand recognition and credibility from 3rd party endorsement. Strong partner brand affinity. Analyst \"leader\" ranking."
          ],
          "domains": [
            { "id": "D-211", "name": "Brand Strategy" },
            { "id": "D-212", "name": "Public Relations" },
            { "id": "D-213", "name": "Social Media Presence" },
            { "id": "D-214", "name": "Corporate Messaging" },
            { "id": "D-215", "name": "Analyst Relations" },
            { "id": "D-216", "name": "Social Media Presence" }
          ]
        },
        "C220": {
          "id": "C220",
          "name": "Planning and Budgeting",
          "controlQuestion": "Is there a comprehensive marketing budget aligned with company goals?",
          "benefitsAnalysis": "Effective allocation of marketing resources aligned with strategic goals, leading to sustainable growth and a strong competitive position in the market.",
          "levels": [
            "Limited planning with little support for objectives and sales integration. No forecast results or ROI. Less than 30% of spend on external activities.",
            "Short-term plan (12 months) with basic tie to objectives and sales integration. Basic ROI calculations. Less than 40% of spend on external activities.",
            "2-year plan supporting objectives with good sales integration. Comprehensive ROI calculations. Over 50% of spend on external activities.",
            "3-year plan fully integrated with strategy and sales objectives. Comprehensive partner marketing plan with partner-funded activity. Over 60% of spend on external activities.",
            "3-year strategic marketing plan fully supportive of company strategy. Integrated with sales plan and shared targets. Majority partner-funded marketing plan. Over 65% of spend on external activities."
          ],
          "domains": [
            { "id": "D-221", "name": "Budget Allocation" },
            { "id": "D-222", "name": "Forecasting and ROI" }
          ]
        },
        "C230": {
          "id": "C230",
          "name": "Digital Marketing and Analytics",
          "controlQuestion": "What infrastructure is used for sales and marketing?",
          "benefitsAnalysis": "Leveraging cutting-edge technology to drive marketing innovation, resulting in enhanced customer engagement, improved lead quality, and increased marketing effectiveness.",
          "levels": [
            "Marketing database and bulk email application with limited analytics. Poor data quality and non-compliance with data protection rules.",
            "Basic marketing automation with limited analytics. Poor data quality and limited compliance with data protection rules.",
            "Basic marketing automation for lead generation and nurturing. Compliant data from reputable third parties. Data analytics for digital campaign performance. A/B testing for messaging and CTA performance.",
            "Extensive use of marketing automation to optimize efficiency and scale. Comprehensive data policies for market reach. Some use of generative AI for research and content creation.",
            "Advanced marketing automation for ABM and micro-targeted campaigns. Generative AI for campaign messaging. Lead scoring and nurturing with advanced analytics for campaign optimization. Split testing for messaging and CTA performance."
          ],
          "domains": [
            { "id": "D-231", "name": "Marketing Automation" },
            { "id": "D-232", "name": "Data Analytics" }
          ]
        },
        "C240": {
          "id": "C240",
          "name": "Account Based Marketing (ABM)",
          "controlQuestion": "Does the company use account-specific messaging based on relevant and accurate data?",
          "benefitsAnalysis": "High ROI demand generation activity that supports increased market share and higher profitability through premium pricing and margin retention.",
          "levels": [
            "No account-based marketing - generic messaging to broad audience.",
            "Limited ABM capability with basic and inefficient data capture and maintenance.",
            "Some ABM capabilities with semi-mature data capture and maintenance.",
            "Good ABM capability with advanced data capture and maintenance.",
            "Deep ABM capability with intelligent data capture and maintenance."
          ],
          "domains": [
            { "id": "D-241", "name": "Account Targeting" },
            { "id": "D-242", "name": "Personalized Messaging" },
            { "id": "D-243", "name": "Account Insights and Analytics" },
            { "id": "D-244", "name": "Account Engagement" }
          ]
        },
        "C250": {
          "id": "C250",
          "name": "Product Marketing",
          "controlQuestion": "Does the company have a formal product lifecycle marketing methodology that is used strategically?",
          "benefitsAnalysis": "Improved product lifecycle performance (market share, revenue, and margin) with smoother revenue flow and lower EOL write-off.",
          "levels": [
            "Limited product launch activity or development/marketing engagement.",
            "Limited and tactical product and service launch capability.",
            "Basic product or service launch/sustain and EOL methodology.",
            "Advanced product or service launch/sustain/EOL methodology with basic phase-in/phase-out process.",
            "Comprehensive product or service launch/sustain/EOL methodology with phase-in/phase-out process."
          ],
          "domains": [
            { "id": "D-251", "name": "Product / Service Launch" },
            { "id": "D-252", "name": "Market Research and Analysis" },
            { "id": "D-253", "name": "Product Positioning and Messaging" },
            { "id": "D-254", "name": "Go-to-Market Strategy" },
            { "id": "D-255", "name": "Sales Enablement" },
            { "id": "D-256", "name": "Customer Segmentation and Targeting" },
            { "id": "D-257", "name": "Pricing and Packaging" },
            { "id": "D-258", "name": "Product Lifecycle Management" },
            { "id": "D-259", "name": "Demand Generation and Lead Nurturing" },
            { "id": "D-260", "name": "Customer Success and Retention" },
            { "id": "D-261", "name": "Competitive Intelligence" },
            { "id": "D-262", "name": "Analytics and Reporting" }
          ]
        }
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
        "C310": {
          "id": "C310",
          "name": "Sell With",
          "controlQuestion": "Are the rules of engagement and partner co-selling for your direct sales and partners clear?",
          "benefitsAnalysis": "Clear rules of engagement enhance collaboration and sales effectiveness.",
          "levels": [
            "No defined rules of engagement. Co-selling is ad-hoc and inconsistent.",
            "Basic rules of engagement are in place, but not consistently followed.",
            "Automated tools manage co-selling activities and ensure consistency.",
            "Co-selling processes are integrated across platforms, enhancing coordination.",
            "Continuous optimization of co-selling strategies based on real-time data and feedback."
          ],
          "domains": [
            { "id": "D-311", "name": "Co-Selling Development" },
            { "id": "D-312", "name": "Partner Collaboration" },
            { "id": "D-313", "name": "Joint Account Planning" },
            { "id": "D-314", "name": "Performance Metrics" }
          ]
        },
        "C320": {
          "id": "C320",
          "name": "Sell To",
          "controlQuestion": "Do you sell your technology to others for their offerings?",
          "benefitsAnalysis": "Selling technology to others expands market reach and revenue streams.",
          "levels": [
            "No formal strategy for selling technology to others.",
            "Basic strategy in place, but not consistently executed.",
            "Automated tools streamline technology sales processes.",
            "Integrated strategy across platforms enhances coordination and effectiveness.",
            "Data-driven insights optimize technology sales strategies based on market trends and customer feedback."
          ],
          "domains": [
            { "id": "D-321", "name": "Partner Program Growth" },
            { "id": "D-322", "name": "Technology Integration" },
            { "id": "D-323", "name": "Support and Training" }
          ]
        },
        "C330": {
          "id": "C330",
          "name": "Sell Through",
          "controlQuestion": "Do you use distributors, resellers, and/or SIs as part of your resell strategy?",
          "benefitsAnalysis": "Using distributors and resellers increases market penetration and sales volume.",
          "levels": [
            "No formal resell strategy. Use of distributors and resellers is ad-hoc.",
            "Basic resell strategy in place, but not consistently followed.",
            "Automated tools manage resell activities and ensure consistency.",
            "Resell processes are integrated across platforms, enhancing coordination.",
            "Real-time data and analytics continuously optimize resell strategies."
          ],
          "domains": [
            { "id": "D-331", "name": "Channel Partner Recruitment" },
            { "id": "D-332", "name": "Channel Partner Enablement" },
            { "id": "D-333", "name": "Channel Partner Performance" },
            { "id": "D-334", "name": "Channel Conflict Management" },
            { "id": "D-335", "name": "Distribution Network" },
            { "id": "D-336", "name": "Reseller Agreements" },
            { "id": "D-337", "name": "Sales Incentives" },
            { "id": "D-338", "name": "Market Penetration" }
          ]
        },
        "C340": {
          "id": "C340",
          "name": "Hyperscaler",
          "controlQuestion": "Do you co-sell with Hyperscalers? Do you sell your offerings on a Hyperscaler’s marketplace?",
          "benefitsAnalysis": "Co-selling with Hyperscalers and selling on their marketplace increases visibility and sales opportunities.",
          "levels": [
            "No formal strategy for co-selling with Hyperscalers or selling on their marketplace.",
            "Basic strategy in place, but not consistently executed.",
            "Automated tools manage Hyperscaler engagement and marketplace sales.",
            "Integrated strategy across platforms enhances coordination and effectiveness.",
            "Predictive analytics optimize Hyperscaler engagement and marketplace sales strategies."
          ],
          "domains": [
            { "id": "D-341", "name": "Hyperscaler Engagement" },
            { "id": "D-342", "name": "Marketplace Sales" },
            { "id": "D-343", "name": "Hyperscaler Collaboration" },
            { "id": "D-344", "name": "Leveraging Hyperscaler Programs" },
            { "id": "D-345", "name": "Incentive Management" },
            { "id": "D-346", "name": "Pipeline Coordination" },
            { "id": "D-347", "name": "Hyperscaler Events" }
          ]
        },
        "C350": {
          "id": "C350",
          "name": "Partner Operations",
          "controlQuestion": "How effectively are partner operations managed to ensure smooth collaboration and efficiency?",
          "benefitsAnalysis": "Efficient partner operations enhance collaboration, reduce operational costs, and improve partner satisfaction.",
          "levels": [
            "Partner operations are ad-hoc and lack formal processes.",
            "Basic processes are in place, but not consistently followed.",
            "Automated tools streamline partner operations and ensure consistency.",
            "Integrated processes across platforms enhance coordination and efficiency.",
            "Continuous improvement of partner operations based on real-time data and feedback."
          ],
          "domains": [
            { "id": "D-351", "name": "Partner Onboarding" },
            { "id": "D-352", "name": "Partner Performance Management" },
            { "id": "D-353", "name": "Partner Relationship Management" },
            { "id": "D-354", "name": "Partner Incentives" }
          ]
        },
        "C360": {
          "id": "C360",
          "name": "Partner Marketing",
          "controlQuestion": "How effectively does the company support partners in marketing their offerings?",
          "benefitsAnalysis": "Effective partner marketing support increases brand visibility, market reach, and sales opportunities.",
          "levels": [
            "No formal partner marketing support. Efforts are ad-hoc and inconsistent.",
            "Basic marketing support is provided, but not consistently executed.",
            "Automated tools manage partner marketing activities and ensure consistency.",
            "Integrated marketing support across platforms enhances coordination and effectiveness.",
            "Data-driven insights continuously optimize partner marketing strategies."
          ],
          "domains": [
            { "id": "D-361", "name": "Marketing Support" },
            { "id": "D-362", "name": "Co-Marketing Campaigns" },
            { "id": "D-363", "name": "Brand Alignment" }
          ]
        },
        "C370": {
          "id": "C370",
          "name": "Partner Enablement",
          "controlQuestion": "How effectively are partners enabled with the necessary tools, resources, and training to succeed?",
          "benefitsAnalysis": "Effective partner enablement improves partner performance, satisfaction, and loyalty.",
          "levels": [
            "No formal partner enablement program. Efforts are ad-hoc and inconsistent.",
            "Basic enablement program is in place, but not consistently executed.",
            "Automated tools manage partner enablement activities and ensure consistency.",
            "Integrated enablement program across platforms enhances coordination and effectiveness.",
            "Continuous optimization of partner enablement strategies based on partner performance and feedback."
          ],
          "domains": [
            { "id": "D-371", "name": "Training and Certification" },
            { "id": "D-372", "name": "Resource Availability" },
            { "id": "D-373", "name": "Partner Portal" }
          ]
        },
        "C380": {
          "id": "C380",
          "name": "Partner Support",
          "controlQuestion": "How effectively does the company provide support to partners to resolve issues and enhance collaboration?",
          "benefitsAnalysis": "Effective partner support improves partner satisfaction, reduces churn, and enhances collaboration.",
          "levels": [
            "No formal partner support program. Efforts are ad-hoc and inconsistent.",
            "Basic support program is in place, but not consistently executed.",
            "Automated tools manage partner support activities and ensure consistency.",
            "Integrated support program across platforms enhances coordination and effectiveness.",
            "Real-time data and analytics continuously optimize partner support strategies."
          ],
          "domains": [
            { "id": "D-381", "name": "Technical Support" },
            { "id": "D-382", "name": "Issue Resolution" },
            { "id": "D-383", "name": "Knowledge Base" }
          ]
        }
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
        "C410": {
          "id": "C410",
          "name": "Applications",
          "controlQuestion": "How are applications architected and/or structured?",
          "benefitsAnalysis": "Cloud application patterns enhance lifecycle development, offering high availability, resiliency, and the benefits of SOA, leading to efficient feature development and integration.",
          "levels": [
            "Applications operate in a stateless manner, using loosely coupled services and ad hoc management via automation, scripts, or orchestration. They retain on-premises architecture, running on VMs or basic cloud services, which may not fully leverage cloud benefits.",
            "Applications leverage cloud services from providers like AWS, Azure, or Google. They are designed for self-healing and use cloud-based databases, storage, and PaaS services. Engineering teams refactor applications into modular architectures, adopting microservices and enhancing scalability.",
            "Applications are temporal and resilient, operating in environments where service chains are unaffected by failures or eliminations. They are architected for transaction integrity across distributed instances and are decomposed into microservices or serverless functions for cloud optimization.",
            "Applications are architected for full utilization of microservices and serverless architectures, enabling rapid scaling and resilience. They are deeply integrated with cloud ecosystems and built to be cloud-agnostic, reducing vendor lock-in.",
            "Application patterns are used to construct applications with service building blocks, minimizing manual tasks. Architectures are adaptive and event-driven, integrating new cloud services and technologies like ML and GenAI. API-first design facilitates integration with partners and customers."
          ],
          "domains": [
            { "id": "D-411", "name": "Cloud Development Training" },
            { "id": "D-412", "name": "Team Organization Evolution" },
            { "id": "D-413", "name": "Application Deployment Progress" },
            { "id": "D-414", "name": "Build and Deploy Automation" },
            { "id": "D-415", "name": "Stateless Application Design" },
            { "id": "D-416", "name": "API Standardization" },
            { "id": "D-417", "name": "Cloud Native Development" }
          ]
        },
        "C420": {
          "id": "C420",
          "name": "Technical Architecture",
          "controlQuestion": "Do standard architectural designs exist to guide cloud-based service deployments?",
          "benefitsAnalysis": "Pre-defining selected patterns establishes reusable building blocks for cloud service deployments.",
          "levels": [
            "Architectural designs are used ad hoc. As applications move to the cloud, architecture integrates tightly with the chosen platform, aligning with Hyper scaler recommendations and evolving to support REST APIs.",
            "Foundational architectural designs guide cloud deployments, covering complex scenarios like multi-tier applications and database migrations. Patterns and frameworks scale cloud environments, enhance security, and integrate with on-premises systems.",
            "Cloud principles and architecture blueprints are well documented and utilized. Technical architecture leverages serverless architecture, microservices, advanced data analytics platforms, and comprehensive security models.",
            "Services are modeled online using standard building block architecture artifacts. Methodology is evangelized for designing cloud-based service deployments. Architectural frameworks support dynamic scaling and sophisticated application deployments.",
            "Service components are modeled within tools for deploying and managing an automated cloud ecosystem. Architecture promotes continuous innovation and adoption of emerging technologies like AI, ML, and IoT."
          ],
          "domains": [
            { "id": "D-421", "name": "Architect Cloud Training" },
            { "id": "D-422", "name": "Cloud Capability Integration" },
            { "id": "D-423", "name": "Cloud Deployment Design" },
            { "id": "D-424", "name": "Cloud Inclusion in Architectural Planning" },
            { "id": "D-425", "name": "Cloud Solution Design Consistency" },
            { "id": "D-426", "name": "Cloud Design Pattern Adoption" },
            { "id": "D-427", "name": "Business Application Mapping" },
            { "id": "D-428", "name": "Cloud Building Block Development" }
          ]
        },
        "C430": {
          "id": "C430",
          "name": "Data",
          "controlQuestion": "Does the enterprise have a published data management framework for cloud platforms?",
          "benefitsAnalysis": "Solid data management minimizes errors and establishes clear access rules and actions for data handling.",
          "levels": [
            "The enterprise has a basic documented data management framework, focusing on on-premises data handling and security. Specific frameworks for managing cloud environments are underdeveloped, with a focus on compliance with general data protection regulations during initial migration.",
            "A published data management framework emerges, with informal data stewards responsible for cloud data collections. The framework starts to encompass cloud-based data, recognizing the need for comprehensive governance across environments.",
            "Data stewards are defined for cloud data, with stakeholders reviewing data management reports and taking action within defined processes. The framework explicitly covers cloud data, addressing lifecycle management, quality, privacy, and security in a cloud context.",
            "Data management metadata is encoded within a CMDB/CMS or Data-aaS ecosystem, integrating data housed on cloud and traditional platforms. The framework is fully integrated, covering all aspects of data handling across environments.",
            "The data management framework is adaptive, designed to support rapid innovation and emerging technologies within cloud platforms. Monitoring of data management is integrated, with automated events triggered by data attribute thresholds."
          ],
          "domains": [
            { "id": "D-429", "name": "Big Data Technology Training" },
            { "id": "D-430", "name": "Cloud Data Services Training" },
            { "id": "D-431", "name": "Data Value Assessment" },
            { "id": "D-432", "name": "Data Access Control Implementation" },
            { "id": "D-433", "name": "Cloud Data Services Usage" },
            { "id": "D-434", "name": "Data Management Criteria Application" },
            { "id": "D-435", "name": "Data Management Automation" },
            { "id": "D-436", "name": "Data Management Framework Implementation" },
            { "id": "D-437", "name": "Enterprise Information Management" },
            { "id": "D-438", "name": "Enterprise Data Management" },
            { "id": "D-439", "name": "Data Extraction and Search Capabilities" }
          ]
        },
        "C440": {
          "id": "C440",
          "name": "Ai",
          "controlQuestion": "How are machine learning systems developed, deployed to production, and standardized across the business?",
          "benefitsAnalysis": "Managing ML platforms as products ensures a consistent experience for IT consumers in adopting and deploying capabilities.",
          "levels": [
            "Data Scientists independently use various AI/ML frameworks to create models. IT/Ops starts creating deployment systems without standardization.",
            "More systems are deployed, each requiring unique handling. Groups document processes and collaborate with IT/Ops for standardization.",
            "Cross-functional teams adopt common tools. IT/Ops provides a deployment workflow and compliance frameworks. Training data results are stored in a standard repository.",
            "A shared platform for training data pipelines is available. Multiple data sources are instrumented, and qualitative metrics track data quality and model accuracy.",
            "Data pipelines and feature labeling are shared across organizations. Rapid access for iterative model development is provided. ML capabilities are used to improve model fitting on the platform."
          ],
          "domains": [
            { "id": "D-441", "name": "AI/ML Adoption and Support" },
            { "id": "D-442", "name": "AI/ML Training and Expertise" },
            { "id": "D-443", "name": "Data-Driven Decision Making" },
            { "id": "D-444", "name": "Data Quality Assessment for AI/ML" },
            { "id": "D-445", "name": "Machine Learning Systems Development" },
            { "id": "D-446", "name": "Data Access for AI/ML Tools" },
            { "id": "D-447", "name": "Automation and Machine Learning Capabilities" },
            { "id": "D-448", "name": "AI/ML Application to Cloud Management and Operations" },
            { "id": "D-449", "name": "AI Project Deployment and Data Alignment" }
          ]
        },
        "C450": {
          "id": "C450",
          "name": "PaaS",
          "controlQuestion": "How are your applications structured or integrated with PaaS as the foundational platform?",
          "benefitsAnalysis": "Pre-defined PaaS elements enable consistent application development, leading to consistent platform selection, orchestration, and lifecycle management.",
          "levels": [
            "Applications are integrated using non-standard proprietary methods, though some PaaS solutions are utilized for certain services.",
            "Applications begin to use shared components for integration, including services built from PaaS platforms, such as enterprise service buses and shared utilities for web, presentation, and databases.",
            "Applications are often provisioned via PaaS, both off and on-premises, through a common portal. Integration, presentation, and data services transition from shared utilities to PaaS-generated services. Enterprise architecture includes patterns and tutorials for leveraging public and private PaaS platforms.",
            "Application portfolio management ensures all applications and services are constructed from PaaS platforms, available as services using RESTful API integration. Auto-provisioning of full applications is available on demand, and infrastructure is automatically scaled by the PaaS platform.",
            "All applications and services are provisioned via PaaS through a common portal. Infrastructure is highly optimized, and PaaS-provisioned applications are automatically tested and deployed to production. Dynamic orchestration monitors application effectiveness, enhancing versions to meet business needs."
          ],
          "domains": [
            { "id": "D-451", "name": "PaaS Adoption and Utilization" },
            { "id": "D-452", "name": "Reusable Service Elements in PaaS" },
            { "id": "D-453", "name": "Scaling Concepts in PaaS" },
            { "id": "D-454", "name": "PaaS Platform Standardization" },
            { "id": "D-455", "name": "Application Integration with PaaS" },
            { "id": "D-456", "name": "PaaS Framework Adoption" },
            { "id": "D-457", "name": "Database Services in PaaS" },
            { "id": "D-458", "name": "Development Tools and Components in PaaS" }
          ]
        },
        "C460": {
          "id": "C460",
          "name": "DevOps",
          "controlQuestion": "How is your cloud architecture defined to support DevOps?",
          "benefitsAnalysis": "A defined cloud architecture aligns operations and development with business objectives, leveraging cloud capabilities.",
          "levels": [
            "Cloud architecture addresses ad-hoc requests and is manually installed. CI/CD pipeline is for internal use.",
            "Static templates like AMI are used for repeatable cloud deployments. CI/CD pipeline includes build automation.",
            "A defined cloud architecture uses templates and AMI systematically. CI/CD pipeline supports multi-tenant environments.",
            "Container-based solutions support the cloud model. CI/CD pipeline automation keeps environments consistently updated.",
            "Service delivery utilizes microservices for agility. Auto-scaling strategies prevent downtime and ensure serverless architecture."
          ],
          "domains": [
            { "id": "D-461", "name": "Cloud Technology Adoption in DevOps" },
            { "id": "D-462", "name": "DevOps Collaboration in Cloud Projects" },
            { "id": "D-463", "name": "Infrastructure as Code (IaC) Practices in DevOps" },
            { "id": "D-464", "name": "Cloud Application Development Skills" },
            { "id": "D-465", "name": "Cloud Technology Implementation in DevOps" },
            { "id": "D-466", "name": "Development Methodologies for CSP Offerings" },
            { "id": "D-467", "name": "Artifact Management and Deployment in DevOps" },
            { "id": "D-468", "name": "Continuous Delivery Implementation in DevOps" },
            { "id": "D-469", "name": "Continuous Assessment of Cloud Capabilities" },
            { "id": "D-470", "name": "DevOps Process Alignment with Business Goals" },
            { "id": "D-471", "name": "Cloud Technology Implementation for DevOps" },
            { "id": "D-472", "name": "Cloud Architecture Definition for DevOps" },
            { "id": "D-473", "name": "Strategic Cloud Roadmap Alignment in DevOps" },
            { "id": "D-474", "name": "Automation Technology Development in DevOps" }
          ]
        },
        "C470": {
          "id": "C470",
          "name": "Security",
          "controlQuestion": "Do clear security frameworks exist for each class of application?",
          "benefitsAnalysis": "Improved security posture reduces risk and compliance issues, ensuring safe and reliable cloud operations.",
          "levels": [
            "Physical separation is used for security, with cloud security frameworks considered for single-tenant operations.",
            "Applications are grouped by criticality, with security frameworks implemented for cloud readiness.",
            "Requirements are defined for all system types, with cloud services aligned. Multi-factor authentication and single sign-on are standard.",
            "Security perimeters are clear and extended to cloud services. Periodic reviews and specialized tools ensure breach prevention.",
            "A fully integrated security framework monitors the cloud environment in real-time. Automated threat detection is central to operations."
          ],
          "domains": [
            { "id": "D-475", "name": "Cloud Security Training and Awareness" },
            { "id": "D-476", "name": "Organizational Structure for Secure Cloud Usage" },
            { "id": "D-477", "name": "Security Training and Awareness" },
            { "id": "D-478", "name": "Security Frameworks and Application Classification" },
            { "id": "D-479", "name": "Data Security and Privacy Concepts for Cloud" },
            { "id": "D-480", "name": "Security Reporting and Monitoring" },
            { "id": "D-481", "name": "Security Tooling for Cloud-Based Services" },
            { "id": "D-482", "name": "Compliance and Security Enforcement Technology" }
          ]
        },
        "C480": {
          "id": "C480",
          "name": "FinOps",
          "controlQuestion": "Do FinOps teams exist to ensure ROI and profitability from inception to deployment?",
          "benefitsAnalysis": "Business cases align production costs with revenue, enabling direct portfolio analysis and investment in potential improvements.",
          "levels": [
            "Architects define business cases after solutions are built, focusing on on-prem software costs with some awareness of FinOps for internal technical resource management.",
            "DevOps teams consider costs when selecting technology components. A FinOps role is established but not fully deployed across technical, business, and executive layers.",
            "Business and finance demand cloud spend transparency for forecasting. FinOps is involved in tech decisions, using monitoring tools for cost operations across geographies and services in a multi-cloud setup.",
            "Roles across operations, business, finance, and executive levels participate in FinOps, comparing service costs to business cases and making spending decisions based on financial data granularity.",
            "Automatic tracking of services and costs with policy-driven cost control. FinOps identifies strategic opportunities for new product development, integrating the cloud commercial model into the company culture."
          ],
          "domains": [
            { "id": "D-483", "name": "Cost Visibility and Allocation" },
            { "id": "D-484", "name": "Cost Optimization" },
            { "id": "D-485", "name": "Forecasting and Budgeting" },
            { "id": "D-486", "name": "FinOps Culture and Governance" }
          ]
        }
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
        "C501": {
          "id": "C501",
          "name": "Functional Support",
          "controlQuestion": "How effectively is functional support provided to customers?",
          "benefitsAnalysis": "Effective functional support improves customer satisfaction and product usage.",
          "levels": [
            "Functional support is ad-hoc and lacks formal processes.",
            "Basic functional support processes are in place, but not consistently executed.",
            "Automated tools manage functional support activities and ensure consistency.",
            "Integrated functional support processes across platforms enhance coordination.",
            "Real-time data and analytics continuously optimize functional support strategies."
          ],
          "domains": [
            { "id": "D-502", "name": "Issue Resolution" },
            { "id": "D-503", "name": "Knowledge Base" },
            { "id": "D-504", "name": "Customer Training" },
            { "id": "D-505", "name": "Customer Feedback" }
          ]
        },
        "C510": {
          "id": "C510",
          "name": "Technical Support",
          "controlQuestion": "How effectively is technical support provided to customers?",
          "benefitsAnalysis": "Effective technical support improves customer satisfaction and reduces downtime.",
          "levels": [
            "Technical support is informal and inconsistent.",
            "Basic technical support processes are in place, but not consistently executed.",
            "Automated tools manage technical support activities and ensure consistency.",
            "Integrated technical support processes across platforms enhance coordination.",
            "Real-time data and analytics continuously optimize technical support strategies."
          ],
          "domains": [
            { "id": "D-511", "name": "Troubleshooting" },
            { "id": "D-512", "name": "Technical Documentation" },
            { "id": "D-513", "name": "Support Escalation" },
            { "id": "D-514", "name": "Remote Support" }
          ]
        },
        "C520": {
          "id": "C520",
          "name": "Professional Services",
          "controlQuestion": "How effectively are professional services delivered to customers?",
          "benefitsAnalysis": "Effective professional services enhance customer satisfaction and product value.",
          "levels": [
            "Professional services are ad-hoc and lack formal processes.",
            "Basic professional services processes are in place, but not consistently executed.",
            "Automated tools manage professional services activities and ensure consistency.",
            "Integrated professional services processes across platforms enhance coordination.",
            "Continuous optimization of professional services based on real-time data and feedback."
          ],
          "domains": [
            { "id": "D-521", "name": "Implementation" },
            { "id": "D-522", "name": "Customization" },
            { "id": "D-523", "name": "Consulting" },
            { "id": "D-524", "name": "Project Management" }
          ]
        },
        "C530": {
          "id": "C530",
          "name": "Customer Success",
          "controlQuestion": "How effectively is customer success managed to ensure customers achieve their desired outcomes?",
          "benefitsAnalysis": "Effective customer success management improves customer retention and satisfaction.",
          "levels": [
            "Customer success management is informal and inconsistent.",
            "Basic customer success processes are in place, but not consistently executed.",
            "Automated tools manage customer success activities and ensure consistency.",
            "Integrated customer success processes across platforms enhance coordination.",
            "Real-time data and analytics continuously optimize customer success strategies."
          ],
          "domains": [
            { "id": "D-535", "name": "Health Scoring and Monitoring" },
            { "id": "D-536", "name": "Proactive Engagement and Outreach" },
            { "id": "D-537", "name": "Value Realization and Adoption" },
            { "id": "D-538", "name": "Escalation Management" }
          ]
        },
        "C540": {
          "id": "C540",
          "name": "Security Operations",
          "controlQuestion": "How effectively are security operations managed to protect the SaaS product and customer data?",
          "benefitsAnalysis": "Effective security operations protect against threats and ensure data integrity.",
          "levels": [
            "Security operations are ad-hoc and lack formal processes.",
            "Basic security operations processes are in place, but not consistently executed.",
            "Automated tools manage security operations and ensure consistency.",
            "Integrated security operations processes across platforms enhance coordination.",
            "Continuous optimization of security operations based on real-time data and threat intelligence."
          ],
          "domains": [
            { "id": "D-541", "name": "Threat Detection" },
            { "id": "D-542", "name": "Incident Response" },
            { "id": "D-543", "name": "Vulnerability Management" },
            { "id": "D-544", "name": "Security Awareness" }
          ]
        },
        "C550": {
          "id": "C550",
          "name": "Compliance and Governance",
          "controlQuestion": "How effectively are compliance and governance practices implemented to ensure regulatory adherence?",
          "benefitsAnalysis": "Effective compliance and governance practices ensure regulatory adherence and reduce risk.",
          "levels": [
            "Compliance and governance practices are informal and inconsistent.",
            "Basic compliance and governance processes are in place, but not consistently executed.",
            "Automated tools manage compliance and governance activities and ensure consistency.",
            "Integrated compliance and governance processes across platforms enhance coordination.",
            "Real-time data and analytics continuously optimize compliance and governance strategies."
          ],
          "domains": [
            { "id": "D-551", "name": "Regulatory Compliance" },
            { "id": "D-552", "name": "Policy Management" },
            { "id": "D-553", "name": "Audit Management" },
            { "id": "D-554", "name": "Risk Management" }
          ]
        },
        "C560": {
          "id": "C560",
          "name": "DevOps and CI/CD",
          "controlQuestion": "How effectively are DevOps and CI/CD practices implemented to improve software delivery?",
          "benefitsAnalysis": "Effective DevOps and CI/CD practices improve software quality and delivery speed.",
          "levels": [
            "DevOps and CI/CD practices are informal and inconsistent.",
            "Basic DevOps and CI/CD processes are in place, but not consistently executed.",
            "Automated tools manage DevOps and CI/CD activities and ensure consistency.",
            "Integrated DevOps and CI/CD processes across platforms enhance coordination.",
            "Continuous optimization of DevOps and CI/CD practices based on real-time data and feedback."
          ],
          "domains": [
            { "id": "D-561", "name": "Continuous Integration" },
            { "id": "D-562", "name": "Continuous Deployment" },
            { "id": "D-563", "name": "Infrastructure as Code" },
            { "id": "D-564", "name": "Monitoring and Logging" }
          ]
        },
        "C570": {
          "id": "C570",
          "name": "Customer Onboarding",
          "controlQuestion": "How effectively are new customers onboarded to ensure a smooth start?",
          "benefitsAnalysis": "Effective customer onboarding improves customer satisfaction and reduces time to value.",
          "levels": [
            "Customer onboarding is ad-hoc and lacks formal processes.",
            "Basic customer onboarding processes are in place, but not consistently executed.",
            "Automated tools manage customer onboarding activities and ensure consistency.",
            "Integrated customer onboarding processes across platforms enhance coordination.",
            "Real-time data and analytics continuously optimize customer onboarding strategies."
          ],
          "domains": [
            { "id": "D-571", "name": "Onboarding Process" },
            { "id": "D-572", "name": "Training and Resources" },
            { "id": "D-573", "name": "Onboarding Support" },
            { "id": "D-574", "name": "Onboarding Communication" }
          ]
        },
        "C580": {
          "id": "C580",
          "name": "Voice of the Customer",
          "controlQuestion": "How effectively is customer feedback collected and analyzed to drive improvements?",
          "benefitsAnalysis": "Effective voice of the customer programs improve product and customer experience.",
          "levels": [
            "Customer feedback collection and analysis are informal and inconsistent.",
            "Basic voice of the customer processes are in place, but not consistently executed.",
            "Automated tools manage customer feedback collection and analysis.",
            "Integrated voice of the customer processes across platforms enhance coordination.",
            "Real-time data and analytics continuously optimize voice of the customer strategies."
          ],
          "domains": [
            { "id": "D-581", "name": "Feedback Collection" },
            { "id": "D-582", "name": "Feedback Analysis" },
            { "id": "D-583", "name": "Actionable Insights" },
            { "id": "D-584", "name": "Customer Satisfaction" }
          ]
        },
        "C590": {
          "id": "C590",
          "name": "Self Service",
          "controlQuestion": "Are customers able to maximize the benefit of the solution by themselves, including administration, consuming additional services and support?",
          "benefitsAnalysis": "Efficient subscription management improves customer retention and revenue.",
          "levels": [
            "Basic self-help tools available, but they may not cover all common issues or be easy to use.",
            "Comprehensive self-service options with guides and FAQs, offering better user autonomy.",
            "Self-service tools are automated and integrated, providing real-time assistance and feedback.",
            "The platform itself facilitates self-service through intuitive design and user engagement.",
            "Self-service is enhanced with AI, learning from user interactions to improve over time."
          ],
          "domains": [
            { "id": "D-591", "name": "Self-Help" },
            { "id": "D-592", "name": "User Administration" },
            { "id": "D-593", "name": "Acquiring New Licenses" },
            { "id": "D-594", "name": "Billing Management" },
            { "id": "D-595", "name": "Subscription Management" },
            { "id": "D-596", "name": "Usage Analytics" },
            { "id": "D-597", "name": "Support Ticket Management" }
          ]
        }
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
        "C610": {
          "id": "C610",
          "name": "Strategy",
          "controlQuestion": "Does a formal enterprise-level strategy exist positioning the use of cloud-based services, data, and AI?",
          "benefitsAnalysis": "Ensures coherence and direction across the organization, enhancing strategic focus and effectiveness.",
          "levels": [
            "Different units apply different strategies.",
            "Yes, a common shared strategy exists across the enterprise, but with ad-hoc adoption.",
            "The strategy for cloud, data, and AI is well-communicated throughout the enterprise and signed off by all key stakeholders.",
            "The strategy guides all new system deployments and technology renewals as “the rule,” with coverage measured by tracked KPIs.",
            "The strategy enables the growth and optimization of business outcomes across the Enterprise. It is revised on a regular basis, according to a defined timeframe."
          ],
          "domains": [
            { "id": "D-611", "name": "Vision and Mission Alignment" },
            { "id": "D-612", "name": "Strategic Planning" },
            { "id": "D-613", "name": "Stakeholder Engagement" },
            { "id": "D-614", "name": "Performance Metrics" },
            { "id": "D-615", "name": "Resource Allocation" }
          ]
        },
        "C620": {
          "id": "C620",
          "name": "Organization",
          "controlQuestion": "Has both the Business and Technical organizational structure been updated to enable cloud-based service delivery, data management, and AI implementations?",
          "benefitsAnalysis": "Ensures clear roles and responsibilities, enhancing efficiency and alignment with strategic goals.",
          "levels": [
            "Current structure deals with ad-hoc adoption.",
            "A structure to enable cloud service models, data governance, and AI capabilities is defined and partially implemented, ongoing as projects occur. Teams have been created in function areas to deal with these areas, including business and technical functions. KPIs per team are identified.",
            "Business unit structures are updated to support cloud service adoption, data management, and embedding and providing AI functionality. Active planning is performed to close gaps in the overall structure reviewed regularly.",
            "The organizational structure brings tangible business benefits by having clear roles identified across business units with regular reviews/updates as needed.",
            "All enterprise units operate as one towards achieving business objectives; sub-elements of objectives apportioned appropriately."
          ],
          "domains": [
            { "id": "D-621", "name": "Organizational Structure" },
            { "id": "D-622", "name": "Roles and Responsibilities" },
            { "id": "D-623", "name": "Cross-Functional Collaboration" },
            { "id": "D-624", "name": "Governance" }
          ]
        },
        "C630": {
          "id": "C630",
          "name": "Culture",
          "controlQuestion": "Are the aspirations, norms, and values of the organization conducive to achieving the strategy for cloud, data, and AI?",
          "benefitsAnalysis": "Drives continuous improvement and competitive advantage.",
          "levels": [
            "The culture shows some responsiveness to the strategy. Employees acknowledge the importance of cloud, data, and AI but lack proactive engagement.",
            "The culture actively supports the strategy. Employees understand the significance of cloud, data, and AI.",
            "The culture embraces cloud, data, and AI as integral components of success. It’s not just about compliance but genuine belief.",
            "The culture champions innovation and continuous improvement in these areas. Employees seek opportunities to optimize and enhance.",
            "A culture that fosters collaboration, learning, and adaptability accelerates SaaS transformation."
          ],
          "domains": [
            { "id": "D-631", "name": "Innovation Culture" },
            { "id": "D-632", "name": "Learning and Development" },
            { "id": "D-633", "name": "Employee Engagement" },
            { "id": "D-634", "name": "Collaboration and Teamwork" },
            { "id": "D-635", "name": "Adaptability" }
          ]
        },
        "C640": {
          "id": "C640",
          "name": "Compensation",
          "controlQuestion": "How is the compensation scheme (including rewards and incentives) designed to drive achievement of group, division, and performance targets?",
          "benefitsAnalysis": "Drives motivation and performance.",
          "levels": [
            "Senior management compensation scheme contains KPIs affected by cloud implementation to a limited extent.",
            "Specific compensation components related to cloud are available. The scheme encourages employees to stay updated and seek improvement opportunities within their technical and commercial domain.",
            "Employees understand that moving to cloud technology strengthens competitiveness, opens career perspectives, and increases compensation. Incentives and rewards are available for outstanding results, innovation, and business value.",
            "Management values rewards for innovative thinking and transparently rewards technical acumen and idea creation. KPIs measure employee contribution to innovation and SaaS transformation.",
            "A culture managed in context of its strategy maximizes performance, focuses energy, and encourages opportunity-seeking, making the business more competitive."
          ],
          "domains": [
            { "id": "D-641", "name": "Incentive Programs" },
            { "id": "D-642", "name": "Performance-Based Compensation" },
            { "id": "D-643", "name": "Equity and Fairness" },
            { "id": "D-644", "name": "Recognition and Rewards" },
            { "id": "D-645", "name": "Career Development" }
          ]
        },
        "C650": {
          "id": "C650",
          "name": "Skills",
          "controlQuestion": "Do employees have the right skills and expertise needed to ensure successful development and adoption? (e.g., ITaaS, Brokerage, Service Management, ITIL, Business Acumen, etc.)",
          "benefitsAnalysis": "Ensures employees can effectively implement and manage cloud, data, and AI initiatives.",
          "levels": [
            "Some employees possess limited skills.",
            "10-25% of employees exhibit the appropriate skill level.",
            "25-50% of employees possess and exhibit the appropriate skill level, with supporting certifications.",
            "50-75% of employees exhibit the appropriate skill level.",
            "100% of employees possess and exhibit the appropriate skill level (pervasive), based on training aligned with the business strategy."
          ],
          "domains": [
            { "id": "D-651", "name": "Technical Skills" },
            { "id": "D-652", "name": "Business Acumen" },
            { "id": "D-653", "name": "Training Programs" },
            { "id": "D-654", "name": "Certifications" },
            { "id": "D-655", "name": "Skill Assessment" }
          ]
        },
        "C660": {
          "id": "C660",
          "name": "Compliance",
          "controlQuestion": "How does the enterprise verify that both the on- and off-premises services meet defined compliance requirements?",
          "benefitsAnalysis": "Reduces legal risks and ensures adherence to regulations.",
          "levels": [
            "Compliance requirements are reviewed manually upon request for selected key KPIs, mostly based on manually collated data. Certifications/attestations are analyzed as required.",
            "A basic compliance framework exists. Implementing new cloud services follows specified procedures to meet compliance requirements. Selected areas are checked for compliance as needed, including certifications/attestations published by the cloud provider.",
            "A comprehensive compliance framework includes accountabilities, responsibilities, and documentation requirements. Compliance is established, monitored, and actively managed.",
            "An advanced compliance system is in place with automated controls and continuous monitoring. Compliance is integral to operations.",
            "A fully qualified compliance system ensures all off-premises services meet defined compliance requirements. It reduces risk and ensures adherence to standards."
          ],
          "domains": [
            { "id": "D-661", "name": "Regulatory Compliance" },
            { "id": "D-662", "name": "Data Privacy" },
            { "id": "D-663", "name": "Security Compliance" },
            { "id": "D-664", "name": "Audit and Reporting" },
            { "id": "D-665", "name": "Compliance Training" }
          ]
        },
        "C670": {
          "id": "C670",
          "name": "Governance & Control (G&C)",
          "controlQuestion": "Is Risk Management updated for Cloud, Data, and AI?",
          "benefitsAnalysis": "Reduces the likelihood and impact of adverse events.",
          "levels": [
            "Risks may be evaluated in project situations. No general risk definition.",
            "Risks are discussed (4-eye principle), and settlement/remediation agreed on a case-by-case basis.",
            "Risks and remediations are defined, known, and documented.",
            "A risk management framework is defined and contextualized for cloud, data, and AI. Risks are constantly monitored. Risk mitigation plans are in place.",
            "A governance structure has been implemented to manage risks for the business. The risk mitigation plan is regularly updated. Computer Emergency Response Team (CERT) exists, which also extends to the cloud providers."
          ],
          "domains": [
            { "id": "D-671", "name": "Risk Management" },
            { "id": "D-672", "name": "Policy Management" },
            { "id": "D-673", "name": "Audit and Compliance" },
            { "id": "D-674", "name": "Governance Framework" },
            { "id": "D-675", "name": "Incident Management" }
          ]
        },
        "C680": {
          "id": "C680",
          "name": "Procurement",
          "controlQuestion": "Is the Procurement Tooling cloud-aware for Cloud, Data, and AI?",
          "benefitsAnalysis": "Ensures timely and cost-effective acquisition of services.",
          "levels": [
            "Each provider’s own Cloud Portal is used for ordering & configuring services.",
            "Links exist from the enterprise Procurement Intranet to selected supplier’s portals/catalogues.",
            "Provider’s catalogues and approval workflows are integrated with the enterprise order portal and standardized workflow system.",
            "Provider’s catalogue contents updates are synchronized, selected, and published within the enterprise order portal based on application and data compliance requirements.",
            "Defined partners are electronically integrated into the enterprise systems and processes. A generic catalogue is available on the enterprise portal, with transparent automated routing to the appropriate provider. Procurement systems get automated notification based on capacity requirements when additional infrastructure or service supply is required."
          ],
          "domains": [
            { "id": "D-681", "name": "Vendor Management" },
            { "id": "D-682", "name": "Procurement Processes" },
            { "id": "D-683", "name": "Contract Management" },
            { "id": "D-684", "name": "Cost Management" },
            { "id": "D-685", "name": "Supplier Performance" }
          ]
        },
        "C690": {
          "id": "C690",
          "name": "Innovation Management",
          "controlQuestion": "How effectively does the organization foster and manage innovation to stay competitive and drive growth?",
          "benefitsAnalysis": "Drives continuous improvement and competitive advantage.",
          "levels": [
            "Innovation is ad-hoc and lacks formal processes.",
            "Basic innovation processes are in place, but not consistently executed.",
            "Automated tools manage innovation activities and ensure consistency.",
            "Integrated innovation processes across platforms enhance coordination.",
            "Continuous optimization of innovation strategies based on real-time data and feedback."
          ],
          "domains": [
            { "id": "D-691", "name": "Idea Generation" },
            { "id": "D-692", "name": "Innovation Processes" },
            { "id": "D-693", "name": "Collaboration and Partnerships" },
            { "id": "D-694", "name": "Funding and Resources" },
            { "id": "D-695", "name": "Innovation Metrics" }
          ]
        },
        "C700": {
          "id": "C700",
          "name": "Sustainability",
          "controlQuestion": "How effectively does the organization incorporate sustainability practices into its operations and strategy?",
          "benefitsAnalysis": "Ensures long-term viability and compliance with regulations.",
          "levels": [
            "Sustainability practices are informal and inconsistent.",
            "Basic sustainability processes are in place, but not consistently executed.",
            "Automated tools manage sustainability activities and ensure consistency.",
            "Integrated sustainability processes across platforms enhance coordination.",
            "Continuous optimization of sustainability strategies based on real-time data and feedback."
          ],
          "domains": [
            { "id": "D-701", "name": "Environmental Impact" },
            { "id": "D-702", "name": "Sustainable Practices" },
            { "id": "D-703", "name": "Energy Efficiency" },
            { "id": "D-704", "name": "Waste Management" },
            { "id": "D-705", "name": "Sustainability Reporting" }
          ]
        },
        "C710": {
          "id": "C710",
          "name": "Customer Insights and Analytics",
          "controlQuestion": "How effectively does the organization leverage customer data and analytics to drive decision-making and improve customer experiences?",
          "benefitsAnalysis": "Provides valuable insights for decision-making and strategy.",
          "levels": [
            "Customer data and analytics are limited and difficult to access.",
            "Basic customer data and analytics processes are in place, but not consistently utilized.",
            "Automated tools provide real-time customer data and analytics.",
            "Integrated customer data and analytics across platforms enhance coordination and decision-making.",
            "Advanced analytics and AI provide predictive insights and recommendations based on customer behavior and usage patterns."
          ],
          "domains": [
            { "id": "D-711", "name": "Customer Data Collection" },
            { "id": "D-712", "name": "Data Analysis" },
            { "id": "D-713", "name": "Customer Segmentation" },
            { "id": "D-714", "name": "Predictive Analytics" },
            { "id": "D-715", "name": "Customer Feedback" }
          ]
        },
        "C720": {
          "id": "C720",
          "name": "Vendor Management",
          "controlQuestion": "How effectively does the organization manage its relationships with vendors and suppliers to ensure quality and reliability?",
          "benefitsAnalysis": "Ensures quality and reliability of services.",
          "levels": [
            "Vendor management is informal and inconsistent.",
            "Basic vendor management processes are in place, but not consistently executed.",
            "Automated tools manage vendor management activities and ensure consistency.",
            "Integrated vendor management processes across platforms enhance coordination.",
            "Continuous optimization of vendor management strategies based on real-time data and feedback."
          ],
          "domains": [
            { "id": "D-721", "name": "Vendor Selection and Onboarding" },
            { "id": "D-722", "name": "Performance Management" },
            { "id": "D-723", "name": "Risk and Compliance Management" },
            { "id": "D-724", "name": "Relationship and Contract Management" }
          ]
        },
        "C730": {
          "id": "C730",
          "name": "IT Infrastructure",
          "controlQuestion": "How effectively does the organization manage its IT infrastructure to support business operations and growth?",
          "benefitsAnalysis": "Ensures reliability and performance.",
          "levels": [
            "IT infrastructure management is ad-hoc and lacks formal processes.",
            "Basic IT infrastructure management processes are in place, but not consistently executed.",
            "Automated tools manage IT infrastructure activities and ensure consistency.",
            "Integrated IT infrastructure management processes across platforms enhance coordination.",
            "Continuous optimization of IT infrastructure management based on real-time data and feedback."
          ],
          "domains": [
            { "id": "D-731", "name": "Infrastructure Management" },
            { "id": "D-732", "name": "Scalability" },
            { "id": "D-733", "name": "Performance Monitoring" },
            { "id": "D-734", "name": "Security" },
            { "id": "D-735", "name": "Disaster Recovery" }
          ]
        }
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
        "C740": {
          "id": "C740",
          "name": "Cloud Security",
          "controlQuestion": "How secure are your cloud-based systems and data?",
          "benefitsAnalysis": "A robust cloud security posture protects against data breaches, ensures regulatory compliance, and builds customer trust, directly safeguarding revenue and brand reputation.",
          "levels": [
            "Basic security controls with manual monitoring.",
            "Improved security controls with systematic monitoring and incident response.",
            "Automated security controls with continuous monitoring and compliance checks.",
            "Use of platform services for advanced threat detection and response.",
            "AI-driven security with predictive threat detection and automated incident response."
          ],
          "domains": [
            { "id": "D-741", "name": "Identity and Access Management (IAM)" },
            { "id": "D-742", "name": "Data Protection" },
            { "id": "D-743", "name": "Threat Detection and Response" },
            { "id": "D-744", "name": "Network Security" }
          ]
        },
        "C750": {
          "id": "C750",
          "name": "Cloud Service Management",
          "controlQuestion": "How effectively are you managing your cloud services?",
          "benefitsAnalysis": "Efficient cloud service management optimizes costs, ensures reliability, and improves operational agility, allowing the business to scale effectively.",
          "levels": [
            "Ad-hoc use of cloud services without a comprehensive service management strategy.",
            "Systematic use of cloud services with basic service management practices.",
            "Automated service management with integrated monitoring and incident management.",
            "Use of platform services for advanced service management practices.",
            "AI-driven service management with predictive incident management and automated remediation."
          ],
          "domains": [
            { "id": "D-751", "name": "Cost Management (FinOps)" },
            { "id": "D-752", "name": "Performance Monitoring and Observability" },
            { "id": "D-753", "name": "Incident and Problem Management" },
            { "id": "D-754", "name": "Change and Release Management" }
          ]
        },
        "C760": {
          "id": "C760",
          "name": "Cloud Data Management",
          "controlQuestion": "How effectively are you managing and leveraging your data in the cloud?",
          "benefitsAnalysis": "Strategic cloud data management unlocks valuable insights, enables data-driven decision-making, and ensures data is secure, compliant, and highly available.",
          "levels": [
            "Ad-hoc data storage and processing in the cloud.",
            "Systematic data integration and processing with basic analytics.",
            "Automated data pipelines with advanced analytics capabilities.",
            "Use of platform services for big data processing and real-time analytics.",
            "AI-driven data management with predictive analytics and machine learning capabilities."
          ],
          "domains": [
            { "id": "D-761", "name": "Data Storage and Tiering" },
            { "id": "D-762", "name": "Data Backup and Disaster Recovery" },
            { "id": "D-763", "name": "Data Governance and Quality" }
          ]
        },
        "C770": {
          "id": "C770",
          "name": "Cloud DevOps",
          "controlQuestion": "How well are your DevOps practices integrated with your cloud operations?",
          "benefitsAnalysis": "Integrating DevOps with cloud operations accelerates software delivery, improves quality, and enables teams to build and run scalable, resilient applications.",
          "levels": [
            "Manual CI/CD processes with basic infrastructure as code.",
            "Systematic CI/CD processes with improved infrastructure as code practices.",
            "Automated CI/CD pipelines with full infrastructure as code and automated testing.",
            "Use of platform services for advanced DevOps practices like canary deployments and blue-green deployments.",
            "AI-driven DevOps with predictive release management and automated canary analysis."
          ],
          "domains": [
            { "id": "D-771", "name": "Infrastructure as Code (IaC)" },
            { "id": "D-772", "name": "CI/CD Pipelines" },
            { "id": "D-773", "name": "Containerization and Orchestration" }
          ]
        },
        "C780": {
          "id": "C780",
          "name": "Cloud Innovation",
          "controlQuestion": "How is cloud technology driving innovation in your business?",
          "benefitsAnalysis": "Leveraging advanced cloud services accelerates innovation, enabling the creation of new products, services, and business models that provide a competitive edge.",
          "levels": [
            "Ad-hoc use of advanced cloud technologies for business innovation.",
            "Systematic use of advanced cloud technologies like serverless computing and machine learning services.",
            "Automated deployment and scaling of innovative cloud services.",
            "Use of platform services for rapid innovation and business agility.",
            "AI-driven innovation with predictive analytics and automated business processes."
          ],
          "domains": [
            { "id": "D-781", "name": "Serverless Computing Adoption" },
            { "id": "D-782", "name": "AI/ML Service Integration" }
          ]
        }
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
        "C800": {
          "id": "C800",
          "name": "Data-Driven Features",
          "controlQuestion": "How effectively are data-driven features integrated into your software solutions?",
          "benefitsAnalysis": "Integrating data-driven features like personalization and recommendations directly enhances the user experience, increases engagement, and creates competitive differentiation.",
          "levels": [
            "Data-driven features are minimal and not systematically designed.",
            "Data-driven features are planned and implemented based on customer feedback.",
            "Automated systems in place to collect usage data and inform feature development.",
            "Data-driven features are fully integrated into the platform, providing real-time value to users.",
            "Advanced AI-driven features that adapt to user behavior and predict user needs."
          ],
          "domains": [
            { "id": "D-801", "name": "Personalization" },
            { "id": "D-802", "name": "Recommendation Engines" },
            { "id": "D-803", "name": "Predictive Features" }
          ]
        },
        "C810": {
          "id": "C810",
          "name": "Data Monetization",
          "controlQuestion": "How effectively is data monetized in your software solutions?",
          "benefitsAnalysis": "Data monetization creates new revenue streams, increases the value of your product, and provides a strong competitive advantage.",
          "levels": [
            "Data monetization is not considered or is in the early stages.",
            "Initial data monetization strategies are in place, with some revenue generation.",
            "Automated data monetization systems, with consistent revenue generation.",
            "Data monetization is fully integrated into the platform, with significant revenue contribution.",
            "Advanced data monetization strategies, with predictive capabilities to maximize revenue."
          ],
          "domains": [
            { "id": "D-811", "name": "Analytics as a Service" },
            { "id": "D-812", "name": "Data as a Service (DaaS)" }
          ]
        },
        "C820": {
          "id": "C820",
          "name": "Data Security",
          "controlQuestion": "How effectively is data secured in your software solutions?",
          "benefitsAnalysis": "Robust data security is fundamental to protecting customer trust, preventing costly breaches, and ensuring compliance with privacy regulations.",
          "levels": [
            "Basic data security measures are in place, but not consistently enforced.",
            "Comprehensive data security policies are in place, with regular enforcement.",
            "Automated enforcement of data security policies.",
            "Data security is fully integrated into the platform, with real-time monitoring and enforcement.",
            "Advanced data security models in place, with predictive capabilities to anticipate and address security threats."
          ],
          "domains": [
            { "id": "D-821", "name": "Data Encryption" },
            { "id": "D-822", "name": "Access Control" },
            { "id": "D-823", "name": "Data Privacy and Anonymization" }
          ]
        },
        "C830": {
          "id": "C830",
          "name": "Data Analytics",
          "controlQuestion": "How effectively is data analytics used to inform decision-making and strategy?",
          "benefitsAnalysis": "Leveraging data analytics transforms decision-making from intuition-based to evidence-based, leading to better business strategies, operational efficiencies, and improved outcomes.",
          "levels": [
            "Data analytics is used on an ad-hoc basis to inform decision-making.",
            "Regular data analytics processes in place, informing decision-making and strategy.",
            "Automated data analytics, with results regularly informing decision-making and strategy.",
            "Data analytics is fully integrated into the platform, with real-time insights informing decisions.",
            "Advanced data analytics methods, with AI-driven predictive analytics informing strategy."
          ],
          "domains": [
            { "id": "D-831", "name": "Business Intelligence (BI)" },
            { "id": "D-832", "name": "Product Analytics" }
          ]
        },
        "C840": {
          "id": "C840",
          "name": "Data Infrastructure",
          "controlQuestion": "How effectively is your data infrastructure able to scale and adapt to business needs?",
          "benefitsAnalysis": "A modern, scalable data infrastructure is the foundation for all data initiatives, enabling reliable data processing, storage, and analytics at scale.",
          "levels": [
            "Data infrastructure is rigid and struggles to scale with business needs.",
            "Data infrastructure is able to scale with business needs, but requires manual intervention.",
            "Automated systems in place to scale data infrastructure based on demand.",
            "Data infrastructure is fully platform-led, with real-time scalability and adaptability.",
            "Advanced data infrastructure, with AI-driven capabilities to dynamically scale and adapt as needed."
          ],
          "domains": [
            { "id": "D-841", "name": "Data Warehousing and Data Lakes" },
            { "id": "D-842", "name": "Data Integration and ETL/ELT" }
          ]
        }
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
        "C910": {
          "id": "C910",
          "name": "Natural Language Processing (NLP)",
          "controlQuestion": "How effectively is NLP integrated into your software solutions?",
          "benefitsAnalysis": "NLP unlocks insights from unstructured text data and enables natural, human-like interactions, dramatically improving user experience and automating communication.",
          "levels": [
            "NLP is used to solve specific problems as they arise. No comprehensive NLP strategy.",
            "Development of an NLP-first strategy. NLP is systematically integrated into software solutions.",
            "Most software solutions are augmented with NLP. Automated decision-making using NLP.",
            "NLP is fully integrated into the software platform. Use of NLP to drive customer interactions and software strategy.",
            "Advanced use of NLP technologies such as deep learning and autonomous systems. NLP dynamically adapts to software needs and predicts future trends."
          ],
          "domains": [
            { "id": "D-911", "name": "Chatbots and Virtual Assistants" },
            { "id": "D-912", "name": "Sentiment Analysis" }
          ]
        },
        "C920": {
          "id": "C920",
          "name": "Machine Learning (ML)",
          "controlQuestion": "How effectively is ML integrated into your software solutions?",
          "benefitsAnalysis": "ML enables systems to learn from data and make predictions or decisions without being explicitly programmed, powering intelligent features and process automation.",
          "levels": [
            "ML is used to solve specific problems as they arise. No comprehensive ML strategy.",
            "Development of an ML-first strategy. ML is systematically integrated into software solutions.",
            "Most software solutions are augmented with ML. Automated decision-making using ML.",
            "ML is fully integrated into the software platform. Use of ML to drive customer interactions and software strategy.",
            "Advanced use of ML technologies such as deep learning and autonomous systems. ML dynamically adapts to software needs and predicts future trends."
          ],
          "domains": [
            { "id": "D-921", "name": "ML Operations (MLOps)" }
          ]
        },
        "C930": {
          "id": "C930",
          "name": "Computer Vision",
          "controlQuestion": "How effectively is computer vision integrated into your software solutions?",
          "benefitsAnalysis": "Computer vision allows applications to understand and interpret visual information from the world, enabling new product capabilities in areas like automation, security, and augmented reality.",
          "levels": [
            "Computer vision is used to solve specific problems as they arise. No comprehensive computer vision strategy.",
            "Development of a computer vision-first strategy. Computer vision is systematically integrated into software solutions.",
            "Most software solutions are augmented with computer vision. Automated decision-making using computer vision.",
            "Computer vision is fully integrated into the software platform. Use of computer vision to drive customer interactions and software strategy.",
            "Advanced use of computer vision technologies such as deep learning and autonomous systems. Computer vision dynamically adapts to software needs and predicts future trends."
          ],
          "domains": [
            { "id": "D-931", "name": "Image Recognition and Classification" }
          ]
        },
        "C940": {
          "id": "C940",
          "name": "Predictive Analytics",
          "controlQuestion": "How effectively is predictive analytics used in your software solutions?",
          "benefitsAnalysis": "Predictive analytics uses data to forecast future outcomes, allowing the business to make proactive decisions, mitigate risks, and identify new opportunities.",
          "levels": [
            "Predictive analytics is used on an ad-hoc basis to inform decision-making.",
            "Regular predictive analytics processes in place, informing decision-making and strategy.",
            "Automated predictive analytics, with results regularly informing decision-making and strategy.",
            "Predictive analytics is fully integrated into the platform, with real-time insights informing decisions.",
            "Advanced predictive analytics methods, with AI-driven predictive analytics informing strategy."
          ],
          "domains": [
            { "id": "D-941", "name": "Churn Prediction" },
            { "id": "D-942", "name": "Demand Forecasting" }
          ]
        },
        "C950": {
          "id": "C950",
          "name": "Robotic Process Automation (RPA)",
          "controlQuestion": "How effectively is RPA integrated into your software solutions?",
          "benefitsAnalysis": "RPA automates repetitive, rule-based tasks, freeing up employees for more strategic work, reducing errors, and increasing operational efficiency.",
          "levels": [
            "RPA is used to solve specific problems as they arise. No comprehensive RPA strategy.",
            "Development of an RPA-first strategy. RPA is systematically integrated into software solutions.",
            "Most software solutions are augmented with RPA. Automated decision-making using RPA.",
            "RPA is fully integrated into the software platform. Use of RPA to drive customer interactions and software strategy.",
            "Advanced use of RPA technologies such as deep learning and autonomous systems. RPA dynamically adapts to software needs and predicts future trends."
          ],
          "domains": [
            { "id": "D-951", "name": "Task Automation" }
          ]
        },
        "C960": {
          "id": "C960",
          "name": "Speech Recognition",
          "controlQuestion": "How effectively is speech recognition integrated into your software solutions?",
          "benefitsAnalysis": "Speech recognition enables hands-free interaction and can transcribe spoken language into text, creating more accessible interfaces and unlocking insights from audio data.",
          "levels": [
            "Speech recognition is used to solve specific problems as they arise. No comprehensive speech recognition strategy.",
            "Development of a speech recognition-first strategy. Speech recognition is systematically integrated into software solutions.",
            "Most software solutions are augmented with speech recognition. Automated decision-making using speech recognition.",
            "Speech recognition is fully integrated into the software platform. Use of speech recognition to drive customer interactions and software strategy.",
            "Advanced use of speech recognition technologies such as deep learning and autonomous systems. Speech recognition dynamically adapts to software needs and predicts future trends."
          ],
          "domains": [
            { "id": "D-961", "name": "Voice Commands and Control" }
          ]
        },
        "C970": {
          "id": "C970",
          "name": "AI Security",
          "controlQuestion": "How effectively is AI security integrated into your software solutions?",
          "benefitsAnalysis": "AI security protects machine learning models and data from unique threats, ensuring the integrity, privacy, and reliability of intelligent systems.",
          "levels": [
            "Basic AI security measures are in place, but not consistently enforced.",
            "Comprehensive AI security policies are in place, with regular enforcement.",
            "Automated enforcement of AI security policies.",
            "AI security is fully integrated into the software platform, with real-time monitoring and enforcement.",
            "Advanced AI security models in place, with predictive capabilities to anticipate and address security threats."
          ],
          "domains": [
            { "id": "D-971", "name": "Adversarial Attack Defense" },
            { "id": "D-972", "name": "Ethical AI and Bias Detection" }
          ]
        },
        "C980": {
          "id": "C980",
          "name": "General AI (GenAI)",
          "controlQuestion": "How effectively is GenAI integrated into your software solutions?",
          "benefitsAnalysis": "Generative AI can create new content, from text to images, enabling powerful new features for content creation, summarization, and synthetic data generation.",
          "levels": [
            "GenAI is used to solve specific problems as they arise. No comprehensive GenAI strategy.",
            "Development of a GenAI-first strategy. GenAI is systematically integrated into software solutions.",
            "Most software solutions are augmented with GenAI. Automated decision-making using GenAI.",
            "GenAI is fully integrated into the software platform. Use of GenAI to drive customer interactions and software strategy.",
            "Advanced use of GenAI technologies such as deep learning and autonomous systems. GenAI dynamically adapts to software needs and predicts future trends."
          ],
          "domains": [
            { "id": "D-981", "name": "Content Generation" }
          ]
        }
      }
    }
  }
};