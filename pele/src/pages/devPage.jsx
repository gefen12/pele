// src/pages/devPage.jsx
import Navbar from "../components/navBar/navBar.jsx";
import ProjectsMobile from "../components/p-mobile/ProjectsMobile.jsx";
import About from "../components/about/about.jsx";
import Development from "../components/development/develoment.jsx";
import useIsMobile from "../hooks/useIsMobile.js";

// (recommended) import assets so builds don’t break
import phone1 from "../assets/mocup/phone.png";
import phone2 from "../assets/mocup/phone2.png";
import laptop from "../assets/mocup/laptop.png";

const projects = [
  { id: 1, title: "לומדה דרקונית", image: phone1, note: "css, react", href: "/projects/pump" },
  { id: 2, title: "לומדה קטלנית", image: phone2, note: "css, react", href: "https://github.com/gefen12/my-app.git" },
  { id: 3, title: "אתר בהל\"צ",   image: laptop, note: "react, ux/ui", href: "https://github.com/gefen12/bhd14.git" },
];

export default function DevPage() {
  const isMobile = useIsMobile("(max-width: 768px)");

  return (
 <div className="text-neutral-900">
      <Navbar color="#E5249E" />
      <main>
        {isMobile ? (
          <ProjectsMobile projects={projects} />
        ) : (
          <Development />
        )}
        <About color="#E5249E" /> {/* always rendered after */}
      </main>
    </div>
  );
}
