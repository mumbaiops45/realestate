import Hero from "./Component/Hero";
import Feature from "./Component/Feature";
import About from "./Component/About";
import Choose from "./Component/Choose";
import Testonomial from "./Component/Testimonials";
import Faq from "./Component/Faq";
import Cta from "./Component/Cta";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Feature/>
      <Choose />
      <Testonomial/>
      <Faq/>
      <Cta/>
    </div>
  );
}
