import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <Intro />
      <About />
      <Projects/>
      <Skills/>
      <Contact />
      <Footer/>
    </main>
  )
}
