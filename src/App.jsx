import { Hero, Community, Footer, Membership, Programmes, Testimonials } from "./sections/index";
import Nav from "./components/Nav";
import SlidingBanner from "./components/SlidingBanner";
import Social from "./sections/Social";

const App = () => {
  return (
    <main className=" bg-black text-white">
      <Nav />
      <section className="padding-x">
        <Hero />
      </section>

      <SlidingBanner />

      <section id="programs" className="padding">
        <Programmes />
      </section>

      <section className="padding">
        <Membership />
      </section>

      <section id="testimonials" className="padding bg-white text-black">
        <Testimonials />
      </section>

      <section id="contact-us" className="padding">
        <Community />
      </section>

      <section className="padding-x">
        <Social />
      </section>

      <section className="padding">
        <Footer />
      </section>
    </main>
  );
};

export default App;
