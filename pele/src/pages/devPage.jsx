
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Navbar from '../components/navBar/navBar.jsx';
// import About from '../components/about/about.jsx';
// import Development from '../components/development/develoment.jsx';

// gsap.registerPlugin(ScrollTrigger);

// export default function DevPage() {


//   return (
//     <div className=" text-neutral-900">
//       <Navbar color='#E5249E'/>
//       <main>
//         <Development />
//         <About color='#E5249E' />
//       </main>
//     </div>
//   );
// }
// src/pages/devPage.jsx
import Navbar from "../components/navBar/navBar.jsx";
import ProjectsMobile from "../components/p-mobile/ProjectsMobile.jsx";
import About from "../components/about/about.jsx";

// If you don’t have a data file yet, keep this array here temporarily:
const projects = [
  {
    id: 1,
    title: "לומדה דרקונית",
    image: "src/assets/mocup/phone.png",
    note: "css, react",
    href: "/projects/pump",
  },
    {
    id: 2,
    title: "לומדה קטלנית",
    image: "src/assets/mocup/phone2.png",
    note: "$1 million launch in 48 hours",
    href: "/projects/pump",
  },
      {
    id: 3,
    title: "אתר בהל\"צ",
    image: "src/assets/mocup/laptop.png",
    note: "$1 million launch in 48 hours",
    href: "/projects/pump",
  },
];

export default function DevPage() {
  return (
    <div className="text-neutral-900">
      <Navbar color="#E5249E" />
      <ProjectsMobile projects={projects} />
      <About color="#E5249E" />
    </div>
  );
}
