 // js/MaturityModel.js
// This file contains the complete, structured data model for the maturity assessment.
// It is the central "knowledge base" for ARIA to understand the characteristics of
// SaaS maturity across various disciplines, capabilities, and domains.
// VERIFIED COMPLETE AND CORRECTED: 2025-07-23

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
          "domains": {
            "D-111": {
              "id": "D-111",
              "name": "Market Analysis",
              "controlQuestion": "Is there a structured approach to market analysis?",
              "benefitsAnalysis": "Structured market analysis leads to better understanding of market trends and customer needs, informing strategic decision-making and driving growth.",
              "levels": [
                "Market analysis is sporadic and based on intuition.",
                "Regular market analysis with documented processes and periodic reviews.",
                "Automated tools provide real-time market insights, improving decision-making.",
                "Market analysis is integrated across platforms, enabling strategic alignment.",
                "Predictive analytics offer foresight into market trends, allowing proactive adjustments."
              ]
            },
            "D-112": {
              "id": "D-112",
              "name": "Competitive Analysis",
              "controlQuestion": "Is competitive analysis regularly conducted and updated?",
              "benefitsAnalysis": "Regular competitive analysis ensures the company stays ahead or in line with market competitors, crucial for maintaining or improving market position.",
              "levels": [
                "Competitive analysis is inconsistent and informal.",
                "Standardized methods for regular competitive analysis.",
                "Automated tools deliver comprehensive competitor insights.",
                "Competitive analysis is embedded into strategic planning, enhancing responsiveness.",
                "Real-time competitor monitoring and strategic recommendations ensure a competitive edge."
              ]
            },
            "D-113": {
              "id": "D-113",
              "name": "Sales Forecasting",
              "controlQuestion": "Are sales forecasts accurate and based on reliable data?",
              "benefitsAnalysis": "Accurate sales forecasts allow for better resource allocation and management expectations, reducing waste and increasing efficiency.",
              "levels": [
                "Sales forecasting is unreliable and lacks formal processes.",
                "Basic forecasting processes with periodic reviews.",
                "Automated tools enhance forecast accuracy and detail.",
                "Forecasting integrates data from multiple platforms, improving precision.",
                "Advanced algorithms predict sales trends, optimizing resource allocation."
              ]
            },
            "D-114": {
              "id": "D-114",
              "name": "Strategic Planning",
              "controlQuestion": "Is there a long-term strategic sales plan in place?",
              "benefitsAnalysis": "A long-term strategic sales plan provides direction and sets clear objectives for growth and sustainability.",
              "levels": [
                "Strategic planning is reactive and short-term.",
                "Documented strategic plans with departmental alignment.",
                "Automated tools streamline strategic planning processes.",
                "Strategic planning is integrated across platforms, enhancing agility.",
                "Dynamic strategic models adapt to real-time data and market changes."
              ]
            },
            "D-115": {
              "id": "D-115",
              "name": "Market Segmentation",
              "controlQuestion": "Are target markets clearly defined and segmented?",
              "benefitsAnalysis": "Clearly defined target markets enable more focused marketing efforts that are likely to yield higher conversion rates.",
              "levels": [
                "Market segmentation is informal and inconsistent.",
                "Documented segmentation processes with regular updates.",
                "Automated tools provide detailed segmentation insights.",
                "Segmentation is integrated across platforms, improving targeting.",
                "Advanced segmentation models predict customer behavior and preferences."
              ]
            },
            "D-116": {
              "id": "D-116",
              "name": "Value Proposition Development",
              "controlQuestion": "Is the value proposition well-defined and communicated?",
              "benefitsAnalysis": "A well-defined value proposition helps differentiate the company’s offerings from competitors’, potentially attracting more customers.",
              "levels": [
                "Value proposition is unclear and inconsistently communicated.",
                "Documented value propositions with regular reviews.",
                "Automated tools ensure consistent value proposition development.",
                "Value propositions are integrated into strategic platforms, enhancing alignment.",
                "Real-time feedback refines value propositions, ensuring relevance and impact."
              ]
            },
            "D-117": {
              "id": "D-117",
              "name": "Go-to-Market Strategy",
              "controlQuestion": "Is there a clear go-to-market strategy for new products?",
              "benefitsAnalysis": "A clear strategy for new products ensures that product launches are well-executed for maximum impact in the market.",
              "levels": [
                "Go-to-market strategies are ad-hoc and uncoordinated.",
                "Basic go-to-market strategies with documented processes.",
                "Automated tools streamline go-to-market planning.",
                "Strategies are integrated across platforms, improving execution.",
                "Data-driven insights optimize go-to-market strategies, enhancing market entry success."
              ]
            }
          }
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
          "domains": {
            "D-121": {
              "id": "D-121",
              "name": "Sales Process Optimization",
              "controlQuestion": "Are sales processes regularly reviewed and optimized?",
              "benefitsAnalysis": "Regularly reviewing sales processes can lead to improvements that streamline operations and increase sales efficiency.",
              "levels": [
                "Sales processes are inefficient and lack formal optimization.",
                "Documented processes with regular reviews and updates.",
                "Automated tools enhance process efficiency and consistency.",
                "Processes are integrated across platforms, improving agility.",
                "Continuous improvement driven by real-time data and advanced analytics."
              ]
            },
            "D-122": {
              "id": "D-122",
              "name": "Sales Tools & Technology",
              "controlQuestion": "Are the right tools and technologies in place to support sales?",
              "benefitsAnalysis": "Having the right tools supports sales activities by increasing productivity and effectiveness of the sales force.",
              "levels": [
                "Sales tools are outdated and insufficient.",
                "Basic tools and technologies with periodic updates.",
                "Automated tools enhance efficiency and consistency.",
                "Tools are integrated across platforms, improving utilization.",
                "Cutting-edge technologies provide seamless sales support and innovation."
              ]
            },
            "D-123": {
              "id": "D-123",
              "name": "Sales Training & Development",
              "controlQuestion": "Is there a comprehensive training program for sales teams?",
              "benefitsAnalysis": "Comprehensive training programs ensure that sales teams have the necessary skills to perform effectively.",
              "levels": [
                "Training programs are inconsistent and informal.",
                "Documented training programs with regular updates.",
                "Automated tools enhance training efficiency and consistency.",
                "Training is integrated across platforms, improving effectiveness.",
                "Personalized training programs driven by real-time performance data."
              ]
            },
            "D-124": {
              "id": "D-124",
              "name": "Sales Data Management",
              "controlQuestion": "Is sales data accurately managed and utilized?",
              "benefitsAnalysis": "Accurate sales data management leads to better decision-making and strategic planning.",
              "levels": [
                "Sales data management is inconsistent and informal.",
                "Basic data management processes with regular updates.",
                "Automated tools enhance data accuracy and utilization.",
                "Data management is integrated across platforms, improving insights.",
                "Advanced data analytics provide actionable insights and strategic foresight."
              ]
            },
            "D-125": {
              "id": "D-125",
              "name": "Sales Reporting & Analytics",
              "controlQuestion": "Are sales reports and analytics regularly reviewed?",
              "benefitsAnalysis": "Regular review of sales reports and analytics provides insights that can drive performance improvements.",
              "levels": [
                "Reporting and analytics are inconsistent and informal.",
                "Basic reporting processes with regular reviews.",
                "Automated tools enhance reporting accuracy and detail.",
                "Reporting is integrated across platforms, improving insights.",
                "Real-time analytics provide deep insights and strategic recommendations."
              ]
            },
            "D-126": {
              "id": "D-126",
              "name": "Territory Management",
              "controlQuestion": "Are sales territories effectively managed and balanced?",
              "benefitsAnalysis": "Effective territory management ensures balanced workloads and maximizes sales coverage.",
              "levels": [
                "Territory management is informal and inefficient.",
                "Documented processes with regular reviews.",
                "Automated tools enhance territory management efficiency.",
                "Territory management is integrated across platforms, improving balance.",
                "Dynamic territory adjustments based on real-time data and market conditions."
              ]
            },
            "D-127": {
              "id": "D-127",
              "name": "Sales Compensation Planning",
              "controlQuestion": "Is the sales compensation plan aligned with business goals?",
              "benefitsAnalysis": "Aligning sales compensation with business goals motivates the sales team and drives performance.",
              "levels": [
                "Compensation planning is informal and misaligned with goals.",
                "Basic planning processes with regular updates.",
                "Automated tools enhance alignment and consistency.",
                "Compensation planning is integrated across platforms, improving alignment.",
                "Performance-based compensation models driven by real-time data."
              ]
            }
          }
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
          "domains": {
            "D-131": {
              "id": "D-131",
              "name": "Customer Relationship Management (CRM)",
              "controlQuestion": "Is the CRM system effectively used to manage customer relationships?",
              "benefitsAnalysis": "Effective use of CRM systems enhances customer relationship management, leading to higher customer satisfaction and retention.",
              "levels": [
                "CRM usage is inconsistent and informal.",
                "Basic CRM processes with regular updates.",
                "Automated CRM tools enhance efficiency and consistency.",
                "CRM systems are integrated across platforms, improving utilization.",
                "Predictive CRM models enhance customer relationship management."
              ]
            },
            "D-132": {
              "id": "D-132",
              "name": "Account Planning",
              "controlQuestion": "Are account plans regularly updated and reviewed?",
              "benefitsAnalysis": "Regularly updated account plans ensure that customer needs are met and opportunities are maximized.",
              "levels": [
                "Account planning is informal and inconsistent.",
                "Documented processes with regular reviews.",
                "Automated tools enhance planning efficiency and consistency.",
                "Account planning is integrated across platforms, improving utilization.",
                "Strategic account plans driven by real-time data and insights."
              ]
            },
            "D-133": {
              "id": "D-133",
              "name": "Customer Retention",
              "controlQuestion": "Are strategies in place to retain key customers?",
              "benefitsAnalysis": "Effective customer retention strategies reduce churn and increase customer lifetime value.",
              "levels": [
                "Retention strategies are informal and reactive.",
                "Basic strategies with regular updates.",
                "Automated tools enhance retention efficiency and consistency.",
                "Retention strategies are integrated across platforms, improving effectiveness.",
                "Proactive retention strategies driven by predictive analytics."
              ]
            },
            "D-134": {
              "id": "D-134",
              "name": "Customer Segmentation",
              "controlQuestion": "Are customers segmented for targeted account management?",
              "benefitsAnalysis": "Targeted account management through customer segmentation leads to more personalized and effective customer interactions.",
              "levels": [
                "Segmentation is informal and inconsistent.",
                "Documented processes with regular updates.",
                "Automated tools enhance segmentation efficiency and detail.",
                "Segmentation is integrated across platforms, improving targeting.",
                "Advanced segmentation models predict customer behavior and preferences."
              ]
            },
            "D-135": {
              "id": "D-135",
              "name": "Customer Feedback Management",
              "controlQuestion": "Is customer feedback regularly collected and acted upon?",
              "benefitsAnalysis": "Regularly collecting and acting on customer feedback improves products and services, enhancing customer satisfaction.",
              "levels": [
                "Feedback management is informal and inconsistent.",
                "Basic processes with regular updates.",
                "Automated tools enhance feedback collection and analysis.",
                "Feedback management is integrated across platforms, improving responsiveness.",
                "Real-time feedback loops drive continuous improvement."
              ]
            },
            "D-136": {
              "id": "D-136",
              "name": "Renewal Management",
              "controlQuestion": "Are renewals proactively managed?",
              "benefitsAnalysis": "Proactive renewal management ensures continuous customer engagement and reduces churn.",
              "levels": [
                "Renewal management is informal and reactive.",
                "Basic processes with regular updates.",
                "Automated tools enhance renewal efficiency and consistency.",
                "Renewal management is integrated across platforms, improving effectiveness.",
                "Predictive renewal strategies optimize customer retention."
              ]
            },
            "D-137": {
              "id": "D-137",
              "name": "Upselling & Cross-selling",
              "controlQuestion": "Are upselling and cross-selling opportunities effectively identified and pursued?",
              "benefitsAnalysis": "Effective upselling and cross-selling strategies increase revenue and enhance customer value.",
              "levels": [
                "Upselling and cross-selling are informal and inconsistent.",
                "Documented processes with regular updates.",
                "Automated tools enhance upselling and cross-selling efficiency.",
                "Strategies are integrated across platforms, improving effectiveness.",
                "Data-driven strategies optimize upselling and cross-selling opportunities."
              ]
            }
          }
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
          "domains": {
            "D-141": {
              "id": "D-141",
              "name": "Opportunity Management",
              "controlQuestion": "Is there a structured process for managing sales opportunities?",
              "benefitsAnalysis": "Structured opportunity management improves conversion rates and sales efficiency.",
              "levels": [
                "Opportunities are managed informally with no structured process.",
                "Documented processes for managing opportunities with regular updates.",
                "Automated tools streamline opportunity management, enhancing efficiency.",
                "Opportunities are managed through integrated platforms, improving visibility and coordination.",
                "Predictive models identify high-potential opportunities, optimizing resource allocation."
              ]
            },
            "D-142": {
              "id": "D-142",
              "name": "Sales Funnel Analysis",
              "controlQuestion": "Is the sales funnel regularly analyzed for optimization?",
              "benefitsAnalysis": "Regular funnel analysis identifies bottlenecks and opportunities for improvement, optimizing the sales process.",
              "levels": [
                "Funnel analysis is sporadic and lacks consistency.",
                "Regular funnel analysis with documented processes and periodic reviews.",
                "Automated tools provide detailed insights into funnel performance.",
                "Funnel analysis is integrated across platforms, enhancing strategic planning.",
                "Advanced analytics offer deep insights into funnel optimization, driving continuous improvement."
              ]
            },
            "D-143": {
              "id": "D-143",
              "name": "Forecasting & Reporting",
              "controlQuestion": "Are sales forecasts and reports accurate and timely?",
              "benefitsAnalysis": "Accurate and timely forecasts and reports enable better decision-making and strategic planning.",
              "levels": [
                "Forecasting and reporting are informal and often inaccurate.",
                "Basic forecasting and reporting processes with regular updates.",
                "Automated tools enhance the accuracy and timeliness of forecasts and reports.",
                "Forecasting and reporting are integrated across platforms, improving strategic alignment.",
                "Real-time forecasting and reporting provide actionable insights, optimizing decision-making."
              ]
            },
            "D-144": {
              "id": "D-144",
              "name": "Deal Qualification",
              "controlQuestion": "Is there a robust process for qualifying deals?",
              "benefitsAnalysis": "Robust deal qualification processes ensure that sales efforts are focused on high-potential opportunities.",
              "levels": [
                "Deal qualification is informal and inconsistent.",
                "Documented processes for deal qualification with regular updates.",
                "Automated tools streamline deal qualification, enhancing efficiency.",
                "Deal qualification is integrated across platforms, improving coordination and effectiveness.",
                "Predictive models optimize deal qualification, increasing conversion rates and sales effectiveness."
              ]
            },
            "D-145": {
              "id": "D-145",
              "name": "Pipeline Health Monitoring",
              "controlQuestion": "Is the health of the sales pipeline regularly monitored?",
              "benefitsAnalysis": "Regular pipeline health monitoring ensures that potential issues are identified and addressed promptly.",
              "levels": [
                "Pipeline health monitoring is informal and inconsistent.",
                "Regular monitoring with documented processes and periodic reviews.",
                "Automated tools provide real-time insights into pipeline health.",
                "Pipeline health monitoring is integrated across platforms, enhancing visibility and strategic planning.",
                "Advanced analytics offer deep insights into pipeline health, driving proactive adjustments and optimization."
              ]
            },
            "D-146": {
              "id": "D-146",
              "name": "Sales Cycle Management",
              "controlQuestion": "Is the sales cycle effectively managed and optimized?",
              "benefitsAnalysis": "Effective sales cycle management reduces time to close and increases win rates.",
              "levels": [
                "Sales cycle management is informal and inefficient.",
                "Documented processes for managing the sales cycle with regular updates.",
                "Automated tools streamline sales cycle management, enhancing efficiency.",
                "Sales cycle management is integrated across platforms, improving coordination and effectiveness.",
                "Real-time data and advanced analytics optimize the sales cycle, reducing time to close and increasing win rates."
              ]
            },
            "D-147": {
              "id": "D-147",
              "name": "Win/Loss Analysis",
              "controlQuestion": "Are win/loss analyses conducted to improve sales strategies?",
              "benefitsAnalysis": "Conducting win/loss analyses provides insights that can improve sales strategies and increase win rates.",
              "levels": [
                "Win/loss analyses are sporadic and lack consistency.",
                "Regular win/loss analyses with documented processes and periodic reviews.",
                "Automated tools provide detailed insights into win/loss performance.",
                "Win/loss analyses are integrated across platforms, enhancing strategic planning.",
                "Advanced analytics offer deep insights into win/loss performance, driving continuous improvement and strategic adjustments."
              ]
            }
          }
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
          "domains": {
            "D-151": {
              "id": "D-151",
              "name": "Performance Metrics",
              "controlQuestion": "Are performance metrics clearly defined and tracked?",
              "benefitsAnalysis": "Clearly defined and tracked performance metrics drive accountability and continuous improvement.",
              "levels": [
                "Performance metrics are informal and inconsistently tracked.",
                "Documented performance metrics with regular tracking and updates.",
                "Automated tools enhance the accuracy and consistency of performance tracking.",
                "Performance metrics are integrated across platforms, improving visibility and strategic alignment.",
                "Real-time performance metrics provide actionable insights, optimizing sales effectiveness and strategic planning."
              ]
            },
            "D-152": {
              "id": "D-152",
              "name": "Sales Incentives",
              "controlQuestion": "Are sales incentives aligned with performance goals?",
              "benefitsAnalysis": "Aligning sales incentives with performance goals motivates the sales team and drives performance.",
              "levels": [
                "Sales incentives are informal and misaligned with performance goals.",
                "Documented sales incentive plans with regular updates.",
                "Automated tools streamline sales incentive management, enhancing alignment and consistency.",
                "Sales incentives are integrated across platforms, improving coordination and effectiveness.",
                "Performance-based incentive models driven by real-time data optimize sales motivation and effectiveness."
              ]
            },
            "D-153": {
              "id": "D-153",
              "name": "Sales Coaching",
              "controlQuestion": "Is regular coaching provided to improve sales performance?",
              "benefitsAnalysis": "Regular coaching improves sales skills and performance, leading to higher sales effectiveness.",
              "levels": [
                "Sales coaching is informal and inconsistent.",
                "Documented sales coaching processes with regular updates.",
                "Automated tools enhance the efficiency and consistency of sales coaching.",
                "Sales coaching is integrated across platforms, improving coordination and effectiveness.",
                "Personalized coaching programs driven by real-time performance data optimize sales effectiveness and development."
              ]
            },
            "D-154": {
              "id": "D-154",
              "name": "Performance Reviews",
              "controlQuestion": "Are performance reviews conducted regularly?",
              "benefitsAnalysis": "Regular performance reviews provide feedback and identify areas for improvement, driving continuous development.",
              "levels": [
                "Performance reviews are informal and sporadic.",
                "Regular performance reviews with documented processes and periodic updates.",
                "Automated tools streamline performance reviews, enhancing efficiency and consistency.",
                "Performance reviews are integrated across platforms, improving coordination and strategic alignment.",
                "Real-time performance data and advanced analytics optimize performance reviews, driving continuous improvement and development."
              ]
            },
            "D-155": {
              "id": "D-155",
              "name": "Goal Setting",
              "controlQuestion": "Are sales goals clearly defined and communicated?",
              "benefitsAnalysis": "Clearly defined and communicated sales goals provide direction and motivation for the sales team.",
              "levels": [
                "Sales goals are informal and inconsistently communicated.",
                "Documented sales goals with regular updates and communication.",
                "Automated tools enhance the clarity and consistency of goal setting.",
                "Sales goals are integrated across platforms, improving visibility and strategic alignment.",
                "Data-driven goal setting provides clear, achievable targets, optimizing sales motivation and effectiveness."
              ]
            },
            "D-156": {
              "id": "D-156",
              "name": "Sales Dashboards",
              "controlQuestion": "Are sales dashboards used to track performance?",
              "benefitsAnalysis": "Sales dashboards provide real-time insights into performance, enabling proactive adjustments and optimization.",
              "levels": [
                "Sales dashboards are informal and inconsistently used.",
                "Documented processes for using sales dashboards with regular updates.",
                "Automated tools enhance the accuracy and consistency of sales dashboards.",
                "Sales dashboards are integrated across platforms, improving visibility and strategic alignment.",
                "Real-time sales dashboards provide deep insights into performance, driving proactive adjustments and optimization."
              ]
            },
            "D-157": {
              "id": "D-157",
              "name": "Pipeline Reviews",
              "controlQuestion": "Are pipeline reviews conducted regularly?",
              "benefitsAnalysis": "Regular pipeline reviews ensure that the sales pipeline is healthy and opportunities are effectively managed.",
              "levels": [
                "Pipeline reviews are informal and sporadic.",
                "Regular pipeline reviews with documented processes and periodic updates.",
                "Automated tools enhance the efficiency and consistency of pipeline reviews.",
                "Pipeline reviews are integrated across platforms, improving coordination and strategic alignment.",
                "Real-time data and advanced analytics optimize pipeline reviews, driving continuous improvement and strategic adjustments."
              ]
            }
          }
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
          "domains": {
            "D-161": {
              "id": "D-161",
              "name": "Contract Negotiation",
              "controlQuestion": "Are contract negotiations conducted effectively?",
              "benefitsAnalysis": "Effective contract negotiations ensure favorable terms and reduce legal risks.",
              "levels": [
                "Contract negotiations are informal and inconsistent.",
                "Documented processes for contract negotiation with regular updates.",
                "Automated tools streamline contract negotiation, enhancing efficiency and consistency.",
                "Contract negotiations are integrated across platforms, improving coordination and effectiveness.",
                "Data-driven negotiation strategies optimize contract terms and outcomes."
              ]
            },
            "D-162": {
              "id": "D-162",
              "name": "Legal Compliance",
              "controlQuestion": "Are contracts compliant with legal requirements?",
              "benefitsAnalysis": "Ensuring legal compliance reduces the risk of legal issues and penalties.",
              "levels": [
                "Legal compliance is informal and inconsistently managed.",
                "Documented processes for ensuring legal compliance with regular updates.",
                "Automated tools enhance the accuracy and consistency of legal compliance.",
                "Legal compliance is integrated across platforms, improving coordination and effectiveness.",
                "Real-time compliance monitoring ensures contracts meet all legal requirements, reducing risk."
              ]
            },
            "D-163": {
              "id": "D-163",
              "name": "Renewal Management",
              "controlQuestion": "Are contract renewals proactively managed?",
              "benefitsAnalysis": "Proactive renewal management ensures continuous customer engagement and reduces churn.",
              "levels": [
                "Renewal management is informal and reactive.",
                "Documented processes for managing renewals with regular updates.",
                "Automated tools streamline renewal management, enhancing efficiency and consistency.",
                "Renewal management is integrated across platforms, improving coordination and effectiveness.",
                "Predictive renewal strategies optimize customer retention and contract value."
              ]
            },
            "D-164": {
              "id": "D-164",
              "name": "Contract Drafting",
              "controlQuestion": "Are contracts drafted clearly and accurately?",
              "benefitsAnalysis": "Clear and accurate contract drafting reduces misunderstandings and legal risks.",
              "levels": [
                "Contract drafting is informal and inconsistent.",
                "Documented processes for contract drafting with regular updates.",
                "Automated tools enhance the clarity and accuracy of contract drafting.",
                "Contract drafting is integrated across platforms, improving coordination and effectiveness.",
                "Advanced drafting tools ensure contracts are clear, accurate, and optimized for business needs."
              ]
            },
            "D-165": {
              "id": "D-165",
              "name": "Contract Review",
              "controlQuestion": "Are contracts reviewed regularly?",
              "benefitsAnalysis": "Regular contract reviews ensure that contracts remain relevant and compliant.",
              "levels": [
                "Contract reviews are informal and sporadic.",
                "Regular contract reviews with documented processes and periodic updates.",
                "Automated tools streamline contract reviews, enhancing efficiency and consistency.",
                "Contract reviews are integrated across platforms, improving coordination and strategic alignment.",
                "Real-time review tools ensure contracts are up-to-date and compliant, reducing risk."
              ]
            },
            "D-166": {
              "id": "D-166",
              "name": "Contract Lifecycle Management",
              "controlQuestion": "Is the contract lifecycle effectively managed?",
              "benefitsAnalysis": "Effective contract lifecycle management maximizes contract value and ensures compliance.",
              "levels": [
                "Contract lifecycle management is informal and inconsistent.",
                "Documented processes for managing the contract lifecycle with regular updates.",
                "Automated tools enhance the efficiency and consistency of contract lifecycle management.",
                "Contract lifecycle management is integrated across platforms, improving coordination and effectiveness.",
                "Predictive lifecycle management optimizes contract performance and value."
              ]
            },
            "D-167": {
              "id": "D-167",
              "name": "SLA Management",
              "controlQuestion": "Are service level agreements (SLAs) clearly defined and managed?",
              "benefitsAnalysis": "Clearly defined and managed SLAs ensure that service expectations are met, enhancing customer satisfaction.",
              "levels": [
                "SLA management is informal and inconsistent.",
                "Documented processes for managing SLAs with regular updates.",
                "Automated tools enhance the clarity and consistency of SLA management.",
                "SLA management is integrated across platforms, improving coordination and effectiveness.",
                "Real-time SLA monitoring ensures compliance and optimizes service performance."
              ]
            }
          }
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
          "domains": {
            "D-171": {
              "id": "D-171",
              "name": "Content Creation",
              "controlQuestion": "Is sales content regularly updated and aligned with sales needs?",
              "benefitsAnalysis": "Regularly updated and aligned sales content ensures that the sales team has the resources they need to be effective.",
              "levels": [
                "Content creation is ad-hoc and lacks alignment with sales needs.",
                "Regular updates to sales content with documented processes.",
                "Automated tools ensure timely updates and alignment with sales strategies.",
                "Content creation is integrated across platforms, ensuring consistency and strategic alignment.",
                "Dynamic content creation driven by real-time data and customer insights, ensuring relevance and impact."
              ]
            },
            "D-172": {
              "id": "D-172",
              "name": "Sales Training",
              "controlQuestion": "Is ongoing training provided to sales teams?",
              "benefitsAnalysis": "Ongoing training ensures that sales teams have the skills and knowledge they need to perform effectively.",
              "levels": [
                "Training is sporadic and lacks structure.",
                "Regular training programs with documented processes.",
                "Automated training modules enhance consistency and accessibility.",
                "Training programs are integrated across platforms, ensuring alignment with sales strategies.",
                "Personalized training driven by performance data and AI, optimizing effectiveness and engagement."
              ]
            },
            "D-173": {
              "id": "D-173",
              "name": "Sales Playbooks",
              "controlQuestion": "Are sales playbooks available and used by the sales team?",
              "benefitsAnalysis": "Sales playbooks provide a consistent approach to sales, improving efficiency and effectiveness.",
              "levels": [
                "Playbooks are informal and inconsistently used.",
                "Documented playbooks with regular updates and training.",
                "Automated tools ensure playbooks are accessible and up-to-date.",
                "Playbooks are integrated across platforms, enhancing usability and strategic alignment.",
                "Interactive playbooks driven by real-time data and best practices, optimizing sales performance."
              ]
            },
            "D-174": {
              "id": "D-174",
              "name": "Sales Collateral Development",
              "controlQuestion": "Is sales collateral developed and maintained?",
              "benefitsAnalysis": "Well-developed and maintained sales collateral supports the sales process and enhances customer interactions.",
              "levels": [
                "Collateral development is informal and inconsistent.",
                "Regular updates to sales collateral with documented processes.",
                "Automated tools streamline collateral development and maintenance.",
                "Collateral is integrated across platforms, ensuring consistency and strategic alignment.",
                "Dynamic collateral creation driven by real-time data and customer insights, ensuring relevance and impact."
              ]
            },
            "D-175": {
              "id": "D-175",
              "name": "Competitive Intelligence",
              "controlQuestion": "Is competitive intelligence regularly gathered and shared?",
              "benefitsAnalysis": "Regularly gathered and shared competitive intelligence ensures that the company stays ahead of competitors.",
              "levels": [
                "Competitive intelligence is sporadic and informal.",
                "Regular collection and sharing of competitive intelligence with documented processes.",
                "Automated tools provide comprehensive and timely competitive insights.",
                "Competitive intelligence is integrated across platforms, enhancing strategic planning.",
                "Real-time competitive monitoring and strategic recommendations ensure a competitive edge."
              ]
            },
            "D-176": {
              "id": "D-176",
              "name": "Product Training",
              "controlQuestion": "Is product training provided to sales teams?",
              "benefitsAnalysis": "Product training ensures that sales teams have the knowledge they need to effectively sell the product.",
              "levels": [
                "Product training is informal and inconsistent.",
                "Regular product training programs with documented processes.",
                "Automated training modules enhance consistency and accessibility.",
                "Product training is integrated across platforms, ensuring alignment with sales strategies.",
                "Personalized product training driven by performance data and AI, optimizing effectiveness and engagement."
              ]
            },
            "D-177": {
              "id": "D-177",
              "name": "Sales Coaching",
              "controlQuestion": "Is sales coaching available to improve performance?",
              "benefitsAnalysis": "Sales coaching improves sales skills and performance, leading to higher sales effectiveness.",
              "levels": [
                "Coaching is informal and sporadic.",
                "Regular coaching sessions with documented processes.",
                "Automated tools enhance the efficiency and consistency of coaching.",
                "Coaching is integrated across platforms, ensuring alignment with sales strategies.",
                "Personalized coaching driven by real-time performance data, optimizing sales effectiveness and development."
              ]
            }
          }
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
          "domains": {
            "D-181": {
              "id": "D-181",
              "name": "Onboarding",
              "controlQuestion": "Is there a structured onboarding process for new customers?",
              "benefitsAnalysis": "A structured onboarding process ensures that new customers are effectively integrated, enhancing satisfaction and retention.",
              "levels": [
                "Onboarding is informal and inconsistent.",
                "Documented onboarding processes with regular updates.",
                "Automated tools streamline onboarding, enhancing efficiency and consistency.",
                "Onboarding is integrated across platforms, ensuring a seamless customer experience.",
                "Personalized onboarding driven by real-time data and customer insights, optimizing engagement and satisfaction."
              ]
            },
            "D-182": {
              "id": "D-182",
              "name": "Customer Support",
              "controlQuestion": "Is customer support readily available and effective?",
              "benefitsAnalysis": "Readily available and effective customer support enhances customer satisfaction and retention.",
              "levels": [
                "Support is reactive and inconsistent.",
                "Documented support processes with regular updates.",
                "Automated tools enhance support efficiency and consistency.",
                "Support is integrated across platforms, ensuring a seamless customer experience.",
                "Proactive support driven by real-time data and AI, optimizing customer satisfaction and retention."
              ]
            },
            "D-183": {
              "id": "D-183",
              "name": "Upselling & Cross-selling",
              "controlQuestion": "Are upselling and cross-selling strategies in place?",
              "benefitsAnalysis": "Effective upselling and cross-selling strategies increase revenue and enhance customer value.",
              "levels": [
                "Strategies are informal and inconsistent.",
                "Documented strategies with regular updates.",
                "Automated tools enhance upselling and cross-selling efficiency.",
                "Strategies are integrated across platforms, ensuring alignment with customer needs.",
                "Data-driven strategies optimize upselling and cross-selling opportunities, enhancing customer value."
              ]
            },
            "D-184": {
              "id": "D-184",
              "name": "Customer Health Scoring",
              "controlQuestion": "Are customer health scores regularly monitored?",
              "benefitsAnalysis": "Regularly monitored customer health scores identify at-risk customers, enabling proactive retention efforts.",
              "levels": [
                "Health scoring is informal and inconsistent.",
                "Regular monitoring with documented processes and updates.",
                "Automated tools provide real-time insights into customer health.",
                "Health scoring is integrated across platforms, enhancing visibility and strategic planning.",
                "Predictive health scoring models optimize customer engagement and retention."
              ]
            },
            "D-185": {
              "id": "D-185",
              "name": "Churn Management",
              "controlQuestion": "Are churn management strategies in place?",
              "benefitsAnalysis": "Effective churn management strategies reduce customer attrition and increase retention.",
              "levels": [
                "Churn management is reactive and informal.",
                "Documented strategies with regular updates.",
                "Automated tools enhance churn management efficiency and consistency.",
                "Strategies are integrated across platforms, ensuring proactive engagement.",
                "Predictive churn models identify at-risk customers, optimizing retention efforts."
              ]
            },
            "D-186": {
              "id": "D-186",
              "name": "Customer Advocacy",
              "controlQuestion": "Are customers encouraged to become advocates?",
              "benefitsAnalysis": "Encouraging customer advocacy enhances brand loyalty and attracts new customers through word-of-mouth.",
              "levels": [
                "Advocacy efforts are informal and inconsistent.",
                "Documented advocacy programs with regular updates.",
                "Automated tools streamline advocacy efforts, enhancing efficiency.",
                "Advocacy programs are integrated across platforms, ensuring alignment with customer success strategies.",
                "Data-driven advocacy programs identify and nurture potential advocates, optimizing customer loyalty."
              ]
            },
            "D-187": {
              "id": "D-187",
              "name": "Customer Training",
              "controlQuestion": "Is training provided to help customers use the product effectively?",
              "benefitsAnalysis": "Providing training helps customers use the product effectively, enhancing satisfaction and reducing support needs.",
              "levels": [
                "Training is informal and inconsistent.",
                "Regular training programs with documented processes.",
                "Automated training modules enhance consistency and accessibility.",
                "Training is integrated across platforms, ensuring alignment with customer needs.",
                "Personalized training driven by real-time data and customer insights, optimizing effectiveness and engagement."
              ]
            }
          }
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
          "domains": {
            "D-211": {
              "id": "D-211",
              "name": "Brand Strategy",
              "controlQuestion": "Is there a clear and consistent brand strategy?",
              "benefitsAnalysis": "Ensures a unified brand message, enhancing recognition and trust.",
              "levels": [
                "No formal brand strategy. The brand message is inconsistent and lacks direction.",
                "Basic brand guidelines are in place, but they are not consistently followed across all channels.",
                "Consistent brand messaging is maintained across all channels using automated tools.",
                "An integrated brand strategy is developed using data-driven insights to tailor messages to different audience segments.",
                "AI-driven tools optimize brand messaging in real-time based on customer interactions and feedback."
              ]
            },
            "D-212": {
              "id": "D-212",
              "name": "Public Relations",
              "controlQuestion": "How effectively does the company manage its public image?",
              "benefitsAnalysis": "Positive public perception, leading to increased trust and credibility.",
              "levels": [
                "PR activities are ad-hoc and reactive, with no formal strategy.",
                "A basic PR strategy is in place, but it is not consistently executed.",
                "Regular PR campaigns are managed using automated tools to ensure consistency.",
                "An integrated PR strategy is developed, with media monitoring tools to track and respond to public sentiment.",
                "AI-driven tools optimize PR efforts, predicting and mitigating potential issues before they escalate."
              ]
            },
            "D-213": {
              "id": "D-213",
              "name": "Social Media Presence",
              "controlQuestion": "How effectively does the company utilize social media for brand awareness?",
              "benefitsAnalysis": "Enhanced brand visibility and engagement with a broader audience.",
              "levels": [
                "Social media presence is minimal and inconsistent.",
                "Basic social media strategy is in place, with regular posts and engagement.",
                "Social media management tools are used to schedule posts and track engagement.",
                "An integrated social media strategy is developed, with data-driven insights to optimize content and engagement.",
                "AI-driven tools personalize social media interactions and predict trends to stay ahead of the competition."
              ]
            },
            "D-214": {
              "id": "D-214",
              "name": "Corporate Messaging",
              "controlQuestion": "How effectively does the company communicate its corporate values and mission?",
              "benefitsAnalysis": "Consistent and compelling corporate messaging that enhances brand reputation and trust.",
              "levels": [
                "No formal corporate messaging strategy. Communication is inconsistent and lacks coherence.",
                "Basic corporate messaging is in place, but it is not consistently communicated across all channels.",
                "Data-driven tools are used to develop and communicate corporate messaging, ensuring consistency and alignment with brand values.",
                "Integrated corporate messaging strategy leveraging customer insights and market trends to tailor messages to different stakeholders.",
                "AI-driven tools continuously optimize corporate messaging based on real-time feedback and market conditions."
              ]
            },
            "D-215": {
              "id": "D-215",
              "name": "Analyst Relations",
              "controlQuestion": "How effectively does the company manage relationships with industry analysts?",
              "benefitsAnalysis": "Positive analyst reviews and endorsements, leading to increased credibility and market influence.",
              "levels": [
                "No formal analyst relations strategy. Engagement with analysts is ad-hoc and inconsistent.",
                "Basic analyst relations strategy is in place, but it is not consistently executed.",
                "Data-driven tools are used to manage analyst relations, ensuring regular and consistent engagement.",
                "An integrated analyst relations strategy leveraging predictive analytics to optimize engagement and influence.",
                "AI-driven tools continuously improve analyst relations, providing real-time insights and recommendations for maximizing analyst endorsements and market influence."
              ]
            },
            "D-216": {
              "id": "D-216",
              "name": "Social Media Presence",
              "controlQuestion": "How effectively does the company utilize social media for brand awareness?",
              "benefitsAnalysis": "Enhanced brand visibility and engagement with a broader audience.",
              "levels": [
                "Social media presence is minimal and inconsistent.",
                "Basic social media strategy is in place, with regular posts and engagement.",
                "Social media management tools are used to schedule posts and track engagement.",
                "An integrated social media strategy is developed, with data-driven insights to optimize content and engagement.",
                "AI-driven tools personalize social media interactions and predict trends to stay ahead of the competition."
              ]
            }
          }
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
          "domains": {
            "D-221": {
              "id": "D-221",
              "name": "Budget Allocation",
              "controlQuestion": "Is the marketing budget aligned with strategic goals?",
              "benefitsAnalysis": "Effective resource allocation, leading to sustainable growth.",
              "levels": [
                "No formal budget allocation, leading to inefficient use of resources.",
                "Basic budget planning is in place, but it lacks alignment with strategic goals.",
                "Data-driven tools are used to allocate the budget based on past performance and future projections.",
                "An integrated budget planning process aligns with strategic goals and includes ROI analysis.",
                "AI-driven tools optimize budget allocation in real-time based on market conditions and performance metrics."
              ]
            },
            "D-222": {
              "id": "D-222",
              "name": "Forecasting and ROI",
              "controlQuestion": "How accurately does the company forecast marketing ROI?",
              "benefitsAnalysis": "Improved decision-making and resource allocation.",
              "levels": [
                "No formal forecasting, leading to unpredictable results.",
                "Basic ROI calculations are performed, but they are not consistently accurate.",
                "Data-driven tools provide more accurate ROI forecasting based on historical data.",
                "An integrated ROI analysis process uses predictive analytics to forecast future performance.",
                "AI-driven tools continuously optimize ROI forecasting, adapting to changing market conditions."
              ]
            }
          }
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
          "domains": {
            "D-231": {
              "id": "D-231",
              "name": "Marketing Automation",
              "controlQuestion": "How effectively does the company use marketing automation tools?",
              "benefitsAnalysis": "Enhanced efficiency and scalability of marketing efforts.",
              "levels": [
                "No marketing automation, leading to manual and inefficient processes.",
                "Basic automation tools are in place, but they are not fully utilized.",
                "Integrated automation tools streamline marketing processes and improve efficiency.",
                "Advanced automation tools are used to optimize marketing campaigns and track performance.",
                "AI-driven automation tools continuously improve marketing processes based on real-time data."
              ]
            },
            "D-232": {
              "id": "D-232",
              "name": "Data Analytics",
              "controlQuestion": "How effectively does the company use data analytics for marketing?",
              "benefitsAnalysis": "Improved targeting and campaign optimization.",
              "levels": [
                "No data analytics, leading to a lack of insights and poor decision-making.",
                "Basic data analytics tools are in place, but they are not fully utilized.",
                "Integrated data analytics tools provide insights into campaign performance and customer behavior.",
                "Advanced data analytics tools use predictive insights to optimize marketing strategies.",
                "AI-driven data analytics tools continuously improve targeting and campaign optimization based on real-time data."
              ]
            }
          }
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
          "domains": {
            "D-241": {
              "id": "D-241",
              "name": "Account Targeting",
              "controlQuestion": "How effectively does the company target specific accounts?",
              "benefitsAnalysis": "Higher ROI and more effective demand generation.",
              "levels": [
                "No account targeting, leading to generic messaging and low engagement.",
                "Basic account targeting is in place, but it is not fully effective.",
                "Data-driven tools are used to identify and target specific accounts.",
                "An integrated account targeting strategy uses predictive insights to optimize targeting.",
                "AI-driven tools continuously improve account targeting based on real-time data and customer behavior."
              ]
            },
            "D-242": {
              "id": "D-242",
              "name": "Personalized Messaging",
              "controlQuestion": "How effectively does the company personalize messaging for target accounts?",
              "benefitsAnalysis": "Improved engagement and conversion rates.",
              "levels": [
                "No personalized messaging, leading to generic and ineffective communication.",
                "Basic personalized messaging is in place, but it is not fully effective.",
                "Data-driven tools are used to create personalized messaging for target accounts.",
                "An integrated personalized messaging strategy uses predictive insights to optimize communication.",
                "AI-driven tools continuously improve personalized messaging based on real-time data and customer behavior."
              ]
            },
            "D-243": {
              "id": "D-243",
              "name": "Account Insights and Analytics",
              "controlQuestion": "How effectively does the company gather and analyze data on target accounts?",
              "benefitsAnalysis": "Informed decision-making and strategic planning based on account insights.",
              "levels": [
                "No formal account insights or analytics strategy. Decisions are made based on assumptions.",
                "Basic account insights and analytics strategy is in place, but it relies on manual data collection and analysis.",
                "Data-driven tools are used to gather and analyze account insights, providing a comprehensive view of target accounts.",
                "Integrated account insights and analytics strategy leveraging predictive analytics to identify opportunities and optimize engagement.",
                "AI-driven tools continuously gather and analyze account insights, providing real-time recommendations for optimizing account strategies."
              ]
            },
            "D-244": {
              "id": "D-244",
              "name": "Account Engagement",
              "controlQuestion": "How effectively does the company engage with target accounts across multiple touchpoints?",
              "benefitsAnalysis": "Enhanced account relationships and higher conversion rates.",
              "levels": [
                "No formal account engagement strategy. Engagement is ad-hoc and inconsistent.",
                "Basic account engagement strategy is in place, but it relies on generic interactions.",
                "Data-driven tools are used to develop and execute targeted account engagement strategies, leveraging multiple touchpoints.",
                "Integrated account engagement strategy leveraging predictive analytics to personalize interactions and optimize engagement.",
                "AI-driven tools continuously improve account engagement, providing real-time insights and personalized interactions to maximize account relationships and conversion rates."
              ]
            }
          }
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
          "domains": {
            "D-251": {
              "id": "D-251",
              "name": "Product / Service Launch",
              "controlQuestion": "How effectively does the company manage product / service launches?",
              "benefitsAnalysis": "Successful product launches, leading to increased market share.",
              "levels": [
                "No formal product launch process, leading to inconsistent and ineffective launches.",
                "Basic product launch process is in place, but it is not fully effective.",
                "Data-driven tools are used to plan and execute product launches.",
                "An integrated product launch strategy uses predictive insights to optimize launches.",
                "AI-driven tools continuously improve product launch processes based on real-time data."
              ]
            },
            "D-252": {
              "id": "D-252",
              "name": "Market Research and Analysis",
              "controlQuestion": "How does the company gather and analyze market and competitive data?",
              "benefitsAnalysis": "Informed decision-making based on market trends and competitive landscape, leading to better strategic planning and positioning.",
              "levels": [
                "No formal market research. Decisions are made based on assumptions and anecdotal evidence.",
                "Basic market research is conducted sporadically, often relying on secondary data sources.",
                "Regular use of data-driven market research tools to gather primary and secondary data.",
                "Comprehensive market research strategy integrating multiple data sources and predictive analytics.",
                "AI-driven tools continuously gather and analyze market data, providing real-time insights and trend predictions."
              ]
            },
            "D-253": {
              "id": "D-253",
              "name": "Product Positioning and Messaging",
              "controlQuestion": "How well is the product's unique value proposition and key messaging defined and communicated?",
              "benefitsAnalysis": "Clear and compelling product messaging that resonates with target audiences, leading to increased adoption and market share.",
              "levels": [
                "No formal positioning or messaging. The product's value proposition is unclear and inconsistent.",
                "Basic positioning and messaging are in place but lack differentiation and consistency.",
                "Data-driven tools are used to develop and refine product positioning and messaging, ensuring consistency across channels.",
                "Integrated positioning and messaging strategy leveraging customer insights and competitive analysis to tailor messages to different segments.",
                "AI-driven tools continuously optimize positioning and messaging based on real-time customer feedback and market trends."
              ]
            },
            "D-254": {
              "id": "D-254",
              "name": "Go-to-Market Strategy",
              "controlQuestion": "How effectively does the company plan and execute product launches?",
              "benefitsAnalysis": "Successful product launches, leading to increased market share and revenue.",
              "levels": [
                "No formal go-to-market strategy. Product launches are inconsistent, poorly coordinated, and often delayed.",
                "Basic go-to-market strategy is in place, but execution is often fragmented and lacks coordination.",
                "Data-driven tools are used to plan and execute go-to-market strategies, ensuring timely and coordinated launches.",
                "Integrated go-to-market strategy leveraging cross-functional collaboration and predictive analytics to optimize launch timing and impact.",
                "AI-driven tools continuously improve go-to-market strategies, adapting to market conditions and customer feedback in real-time."
              ]
            },
            "D-255": {
              "id": "D-255",
              "name": "Sales Enablement",
              "controlQuestion": "How well are sales teams equipped with the tools, resources, and training they need to sell the product effectively?",
              "benefitsAnalysis": "Improved sales performance and higher conversion rates.",
              "levels": [
                "No formal sales enablement. Sales teams lack the necessary tools, resources, and training to effectively sell the product.",
                "Basic sales enablement is in place, providing some tools and training, but it is not comprehensive or regularly updated.",
                "Data-driven tools are used to develop and deliver comprehensive sales enablement resources, including training, collateral, and competitive analysis.",
                "Integrated sales enablement strategy leveraging customer insights and sales feedback to continuously refine and update resources.",
                "AI-driven tools continuously optimize sales enablement, providing personalized training and resources based on individual sales performance and customer interactions."
              ]
            },
            "D-256": {
              "id": "D-256",
              "name": "Customer Segmentation and Targeting",
              "controlQuestion": "How effectively does the company identify and segment target customer groups?",
              "benefitsAnalysis": "Enhanced targeting and personalization, leading to improved customer engagement and higher conversion rates.",
              "levels": [
                "No formal customer segmentation. Marketing efforts are generic and not targeted, leading to low engagement and conversion rates.",
                "Basic customer segmentation is in place, but it relies on broad demographic data and lacks depth.",
                "Data-driven tools are used to identify and segment target customer groups based on a combination of demographic, psychographic, and behavioral data.",
                "Integrated customer segmentation strategy leveraging predictive analytics to identify high-value segments and tailor marketing efforts accordingly.",
                "AI-driven tools continuously refine customer segmentation and targeting, providing real-time insights and personalized marketing strategies based on customer behavior and preferences."
              ]
            },
            "D-257": {
              "id": "D-257",
              "name": "Pricing and Packaging",
              "controlQuestion": "Is there a clear strategy for product pricing and packaging?",
              "benefitsAnalysis": "Optimized revenue and market competitiveness.",
              "levels": [
                "Ad-hoc pricing and packaging decisions, leading to inconsistent and ineffective strategies that fail to maximize revenue or market penetration.",
                "Basic pricing and packaging strategy is in place, but it is not regularly reviewed or updated based on market conditions.",
                "Data-driven tools are used to develop and execute pricing and packaging strategies, incorporating market research and competitive analysis.",
                "Integrated pricing and packaging strategy leveraging predictive analytics to optimize pricing models and packaging options based on customer preferences and market trends.",
                "AI-driven tools continuously optimize pricing and packaging strategies, adapting to real-time market conditions and customer behavior to maximize revenue and market share."
              ]
            },
            "D-258": {
              "id": "D-258",
              "name": "Product Lifecycle Management",
              "controlQuestion": "How effectively does the company manage the product lifecycle?",
              "benefitsAnalysis": "Improved product performance and smoother revenue flow.",
              "levels": [
                "No formal product lifecycle management, leading to inconsistent product performance and missed opportunities for optimization.",
                "Basic product lifecycle management is in place, but it is reactive and lacks a proactive approach to managing product performance.",
                "Data-driven tools are used to manage the product lifecycle, providing insights into product performance and opportunities for optimization.",
                "Integrated product lifecycle management strategy leveraging predictive analytics to proactively manage product performance and optimize revenue throughout the lifecycle.",
                "AI-driven tools continuously improve product lifecycle management, providing real-time insights and recommendations for optimizing product performance and revenue."
              ]
            },
            "D-259": {
              "id": "D-259",
              "name": "Demand Generation and Lead Nurturing",
              "controlQuestion": "How effectively does the company create and execute campaigns to generate interest and leads for the product?",
              "benefitsAnalysis": "Increased interest and leads, leading to higher conversion rates and revenue.",
              "levels": [
                "No formal demand generation or lead nurturing strategy. Efforts are ad-hoc and inconsistent, leading to low lead quality and conversion rates.",
                "Basic demand generation and lead nurturing strategy is in place, but it relies on generic campaigns and lacks personalization.",
                "Data-driven tools are used to create and execute targeted demand generation and lead nurturing campaigns, leveraging customer insights and behavioral data.",
                "Integrated demand generation and lead nurturing strategy leveraging predictive analytics to optimize campaigns and personalize engagement based on customer behavior and preferences.",
                "AI-driven tools continuously improve demand generation and lead nurturing strategies, providing real-time insights and personalized engagement to maximize lead quality and conversion rates."
              ]
            },
            "D-260": {
              "id": "D-260",
              "name": "Customer Success and Retention",
              "controlQuestion": "How effectively does the company ensure customers achieve their desired outcomes with the product and retain them?",
              "benefitsAnalysis": "Increased customer satisfaction, retention, and lifetime value.",
              "levels": [
                "No formal customer success or retention strategy. Efforts are reactive and inconsistent, leading to high churn rates and low customer satisfaction.",
                "Basic customer success and retention strategy is in place, but it relies on reactive support and lacks proactive engagement.",
                "Data-driven tools are used to develop and execute proactive customer success and retention strategies, leveraging customer insights and behavioral data.",
                "Integrated customer success and retention strategy leveraging predictive analytics to identify at-risk customers and optimize engagement to improve satisfaction and retention.",
                "AI-driven tools continuously improve customer success and retention strategies, providing real-time insights and personalized engagement to maximize customer satisfaction and lifetime value."
              ]
            },
            "D-261": {
              "id": "D-261",
              "name": "Competitive Intelligence",
              "controlQuestion": "How effectively does the company monitor competitors and analyze their strategies?",
              "benefitsAnalysis": "Informed decision-making and strategic planning based on competitive insights.",
              "levels": [
                "No formal competitive intelligence strategy. Decisions are made based on assumptions and anecdotal evidence.",
                "Basic competitive intelligence strategy is in place, but it relies on secondary data sources and lacks depth.",
                "Data-driven tools are used to gather and analyze competitive intelligence, providing insights into competitors' strategies and market positioning.",
                "Integrated competitive intelligence strategy leveraging predictive analytics to identify opportunities and threats based on competitors' actions and market trends.",
                "AI-driven tools continuously gather and analyze competitive intelligence, providing real-time insights and recommendations for optimizing competitive positioning and strategy."
              ]
            },
            "D-262": {
              "id": "D-262",
              "name": "Analytics and Reporting",
              "controlQuestion": "How effectively does the company measure the performance of marketing campaigns and product adoption?",
              "benefitsAnalysis": "Data-driven decision-making and optimization of marketing efforts.",
              "levels": [
                "No formal analytics or reporting strategy. Decisions are made based on assumptions and anecdotal evidence.",
                "Basic analytics and reporting strategy is in place, but it relies on manual data collection and analysis.",
                "Data-driven tools are used to measure and report on marketing performance and product adoption, providing insights into campaign effectiveness and customer behavior.",
                "Integrated analytics and reporting strategy leveraging predictive analytics to optimize marketing efforts and product adoption based on real-time data.",
                "AI-driven tools continuously measure and report on marketing performance and product adoption, providing real-time insights and recommendations for optimizing marketing strategies and product performance."
              ]
            }
          }
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
          "domains": {
            "D-311": {
              "id": "D-311",
              "name": "Co-Selling Development",
              "controlQuestion": "Are the rules of engagement and partner co-selling for your direct sales and partners clear?",
              "benefitsAnalysis": "Clear rules of engagement enhance collaboration and sales effectiveness.",
              "levels": [
                "No defined rules of engagement. Co-selling is ad-hoc and inconsistent.",
                "Basic rules of engagement are in place, but not consistently followed.",
                "Automated tools manage co-selling activities and ensure consistency.",
                "Co-selling processes are integrated across platforms, enhancing coordination.",
                "Continuous optimization of co-selling strategies based on real-time data and feedback."
              ]
            },
            "D-312": {
              "id": "D-312",
              "name": "Partner Collaboration",
              "controlQuestion": "How effectively do partners and direct sales teams collaborate?",
              "benefitsAnalysis": "Effective collaboration improves sales outcomes and partner satisfaction.",
              "levels": [
                "Collaboration is informal and inconsistent.",
                "Basic collaboration processes are in place, but not consistently followed.",
                "Automated tools facilitate collaboration and ensure consistency.",
                "Collaboration processes are integrated across platforms, enhancing coordination.",
                "Real-time data and analytics continuously improve collaboration strategies."
              ]
            },
            "D-313": {
              "id": "D-313",
              "name": "Joint Account Planning",
              "controlQuestion": "How well are joint sales efforts planned and executed?",
              "benefitsAnalysis": "Coordinated planning enhances sales effectiveness and partner alignment.",
              "levels": [
                "Joint account planning is ad-hoc and lacks formal processes.",
                "Basic joint account planning processes are in place, but not consistently executed.",
                "Automated tools streamline joint account planning and execution.",
                "Integrated planning processes across platforms enhance coordination.",
                "Predictive analytics optimize joint account planning and execution."
              ]
            },
            "D-314": {
              "id": "D-314",
              "name": "Performance Metrics",
              "controlQuestion": "How are the success of co-selling initiatives measured?",
              "benefitsAnalysis": "Clear metrics provide insights into co-selling effectiveness and areas for improvement.",
              "levels": [
                "No formal metrics for measuring co-selling success.",
                "Basic metrics are in place, but not consistently tracked.",
                "Automated tools track and report on co-selling performance.",
                "Integrated metrics across platforms provide comprehensive insights.",
                "Advanced analytics continuously optimize co-selling performance metrics."
              ]
            }
          }
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
          "domains": {
            "D-321": {
              "id": "D-321",
              "name": "Partner Program Growth",
              "controlQuestion": "Do you sell your technology to others for their offerings?",
              "benefitsAnalysis": "Selling technology to others expands market reach and revenue streams.",
              "levels": [
                "No formal strategy for selling technology to others.",
                "Basic strategy in place, but not consistently executed.",
                "Automated tools streamline technology sales processes.",
                "Integrated strategy across platforms enhances coordination and effectiveness.",
                "Data-driven insights optimize technology sales strategies based on market trends and customer feedback."
              ]
            },
            "D-322": {
              "id": "D-322",
              "name": "Technology Integration",
              "controlQuestion": "How well is your technology integrated into partner offerings?",
              "benefitsAnalysis": "Effective integration enhances partner offerings and customer satisfaction.",
              "levels": [
                "Technology integration is ad-hoc and lacks formal processes.",
                "Basic integration processes are in place, but not consistently executed.",
                "Automated tools facilitate technology integration and ensure consistency.",
                "Integrated processes across platforms enhance coordination and effectiveness.",
                "Continuous optimization of technology integration based on real-time data and feedback."
              ]
            },
            "D-323": {
              "id": "D-323",
              "name": "Support and Training",
              "controlQuestion": "How effectively are partners supported and trained?",
              "benefitsAnalysis": "Ongoing support and training improve partner performance and satisfaction.",
              "levels": [
                "Support and training are informal and inconsistent.",
                "Basic support and training programs are in place, but not consistently executed.",
                "Automated tools manage support and training activities and ensure consistency.",
                "Integrated support and training programs across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize support and training strategies."
              ]
            }
          }
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
          "domains": {
            "D-331": {
              "id": "D-331",
              "name": "Channel Partner Recruitment",
              "controlQuestion": "How effectively are new channel partners recruited?",
              "benefitsAnalysis": "Effective recruitment expands the distribution network and market reach.",
              "levels": [
                "Recruitment is ad-hoc and lacks formal processes.",
                "Basic recruitment processes are in place, but not consistently executed.",
                "Automated tools streamline partner recruitment and ensure consistency.",
                "Integrated recruitment processes across platforms enhance coordination.",
                "Predictive analytics optimize partner recruitment strategies."
              ]
            },
            "D-332": {
              "id": "D-332",
              "name": "Channel Partner Enablement",
              "controlQuestion": "How well are channel partners trained and supported?",
              "benefitsAnalysis": "Training and support improve partner performance and satisfaction.",
              "levels": [
                "Enablement is informal and inconsistent.",
                "Basic enablement programs are in place, but not consistently executed.",
                "Automated tools manage enablement activities and ensure consistency.",
                "Integrated enablement programs across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize enablement strategies."
              ]
            },
            "D-333": {
              "id": "D-333",
              "name": "Channel Partner Performance",
              "controlQuestion": "How is channel partner performance measured and managed?",
              "benefitsAnalysis": "Clear metrics provide insights into partner performance and areas for improvement.",
              "levels": [
                "No formal metrics for measuring partner performance.",
                "Basic metrics are in place, but not consistently tracked.",
                "Automated tools track and report on partner performance.",
                "Integrated metrics across platforms provide comprehensive insights.",
                "Advanced analytics continuously optimize partner performance metrics."
              ]
            },
            "D-334": {
              "id": "D-334",
              "name": "Channel Conflict Management",
              "controlQuestion": "How are conflicts between channel partners managed?",
              "benefitsAnalysis": "Effective conflict management enhances partner relationships and performance.",
              "levels": [
                "Conflict management is ad-hoc and lacks formal processes.",
                "Basic conflict management processes are in place, but not consistently executed.",
                "Automated tools facilitate conflict management and ensure consistency.",
                "Integrated conflict management processes across platforms enhance coordination.",
                "Predictive analytics optimize conflict management strategies."
              ]
            },
            "D-335": {
              "id": "D-335",
              "name": "Distribution Network",
              "controlQuestion": "How effectively is the distribution network managed?",
              "benefitsAnalysis": "Efficient management enhances market penetration and sales volume.",
              "levels": [
                "Distribution network management is informal and inconsistent.",
                "Basic management processes are in place, but not consistently executed.",
                "Automated tools manage the distribution network and ensure consistency.",
                "Integrated management processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize distribution network management."
              ]
            },
            "D-336": {
              "id": "D-336",
              "name": "Reseller Agreements",
              "controlQuestion": "How well are agreements with resellers managed?",
              "benefitsAnalysis": "Clear agreements enhance partner relationships and sales effectiveness.",
              "levels": [
                "Agreement management is informal and inconsistent.",
                "Basic agreement management processes are in place, but not consistently executed.",
                "Automated tools manage reseller agreements and ensure consistency.",
                "Integrated agreement management processes across platforms enhance coordination.",
                "Continuous optimization of reseller agreements based on real-time data and feedback."
              ]
            },
            "D-337": {
              "id": "D-337",
              "name": "Sales Incentives",
              "controlQuestion": "How are sales incentives for resellers aligned with business goals?",
              "benefitsAnalysis": "Aligned incentives motivate resellers and drive sales performance.",
              "levels": [
                "Incentives are informal and misaligned with business goals.",
                "Basic incentive plans are in place, but not consistently executed.",
                "Automated tools manage sales incentives and ensure consistency.",
                "Integrated incentive plans across platforms enhance alignment and effectiveness.",
                "Data-driven insights continuously optimize sales incentive strategies."
              ]
            },
            "D-338": {
              "id": "D-338",
              "name": "Market Penetration",
              "controlQuestion": "How effectively is market penetration achieved through resellers?",
              "benefitsAnalysis": "Effective strategies increase market reach and sales volume.",
              "levels": [
                "Market penetration strategies are informal and inconsistent.",
                "Basic strategies are in place, but not consistently executed.",
                "Automated tools manage market penetration activities and ensure consistency.",
                "Integrated strategies across platforms enhance coordination and effectiveness.",
                "Predictive analytics optimize market penetration strategies."
              ]
            }
          }
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
          "domains": {
            "D-341": {
              "id": "D-341",
              "name": "Hyperscaler Engagement",
              "controlQuestion": "Do you co-sell with Hyperscalers? Do you sell your offerings on a Hyperscaler’s marketplace?",
              "benefitsAnalysis": "Co-selling with Hyperscalers and selling on their marketplace increases visibility and sales opportunities.",
              "levels": [
                "No formal strategy for co-selling with Hyperscalers or selling on their marketplace.",
                "Basic strategy in place, but not consistently executed.",
                "Automated tools manage Hyperscaler engagement and marketplace sales.",
                "Integrated strategy across platforms enhances coordination and effectiveness.",
                "Predictive analytics optimize Hyperscaler engagement and marketplace sales strategies."
              ]
            },
            "D-342": {
              "id": "D-342",
              "name": "Marketplace Sales",
              "controlQuestion": "How effectively do you sell your offerings on a Hyperscaler’s marketplace?",
              "benefitsAnalysis": "Selling on a Hyperscaler’s marketplace increases market reach and sales opportunities.",
              "levels": [
                "No formal strategy for marketplace sales.",
                "Basic strategy in place, but not consistently executed.",
                "Automated tools manage marketplace sales and ensure consistency.",
                "Integrated marketplace sales strategy enhances coordination and effectiveness.",
                "Real-time data and analytics continuously optimize marketplace sales strategies."
              ]
            },
            "D-343": {
              "id": "D-343",
              "name": "Hyperscaler Collaboration",
              "controlQuestion": "How effectively do you collaborate with Hyperscalers?",
              "benefitsAnalysis": "Effective collaboration with Hyperscalers enhances co-selling opportunities and market reach.",
              "levels": [
                "Collaboration is informal and inconsistent.",
                "Basic collaboration processes are in place, but not consistently followed.",
                "Automated tools facilitate collaboration and ensure consistency.",
                "Collaboration processes are integrated across platforms, enhancing coordination.",
                "Continuous improvement of collaboration strategies based on real-time data and feedback."
              ]
            },
            "D-344": {
              "id": "D-344",
              "name": "Leveraging Hyperscaler Programs",
              "controlQuestion": "How effectively do you leverage Hyperscaler programs?",
              "benefitsAnalysis": "Leveraging Hyperscaler programs provides additional resources and support for co-selling.",
              "levels": [
                "No formal strategy for leveraging Hyperscaler programs.",
                "Basic strategy in place, but not consistently executed.",
                "Automated tools manage participation in Hyperscaler programs.",
                "Integrated strategy across platforms enhances coordination and effectiveness.",
                "Data-driven insights optimize the use of Hyperscaler programs."
              ]
            },
            "D-345": {
              "id": "D-345",
              "name": "Incentive Management",
              "controlQuestion": "How effectively are incentives from Hyperscalers managed and collected?",
              "benefitsAnalysis": "Effective incentive management maximizes financial benefits and supports co-selling efforts.",
              "levels": [
                "Incentive management is informal and inconsistent.",
                "Basic processes for managing and collecting incentives are in place, but not consistently executed.",
                "Automated tools manage incentive collection and ensure consistency.",
                "Integrated incentive management processes across platforms enhance coordination.",
                "Continuous optimization of incentive management based on real-time data and feedback."
              ]
            },
            "D-346": {
              "id": "D-346",
              "name": "Pipeline Coordination",
              "controlQuestion": "How effectively is the sales pipeline coordinated with Hyperscalers?",
              "benefitsAnalysis": "Effective pipeline coordination enhances sales opportunities and partner alignment.",
              "levels": [
                "Pipeline coordination is informal and inconsistent.",
                "Basic pipeline coordination processes are in place, but not consistently executed.",
                "Automated tools manage pipeline coordination and ensure consistency.",
                "Integrated pipeline coordination processes across platforms enhance coordination.",
                "Predictive analytics optimize pipeline coordination strategies."
              ]
            },
            "D-347": {
              "id": "D-347",
              "name": "Hyperscaler Events",
              "controlQuestion": "How effectively do you participate in Hyperscaler events?",
              "benefitsAnalysis": "Participation in Hyperscaler events increases visibility and networking opportunities.",
              "levels": [
                "Participation in events is ad-hoc and lacks formal processes.",
                "Basic processes for participating in events are in place, but not consistently executed.",
                "Automated tools manage event participation and ensure consistency.",
                "Integrated event participation processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize event participation strategies."
              ]
            }
          }
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
          "domains": {
            "D-351": {
              "id": "D-351",
              "name": "Partner Onboarding",
              "controlQuestion": "How effectively are new partners onboarded?",
              "benefitsAnalysis": "Efficient onboarding improves partner satisfaction and reduces time to productivity.",
              "levels": [
                "Onboarding is ad-hoc and lacks formal processes.",
                "Basic onboarding processes are in place, but not consistently executed.",
                "Automated tools streamline onboarding and ensure consistency.",
                "Integrated onboarding processes across platforms enhance coordination.",
                "Continuous optimization of onboarding processes based on real-time data and feedback."
              ]
            },
            "D-352": {
              "id": "D-352",
              "name": "Partner Performance Management",
              "controlQuestion": "How effectively is partner performance measured and managed?",
              "benefitsAnalysis": "Clear metrics provide insights into partner performance and areas for improvement.",
              "levels": [
                "No formal metrics for measuring partner performance.",
                "Basic metrics are in place, but not consistently tracked.",
                "Automated tools track and report on partner performance.",
                "Integrated metrics across platforms provide comprehensive insights.",
                "Advanced analytics continuously optimize partner performance metrics."
              ]
            },
            "D-353": {
              "id": "D-353",
              "name": "Partner Relationship Management",
              "controlQuestion": "How effectively are partner relationships managed?",
              "benefitsAnalysis": "Effective relationship management enhances partner satisfaction and collaboration.",
              "levels": [
                "Relationship management is informal and inconsistent.",
                "Basic relationship management processes are in place, but not consistently executed.",
                "Automated tools manage partner relationships and ensure consistency.",
                "Integrated relationship management processes across platforms enhance coordination.",
                "Real-time data and analytics continuously improve relationship management strategies."
              ]
            },
            "D-354": {
              "id": "D-354",
              "name": "Partner Incentives",
              "controlQuestion": "How are partner incentives aligned with business goals?",
              "benefitsAnalysis": "Aligned incentives motivate partners and drive performance.",
              "levels": [
                "Incentives are informal and misaligned with business goals.",
                "Basic incentive plans are in place, but not consistently executed.",
                "Automated tools manage partner incentives and ensure consistency.",
                "Integrated incentive plans across platforms enhance alignment and effectiveness.",
                "Data-driven insights continuously optimize partner incentive strategies."
              ]
            }
          }
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
          "domains": {
            "D-361": {
              "id": "D-361",
              "name": "Marketing Support",
              "controlQuestion": "How effectively does the company support partners in marketing their offerings?",
              "benefitsAnalysis": "Effective marketing support increases brand visibility, market reach, and sales opportunities.",
              "levels": [
                "No formal partner marketing support. Efforts are ad-hoc and inconsistent.",
                "Basic marketing support is provided, but not consistently executed.",
                "Automated tools manage partner marketing activities and ensure consistency.",
                "Integrated marketing support across platforms enhances coordination and effectiveness.",
                "Data-driven insights continuously optimize partner marketing strategies."
              ]
            },
            "D-362": {
              "id": "D-362",
              "name": "Co-Marketing Campaigns",
              "controlQuestion": "How effectively are co-marketing campaigns executed?",
              "benefitsAnalysis": "Co-marketing campaigns enhance brand visibility and sales opportunities.",
              "levels": [
                "Co-marketing campaigns are informal and inconsistent.",
                "Basic co-marketing processes are in place, but not consistently executed.",
                "Automated tools manage co-marketing campaigns and ensure consistency.",
                "Integrated co-marketing processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize co-marketing strategies."
              ]
            },
            "D-363": {
              "id": "D-363",
              "name": "Brand Alignment",
              "controlQuestion": "How well is the partner’s brand aligned with the company’s brand?",
              "benefitsAnalysis": "Brand alignment enhances brand credibility and market reach.",
              "levels": [
                "Brand alignment is informal and inconsistent.",
                "Basic brand alignment processes are in place, but not consistently executed.",
                "Automated tools manage brand alignment and ensure consistency.",
                "Integrated brand alignment processes across platforms enhance coordination.",
                "Continuous optimization of brand alignment based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-371": {
              "id": "D-371",
              "name": "Training and Certification",
              "controlQuestion": "How effectively are partners trained and certified?",
              "benefitsAnalysis": "Effective training and certification improve partner performance and satisfaction.",
              "levels": [
                "Training and certification are informal and inconsistent.",
                "Basic training and certification programs are in place, but not consistently executed.",
                "Automated tools manage training and certification activities and ensure consistency.",
                "Integrated training and certification programs across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize training and certification strategies."
              ]
            },
            "D-372": {
              "id": "D-372",
              "name": "Resource Availability",
              "controlQuestion": "How effectively are resources made available to partners?",
              "benefitsAnalysis": "Availability of resources enhances partner performance and satisfaction.",
              "levels": [
                "Resource availability is informal and inconsistent.",
                "Basic resource availability processes are in place, but not consistently executed.",
                "Automated tools manage resource availability and ensure consistency.",
                "Integrated resource availability processes across platforms enhance coordination.",
                "Continuous optimization of resource availability based on real-time data and feedback."
              ]
            },
            "D-373": {
              "id": "D-373",
              "name": "Partner Portal",
              "controlQuestion": "How effectively is the partner portal managed?",
              "benefitsAnalysis": "An effective partner portal enhances partner engagement and satisfaction.",
              "levels": [
                "Partner portal management is informal and inconsistent.",
                "Basic partner portal management processes are in place, but not consistently executed.",
                "Automated tools manage the partner portal and ensure consistency.",
                "Integrated partner portal management processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize partner portal management."
              ]
            }
          }
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
          "domains": {
            "D-381": {
              "id": "D-381",
              "name": "Technical Support",
              "controlQuestion": "How effectively is technical support provided to partners?",
              "benefitsAnalysis": "Effective technical support improves partner satisfaction and reduces downtime.",
              "levels": [
                "Technical support is informal and inconsistent.",
                "Basic technical support processes are in place, but not consistently executed.",
                "Automated tools manage technical support activities and ensure consistency.",
                "Integrated technical support processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize technical support strategies."
              ]
            },
            "D-382": {
              "id": "D-382",
              "name": "Issue Resolution",
              "controlQuestion": "How effectively are partner issues resolved?",
              "benefitsAnalysis": "Effective issue resolution enhances partner satisfaction and reduces churn.",
              "levels": [
                "Issue resolution is informal and inconsistent.",
                "Basic issue resolution processes are in place, but not consistently executed.",
                "Automated tools manage issue resolution and ensure consistency.",
                "Integrated issue resolution processes across platforms enhance coordination.",
                "Continuous optimization of issue resolution strategies based on real-time data and feedback."
              ]
            },
            "D-383": {
              "id": "D-383",
              "name": "Knowledge Base",
              "controlQuestion": "How effectively is the knowledge base managed?",
              "benefitsAnalysis": "An effective knowledge base enhances partner self-service and reduces support costs.",
              "levels": [
                "Knowledge base management is informal and inconsistent.",
                "Basic knowledge base management processes are in place, but not consistently executed.",
                "Automated tools manage the knowledge base and ensure consistency.",
                "Integrated knowledge base management processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize knowledge base management."
              ]
            }
          }
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
          "domains": {
            "D-411": {
              "id": "D-411",
              "name": "Cloud Development Training",
              "controlQuestion": "What skills do developers have and what training takes place, to ensure optimal application development for the cloud?",
              "benefitsAnalysis": "Business is responding in real time to consumer demands requiring changes that application teams need the skills to respond to in order to meet this demand.   Having skills in cloud application development will allow the teams to meet this demand and align with business requirements.",
              "levels": [
                "Developers are aware of cloud native development, and frameworks like 12 factor cloud development and concepts behind architecting applications for the cloud. Developers may be trained in the use of service providers, use of containers and on specific platforms like Bluemix, Pivotal, GoogleApp Engine, etc. ",
                "Many developers take part in training on cloud native development and frameworks like 12 factor application develop and the concepts behind architecting applications for the cloud, including features of and how to utilize service providers, containers and cloud native application platforms (Bluemix, Pivotal, Google App Engine, etc.).",
                "Cloud native and cloud development training programs are mandatory and integrated into employee onboarding and annual performance assessments. \u00a0Application developers who are unskilled in cloud application development and who are unfamiliar with off-premises service offerings are atypical.\u00a0",
                "The enterprise's Human Resources and Talent teams review developer skills, ensuring that all developers or DevOps are trained and adequately skilled in cloud use and cloud native application development.",
                "The enterprise maintains a mapping of employees, business objectives, and technical capabilities. Individual learning plans are automatically generated, tailored to addressing skill gaps in ensuring an adequately skilled workforce. "
              ]
            },
            "D-412": {
              "id": "D-412",
              "name": "Team Organization Evolution",
              "controlQuestion": "What application development roles are defined and staffed?",
              "benefitsAnalysis": "Identifying and filling the appropriate application roles will ensure proper resources and skills are developed and available at the time they are needed.  This is a critical component of continuous availability and sustainability in utilizing native cloud capabilities in meeting the needs of the business.",
              "levels": [
                "Teams begin to organize around discrete products, aligning design, development and operations into a single  team. ",
                "DevOps teams have become the norm. Cloud developer roles are recognized and staffed into\u00a0teams across the enterprise. \n",
                "All teams are covered by one or more cloud application architects. DevOps is a consistently utilized organizational model. ",
                "Teams begin to move beyond DevOps to an integrated set of roles focused on delivering business outcomes. Architects, developers and administrators beginning to merge in a combined, hybrid role. ",
                "Application development roles have transcended coding to become composers, or integrators of services. Application components are selected from a library of building blocks."
              ]
            },
            "D-413": {
              "id": "D-413",
              "name": "Application Deployment Progress",
              "controlQuestion": "How are your applications organized?",
              "benefitsAnalysis": "Cloud based applications offer a multitude of benefits that not only include cost reduction but can also be a source of revenue generation.  Production applications are more resilient and agile when developed on cloud platforms and by implementing cloud application \"patterns\" which leverage the native capabilities of the \"cloud\" environment many of the benefits are built in.",
              "levels": [
                "Initial sets of dev and test instances of applications are deployed to off and on-premises services.  Some applications have been rationalized and are shared across multiple business processes. Portable application and services emerge, representing the first cases of infrastructure independence. \n\n",
                "Production applications are\u00a0running off-premises, \u00a0are designed for fault-tolerant and have self-healing capabilities. (monitor processes & services and restart failed instances based on service specific health checks). \u00a0The application ecosystem has been architected\u00a0with sufficient instrumentation to provide feedback at all times.\u00a0",
                "Applications have been modernized into a cloud aware architecture.\u00a0Use of container architectures are common. \u00a0Client interfaces are standardized providing an agnostic client experience regardless of the type (desktop, tablet, mobile). \u00a0All applications are provisioned as a service.\u00a0",
                "Public and private cloud services integrated with Internal applications. All applications are developed as cloud native, operating on a container architectures. Scale out and bursting across cloud providers is automated and in response to performance, availability or cost SLA boundaries. \n",
                "Everything is cloud-based. Applications are developed through a centralized and shared cloud capability.  Design, development, deployment and management of cloud services is seamlessly addressed do this single interface; providing visibility into the macro enterprise of a cloud service, with the ability to click into greater and greater details of component breakdown. "
              ]
            },
            "D-414": {
              "id": "D-414",
              "name": "Build and Deploy Automation",
              "controlQuestion": "How does application build and deploy occur?",
              "benefitsAnalysis": "Building applications in which automation and orchestration are integrated will bring a multitude of benefits including rapid deployment which increases time-to-market as well as the removal of manual processes which are error prone and siloed.",
              "levels": [
                "Individual teams begin leveraging automation in the build and deploy stages of their application lifecycle.",
                "Shared, automated build and deploy capabilities emerge and begin being leveraged by multiple teams to build and deploy their applications.",
                "One or more automated build and deploy capabilities are defined as an enterprise standards. Teams are expected to utilize these systems to build and deploy their applications. Additional degrees of testing and quality assurance are integrated into the build and deploy pipeline.",
                "Automated build and deployment of applications is a cross-enterprise norm. Applications that are built or deployed outside of this capability are identified to the build and deploy governance process.  ",
                "Build and deployment matured into a continuous integration or continuous deployment pipeline. "
              ]
            },
            "D-415": {
              "id": "D-415",
              "name": "Stateless Application Design",
              "controlQuestion": "How are applications architected and/or structured.",
              "benefitsAnalysis": "By applying \"Cloud Application Patterns\" into the application life cycle development many benefits can be realized.  Some of these are \"high availability\" and \"high resiliency\" which is native to many of the application patterns used in cloud development.  Another benefit is the benefits of \"SOA\" (Service Oriented Architecture) which is inherent in native cloud application development.",
              "levels": [
                "Applications and Services are designed as and operate in a stateless manner. They are composed of loosely coupled discoverable services leveraging one or more cloud services \u00a0(storage, compute, network). Management by automation, scripts or orchestration is used ad hoc across teams.",
                "Most applications leverage public/private cloud providers like AWS, Microsoft's Azure or Google's compute and storage services.  Applications are designed to monitor, retry and self heal, leveraging services provided by on and off-premises platforms. ",
                "Application are temporal, working in an environment where each link in the service tendency chain and are unaware of and unaffected by failure, start or elimination of dependent services or individual instances of those services. Applications are architected such that in-flight transactions across service chains are rolled forward/back appropriately regardless of the number or geographic distribution of service instances. ",
                "Application can be dynamically migrated across infrastructure providers without interruption of service or loss of transaction fidelity with the ability scale up and scale down in response to performance, availability and cost SLA targets.",
                "Application patterns are utilized to design applications which are instantiated by constructor services. Application developers  selected service building blocks to construct applications rather than code them. A high degree of automation removes most of the manual tasks that developers were traditional saddled with. "
              ]
            },
            "D-416": {
              "id": "D-416",
              "name": "API Standardization",
              "controlQuestion": "How do applications/services communicate with each other?",
              "benefitsAnalysis": "Communication between the applications and the services they consume are critical in attaining operational efficiency which is realized through enhanced application performance, maintaining a strong backup/disaster recovery plan, facilitating faster onboarding of new services, such as cloud-based applications, infrastructure and security, while at the same time making it easier and faster to identify cloud services established for short term or pilot projects.",
              "levels": [
                "Ad hoc and inconsistent use of REST APIs (HTTP and JSON serialization) are used for application to application / service to service interaction.",
                "App developers begin to coalesce around RESTFUL API standards for app/app, service/service interaction. Enterprises may implement API Management Solutions to ensure consistent API endpoints and monitoring of APIs. \u00a0",
                "The enterprise utilizes a shared API management solution, ensuring a standard set of REST APIs are consistently utilized for app/app, service/service interactions.",
                "Sufficient API governance has been instituted that exceptions are identified and evaluated and  remediated; resulting in consistent application and service communications. ",
                "Standard application integration RESTful APIs are dynamically included it all application construction. Architects and developers model connectivity between application services which are instantiated through factory services - generating the code and deploying the instances to a live, production environment. "
              ]
            },
            "D-417": {
              "id": "D-417",
              "name": "Cloud Native Development",
              "controlQuestion": "What technologies and frameworks are utilized to design and build applications?",
              "benefitsAnalysis": "Having an application framework that is cloud based is extremely beneficial when it comes to designing and building continuous availability solutions and maximizing resource utilization.  Cloud architecture ensures better options in dealing with risk, compliance and governance.  COE (Centers Of Excellence) are formed in which skills are developed across multiple verticals that align with a common global strategy in which efficiencies are realized and roadmaps align with business needs.",
              "levels": [
                "A few teams beginning utilizing cloud native application design frameworks and guides, such as 12 Factor Apps, ODCA Architecting Apps for the Cloud. Individual teams begin developing application and services as cloud native for platforms like Bluemix, Google App Engine, Pivotal. Container emerge to support cloud native applications. (e.g. Docker, Photon OS,  Netflix Karyon)",
                "Use of cloud native application/service designs are used more consistently across the enterprise. 12 Factor, ODCA Architecting Cloud Apps, and other frameworks are common, as is cloud native development for targeted platforms e.g.  Stackato, Bluemix, Google App Engine, Pivotal, etc. Containers are utilized for many application/service development projects. ",
                "Cloud native designs are documented and accepted as the standard application development methodology.\nCloud Native frameworks like 12 Factor, ODCA Cloud Apps are used as the norm. \u00a0Containers are utilized as the norm across application and service development.",
                "Any application development that does not follow the organizational standard (e.g. 12 factor) is identified and flagged for remediation. Application build manifestos are monitored for compliance to technology, framework and design standards and applications and services are tracked in a source of record, with associated metadata to support application technology governance activities.\u00a0",
                "Applications are modeled in an enterprise's single and shared cloud capability.  Adherence to framework and architectural standards is enforced within the tool making it impossible for an application to be instantiated outside of desired compliance. \nThis shared cloud capability encapsulates IaaS, PaaS, SaaS, IPaaS and other cloud capabilities, providing  a seamless  design, build, deploy and manage experience. "
              ]
            }
          }
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
          "domains": {
            "D-421": {
              "id": "D-421",
              "name": "Architect Cloud Training",
              "controlQuestion": "Have the Architects been trained in Cloud Services and Architectures?",
              "benefitsAnalysis": "By training the architects in Cloud Services Architecture, they can consciously make decisions and select appropriate patterns to leverage cloud for the enterprize",
              "levels": [
                "Based on personal interest, certain architects have some cloud knowledge.",
                "A group of cloud specialists exist in the enterprise, who focus on certain but not all projects.",
                "All of the Architects share a common framework and associated training regarding the enterprise approach to leveraging cloud services. ",
                "Architects across the enterprise are trained and evaluated against a common cloud architecture training program such as EMC Cloud Architect (EMCCA).  Employee performance assessments take these skills into account when determining performance ratings. ",
                "Individual cloud learning plans are integrated with tailored classes for employees in architecture roles. Performance assessments and career planning include cloud advanced cloud architectures, Hybrid IT architectures and transitionary architectures for moving to the cloud. "
              ]
            },
            "D-422": {
              "id": "D-422",
              "name": "Cloud Capability Integration",
              "controlQuestion": "Who is responsible for incorporating cloud service provider capabilities into architecture?",
              "benefitsAnalysis": "By pre-defining responsibility, the randomness of approach and occurrence is eliminated",
              "levels": [
                "Periodically, engineers, DevOps, systems administrators and architects will update architecture artifacts with cloud service provider capabilities. ",
                "It is common for engineers, architects and DevOps to update architectural artifacts with cloud service provider capabilities. ",
                "A standard framework such as TOGAF exists and is consistently used for updating architectural artifacts with cloud service provider capabilities.",
                "Updating architectural artifacts with cloud service provider capabilities is monitored and managed. Governance and periodic maturity assessments ensure compliance with this process.",
                "Current state architecture artifacts are dynamically generated from the data sources within the operating environment, representing a snapshot of the existing environment. Transitionary and future state architectures are generated by modeling increases in scale, increases in performance or cost optimizations. "
              ]
            },
            "D-423": {
              "id": "D-423",
              "name": "Cloud Deployment Design",
              "controlQuestion": "Do standard architectural designs exist to guide cloud based service deployments?",
              "benefitsAnalysis": "By pre-defining selected patterns, re-usable building blocks can be established and leveraged",
              "levels": [
                " Architectural designs are utilized on an ad hoc basis to guide cloud-based service deployments. ",
                " A foundational set of architectural designs exist and are often leveraged to guide cloud deployments. ",
                "\u00a0Cloud principles, architecture blueprints, requirements and use stories are well documented and utilized in a most cloud-based service deployments.\u00a0",
                "Services can be modelled online, leveraging existing standard building block architecture artifacts that are well documented. Utilization of this methodology is evangelized as the expected behavior for designing cloud-based service deployments. ",
                "Service components are modeled within the single set of tools that are also utilized for deploying and managing a highly automated and optimized cloud based ecosystem. \n"
              ]
            },
            "D-424": {
              "id": "D-424",
              "name": "Cloud Inclusion in Architectural Planning",
              "controlQuestion": "How does architectural planning consider cloud management tools?",
              "benefitsAnalysis": "The creation of a set of pre-defined re-usable building blocks, processes and tools reduces the workload considerably for ongoing development of business functions",
              "levels": [
                "Architectural planning includes cloud services within workflows, capability analysis and building block development but only on an ad hoc basis. ",
                "More often than not, architectural planning considers cloud services when developing workflows, capability analysis' and development of architectural building blocks. ",
                "Consideration of cloud services is a central part of architectural planning; representing consistently in workflows, capability models, architecture building blocks, standards and patterns. ",
                "Cloud service principles are a core element to architectural planning. Workflows, capability models, architectural building blocks, standards and patterns that do not consider cloud are flagged as exceptions and addressed. ",
                "Architectural planning is inherent to the cloud management system that the enterprise utilizes. Technologists are able to plan, implement and govern workflows from standardized cloud capabilities. "
              ]
            },
            "D-425": {
              "id": "D-425",
              "name": "Cloud Solution Design Consistency",
              "controlQuestion": "Are Architecture Processes in existence for Cloud based services?",
              "benefitsAnalysis": "By identifying the processes and assigning responsibility, a mandate is issued and doubt removed, thereby enabling governance and control",
              "levels": [
                "Cloud based solution design pursued at times but not consistently When carried out, cloud architecture is addressed differently by different teams. ",
                "Templates for cloud platforms exist and solution designs created for most cloud solutions. Some teams share solution designs across organizational boundaries but centralization or federation of designs has not been achieved. ",
                "Solution teams consistently create architectural documentation for cloud solutions. A centralized or federated collection of standard cloud architecture templates and processes are available. Team across the enterprise consistently start solution design from the core architecture processes and artifacts. ",
                "A centralized or federated set of processes are applied across the enterprise. \u00a0These processes ensure that cloud design review documentations exists, demonstrating compliance to or deviation from core cloud reference architectures, principles and standards.\u00a0",
                "Designing, engineering deploying and managing of cloud services have merged. These are accomplished through a single tool interface. Existence of operational metrics, used in conjunction with architecture governance and scoring, produce a multi-dimensional score for cloud implementations. "
              ]
            },
            "D-426": {
              "id": "D-426",
              "name": "Cloud Design Pattern Adoption",
              "controlQuestion": "Do Cloud Application Design & Development Patterns exist and are they utilized?",
              "benefitsAnalysis": "Having selected application design patterns for cloud helps developers to adhere to centrally defined concepts",
              "levels": [
                " applications are developed on cloud services, but continue to utilize traditional patterns.",
                "New application development leverages cloud design patterns; though a few exceptions continue to utilize traditional methodologies. ",
                "Application development leverages cloud services and cloud platforms and are always based on cloud design patterns. ",
                "Central and standardized resources are utilized for developing applications. This includes Paas, SaaS and Platform Integration as a Service. Core cloud application designs are utilized in all cases.",
                "Application design patterns are encapsulated into a single cloud platform. Application, integration and infrastructure are transparent as solution developers design, implement, deploy and management solutions through a single mechanism. "
              ]
            },
            "D-427": {
              "id": "D-427",
              "name": "Business Application Mapping",
              "controlQuestion": "Is the Business Application Landscape mapped to platforms?",
              "benefitsAnalysis": "By pre-defining landscapes for Business Applications, a clear set of policies and rules can be applied to all ongoing development",
              "levels": [
                "Landscape designs are utilized in an ad hoc fashion, often focused on infrastructure only. ",
                "Landscape design includes business applications, host cloud types, and interoperability standards requirements. ",
                "A complete target landscape is defined up to business applications including interfaces for partners, leveraging appropriate cloud elements for application lifecycle stages.",
                "Process modelling is performed to optimize the cloud based application deployments.",
                "All business applications are represented in a common, shared cloud management capability.  People, process and technology elements are mapped across the application middleware and infrastructure layers, and accessible through this common and shared capability. "
              ]
            },
            "D-428": {
              "id": "D-428",
              "name": "Cloud Building Block Development",
              "controlQuestion": "Are Standard Cloud Building Blocks Available?",
              "benefitsAnalysis": "The more standard building blocks that are available for reuse, the less that has to be developed, and the more efficient ongoing development and operations become",
              "levels": [
                "Teams develop cloud building blocks on an ad hoc basis.  When used, building blocks are manually developed/ integrated via the portal of the cloud service solution.",
                "Use of RESTful APIs emerge. Interfaces are programmatic and usable.\nA clearly defined set of standard interfaces exist for Cloud services and their use, and these are used in all instances, as the foundation for managed integration. ",
                "RESTFul APIs are a standard IT management methodology. The End user can use the interfaces without knowing of their existence. \nA set of standardized cloud environment management tools and interfaces exist.",
                "Services can be constructed with automated integration into supporting processes (ordering Portal, Charging, Monitoring). This is accomplished utilizing standard cloud building blocks. ",
                "Standard building blocks are selected through a design interface resulting in automated integration of additional cloud services. This design interface is the same interface that provides comprehensive development, deployment and management of cloud services. "
              ]
            }
          }
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
          "domains": {
            "D-429": {
              "id": "D-429",
              "name": "Big Data Technology Training",
              "controlQuestion": "Are employees trained on Big Data technologies?",
              "benefitsAnalysis": "Solid data management minimizes the potential for errors\u00a0and the damage caused by errors\nEstablish Controls so Data will not be a mess.\nEstablish a set of business rules that will determine who has access to your data. \u00a0\nDetermine what changes/additions/actions can be taken by which personnel\nDetermine Database will be the master database\nEnforces the creation and maintenance of a sound complete Data map, so data can be found quickly and easily\nEnables the Segmentation of data. This\u00a0is the process of “sectioning” your data so that you can use it more efficiently\nEstablish a Regular Data Hygiene Process\n\n",
              "levels": [
                "Employees are aware of big data technologies that have no formal training.",
                "Some employees are trained on Big Data technologies such as Hadoop, Vertica, Cloudera, Autonomy.",
                "All employees are trained on big data technologies. Employees are building applications using Big Data technologies such as Hadoop, Vertica, Cloudera, Autonomy. ",
                "The organization's Human Resources and Talent teams review developer skills, ensuring that all developers or DevOps are trained and adequately skilled in Big Data technologies and on canonical data messages, API accessibility, data encryption technology and API service brokerage technology.",
                "The enterprise maintains a mapping of employees, business objectives, and technical capabilities. Individual learning plans are automatically generated, tailored to addressing skill gaps in ensuring an adequately skilled workforce. "
              ]
            },
            "D-430": {
              "id": "D-430",
              "name": "Cloud Data Services Training",
              "controlQuestion": "Our employees trained on data services offered by public/private cloud providers and inherent to cloud platforms?",
              "benefitsAnalysis": "Solid data management minimizes the potential for errors\u00a0and the damage caused by errors\nEstablish Controls so Data will not be a mess.\nEstablish a set of business rules that will determine who has access to your data. \u00a0\nDetermine what changes/additions/actions can be taken by which personnel\nDetermine Database will be the master database\nEnforces the creation and maintenance of a sound complete Data map, so data can be found quickly and easily\nEnables the Segmentation of data. This\u00a0is the process of “sectioning” your data so that you can use it more efficiently\nEstablish a Regular Data Hygiene Process\n\n",
              "levels": [
                "Employees are aware of data services, but have no formal training. ",
                "Some employees receive training on data services such as Amazon Kinesis, S3, DynamoDB and Redshift / Google's BigQuery, Cloud Data Flow and Cloud Pub/Sub / Azure's SQL DB, Recommendations, etc. ",
                "All employees receive training on data services such as Amazon Kinesis, S3, DynamoDB and Redshift / Google's BigQuery, Cloud Data Flow and Cloud Pub/Sub / Azure's SQL DB, Recommendations, etc. Employee are building applications using cloud data services. ",
                "The enterprise's Human Resources and Talent teams review employee skills, ensuring that all developers or DevOps are trained and adequately skilled in the use of cloud data services.",
                "The enterprise maintains a mapping of employees, business objectives, and technical capabilities. Individual learning plans are automatically generated, tailored to addressing skill gaps in ensuring an adequately skilled workforce. "
              ]
            },
            "D-431": {
              "id": "D-431",
              "name": "Data Value Assessment",
              "controlQuestion": "Does the enterprise have an enterprise perspective on the value of data?",
              "benefitsAnalysis": "Solid data management minimizes the potential for errors\u00a0and the damage caused by errors\nEstablish Controls so Data will not be a mess.\nEstablish a set of business rules that will determine who has access to your data. \u00a0\nDetermine what changes/additions/actions can be taken by which personnel\nDetermine Database will be the master database\nEnforces the creation and maintenance of a sound complete Data map, so data can be found quickly and easily\nEnables the Segmentation of data. This\u00a0is the process of “sectioning” your data so that you can use it more efficiently\nEstablish a Regular Data Hygiene Process\n\n",
              "levels": [
                "Information value is determined on an ad hoc basis. When groups do perform valuation, each group performs it differently. Most information objects are treated as equal.",
                "The business value of information is assessed in more cases. Groups begin valuing information in a more consistent manner.",
                "The business value of information is consistently assessed. Metrics for measuring information business value are defined.",
                "Information storage and protection criteria are regularly re-assessed based on the business value of information. ",
                "Information is continually assessed in the course of doing business.  Governance and validation of business value result inconsistent valuation results. \n"
              ]
            },
            "D-432": {
              "id": "D-432",
              "name": "Data Access Control Implementation",
              "controlQuestion": "Are data access and availability controls in place?",
              "benefitsAnalysis": "Control gives one guaranteed compliance, lack of it will result in costly remedial action later",
              "levels": [
                "Limited data access and availability controls exist.  Implementation of controls is inconsistent and varies across groups. ",
                "Information sharing policies are defined, laying out specific data access and availability controls. ",
                "Data access and availability controls are consistently applied to information across the enterprise. Information\u00a0is shared across the enterprise within the boundaries of appropriate controls.\u00a0",
                "Information access and sharing policies are defined regularly reviewed on all managed information objects.",
                "Information access, data security controls and availability assurances are encapsulated within the enterprise's data ecosystem.  Access and availability are continually reviewed in the course of doing business.  "
              ]
            },
            "D-433": {
              "id": "D-433",
              "name": "Cloud Data Services Usage",
              "controlQuestion": "Do applications leverage cloud-based data services?",
              "benefitsAnalysis": "Native cloud capabilities can be realized when data access is managed and monitored.",
              "levels": [
                "A limited number of applications use of cloud-based data services. Use of this services is done ad hoc without consistency or standards. ",
                "More applications use cloud-based data services.  Groups opportunistically drive consistency and standardization in the use of the services.",
                "Applications systematically use cloud-based data services.  Service usage standards are broadly deployed and used by most groups. ",
                "The enterprise has achieved full use of cloud-based data services for its applications.",
                "Data services in support of applications are fully encapsulated behind access APIs. Data services can be scaled and changed without impact to the consuming applications. "
              ]
            },
            "D-434": {
              "id": "D-434",
              "name": "Data Management Criteria Application",
              "controlQuestion": "Does the enterprise have a defined set of criteria and controls” for managing data?",
              "benefitsAnalysis": "Having established criteria and controls is critical in large enterprises in order to establish standards and consistency with outside providers.",
              "levels": [
                "Criteria and controls for managing data are used on an ad hoc basis. Data management is inconsistent across groups. ",
                "A standard set of criteria and controls for managing data emerges. Groups opportunistically drive consistency and standardization in data management.  ",
                "The enterprise consistently utilizes criteria and controls for managing data.  Data management standards are defined and published. ",
                "The enterprise has implemented enterprise-wide governance for data management. ",
                "Criteria and controls for data management are seamlessly integrated into enterprise processes. Data management governance exceptions are rare."
              ]
            },
            "D-435": {
              "id": "D-435",
              "name": "Data Management Automation",
              "controlQuestion": "Are data management processes automated?",
              "benefitsAnalysis": "Solid data management minimizes the potential for errors  and the damage caused by errors\nEstablish Controls so Data will not be a mess.\nEstablish a set of Access  business rules that will determine who has access to your data.  \nDetermine what changes/additions/actions can be taken by which personnel\n\n",
              "levels": [
                "Data management requires human knowledge of data and location, management processes are manual and inconsistent. ",
                "Data management processes are documented.  Processes are manual, but used in more and more cases. ",
                "Data management policies are enforced based on correlated metadata. Manual processes are still required for management of data based on business metrics.",
                "Data management is realized by automated, policy-based processes. Feedback and correction is manual. Data management processes are based on storage and business metadata.",
                "Data management is automated as part of a closed loop system (no human intervention required)."
              ]
            },
            "D-436": {
              "id": "D-436",
              "name": "Data Management Framework Implementation",
              "controlQuestion": "Does the enterprise have a published data management framework that covers data at service providers or on cloud platforms? ",
              "benefitsAnalysis": "Solid data management minimizes the potential for errors  and the damage caused by errors\nEstablish Controls so Data will not be a mess.\nEstablish a set of Access  business rules that will determine who has access to your data.  \nDetermine what changes/additions/actions can be taken by which personnel\n\n",
              "levels": [
                "The enterprise has a documented data management framework. A basic set of data is collected for data housed on or processed by cloud platforms. Data management metadata is collected manually, by various methods across groups and departments. ",
                "The enterprise has a published data management framework. A non-formal set of employees emerge who take responsibility for collections of data housed on or processed by cloud platforms. These self-named stewards are responsible for collecting and providing information about data.",
                "The enterprise has a published data management framework. Data stewards are defined for data housed on or processed by cloud platforms.   Data stakeholders review data management reports and take corrective action within the boundaries of defined data management processes. ",
                "The enterprise has a published data management framework. Data stewards ensure that data management metadata is encoded within a CMDB/CMS, data warehouse, or location with Data-aaS ecosystem. This integrated set of metadata is encompassing of data house on or processed by cloud and traditional platforms. ",
                "The enterprise's data management framework is an integral part of its overall operating model. Monitoring of data management and compliance to rules and policies is integrated. Data triggers automated events when data management attribute thresholds are reached, triggering automated corrective action or alerting."
              ]
            },
            "D-437": {
              "id": "D-437",
              "name": "Enterprise Information Management",
              "controlQuestion": "Does the enterprise's information management processes span all domains i.e. Business, applications, Information/Data, Storage?",
              "benefitsAnalysis": "Solid data management minimizes the potential for errors  and the damage caused by errors\nEstablish Controls so Data will not be a mess.\nEstablish a set of Access  business rules that will determine who has access to your data.  \nDetermine what changes/additions/actions can be taken by which personnel\n\n",
              "levels": [
                "Data management processes exist but the enterprise lacks a storage service strategy, lacks a service lifecycle process, lacks service levels, and lacks service metrics.",
                "The enterprise introduces service design processes and functions into its information management processes. Event/fault monitoring and tracking for configuration management is manual. Information management processes management emerges.\u00a0",
                "The enterprise adds a storage service catalog, and service transition capacity management. Information lifecycle management reporting is defined and implemented across many groups. ",
                "The enterprise adds storage service portfolio and catalog to Configuration & Asset Management. These and previous capabilities are integrated into the tools, processes, data sources (CMDB) and storage platforms. All associated configuration items are in a central CMDB or are consistent across a federated set of CMDBs. ",
                "Information management is highly integrated with all relevant business, technology and data management processes, providing the enterprise a view of the entire operation at any given point in time. Automated processes are instantiated when threshold levels are reached, managing data in accordance with organizational policies. "
              ]
            },
            "D-438": {
              "id": "D-438",
              "name": "Enterprise Data Management",
              "controlQuestion": "How is your information organized, accessed, available and managed?",
              "benefitsAnalysis": "Determine which Data base will be the master database\nEnforces the creation and maintenance of a complete Data map, so data can be found quickly and easily\nEnables the the process of “sectioning”\u00a0or naming your data so that you can use it more efficiently\nEstablishes a Regular Data Hygiene Process\n\n",
              "levels": [
                "Information is stored by each application separately, creating data duplication and inconsistencies. ",
                "The enterprise identifies an enterprise data management function. This function identifies and opportunistically manages key master-data sources.\u00a0",
                "Multiple Business Intelligence, big data or data warehouse\u00a0systems are implemented, providing a defined and consistent view to critical business data. A central set of database technologies are implemented to support a scale out database architecture. \u00a0",
                "The enterprise defines canonical messages for use with a shared, central enterprise message capability. In addition to direct data access, data object access is enabled through APIs. ",
                "A single enterprise-wide logical data lake repository has been implemented for structured and unstructured data. Data is accessible via APIs and discoverable through API calls to a service brokerage catalog. Data is defined in a master data record catalog. Clear responsibility and ownership of all data objects is assigned and managed by data stewards. "
              ]
            },
            "D-439": {
              "id": "D-439",
              "name": "Data Extraction and Search Capabilities",
              "controlQuestion": "How has the enterprise enabled search and extract of data from your data repositories?",
              "benefitsAnalysis": "Determine which Data base will be the master database\nEnforces the creation and maintenance of a complete Data map, so data can be found quickly and easily\nEnables the the process of “sectioning”\u00a0or naming your data so that you can use it more efficiently\nEstablishes a Regular Data Hygiene Process\n\n",
              "levels": [
                "Ad hoc SQL queries are issued directly to data repositories. Data file are copied around the enterprise. Some groups utilize ETL/ELT tools to extract data. ",
                "The enterprise has achieved standardized SQL access to data repositories. Data files are still transferred around the enterprise, some common file shares emerge as standard locations. ETL/ELT tools are used on a group by group basis. ",
                "Standard SQL Search capability have been implemented that access collections of data repositories - i.e. mini data lakes / data ponds. Standard and shared ETL/ELT capabilities are utilized in 50% or greater of cases. 50%+ of file transfer happens to and from sanctioned and pre-configured data sinks. ",
                "Real-time access to data is available through standard, managed access points.  Semantic search engine capabilities are operational to support structured and unstructured data analysis. Standard ETL/ELT tools are used to access data through data APIs. ",
                "The enterprise has reached a state where on-premises data and data at public/private cloud providers are integrated for a seamless end user experience.  Data animation capabilities, advanced analytics and forecasting interface to a data lake through data service APIs.  All data access is automatically tracked for data residency, data quality, compliance and information lifecycle management in accordance to corporate requirements and policies."
              ]
            }
          }
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
          "domains": {
            "D-441": {
              "id": "D-441",
              "name": "AI/ML Adoption and Support",
              "controlQuestion": "Is Executive Management supporting investments and objectives relating to the use of AI/ML/DL in current and future cloud operations?",
              "benefitsAnalysis": "Leadership support of initiatives is a critical contributor to successful projects.",
              "levels": [
                "Awareness of the value of AI and ML has led to Management's support of efforts to achieve CMM Level 3 or greater in the Data and DevOps domains to establish a solid foundation of data access, automation and processes to ensure AI/ML capabilities can be layered on top of a solid foundation in the future.",
                "Management is able to see examples of AI/ML based capabilities on top of defined and systematic Operations capabilities. IT/Ops is able to demonstrate applied AI/ML in proof of concept environments. Management is supporting further implementation and inclusion of AI/ML capabilities in the IT/Ops roadmap.",
                "AI/ML intiatives are included in IT/Ops roadmaps. IT/Ops is delivering capabilities on the roadmap and adding AI/ML capabilities to the IT/Ops service catalogue. Goals for operations improvement are defined.",
                "Management has recognized improvements in cloud automation and operations due to the investments in applying AI/ML. IT/Ops is capturing quantitative metrics that demonstrate the business value of of AI/ML. Roadmaps now include the application of DL on operational data/logs to find valuable correlations for further improvement.",
                "Thought leadership, technical innovation, and contribution to FOSS projects are considered valuable to the business. Executive Management evangelizes the modern capabilities internally and to investors, and advocates continued investments as the ROI from the application of AI/ML/DL is effectively self-funding."
              ]
            },
            "D-442": {
              "id": "D-442",
              "name": "AI/ML Training and Expertise",
              "controlQuestion": "Do IT/Ops personnel and developers have training and/or experience in AI concepts, tools, and appropriate use cases? Alternatively: Are AI consultants available to supplement in house capabilities?",
              "benefitsAnalysis": "Artificial Intelligence and Machine Learning methodologies are complex. Determining how AI & ML fit into the needs of the business is best supported by a shared base of knowledge about the underlying mathematical concepts and understanding of use cases that are suitable to the different types of AI/ML techniques.",
              "levels": [
                "Some staff members are known to have basic conceptual AI knowledge. There is an understanding of which use cases are appropriate for various machine learning algorithms and neural network architectures.",
                "AI subject matter expertise and use of appropriate algorthims has been demonstrated in a small number of projects and use cases.",
                "Several projects have successfully demonstrated successful application of general AI, Machine Learning (ML), and/or Deep Learning (DL) in appropriate use cases.\n\nA larger center of excellence compentency has developed in the team. \n\nThis team is sharing its expertise with other organizations seeking to implement AI/ML.",
                "Multiple teams and multiple projects are consistently demonstrating subject matter expertise and appropriate use case application across multiple AI disciplines.\n\nTraining and certification programs are available to employees across multiple organizations.\n\nMetrics track employee usage of Data and AI platforms.",
                "Technical training focused on AI disciplines and use cases is incorporated into training aimed at the entire company's technical and technology management employees. The company's challenges and successes with applying AI to innovative use cases are evangelized internally and shared publically (blogs, presentations, books, etc.)"
              ]
            },
            "D-443": {
              "id": "D-443",
              "name": "Data-Driven Decision Making",
              "controlQuestion": "How does IT/Ops use data in decision-making related to cloud management, infrastructure utilization, capacity forecasting, and/or operations practices?",
              "benefitsAnalysis": "Many ML methodologies are ideal for pattern analysis, and modeling the right data about external change factors into measurable and actionable automation will provide significant return on investments.",
              "levels": [
                "Logging of some notable demand/utilization events and\u00a0corresponding cloud infrastucture utilization is occuring. Visuals, such as graphs, can be constructed for operators to estimate possible correlation of factors.",
                "Infrastructure utilization and capacity requirements can be forecast for cloud resources supporting a specific project or workload.\n\nOne or more methods for applying statistical analysis on historical utilization data exist and forecast results can be automated, scripted, or visualized proactively (not necessarily in real-time)",
                "Automated processes correlate active cloud resource utilization data and a few external change events in near real-time. \n\nMore advanced ML regression capabilites are applied to logged utilization and change event data.  Ops staff are alerted to make capacity decisions when forecast resources are expected to be over- or under-subscribed.",
                "Metrics focusing on the accuracy of AI/ML generated recommendations for cloud capacity decisions (adjustments) are in place. Some cloud capacity allocation events are automated based on confidence in the predictive utilization and consumption patterns.",
                "Most cloud operations change events are initiated by automated systems and processes. Prediction and detection of over-load or over-allocation conditions helps the business optimize on cloud spending, and the use of least cost cloud resources across multiple providers (hybrid cloud) is providing additional value."
              ]
            },
            "D-444": {
              "id": "D-444",
              "name": "Data Quality Assessment for AI/ML",
              "controlQuestion": "How does the organization assess the quality of data and the algorithms used to create useful information and results from it?",
              "benefitsAnalysis": "Failure to establish robust data quality and accessibility capabilities will stifle the ability for AI-development efforts to succeed. Investing in standardization of data models, quality assessment frameworks, and metrics definitions will provide clear and actionable telemetry for continuous improvement.",
              "levels": [
                "Institutional knowledge of which data sets are accessible and suitably structured for use with algorithms is limited. Measurements of data and algorithm quality are not quantitative. Examples may include anecdotal outcomes of projects or experiments.\u00a0",
                "A Data Management System is used as the system of record noting attributes that describe the structure, accessibility, and type of data available to the organization. AI algorithm developers update the system of record noting attributes useful for their AI projects. The system can be queried to reveal sets of data that match the requirements and/or capabilities of algorithms that are being developed.",
                "Most data sources and their associated attribute metadata are catalogued in the data management system. The organization tracks AI algorithm usage in the system and can measure the utilization of different data sets. Management has adopted a data quality assessment framework and set quantitative objectives for data quality based on reporting output from the data management system.",
                "There is widespread adoption of the data quality assessment framework in the organization. Metrics relating to data accuracy, accessibility, availability, and adherence to data model standards are defined and included in KPIs and management objectives for key stakeholders. \n",
                "The data quality assessment framework has been extended to measure costs and benefits of data processing algorithms including the measurement of real-time data processing capabilities and the improvements that algorithms produce including risk mitigation, attributable increases in revenue, and reductions in cost. The organization can compare the effectiveness and efficiency of different algorithms."
              ]
            },
            "D-445": {
              "id": "D-445",
              "name": "Machine Learning Systems Development",
              "controlQuestion": "How are machine learning systems developed, deployed to production, and standardized across the business?",
              "benefitsAnalysis": "Managing machine learning platforms as \"products\" is a useful approach to ensuring that IT consumers have a consistent experience adopting and deploying these capabilities.",
              "levels": [
                "Early adopters (typically Data Scientists) are independently using various AI/ML frameworks and tools to create predictive models. IT/Ops is starting to create deployment systems to facilitate deployment of predictive models, but there is no standard system in place.",
                "More predictive systems are being deployed, but each requires unique handling. Some groups have well documented processes, and they are collaborating with IT/Ops to help standardize. Working groups are bringing best practices together with new tooling and systems to facilitate deployment of predictive models.",
                "Cross-functional teams have adopted common tools. IT/Ops has provided a deployment workflow and supporting compliance frameworks to enable development, staging, and production deployment of predictive models. Results of training data have a standard repository where results can be compared.\n",
                "A platform providing shared training data pipelines is accessible to multiple teams. Multiple data sources (including structured data and data lakes) are instrumented in the platform and features can be defined and labeled for new and existing training models.\n\nQualitative metrics track data quality, platform usage, and predictive model accuracy.\n\n\n",
                "Data pipelines are largely shared and feature labeling in training data sets is normalized and shared across different organizations.\n\nModel development and deployment systems are providing rapid access for organizations to quickly iterate on new ideas and experiments.\n\nML capabilities are instrumented to perform experiments, design, and select the best fitting models and types of ML used on the machine learning platform. (i.e. ML is being used to improve the fit of models deployed on the ML platform)"
              ]
            },
            "D-446": {
              "id": "D-446",
              "name": "Data Access for AI/ML Tools",
              "controlQuestion": "Are AI, ML, and automation routines leveraging data from systems and platforms across the organization?\u00a0",
              "benefitsAnalysis": "Investments in well instrumented (accessible) data pipelines provides the greatest returns to the adoption and implementation of artificial intelligence and machine learning.",
              "levels": [
                "AI/ML tools and automation have access to single systems or limited respositories of data. E.g. predictive analysis has access to the central log respository only.\n\nTools to generate and label useful training data sets (features and corresponding results) are being explored.\u00a0",
                "AI/ML tools and automation have access to some key data sets across the organization. \n\nIntegration of data labeling tools is able to tag or capture data sets through data pipelines tied to a data lake, data warehouse, or external data repositories.\u00a0\n\nAI/ML routines mostly depend on structured data sets.",
                "AI/ML tools are integrated into an automation platform and several teams are processing data through the system. Access is through defined APIs, data interfaces, and integration tools (RESTFul API, database views, iPaaS, ETL, Service Bus)\n\nExploration to identify high value sets of features and algorithms requires significant iteration and experimentation.",
                "The AI/ML automation platform is instrumented into a majority of the organization's data repositories. Useful training data sets are available to multiple teams for experimentation and ML/DL training.\n\nData pipelines are specialized into near term/future predictive use cases and batch-oriented workflows. AI/ML algorithms are able to process unstructured data sets.",
                "Data management processes themselves are leveraging AI to maintain data quality and produce higher quality training data sets for use on the platform.\u00a0"
              ]
            },
            "D-447": {
              "id": "D-447",
              "name": "Automation and Machine Learning Capabilities",
              "controlQuestion": "To what degree has the company adopted and deployed automation and machine learning capabiltiies?",
              "benefitsAnalysis": "Using AI, ML, and DL techniques in automation can provide benefits which are easily measured as compared to systems with little to no AI sophistication. Organizations can choose to optimize on speed, costs, and/or quality and with experimentation find valuable methods to achieve desired results.",
              "levels": [
                "Teams are employing automation utilizing Chef,\u00a0Python, and other scripting to automate application deployment, infrastructure management, and testing. Intelligent automation efforts rely on explicit rules and conditions. No predictive learning capabilities are in use.",
                "Automation is common. AI and ML have been introduced to detect changes and build simple models. Some predictive automation is possible and enables classification of data and/or detection of anomalies in quantitative operations measurements.\n\nE.g. physical environmentals cluster analysis, baseline audio/visual recordings, temperature regression analysis.",
                "ML-based automation is revealed interesting correlations between multiple, disparate sets of data.\n\nExamples in data center operations include identification of infratructure threats or anomalies based on changes detected in monitors captures data from the physical world (e.g. on-premises audio recordings, cameras, thermometers, and/or vibration sensors).",
                "Sophisticated AI/ML systems are able to outperform human operators (as measured by accuracy and/or speed) in identifying root causes of anomalies or forecasting future needs or outcomes. \u00a0\n\nExamples in data center operations include prediction of mechanical equipment failure (server fans, hard drives, HVAC).\n\nExamples in business outcomes include real-time targeted advertising individually suited to detailed consumer profiles and\u00a0supply chain optimization.\u00a0",
                "Automation of increasingly complex tasks has driven the innovation of deep neural networks (DNNs) and other ML systems which continuously update the training models from the data the system is observing or acting in."
              ]
            },
            "D-448": {
              "id": "D-448",
              "name": "AI/ML Application to Cloud Management and Operations",
              "controlQuestion": "To what extent are AI/ML capabilities being appled to Cloud Management, Operations Intelligence, and/or Application Performance?",
              "benefitsAnalysis": "Achieving greater improvements in uptime and cost-optimization are increasingly expensive when your organization is already performing exceptionally well. Further application of AI and ML provides new footholds for Operations and Performance Management teams to close remaining gaps in operational excellence.",
              "levels": [
                "Experimentation with various AI/ML approaches is occuring, but few substantive results have surfaced.",
                "Algortihms are processing a mix of inputs, such as ops events (CIs), infrastructure logs, or application performance data,\u00a0and human operators are using recommendations from AI or ML based systems to make decisions more quickly and more accurately.",
                "Some workload interdependencies have been correlated by ML, and intelligence algorithms are able to specify causal events and diagnose\u00a0root causes of atypical performance and operations malfunctions. Human operators have gained confidence in relying on conclusions offered by AI/ML. ",
                "Several complex workload interdependencies have been \"machine learned\" and correlated to typical / expected patterns of workload demand (e.g. seasonal, time of day or week). Threatening operational conditions are anticipated, and corrective actions are automatically initated to prevent failure or undesirable performance. Uptime metrics and related KPIs show marked improvement that is attributable to the use of AI/ML.",
                "Pervasive analysis of workload performance, infrastructure costs, log infomation, and utilization trends is continuously performed by ML or DL neural networks. Increasingly automated cloud operations [capacity, cost-optimization, infrastructure optimization] are\u00a0handled by ML/DL algorithms. Price/performance optimization objectives are top priority."
              ]
            },
            "D-449": {
              "id": "D-449",
              "name": "AI Project Deployment and Data Alignment",
              "controlQuestion": "Is the deployment of AI projects and machine learning models in cloud aligned with data in cloud and/or on-premises?",
              "benefitsAnalysis": "Comprehensive analysis of the relationships between AI deployment, data, and data processing systems is essential to support organizatonal decision making, avoid negative impact on current production systems, and balance the performance of AI and performance of current critical production systems.",
              "levels": [
                "AI projects are developed in isolation and exist mostly on local workstations with some use of public cloud or on-premises environments. There is little consistency in making training data readily available to those experimenting with machine learning.\u00a0",
                "The data that is available for AI projects is generally non-production data, and it is isolated from production environments. The data can be readily transferred into the cloud. Real-time data from production systems has not been instrumented for use by AI projects.  ",
                "The data needed by AI projects is categorized and identified in CMDB. The relationships between data, data storage and productive systems are clearly identified. Approaches are defined to evaluate the impact of data transformation on other critical production systems and support of decision making of AI project deployment.",
                "The data needed by AI projects is categorized and identified in CMS/CMDB. Performance requirements (network and processing power) across connections between on-premises data and data in the cloud are simulated. Analysis of the impacts of data transfer between on- and off-premises systems is performed. The AI deployment decisions are made based on the results of those analyses.",
                "The relationships between AI, data, and data processing systems are well understood. Systems and AI projects with strong/heavy data interactions and dependencies are designed cohesively and are architected to be deployed together with data storage co-resident with the system."
              ]
            }
          }
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
          "domains": {
            "D-451": {
              "id": "D-451",
              "name": "PaaS Adoption and Utilization",
              "controlQuestion": "Do developers and operations employees think cloud first, or do they gravitate to traditional application development practices? ",
              "benefitsAnalysis": "The more the teams are aligned on the enterprise strategy and imperatives, the more consistent will be their development and achievement of those objectives",
              "levels": [
                "Some developers in the enterprise are skilled with and utilize PaaS platforms. ",
                "Developers across the enterprise understand the benefits of PaaS, are adept at using PaaS but ubiquitous use of PaaS is not the norm. ",
                "A preferred PaaS platform is identified and known to developers in the enterprise. Developers use this platform to construct applications in the majority of cases. ",
                "Performance targets are established for developers across the enterprise to ensure they are skilled in using PaaS. Developers know that any traditional application development, that which does not use a PaaS platform, is reported as exception to enterprise standard. ",
                "PaaS is the only way applications are developed. "
              ]
            },
            "D-452": {
              "id": "D-452",
              "name": "Reusable Service Elements in PaaS",
              "controlQuestion": "Are common code and service elements available for reuse?",
              "benefitsAnalysis": "Reuse of common shared elements enables more efficient operations, ongoing development, and enables reduced infrastructure below applications",
              "levels": [
                "Developers use virtualized infrastructure (or IaaS) to deploy non-cloud applications",
                "Developers use PaaS to develop new applications",
                "One set of re-usable service elements (including application code) are available, and can be used to generate new services, and are managed and maintained in a database available for developers.",
                "Developers leverage cloud application design patterns for development, with reuse of existing elements and are measured accordingly, focusing on development of the minority of new elements that are needed for any new system or service, and the majority is reuse of existing/pre-built elements principle.",
                "Use is made of defined PaaS rapid application development tools for developing all new applications such as mobile apps, prebuilt web sites (e.g. WordPress), big data apps (e.g. Hadoop), consistently"
              ]
            },
            "D-453": {
              "id": "D-453",
              "name": "Scaling Concepts in PaaS",
              "controlQuestion": "Is a scaling concept available?",
              "benefitsAnalysis": "Scaling can be effected in different ways - having a common concept enables consistent approaches, especially when leveraging shared PaaS elements",
              "levels": [
                "Services and capacity are manually scaled against defined high and low watermarks, to allocate sufficient change capacity for an agreed period",
                "Developers can scale their applications using self-service within metering limits.",
                "Application templates/examples support cloud application patterns  *(Note: See ODCA Paper on Architecting Applications for the Cloud)",
                "The PaaS platform auto-scales to increase PaaS capacity. Capacity planning automatically checks KPIs and trends against policies.",
                "Applications that land on PaaS have a way to auto scale using metadata & policies, within metering limits.  Applications monitor demand and automatic alerting is implemented."
              ]
            },
            "D-454": {
              "id": "D-454",
              "name": "PaaS Platform Standardization",
              "controlQuestion": "Are your platforms and middleware solutions available via your platform as a service?",
              "benefitsAnalysis": "By pre-defining PaaS services, the developers can leverage a common standard, and avoid creating their own",
              "levels": [
                "No Platforms as a Service are defined, although knowledge of options exists, and may be used incidentally within pockets across the enterprise. ",
                "Selected platforms have been identified, and are published for common reuse within the enterprise (e.g. Vcenter, KvM, Hyper-V)",
                "Selected standards are defined for development of cloud applications (so as to ensure interoperability and integration capability (e.g. Jboss, .net, Apache, IIS)",
                "A consolidation programme is defined with all common elements being consolidated to central standard instances of that functionality according to an ongoing schedule, aligned to the lifecycle updates of the various business applications",
                "The enterprise carries out ongoing rationalization of applications, database instances, and licenses. Shared DBMSs are in use, and all DBMSs are instantiated on the PaaS platform. "
              ]
            },
            "D-455": {
              "id": "D-455",
              "name": "Application Integration with PaaS",
              "controlQuestion": "How are your applications structured or integrated with PaaS as the foundational platform? ",
              "benefitsAnalysis": "Pre-defined PaaS elements enable consistent application development, and thereby consistent platform selection, orchestration and lifecycle management",
              "levels": [
                "Applications are integrated using Non-standard proprietary application integration, though they may make use of a PaaS solution for certain services. \n",
                "Applications structures are starting to use shared components for integration, including services built from PaaS platforms. e.g. an enterprise service bus is utilized for integration, services are built using shared application platform utilities, web and presentation use shared utilities and databases are shared through service interfaces. ",
                "Applications are often provisioned via platform as a service, from off or on-premises, through common portal. Integration, presentation and data services have moved from shared utilities to PaaS generated services. Enterprise Architecture contains patterns, samples and tutorials for constructing applications leveraging public and private PaaS platforms. \n",
                "Application portfolio reporting and management processes ensure that all applications and services are constructed from a PaaS platform, available as services using a restful API (SOA) integration mechanism. Auto provisioning of full application is available on demand and infrastructure is automatically scaled by the PaaS platform to meet performance requirements of the application. ",
                "All applications and services are provisioned via PaaS from off or on-premises, through a common portal. Infrastructure supporting these applications is highly optimized to meet performance, financial and compliance targets. PaaS provisioned applications are automatically pushed through a set of test suites, and upon passing the applications are deployed directly to production. Dynamic orchestration capabilities monitor the effectiveness of applications by leveraging A/B and muti variant testing against defined targets, ultimately resulting in an increase in the prior or next version of applications to meet business needs. \n"
              ]
            },
            "D-456": {
              "id": "D-456",
              "name": "PaaS Framework Adoption",
              "controlQuestion": "Is a PaaS framework such as Cloud Foundry or OpenShift available for the business to leverage for effective cloud application development?",
              "benefitsAnalysis": "Pre-defined PaaS elements enable consistent application development, and thereby consistent platform selection, orchestration and lifecycle management",
              "levels": [
                "Ad-hoc development",
                "There are defined security providers, messaging facilities, standards and interfaces in place to support ongoing application development",
                "Resilient design blueprints are available for common reuse of all key application elements",
                "Auto-scaling, uses pre-built or scripted elements like web services, message busses etc.",
                "Interoperable design elements call external security providers and message busses, enabling cross-cloud application design and development"
              ]
            },
            "D-457": {
              "id": "D-457",
              "name": "Database Services in PaaS",
              "controlQuestion": "Is a single DBaaS (database as a service) available on a central PaaS?",
              "benefitsAnalysis": "Reuse of a consistent DBMS enables consistent data management, security control, and cost efficiency",
              "levels": [
                "Different DBs exist, with some consolidation to shared environments",
                "Well defined standard DBs exist (e.g. MySQL), and they are used to host all new projects",
                "A Comprehensive multi-functional DB environment is established as a service and is in common general use catering for the various application needs (e.g. Oracle, MS SQL)",
                "Common Development tools and services are in consistent use (e.g. Mongo, Cassandra) to enable common application element reuse in the horizontal layer",
                "Common development tools and services are in consistent use to enable applications to scale up (e.g. Vertica, Autonomy)"
              ]
            },
            "D-458": {
              "id": "D-458",
              "name": "Development Tools and Components in PaaS",
              "controlQuestion": "Do defined resources exist for cloud implementations?",
              "benefitsAnalysis": "By offering the Developers and project teams a standard environment that meets their needs, infrastructure efficiency can be achieved regarding DR, Backup, licensing, commercial agreements, and ITSM integration.",
              "levels": [
                "Recognition exists of development tools and components, but is not reused consistently or documented formally. ",
                "Application stacks (web servers, application runtimes) are identified. Development frameworks are understood.",
                "Application design patterns are consistently applied, and common components are used in all development - cloud or non-cloud; Includes integration with IDE tools, common code repositories (e.g. GitHub); support for agile development, CI/CD  (continuous integration & development)",
                "Leveraging common components, different cloud platforms are utilized to appropriately support application elements, leveraging the scalability and resilience features of the cloud platform (for example active/passive or active/active operational patterns)",
                "Systems are deployed across clouds, and components interoperate seamlessly;  There is a way to deploy the same app to multiple clouds (hybrid peas)\nArchitectures are designed to be interoperable and open"
              ]
            }
          }
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
          "domains": {
            "D-461": {
              "id": "D-461",
              "name": "Cloud Technology Adoption in DevOps",
              "controlQuestion": "Is your \"traditional\" IT enterprise struggling to adapt to the new business demands to utilize Cloud Technologies?",
              "benefitsAnalysis": "Cloud computing, Agile development, and DevOps are interlocking parts of a strategy for transforming IT into a business adaptability enabler.  Without complete adoption of these two teams it would be nearly impossible to realize the capabilities that native cloud technology has to offer.",
              "levels": [
                "Some initial use of Cloud Technologies is used but it is limited to ad-hoc implementations and is not widely adopted.",
                "Development and Operations Teams are combining when there is a consistent opportunity to work together in implementing cloud based solutions but lacks full integration on an ongoing basis.",
                "Development and Operations Teams are now working as one DevOps group to define cloud based technology as it pertains to business needs and requirements.",
                "DevOps Teams are now working with managed services and measure consumption against demands to implement agile solutions.",
                "DevOps Teams are now optimized in their approach to using agile methodologies in addressing business needs and requirements."
              ]
            },
            "D-462": {
              "id": "D-462",
              "name": "DevOps Collaboration in Cloud Projects",
              "controlQuestion": "How well do your developers and operations group(s) collaborate on Cloud projects and initiatives?",
              "benefitsAnalysis": "By having DevOps teams work strategically on common platforms and methodologies enhanced collaboration can be realized resulting in cost savings and seamless enablement of native cloud capabilities.  Another advantage of integrating development and operations teams is to facilitate communication, collaboration, and integration to manage today’s rapidly changing business demands.",
              "levels": [
                "DevOps collaborates in \"ad-hoc\" cloud projects and there is poor communication and coordination between teams.",
                "DevOps teams now have managed communication and have some shared Decision making in repeatable Cloud Projects and look for opportunities to collaborate on Cloud Initiatives.",
                "DevOps teams now have defined capabilities that align with the systematic development of Cloud Applications and Projects.",
                "DevOps Teams are \"collaboration-based\" and have measured processes to identify bottlenecks and inefficiencies.",
                "There is effective knowledge sharing between the DevOps teams and individual empowerment that results in optimized Cloud Development."
              ]
            },
            "D-463": {
              "id": "D-463",
              "name": "Infrastructure as Code (IaC) Practices in DevOps",
              "controlQuestion": "Do your development and infrastructure teams operate functionally as a single unit?",
              "benefitsAnalysis": "Operating as a single unit encourages open communication and knowledge sharing which lead to faster development cycles and more efficient problem resolution. Further benefits stem from shared organizational objectives and foster an environment where developers have an understanding of infrastructure concepts, and infrastructure specialists understand more about application development.",
              "levels": [
                "Some development projects begin to experiment with IaC practices, but limited to select pilots. Separate development and infrastructure teams still modeled as consumer and provider.",
                "Members of development and infrastructure organizations are beginning to informally operate as cross-functional teams focused on specific projects which apply IaC practices.",
                "Formal cross-functional teams comprising developers and infrastructure services staff are allocated to projects under single direction.",
                "Infrastructure services teams are organized to align with development projects vs. traditional siloed IT services (i.e., compute, network, storage, etc.).\u00a0Cross-functional project teams are able to\u00a0achieve project deliverables more quickly than previously with siloed functions.",
                "Development and infrastructure functions exist within a single organizational unit, utilizing IaC methodologies as standard practice."
              ]
            },
            "D-464": {
              "id": "D-464",
              "name": "Cloud Application Development Skills",
              "controlQuestion": "Are the DevOps Teams developing the skills to enable native cloud capabilities to meet the demands of the business?",
              "benefitsAnalysis": "The benefits of DevOps having extensive skills in developing  cloud capabilities and methodologies into their application and development lifecycle capabilities helps to meet the changing demands of the business in meeting the requirements of speed to market in near real time.",
              "levels": [
                "The DevOps Teams have some initial skills in developing \"Cloud\" applications and capabilities.",
                "The DevOps Teams are developing consistently \"Cloud\" applications and services but they are opportunistic and not part of the development lifecycle.",
                "The DevOps teams have defined development processes and are using \"Cloud Pattern\" development in their application life cycle development.",
                "DevOps team now have measurable skills that align with business demands and enable the development of \"Cloud Aware\" application development.",
                "DevOps Teams are now optimized in their lifecycle development and have transitioned from an iterative waterfall approach to full agile methodology."
              ]
            },
            "D-465": {
              "id": "D-465",
              "name": "Cloud Technology Implementation in DevOps",
              "controlQuestion": "To what extent have cloud technologies been implemented within your development and operational processes in DevOps?",
              "benefitsAnalysis": "The benefits of DevOps having an extensive implementation of cloud capabilities and methodologies into their development and operations processes is realized by cost optimization and improved speed to market that aligns with business requirements.",
              "levels": [
                "The DevOps use of \"Cloud Technologies is unpredictable and uncontrolled, often as a reactive process to business demands.",
                "DevOps has developed processes to manage the use of \"Cloud Technologies,\" but it is nonstandard and lacks a defined approach.",
                "DevOps teams standardize on processes and facilitate communication and collaboration across the enterprise.",
                "DevOps Teams are developing \"Cloud Aware\" applications and have visibility and predictability of entire process quality and performance of the cloud development life cycle.",
                "All service and application deployments are automated with orchestration according to business requirements and process risk optimization is realized."
              ]
            },
            "D-466": {
              "id": "D-466",
              "name": "Development Methodologies for CSP Offerings",
              "controlQuestion": "How are development methodologies changing to support CSP offerings (i.e.: waterfall iterative vs. agile)?",
              "benefitsAnalysis": "Development methodologies need to change in order to realize the native capabilities that provide the business with an agile and responsive DevOps team that will align with CSP offerings.",
              "levels": [
                "There is initial use of CSP but it is for ad-hoc PoC and is limited.",
                "The CSP process is defined for Cloud Service Adoption and there is a developed repeatable methodology that is used.",
                "DevOps has a defined and systematic process in place that now supports CSP to meet the needs of the business and has implemented an agile methodology.",
                "DevOps support of CSP is now managed and measured.  DevOps is building \"Cloud Aware\" applications to meet the requirements of the business on all cloud platforms. ",
                "DevOps now collects metrics that are constantly gathered and used to incrementally improve the capabilities that enable an agile methodology to respond to the changing needs of the business."
              ]
            },
            "D-467": {
              "id": "D-467",
              "name": "Artifact Management and Deployment in DevOps",
              "controlQuestion": "Are the DevOps teams utilizing centralized version control and automated build scripts to manage artifacts and manual deployment for provisioning, automated unit testing and a separate testing environment?",
              "benefitsAnalysis": "Centralized version control for the DevOps Teams and \"no touch\" automation builds enable savings in resources and reduces errors.  Also time-to-market is greatly increased with continuous deployments of provisioned services and systems that enable the business to align its response to market changes in near real time.",
              "levels": [
                "The DevOps Teams have initial centralized version control and automated build scripts but still do not have any standardized management of artifacts.  They still rely on manual deployment however there are some ad-hoc environments provisioned through automation.  Test environments have initial integration into the \"Cloud\" lifecycle management.",
                "DevOps Teams now can\u00a0build and re-created from source control, management of build artifacts, automated deployment scripts, automated provisioning of environments, automatic integration tests, static code analysis, test coverage and analysis.",
                "DevOps Teams can now build pushbutton deployment and release of any releasable artifact to any environment, standard deployment process for all environments, automatic functional tests,\u00a0manual performance/security tests.",
                "DevOps Team priorities keeping code base deployable overdoing new work, builds are not left broken, 12 factor application design discipline.  Cloud Native application design philosophy based on Container design fully automatic acceptance tests, automatic performance/security test,  manual exploratory testing.",
                "There is now \"zero touch\" continuous deployments, no rollbacks always rolling forward, verify expected business value, defects found and fixed immediately.\n"
              ]
            },
            "D-468": {
              "id": "D-468",
              "name": "Continuous Delivery Implementation in DevOps",
              "controlQuestion": "Has DevOps implemented continuous delivery to meet the demands of the business?",
              "benefitsAnalysis": "When the DevOps Teams provide continuous availability the business applications built are designed to be \"always on\" and \"available\".  Administration and operations are greatly simplified and often inter-site DR is combined with continuous availability to provide the ability to tolerate the loss of infrastructure service, application or database services and still retain functional availability to the business.",
              "levels": [
                "The continuous delivery solution is infrequent and unreliable, releases are on an annual process.",
                "DevOps has a repeatable process for delivering continuous availability however it is painful and infrequent but reliable does have reliable monthly deployment of applications.",
                "DevOps is providing Infrequent but fully automated and reliable releases to support continuous availability in any environment with weekly deployments of applications. ",
                "DevOps Teams now provide orchestration deployments, blue-green deployments, frequent fully automated releases, deployment disconnected from releases and daily deployment of applications. ",
                "DevOps Teams now have the ability to release containers under developer control to production with hourly deployment of application features.\n"
              ]
            },
            "D-469": {
              "id": "D-469",
              "name": "Continuous Assessment of Cloud Capabilities",
              "controlQuestion": "Are the DevOps teams providing an extensive continuous assessment of cloud capabilities and functional alignment to the business?",
              "benefitsAnalysis": "When the DevOps Teams provide continuous assessment of capabilities and services that align with the business needs the benefits are that DevOps and the business are strategically aligned on a common road plan to deliver services to meet the needs of the business.",
              "levels": [
                "DevOps is providing some baseline process metrics, manual reporting, visible to report runner assessments but it is limited and ad-hoc.",
                "DevOps Teams measure the process of developing cloud capabilities with automatic reporting and transparency to the business.",
                "DevOps Teams produce automatic generation of release notes, pipeline traceability, reporting history and provide visibility to cross silo teams.",
                "DevOps team produce report trend analysis, real-time graphs on deployment pipeline metrics and measurable assessments of capabilities.",
                "DevOps teams are optimized for dynamic self-serve of information, customizable dashboards and cross reference across organizational boundaries."
              ]
            },
            "D-470": {
              "id": "D-470",
              "name": "DevOps Process Alignment with Business Goals",
              "controlQuestion": "What are the goals and perspectives concerning DevOps processes?",
              "benefitsAnalysis": "When DevOps Teams have defined process goals that align with business requirements and demands the realization of business agility and performance can be realized.",
              "levels": [
                "ITIL is introduced which provides a mechanism to establish process goals and alignment with business objectives.",
                "DevOps has implemented limited self-service features but responds to opportunities when goals are set and processes defined.",
                "DevOps has defined workload deployment choices and is developing systematic process goals that align with business needs.",
                "DevOps has managed workload deployment with measurable systematic process goals that align with business needs.",
                "DevOps has optimized their operations to maximize business process goals and development capabilities to meet business demands."
              ]
            },
            "D-471": {
              "id": "D-471",
              "name": "Cloud Technology Implementation for DevOps",
              "controlQuestion": "What extent of cloud technology has been implemented to support DevOps operation and development of Cloud models?",
              "benefitsAnalysis": "Having Cloud Technologies implemented to support the development and operations teams which align with the business models will provide tremendous value.",
              "levels": [
                "There is limited development of Cloud Technologies and Models but no implementation of automation or orchestration.",
                "DevOps implementation of Cloud Technology to support operations and development has siloed automation but no centralized infrastructure.",
                "DevOps has defined central automated processes across the application lifecycle, Infrastructure as Code implemented using a Cloud Foundry/OpenStack architecture.",
                "DevOps teams collect and analyze metrics of the automated processes and measure against business goals to align with operations and development cloud models.",
                "DevOps models now support self-service automation, self learning using analytics and self-remediation."
              ]
            },
            "D-472": {
              "id": "D-472",
              "name": "Cloud Architecture Definition for DevOps",
              "controlQuestion": "How is your cloud architecture defined to support DevOps?",
              "benefitsAnalysis": "Having a defined cloud architecture that both operations and develop adopt in order to align with business requirements and objectives is key to leveraging native capabilities and opportunities that are inherent in cloud technologies.",
              "levels": [
                "Cloud Architecture is implemented to address ad-hoc request and is manually-installed on a monolithic stack.",
                "DevOps implements the use of static templates such as AMI (Amazon Machine Image) to develop repeatable processes in deploying images to cloud environments.",
                "DevOps has a defined cloud architecture with mixed monolithic stacks and systematic use of templates and AMI.",
                "DevOps team manage distributed container-based solutions that are measurable which support the cloud architecture model.",
                "DevOps Teams have optimized service delivery utilizing lightweight services such as micro services that align with the agility and reuse models adopted by the business and support the adopted cloud-based architecture model."
              ]
            },
            "D-473": {
              "id": "D-473",
              "name": "Strategic Cloud Roadmap Alignment in DevOps",
              "controlQuestion": "Are the DevOps Teams aligned to a strategic \"Cloud\" roadmap?",
              "benefitsAnalysis": "Having a strategic \"Cloud Adoption\" roadmap that aligns with business objectives and demands will ensure that the needs and capabilities align at the time they are needed.",
              "levels": [
                "There is initial strategic use of a \"Cloud Roadmap\" but it is limited to ad-hoc implementations.",
                "Some \"Cloud Automation\" has been developed by the DevOps teams but is not part of a strategic \"Cloud \"roadmap.",
                "The DevOps Teams are defining the capabilities of \"Cloud Services\" and begin to develop tooling and automation needed for Cloud Service Adoption.",
                "The DevOps Teams now have a strategic \"Cloud\" roadmap that captures measurable capabilities that align with strategic business goals.",
                "The strategic \"Cloud\" roadmap is optimized to meet the demands of the business and align with the DevOps Teams capabilities."
              ]
            },
            "D-474": {
              "id": "D-474",
              "name": "Automation Technology Development in DevOps",
              "controlQuestion": "Is DevOps incorporating the development of automation technologies?",
              "benefitsAnalysis": "The development of automation is key to boosting the abilities and skills of the IT teams as well as realizing the capability of implementing faster and simpler deployments of virtual machines.",
              "levels": [
                "There is limited use of source code control and management with artifact and application release tooling but it is sporatic and preliminary.",
                "DevOps is releasing operations tooling such as provisioning and monitoring of the underlying infrastructure that addresses major business requirements.",
                "DevOps has a defined process for developing automation and orchestration services that is implemented to meet business requirements.",
                "DevOps is fully integrated with automation technologies and measures services and aligns to business requirements to manage services and capabilities as defined by the business.",
                "DevOps is now optimized to meet the demands of the business by implementing automation provisioning, automating network configurations, automation monitoring and performance management. "
              ]
            }
          }
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
          "domains": {
            "D-475": {
              "id": "D-475",
              "name": "Cloud Security Training and Awareness",
              "controlQuestion": "Are security training and awareness materials updated to include cloud security? ",
              "benefitsAnalysis": "Reduction in security gaps and lowered risks.  Data loss prevention.",
              "levels": [
                "There is no structured security awareness, the employees have their own understanding of security (by their own interest.) No alignment to the business objective is in place.",
                "Common communication on Cloud Security topics is in place. Training of employees includes cloud concepts and business objectives for cloud use, including governance aspects such as enterprise security.",
                "Consistent employee training occurs between all partners, suppliers, and employees of the enterprise. There is a common understanding of needed security aspects. The employees know how to handle a security alert.",
                "Cloud security training and certifications are required for all involved parties. Q-Gates assessments are done.",
                "Consistent Cloud security certification is aligned to the business objectives and required through the defined cloud eco-system of the corporation and its partners"
              ]
            },
            "D-476": {
              "id": "D-476",
              "name": "Organizational Structure for Secure Cloud Usage",
              "controlQuestion": "Has the organizational structure been updated to enable Secure Cloud Usage?",
              "benefitsAnalysis": "Processes run effectively according to business needs, enabling and advising/supporting the business in real-time to achieve its objectives.",
              "levels": [
                "Whoever encounters cloud security deals with it in their own way.",
                "The requirements for secure cloud usage according to the business objectives are defined. ",
                "Approval capability and roles are defined and operational\nsecurity measures are identified per role.\nResponsibility for cloud security is clearly assigned to the appropriate role players, as defined points of contact according to a structured process.",
                "Active planning occurs to minimize anomalies and deviations, and status is reviewed regularly and measurable by criteria .",
                "The organizational structure is providing tangible business benefits by working according to security risk ratings\u00a0and rapid adoption."
              ]
            },
            "D-477": {
              "id": "D-477",
              "name": "Security Training and Awareness",
              "controlQuestion": "Are Policies & Rules cloud aware? Cloud security governance and compliance.\n\n",
              "benefitsAnalysis": "More efficient IT and business operations,   \nReduced friction between security and technology teams,  \nIncreased agility.",
              "levels": [
                "Security requirements are analyzed and defined on a national basis. Cloud server location is known but does not call a need for action. Credentials for identity and accounting based on local server management with no process.",
                "A basic security concept is available for infrastructure and application layers per host country with clear defined authorization and access control. \nCredentials for identity and accounting based on basic processes.",
                "Integrated Security concept created. A set of appropriate standard Rules, Policies, Procedures, and Guidelines are defined and published for use when adopting Cloud Services around the world. Individual standards and legacy requirements are defined per country and are adopted including access management.\nDefined process and methods for identity and account management for all services.",
                "Monitoring against all policies and rules is established, and non-compliancy is automatically reported (e.g. audit). Country-specific requirements match company's corporate enterprise standards.\nUniform process for identity and account management for all services.",
                "The security concept is reviewed regularly to adopt changes and follow country specific changes. Automatic monitoring of access management.\nUniform process and centralized identity and account management for all services."
              ]
            },
            "D-478": {
              "id": "D-478",
              "name": "Security Frameworks and Application Classification",
              "controlQuestion": "Do clear security frameworks and requirements exist for each class of application?\n\n",
              "benefitsAnalysis": "Reduced risk and improved security posture, \nDecreased chance of compliance issues.",
              "levels": [
                "Use is made of original physical separation based individual system requirements. Applications are not classified by groups. ",
                "Applications are grouped and requirements are set for business critical systems.\u00a0",
                "Requirements are defined for all types of systems, application groups and all cloud provider's services are aligned to these categories.",
                "Clear security perimeters and controls are defined and extended to the different cloud services, according to defined security qualities and criteria.",
                "Fully integrated security framework exists capturing the whole cloud environment which is real-time monitored and integrated to the enterprise landscape."
              ]
            },
            "D-479": {
              "id": "D-479",
              "name": "Data Security and Privacy Concepts for Cloud",
              "controlQuestion": "Does a Data Security and/or Privacy Concept exist for Cloud?",
              "benefitsAnalysis": "Business processes run effectively according to business needs, enabling and advising/supporting the business in real time to achieve its objectives.",
              "levels": [
                "Data security and privacy concepts are not differentiated for cloud and are not yet defined.",
                "Data security and privacy is evaluated on a project level for cloud which includes data access, security, and transmissions. ",
                "Definition of data sensitivity groups, clear differentiation between privacy and security is set for an acceptable use in cloud service. Enterprise-wide rule set for data security and privacy regarding Cloud services. Audits are defined and done on regular basis.",
                "Documentation and assessment of data flows and security/privacy classes. Audits and assessments ensure data policy, including encryption facilities being available for data in transit and data at rest. ",
                "Active data loss/leakage prevention for cloud services. Automated KPI monitoring of data encryption during data hosting, interface management, and data transmission matching corporate strategy and policy. Automated audits ensure security and privacy concept implementation."
              ]
            },
            "D-480": {
              "id": "D-480",
              "name": "Security Reporting and Monitoring",
              "controlQuestion": "Is Security Reporting and Monitoring in place to be cloud aware?",
              "benefitsAnalysis": "Improved Cloud security and cloud governance operations,  \nImproved security and decreased risk.",
              "levels": [
                "Reporting is based on what lies within the corporate perimeter, without interfaces or defined data from external systems. ",
                "Business systems are categorized with system and data protection parameters per 'tier'.",
                "Consistent measurement and reporting of Cloud systems is defined, and reports are generated.",
                "Security data is generated by the monitoring and control systems, aggregated into KPIs and leveraged by operating governance bodies across the enterprise. ",
                "Real-time information flows across all participating service environments, supporting a continuous governance environment. "
              ]
            },
            "D-481": {
              "id": "D-481",
              "name": "Security Tooling for Cloud-Based Services",
              "controlQuestion": "Is Security Tooling updated for Cloud-based services?",
              "benefitsAnalysis": "Improved security posture and reduced risk, \nImproved security and risk intelligence.",
              "levels": [
                "Security tooling is connected on an ad hoc basis and only to systems located within the enterprise network perimeter.",
                "Security tools are used more consistently with cloud-based platforms. Use of standards such as SAML and CDMI increases. ",
                "Tooling exists and is integrated for SSO, SIEM across cloud and non-cloud based systems. \nAll Cloud services use the same ITIL and Security tooling feeding common databases / data warehouses.",
                "Security tooling exists to automate the deployment of the related rules and policies for deployment of all systems and services. ",
                "Continuous stream analysis and other advanced security analysis techniques drive automated gating and enforcement of security policy. These capabilities are consistently applied across all cloud services."
              ]
            },

            "D-482": {
              "id": "D-482",
              "name": "Compliance and Security Enforcement Technology",
              "controlQuestion": "What is the current state of security Enforcement technology?",
              "benefitsAnalysis": "By having Security enforcement technology in place, one is in  a better position to proactively track active deployment activity and prevent the need for later remediation activity.",
              "levels": [
                "Mechanisms (process & technology) for application and IT controls are in place to demonstrate compliance to government regulations (e.g. SOX), privileged security access is controlled. ",
                "Full OSI level Intrusion Protection, Application intrusion testing, and monitoring are in place. Standardized Security policies enforced across business units application proactive security testing.",
                "Mechanisms (process & technology) for continuous compliance to government regulation (e.g. SOX). Network Packet security inspection. Consolidated security incident aggregation. Single sign on access and common security is\u00a0a gateway for all off-premises services and mobile access. Standardized Security policies enforced across Business. Security Breach pattern detection on all items in CMDB.",
                "Mechanisms (process & technology) for application and IT controls are in place that are able to be changed rapidly. Role-based Identity management. Able to conduct Cloud Security Alliance audits. ",
                "Automated Threat response. Real-time email monitoring for intellectual property or critical information theft."
              ]
            }
          }
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
          "domains": {
            "D-483": {
              "id": "D-483",
              "name": "Cost Visibility and Allocation",
              "controlQuestion": "How accurately can you track and allocate cloud costs to specific teams, products, or projects?",
              "benefitsAnalysis": "Accurate cost allocation provides visibility, drives accountability, and enables precise showback or chargeback, leading to more cost-conscious behavior.",
              "levels": [
                "Cloud costs are a single, opaque bill with no detailed breakdown by team or service.",
                "Basic tagging is used inconsistently, allowing for a rough allocation of major costs.",
                "A comprehensive and enforced tagging strategy is in place. Automated tools are used to generate cost allocation reports.",
                "A formal showback or chargeback model is implemented, making teams directly accountable for their cloud consumption.",
                "Real-time, granular cost visibility is available to all stakeholders. AI is used to automatically tag resources and identify unallocated costs."
              ]
            },
            "D-484": {
              "id": "D-484",
              "name": "Cost Optimization",
              "controlQuestion": "What processes are in place to continuously identify and implement cloud cost savings?",
              "benefitsAnalysis": "A systematic approach to cost optimization reduces waste and lowers the total cost of ownership (TCO), maximizing the ROI of the cloud.",
              "levels": [
                "Cost optimization is reactive, typically happening only when budgets are exceeded.",
                "Manual efforts are made to find savings, such as periodically deleting unused resources or stopping idle instances.",
                "Automated tools are used to provide rightsizing recommendations. Reserved Instances or Savings Plans are purchased to get discounts.",
                "Optimization is a continuous, automated process. Workloads are architected for cost-efficiency using concepts like auto-scaling and serverless.",
                "AI-driven platforms continuously optimize costs by dynamically adjusting resources, selecting spot instances, and automating commitment purchases based on predictive analytics."
              ]
            },
            "D-485": {
              "id": "D-485",
              "name": "Forecasting and Budgeting",
              "controlQuestion": "How accurately can you forecast cloud spending and manage budgets?",
              "benefitsAnalysis": "Accurate forecasting and budgeting prevent cost overruns and enable better financial planning and strategic investment decisions.",
              "levels": [
                "Budgeting is based on guesswork with little historical data. Forecasts are consistently inaccurate.",
                "Budgets are set annually based on past spending, with little ability to adapt to changes.",
                "Forecasting is done quarterly using cloud provider tools and trend analysis. Budget alerts are configured to notify teams of potential overruns.",
                "Forecasting models incorporate business drivers and product roadmaps. Teams are actively involved in setting and managing their own budgets.",
                "AI-powered forecasting provides highly accurate, real-time predictions. Budgets are managed dynamically, with automated actions to stay on track."
              ]
            },
            "D-486": {
              "id": "D-486",
              "name": "FinOps Culture and Governance",
              "controlQuestion": "How is cost accountability embedded into the engineering and product culture?",
              "benefitsAnalysis": "A strong FinOps culture ensures that cost is a key consideration in all architectural and development decisions, driving efficiency by design.",
              "levels": [
                "Engineers have no visibility into the cost of the infrastructure they provision.",
                "Cost reports are shared periodically, but there is no direct accountability for engineers.",
                "Cost metrics are included in engineering dashboards. Cost impact is a required part of design reviews.",
                "A central FinOps team collaborates with engineering, finance, and product teams to establish best practices and governance.",
                "Every engineer is empowered with tools and data to make real-time, cost-aware decisions. Cost efficiency is a core KPI for engineering teams."
              ]
            }
          }
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
        "C180": {
          "id": "C180",
          "name": "Customer Success",
          "controlQuestion": "How effectively are customers engaged to ensure their success?",
          "benefitsAnalysis": "Effective customer engagement improves customer retention and satisfaction.",
          "levels": [
            "Customer engagement is informal and inconsistent.",
            "Basic engagement processes are in place, but not consistently executed.",
            "Automated tools manage customer engagement activities and ensure consistency.",
            "Integrated engagement processes across platforms enhance coordination.",
            "Real-time data and analytics continuously optimize customer engagement strategies."
          ],
          "domains": {
            "D-531": {
              "id": "D-531",
              "name": "Customer Engagement",
              "controlQuestion": "How effectively are customers engaged to ensure their success?",
              "benefitsAnalysis": "Effective customer engagement improves customer retention and satisfaction.",
              "levels": [
                "Customer engagement is informal and inconsistent.",
                "Basic engagement processes are in place, but not consistently executed.",
                "Automated tools manage customer engagement activities and ensure consistency.",
                "Integrated engagement processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize customer engagement strategies."
              ]
            },
            "D-532": {
              "id": "D-532",
              "name": "Success Metrics",
              "controlQuestion": "How are customer success metrics measured and managed?",
              "benefitsAnalysis": "Clear metrics provide insights into customer success and areas for improvement.",
              "levels": [
                "No formal metrics for measuring customer success.",
                "Basic metrics are in place, but not consistently tracked.",
                "Automated tools track and report on customer success metrics.",
                "Integrated metrics across platforms provide comprehensive insights.",
                "Advanced analytics continuously optimize customer success metrics."
              ]
            },
            "D-533": {
              "id": "D-533",
              "name": "Renewal Management",
              "controlQuestion": "How effectively are customer renewals managed?",
              "benefitsAnalysis": "Effective renewal management improves customer retention and revenue.",
              "levels": [
                "Renewal management is informal and inconsistent.",
                "Basic renewal processes are in place, but not consistently executed.",
                "Automated tools manage renewal activities and ensure consistency.",
                "Integrated renewal processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize renewal strategies."
              ]
            },
            "D-534": {
              "id": "D-534",
              "name": "Customer Advocacy",
              "controlQuestion": "How effectively are customers turned into advocates?",
              "benefitsAnalysis": "Effective customer advocacy improves brand reputation and customer loyalty.",
              "levels": [
                "Customer advocacy is informal and inconsistent.",
                "Basic advocacy processes are in place, but not consistently executed.",
                "Automated tools manage advocacy activities and ensure consistency.",
                "Integrated advocacy processes across platforms enhance coordination.",
                "Continuous optimization of advocacy strategies based on real-time data and feedback."
              ]
            }
          }
        },
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
          "domains": {
            "D-502": {
              "id": "D-502",
              "name": "Issue Resolution",
              "controlQuestion": "How effectively are customer issues resolved?",
              "benefitsAnalysis": "Effective issue resolution improves customer satisfaction and reduces churn.",
              "levels": [
                "Issue resolution is ad-hoc and lacks formal processes.",
                "Basic issue resolution processes are in place, but not consistently executed.",
                "Automated tools manage issue resolution and ensure consistency.",
                "Integrated issue resolution processes across platforms enhance coordination.",
                "Continuous optimization of issue resolution strategies based on real-time data and feedback."
              ]
            },
            "D-503": {
              "id": "D-503",
              "name": "Knowledge Base",
              "controlQuestion": "How effectively is the knowledge base managed?",
              "benefitsAnalysis": "An effective knowledge base enhances customer self-service and reduces support costs.",
              "levels": [
                "Knowledge base management is informal and inconsistent.",
                "Basic knowledge base management processes are in place, but not consistently executed.",
                "Automated tools manage the knowledge base and ensure consistency.",
                "Integrated knowledge base management processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize knowledge base management."
              ]
            },
            "D-504": {
              "id": "D-504",
              "name": "Customer Training",
              "controlQuestion": "How effectively are customers trained on the product?",
              "benefitsAnalysis": "Effective training improves customer satisfaction and product usage.",
              "levels": [
                "Customer training is informal and inconsistent.",
                "Basic training programs are in place, but not consistently executed.",
                "Automated tools manage customer training activities and ensure consistency.",
                "Integrated training programs across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize customer training strategies."
              ]
            },
            "D-505": {
              "id": "D-505",
              "name": "Customer Feedback",
              "controlQuestion": "How effectively is customer feedback collected and utilized?",
              "benefitsAnalysis": "Effective feedback collection and utilization improve product and service quality.",
              "levels": [
                "Feedback collection is ad-hoc and lacks formal processes.",
                "Basic feedback collection processes are in place, but not consistently executed.",
                "Automated tools manage feedback collection and ensure consistency.",
                "Integrated feedback collection processes across platforms enhance coordination.",
                "Continuous optimization of feedback collection and utilization based on real-time data and insights."
              ]
            }
          }
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
          "domains": {
            "D-511": {
              "id": "D-511",
              "name": "Troubleshooting",
              "controlQuestion": "How effectively are technical issues troubleshooted and resolved?",
              "benefitsAnalysis": "Effective troubleshooting reduces downtime and improves customer satisfaction.",
              "levels": [
                "Troubleshooting is ad-hoc and lacks formal processes.",
                "Basic troubleshooting processes are in place, but not consistently executed.",
                "Automated tools manage troubleshooting activities and ensure consistency.",
                "Integrated troubleshooting processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize troubleshooting strategies."
              ]
            },
            "D-512": {
              "id": "D-512",
              "name": "Technical Documentation",
              "controlQuestion": "How effectively is technical documentation managed and maintained?",
              "benefitsAnalysis": "Effective documentation improves customer self-service and reduces support costs.",
              "levels": [
                "Technical documentation is informal and inconsistent.",
                "Basic documentation processes are in place, but not consistently executed.",
                "Automated tools manage technical documentation and ensure consistency.",
                "Integrated documentation processes across platforms enhance coordination.",
                "Continuous optimization of technical documentation based on real-time data and feedback."
              ]
            },
            "D-513": {
              "id": "D-513",
              "name": "Support Escalation",
              "controlQuestion": "How effectively are support escalations managed?",
              "benefitsAnalysis": "Effective escalation management improves issue resolution and customer satisfaction.",
              "levels": [
                "Support escalation is ad-hoc and lacks formal processes.",
                "Basic escalation processes are in place, but not consistently executed.",
                "Automated tools manage support escalations and ensure consistency.",
                "Integrated escalation processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize escalation strategies."
              ]
            },
            "D-514": {
              "id": "D-514",
              "name": "Remote Support",
              "controlQuestion": "How effectively is remote support provided to customers?",
              "benefitsAnalysis": "Effective remote support reduces downtime and improves customer satisfaction.",
              "levels": [
                "Remote support is ad-hoc and lacks formal processes.",
                "Basic remote support processes are in place, but not consistently executed.",
                "Automated tools manage remote support activities and ensure consistency.",
                "Integrated remote support processes across platforms enhance coordination.",
                "Continuous optimization of remote support based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-521": {
              "id": "D-521",
              "name": "Implementation",
              "controlQuestion": "How effectively are implementation services delivered?",
              "benefitsAnalysis": "Effective implementation services improve customer satisfaction and product adoption.",
              "levels": [
                "Implementation services are ad-hoc and lack formal processes.",
                "Basic implementation processes are in place, but not consistently executed.",
                "Automated tools manage implementation activities and ensure consistency.",
                "Integrated implementation processes across platforms enhance coordination.",
                "Continuous optimization of implementation services based on real-time data and feedback."
              ]
            },
            "D-522": {
              "id": "D-522",
              "name": "Customization",
              "controlQuestion": "How effectively are customization services delivered?",
              "benefitsAnalysis": "Effective customization services enhance product value and customer satisfaction.",
              "levels": [
                "Customization services are ad-hoc and lack formal processes.",
                "Basic customization processes are in place, but not consistently executed.",
                "Automated tools manage customization activities and ensure consistency.",
                "Integrated customization processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize customization services."
              ]
            },
            "D-523": {
              "id": "D-523",
              "name": "Consulting",
              "controlQuestion": "How effectively are consulting services delivered?",
              "benefitsAnalysis": "Effective consulting services improve customer satisfaction and product value.",
              "levels": [
                "Consulting services are ad-hoc and lack formal processes.",
                "Basic consulting processes are in place, but not consistently executed.",
                "Automated tools manage consulting activities and ensure consistency.",
                "Integrated consulting processes across platforms enhance coordination.",
                "Continuous optimization of consulting services based on real-time data and feedback."
              ]
            },
            "D-524": {
              "id": "D-524",
              "name": "Project Management",
              "controlQuestion": "How effectively are professional services projects managed?",
              "benefitsAnalysis": "Effective project management improves service delivery and customer satisfaction.",
              "levels": [
                "Project management is ad-hoc and lacks formal processes.",
                "Basic project management processes are in place, but not consistently executed.",
                "Automated tools manage project management activities and ensure consistency.",
                "Integrated project management processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize project management strategies."
              ]
            }
          }
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
          "domains": {
            "D-535": {
              "id": "D-535",
              "name": "Health Scoring and Monitoring",
              "controlQuestion": "How is customer health measured and monitored to identify risks and opportunities?",
              "benefitsAnalysis": "A data-driven health score provides early warnings for at-risk customers and highlights opportunities for expansion, enabling proactive engagement.",
              "levels": [
                "Customer health is based on the CSM's intuition or anecdotal feedback.",
                "A basic health score is calculated using a few simple metrics like login frequency or support tickets.",
                "The health score is automated and incorporates multiple data points, including product usage, survey responses, and support interactions.",
                "Health scores are segmented by customer type and journey stage. Trends in health scores are tracked over time to identify patterns.",
                "Predictive health scoring uses machine learning to forecast future customer health and identify the key factors driving it."
              ]
            },
            "D-536": {
              "id": "D-536",
              "name": "Proactive Engagement and Outreach",
              "controlQuestion": "How are customer success managers proactively engaging with customers to drive value?",
              "benefitsAnalysis": "Proactive engagement builds stronger relationships, ensures customers are adopting key features, and helps them achieve their goals, leading to higher retention.",
              "levels": [
                "Engagement is purely reactive, driven by customer support requests or escalations.",
                "CSMs conduct scheduled check-ins (e.g., quarterly business reviews) with key accounts.",
                "Automated playbooks trigger CSM engagement based on specific events or changes in customer health.",
                "Engagement is personalized based on the customer's specific goals, usage patterns, and journey stage.",
                "AI recommends the next best action for CSMs to take with each customer, optimizing the timing and content of every interaction."
              ]
            },
            "D-537": {
              "id": "D-537",
              "name": "Value Realization and Adoption",
              "controlQuestion": "How do you ensure customers are adopting the product and realizing its full value?",
              "benefitsAnalysis": "Focusing on value realization ensures customers achieve their desired business outcomes, which is the ultimate driver of loyalty and advocacy.",
              "levels": [
                "Onboarding is focused on technical setup with little discussion of business value.",
                "Success plans are created with customers to document their goals, but progress is not systematically tracked.",
                "Product adoption metrics are tracked for key features. CSMs provide targeted training to drive adoption.",
                "Value is quantified and regularly communicated to the customer through business reviews and value realization reports.",
                "The platform itself provides real-time insights and recommendations to users on how to achieve more value."
              ]
            },
            "D-538": {
              "id": "D-538",
              "name": "Escalation Management",
              "controlQuestion": "What is the process for managing and resolving at-risk customer escalations?",
              "benefitsAnalysis": "A well-defined escalation process ensures that critical customer issues are addressed quickly and effectively by the right people, preventing churn.",
              "levels": [
                "There is no formal escalation process; issues are handled in an ad-hoc manner.",
                "A basic process exists for flagging at-risk accounts to management.",
                "Clear criteria for escalations are defined, with documented playbooks and cross-functional owners.",
                "An executive sponsorship program is in place for high-priority escalations.",
                "Predictive analytics identify potential escalations before they occur. Automated workflows are triggered to coordinate a cross-functional response."
              ]
            }
          }
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
          "domains": {
            "D-541": {
              "id": "D-541",
              "name": "Threat Detection",
              "controlQuestion": "How effectively are security threats detected?",
              "benefitsAnalysis": "Effective threat detection protects against security breaches and data loss.",
              "levels": [
                "Threat detection is ad-hoc and lacks formal processes.",
                "Basic threat detection processes are in place, but not consistently executed.",
                "Automated tools manage threat detection activities and ensure consistency.",
                "Integrated threat detection processes across platforms enhance coordination.",
                "Continuous optimization of threat detection based on real-time data and threat intelligence."
              ]
            },
            "D-542": {
              "id": "D-542",
              "name": "Incident Response",
              "controlQuestion": "How effectively are security incidents responded to?",
              "benefitsAnalysis": "Effective incident response minimizes the impact of security breaches.",
              "levels": [
                "Incident response is ad-hoc and lacks formal processes.",
                "Basic incident response processes are in place, but not consistently executed.",
                "Automated tools manage incident response activities and ensure consistency.",
                "Integrated incident response processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize incident response strategies."
              ]
            },
            "D-543": {
              "id": "D-543",
              "name": "Vulnerability Management",
              "controlQuestion": "How effectively are vulnerabilities managed?",
              "benefitsAnalysis": "Effective vulnerability management reduces security risks.",
              "levels": [
                "Vulnerability management is ad-hoc and lacks formal processes.",
                "Basic vulnerability management processes are in place, but not consistently executed.",
                "Automated tools manage vulnerability management activities and ensure consistency.",
                "Integrated vulnerability management processes across platforms enhance coordination.",
                "Continuous optimization of vulnerability management based on real-time data and threat intelligence."
              ]
            },
            "D-544": {
              "id": "D-544",
              "name": "Security Awareness",
              "controlQuestion": "How effectively is security awareness promoted within the organization?",
              "benefitsAnalysis": "Effective security awareness reduces the risk of human error and security breaches.",
              "levels": [
                "Security awareness is informal and inconsistent.",
                "Basic security awareness programs are in place, but not consistently executed.",
                "Automated tools manage security awareness activities and ensure consistency.",
                "Integrated security awareness programs across platforms enhance coordination.",
                "Continuous optimization of security awareness based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-551": {
              "id": "D-551",
              "name": "Regulatory Compliance",
              "controlQuestion": "How effectively is regulatory compliance managed?",
              "benefitsAnalysis": "Effective compliance management reduces legal risks and ensures adherence to regulations.",
              "levels": [
                "Compliance management is ad-hoc and lacks formal processes.",
                "Basic compliance processes are in place, but not consistently executed.",
                "Automated tools manage compliance activities and ensure consistency.",
                "Integrated compliance processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize compliance strategies."
              ]
            },
            "D-552": {
              "id": "D-552",
              "name": "Policy Management",
              "controlQuestion": "How effectively are policies managed and enforced?",
              "benefitsAnalysis": "Effective policy management ensures adherence to organizational standards and reduces risks.",
              "levels": [
                "Policy management is informal and inconsistent.",
                "Basic policy management processes are in place, but not consistently executed.",
                "Automated tools manage policy management activities and ensure consistency.",
                "Integrated policy management processes across platforms enhance coordination.",
                "Continuous optimization of policy management based on real-time data and feedback."
              ]
            },
            "D-553": {
              "id": "D-553",
              "name": "Audit Management",
              "controlQuestion": "How effectively are audits managed and conducted?",
              "benefitsAnalysis": "Effective audit management ensures compliance and identifies areas for improvement.",
              "levels": [
                "Audit management is ad-hoc and lacks formal processes.",
                "Basic audit management processes are in place, but not consistently executed.",
                "Automated tools manage audit activities and ensure consistency.",
                "Integrated audit management processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize audit strategies."
              ]
            },
            "D-554": {
              "id": "D-554",
              "name": "Risk Management",
              "controlQuestion": "How effectively are risks identified and managed?",
              "benefitsAnalysis": "Effective risk management reduces the likelihood and impact of adverse events.",
              "levels": [
                "Risk management is ad-hoc and lacks formal processes.",
                "Basic risk management processes are in place, but not consistently executed.",
                "Automated tools manage risk management activities and ensure consistency.",
                "Integrated risk management processes across platforms enhance coordination.",
                "Continuous optimization of risk management based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-561": {
              "id": "D-561",
              "name": "Continuous Integration",
              "controlQuestion": "How effectively are continuous integration practices implemented?",
              "benefitsAnalysis": "Effective continuous integration improves software quality and delivery speed.",
              "levels": [
                "Continuous integration practices are informal and inconsistent.",
                "Basic continuous integration processes are in place, but not consistently executed.",
                "Automated tools manage continuous integration activities and ensure consistency.",
                "Integrated continuous integration processes across platforms enhance coordination.",
                "Continuous optimization of continuous integration practices based on real-time data and feedback."
              ]
            },
            "D-562": {
              "id": "D-562",
              "name": "Continuous Deployment",
              "controlQuestion": "How effectively are continuous deployment practices implemented?",
              "benefitsAnalysis": "Effective continuous deployment improves software delivery speed and reduces errors.",
              "levels": [
                "Continuous deployment practices are informal and inconsistent.",
                "Basic continuous deployment processes are in place, but not consistently executed.",
                "Automated tools manage continuous deployment activities and ensure consistency.",
                "Integrated continuous deployment processes across platforms enhance coordination.",
                "Continuous optimization of continuous deployment practices based on real-time data and feedback."
              ]
            },
            "D-563": {
              "id": "D-563",
              "name": "Infrastructure as Code",
              "controlQuestion": "How effectively is infrastructure as code implemented?",
              "benefitsAnalysis": "Effective infrastructure as code improves infrastructure management and reduces errors.",
              "levels": [
                "Infrastructure as code practices are informal and inconsistent.",
                "Basic infrastructure as code processes are in place, but not consistently executed.",
                "Automated tools manage infrastructure as code activities and ensure consistency.",
                "Integrated infrastructure as code processes across platforms enhance coordination.",
                "Continuous optimization of infrastructure as code practices based on real-time data and feedback."
              ]
            },
            "D-564": {
              "id": "D-564",
              "name": "Monitoring and Logging",
              "controlQuestion": "How effectively are monitoring and logging practices implemented?",
              "benefitsAnalysis": "Effective monitoring and logging improve system reliability and performance.",
              "levels": [
                "Monitoring and logging practices are informal and inconsistent.",
                "Basic monitoring and logging processes are in place, but not consistently executed.",
                "Automated tools manage monitoring and logging activities and ensure consistency.",
                "Integrated monitoring and logging processes across platforms enhance coordination.",
                "Continuous optimization of monitoring and logging practices based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-571": {
              "id": "D-571",
              "name": "Onboarding Process",
              "controlQuestion": "How effectively are new customers onboarded?",
              "benefitsAnalysis": "Effective onboarding improves customer satisfaction and reduces time to value.",
              "levels": [
                "Onboarding is ad-hoc and lacks formal processes.",
                "Basic onboarding processes are in place, but not consistently executed.",
                "Automated tools manage onboarding activities and ensure consistency.",
                "Integrated onboarding processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize onboarding strategies."
              ]
            },
            "D-572": {
              "id": "D-572",
              "name": "Training and Resources",
              "controlQuestion": "How effectively are training and resources provided during onboarding?",
              "benefitsAnalysis": "Effective training and resources improve customer satisfaction and product usage.",
              "levels": [
                "Training and resources are informal and inconsistent.",
                "Basic training and resource processes are in place, but not consistently executed.",
                "Automated tools manage training and resource activities and ensure consistency.",
                "Integrated training and resource processes across platforms enhance coordination.",
                "Continuous optimization of training and resources based on real-time data and feedback."
              ]
            },
            "D-573": {
              "id": "D-573",
              "name": "Onboarding Support",
              "controlQuestion": "How effectively is support provided during onboarding?",
              "benefitsAnalysis": "Effective support during onboarding improves customer satisfaction and reduces time to value.",
              "levels": [
                "Onboarding support is informal and inconsistent.",
                "Basic onboarding support processes are in place, but not consistently executed.",
                "Automated tools manage onboarding support activities and ensure consistency.",
                "Integrated onboarding support processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize onboarding support strategies."
              ]
            },
            "D-574": {
              "id": "D-574",
              "name": "Onboarding Communication",
              "controlQuestion": "How effectively is communication managed during onboarding?",
              "benefitsAnalysis": "Effective communication during onboarding improves customer satisfaction and reduces confusion.",
              "levels": [
                "Onboarding communication is informal and inconsistent.",
                "Basic communication processes are in place, but not consistently executed.",
                "Automated tools manage communication activities and ensure consistency.",
                "Integrated communication processes across platforms enhance coordination.",
                "Continuous optimization of communication based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-581": {
              "id": "D-581",
              "name": "Feedback Collection",
              "controlQuestion": "How effectively is customer feedback collected?",
              "benefitsAnalysis": "Effective feedback collection improves product and customer experience.",
              "levels": [
                "Feedback collection is informal and inconsistent.",
                "Basic feedback collection processes are in place, but not consistently executed.",
                "Automated tools manage feedback collection activities and ensure consistency.",
                "Integrated feedback collection processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize feedback collection strategies."
              ]
            },
            "D-582": {
              "id": "D-582",
              "name": "Feedback Analysis",
              "controlQuestion": "How effectively is customer feedback analyzed?",
              "benefitsAnalysis": "Effective feedback analysis provides insights for product and customer experience improvements.",
              "levels": [
                "Feedback analysis is informal and inconsistent.",
                "Basic feedback analysis processes are in place, but not consistently executed.",
                "Automated tools manage feedback analysis activities and ensure consistency.",
                "Integrated feedback analysis processes across platforms enhance coordination.",
                "Continuous optimization of feedback analysis based on real-time data and feedback."
              ]
            },
            "D-583": {
              "id": "D-583",
              "name": "Actionable Insights",
              "controlQuestion": "How effectively are actionable insights derived from customer feedback?",
              "benefitsAnalysis": "Effective actionable insights drive product and customer experience improvements.",
              "levels": [
                "Actionable insights are informal and inconsistent.",
                "Basic processes for deriving actionable insights are in place, but not consistently executed.",
                "Automated tools manage the derivation of actionable insights and ensure consistency.",
                "Integrated processes for deriving actionable insights across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize the derivation of actionable insights."
              ]
            },
            "D-584": {
              "id": "D-584",
              "name": "Customer Satisfaction",
              "controlQuestion": "How effectively is customer satisfaction measured and managed?",
              "benefitsAnalysis": "Effective customer satisfaction management improves customer retention and loyalty.",
              "levels": [
                "Customer satisfaction measurement is informal and inconsistent.",
                "Basic customer satisfaction processes are in place, but not consistently executed.",
                "Automated tools manage customer satisfaction measurement and ensure consistency.",
                "Integrated customer satisfaction processes across platforms enhance coordination.",
                "Continuous optimization of customer satisfaction strategies based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-591": {
              "id": "D-591",
              "name": "Self-Help",
              "controlQuestion": "How effectively can customers resolve their issues using self-help tools?",
              "benefitsAnalysis": "Effective self-help tools reduce support costs and improve customer satisfaction.",
              "levels": [
                "Basic self-help tools available, but they may not cover all common issues or be easy to use.",
                "Comprehensive self-service options with guides and FAQs, offering better user autonomy.",
                "Self-service tools are automated and integrated, providing real-time assistance and feedback.",
                "The platform itself facilitates self-service through intuitive design and user engagement.",
                "Self-service is enhanced with AI, learning from user interactions to improve over time."
              ]
            },
            "D-592": {
              "id": "D-592",
              "name": "User Administration",
              "controlQuestion": "How effectively can customers manage user accounts and permissions?",
              "benefitsAnalysis": "Efficient user administration improves security and user management.",
              "levels": [
                "User administration is manual and prone to errors.",
                "Basic user administration processes are in place, but not consistently executed.",
                "Automated tools manage user administration activities and ensure consistency.",
                "Integrated user administration processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize user administration strategies."
              ]
            },
            "D-593": {
              "id": "D-593",
              "name": "Acquiring New Licenses",
              "controlQuestion": "How effectively can customers acquire new licenses or upgrade existing ones?",
              "benefitsAnalysis": "Streamlined license acquisition improves customer satisfaction and revenue.",
              "levels": [
                "License acquisition is manual and time-consuming.",
                "Basic processes for acquiring new licenses are in place, but not consistently executed.",
                "Automated tools manage license acquisition activities and ensure consistency.",
                "Integrated license acquisition processes across platforms enhance coordination.",
                "Predictive analytics optimize license acquisition strategies based on customer needs and usage patterns."
              ]
            },
            "D-594": {
              "id": "D-594",
              "name": "Billing Management",
              "controlQuestion": "How effectively can customers manage their billing and payments?",
              "benefitsAnalysis": "Efficient billing management improves customer satisfaction and reduces billing errors.",
              "levels": [
                "Billing management is manual and prone to errors.",
                "Basic billing management processes are in place, but not consistently executed.",
                "Automated tools manage billing activities and ensure consistency.",
                "Integrated billing management processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize billing management strategies."
              ]
            },
            "D-595": {
              "id": "D-595",
              "name": "Subscription Management",
              "controlQuestion": "How effectively can customers manage their subscriptions and renewals?",
              "benefitsAnalysis": "Efficient subscription management improves customer retention and revenue.",
              "levels": [
                "Subscription management is manual and prone to errors.",
                "Basic subscription management processes are in place, but not consistently executed.",
                "Automated tools manage subscription activities and ensure consistency.",
                "Integrated subscription management processes across platforms enhance coordination.",
                "Predictive analytics optimize subscription management strategies based on customer behavior and usage patterns."
              ]
            },
            "D-596": {
              "id": "D-596",
              "name": "Usage Analytics",
              "controlQuestion": "How effectively can customers access and analyze their usage data?",
              "benefitsAnalysis": "Access to usage analytics improves customer satisfaction and helps optimize resource usage.",
              "levels": [
                "Usage analytics are limited and difficult to access.",
                "Basic usage analytics are available, but not consistently utilized.",
                "Automated tools provide real-time usage analytics and insights.",
                "Integrated usage analytics across platforms enhance coordination and decision-making.",
                "Advanced analytics and AI provide predictive insights and recommendations based on usage patterns."
              ]
            },
            "D-597": {
              "id": "D-597",
              "name": "Support Ticket Management",
              "controlQuestion": "How effectively can customers manage their support tickets?",
              "benefitsAnalysis": "Efficient support ticket management improves issue resolution and customer satisfaction.",
              "levels": [
                "Support ticket management is manual and prone to delays.",
                "Basic support ticket management processes are in place, but not consistently executed.",
                "Automated tools manage support ticket activities and ensure consistency.",
                "Integrated support ticket management processes across platforms enhance coordination.",
                "Real-time data and analytics continuously optimize support ticket management strategies."
              ]
            }
          }
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
          "domains": {
            "D-611": {
              "id": "D-611",
              "name": "Vision and Mission Alignment",
              "controlQuestion": "How well are the vision and mission aligned with the strategy for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures coherence and direction across the organization, enhancing strategic focus and effectiveness.",
              "levels": [
                "Vision and mission are not aligned with cloud, data, and AI strategy.",
                "Vision and mission are partially aligned, but not consistently communicated.",
                "Vision and mission are well-communicated and aligned with the strategy.",
                "Vision and mission guide all strategic initiatives and are measured by KPIs.",
                "Vision and mission are continuously optimized to drive business outcomes and innovation."
              ]
            },
            "D-612": {
              "id": "D-612",
              "name": "Strategic Planning",
              "controlQuestion": "How effectively is strategic planning conducted to incorporate cloud, data, and AI?",
              "benefitsAnalysis": "Ensures efficient resource allocation and achievable goals, driving strategic success.",
              "levels": [
                "Strategic planning is ad-hoc and lacks formal processes.",
                "Basic strategic planning processes are in place, but not consistently executed.",
                "Automated tools manage strategic planning activities and ensure consistency.",
                "Integrated strategic planning processes across platforms enhance coordination.",
                "Continuous optimization of strategic planning based on real-time data and feedback."
              ]
            },
            "D-613": {
              "id": "D-613",
              "name": "Stakeholder Engagement",
              "controlQuestion": "How effectively are stakeholders engaged in the strategic planning process?",
              "benefitsAnalysis": "Ensures buy-in and alignment with the strategy, enhancing collaboration and execution.",
              "levels": [
                "Stakeholder engagement is informal and inconsistent.",
                "Basic stakeholder engagement processes are in place, but not consistently executed.",
                "Automated tools manage stakeholder engagement activities and ensure consistency.",
                "Integrated stakeholder engagement processes across platforms enhance coordination.",
                "Continuous optimization of stakeholder engagement based on real-time data and feedback."
              ]
            },
            "D-614": {
              "id": "D-614",
              "name": "Performance Metrics",
              "controlQuestion": "How effectively are performance metrics defined and tracked to measure strategic success?",
              "benefitsAnalysis": "Provides insights into the effectiveness of the strategy and areas for improvement.",
              "levels": [
                "Performance metrics are informal and inconsistent.",
                "Basic performance metrics are in place, but not consistently tracked.",
                "Automated tools track and report on performance metrics.",
                "Integrated performance metrics across platforms provide comprehensive insights.",
                "Advanced analytics continuously optimize performance metrics based on real-time data and feedback."
              ]
            },
            "D-615": {
              "id": "D-615",
              "name": "Resource Allocation",
              "controlQuestion": "How effectively are resources allocated to support the strategic initiatives for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures that strategic initiatives are adequately supported, driving success.",
              "levels": [
                "Resource allocation is ad-hoc and lacks formal processes.",
                "Basic resource allocation processes are in place, but not consistently executed.",
                "Automated tools manage resource allocation activities and ensure consistency.",
                "Integrated resource allocation processes across platforms enhance coordination.",
                "Continuous optimization of resource allocation based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-621": {
              "id": "D-621",
              "name": "Organizational Structure",
              "controlQuestion": "How effectively is the organizational structure designed to support cloud, data, and AI initiatives?",
              "benefitsAnalysis": "Ensures clear roles and responsibilities, enhancing efficiency and alignment with strategic goals.",
              "levels": [
                "Current structure deals with ad-hoc adoption.",
                "A structure to enable cloud service models, data governance, and AI capabilities is defined and partially implemented, ongoing as projects occur. Teams have been created in function areas to deal with these areas, including business and technical functions. KPIs per team are identified.",
                "Business unit structures are updated to support cloud service adoption, data management, and embedding and providing AI functionality. Active planning is performed to close gaps in the overall structure reviewed regularly.",
                "The organizational structure brings tangible business benefits by having clear roles identified across business units with regular reviews/updates as needed.",
                "All enterprise units operate as one towards achieving business objectives; sub-elements of objectives apportioned appropriately."
              ]
            },
            "D-622": {
              "id": "D-622",
              "name": "Roles and Responsibilities",
              "controlQuestion": "How clearly are roles and responsibilities defined for cloud, data, and AI initiatives?",
              "benefitsAnalysis": "Ensures accountability and efficient execution of initiatives.",
              "levels": [
                "Roles and responsibilities are informal and inconsistent.",
                "Basic roles and responsibilities are defined, but not consistently executed.",
                "Automated tools manage roles and responsibilities and ensure consistency.",
                "Integrated roles and responsibilities across platforms enhance coordination.",
                "Continuous optimization of roles and responsibilities based on real-time data and feedback."
              ]
            },
            "D-623": {
              "id": "D-623",
              "name": "Cross-Functional Collaboration",
              "controlQuestion": "How effectively do cross-functional teams collaborate on cloud, data, and AI projects?",
              "benefitsAnalysis": "Ensures diverse perspectives are considered and projects are executed efficiently.",
              "levels": [
                "Collaboration is informal and inconsistent.",
                "Basic collaboration processes are in place, but not consistently executed.",
                "Automated tools manage collaboration activities and ensure consistency.",
                "Integrated collaboration processes across platforms enhance coordination.",
                "Continuous optimization of collaboration based on real-time data and feedback."
              ]
            },
            "D-624": {
              "id": "D-624",
              "name": "Governance",
              "controlQuestion": "How effectively is governance established to oversee cloud, data, and AI initiatives?",
              "benefitsAnalysis": "Ensures alignment with strategic goals and efficient execution of initiatives.",
              "levels": [
                "Governance is informal and inconsistent.",
                "Basic governance processes are in place, but not consistently executed.",
                "Automated tools manage governance activities and ensure consistency.",
                "Integrated governance processes across platforms enhance coordination.",
                "Continuous optimization of governance based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-631": {
              "id": "D-631",
              "name": "Innovation Culture",
              "controlQuestion": "How effectively does the culture promote innovation in cloud, data, and AI?",
              "benefitsAnalysis": "Drives continuous improvement and competitive advantage.",
              "levels": [
                "The culture shows some responsiveness to the strategy. Employees acknowledge the importance of cloud, data, and AI but lack proactive engagement.",
                "The culture actively supports the strategy. Employees understand the significance of cloud, data, and AI.",
                "The culture embraces cloud, data, and AI as integral components of success. It’s not just about compliance but genuine belief.",
                "The culture champions innovation and continuous improvement in these areas. Employees seek opportunities to optimize and enhance.",
                "A culture that fosters collaboration, learning, and adaptability accelerates SaaS transformation."
              ]
            },
            "D-632": {
              "id": "D-632",
              "name": "Learning and Development",
              "controlQuestion": "How effectively does the culture support continuous learning and development in cloud, data, and AI?",
              "benefitsAnalysis": "Ensures employees stay updated with the latest advancements and best practices.",
              "levels": [
                "Learning and development are informal and inconsistent.",
                "Basic learning and development programs are in place, but not consistently executed.",
                "Automated tools manage learning and development activities and ensure consistency.",
                "Integrated learning and development processes across platforms enhance coordination.",
                "Continuous optimization of learning and development based on real-time data and feedback."
              ]
            },
            "D-633": {
              "id": "D-633",
              "name": "Employee Engagement",
              "controlQuestion": "How engaged are employees in cloud, data, and AI initiatives?",
              "benefitsAnalysis": "Drives motivation and commitment to achieving strategic goals.",
              "levels": [
                "Employee engagement is informal and inconsistent.",
                "Basic employee engagement processes are in place, but not consistently executed.",
                "Automated tools manage employee engagement activities and ensure consistency.",
                "Integrated employee engagement processes across platforms enhance coordination.",
                "Continuous optimization of employee engagement based on real-time data and feedback."
              ]
            },
            "D-634": {
              "id": "D-634",
              "name": "Collaboration and Teamwork",
              "controlQuestion": "How effectively does the culture promote collaboration and teamwork in cloud, data, and AI projects?",
              "benefitsAnalysis": "Drives efficient execution of projects and innovation.",
              "levels": [
                "Collaboration and teamwork are informal and inconsistent.",
                "Basic collaboration and teamwork processes are in place, but not consistently executed.",
                "Automated tools manage collaboration and teamwork activities and ensure consistency.",
                "Integrated collaboration and teamwork processes across platforms enhance coordination.",
                "Continuous optimization of collaboration and teamwork based on real-time data and feedback."
              ]
            },
            "D-635": {
              "id": "D-635",
              "name": "Adaptability",
              "controlQuestion": "How adaptable is the culture to changes and advancements in cloud, data, and AI?",
              "benefitsAnalysis": "Ensures the organization can quickly respond to changes and stay competitive.",
              "levels": [
                "Adaptability is informal and inconsistent.",
                "Basic adaptability processes are in place, but not consistently executed.",
                "Automated tools manage adaptability activities and ensure consistency.",
                "Integrated adaptability processes across platforms enhance coordination.",
                "Continuous optimization of adaptability based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-641": {
              "id": "D-641",
              "name": "Incentive Programs",
              "controlQuestion": "How effectively are incentive programs designed to reward achievements in cloud, data, and AI?",
              "benefitsAnalysis": "Drives motivation and performance.",
              "levels": [
                "Senior management compensation scheme contains KPIs affected by cloud implementation to a limited extent.",
                "Specific compensation components related to cloud are available. The scheme encourages employees to stay updated and seek improvement opportunities within their technical and commercial domain.",
                "Employees understand that moving to cloud technology strengthens competitiveness, opens career perspectives, and increases compensation. Incentives and rewards are available for outstanding results, innovation, and business value.",
                "Management values rewards for innovative thinking and transparently rewards technical acumen and idea creation. KPIs measure employee contribution to innovation and SaaS transformation.",
                "A culture managed in context of its strategy maximizes performance, focuses energy, and encourages opportunity-seeking, making the business more competitive."
              ]
            },
            "D-642": {
              "id": "D-642",
              "name": "Performance-Based Compensation",
              "controlQuestion": "How effectively is compensation tied to performance metrics related to cloud, data, and AI?",
              "benefitsAnalysis": "Ensures employees are rewarded for their contributions to strategic goals.",
              "levels": [
                "Performance-based compensation is informal and inconsistent.",
                "Basic performance-based compensation processes are in place, but not consistently executed.",
                "Automated tools manage performance-based compensation activities and ensure consistency.",
                "Integrated performance-based compensation processes across platforms enhance coordination.",
                "Continuous optimization of performance-based compensation based on real-time data and feedback."
              ]
            },
            "D-643": {
              "id": "D-643",
              "name": "Equity and Fairness",
              "controlQuestion": "How equitable and fair is the compensation structure for employees involved in cloud, data, and AI initiatives?",
              "benefitsAnalysis": "Ensures all employees are rewarded appropriately for their contributions.",
              "levels": [
                "Equity and fairness are informal and inconsistent.",
                "Basic equity and fairness processes are in place, but not consistently executed.",
                "Automated tools manage equity and fairness activities and ensure consistency.",
                "Integrated equity and fairness processes across platforms enhance coordination.",
                "Continuous optimization of equity and fairness based on real-time data and feedback."
              ]
            },
            "D-644": {
              "id": "D-644",
              "name": "Recognition and Rewards",
              "controlQuestion": "How effectively are recognition and rewards programs implemented to motivate employees in cloud, data, and AI?",
              "benefitsAnalysis": "Drives motivation and performance.",
              "levels": [
                "Recognition and rewards are informal and inconsistent.",
                "Basic recognition and rewards processes are in place, but not consistently executed.",
                "Automated tools manage recognition and rewards activities and ensure consistency.",
                "Integrated recognition and rewards processes across platforms enhance coordination.",
                "Continuous optimization of recognition and rewards based on real-time data and feedback."
              ]
            },
            "D-645": {
              "id": "D-645",
              "name": "Career Development",
              "controlQuestion": "How effectively does the compensation structure support career development in cloud, data, and AI?",
              "benefitsAnalysis": "Ensures employees have opportunities for growth and advancement.",
              "levels": [
                "Career development is informal and inconsistent.",
                "Basic career development processes are in place, but not consistently executed.",
                "Automated tools manage career development activities and ensure consistency.",
                "Integrated career development processes across platforms enhance coordination.",
                "Continuous optimization of career development based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-651": {
              "id": "D-651",
              "name": "Technical Skills",
              "controlQuestion": "How effectively are technical skills in cloud, data, and AI developed and maintained?",
              "benefitsAnalysis": "Ensures employees can effectively implement and manage cloud, data, and AI initiatives.",
              "levels": [
                "Some employees possess limited skills.",
                "10-25% of employees exhibit the appropriate skill level.",
                "25-50% of employees possess and exhibit the appropriate skill level, with supporting certifications.",
                "50-75% of employees exhibit the appropriate skill level.",
                "100% of employees possess and exhibit the appropriate skill level (pervasive), based on training aligned with the business strategy."
              ]
            },
            "D-652": {
              "id": "D-652",
              "name": "Business Acumen",
              "controlQuestion": "How effectively are business skills related to cloud, data, and AI developed and maintained?",
              "benefitsAnalysis": "Ensures employees can effectively align cloud, data, and AI initiatives with business goals.",
              "levels": [
                "Business acumen is informal and inconsistent.",
                "Basic business acumen processes are in place, but not consistently executed.",
                "Automated tools manage business acumen activities and ensure consistency.",
                "Integrated business acumen processes across platforms enhance coordination.",
                "Continuous optimization of business acumen based on real-time data and feedback."
              ]
            },
            "D-653": {
              "id": "D-653",
              "name": "Training Programs",
              "controlQuestion": "How comprehensive and effective are training programs for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures employees have the necessary skills and knowledge.",
              "levels": [
                "Training programs are informal and inconsistent.",
                "Basic training programs are in place, but not consistently executed.",
                "Automated tools manage training programs and ensure consistency.",
                "Integrated training programs across platforms enhance coordination.",
                "Continuous optimization of training programs based on real-time data and feedback."
              ]
            },
            "D-654": {
              "id": "D-654",
              "name": "Certifications",
              "controlQuestion": "How effectively are certifications in cloud, data, and AI promoted and achieved?",
              "benefitsAnalysis": "Ensures employees have validated their skills and knowledge.",
              "levels": [
                "Certifications are informal and inconsistent.",
                "Basic certification processes are in place, but not consistently executed.",
                "Automated tools manage certification activities and ensure consistency.",
                "Integrated certification processes across platforms enhance coordination.",
                "Continuous optimization of certification processes based on real-time data and feedback."
              ]
            },
            "D-655": {
              "id": "D-655",
              "name": "Skill Assessment",
              "controlQuestion": "How effectively are skills in cloud, data, and AI assessed and gaps identified?",
              "benefitsAnalysis": "Ensures skill gaps are identified and addressed.",
              "levels": [
                "Skill assessment is informal and inconsistent.",
                "Basic skill assessment processes are in place, but not consistently executed.",
                "Automated tools manage skill assessment activities and ensure consistency.",
                "Integrated skill assessment processes across platforms enhance coordination.",
                "Continuous optimization of skill assessment based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-661": {
              "id": "D-661",
              "name": "Regulatory Compliance",
              "controlQuestion": "How effectively is regulatory compliance managed for cloud, data, and AI?",
              "benefitsAnalysis": "Reduces legal risks and ensures adherence to regulations.",
              "levels": [
                "Compliance requirements are reviewed manually upon request for selected key KPIs, mostly based on manually collated data. Certifications/attestations are analyzed as required.",
                "A basic compliance framework exists. Implementing new cloud services follows specified procedures to meet compliance requirements. Selected areas are checked for compliance as needed, including certifications/attestations published by the cloud provider.",
                "A comprehensive compliance framework includes accountabilities, responsibilities, and documentation requirements. Compliance is established, monitored, and actively managed.",
                "An advanced compliance system is in place with automated controls and continuous monitoring. Compliance is integral to operations.",
                "A fully qualified compliance system ensures all off-premises services meet defined compliance requirements. It reduces risk and ensures adherence to standards."
              ]
            },
            "D-662": {
              "id": "D-662",
              "name": "Data Privacy",
              "controlQuestion": "How effectively are data privacy regulations adhered to in cloud, data, and AI initiatives?",
              "benefitsAnalysis": "Ensures customer data is protected and legal risks are minimized.",
              "levels": [
                "Data privacy is informal and inconsistent.",
                "Basic data privacy processes are in place, but not consistently executed.",
                "Automated tools manage data privacy activities and ensure consistency.",
                "Integrated data privacy processes across platforms enhance coordination.",
                "Continuous optimization of data privacy based on real-time data and feedback."
              ]
            },
            "D-663": {
              "id": "D-663",
              "name": "Security Compliance",
              "controlQuestion": "How effectively are security compliance requirements met for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures systems and data are protected from threats.",
              "levels": [
                "Security compliance is informal and inconsistent.",
                "Basic security compliance processes are in place, but not consistently executed.",
                "Automated tools manage security compliance activities and ensure consistency.",
                "Integrated security compliance processes across platforms enhance coordination.",
                "Continuous optimization of security compliance based on real-time data and feedback."
              ]
            },
            "D-664": {
              "id": "D-664",
              "name": "Audit and Reporting",
              "controlQuestion": "How effectively are audit and reporting processes implemented for compliance in cloud, data, and AI?",
              "benefitsAnalysis": "Ensures compliance is monitored and maintained.",
              "levels": [
                "Audit and reporting are informal and inconsistent.",
                "Basic audit and reporting processes are in place, but not consistently executed.",
                "Automated tools manage audit and reporting activities and ensure consistency.",
                "Integrated audit and reporting processes across platforms enhance coordination.",
                "Continuous optimization of audit and reporting based on real-time data and feedback."
              ]
            },
            "D-665": {
              "id": "D-665",
              "name": "Compliance Training",
              "controlQuestion": "How effectively are compliance training programs implemented for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures employees understand and adhere to compliance requirements.",
              "levels": [
                "Compliance training is informal and inconsistent.",
                "Basic compliance training programs are in place, but not consistently executed.",
                "Automated tools manage compliance training activities and ensure consistency.",
                "Integrated compliance training programs across platforms enhance coordination.",
                "Continuous optimization of compliance training based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-671": {
              "id": "D-671",
              "name": "Risk Management",
              "controlQuestion": "How effectively are risks identified and managed for cloud, data, and AI?",
              "benefitsAnalysis": "Reduces the likelihood and impact of adverse events.",
              "levels": [
                "Risks may be evaluated in project situations. No general risk definition.",
                "Risks are discussed (4-eye principle), and settlement/remediation agreed on a case-by-case basis.",
                "Risks and remediations are defined, known, and documented.",
                "A risk management framework is defined and contextualized for cloud, data, and AI. Risks are constantly monitored. Risk mitigation plans are in place.",
                "A governance structure has been implemented to manage risks for the business. The risk mitigation plan is regularly updated. Computer Emergency Response Team (CERT) exists, which also extends to the cloud providers."
              ]
            },
            "D-672": {
              "id": "D-672",
              "name": "Policy Management",
              "controlQuestion": "How effectively are policies managed and enforced for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures adherence to organizational standards and reduces risks.",
              "levels": [
                "Policy management is informal and inconsistent.",
                "Basic policy management processes are in place, but not consistently executed.",
                "Automated tools manage policy management activities and ensure consistency.",
                "Integrated policy management processes across platforms enhance coordination.",
                "Continuous optimization of policy management based on real-time data and feedback."
              ]
            },
            "D-673": {
              "id": "D-673",
              "name": "Audit and Compliance",
              "controlQuestion": "How effectively are audit and compliance processes implemented for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures compliance is monitored and maintained.",
              "levels": [
                "Audit and compliance are informal and inconsistent.",
                "Basic audit and compliance processes are in place, but not consistently executed.",
                "Automated tools manage audit and compliance activities and ensure consistency.",
                "Integrated audit and compliance processes across platforms enhance coordination.",
                "Continuous optimization of audit and compliance based on real-time data and feedback."
              ]
            },
            "D-674": {
              "id": "D-674",
              "name": "Governance Framework",
              "controlQuestion": "How effectively is the governance framework established and maintained for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures initiatives are aligned with strategic goals and executed efficiently.",
              "levels": [
                "Governance framework is informal and inconsistent.",
                "Basic governance framework processes are in place, but not consistently executed.",
                "Automated tools manage governance framework activities and ensure consistency.",
                "Integrated governance framework processes across platforms enhance coordination.",
                "Continuous optimization of governance framework based on real-time data and feedback."
              ]
            },
            "D-675": {
              "id": "D-675",
              "name": "Incident Management",
              "controlQuestion": "How effectively are incidents managed and resolved for cloud, data, and AI?",
              "benefitsAnalysis": "Minimizes the impact of incidents and ensures quick resolution.",
              "levels": [
                "Incident management is informal and inconsistent.",
                "Basic incident management processes are in place, but not consistently executed.",
                "Automated tools manage incident management activities and ensure consistency.",
                "Integrated incident management processes across platforms enhance coordination.",
                "Continuous optimization of incident management based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-681": {
              "id": "D-681",
              "name": "Vendor Management",
              "controlQuestion": "How effectively are vendor relationships managed for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures quality and reliability of services.",
              "levels": [
                "Vendor management is informal and inconsistent.",
                "Basic vendor management processes are in place, but not consistently executed.",
                "Automated tools manage vendor management activities and ensure consistency.",
                "Integrated vendor management processes across platforms enhance coordination.",
                "Continuous optimization of vendor management strategies based on real-time data and feedback."
              ]
            },
            "D-682": {
              "id": "D-682",
              "name": "Procurement Processes",
              "controlQuestion": "How effectively are procurement processes designed and implemented for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures timely and cost-effective acquisition of services.",
              "levels": [
                "Procurement processes are informal and inconsistent.",
                "Basic procurement processes are in place, but not consistently executed.",
                "Automated tools manage procurement activities and ensure consistency.",
                "Integrated procurement processes across platforms enhance coordination.",
                "Continuous optimization of procurement processes based on real-time data and feedback."
              ]
            },
            "D-683": {
              "id": "D-683",
              "name": "Contract Management",
              "controlQuestion": "How effectively are contracts managed for cloud, data, and AI services?",
              "benefitsAnalysis": "Ensures compliance and minimizes risks.",
              "levels": [
                "Contract management is informal and inconsistent.",
                "Basic contract management processes are in place, but not consistently executed.",
                "Automated tools manage contract management activities and ensure consistency.",
                "Integrated contract management processes across platforms enhance coordination.",
                "Continuous optimization of contract management based on real-time data and feedback."
              ]
            },
            "D-684": {
              "id": "D-684",
              "name": "Cost Management",
              "controlQuestion": "How effectively are costs managed and optimized for cloud, data, and AI procurement?",
              "benefitsAnalysis": "Ensures budget adherence and cost savings.",
              "levels": [
                "Cost management is informal and inconsistent.",
                "Basic cost management processes are in place, but not consistently executed.",
                "Automated tools manage cost management activities and ensure consistency.",
                "Integrated cost management processes across platforms enhance coordination.",
                "Continuous optimization of cost management based on real-time data and feedback."
              ]
            },
            "D-685": {
              "id": "D-685",
              "name": "Supplier Performance",
              "controlQuestion": "How effectively is supplier performance monitored and evaluated for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures quality and reliability of services.",
              "levels": [
                "Supplier performance management is informal and inconsistent.",
                "Basic supplier performance management processes are in place, but not consistently executed.",
                "Automated tools manage supplier performance activities and ensure consistency.",
                "Integrated supplier performance management processes across platforms enhance coordination.",
                "Continuous optimization of supplier performance management based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-691": {
              "id": "D-691",
              "name": "Idea Generation",
              "controlQuestion": "How effectively are new ideas generated and captured for cloud, data, and AI innovation?",
              "benefitsAnalysis": "Drives continuous improvement and competitive advantage.",
              "levels": [
                "Idea generation is informal and inconsistent.",
                "Basic idea generation processes are in place, but not consistently executed.",
                "Automated tools manage idea generation activities and ensure consistency.",
                "Integrated idea generation processes across platforms enhance coordination.",
                "Continuous optimization of idea generation based on real-time data and feedback."
              ]
            },
            "D-692": {
              "id": "D-692",
              "name": "Innovation Processes",
              "controlQuestion": "How effectively are innovation processes designed and implemented for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures new ideas are developed and executed effectively.",
              "levels": [
                "Innovation processes are informal and inconsistent.",
                "Basic innovation processes are in place, but not consistently executed.",
                "Automated tools manage innovation activities and ensure consistency.",
                "Integrated innovation processes across platforms enhance coordination.",
                "Continuous optimization of innovation processes based on real-time data and feedback."
              ]
            },
            "D-693": {
              "id": "D-693",
              "name": "Collaboration and Partnerships",
              "controlQuestion": "How effectively are collaborations and partnerships leveraged for cloud, data, and AI innovation?",
              "benefitsAnalysis": "Enhances innovation capabilities and outcomes.",
              "levels": [
                "Collaborations and partnerships are informal and inconsistent.",
                "Basic collaboration and partnership processes are in place, but not consistently executed.",
                "Automated tools manage collaboration and partnership activities and ensure consistency.",
                "Integrated collaboration and partnership processes across platforms enhance coordination.",
                "Continuous optimization of collaboration and partnership strategies based on real-time data and feedback."
              ]
            },
            "D-694": {
              "id": "D-694",
              "name": "Funding and Resources",
              "controlQuestion": "How effectively are funding and resources allocated for cloud, data, and AI innovation?",
              "benefitsAnalysis": "Ensures innovation initiatives are well-supported.",
              "levels": [
                "Funding and resources are informal and inconsistent.",
                "Basic funding and resource allocation processes are in place, but not consistently executed.",
                "Automated tools manage funding and resource allocation activities and ensure consistency.",
                "Integrated funding and resource allocation processes across platforms enhance coordination.",
                "Continuous optimization of funding and resource allocation based on real-time data and feedback."
              ]
            },
            "D-695": {
              "id": "D-695",
              "name": "Innovation Metrics",
              "controlQuestion": "How effectively are innovation metrics defined and tracked for cloud, data, and AI?",
              "benefitsAnalysis": "Provides insights into the effectiveness of innovation initiatives and areas for improvement.",
              "levels": [
                "Innovation metrics are informal and inconsistent.",
                "Basic innovation metrics are in place, but not consistently tracked.",
                "Automated tools track and report on innovation metrics.",
                "Integrated innovation metrics across platforms provide comprehensive insights.",
                "Advanced analytics continuously optimize innovation metrics based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-701": {
              "id": "D-701",
              "name": "Environmental Impact",
              "controlQuestion": "How effectively is the environmental impact of cloud, data, and AI initiatives managed?",
              "benefitsAnalysis": "Ensures sustainability and compliance with regulations.",
              "levels": [
                "Environmental impact management is informal and inconsistent.",
                "Basic environmental impact management processes are in place, but not consistently executed.",
                "Automated tools manage environmental impact activities and ensure consistency.",
                "Integrated environmental impact management processes across platforms enhance coordination.",
                "Continuous optimization of environmental impact management based on real-time data and feedback."
              ]
            },
            "D-702": {
              "id": "D-702",
              "name": "Sustainable Practices",
              "controlQuestion": "How effectively are sustainable practices incorporated into cloud, data, and AI operations?",
              "benefitsAnalysis": "Ensures long-term viability and compliance with regulations.",
              "levels": [
                "Sustainable practices are informal and inconsistent.",
                "Basic sustainable practices are in place, but not consistently executed.",
                "Automated tools manage sustainable practices and ensure consistency.",
                "Integrated sustainable practices across platforms enhance coordination.",
                "Continuous optimization of sustainable practices based on real-time data and feedback."
              ]
            },
            "D-703": {
              "id": "D-703",
              "name": "Energy Efficiency",
              "controlQuestion": "How effectively is energy efficiency optimized for cloud, data, and AI infrastructure?",
              "benefitsAnalysis": "Reduces costs and environmental impact.",
              "levels": [
                "Energy efficiency is informal and inconsistent.",
                "Basic energy efficiency processes are in place, but not consistently executed.",
                "Automated tools manage energy efficiency activities and ensure consistency.",
                "Integrated energy efficiency processes across platforms enhance coordination.",
                "Continuous optimization of energy efficiency based on real-time data and feedback."
              ]
            },
            "D-704": {
              "id": "D-704",
              "name": "Waste Management",
              "controlQuestion": "How effectively is waste managed and minimized for cloud, data, and AI operations?",
              "benefitsAnalysis": "Reduces environmental impact and ensures compliance with regulations.",
              "levels": [
                "Waste management is informal and inconsistent.",
                "Basic waste management processes are in place, but not consistently executed.",
                "Automated tools manage waste management activities and ensure consistency.",
                "Integrated waste management processes across platforms enhance coordination.",
                "Continuous optimization of waste management based on real-time data and feedback."
              ]
            },
            "D-705": {
              "id": "D-705",
              "name": "Sustainability Reporting",
              "controlQuestion": "How effectively are sustainability reporting processes implemented for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures transparency and compliance with regulations.",
              "levels": [
                "Sustainability reporting is informal and inconsistent.",
                "Basic sustainability reporting processes are in place, but not consistently executed.",
                "Automated tools manage sustainability reporting activities and ensure consistency.",
                "Integrated sustainability reporting processes across platforms enhance coordination.",
                "Continuous optimization of sustainability reporting based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-711": {
              "id": "D-711",
              "name": "Customer Data Collection",
              "controlQuestion": "How effectively is customer data collected and managed for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures accurate and relevant data is available for analysis.",
              "levels": [
                "Customer data collection is informal and inconsistent.",
                "Basic data collection processes are in place, but not consistently executed.",
                "Automated tools manage data collection activities and ensure consistency.",
                "Integrated data collection processes across platforms enhance coordination.",
                "Continuous optimization of data collection based on real-time data and feedback."
              ]
            },
            "D-712": {
              "id": "D-712",
              "name": "Data Analysis",
              "controlQuestion": "How effectively is customer data analyzed to derive insights for cloud, data, and AI?",
              "benefitsAnalysis": "Provides valuable insights for decision-making and strategy.",
              "levels": [
                "Data analysis is informal and inconsistent.",
                "Basic data analysis processes are in place, but not consistently executed.",
                "Automated tools manage data analysis activities and ensure consistency.",
                "Integrated data analysis processes across platforms enhance coordination.",
                "Continuous optimization of data analysis based on real-time data and feedback."
              ]
            },
            "D-713": {
              "id": "D-713",
              "name": "Customer Segmentation",
              "controlQuestion": "How effectively are customers segmented based on data insights for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures marketing and sales efforts are targeted and efficient.",
              "levels": [
                "Customer segmentation is informal and inconsistent.",
                "Basic segmentation processes are in place, but not consistently executed.",
                "Automated tools manage segmentation activities and ensure consistency.",
                "Integrated segmentation processes across platforms enhance coordination.",
                "Continuous optimization of segmentation based on real-time data and feedback."
              ]
            },
            "D-714": {
              "id": "D-714",
              "name": "Predictive Analytics",
              "controlQuestion": "How effectively are predictive analytics used to forecast customer behavior for cloud, data, and AI?",
              "benefitsAnalysis": "Provides valuable insights for strategy and decision-making.",
              "levels": [
                "Predictive analytics are informal and inconsistent.",
                "Basic predictive analytics processes are in place, but not consistently executed.",
                "Automated tools manage predictive analytics activities and ensure consistency.",
                "Integrated predictive analytics processes across platforms enhance coordination.",
                "Continuous optimization of predictive analytics based on real-time data and feedback."
              ]
            },
            "D-715": {
              "id": "D-715",
              "name": "Customer Feedback",
              "controlQuestion": "How effectively is customer feedback collected and utilized for cloud, data, and AI?",
              "benefitsAnalysis": "Improves product and service quality.",
              "levels": [
                "Customer feedback collection is informal and inconsistent.",
                "Basic feedback collection processes are in place, but not consistently executed.",
                "Automated tools manage feedback collection activities and ensure consistency.",
                "Integrated feedback collection processes across platforms enhance coordination.",
                "Continuous optimization of feedback collection and utilization based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-721": {
              "id": "D-721",
              "name": "Vendor Selection and Onboarding",
              "controlQuestion": "How are new vendors evaluated, selected, and onboarded?",
              "benefitsAnalysis": "A structured selection and onboarding process ensures that new vendors meet quality, security, and compliance standards from day one.",
              "levels": [
                "Vendors are selected on an ad-hoc basis with little formal evaluation.",
                "A documented process for vendor selection exists, including basic due diligence.",
                "A formal RFP process is used for critical vendors. Security and compliance reviews are mandatory.",
                "A centralized vendor management system is used to track all vendor information, contracts, and performance.",
                "Vendor selection is data-driven, using market intelligence and performance data to identify the best partners. Onboarding is fully automated."
              ]
            },
            "D-722": {
              "id": "D-722",
              "name": "Performance Management",
              "controlQuestion": "How is vendor performance measured and reviewed against contractual SLAs?",
              "benefitsAnalysis": "Systematic performance management holds vendors accountable, ensures service quality, and provides a basis for contract negotiations.",
              "levels": [
                "Vendor performance is not formally tracked.",
                "Performance is reviewed informally when issues arise.",
                "Key performance indicators (KPIs) and service level agreements (SLAs) are defined in contracts and manually tracked.",
                "Automated dashboards are used to monitor vendor performance against SLAs in real-time. Regular performance reviews are conducted.",
                "Predictive analytics are used to forecast potential performance issues. Performance data is used to dynamically manage vendor relationships."
              ]
            },
            "D-723": {
              "id": "D-723",
              "name": "Risk and Compliance Management",
              "controlQuestion": "How are risks associated with third-party vendors identified and mitigated?",
              "benefitsAnalysis": "Proactive vendor risk management protects the organization from supply chain disruptions, data breaches, and non-compliance penalties.",
              "levels": [
                "Vendor risk is not formally assessed.",
                "Basic due diligence is performed during onboarding, but ongoing monitoring is absent.",
                "Regular risk assessments are conducted for critical vendors, covering security, financial, and operational risks.",
                "A third-party risk management (TPRM) platform is used to automate assessments and continuously monitor the risk posture of vendors.",
                "AI is used to monitor a wide range of external data sources for emerging vendor risks. Risk mitigation plans are integrated and automated."
              ]
            },
            "D-724": {
              "id": "D-724",
              "name": "Relationship and Contract Management",
              "controlQuestion": "How are vendor relationships and contracts managed throughout their lifecycle?",
              "benefitsAnalysis": "Effective relationship and contract management maximizes value from vendor partnerships and ensures that contract terms are optimized and renewed in a timely manner.",
              "levels": [
                "Vendor relationships are purely transactional. Contracts are stored in disparate locations.",
                "A central point of contact is assigned for key vendors.",
                "A contract lifecycle management (CLM) system is used to store contracts and track key dates and obligations.",
                "Strategic partnerships are developed with key vendors, including joint business planning and executive sponsorship.",
                "The entire vendor relationship lifecycle, from selection to offboarding, is managed through an integrated platform that provides a 360-degree view of performance, risk, and spend."
              ]
            }
          }
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
          "domains": {
            "D-731": {
              "id": "D-731",
              "name": "Infrastructure Management",
              "controlQuestion": "How effectively is IT infrastructure managed to support cloud, data, and AI?",
              "benefitsAnalysis": "Ensures reliability and performance.",
              "levels": [
                "Infrastructure management is informal and inconsistent.",
                "Basic infrastructure management processes are in place, but not consistently executed.",
                "Automated tools manage infrastructure management activities and ensure consistency.",
                "Integrated infrastructure management processes across platforms enhance coordination.",
                "Continuous optimization of infrastructure management based on real-time data and feedback."
              ]
            },
            "D-732": {
              "id": "D-732",
              "name": "Scalability",
              "controlQuestion": "How effectively is IT infrastructure scaled to meet the demands of cloud, data, and AI?",
              "benefitsAnalysis": "Ensures infrastructure can handle increased workloads and demands.",
              "levels": [
                "Scalability is informal and inconsistent.",
                "Basic scalability processes are in place, but not consistently executed.",
                "Automated tools manage scalability activities and ensure consistency.",
                "Integrated scalability processes across platforms enhance coordination.",
                "Continuous optimization of scalability based on real-time data and feedback."
              ]
            },
            "D-733": {
              "id": "D-733",
              "name": "Performance Monitoring",
              "controlQuestion": "How effectively is IT infrastructure performance monitored and optimized for cloud, data, and AI?",
              "benefitsAnalysis": "Ensures infrastructure operates efficiently and issues are quickly identified.",
              "levels": [
                "Performance monitoring is informal and inconsistent.",
                "Basic performance monitoring processes are in place, but not consistently executed.",
                "Automated tools manage performance monitoring activities and ensure consistency.",
                "Integrated performance monitoring processes across platforms enhance coordination.",
                "Continuous optimization of performance monitoring based on real-time data and feedback."
              ]
            },
            "D-734": {
              "id": "D-734",
              "name": "Security",
              "controlQuestion": "How effectively is IT infrastructure secured to protect cloud, data, and AI?",
              "benefitsAnalysis": "Ensures infrastructure and data are protected from threats.",
              "levels": [
                "Security is informal and inconsistent.",
                "Basic security processes are in place, but not consistently executed.",
                "Automated tools manage security activities and ensure consistency.",
                "Integrated security processes across platforms enhance coordination.",
                "Continuous optimization of security based on real-time data and feedback."
              ]
            },
            "D-735": {
              "id": "D-735",
              "name": "Disaster Recovery",
              "controlQuestion": "How effectively are disaster recovery processes implemented for IT infrastructure supporting cloud, data, and AI?",
              "benefitsAnalysis": "Ensures quick recovery from incidents and minimizes downtime.",
              "levels": [
                "Disaster recovery is informal and inconsistent.",
                "Basic disaster recovery processes are in place, but not consistently executed.",
                "Automated tools manage disaster recovery activities and ensure consistency.",
                "Integrated disaster recovery processes across platforms enhance coordination.",
                "Continuous optimization of disaster recovery based on real-time data and feedback."
              ]
            }
          }
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
          "domains": {
            "D-741": {
              "id": "D-741",
              "name": "Identity and Access Management (IAM)",
              "controlQuestion": "How effectively are user identities and access privileges managed in the cloud environment?",
              "benefitsAnalysis": "Proper IAM reduces the risk of unauthorized access and data breaches by enforcing the principle of least privilege.",
              "levels": [
                "Shared accounts and basic password policies are used. Access is managed manually and inconsistently.",
                "Role-based access control (RBAC) is implemented. A centralized identity provider is used, but reviews are infrequent.",
                "Multi-factor authentication (MFA) is enforced for all users. Access reviews are automated and conducted regularly.",
                "Just-in-time (JIT) access and privileged access management (PAM) solutions are integrated. IAM policies are managed as code.",
                "Identity management is fully automated and context-aware, using AI to detect anomalous access patterns and dynamically adjust permissions."
              ]
            },
            "D-742": {
              "id": "D-742",
              "name": "Data Protection",
              "controlQuestion": "How is data protected at rest and in transit within the cloud?",
              "benefitsAnalysis": "Strong data protection ensures confidentiality and integrity, meeting compliance requirements and preventing data leakage.",
              "levels": [
                "Data encryption is applied inconsistently, with some sensitive data stored in plaintext.",
                "All data in transit is encrypted using TLS. Key sensitive data at rest is encrypted.",
                "All data at rest is encrypted by default using platform-managed keys. Data loss prevention (DLP) tools are in use.",
                "Customer-managed encryption keys (CMEK) are used for sensitive data. Data classification is automated to apply appropriate protection levels.",
                "Homomorphic encryption or confidential computing is used for processing sensitive data. AI continuously monitors for and remediates data exposure risks."
              ]
            },
            "D-743": {
              "id": "D-743",
              "name": "Threat Detection and Response",
              "controlQuestion": "How are security threats and incidents detected, investigated, and remediated in the cloud?",
              "benefitsAnalysis": "Rapid threat detection and response minimize the impact of security incidents, reducing potential financial and reputational damage.",
              "levels": [
                "Threat detection relies on basic logs and manual review. Incident response is ad-hoc.",
                "A SIEM tool is in place to aggregate logs. Incident response playbooks are documented but manually executed.",
                "Cloud-native security tools (e.g., GuardDuty, Security Center) are used for automated threat detection. SOAR platforms automate initial response actions.",
                "Threat intelligence is integrated into the detection platform. Threat hunting is conducted proactively.",
                "AI-driven security analytics predict potential threats. Incident response is fully autonomous for known threat patterns, with automated forensic data collection."
              ]
            },
            "D-744": {
              "id": "D-744",
              "name": "Network Security",
              "controlQuestion": "How is the cloud network segmented and protected from external and internal threats?",
              "benefitsAnalysis": "Effective network security limits the blast radius of an attack and prevents unauthorized lateral movement.",
              "levels": [
                "A single, flat network is used with basic firewall rules (security groups) allowing broad access.",
                "Virtual networks are segmented into public and private subnets. Network access control lists (NACLs) are used for basic filtering.",
                "Micro-segmentation is implemented using security groups or cloud-native firewalls to isolate workloads. Web Application Firewall (WAF) is deployed for public-facing applications.",
                "Network traffic is inspected for threats using IDS/IPS. Egress traffic is controlled through a secure web gateway or proxy.",
                "A zero-trust network architecture is fully implemented. AI continuously monitors network flows to detect and block malicious activity in real-time."
              ]
            }
          }
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
          "domains": {
            "D-751": {
              "id": "D-751",
              "name": "Cost Management (FinOps)",
              "controlQuestion": "How are cloud costs tracked, allocated, and optimized across the organization?",
              "benefitsAnalysis": "Effective FinOps practices provide cost visibility, accountability, and optimization, maximizing the business value of cloud spend.",
              "levels": [
                "Cloud spend is tracked at the account level with little visibility into which teams or products are responsible. Budgets are frequently exceeded.",
                "Cost allocation is implemented using tags. Basic budget alerts are configured. Some manual efforts are made to find savings (e.g., shutting down idle instances).",
                "Automated tools are used for cost analysis and reporting. Rightsizing recommendations are systematically reviewed and applied. Savings Plans or Reserved Instances are used.",
                "FinOps is a dedicated function with cross-functional collaboration. Showback/chargeback models are in place. Unit cost economics are tracked.",
                "Cost optimization is fully automated. AI-driven forecasting predicts spend, and resources are dynamically scaled or purchased based on predictive models to maximize savings."
              ]
            },
            "D-752": {
              "id": "D-752",
              "name": "Performance Monitoring and Observability",
              "controlQuestion": "How is the performance and health of cloud applications and infrastructure monitored?",
              "benefitsAnalysis": "Comprehensive observability enables proactive issue detection, faster troubleshooting, and a better understanding of system behavior, leading to improved reliability.",
              "levels": [
                "Monitoring is limited to basic cloud provider metrics (CPU, memory). Alerting is noisy and often ignored.",
                "Centralized logging and metrics collection tools are in place. Dashboards are created for key services.",
                "Application Performance Monitoring (APM) and distributed tracing are implemented, providing visibility into application behavior.",
                "Observability is a core practice, with teams able to ask arbitrary questions about system state. Service Level Objectives (SLOs) are defined and tracked.",
                "AIOps is used to correlate signals, reduce alert fatigue, and predict performance degradation before it impacts users. Automated root cause analysis is performed."
              ]
            },
            "D-753": {
              "id": "D-753",
              "name": "Incident and Problem Management",
              "controlQuestion": "How are service-impacting incidents managed, and how are their root causes addressed?",
              "benefitsAnalysis": "A mature incident management process minimizes downtime and customer impact, while effective problem management prevents recurring issues.",
              "levels": [
                "Incidents are handled reactively with no formal process. Communication is ad-hoc.",
                "A formal on-call rotation and incident severity levels are defined. A status page is used for communication.",
                "Incident response is automated with runbooks and chat tools. Blameless post-mortems are conducted for all major incidents.",
                "Problem management is proactive, using trend analysis to identify and fix underlying issues before they cause incidents. Chaos engineering is practiced to test resilience.",
                "AI is used to predict potential incidents based on system telemetry. Automated remediation actions are triggered to resolve issues without human intervention."
              ]
            },
            "D-754": {
              "id": "D-754",
              "name": "Change and Release Management",
              "controlQuestion": "How are changes to the cloud environment and applications managed to minimize risk?",
              "benefitsAnalysis": "Controlled change management reduces the risk of outages caused by deployments and configuration changes, ensuring service stability.",
              "levels": [
                "Changes are made directly in production with no formal review or tracking.",
                "A change advisory board (CAB) manually reviews major changes. A basic release calendar is maintained.",
                "Change management is integrated into the CI/CD pipeline with automated testing and approvals for low-risk changes.",
                "Progressive delivery techniques (e.g., canary releases, blue-green deployments) are standard practice to limit the impact of failed releases.",
                "AI analyzes the risk of a change based on its content and historical data. Automated rollback is triggered if performance anomalies are detected post-deployment."
              ]
            }
          }
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
          "domains": {
            "D-761": {
              "id": "D-761",
              "name": "Data Storage and Tiering",
              "controlQuestion": "How is data stored in the cloud to balance performance, cost, and access requirements?",
              "benefitsAnalysis": "Optimized data storage reduces costs while ensuring data is accessible and performant according to its usage patterns.",
              "levels": [
                "All data is stored in a single, high-performance storage class, regardless of access frequency.",
                "Data is manually moved between different storage tiers (e.g., hot, cold) based on age.",
                "Automated lifecycle policies are used to transition data to lower-cost storage tiers or archive/delete it.",
                "A data lake architecture is in place, using a mix of object storage, databases, and data warehouses based on the data type and use case.",
                "AI analyzes data access patterns to intelligently and automatically place data in the most optimal storage tier in real-time."
              ]
            },
            "D-762": {
              "id": "D-762",
              "name": "Data Backup and Disaster Recovery",
              "controlQuestion": "How is data backed up, and how quickly can it be recovered in the event of a failure or disaster?",
              "benefitsAnalysis": "A robust backup and DR strategy ensures business continuity by protecting against data loss and minimizing downtime.",
              "levels": [
                "Backups are performed manually and infrequently. Recovery processes are untested.",
                "Automated backups are scheduled for critical data. Recovery is possible but may be slow.",
                "Point-in-time recovery (PITR) is enabled for databases. Backup and recovery processes are regularly tested.",
                "A multi-region disaster recovery strategy is in place, with automated failover for critical services.",
                "Continuous data protection (CDP) is used. Failover and failback are fully automated and transparent to users, with AI validating data consistency post-recovery."
              ]
            },
            "D-763": {
              "id": "D-763",
              "name": "Data Governance and Quality",
              "controlQuestion": "How is data quality, lineage, and compliance managed in the cloud?",
              "benefitsAnalysis": "Strong data governance builds trust in data, ensures compliance with regulations, and improves the quality of analytics and decision-making.",
              "levels": [
                "Data ownership is unclear. There are no formal data quality checks.",
                "A data catalog is manually maintained. Basic data quality rules are defined and checked periodically.",
                "Automated data profiling and quality monitoring are in place. Data lineage is tracked for key data pipelines.",
                "A dedicated data governance framework is implemented with data stewards and a formal data classification policy.",
                "AI is used to automatically discover and classify sensitive data, detect data quality anomalies, and enforce governance policies across all data stores."
              ]
            }
          }
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
          "domains": {
            "D-771": {
              "id": "D-771",
              "name": "Infrastructure as Code (IaC)",
              "controlQuestion": "To what extent is the cloud infrastructure defined, provisioned, and managed using code?",
              "benefitsAnalysis": "IaC enables repeatable, consistent, and auditable infrastructure management, reducing manual errors and accelerating provisioning.",
              "levels": [
                "Infrastructure is provisioned manually via the cloud console. Some scripts may be used for ad-hoc tasks.",
                "IaC tools (e.g., Terraform, CloudFormation) are used for some projects, but state management is inconsistent.",
                "IaC is the standard for all new infrastructure. Code is stored in version control and peer-reviewed.",
                "A library of reusable IaC modules is maintained. Policy-as-code tools (e.g., Open Policy Agent) are used to enforce standards.",
                "Infrastructure provisioning is fully automated and self-healing. AI tools suggest IaC optimizations for cost, security, and performance."
              ]
            },
            "D-772": {
              "id": "D-772",
              "name": "CI/CD Pipelines",
              "controlQuestion": "How automated and sophisticated is the process of building, testing, and deploying applications to the cloud?",
              "benefitsAnalysis": "Automated CI/CD pipelines increase development velocity, improve code quality, and provide a reliable path to production.",
              "levels": [
                "Builds and deployments are triggered manually. Testing is a separate, manual phase.",
                "A CI server automates builds and unit tests upon code commit. Deployments are scripted but manually triggered.",
                "The entire pipeline from code commit to production deployment is automated, including integration and security (DevSecOps) testing.",
                "Advanced deployment strategies (canary, blue-green) are automated within the pipeline. Pipeline performance and reliability are measured with DORA metrics.",
                "AI analyzes pipeline data to predict release failures and identify bottlenecks. Automated canary analysis determines the success of a release based on real-time telemetry."
              ]
            },
            "D-773": {
              "id": "D-773",
              "name": "Containerization and Orchestration",
              "controlQuestion": "How are applications packaged and run in the cloud to ensure portability and scalability?",
              "benefitsAnalysis": "Containers provide application portability, while orchestration platforms like Kubernetes automate deployment, scaling, and management of containerized applications.",
              "levels": [
                "Applications are deployed directly to virtual machines.",
                "Some applications are containerized using Docker, but they are run on individual VMs without an orchestrator.",
                "A container orchestration platform (e.g., Kubernetes, ECS) is used to manage containerized applications.",
                "A standardized internal developer platform (IDP) is built on top of Kubernetes to abstract away complexity and provide a seamless developer experience.",
                "The container platform is fully automated with cluster autoscaling, workload rightsizing, and AI-driven scheduling for optimal resource utilization and cost."
              ]
            }
          }
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
          "domains": {
            "D-781": {
              "id": "D-781",
              "name": "Serverless Computing Adoption",
              "controlQuestion": "How is serverless technology being used to build event-driven, scalable, and cost-efficient applications?",
              "benefitsAnalysis": "Serverless abstracts away infrastructure management, reduces operational overhead, and provides a pay-for-value cost model, accelerating development.",
              "levels": [
                "No use of serverless technologies; all applications run on provisioned servers.",
                "Serverless functions (e.g., AWS Lambda) are used for simple, isolated tasks like data processing or cron jobs.",
                "Serverless is a standard architectural choice for new event-driven microservices and APIs.",
                "Complex applications are built using a combination of serverless functions, managed databases, and event buses, following event-driven architecture patterns.",
                "The entire application portfolio is evaluated for serverless suitability, with AI tools helping to identify and refactor workloads for optimal serverless adoption."
              ]
            },
            "D-782": {
              "id": "D-782",
              "name": "AI/ML Service Integration",
              "controlQuestion": "How are managed AI/ML cloud services being leveraged to build intelligent features and products?",
              "benefitsAnalysis": "Using managed AI/ML services democratizes access to advanced capabilities, allowing teams to build intelligent applications faster without deep AI expertise.",
              "levels": [
                "AI/ML is not used, or models are built from scratch on VMs.",
                "Teams experiment with managed AI services (e.g., Rekognition, Comprehend) for specific proof-of-concept projects.",
                "Managed AI/ML services are a common part of the technology stack, used to add features like personalization, forecasting, and NLP to applications.",
                "A centralized MLOps platform is integrated with cloud AI services to manage the end-to-end lifecycle of machine learning models.",
                "AI itself is used to discover opportunities for new intelligent features, automatically selecting and tuning the best cloud AI services for the job."
              ]
            }
          }
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
          "domains": {
            "D-801": {
              "id": "D-801",
              "name": "Personalization",
              "controlQuestion": "How is user data leveraged to create personalized experiences within the product?",
              "benefitsAnalysis": "Personalization increases user engagement and satisfaction by tailoring content, features, and communication to individual needs.",
              "levels": [
                "The user experience is generic and the same for all users.",
                "Basic personalization is implemented, such as addressing the user by name. Rules-based segmentation is used.",
                "The product uses behavioral data to customize content, recommendations, and user interfaces.",
                "A/B testing and multivariate testing platforms are used to optimize personalized experiences.",
                "AI-driven hyper-personalization adapts the entire user journey in real-time based on a deep understanding of user context and intent."
              ]
            },
            "D-802": {
              "id": "D-802",
              "name": "Recommendation Engines",
              "controlQuestion": "How effectively are recommendation engines used to suggest relevant content, products, or actions?",
              "benefitsAnalysis": "Recommendation engines improve discovery, increase conversion rates, and enhance user engagement by surfacing relevant items.",
              "levels": [
                "No recommendation features exist.",
                "Simple recommendations are provided based on general popularity or basic rules.",
                "Collaborative filtering or content-based filtering algorithms are used to provide personalized recommendations.",
                "Hybrid recommendation models are in place and are continuously evaluated for performance.",
                "Deep learning-based, context-aware recommendation engines provide highly accurate and timely suggestions that anticipate user needs."
              ]
            },
            "D-803": {
              "id": "D-803",
              "name": "Predictive Features",
              "controlQuestion": "How are predictive analytics used to offer proactive insights or functionality to users?",
              "benefitsAnalysis": "Predictive features provide significant value by helping users make better decisions, anticipate future outcomes, and automate tasks.",
              "levels": [
                "The product is purely reactive to user input.",
                "Basic predictive features are available, based on simple historical trend analysis.",
                "Machine learning models are deployed to predict user-specific outcomes, such as churn risk or potential for upgrade.",
                "Predictive insights are embedded directly into user workflows to guide decision-making.",
                "The product uses predictive models to automate complex workflows and proactively alert users to future opportunities or risks."
              ]
            }
          }
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
          "domains": {
            "D-811": {
              "id": "D-811",
              "name": "Analytics as a Service",
              "controlQuestion": "Are premium analytics or benchmarking features offered to customers as a paid service?",
              "benefitsAnalysis": "Offering advanced analytics as a service provides a high-value, high-margin revenue stream by turning customer data into actionable insights.",
              "levels": [
                "Only basic, free reporting is available to customers.",
                "A premium tier is offered with more advanced dashboards and data export capabilities.",
                "Customers can purchase access to an embedded analytics platform for self-service data exploration and visualization.",
                "The platform offers anonymized industry benchmarking, allowing customers to compare their performance against peers.",
                "AI-driven prescriptive analytics are sold as a premium service, providing customers with concrete recommendations to improve their business outcomes."
              ]
            },
            "D-812": {
              "id": "D-812",
              "name": "Data as a Service (DaaS)",
              "controlQuestion": "Is aggregated and anonymized data made available to third parties or partners via APIs?",
              "benefitsAnalysis": "DaaS creates a direct revenue stream from data assets while enabling an ecosystem of partners to build new value on your platform.",
              "levels": [
                "Data is not shared externally.",
                "Ad-hoc, manual data extracts are occasionally provided to key partners.",
                "A formal API program exists for partners to access specific, anonymized datasets.",
                "A self-service data marketplace is available for discovering, purchasing, and accessing data products.",
                "The platform uses AI to dynamically price and package data products based on demand and value."
              ]
            }
          }
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
          "domains": {
            "D-821": {
              "id": "D-821",
              "name": "Data Encryption",
              "controlQuestion": "Is all sensitive data encrypted both in transit and at rest?",
              "benefitsAnalysis": "Encryption is a critical control for protecting data confidentiality and is often a mandatory requirement for regulatory compliance.",
              "levels": [
                "Encryption is not used or is applied inconsistently.",
                "All external traffic is encrypted (HTTPS/TLS). Some sensitive data in databases is encrypted.",
                "All data is encrypted in transit and at rest by default using strong, modern algorithms.",
                "Customer-managed encryption keys (CMEK) are offered, giving customers control over their data's security.",
                "Confidential computing is used to ensure data is encrypted even while being processed in memory."
              ]
            },
            "D-822": {
              "id": "D-822",
              "name": "Access Control",
              "controlQuestion": "How is access to data restricted based on user roles and responsibilities?",
              "benefitsAnalysis": "Strict access control based on the principle of least privilege minimizes the risk of both accidental and malicious data exposure.",
              "levels": [
                "Access controls are coarse-grained, with many users having excessive permissions.",
                "A role-based access control (RBAC) model is defined and implemented.",
                "Fine-grained access controls (e.g., row-level or column-level security) are applied to sensitive data.",
                "Attribute-based access control (ABAC) is used for dynamic, context-aware authorization.",
                "Access patterns are continuously monitored by AI to detect and block suspicious activity or potential privilege misuse."
              ]
            },
            "D-823": {
              "id": "D-823",
              "name": "Data Privacy and Anonymization",
              "controlQuestion": "What techniques are used to protect personally identifiable information (PII) and comply with privacy regulations?",
              "benefitsAnalysis": "Proactive data privacy measures are essential for complying with regulations like GDPR and CCPA and for maintaining customer trust.",
              "levels": [
                "PII is handled inconsistently with no formal policies.",
                "Basic PII discovery and masking are performed in non-production environments.",
                "Automated data discovery and classification tools are used to identify and tag sensitive data across all systems.",
                "Advanced anonymization techniques like differential privacy are applied before data is used for analytics.",
                "A fully automated data privacy platform manages the entire lifecycle of sensitive data, from discovery to consent management and deletion."
              ]
            }
          }
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
          "domains": {
            "D-831": {
              "id": "D-831",
              "name": "Business Intelligence (BI)",
              "controlQuestion": "How are dashboards and reports used to track key performance indicators (KPIs) and business health?",
              "benefitsAnalysis": "BI provides a clear, consolidated view of business performance, enabling leaders to monitor progress against goals and identify areas for improvement.",
              "levels": [
                "Data is siloed in spreadsheets and requires manual effort to create reports.",
                "A centralized BI tool is used to create standardized dashboards for key business functions.",
                "Self-service BI is enabled, allowing business users to create their own reports and visualizations.",
                "BI is embedded directly into operational applications, providing insights in the context of daily workflows.",
                "AI-powered BI automatically surfaces critical insights, explains trends, and provides natural language query capabilities."
              ]
            },
            "D-832": {
              "id": "D-832",
              "name": "Product Analytics",
              "controlQuestion": "How is user behavior data analyzed to understand feature adoption, engagement, and friction points?",
              "benefitsAnalysis": "Product analytics provides deep insights into how users interact with the product, guiding roadmap decisions and improving the user experience.",
              "levels": [
                "No tracking of in-product user behavior.",
                "Basic web analytics tools are used to track page views and clicks.",
                "A dedicated product analytics tool is implemented to track events, funnels, and user retention.",
                "Product analytics is integrated with other data sources (e.g., CRM, support tickets) for a holistic view of the customer journey.",
                "Predictive analytics are used to identify users at risk of churning and features that drive long-term retention."
              ]
            }
          }
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
          "domains": {
            "D-841": {
              "id": "D-841",
              "name": "Data Warehousing and Data Lakes",
              "controlQuestion": "How is data from various sources consolidated for analytics and business intelligence?",
              "benefitsAnalysis": "Centralized data repositories like data warehouses and data lakes provide a single source of truth for analytics, breaking down data silos.",
              "levels": [
                "Data is siloed in transactional databases, making cross-system analysis difficult.",
                "A traditional data warehouse is in place, primarily for structured data.",
                "A cloud data warehouse is used, offering better scalability and separation of storage and compute.",
                "A data lakehouse architecture is adopted, combining the benefits of data lakes (flexibility for unstructured data) and data warehouses (ACID transactions, performance).",
                "The data infrastructure is fully automated and serverless, with AI optimizing data layout, partitioning, and query performance."
              ]
            },
            "D-842": {
              "id": "D-842",
              "name": "Data Integration and ETL/ELT",
              "controlQuestion": "How is data moved from source systems to the central analytics platform?",
              "benefitsAnalysis": "Reliable and efficient data integration pipelines are crucial for ensuring that analytics platforms are populated with timely and accurate data.",
              "levels": [
                "Data integration relies on manual data dumps and custom scripts.",
                "A traditional ETL tool is used for batch data integration.",
                "Cloud-based ELT (Extract, Load, Transform) tools are used for more scalable and flexible data integration.",
                "Data pipelines are managed as code (DataOps) and orchestrated with tools like Airflow or Dagster.",
                "Real-time data streaming and change data capture (CDC) are the default for data integration. AI monitors pipelines for anomalies and automates recovery."
              ]
            }
          }
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
          "domains": {
            "D-911": {
              "id": "D-911",
              "name": "Chatbots and Virtual Assistants",
              "controlQuestion": "How are conversational AI interfaces used to support customers and automate tasks?",
              "benefitsAnalysis": "Virtual assistants provide 24/7 support, reduce operational costs, and offer a scalable way to handle user queries and tasks.",
              "levels": [
                "No conversational interfaces are used.",
                "A basic, scripted chatbot is used for answering simple FAQs.",
                "An NLP-powered virtual assistant handles common user requests and can perform basic tasks.",
                "The virtual assistant is integrated with backend systems and can manage complex, multi-turn conversations and transactions.",
                "A proactive, AI-driven assistant anticipates user needs, initiates conversations, and provides personalized guidance."
              ]
            },
            "D-912": {
              "id": "D-912",
              "name": "Sentiment Analysis",
              "controlQuestion": "How is sentiment analysis used to understand customer feedback and opinions at scale?",
              "benefitsAnalysis": "Sentiment analysis provides a scalable way to gauge customer emotion from text data like reviews and support tickets, enabling proactive customer experience management.",
              "levels": [
                "Customer feedback is reviewed manually and anecdotally.",
                "A basic sentiment analysis tool is used to classify feedback as positive, negative, or neutral.",
                "Aspect-based sentiment analysis is used to understand opinions about specific product features or service attributes.",
                "Sentiment trends are tracked over time and correlated with business KPIs and product changes.",
                "AI models analyze sentiment with a deep understanding of context, sarcasm, and emotion, providing nuanced insights that drive strategic decisions."
              ]
            }
          }
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
          "domains": {
            "D-921": {
              "id": "D-921",
              "name": "ML Operations (MLOps)",
              "controlQuestion": "How mature is the process for building, deploying, and managing machine learning models in production?",
              "benefitsAnalysis": "MLOps brings DevOps principles to machine learning, enabling teams to reliably and efficiently deploy and maintain models at scale.",
              "levels": [
                "Models are developed and deployed manually by data scientists. There is no versioning or monitoring.",
                "Model training and deployment are scripted. Models are versioned in a code repository.",
                "An automated CI/CD pipeline for ML is in place, covering data validation, training, model validation, and deployment.",
                "A dedicated MLOps platform is used to manage the entire model lifecycle, including feature stores and model monitoring for drift and performance degradation.",
                "The MLOps process is fully automated and self-optimizing, with AI suggesting model improvements and automatically retraining and deploying models when needed."
              ]
            }
          }
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
          "domains": {
            "D-931": {
              "id": "D-931",
              "name": "Image Recognition and Classification",
              "controlQuestion": "How does the product use image recognition to identify objects, people, or scenes in images?",
              "benefitsAnalysis": "Automated image recognition can power features like content moderation, visual search, and intelligent photo organization.",
              "levels": [
                "No image recognition capabilities.",
                "Basic image classification is used for simple use cases, often relying on pre-trained models.",
                "Custom models are trained to recognize domain-specific objects or attributes with high accuracy.",
                "Image recognition is integrated into real-time workflows, such as identifying products in a user-uploaded photo.",
                "The system can understand complex scenes and the relationships between objects within an image, enabling sophisticated visual understanding."
              ]
            }
          }
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
          "domains": {
            "D-941": {
              "id": "D-941",
              "name": "Churn Prediction",
              "controlQuestion": "How is customer data used to predict which customers are likely to churn?",
              "benefitsAnalysis": "Accurately predicting churn allows customer success and marketing teams to intervene proactively with targeted retention campaigns, reducing revenue loss.",
              "levels": [
                "Churn is analyzed retroactively after customers have already left.",
                "Basic rules-based indicators (e.g., inactivity) are used to flag at-risk customers.",
                "A machine learning model is used to generate a churn risk score for each customer based on historical and behavioral data.",
                "Churn predictions are integrated into the CRM, triggering automated workflows for the customer success team.",
                "The churn model not only predicts who will churn but also identifies the key drivers for each customer and recommends the next best action to retain them."
              ]
            },
            "D-942": {
              "id": "D-942",
              "name": "Demand Forecasting",
              "controlQuestion": "How are historical data and external factors used to forecast future product demand or service usage?",
              "benefitsAnalysis": "Accurate demand forecasting optimizes inventory management, resource allocation, and capacity planning, leading to reduced costs and improved service levels.",
              "levels": [
                "Forecasting is based on simple historical averages or manual estimates.",
                "Statistical forecasting models (e.g., ARIMA) are used to project future demand.",
                "Machine learning models that incorporate more variables (e.g., seasonality, promotions, external factors) are used for more accurate forecasting.",
                "Forecasts are generated automatically and integrated into planning and operational systems.",
                "An ensemble of AI models continuously learns and adapts to produce highly accurate, granular forecasts that drive autonomous resource provisioning."
              ]
            }
          }
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
          "domains": {
            "D-951": {
              "id": "D-951",
              "name": "Task Automation",
              "controlQuestion": "How are software 'bots' used to automate manual, repetitive tasks within business processes?",
              "benefitsAnalysis": "Task automation reduces manual effort, minimizes human error, and accelerates process execution times.",
              "levels": [
                "All processes are fully manual.",
                "Simple desktop automation is used to automate individual tasks for specific users.",
                "A centralized RPA platform is used to develop and manage bots for automating cross-departmental processes.",
                "RPA is integrated with other systems via APIs for more robust and resilient automation.",
                "Intelligent Process Automation (IPA) is used, where AI capabilities like NLP and computer vision are combined with RPA to automate more complex, end-to-end processes."
              ]
            }
          }
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
          "domains": {
            "D-961": {
              "id": "D-961",
              "name": "Voice Commands and Control",
              "controlQuestion": "Can users interact with and control the application using their voice?",
              "benefitsAnalysis": "Voice commands provide a convenient, hands-free way for users to interact with the application, improving accessibility and ease of use.",
              "levels": [
                "The application has no voice interaction capabilities.",
                "Basic voice commands are supported for a limited set of simple actions.",
                "Natural language understanding (NLU) is used to interpret more complex and varied voice commands.",
                "Voice control is deeply integrated, allowing users to navigate and operate the entire application via speech.",
                "The system can understand conversational commands, manage context across multiple interactions, and respond with synthesized speech."
              ]
            }
          }
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
          "domains": {
            "D-971": {
              "id": "D-971",
              "name": "Adversarial Attack Defense",
              "controlQuestion": "How are AI models protected against adversarial attacks designed to manipulate their outcomes?",
              "benefitsAnalysis": "Defending against adversarial attacks is crucial for preventing malicious actors from compromising the integrity and reliability of AI-driven decisions.",
              "levels": [
                "There is no awareness of or defense against adversarial attacks.",
                "Basic input validation and sanitization are performed.",
                "Adversarial training techniques are used to make models more robust to manipulated inputs.",
                "Defensive distillation and other advanced methods are employed. Models are regularly tested for vulnerabilities.",
                "AI-powered monitoring systems are in place to detect potential adversarial attacks in real-time and trigger defensive measures."
              ]
            },
            "D-972": {
              "id": "D-972",
              "name": "Ethical AI and Bias Detection",
              "controlQuestion": "What processes are in place to ensure AI models are fair, transparent, and free from unintended bias?",
              "benefitsAnalysis": "Ethical AI practices build trust with users and stakeholders, ensure fairness, and mitigate legal and reputational risks associated with biased or opaque models.",
              "levels": [
                "There is no formal process for evaluating models for bias or fairness.",
                "Manual reviews of training data and model outcomes are conducted for obvious biases.",
                "Automated tools are used to scan training data and model predictions for statistical biases across different demographic groups.",
                "Model explainability techniques (e.g., SHAP, LIME) are used to make model decisions more transparent and interpretable.",
                "A comprehensive Ethical AI framework is in place, with a dedicated review board and continuous, automated monitoring to ensure all models operate fairly and transparently."
              ]
            }
          }
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
          "domains": {
            "D-981": {
              "id": "D-981",
              "name": "Content Generation",
              "controlQuestion": "How is generative AI used to assist users in creating written or visual content?",
              "benefitsAnalysis": "AI-powered content generation can significantly boost user productivity, overcome creative blocks, and automate the creation of marketing copy, reports, and designs.",
              "levels": [
                "No content generation features.",
                "Basic template-based text generation is used.",
                "A large language model (LLM) is integrated to provide writing assistance, such as drafting emails or summarizing text.",
                "Fine-tuned generative models are used to create high-quality, domain-specific content that aligns with the company's style and brand.",
                "A multi-modal generative AI platform allows users to create a mix of text, images, and code from natural language prompts, fully integrated into their workflow."
              ]
            }
          }
        }
      }
    }
  }
};