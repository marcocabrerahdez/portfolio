export const NAME = 'Marco Cabrera';
export const ABOUTME = 'I’m a passionate and innovative Software Engineer specializing in machine learning and full-stack development. With strong skills in Python, React, and Go, I’ve successfully built scalable and efficient software solutions that have dramatically enhanced system performance and processing times in my current projects. I thrive in fast-paced, dynamic environments, always seeking to leverage my expertise to drive innovation and efficiency. I’m excited about contributing to projects that challenge the boundaries of software development and machine learning.'
export const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Nartex Software',
    date: 'Aug 2023 - Present',
    description: [
      "Developed a Retriever-Augmented Generator (RAG) solution, using Python, PyTorch, Langchain, and Selenium, reducing paperwork processing time by 75%.",
      "Participated in migrating a legacy system to a microservices architecture, improving system scalability and reliability while supporting over 5 applications.",
      "Led the re-engineering of a project migrating from Java and JSP to React and Go, enhancing system response times by 30% and supporting 50% more concurrent users.",
      "Created a pipeline to automate the creation of monthly incident reports using Selenium web scraping, saving 2 hours of manual work per day.",
      "Integrated Hugo into the documentation pipeline, increasing the accuracy and timeliness of content updates, leading to a 25% boost in user engagement.",
      "Implemented CI/CD pipelines for 80% of the company's projects, reducing deployment times by 50% and enhancing collaboration through automated workflows.",
      "Migrated a legacy Moodle system from 2013, modernizing the platform and improving its functionality.",
      "Mentored a team member, guiding them through project tasks, code reviews, and best practices to ensure timely and high-quality deliveries."
    ],
  },
  {
    id: 2,
    title: 'Junior Software Engineer',
    company: 'Kaudal (Arquimea Group)',
    date: 'Jan 2023 - May 2023',
    description: [
      "Designed and implemented features for a web application using Java and Vue.js, improving functionality and performance as part of full-stack development experience."
    ],
  },
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

export const education = [
  {
    id: 1,
    degree: 'Bachelor Degree in Computer Science',
    institution: 'University of La Laguna',
    year: '2019 - 2023',
    logoSrc: '/ull-logo.png',
    logoAlt: 'University of La Laguna Logo'
  },
  {
    id: 2,
    degree: 'Angular From The Basics To Advanced',
    institution: 'Udemy',
    year: '2023',
    logoSrc: '/udemy-logo.png',
    logoAlt: 'Udemy Logo'
  },
  {
    id: 2,
    degree: 'B2 English Certificate',
    institution: 'Official Language School of Santa Cruz de Tenerife',
    year: '2019',
    logoSrc: '/eoi-logo.png',
    logoAlt: 'Official Language School Logo'
  }
];

export const skills = [
  'Python',
  'PyTorch',
  'numpy',
  'Go',
  'Java',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'vite',
  'PostgreSQL',
  'Selenium',
  'Docker',
  'Git',
];
