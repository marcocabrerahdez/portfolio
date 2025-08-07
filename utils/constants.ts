export const NAME = 'Marco Cabrera';
export const ABOUTME = 'I’m a passionate and innovative Software Engineer specializing in machine learning and full-stack development. With strong skills in Python, React, and Go, I’ve successfully built scalable and efficient software solutions that have dramatically enhanced system performance and processing times in my current projects. I thrive in fast-paced, dynamic environments, always seeking to leverage my expertise to drive innovation and efficiency. I’m excited about contributing to projects that challenge the boundaries of software development and machine learning.'
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
    id: 'moodle',
    title: 'Moodle Platform for Hacienda Academy',
    description: 'Developed and deployed a Moodle platform on AWS for a civil service exam academy. Utilized EC2, S3, and RDS to ensure scalability and security. Customized Moodle to meet specific educational needs, implementing automated notifications and backups. Applied AWS security best practices, improving platform reliability and user experience.',
    imageSrc: '/moodle.webp',
    imageAlt: 'Moodle Project',
    linkHref: 'https://www.tribuconta.com/'
  },
  {
    id: "diabetes",
    title: "Enhancing decisions with surrogate models",
    description: "This project demonstrates the creation of machine learning surrogate models to optimize clinical decision support systems for Type 1 Diabetes Mellitus (T1DM). Surrogate models accelerate real-time applications by replacing complex simulation models. The study compares various ML techniques, achieving an IoU score above 0.9 for high-performance integrations in clinical decision support systems.",
    imageSrc: "/diabetes.webp",
    imageAlt: "Diabetes Project",
    linkHref: "https://github.com/marcocabrerahdez/TFG"
  },
  {
    id: "ftp-server",
    title: "Basic FTP Server in C++",
    description: "Developed a CLI-based FTP server using C++ for robust and efficient file transfers. Key features include multi-connection handling, standard FTP commands (get, put), and secure data transfer. This project highlights C++ performance in network operations, ensuring both high performance and ease of use.",
    imageSrc: "/ftp-server.webp",
    imageAlt: "FTP Server Project",
    linkHref: "https://github.com/marcocabrerahdez/ftp-server"
  },
  {
    id: "video-bot",
    title: "Automated Video Creation Bot for 'Guess the Capital' Game",
    description: "Created a Python-based bot that generates and uploads videos for a 'Guess the Capital' game. It engages viewers with random images and quizzes, enhancing interactivity through automation.",
    imageSrc: "/video-bot.webp",
    imageAlt: "Video Bot Project",
    linkHref: "https://github.com/marcocabrerahdez/tiktok-video-uploader"
  },
  {
    id: "astar-taxi",
    title: "A* Search Algorithm for Autonomous Taxis",
    description: "Developed a command-line tool implementing A* search strategies for optimizing autonomous taxi routes. The project enhances navigation systems by improving route efficiency and real-time decision-making.",
    imageSrc: "/astar-taxi.webp",
    imageAlt: "A* Search Taxi Project",
    linkHref: "https://github.com/marcocabrerahdez/A-Star-Search"
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
