import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"
/*

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}
*/




const App = () => {
/*
    const options = {
        background: {
            color: "transparent",
        },
        particles: {
            shape: {
                type: "circle"
            },
            number: {
                value: 0
            },
            color: {
                value: "random"
            },
            opacity: {
                value: 0.3
            },
            size: {
                value: {min: 5, max: 20}
            },
            move: {
                enable: true,
                speed: 6,
                random: false,
                outModes: "bounce",
            }
        },
        emitters: [
            {
                direction: "top-right",
                position: {
                    x: 0,
                    y: 100
                },
                rate: {
                    delay: 1,
                    quantity: 4,
                },
            },
        ]
    };
*/


    return (
        <div className="App">
            {/*<Particles options={options} init={particlesInit} />*/}
                <div>
                <NavBar />
                <Home />
                <About />
                <Portfolio />
                <Experience />
                <Contact />
                <Footer />
                <SocialLinks />
            </div>
        </div>
    );
};


export default App;
