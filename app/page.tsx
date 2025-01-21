import Banner from "./components/Banner";
import About from "./components/About";
import Why from "./components/Why";
import Services from "./components/Services";
import Team from "./components/Team";
// import Stats from './components/Stats';
// import Network from './components/Network/index';
// import Clientsay from './components/Clientsay/index';
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Why />
      <Services />
      <Team />
      <Contact />
    </main>
  );
}
