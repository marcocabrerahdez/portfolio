export const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Nartex Software',
    date: 'Aug 2023 - Present',
    description: [
      "Developed a Retriever-Augmented Generator (RAG) solution, enhancing large linguistic models (LLMs) for document summarization and PDF retrieval via email, integrating complex AI technologies.",
      "Led the migration of a legacy web application from Java and JSP to React and Go, improving system performance by 30%.",
      "Engineered a pipeline to automate the creation of monthly incident reports, saving the company 2 hours per day.",
      "Streamlined documentation updates by building a pipeline using Hugo to transfer documentation from GitLab to the website.",
      "Successfully migrated a legacy Moodle system from 2013, achieving modernization and enhanced functionality.",
      "Played a critical role in maintaining 5 web projects, ensuring smooth operations and timely updates.",
      "Implemented CI/CD pipelines for 80% of the company's projects, significantly improving deployment times and team collaboration.",
      "Conducted a critical migration of a legacy Moodle system from 2013, achieving modernization and enhanced functionality."
    ],
  },
  {
    id: 2,
    title: 'Software Engineer Intern',
    company: 'Kaudal (Arquimea Group)',
    date: 'Mar 2023 - May 2023',
    description: ['Designed and implemented small features for a web application using Java, TypeScript, PostgreSQL, Spring, Vue.js, and Pinia as part of my university internship.'],
  },
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
