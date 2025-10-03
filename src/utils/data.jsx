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
import vidaSegura from '../assets/Retenes.jpg';
import nextDemo from '../assets/Next-demo.jpeg';
import effort_habit from '../assets/effort-habit.jpeg';
import { FaReact, FaNode, FaJava } from "react-icons/fa";
import { TbBrandVite, TbBrandNextjs } from "react-icons/tb";
import { SiRedux, SiNextui, SiSpringboot } from "react-icons/si";

export const data = [
  {
    img: imgBonita,
    name: "bonita",
    title: "Bonita Devoto",
    subTitle: "E-commerce",
    description: "En esta aplicación participé realizando el 100% del Backend construyendo la API REST, utilizando Node.js con Express y PostgreSQL como base de datos. Tambien participé en el Frondend usando React-Vite conectando dicha api, utilizando Redux para el manejo de estados globales y poder consumir datos del Backend aporpiedamente",
    github: "https://github.com/AndresAndrada/pfhenry-back",
    deploy: "",
    tecnology: [<FaReact color='#365bb1ff' />, <SiRedux color='#7533a0ff' />, <TbBrandVite color='#ce8c40ff' />, <FaNode color='#118d26ff' />]
  },
  {
    img: hire,
    name: "hireMySkills",
    title: "HireMySkills",
    subTitle: "E-commerce de Servicios",
    description: "En esta aplicación participé del lado del Backend construyendo la API REST, utilizando Node.js con Express y PostgreSQL como base de datos. Creé el diagrama de entidad-relación para organizar los datos asegurando la necesidad del negocio. Implementé Stripe como pasarela de pago para lograr un flujo completo de la compra de un servicio.",
    github: "https://github.com/sergioare/PF-HireMySkills",
    deploy: "https://pf-hire-my-skills.vercel.app/",
    tecnology: [<FaReact color='#365bb1ff' />, <TbBrandVite color='#ce8c40ff' />, <FaNode color='#118d26ff' />]
  },
  {
    img: pokemon,
    name: "pokemon",
    title: "Pokemon",
    subTitle: "Proyecto Individual",
    description: "Esta es mi primera aplicación en la que estoy totalmente orgulloso. Consumí la PokeAPI desde el backend (Node.js con Express) para renderizar todos los pokemosn y además creé una base de datos (PostgreSQL) para el CRUD de nuevos pokemons. Realice el Frontend con React y Redux para menejos de estados globales y poder consumir datos de Backend.",
    github: "https://github.com/AndresAndrada/PI-Pokemon-main",
    deploy: "",
    tecnology: [<FaReact color='#365bb1ff' />, <TbBrandVite color='#ce8c40ff' />, <FaNode color='#118d26ff' />]
  },
  {
    img: pc,
    name: "personalClass",
    title: "Personal Class",
    subTitle: "E-commerce",
    description: "En esta aplicación participé del lado del Backend construyendo la API REST, utilizando Node.js con Express y PostgreSQL como base de datos. Creé el diagrama de entidad-relación para organizar los datos asegurando la necesidad del negocio. Implementé Stripe como pasarela de pago para lograr un flujo completo de la compra de un servicio.",
    github: "https://github.com/AndresAndrada/PersonalClass-Front",
    deploy: "https://api.personalclassonline.com/",
    tecnology: [<TbBrandNextjs color='black' />, <TbBrandVite color='#ce8c40ff' />, <FaNode color='#118d26ff' />]
  },
  {
    img: wtp,
    name: "whatsAppBoot",
    title: "WhatsApp-Boot",
    subTitle: "Respuestas automatizadas",
    description: "Esto es un mocriservicio de WhatsApp para la generación de respuestas preestablacidas a preguntas de diferentes usuarios (chat boot). Este microservicio fue creado para Personal Class (StartUp) distinada a brindar cursos online sobre diferentes tematicas.",
    github: "https://github.com/AndresAndrada/whatsapp-web",
    deploy: "https://api.personalclassonline.com/",
    tecnology: [<FaNode color='#118d26ff' />]
  },
  {
    img: effort_habit,
    name: "effort-habit",
    title: "Personal Trainer",
    subTitle: "E-commerce",
    description: "Esta es un aplicación de entrenamiento que esta en pleno dessarrollo para lograr un MVP y poder lanzar al mercado. Desarrollada con React.js y Zustand para manejo de estados del lado del Front, Node.js con Express para el Backend y para la base de datos PostgreSQL",
    github: "https://github.com/AndresAndrada/Effort-Habit",
    deploy: "https://effort-habit.vercel.app/",
    tecnology: [<FaReact color='#365bb1ff' />, <TbBrandVite color='#ce8c40ff' />, <FaNode color='#118d26ff' />]
  },
  {
    img: vidaSegura,
    name: "VidaSegura",
    title: "VidaSegura",
    subTitle: "Seguros de vida",
    description: "Esta aplicación la desarrollé más que nada para aplicar mis conocimientos apendidos en Java para el Backend y poder reflejar el resultado de dicha API del lado del cliente para una mejor muestra de los resultados",
    github: "https://github.com/AndresAndrada/Bitsion-apirest",
    deploy: "",
    tecnology: [<FaReact color='#365bb1ff' />, <TbBrandVite color='#ce8c40ff' />, <FaJava color='#333284ff' />, <SiSpringboot color="#118d26ff" />]
  },
  {
    img: nextDemo,
    name: "NextDemo",
    title: "Next Demo",
    subTitle: "Mi tienda",
    description: "Esta aplicación la desarrollé más que nada para aplicar mis conocimientos apendidos en Java para el Backend y poder reflejar el resultado de dicha API del lado del cliente para una mejor muestra de los resultados",
    github: "https://github.com/AndresAndrada/next-demo",
    deploy: "",
    tecnology: [<FaReact color='#365bb1ff' />, <TbBrandNextjs color='black' />, <SiNextui color='#ce8c40ff' />, <TbBrandVite color='#ce8c40ff' />, <FaJava color='#333284ff' />, <SiSpringboot color="#118d26ff" />]
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