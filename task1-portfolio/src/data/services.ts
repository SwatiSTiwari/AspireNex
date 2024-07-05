import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/dart.svg",
      "/skills/flutter.svg",
      "/skills/getx.png",
      "/skills/firebase.svg",
    ],
    shortDescription:
      "I create engaging web applications for your audience.",
    description:
      "I create captivating web applications from concept to deployment. Using cutting-edge technologies, I ensure seamless performance, intuitive interfaces, and robust functionality that align with your business goals. Enjoy a flawless user experience and outstanding results.I specialize in building responsive, mobile-friendly websites and web applications that deliver an exceptional digital experience for your users. My expertise spans the full stack of web development, including:",
  },
  
  {
    id: 2,
    title: "Backend Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create scalable backend infrastructures.",
    description:
      "I enhance digital applications with scalable backend infrastructures. I develop efficient database structures, APIs, and configure servers for optimal performance, security, and scalability, ensuring your applications handle high traffic and complex data management seamlessly. Rely on strong backend solutions.",
  },
  {
    id: 3,
    title: "Product Strategy",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png",
    ],
    shortDescription:
      "I define goals, target audiences, and roadmaps for success.",
    description:
      "I collaborate to define clear goals, target audiences, and a success roadmap. My expertise in product ideation and market analysis ensures your product meets user needs and aligns with your business strategy for long-term growth and full potential realization. Drive your product's success with strategic planning.",
  },

  {
    id: 4,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/redis.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I manage and optimize your database systems for performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Ensure your data is managed effectively and efficiently.",
  },
];

export default services;
