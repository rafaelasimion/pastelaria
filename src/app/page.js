import Navbar from '../components/Navbar/Navbar.js';
import Hero from '../components/Hero/Hero.js';
import Promo from '../components/Promo/Promo.js';
import Menu from '../components/Menu/Menu.js';
import Contact from '../components/Contact/Contact.js';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Promo />
      <Menu />
      <Contact />
    </>
  );
}
