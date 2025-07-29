import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/navBar/navBar.jsx';
import About from '../components/about/about.jsx';
import Graphics from '../components/graphics/graphics.jsx';


gsap.registerPlugin(ScrollTrigger);

export default function GraphicPage() {


  return (
    <div className=" text-neutral-900">
      <Navbar color='#000000'/>
      <main>
        <Graphics />
        <About color='#000000' />
      </main>
    </div>
  );
}
