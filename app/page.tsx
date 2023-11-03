import Image from 'next/image'
import './page.scss'
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Cases } from "@/app/components/Cases";
import { HowWeWork } from "@/app/components/HowWeWork";
import { About } from "@/app/components/About";
import { ContactCard } from "@/app/components/ContactCard";
import { Facilities } from "@/app/components/Facilities";
import { Partners } from "@/app/components/Partners";
import { Services } from "@/app/components/Services";
import { Subscribe } from "@/app/components/Subscribe";
import { Footer } from "@/app/components/Footer";
import { Faq } from "@/app/components/Faq";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Cases/>
      <HowWeWork/>
      <About/>
      <ContactCard title={`Бесплатная<br/> консультация`}/>
      <Facilities/>
      <Partners/>
      <Services/>
      <Subscribe/>
      <ContactCard title={`Не нашли<br/> нужной услуги?`}/>
      <Faq/>
      <Footer />
    </main>
  )
}
