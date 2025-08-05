# EvNavigator
EV Navigator
# EV Navigator

EV Navigator is a high-fidelity prototype of an AI-powered platform designed for private equity, venture capital, and corporate development professionals. It provides an integrated environment to streamline due diligence, model value creation, and automate the generation of investment committee reports.

This application is built entirely with front-end technologies (HTML, CSS, JavaScript) and serves as a comprehensive demonstration of a modern, data-driven workflow for investment analysis.

## Core Features

*   **Portfolio Dashboard:** A high-level overview of all portfolio companies with an AI-powered daily briefing and conversational analysis tools.
*   **PortCo Hub:** A detailed dashboard for each company that adapts to its lifecycle stage, featuring an interactive Gantt chart for due diligence and a KPI tracker for growth-stage companies.
*   **ARIA AI Assistant:** A simulated AI assistant that provides deep-dive analysis, answers guided questions, and generates rich content like charts, tables, and strategic judgments.
*   **Capability Modeling Canvas:** An interactive three-pane tool to assess a company's operational maturity using a proprietary framework, complete with a radar chart, dual-thumb sliders, and AI-generated recommendations.
*   **Knowledge Graph:** A dynamic D3.js visualization that maps the relationships between all diligence artifacts—from source documents to tasks to final reports.
*   **Diligence Workspace & Report Generator:** A synthesis module where users select key findings to build a strategic narrative and automatically generate a professional, multi-page PDF Investment Committee report.

## Live Demo & Setup

This is a front-end-only application. To run it locally, you simply need to serve the files from a local web server.

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/ev-navigator.git
    cd ev-navigator
    ```

2.  Start a simple web server. If you have Python 3 installed, you can run:
    ```bash
    python -m http.server
    ```

3.  Open your web browser and navigate to `http://localhost:8000`.

## Project Structure

The project is organized into distinct modules, with data and logic clearly separated.

```
/
├── components/
│   ├── header.html         # Shared header component
│   └── sidebar.html        # Shared sidebar navigation
├── css/
│   └── styles.css          # Custom styles, theming, and complex component CSS
├── js/
│   ├── aria.js             # Logic for the ARIA AI Assistant page
│   ├── data.js             # Core data for TechFlow (anomalies, ARIA responses)
│   ├── home.js             # Logic for the main portfolio dashboard (index.html)
│   ├── knowledge.js        # D3.js logic for the Knowledge Graph
│   ├── knowledge-data.js   # Node and link data for the Knowledge Graph
│   ├── modeling.js         # Logic for the Capability Modeling Canvas
│   ├── MaturityModel.js    # The complete data structure for the maturity framework
│   ├── portco.js           # Logic for the individual PortCo Hub pages
│   ├── portco-data.js      # Data for PortCo pages (Gantt plan, CloudVantage info)
│   ├── report-generator.js # The jsPDF engine for creating the IC Report
│   ├── shared.js           # Shared functions for component loading, navigation, theme
│   └── state.js            # Global state management (load/save to localStorage)
├── *.html                  # HTML files for each main page of the application
└── *.png                   # Image assets (logos)
```

## Key Concepts & Technology

### Simulated AI (ARIA)

The most critical aspect of this prototype is that the **ARIA AI Assistant is simulated**. There is no backend Large Language Model (LLM).

*   **How it works:** In `data.js` and `portco-data.js`, there are large JavaScript objects (`techflow_ariaResponses`, `portfolioResponses`, etc.).
*   These objects use user prompts (e.g., `"Summarize the key risks..."`) as keys.
*   The corresponding value is an object containing a `renderFunc`, which is a JavaScript function that returns pre-defined, rich HTML.
*   The application's JavaScript (`aria.js`, `home.js`) takes the user's prompt, looks it up in the map, and executes the `renderFunc` to display the "AI's response". This creates a highly realistic and interactive, yet fully deterministic, user experience.

### State Management

*   The application's state (e.g., which company is selected, maturity scores, workspace selections) is managed via `localStorage`.
*   The `state.js` file provides `loadState()` and `saveState()` functions to interact with `localStorage`, ensuring persistence between page loads and sessions.

### Key Libraries

*   **Tailwind CSS:** For rapid, utility-first styling.
*   **Chart.js:** Used for all quantitative charts (bar, line, doughnut, radar).
*   **D3.js:** Powers the interactive, force-directed Knowledge Graph visualization.
*   **jsPDF & jspdf-autotable:** Used to programmatically generate the final PDF Investment Committee report.
*   **html2canvas:** A crucial library used by the report generator to capture complex HTML components (like ARIA's rich responses) as images, which are then embedded into the PDF.