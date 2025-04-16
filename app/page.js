import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievmentsSection from "./components/AchievmentsSection";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Head>
        <title>T. Young Portfolio</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievmentsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
