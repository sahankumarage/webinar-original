import { Navbar, Hero, Features, About, Testimonials, CTA, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
