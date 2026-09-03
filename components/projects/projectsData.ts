export const projects = [
  {
    id: 1,

    title: "RAG Document Assistant",

    description:
      "Built a Retrieval-Augmented Generation application for querying information from uploaded documents using LangChain and Google Gemini. Developed an end-to-end retrieval pipeline with document processing, text splitting, vector embeddings, ChromaDB storage, and similarity-based retrieval.",

    image: "/Projects/rag-document-assistant.png",

    tech: [
      "Python",
      "LangChain",
      "Google Gemini",
      "ChromaDB",
      "RAG",
      "FastAPI",
      "Docker",
    ],

    github:
      "https://github.com/abhinaymeshram01/rag-document-assistant",

    highlights: [
      "RAG Pipeline",
      "Vector Embeddings",
      "ChromaDB",
      "Similarity Search",
      "Google Gemini",
      "FastAPI",
      "Docker",
    ],
  },

  {
    id: 2,

    title: "AI Persona Assistant",

    description:
      "Built a conversational AI application using Google Gemini with configurable Coding Tutor, Friendly Assistant, and Sarcastic Buddy personas. Implemented custom conversation memory for context-aware responses and developed a Streamlit interface with persona switching and streaming LLM responses.",

    image: "/Projects/ai-persona-assistant.png",

    tech: [
      "Python",
      "Google Gemini",
      "Google GenAI SDK",
      "Streamlit",
      "Conversational AI",
      "Prompt Engineering",
    ],

    github:
      "https://github.com/abhinaymeshram01/ai-chatbot-prompt-engineering",

    highlights: [
      "Google Gemini",
      "Custom Memory",
      "Prompt Engineering",
      "Conversational AI",
      "Persona Switching",
      "Streaming Responses",
    ],
  },

  {
    id: 3,

    title: "Credit Card Fraud Detection",

    description:
      "Built an end-to-end fraud detection system on 284,807 credit card transactions using EDA, feature scaling, SMOTE oversampling, and XGBoost. Optimized the model using RandomizedSearchCV and Stratified K-Fold Cross-Validation, then deployed it through FastAPI and Streamlit.",

    image: "/Projects/credit-card-fraud.png",

    tech: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "FastAPI",
      "Streamlit",
      "SMOTE",
    ],

    github:
      "https://github.com/abhinaymeshram01/credit-card-fraud-detection/tree/main",

    highlights: [
      "284K+ Transactions",
      "ROC-AUC 0.977",
      "PR-AUC 0.869",
      "93% Precision",
      "82% Recall",
      "SMOTE",
      "XGBoost",
    ],
  },
];
