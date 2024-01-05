// stack icons
import html from "../assets/icons/html5.svg";
import css from "../assets/icons/css3-alt.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import tailwind from "../assets/icons/tailwind.svg";
import js from "../assets/icons/square-js.svg";
import react from "../assets/icons/react.svg";
import leaflet from "../assets/icons/react-leaflet.svg";
import vite from "../assets/icons/vite.svg";
import pwa from "../assets/icons/PWA.svg";
import nodejs from "../assets/icons/node.svg";
import express from "../assets/icons/express.svg";
import jwt from "../assets/icons/jwtio-json-web-token.svg";
import php from "../assets/icons/php.svg";
import vb from "../assets/icons/vbulletin.svg";
import jquery from "../assets/icons/jquery.svg";
// product images
import warmbanks from "../assets/images/mock_warm.png";
import literecords from "../assets/images/mock_literecords.png";
import weclean from "../assets/images/mock_weclean.png";
import espresso from "../assets/images/mock_mediaplayer.png";
// review avatars
import imgRenard from "../assets/images/review_renard.jpeg";
import imgFlood from "../assets/images/review_flood.jpeg";
import imgAnderson from "../assets/images/review_anderson.jpeg";

export const atfIconsArray = [
  html,
  css,
  tailwind,
  js,
  react,
  vite,
  pwa,
  leaflet,
];

export const stackArray = [
  {
    icon: html,
    title: "HTML 5",
    content:
      "Clean and efficient HTML5 semantic coding ensures optimization for search engines and enhanced market appeal.",
  },
  {
    icon: css,
    title: "CSS",
    content:
      "CSS transforms concepts, ensuring not only an aesthetically pleasing finish but also an engaging user experience.",
  },
  {
    icon: tailwind,
    title: "Tailwind",
    content:
      "Utilizing Tailwind for pragmatic styling brings efficiency to the design process, ensuring clean and maintainable user interfaces.",
  },
  {
    icon: js,
    title: "JavaScript",
    content:
      "JavaScript provides digital interactivty to elevate user engagement. It's functionality evolves static ideas into dynamic realities.",
  },
  {
    icon: react,
    title: "React",
    content:
      "React & React Native frameworks bring component-driven interfaces to all platforms, ensuring an immersive digital experience.",
  },
  {
    icon: leaflet,
    title: "Leaflet",
    content:
      "Leaflet is the leading open-source and most light-weight JavaScript library for mobile-friendly interactive maps. ",
  },
  {
    icon: vite,
    title: "Vite JS",
    content:
      "Vite seamlessly manages project setups, allowing for swift and uncomplicated builds that keep applications running smoothly.",
  },
  {
    icon: pwa,
    title: "Progressive Web App",
    content:
      "Using Progressive Web App (PWA) principles to deliver responsive app-like experiences that captivates users on any device.",
  },
];

export const projectsArray = [
  {
    title: "Checked In Pro",
    stack: [vite, nodejs, express, pwa, tailwind],
    image: weclean,
    app: "",
    github: "",
    description: (
      <p>
        Elevate your commercial branding with Checked In Pro , the ultimate PWA
        for streamlined job check-ins. Powered by{" "}
        <a href="https://vitejs.dev" target="_new" className="italic">
          Vite
        </a>{" "}
        and tailored with{" "}
        <a href="https://tailwindcss.com" target="_new" className="italic">
          Tailwind
        </a>
        , it simplifies your workday. Get precise check-ins using{" "}
        <a href="https://leafletjs.com" target="_new" className="italic">
          Leaflet.js
        </a>{" "}
        live maps, then effortlessly input client and job details before
        leaving. Say goodbye to paperwork, and hello to efficiency.
      </p>
    ),
  },
  {
    title: "Warm Banks",
    stack: [react, leaflet, nodejs, express, jwt],
    image: warmbanks,
    app: "",
    github: "https://github.com/decafdevio/warm-and-safe",
    description: (
      <p>
        A highly functional and responsive using{" "}
        <a href="https://react.dev" target="_new" className="italic">
          React.js
        </a>{" "}
        and{" "}
        <a href="https://leafletjs.com" target="_new" className="italic">
          Leaflet.js
        </a>
        , seamlessly interfacing with a REST API{" "}
        <a href="https://nodejs.org/en" target="_new" className="italic">
          Node.js
        </a>{" "}
        backend, ensuring accessibility and optimal user experience through
        React-Icons and adherence to UX best practices. My adaptability was
        showcased as I orchestrated a smooth migration from MongoDB to CosmosDB
        on Azure for enhanced scalability. Working within a dynamic Agile team,
        I met tight deadlines and contributed to the deployment of over 3,000
        warm spaces across the UK to positively impact lives.
      </p>
    ),
  },
  {
    title: "Espresso Feeds",
    stack: [react, nodejs, express],
    image: espresso,
    app: "",
    github: "https://github.com/decafdevio/espress-feeds",
    description: (
      <p>
        The ultimate mobile companion for exploring and curating your favourite
        UK radio stations. Built using the{" "}
        <a href="https://reactnative.dev" target="_new" className="italic">
          React Native
        </a>{" "}
        infrastructure to compile adaptively to both Android and iOS mobile
        systems. Discover and save a diverse range of radio feeds, effortlessly
        creating personalized playlists which you fully manage.
      </p>
    ),
  },
  {
    title: "Shoutcast Plugin",
    stack: [vb, js, jquery, css],
    image: literecords,
    app: "https://literecords.com",
    github: "https://github.com/decafdevio/shoutcast-script-vbulletin4",
    description: (
      <p>
        This plugin seamlessly retrieves real-time information, including the
        current track, artist, version, and listener count, directly from the{" "}
        <a href="https://literecords.com" target="_new" className="italic">
          LiteRECORDS
        </a>{" "}
        Shoutcast server's XML feed. It integrates the user-specific details
        sourced from a MySQL database, creating a CSS3-styled frame activated
        from a vBulletin hook. Leveraging the power of JQuery and AJAX, it
        dynamically updates the displayed details and online status.
      </p>
    ),
  },
];

export const reviewsArray = [
  {
    author: "Alyzande Renard",
    title: "Work Coach at Estio",
    avatar: imgRenard,
    content:
      "Bradley's major strengths are his curiosity, determination, and cheerful approach to breaking huge projects down into approachable tasks. This is when his work ethic really shows up and his task orientated focus gets the job done. It was genuine enjoyment to work with him.",
  },
  {
    author: "Leon Flood",
    title: "Director at Flood IT Support",
    avatar: imgFlood,
    content:
      "Bradley is such a joy to work with. I have worked with him many times and its the same story each and every time. Always goes the extra mile and his attention to detail is excellent. Highly recommended.",
  },
  {
    author: "Nathan Anderson",
    title: "DevOps Engineer at Home Office",
    avatar: imgAnderson,
    content:
      "Bradley is such a talented guy when it comes to all things code related especially design. Bradley’s communication skills are great too, we worked together on the final project and he was a wizard with layout and css, he quickly changed the code to match what we’d discussed prior.",
  },
];

export const quotesArray = [
  "I was taught the fundamentals in Visual Basic 6 programming soon after a short-term computer hardware course at Bury College in 2003. During this time I was recognized by the alias Se7eN, focusing on the creation of social tools for Yahoo! Messenger and MSN Messenger.",

  "In 2005 I began exploring web development with HTML & CSS using Macromedia. My tutor introduced me to the realms of DJing and producing music with Cool Edit Pro 2. I would later enjoy a decade-long career performing internationally.",

  "In 2010, I founded LiteRECORDS. Over the initial five years, this community experienced consistent growth, doubling both in membership and revenue annually. Presently, it boasts a community of over 33,000 members, featuring artists from around the globe.",
];
