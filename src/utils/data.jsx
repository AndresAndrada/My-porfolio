import imgBonita from '../assets/bonita.png';
import hire from '../assets/hire.png';
import pokemon from '../assets/pokemon.png';
import pc from '../assets/pc.png'
import wtp from '../assets/whtp.png'
import platzi from '../assets/Platzi-blazor-webassembly.png';
import henry from '../assets/Henry.png';
import docsPC from '../doc/Andrés Andrada PersonalClass SCRUM.pdf';
import docsHnery from "../doc/Full Stack Web Developer - Henry.pdf";
import docsSigma from '../doc/Andrés Andrada PersonalClass SCRUM.pdf';
import docsPlatzi from '../doc/Platzi-diploma-blazor-webassembly.pdf'
import scrum from '../assets/PersonalClass SCRUM.jpeg';
import sigma from '../assets/sigma.png';
import retenes from '../assets/Retenes.jpg';
import effort_habit from '../assets/effort-habit.jpeg';
import { FaReact, FaNode, FaJava } from "react-icons/fa";
import { TbBrandVite, TbBrandNextjs } from "react-icons/tb";
import { SiRedux, SiSpringboot } from "react-icons/si";

export const data = [
  {
    img: imgBonita,
    name: "bonita",
    title: "Bonita Devoto",
    description: "E-commerce",
    github: "https://github.com/AndresAndrada/pfhenry-back",
    deploy: "",
    tecnology: [<FaReact color='#365bb1ff' />, <SiRedux color='#7533a0ff' />, <TbBrandVite color='#ce8c40ff' />, <FaNode color='#118d26ff' />]
  },
  {
    img: hire,
    name: "hireMySkills",
    title: "HireMySkills",
    description: "E-commerce de Servicios",
    github: "https://github.com/sergioare/PF-HireMySkills",
    deploy: "https://pf-hire-my-skills.vercel.app/",
    tecnology: [<FaReact color='#365bb1ff' />, <TbBrandVite color='#ce8c40ff' />, <FaNode color='#118d26ff' />]
  },
  {
    img: pokemon,
    name: "pokemon",
    title: "Pokemon",
    description: "Proyecto Individual",
    github: "https://github.com/AndresAndrada/PI-Pokemon-main",
    deploy: "",
    tecnology: [<FaReact color='#365bb1ff' />, <TbBrandVite color='#ce8c40ff' />, <FaNode color='#118d26ff' />]
  },
  {
    img: pc,
    name: "personalClass",
    title: "Personal Class",
    description: "E-commerce",
    github: "https://github.com/AndresAndrada/PersonalClass-Front",
    deploy: "https://api.personalclassonline.com/",
    tecnology: [<TbBrandNextjs color='black' />, <TbBrandVite color='#ce8c40ff' />, <FaNode color='#118d26ff' />]
  },
  {
    img: wtp,
    name: "whatsAppBoot",
    title: "WhatsApp-Boot",
    description: "Respuestas automatizadas",
    github: "https://github.com/AndresAndrada/whatsapp-web",
    deploy: "https://api.personalclassonline.com/",
    tecnology: [<FaNode color='#118d26ff' />]
  },
  {
    img: effort_habit,
    name: "effort-habit",
    title: "Personal Class",
    description: "E-commerce",
    github: "https://github.com/AndresAndrada/Effort-Habit",
    deploy: "https://effort-habit.vercel.app/",
    tecnology: [<FaReact color='#365bb1ff' />, <TbBrandVite color='#ce8c40ff' />, <FaNode color='#118d26ff' />]
  },
  {
    img: retenes,
    name: "VidaSegura",
    title: "VidaSegura",
    description: "Seguros de vida",
    github: "https://github.com/AndresAndrada/Bitsion-apirest",
    deploy: "",
    tecnology: [<FaReact color='#365bb1ff' />, <TbBrandVite color='#ce8c40ff' />, <FaJava color='#333284ff' />, <SiSpringboot color="#118d26ff" />]
  }
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
    name: "Scrum",
    title: "Metodología SCRUM",
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