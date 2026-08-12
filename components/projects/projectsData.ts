export const projects = [
  {
    id: 1,

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

    github: "https://github.com/abhinaymeshram01/intel-image-classification",

    highlights: [
      "83.90% Test Accuracy",
      "Custom CNN",
      "6 Scene Classes",
      "TensorFlow/Keras",
      "FastAPI REST API",
    ],
  },

  {
    id: 2,

    title: "Customer Churn Prediction",

    description:
      "Developed an end-to-end Machine Learning pipeline to predict customer churn using feature engineering, model optimization, and deployment with FastAPI. The application supports real-time predictions and production-ready inference.",

    image: "/Projects/customer-churn.png",

    tech: [
      "Python",
      "Scikit-learn",
      "FastAPI",
      "Docker",
      "AWS",
    ],

    github:
      "https://github.com/abhinaymeshram01/customer-churn-prediction-api",

    highlights: [
      "85% ROC-AUC Score",
      "Feature Engineering",
      "Random Forest",
      "FastAPI Deployment",
      "Production Pipeline",
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
