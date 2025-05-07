"use client"

import { createContext, useState, useContext } from "react"

// English translations
const en = {
  subtitle: "Sound Director",
  about: "ABOUT",
  cv: "CV-RESUME",
  pictures: "GALLERY",
  contact: "CONTACT",
  aboutMe: "About Me",
  aboutMe1:
    'I have always been intrigued by things that are different. Since I started my studies at the National University of La Plata (UNLP) in 2017, the sound department caught my eye immediately. That\'s how I started to be in charge of the sound mixing in the film projects I was filming while studying Audiovisual Arts. Staying true to that initial curiosity, along with a group of friends from university we won the LaBAF (Laboratorio Bellas Artes Filma), a section of the Public Universities Film Festival (Festival REC), where they supported the development of an audiovisual project. “Barrenderas” was the short film in which I found myself doing the pre-production of the sound design, recording the subsequent foley and contributing to the final sound mix for the first time in my career.',
  aboutMe2:
    "After gaining the courage to do the sound for short films at university, I had the opportunity to participate in my first feature film as a sound mixer, a documentary called “Con la Fuerza del Río”. Within this project, I realized that, not only did I liked doing sound mixing, but I felt the need to become a professional in this field as well. So in 2019 I started my studies in Sound design at the Escuela Nacional de Experimentación y Realización Cinematográfica (ENERC), where I was lucky enough to learn to be passionate about the craft thanks to teachers such as Ruben Piputto, Sebastián González, Guido Beremblum, Gerardo Kalmar, Sofia Straface and many more.",
  aboutMe3:
    "Halfway through my degree, I started working professionally in audiovisual projects as a boom operator, sound recordist and sound designer. Additionally, I participated as a foley editor in a post-production recording studio. Nowadays, I work as a sound recordist for film, documentaries, series for digital platforms, reality shows and TV shows.",
  aboutMe4:
    "What I currently enjoy the most is working on diverse projects where the challenges are constantly changing and, due to the experience I have gained, successfully managing to adapt to them. I also love getting to know different groups of people with whom I work as a team, as I believe that collective work is essential.",
  aboutMe5:
    "The fact that you can be able to tell a story through sound is very thrilling to me, I strongly believe that the connection between technical and artistic resources can provide a project with an unprecedented sense of storytelling.",
  downloadCV: "Download CV (PDF)",
  imdb: "IMDB Profile",
  works: "Works",
  year: "Year",
  type: "Type",
  role: "Role",
  gallery: "Gallery",
  getInTouch: "Get In Touch",
  contactText: "Let's talk about your project!",
  basedIn: "Based in: Buenos Aires, Argentina",
  availableFor: "Available for: Worldwide projects",
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
  sendMessage: "Send Message",
  sending: "Sending...",
  thankYou: "Thank you for your message! I will get back to you soon.",
  switchES: "Switch to Spanish",
  switchEN: "Switch to English",
  soundRecordist: "Sound Recordist",
  foleyEditor: "Foley Editor",
  boomOperator: "Boom Operator",
  documentary: "Documentary",
  shortFilm: "Short Film",
  featureFilm: "Feature Film",
  tvShow: "TV Show",
  realityShow: "Reality Show",
  tvDocumentary: "TV Documentary",
  linkedin: "LinkedIn Profile",
  contactMe: "Contact via email",
}

// Spanish translations
const es = {
  subtitle: "Directora de Sonido",
  about: "SOBRE MÍ",
  cv: "CURRÍCULUM",
  pictures: "GALERÍA",
  contact: "CONTACTO",
  aboutMe: "Sobre mí",
  aboutMe1:
    'Siempre he tenido curiosidad por lo diferente. Desde que en 2017 comencé mis estudios en la Universidad Nacional de La Plata (UNLP), el área del sonido logró captar toda mi atención. Es así como empecé a encargarme del registro de sonido directo en los trabajos que hacía mientras cursaba la carrera de Artes Audiovisuales. Siéndole fiel a esa curiosidad inicial, junto a un grupo de amigos de la carrera ganamos el LaBAF (Laboratorio Bellas Artes Filma), una sección del Festival de Cine de Universidades Públicas (Festival REC), donde facilitaban la realización de un proyecto audiovisual. “Barrenderas” fue el cortometraje en el cual me encontré pre produciendo el registro del sonido directo, grabando la posterior foley y contribuyendo a la mezcla final por primera vez en mi carrera.',
  aboutMe2:
    "Luego de animarme a grabar cortometrajes universitarios, tuve la oportunidad de participar en mi primer largometraje como sonidista de directo, un documental llamado “Con la Fuerza del Río”. En este proyecto me di cuenta que, no solo me gustaba el registro de sonido directo, sino que sentía la necesidad de profesionalizarme en esa área. Por lo tanto, en el año 2019 comencé mis estudios en Dirección de Sonido en la Escuela Nacional de Experimentación y Realización Cinematográfica (ENERC), donde pude aprender la pasión por la profesión gracias a docentes como Ruben Piputto, Sebastián González, Guido Beremblum, Gerardo Kalmar y Sofia Straface, entre otros.",
  aboutMe3:
    "A la mitad de mis estudios, comencé a trabajar profesionalmente en proyectos audiovisuales como microfonista, sonidista y directora de sonido. Además, participé como editora de foley en un estudio de postproducción de sonido. Hoy en día me dedico a hacer sonido para cine, documentales, series para plataformas, reality shows y programas de televisión.",
  aboutMe4:
    "Lo que más disfruto actualmente es trabajar en diversos proyectos donde los desafíos están constantemente cambiando y que, debido a la experiencia que he adquirido, puedo adaptarme de manera eficaz a ellos. También me gusta conocer a diferentes grupos de personas con las que formo equipo de trabajo, ya que considero que el trabajo colectivo es fundamental.",
  aboutMe5:
    "El hecho de poder narrar historias desde el sonido me resulta apasionante, creo fuertemente que la vinculación de los recursos técnicos con los estéticos pueden aportar al proyecto una dimensión narrativa impensada.",
  downloadCV: "Descargar CV (PDF)",
  imdb: "Perfil de IMDB",
  works: "Trabajos Realizados",
  year: "Año",
  type: "Tipo",
  role: "Rol",
  gallery: "Galería",
  getInTouch: "Contacto",
  contactText: "¡Conversemos sobre tu proyecto!",
  basedIn: "Ubicación: Buenos Aires, Argentina",
  availableFor: "Disponible para: Proyectos en todo el mundo",
  name: "Nombre",
  email: "Correo electrónico",
  subject: "Asunto",
  message: "Mensaje",
  sendMessage: "Enviar Mensaje",
  sending: "Enviando...",
  thankYou: "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.",
  switchES: "Cambiar a Español",
  switchEN: "Switch to English",
  soundRecordist: "Sonidista",
  foleyEditor: "Editora de Foley",
  boomOperator: "Microfonista",
  documentary: "Documental",
  shortFilm: "Cortometraje",
  featureFilm: "Largometraje",
  tvShow: "Programa de TV",
  realityShow: "Reality Show",
  tvDocumentary: "Documental de TV",
  linkedin: "Perfil de LinkedIn",
  contactMe: "Contactar vía email",
}

// Create the context
const LanguageContext = createContext()

// Create a provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es")
  const translations = language === "en" ? en : es

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>{children}</LanguageContext.Provider>
  )
}

// Create a custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
