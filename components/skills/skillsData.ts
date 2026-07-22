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
      "OOP",
    ],
  },

  {
    title: "Machine Learning",
    icon: Brain,
    color: {
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "hover:shadow-blue-500/20",
    },
    skills: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
    ],
  },

  {
    title: "Deep Learning",
    icon: Cpu,
    color: {
      text: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      glow: "hover:shadow-violet-500/20",
    },
    skills: [
      "TensorFlow",
      "Keras",
      "PyTorch",
    ],
  },

  {
    title: "Data Analytics",
    icon: Database,
    color: {
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "hover:shadow-emerald-500/20",
    },
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },

  {
    title: "Deployment",
    icon: Rocket,
    color: {
      text: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      glow: "hover:shadow-orange-500/20",
    },
    skills: [
      "FastAPI",
      "Docker",
      "Streamlit",
      "AWS",
    ],
  },

  {
    title: "Tools",
    icon: Wrench,
    color: {
      text: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      glow: "hover:shadow-pink-500/20",
    },
    skills: [
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Goggle Colab",
    ],
  },
];