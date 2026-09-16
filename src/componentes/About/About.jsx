import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import style from '../About/About.module.css';
// import docs from '../../doc/CV.pdf';
import image from '../../assets/FOTO CV.png'
import { MdOutlineDescription, MdOutlineBook } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { CgToolbox } from "react-icons/cg";
import { useStoreUi } from "../../store";

const translations = {
  es: {
    title: "Acerca de Mí",
    saludo: "Hola 👋, soy Andrada Andres!",
    options: {
      description: "Descripción",
      study: "Estudios",
      experience: "Experiencia",
      background: "Background",
    },
    description: {
      title: "Descripción:",
      p1: <>Me considero una persona <span className={style.bold}>proactiva</span>, <span className={style.bold}>comprometida</span> y con un fuerte sentido de la <span className={style.bold}>responsabilidad</span>. En el ámbito profesional, valoro la <span className={style.bold}>organización</span>, la <span className={style.bold}>comunicación clara</span> y el <span className={style.bold}>trabajo en equipo</span>. Me esfuerzo por mantener una <span className={style.bold}>actitud positiva</span> frente a los desafíos, buscando siempre soluciones prácticas y efectivas.</>,
      p2: <>Tengo la <span className={style.bold}>capacidad de adaptarme</span> rápidamente a nuevos entornos y tecnologías, y asumo cada proyecto con compromiso y enfoque en los resultados. Mi interés por aprender de forma constante me impulsa a mejorar tanto en lo técnico como en lo humano, aportando valor no solo desde mis conocimientos, sino también desde mi actitud y disposición para colaborar. </>,
    },
    study: {
      title: "Estudios:",
      p1: <>Actualmente estoy cursando la carrera de <span className={style.bold}>Analista en Sistemas en la Institución Cervantes</span>, donde me encuentro en el año y medio de formación. A lo largo de este tiempo, he adquirido <span className={style.bold}>conocimientos fundamentales</span> en análisis, diseño y desarrollo de sistemas, bases de datos relacionales, lógica de programación, estructuras de datos, <span className={style.bold}>arquitectura de computadoras y redes</span>.</>,
      p2: <>Me gradué como Desarrollador Web Full Stack en Henry, donde adquirí sólidos conocimientos en <span className={style.bold}>Desarrollo web Full Stack.</span> Y, como parte de la formación en Henry, desarrollé dos aplicaciones web: una de forma individual y otra grupal. En esta última trabajamos simulando un entorno profesional, aplicando <span className={style.bold}>metodologías ágiles (Scrum)</span>.</>,
      p3: <>Además, completé varios cursos en <span className={style.bold}>Platzi</span>, por ejemplo Blazor WebAssembly y .NET, y en <span className={style.bold}>Personal Class</span> donde me especialicé en <span className={style.bold}>metodologías ágiles</span> con enfoque en <span className={style.bold}>Scrum</span>.</>
    },
    experience: {
      title: "Experiencia:",
      p1: <>A lo largo de mi experiencia como desarrollador <span className={style.bold}>Full Stack Web & Blockchain</span>, me he caracterizado por ser una persona proactiva, responsable y comprometida con cada desafío profesional.</>,
      p2: <>Actualmente, en <span className={style.bold}>"Guarapo"</span> trabajo como desarrollador <span className={style.bold}>Full Stack y Blockchain</span>, construyendo aplicaciones descentralizadas con <span className={style.bold}>Next.js y Supabase</span>. Además, desarrollo <span className={style.bold}>Smart Contracts</span> con <span className={style.bold}>Rust</span> en ecosistema <span className={style.bold}>Solana</span>, diseñando soluciones enfocadas en garantizar la <span className={style.bold}>seguridad</span> de los activos, la <span className={style.bold}>trazabilidad inmutable</span> de las transacciones y la optimización de recursos en la red.</>,
      p3: <>También formé parte del equipo <span className={style.bold}>Blockchain</span> de <span className={style.bold}>"Dazlabs"</span>, una empresa <span className={style.bold}>Software Factory</span> orientada al desarrollo de soluciones blockchain y open source. Allí, he trabajado en la creación, optimización y conexión de contratos inteligentes con aplicaciones descentralizadas (dApps), participando activamente en equipos multidisciplinarios, bajo metodologías ágiles.</>,
      p4: <>Anteriormente, en <span className={style.bold}>"Personal Class"</span>, tuve la oportunidad de desarrollar una aplicación desde cero, abordando tanto el <span className={style.bold}>frontend</span> como el <span className={style.bold}>backend</span>, lo que fortaleció mi autonomía, mi capacidad para resolver problemas y mi sentido de la responsabilidad técnica. También tuve la posilidad de ser tutor de un curso de programación, lo que potenció mis habilidades de comunicación y trabajo en equipo.</>
    },
    background: {
      title: "Background Tecnológico:",
      p1: <>Como <span className={style.bold}>Desarrollador Web Full Stack</span> y <span className={style.bold}>Blockchain</span>, he construido un perfil técnico versátil, capaz de desarrollar soluciones integrales abarcando tanto aplicaciones tradicionales como el ecosistema Web3. En el desarrollo frontend y backend tradicional, me especializo en el uso de <span className={style.bold}>JavaScript</span> y <span className={style.bold}>TypeScript</span>. Además, soy experto en <span className={style.bold}>React</span> y <span className={style.bold}>Next.js</span>, tecnologías que he implementado con éxito en cada una de mis experiencias profesionales para crear interfaces dinámicas, escalables y de alto rendimiento.</>,
      p2: <>Dentro del ecosistema descentralizado, cuento con sólida experiencia en la creación, testeo y despliegue de Smart Contracts utilizando <span className={style.bold}>Solidity</span> y <span className={style.bold}>Hardhat</span> para redes compatibles con la EVM. A su vez, desarrollo programas escalables y seguros utilizando <span className={style.bold}>Rust</span> en el ecosistema de <span className={style.bold}>Solana</span>.</>,
      p3: <>Para la gestión de datos y arquitecturas backend, integro soluciones modernas como <span className={style.bold}>Supabase</span>, y diseño bases de datos relacionales robustas utilizando <span className={style.bold}>PostgreSQL</span>, asegurando un rendimiento óptimo y una conexión fluida entre el cliente, el servidor y la blockchain.</>
    }
  },
  en: {
    title: "About Me",
    saludo: "Hi 👋, I'm Andrada Andres!",
    options: {
      description: "Description",
      study: "Studies",
      experience: "Experience",
      background: "Background",
    },
    description: {
      title: "Description:",
      p1: <>I consider myself a <span className={style.bold}>proactive</span>, <span className={style.bold}>committed</span> person with a strong sense of <span className={style.bold}>responsibility</span>. Professionally, I value <span className={style.bold}>organization</span>, <span className={style.bold}>clear communication</span>, and <span className={style.bold}>teamwork</span>. I strive to maintain a <span className={style.bold}>positive attitude</span> towards challenges, always looking for practical and effective solutions.</>,
      p2: <>I have the <span className={style.bold}>ability to adapt</span> quickly to new environments and technologies, and I take on each project with commitment and a focus on results. My interest in continuous learning drives me to improve both technically and personally, adding value not only through my knowledge but also through my attitude and willingness to collaborate.</>,
    },
    study: {
      title: "Studies:",
      p1: <>I am currently pursuing a degree as a <span className={style.bold}>Systems Analyst at the Institución Cervantes</span>, where I am in my first year and a half of training. Throughout this time, I have acquired <span className={style.bold}>fundamental knowledge</span> in systems analysis, design and development, relational databases, programming logic, data structures, <span className={style.bold}>computer architecture, and networks</span>.</>,
      p2: <>I graduated as a Full Stack Web Developer at Henry, where I gained solid knowledge in <span className={style.bold}>Full Stack Web Development.</span> And, as part of my training at Henry, I developed two web applications: one individually and one as a group. In the latter, we worked simulating a professional environment, applying <span className={style.bold}>agile methodologies (Scrum)</span>.</>,
      p3: <>In addition, I completed several courses at <span className={style.bold}>Platzi</span>, for example Blazor WebAssembly and .NET, and at <span className={style.bold}>Personal Class</span> where I specialized in <span className={style.bold}>agile methodologies</span> with a focus on <span className={style.bold}>Scrum</span>.</>
    },
    experience: {
      title: "Experience:",
      p1: <>Throughout my experience as a <span className={style.bold}>Full Stack Web & Blockchain</span> developer, I have been characterized as a proactive, responsible person, committed to every professional challenge.</>,
      p2: <>Currently, at <span className={style.bold}>"Guarapo"</span> I work as a <span className={style.bold}>Full Stack and Blockchain</span> developer, building decentralized applications with <span className={style.bold}>Next.js and Supabase</span>. Furthermore, I develop <span className={style.bold}>Smart Contracts</span> with <span className={style.bold}>Rust</span> in the <span className={style.bold}>Solana</span> ecosystem, designing solutions focused on ensuring the <span className={style.bold}>security</span> of assets, the <span className={style.bold}>immutable traceability</span> of transactions, and the optimization of network resources.</>,
      p3: <>I was also part of the <span className={style.bold}>Blockchain</span> team at <span className={style.bold}>"Dazlabs"</span>, a <span className={style.bold}>Software Factory</span> company oriented to the development of blockchain and open source solutions. There, I worked on the creation, optimization, and connection of smart contracts with decentralized applications (dApps), actively participating in multidisciplinary teams under agile methodologies.</>,
      p4: <>Previously, at <span className={style.bold}>"Personal Class"</span>, I had the opportunity to develop an application from scratch, addressing both the <span className={style.bold}>frontend</span> and the <span className={style.bold}>backend</span>, which strengthened my autonomy, my ability to solve problems, and my sense of technical responsibility. I also had the chance to be a tutor for a programming course, which enhanced my communication and teamwork skills.</>
    },
    background: {
      title: "Technological Background:",
      p1: <>As a <span className={style.bold}>Full Stack Web and Blockchain Developer</span>, I have built a versatile technical profile, capable of developing comprehensive solutions spanning both traditional applications and the Web3 ecosystem. In traditional frontend and backend development, I specialize in the use of <span className={style.bold}>JavaScript</span> and <span className={style.bold}>TypeScript</span>. Additionally, I am an expert in <span className={style.bold}>React</span> and <span className={style.bold}>Next.js</span>, technologies that I have successfully implemented in each of my professional experiences to create dynamic, scalable, and high-performance interfaces.</>,
      p2: <>Within the decentralized ecosystem, I have solid experience in creating, testing, and deploying Smart Contracts using <span className={style.bold}>Solidity</span> and <span className={style.bold}>Hardhat</span> for EVM-compatible networks. In turn, I develop scalable and secure programs using <span className={style.bold}>Rust</span> in the <span className={style.bold}>Solana</span> ecosystem.</>,
      p3: <>For data management and backend architectures, I integrate modern solutions like <span className={style.bold}>Supabase</span>, and design robust relational databases using <span className={style.bold}>PostgreSQL</span>, ensuring optimal performance and a seamless connection between the client, the server, and the blockchain.</>
    }
  }
};

const About = () => {
  const { Language, DarkMode } = useStoreUi(state => state);
  const [showDescription, setShowDescription] = useState(false);
  const [option, setOption] = useState("description");
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const effect = containerRef.current;
    const handleMouseMove = (e) => {
      const rect = effect.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = effect.clientWidth;
      const height = effect.clientHeight;
      const yRotation = ((x - width / 2) / width) * 10;
      const xRotation = ((y - height / 2) / width) * 10;
      const string = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      effect.style.transform = string;
    };
    const handleMouseOut = () => {
      effect.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    };
    effect.addEventListener("mousemove", handleMouseMove);
    effect.addEventListener("mouseout", handleMouseOut);
    return () => {
      effect.removeEventListener("mousemove", handleMouseMove);
      effect.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const handleOption = (option) => {
    setShowDescription(!showDescription);
    setOption(option);
  }

  const t = translations[Language] || translations.es;

  return (
    <section className={`${style.about} ${DarkMode ? 'dark' : ''}`} id="About">
      <div id="about" className={`${style.about1} ${DarkMode ? style.dark : ''}`}>
        <h2 className={style.title}>{t.title}</h2>
        {!showDescription
          ? <div className={style.containerData} ref={containerRef}>
            <div className={style.profilePicContainer}>
              <img src={image} alt="Mi foto" className={`${style.profilePic}  ${style.fadeOut}`} />
            </div>
            <div className={style.bioContainer}>
              <h4 className={style.saludo}>{t.saludo}</h4>
              <br />
              <div className={style.selector} onClick={() => handleOption("description")}>
                <MdOutlineDescription /> {t.options.description}
              </div>
              <div className={style.selector} onClick={() => handleOption("study")}>
                <MdOutlineBook /> {t.options.study}
              </div>
              <div className={style.selector} onClick={() => handleOption("experience")}>
                <CgToolbox /> {t.options.experience}
              </div>
              <div className={style.selector} onClick={() => handleOption("background")}>
                <VscTools /> {t.options.background}
              </div>
            </div>
          </div>
          : <div className={`${style.container2} ${style.fadeIn}`} onClick={() => setShowDescription(false)}>
            {option === "description" && <div className={style.bioContainer}>
              <h3 className={style.titleDescription}>{t.description.title}</h3>
              <p className={style.parrafo}>{t.description.p1}</p>
              <p className={style.parrafo}>{t.description.p2}</p>
            </div>}
            {option === "study" && <div className={style.bioContainer}>
              <h3 className={style.titleDescription}>{t.study.title}</h3>
              <p className={style.parrafo}>{t.study.p1}</p>
              <p className={style.parrafo}>{t.study.p2}</p>
              <p className={style.parrafo}>{t.study.p3}</p>
            </div>}
            {option === "experience" && <div className={style.bioContainer}>
              <h3 className={style.titleDescription}>{t.experience.title}</h3>
              <p className={style.parrafo}>{t.experience.p1}</p>
              <p className={style.parrafo}>{t.experience.p2}</p>
              <p className={style.parrafo}>{t.experience.p3}</p>
              <p className={style.parrafo}>{t.experience.p4}</p>
            </div>}
            {option === "background" && <div className={style.bioContainer}>
              <h3 className={style.titleDescription}>{t.background.title}</h3>
              <p className={style.parrafo}>{t.background.p1}</p>
              <p className={style.parrafo}>{t.background.p2}</p>
              <p className={style.parrafo}>{t.background.p3}</p>
            </div>}
          </div>
        }
      </div>
    </section >
  )
};

export default About;