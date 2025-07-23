
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/navBar/navBar.jsx';
import About from '../components/about/about.jsx';
import Development from '../components/development/develoment.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function DevPage() {


  return (
    <div className=" text-neutral-900">
      <Navbar color='#E5249E'/>
      <main>
        <Development />
        <About color='#E5249E' />
      </main>
    </div>
  );
}
