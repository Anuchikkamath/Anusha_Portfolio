export const projects = [
  {
    title: "TARIC Code Prediction for Products",
    type: "Company/Internal Project",
    shortDescription:
      "LLM-based product classification system to predict TARIC codes using contextual reasoning and structured outputs.",
    description:
      "A product classification workflow that uses LLM reasoning and structured outputs to support TARIC code prediction.",
    problem:
      "Manual product classification was time-consuming and required domain understanding.",
    myRole:
      "Designed prompt workflows and structured response logic for product classification.",
    workflow:
      "Product input -> preprocessing -> prompt creation -> LLM reasoning -> TARIC code prediction -> structured JSON output -> validation",
    techStack: [
      "Python",
      "LLMs",
      "Prompt Engineering",
      "FastAPI",
      "JSON",
      "OpenAI/Gemini APIs",
    ],
    outcome:
      "Helped reduce manual classification effort and improved consistency in product code prediction.",
  },
  {
    title: "NLP-to-SQL Query Generator",
    type: "Personal Project",
    shortDescription:
      "A natural language to SQL system that converts user questions into SQL queries.",
    description:
      "A plain-English query assistant that transforms user questions into SQL statements.",
    problem: "Non-technical users often struggle to write SQL queries.",
    myRole:
      "Built the logic to understand user input and generate SQL queries.",
    workflow:
      "User question -> schema understanding -> prompt engineering -> SQL generation -> query validation -> final SQL output",
    techStack: ["Python", "NLP", "LLMs", "SQL", "FastAPI/Streamlit"],
    outcome:
      "Enabled users to generate SQL queries from plain English questions.",
  },
  {
    title: "Inventory Demand Forecasting",
    type: "Personal Project",
    shortDescription:
      "Machine learning project to forecast product demand based on historical inventory and sales data.",
    description:
      "A forecasting project that estimates product demand from inventory and historical sales patterns.",
    problem:
      "Businesses need better demand estimation to avoid overstocking and stockouts.",
    myRole:
      "Performed data preprocessing, feature engineering, model training, and evaluation.",
    workflow:
      "Historical data -> cleaning -> feature engineering -> model training -> forecasting -> evaluation -> visualization",
    techStack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "Data Visualization",
    ],
    outcome:
      "Generated demand forecasts to support inventory planning and business decision-making.",
  },
  {
    title: "README Generator",
    type: "Personal Project",
    shortDescription:
      "AI-powered README generator that creates professional README files based on project details.",
    description:
      "A documentation assistant that generates structured README content from project inputs.",
    problem:
      "Developers often skip writing proper documentation for their projects.",
    myRole:
      "Built prompt-based generation flow for structured README creation.",
    workflow:
      "Project details input -> prompt template -> LLM generation -> markdown formatting -> final README output",
    techStack: [
      "JavaScript/Python",
      "LLMs",
      "Prompt Engineering"
    ],
    outcome:
      "Automated README creation and improved project documentation quality.",
  },
];
