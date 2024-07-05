import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "Auctionwale",
    title: "Auctionwale",
    description:
      "A website for auctioning flats and houses. It is developed using Next.js, Tailwind CSS, Auth.js and MongoDB.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/SwatiSTiwari/Auctionwalenew",
     url: "https://github.com/SwatiSTiwari/Auctionwalenew",
    tags: ["Nexjs", "Tailwindcss", "Authjs", "MongoDB"],
  },
  {
    id: "PolyVision",
    title: "PolyVision",
    description:
      "Designed and implemented user-friendly features on the college finder website to provide tailoredcollege recommendations and career guidance based on the user input.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/shhresth/polyVision/tree/master",
    url: "https://polyvision.netlify.app/",
    tags: ["React.js", "Redux", "Material UI", "Stripe"],
  },
  {
    id: "Medscanocr",
    title: "Medscanocr",
    description:
      " A website where we develop a robust engine capable of accurately extracting text from medical records in both image and PDF format used FAST API as a framework.cdw ",
    icon: "/skills/typescript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/VP45/Hacks24-Merge-Issues",
    tags: ["Typescript", "FAST API", "python", "Nextjs"],
  },
  {
    id: "E-commerce",
    title: "E-commerce",
    description:
      "Developed and implemented backend functionality for an e-commerce project",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/SwatiSTiwari/e-commerce",
    tags: ["Node.js", "Express.js", "MongoDB", "Postman"],
  },
  {
    id: "Command-line Interface (CLI)",
    title: "Command-line Interface (CLI)",
    description:
      "A command-line interface (CLI) tool to CRUD operation using Node.js and MongoDB.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/SwatiSTiwari/customer-CLI",
    tags: ["Node.js", "Express.js", "MongoDB", "Postman"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
