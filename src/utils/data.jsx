import imgBonita from '../assets/bonita.png';
import hire from '../assets/hire.png';
import pokemon from '../assets/pokemon.png';
import pc from '../assets/pc.png'
import wtp from '../assets/whtp.png'
import platzi from '../assets/Platzi-blazor-webassembly.png';
import henry from '../assets/Henry.jpeg';
import docsPC from '../doc/Andrés Andrada PersonalClass SCRUM.pdf';
import docsHnery from "../doc/Full Stack Web Developer - Henry.pdf";
import docsSigma from '../doc/Andrés Andrada PersonalClass SCRUM.pdf';
import docsPlatzi from '../doc/Platzi-diploma-blazor-webassembly.pdf'
import scrum from '../assets/PersonalClass SCRUM.png';
import sigma from '../assets/sigma.png';

export const data = [
  {
    img: imgBonita,
    name: "bonita",
    title: "Bonita Devoto",
    description: "E-commerce",
    github: "https://github.com/AndresAndrada/pfhenry-back",
    deploy: ""
  },
  {
    img: hire,
    name: "hireMySkills",
    title: "HireMySkills",
    description: "E-commerce de Servicios",
    github: "https://github.com/sergioare/PF-HireMySkills",
    deploy: "https://pf-hire-my-skills.vercel.app/"
  },
  {
    img: pokemon,
    name: "pokemon",
    title: "Pokemon",
    description: "Proyecto Individual",
    github: "https://github.com/AndresAndrada/PI-Pokemon-main",
    deploy: ""
  },
  {
    img: pc,
    name: "personalClass",
    title: "Personal Class",
    description: "E-commerce",
    github: "https://github.com/AndresAndrada/PersonalClass-Front",
    deploy: "https://api.personalclassonline.com/"
  },
  {
    img: wtp,
    name: "whatsAppBoot",
    title: "WhatsApp-Boot",
    description: "Respuestas personalizadas y automatizadas",
    github: "https://github.com/AndresAndrada/whatsapp-web",
    deploy: "https://api.personalclassonline.com/"
  },
];

export const certificate = [
  {
    id: 1,
    name: "Henry",
    title: "Full Stack Developer",
    img: henry,
    docs: docsHnery,
  },
  {
    id: 2,
    name: "Platzi",
    title: "Blazor - WebAssembly",
    img: platzi,
    docs: docsPlatzi,
  },
  {
    id: 3,
    name: "Platzi",
    title: "Blazor - WebAssembly",
    img: scrum,
    docs: docsPC,
  },
  {
    id: 4,
    name: "Certiprofe",
    title: "Lean Six Sigma White Belt",
    img: sigma,
    docs: docsSigma,
  },
]