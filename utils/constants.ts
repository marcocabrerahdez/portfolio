export const experiences = [
  {
    id: 1,
    title: 'Machine Learning Engineer',
    company: 'Nartex Software',
    date: 'Aug 2023 - Present',
    description: [
      'Spearheaded a Retrieval‑Augmented Generation (RAG) pipeline using Python, Hugging Face Transformers y FAISS para la clasificación de documentos de cumplimiento legal, logrando un 93 % de precisión.',
      'Diseñó e implementó pipelines ETL de extremo a extremo en Python (Pandas, NumPy) con Apache Airflow para ingerir y transformar 3 millones de registros diarios provenientes de APIs REST y PostgreSQL, alimentando analíticas posteriores.',
      'Desarrolló una red neuronal convolucional en TensorFlow/Keras para la detección de defectos en control de calidad de fabricación, alcanzando un 94 % de precisión de validación.',
      'Containerizó microservicios de inferencia con Docker y los desplegó en Kubernetes, reduciendo el tiempo de despliegue en un 60 %.',
      'Supervisó el rendimiento de modelos utilizando Prometheus y Grafana e implementó desencadenadores de detección de deriva para la re‑entrenamiento automatizado.',
      'Lideró talleres de MLOps, mentorando a dos ingenieros junior en control de versiones con Git, pipelines CI/CD en Jenkins y gestión de experimentos con MLflow.',
      'Implementó flujos de optimización de hiperparámetros con Optuna, recortando el tiempo de ajuste en un 40 % y aumentando el rendimiento final en un 5 %.',
      'Diseñó un almacén de características centralizado utilizando Feast y Redis, reduciendo la latencia de recuperación en un 50 % y mejorando el rendimiento de inferencia en tiempo real en un 30 %.',
      'Simplificó los procesos de limpieza de datos con Python y expresiones regulares, reduciendo las inconsistencias en un 20 % y mejorando la fiabilidad de las tareas de machine learning posteriores.'
    ],
  },
  {
    id: 2,
    title: 'Junior AI Researcher',
    company: 'University of La Laguna',
    date: 'Nov 2022 - Jun 2023',
    description: [
      'Co‑autor de una publicación sobre sistemas de apoyo a la decisión clínica basados en IA (CDSS), contribuyendo a la investigación en modelos sustitutos para la diabetes tipo 1.',
      'Desarrolló modelos sustitutos basados en machine learning para reemplazar modelos de simulación complejos, consiguiendo una puntuación IoU superior a 0,9 y garantizando alta precisión en predicciones médicas.',
      'Diseñó y optimizó un pipeline de analítica predictiva para la toma de decisiones clínicas, permitiendo inferencias en tiempo real y reduciendo la complejidad computacional 2.700 veces respecto a los modelos tradicionales.'
    ],
  }
];


export const projects = [
  {
    id: "diabetes",
    title: "Enhancing decisions with surrogate models",
    description: "Computerized clinical decision support systems (CDSS) that integrate the latest scientific evidence are crucial for improving patient care quality. This case study on Type 1 Diabetes Mellitus (T1DM) demonstrates the development of machine learning (ML) based surrogate models derived from health technology assessment models. These surrogate models replace complex simulation models, enabling real-time applications and simulation-in-the-loop optimization. The study details the creation of datasets for training and testing and compares various ML techniques. With an Intersection over Union (IoU) score above 0.9, these surrogate models provide a faster alternative for integration into CDSS.",
    imageSrc: "/diabetes.webp",
    imageAlt: "Project 1",
    linkHref: "https://github.com/marcocabrerahdez/TFG"
  },
  {
    id: "ftp-server",
    title: "FTP Server build on C++",
    description: "This project involves developing a File Transfer Protocol (FTP) server using C++. It focuses on creating a robust and efficient system for transferring files between clients and servers. Key features include handling multiple connections, implementing standard FTP commands such as 'get' and 'put,' and ensuring secure data transfer. The project emphasizes the use of C++ for its performance and reliability in managing network operations. The resulting FTP server is designed to be both powerful and user-friendly, with a clean and modern architecture that ensures high performance and ease of use in various applications.",
    imageSrc: "/ftp-server.webp",

    imageAlt: "Project 2",
    linkHref: "https://github.com/marcocabrerahdez/ftp-server"
  }
];

export const posts = [
  {
    id: 1,
    title: 'Guía para crear y vender productos digitales con Inteligencia Artificial',
    date: '2025-08-07',
    description: [
      'Descubre cómo crear y vender productos digitales utilizando herramientas de inteligencia artificial en solo 7 días. Esta guía paso a paso te enseña a identificar nichos rentables, generar ebooks, plantillas y mini cursos rápidamente, lanzar tu producto en Gumroad y promocionarlo de forma orgánica en redes sociales y email marketing.',
      'Incluye un plan de acción de 7 días, 20 prompts listos para usar, listas de comprobación para cada fase y actualizaciones de por vida con soporte por correo. Ideal para emprendedores, freelancers y creadores que quieren convertir sus ideas en ingresos pasivos.'
    ],
    imageSrc: '/ai-guide.webp',
    imageAlt: 'AI Digital Products Guide',
    linkHref: 'https://marcocabrerahdez.gumroad.com/l/ai-digital-products-guide'
  }
];
