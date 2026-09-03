import {
  Code2,
  Brain,
  Cpu,
  Database,
  Rocket,
  Wrench,
} from "lucide-react";

export const skills = [
  {
    title: "Programming",
    icon: Code2,
    color: {
      text: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      glow: "hover:shadow-cyan-500/20",
    },
    skills: [
      "Python",
      "SQL",
      "Git",
    ],
  },

  {
    title: "GenAI & LLM",
    icon: Brain,
    color: {
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "hover:shadow-blue-500/20",
    },
    skills: [
      "Generative AI",
      "LLMs",
      "LangChain",
      "Google Gemini",
      "Google GenAI SDK",
      "Prompt Engineering",
      "Conversational AI",
    ],
  },

  {
    title: "RAG & Vector DB",
    icon: Database,
    color: {
      text: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      glow: "hover:shadow-violet-500/20",
    },
    skills: [
      "RAG",
      "ChromaDB",
      "FAISS",
      "Vector Embeddings",
      "Semantic Search",
      "Similarity Search",
      "Document Processing",
      "Text Splitting",
    ],
  },

  {
    title: "Machine Learning & NLP",
    icon: Cpu,
    color: {
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "hover:shadow-emerald-500/20",
    },
    skills: [
      "Scikit-learn",
      "NLP",
      "Classification",
      "Regression",
      "Feature Engineering",
      "Model Evaluation",
      "SMOTE",
    ],
  },

  {
    title: "Deep Learning & Data",
    icon: Cpu,
    color: {
      text: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      glow: "hover:shadow-orange-500/20",
    },
    skills: [
      "TensorFlow",
      "Keras",
      "ANN",
      "CNN",
      "Pandas",
      "NumPy",
      "EDA",
      "Statistical Analysis",
      "Data Cleaning",
      "Matplotlib",
      "Seaborn",
    ],
  },

  {
    title: "Backend & Deployment",
    icon: Rocket,
    color: {
      text: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      glow: "hover:shadow-pink-500/20",
    },
    skills: [
      "FastAPI",
      "Streamlit",
      "Docker",
      "AWS EC2",
      "GitHub",
    ],
  },
];
