import { Icons } from "@/components/icons";
import { HomeIcon, Icon, NotebookIcon,  } from "lucide-react";
export const DATA = {
  url: "https://renganathan21.github.io/",
  name: "Renga Nathan A",
  initials: "R",
  location: "Tirunelveli, Tamil Nadu",
  locationLink: "https://www.google.com/maps/place/Tirunelveli",
  description:
    "Frontend Developer specializing in UI/UX design and React.js. Passionate about building high-performance web applications with a seamless user experience.",
  summary:
    "I'm an experienced frontend developer with expertise in React.js, TypeScript, and UI/UX design. Skilled in developing responsive and scalable web applications while integrating modern libraries and frameworks. Passionate about optimizing frontend performance and ensuring seamless user interactions.",
  avatarUrl: "https://github.com/Renganathan21.png",
  skills: [
    
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Firebase",
    "Azure S3",
    "Tailwind CSS",
    "Bootstrap",
    "PrimeReact",
    "MUI",
    "REST API",
    "Socket.IO",
    "GraphQL",
    "OpenAI API",
    "Google Dialogflow",
    "BERT",
    "Java",
    "Spring Boot",
    "Python",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "sathishsatish2002@gmail.com",
    tel: "+91 8072740113",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Renganathan21",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/renga-nathan-a-596899226/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sathishsatish2002@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      googleDrive: {
        name: "Resume",
        url: "https://drive.google.com/drive/folders/1Kj_glKFmWpGPq8uxiT5tdZf5VyA6c3UU?usp=sharing",
        icon: Icons.googleDrive,
        navbar: true,
      },

      

    },
  },
  work: [
    {
      company: "Vivant360 Software Services",
      href: "https://www.vivant360.com/",
      location: "Tirunelveli, Tamil Nadu",
      title: "Software Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQGgwwOcpg4iew/company-logo_200_200/company-logo_200_200/0/1630610037076/vivant360_logo?e=1747267200&v=beta&t=jXhwHhDbYQcmeAjalmOZoQpEUcfW6iZabrnRO8Vgj3c",
      start: "July 2023",
      end: "Present",
      description:
        "Developed scalable web applications using React.js, TypeScript, and Redux. Implemented AI-powered chatbots and optimized frontend performance for better UX.",
        badges: ["Rising Star Award"],
    },
  ],
  education: [
    {
      school: "St. Xavier’s Autonomous College, Tirunelveli",
      href: "http://stxavierstn.edu.in/",
      degree: "Bachelor of Science in Computer Science",
      start: "2020",
      end: "2023",
      logoUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAABL1BMVEVHcEyarMfQ5fHV5fCrwMj++PmtwcqovNOBk5gNDRAoKC/X6/bi9Py4z9m3ztft8/ri9P2VqbChtLyzxtzI4erj9fzV6fTc7vjk8PipvspBRlDW6/PZ7fTC2eq0y+DH3Ozf7/W/1OeswNexxtvK4e+jttC60OSesMzr9/zQ6/eGk7iXqMfj8/nu8fDy+v48jkbS5fGLmr3XySnj6eT+//6/1+h5iUGtjDra9/6RocHd4d/TuxXFijPW8Prn3bpAgT7CoSDapTbBuy/Mrz7s7deOo4DFdSzDnkGvcjd/i7TDuY3k2Xjm2qZ7p3U3di3VxaOux6yQo0qisZ7Ixru8dhi2nnfS4tlkpGJbfTPHYzOjf0KekT5zfqjI0s7Lwm3I1c+OeEQ0lU+CaDqaTUz/8BeY8mKLAAAAG3RSTlMA/JJYghNr/ksOIbqYz+Mrc2CzuObT899n1D3fZlBYAAAB4UlEQVQokW3R5XoaQRgFYFIgi8Xr4zPrvguLuwQixEMj9fb+r6EsJIXK+Tnv882c55tE4nfSbwv5fGF3J/Fvkm9kw1QUTTFaL/6i9CsRGJaGeaBUuWgl122HqBpXGJF9nyAt4OvDaZ9xzAh1Z58olSOscLHS14FiMGg702sXAgCRzDV588kKiowjaBe9Ykmntk4BQaokP11KTMwgdbyZ02iXLqZ1CplkGsvRXY1jH7jTD7377uFN52ykQyib1ssF5jcCAujMu2w2+5XmY6doz5/ljGRjNKyIAf3Ce7gfh2Gv0rlyAUDRUbQXo1pDBDoj72ulUuk1+neXzryyaqqpGIkifDhshA+DwaTZHJ+ctCmA2FoiMxEB+pdvj83JuNv97JYomE9yvKhrVGUGoOuVG2HvZ987K84RYUEyMR5oKALAvercDsJ+uezNYhQWWrRNYhP5QO8Oynfh98lNI+4jpGBruSKOqyqkemn0I7yuO3VKqdriKLPElPGxyqB+fFgpn7ZPh7ZNDA1vP//KthFgZg9vz9vn5eOSTohgKPeMWb7YfdG19VLR8YViiszqt7OSpFWFTBDxIduQJbxm8+xLmlKrSdhSIoG3cok/k9sXqlQ7qqnau0ziP3m/l0ptZrKrg19SKFHhIZt/nQAAAABJRU5ErkJggg=="
    },
    {
      school: "Allagappa University",
      href: "https://www.alagappauniversity.ac.in/",
      degree: "MBA in Product Management (Correspondence)",
      start: "2024",
      end: "Present",
      logoUrl:"https://www.alagappauniversity.ac.in/img/core-img/logo2.png"
    },
  ],
  projects: [
    {
      title: "Restaurant App",
      href: "https://cheery-cactus-56fb2c.netlify.app/",
      dates: "2024 - Present",
      active: true,
      description:
        "Built a responsive restaurant app with Firebase integration, providing seamless order browsing, bill checking, and admin panel for menu management.",
      technologies: ["React.js", "Firebase", "Tailwind CSS"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Renganathan21/Kizza",
          icon: Icons.github,
        },
      ],
    },
    {
      title: "Friends Chat App",
      href: "https://friends-123.netlify.app/chat",
      dates: "2024 - Present",
      active: true,
      description:
        "Developed a real-time chat app using MERN stack and Socket.io. Features dynamic group and private chats, optimized for seamless communication.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Renganathan21/friends-chat-app",
          icon: Icons.github,
        },
      ],
    },
    {
      "title": "Story Forge",
      "href": "https://epic-story-force.netlify.app/",
      "dates": "2024 - Present",
      "active": true,
      "description": "Developed an AI-powered story creation app using Google Gemini API, allowing users to add characters, select genres, and generate dynamic stories based on provided descriptions.",
      "technologies": ["React.js", "Express.js", "Framer Motion", "ShadCN", "Google Gemini API"],
      "links": [
        {
          "type": "GitHub",
          "href": "https://github.com/Renganathan21",
          "icon": Icons.github
        }
      ]
    },
    
    {
      title: "Crypto Dashboard",
      href: "https://crypto-dashboard.netlify.app/",
      dates: "2024 - Present",
      active: true,
      description:
        "Built a real-time crypto dashboard using TradingView API, featuring dark/light mode and interactive Framer Motion animations.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "TradingView API"],
    },
    {
      title: "No-Code Platform",
      
      dates: "2023 - Present",
      active: true,
      description:
        "Led the development of a no-code platform featuring drag-and-drop UI, workflow automation, and advanced query-building capabilities.",
      technologies: ["React.js", "Material UI", "Node.js", "MongoDB"],
    },
    {
      title: "AI Chatbot for Insurance Queries",
      dates: "2023 - Present",
      active: true,
      description:
        "Developed AI-powered chatbots using OpenAI, Google Dialogflow, and BERT for accurate query resolution and enhanced customer interaction.",
      technologies: ["OpenAI API", "Google Dialogflow", "BERT"],
    },
    {
      title: "Creator's Heaven",
      href: "https://github.com/Renganathan21/CREATORS-HEAVEN",
      dates: "2024 - Present",
      active: true,
      description:
        "Built a blog-like platform with an admin panel for managing posts and user accounts, prioritizing security and ease of content management.",
      technologies: ["PHP", "JavaScript", "Bootstrap"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Renganathan21/CREATORS-HEAVEN",
          icon: Icons.github,
        },
      ],
    },
  ],
  certifications: [
    {
      title: "React.js Development",
      issuer: "Coder Profession",
      date: "Nov 2022 - Dec 2022",
    },
    {
      title: "Python Certification",
      issuer: "Coder Profession",
      date: "Aug 2020 - Sept 2020",
    },
  ],
} as const;

