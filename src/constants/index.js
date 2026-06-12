import {
  mobile,
  backend,
  dart,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  flutter,
  frontend,
  react,
  backend_learning,
  Andi_shop,
  Iphone,
  Gpt,
  book,
  MyTsel,
  Duolingo,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter",
    icon: dart,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer Learning Experience",
    company_name: "HTML, CSS, And JavaScript",
    icon: frontend,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Mempelajari dasar pengembangan web menggunakan HTML, CSS, dan JavaScript.",
      "Membuat beberapa project website sederhana sebagai latihan.",
      "Mendesain tampilan antarmuka menggunakan Figma.",
      "Terus mengembangkan kemampuan melalui latihan project mandiri.",
    ],
  },
  {
    title: "React Learning Experience",
    company_name: "Web Application",
    icon: react,
    iconBg: "#E6DEDD",
    date: "April 2025 - Present",
    points: [
      "Mempelajari konsep inti React seperti components, props, state, dan hooks",
      "Membuat tampilan aplikasi web yang interaktif dan responsif menggunakan React",
      "Mengembangkan komponen antarmuka yang reusable untuk meningkatkan struktur kode",
      "Menerapkan layout responsif menggunakan HTML, CSS, dan React",
      "Mengembangkan project aplikasi web sederhana sebagai bagian dari peningkatan keterampilan",
    ],
  },
  {
    title: "Back-End Developer Learning Experience",
    company_name: "Php, MysQl, and Node.js",
    icon: backend_learning,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Mempelajari dasar pemrograman Back-End menggunakan PHP dan Node.js",
      "Membuat aplikasi web dinamis sederhana menggunakan PHP dan MySQL",
      "Menerapkan operasi database seperti Create, Read, Update, Delete (CRUD)",
      "Mengembangkan project latihan Back-End sebagai bagian dari peningkatan keterampilan pengembangan aplikasi.",
    ],
  },
  {
    title: "Flutter Learning Experience",
    company_name: "Mobile",
    icon: flutter,
    iconBg: "#E6DEDD",
    date: "July 2025 - Present",
    points: [
      "Mempelajari dasar pengembangan aplikasi mobile cross-platform menggunakan Flutter",
      "Membuat tampilan antarmuka aplikasi menggunakan widget Flutter seperti Container, Row, Column, Text, dan Image",
      "Menerapkan layout responsif menggunakan sistem widget Flutter",
      "Mempelajari navigasi antar halaman dalam aplikasi Flutter",
      "Membuat project aplikasi mobile sederhana sebagai latihan pengembangan keterampilan",
    ],
  },
];

const base = import.meta.env.BASE_URL;
const educations = [
  {
    degree: "Sekolah Dasar",
    school: "SD Negeri Pacet",
    year: "2011 – 2017",
    location: "Ciruas",
    image: `${base}assets/Tut_wuri_handayani.png`,
  },
  {
    degree: "Sekolah Menengah Pertama",
    school: "SMP Negeri 18 Kota Serang",
    year: "2017 – 2020",
    location: "Kota Serang",
    image: `${base}assets/SMPN.png`,
  },
  {
    degree: "Sekolah Menengah Atas",
    school: "SMA Negeri 8 Kota Serang",
    year: "2020 – 2023",
    location: "Kota Serang",
    image: `${base}assets/SMAN.png`,
  },
];

const projects = [
  {
    name: "E-Commerce Website",
    description:
      "Mengembangkan website e-commerce berbasis PHP dan MySQL dengan sistem multi-role (seller dan customer), manajemen produk, pencarian produk, detail produk, dan keranjang belanja.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
    ],
    image: Andi_shop,
    source_code_link: "https://kusuma.kesug.com/home.php",
  },
  {
    name: "Landing Page",
    description:
      "Halaman produk Apple iPhone 15 Pro yang dibangun menggunakan React, Three.js, dan GSAP. model 3D interaktif iPhone 15 Pro yang dapat diputar dan diubah warnanya secara real-time, lengkap dengan animasi",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: Iphone,
    source_code_link: "https://kusumamuhammadandi.github.io/Iphone/",
  },
  {
    name: "ChatGPT clone",
    description:
      "Aplikasi web chatbot interaktif yang menyerupai antarmuka ChatGPT, ditenagai oleh model bahasa mutakhir. Dibangun dengan tujuan menghadirkan pengalaman percakapan AI",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Gpt,
    source_code_link: "https://github.com/kusumamuhammadandi/ChatGPT.git",
  },
  {
    name: "AI-Powered Reading",
    description:
      "Bookified adalah SaaS EdTech yang memungkinkan user upload buku PDF dan berdiskusi dengan AI tentang isi buku tersebut menggunakan suara — mirip punya asisten pribadi untuk membaca buku.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Vapi AI",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://bookifiedandi.vercel.app/",
  },
  {
    name: "MyTsel App",
    description:
      "Replika aplikasi MyTelkomsel berbasis Flutter dengan arsitektur GetX sebagai state management Project ini dibuat untuk keperluan pembelajaran pengembangan aplikasi mobile Android menggunakan Flutter",
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
    ],
    image: MyTsel,
    source_code_link: "https://github.com/kusumamuhammadandi/mytsel_andi",
  },
  {
    name: "Duolingo AI-Teacher",
    description:
      "Duolingo adalah aplikasi belajar bahasa berbasis AI yang menghadirkan pengalaman belajar interaktif dan menyenangkan. Duolingo membawa pembelajaran dengan teknologi AI suara real-time.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: Duolingo,
    source_code_link: "https://kusumamuhammadandi.github.io/duolingo_ai_video/",
  },
];

const socialImgs = [
  {
    name: "wa",
    imgPath: `${base}assets/wa.png`,
    url: "https://wa.me/6283167120139",
  },
  { name: "insta", imgPath: `${base}assets/insta.png` },
  { name: "fb", imgPath: `${base}assets/fb.png` },
  { name: "x", imgPath: `${base}assets/x.png` },
  { name: "linkedin", imgPath: `${base}assets/linkedin.png` },
];

export {
  services,
  technologies,
  experiences,
  educations,
  projects,
  socialImgs,
};
