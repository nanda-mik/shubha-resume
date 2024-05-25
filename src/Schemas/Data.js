export const Data = {
  profile: {
    name: "Shubhadarshie Nanda",
    ocupation: "Software Development Engineer 2",
    location: "Noida, India",
    email: "shubhadarshie.nanda@gmail.com",
    telephone: "+91 8917554436",
    image: "images/me.jpeg",
  },
  aboutMe: {
    label: "Profile",
    description:
      "Building scalable backend systems with a focus on clean architecture and design. Learning front-end and devops.",
  },
  skills: {
    technicalLabel: "Technologies",
    softLabel: "Skills",
    technicalSkills: [
      "Python",
      "JavaScript",
      "Django(DRF)",
      "React",
      "Nodejs",
      "PostgreSql",
      "MongoDB",
      "Redis",
      "Elastic",
      "Git",
      "AWS",
      "Docker",
      "Kubernetes"
    ],
    softSkills: [
      "Ownership",
      "Mentoring"
    ],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Visit my LinkedIn",
        name: "linkedin",
        url: "https://www.linkedin.com/in/shubhadarshie-nanda-753aa8163/",
        className: "bxl-linkedin-square",
      },
      {
        label: "Visit my GitHub",
        name: "github",
        url: "https://github.com/nanda-mik",
        className: "bxl-github",
      },
    ],
  },
  experience: {
    works: [
      {
        title: "SDE 2",
        period: "Jan. 2024 - Present",
        company: "Innovaccer",
        description: [
          "Led and developed a microservice for patients and cohorts, handling all patient fetching logic, consent management module for patients, acl and handling of EMPI merge in VBC health world.",
          "Refactored and optimised old Microsoft automate flows to improve time & efficiency.",
          "Developed a URL shortener service on AWS Lambda with DynamoDB, deployed centrally for the organisation. Wrote a lightweight Express server, capable of handling predicted traffic as it is private to the organisation."
        ],
      },
      {
        title: "SDE 1 & SDE Intern",
        period: "Jul. 2022 - Dec. 2023 | Jan 2022 - Jun. 2022",
        company: "Innovaccer",
        description: [
          "Collaborated with the team to develop a bulk solution for outreach, increasing our capability from 10k/day to 10k per hour. The project involved creating resiliency and self-healing solutions for async tasks, developing bulk support for APIs while ensuring backward compatibility, and standardising/benchmarking pods cpu/memory limit & request.",
          "Independently led and developed a full-stack feature, an AI-feature template creation, integrated with Azure-GPT 3.5 model. Developed DRF APIs with prompts for the template body & subject, and built frontend components using React, which includes chatbot functionality and other prompt features.",
          "Created a common backend library for our five microservice. Developed storage mixin for Django apps with Amazon S3 & Azure Blob Storage.",
          "Integrated communication solutions with vendors such as PostGrid for letters and Twilio for voice/SMS.",
          "Built a phone number-landline check & email validation feature for the product, integrating with Zerobounce & Twilio.",
          "Developed health & sanity checks for a seamless deployment process on a new customer."
        ],
      },
      {
        title: "Full stack Teaching Assisstant",
        period: "Jan 2021 - Dec. 2021",
        company: "Crio",
        description: [
          " Conducted instructional sessions on MERN stack. Resolved student queries in collaboration with engineering and content delivery teams."
        ],
      },
      {
        title: "Web Developer Intern",
        period: "Jul. 2020 - Aug. 2020",
        company: "StartupTalky",
        description: [
          "Developed a full-stack web scraper and deployed it on docker. Used Nodejs(Express) for backend and Reactjs for frontend. Implemented efficient webpage scraping from xml tree using Cheerio and used MongoDB as the database.",
        ],
      },
    ],
    academic: [
      {
        career: "Bachelor of Engineering in Information Technology",
        date: "2018-2022",
        institution: "IIIT Bhubaneswar",
      },
    ],
    Projects: [
      {
        name: "Medico App- Hackathon Project(Finalist)",
        company: "",
        period: "",
        description: [
          "A progressive web app for both doctors and patients. Medico, where people can get monitored by the doctor and consult for better health",
        ],
      },
      {
        name: "Examination Management System",
        company: "",
        period: "",
        description: [
          "Developed a website where student can check room and exam schedule. Tech stack- ExpressJs & MySql with server-side rendering.",
        ],
      },
      {
        name: "ourApp",
        company: "",
        period: "",
        description: [
          "Developed features like login, signup, sending emails, payment gateway, post feeds & chatbox using websocket. Tech stack- Nodejs & MongoDB",
        ],
      }
    ],
  },
};
