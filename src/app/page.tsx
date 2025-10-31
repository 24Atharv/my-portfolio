import Image from "next/image";
import { Container } from "./components/container";
import { Projects } from "./components/projects";

export default function Home() {
  return <div className="min-h-screen flex items-start justify-start">
    <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
        Atharv Nandurkar
      </h1>
      <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">
        I'm a Full Stack Developer with a passion for building scalable and efficient systems. I'm currently 3rd year student of IT From a Tier-3 College.</p>
        <Projects />
    </Container>
  </div>
} 
