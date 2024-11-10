import Banner from './components/Banner';
// import Stats from './components/Stats';
import Services from './components/Services';
import Why from './components/Why';
import About from './components/About';
// import Network from './components/Network/index';
// import Clientsay from './components/Clientsay/index';
// import Newsletter from './components/Newsletter/Newsletter';


export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Stats /> */}
      <About />
      <Why />
      <Services />
      {/* <Network /> */}
      {/* <Clientsay /> */}
      {/* <Newsletter /> */}
    </main>
  )
}
