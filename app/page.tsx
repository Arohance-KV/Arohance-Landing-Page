import dynamic from 'next/dynamic';
import Header from '@/components/header';
import Hero from '@/components/hero';
const About = dynamic(() => import('@/components/about'), { ssr: false });
const Services = dynamic(() => import('@/components/services'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Footer />
      </div>
    </main>
  );
}