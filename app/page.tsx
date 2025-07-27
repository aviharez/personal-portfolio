import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import LoadingScreen from "@/components/LoadingScreen"
import MatrixBackground from "@/components/MatrixBackground"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <MatrixBackground />
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
