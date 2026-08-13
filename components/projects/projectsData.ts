export const projects = [
  {
    id: 1,

    title: "Sentiment Analysis",

    description:
      "An NLP-based Machine Learning application that analyzes textual data and classifies sentiment as Positive, Negative, or Neutral. The project demonstrates an end-to-end NLP workflow from text preprocessing and feature extraction to model training and evaluation.",

    image: "/Projects/sentiment-analysis.png",

    tech: [
      "Python",
      "NLP",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "TF-IDF",
    ],

    github: "https://github.com/abhinaymeshram01/sentiment-analysis",

    highlights: [
      "NLP Pipeline",
      "Text Preprocessing",
      "TF-IDF",
      "Sentiment Classification",
      "Model Evaluation",
    ],
  },

  {
    id: 2,

    title: "Intel Image Classification",

    description:
      "Built an end-to-end Deep Learning image classification system using a custom Convolutional Neural Network (CNN) to classify natural and urban scenes into six categories. Trained the model using TensorFlow and Keras and integrated it with a FastAPI REST API for image-based predictions.",

    image: "/Projects/intel-image-classification.png",

    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "FastAPI",
      "Pillow",
    ],

    github: "YOUR_INTEL_PROJECT_GITHUB_URL",

    highlights: [
      "83.90% Test Accuracy",
      "Custom CNN",
      "6 Scene Classes",
      "TensorFlow/Keras",
      "FastAPI REST API",
    ],
  },

  {
    id: 3,

    title: "Credit Card Fraud Detection",

    description:
      "Built an imbalanced classification system capable of detecting fraudulent transactions using SMOTE, XGBoost, and advanced evaluation metrics. Deployed with an interactive dashboard for real-time predictions.",

    image: "/Projects/credit-card-fraud.png",

    tech: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "FastAPI",
      "Streamlit",
    ],

    github:
      "https://github.com/abhinaymeshram01/credit-card-fraud-detection/tree/main",

    highlights: [
      "ROC-AUC 0.98",
      "SMOTE",
      "XGBoost",
      "FastAPI API",
      "Interactive Dashboard",
    ],
  },
];
