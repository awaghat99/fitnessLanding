import { Hero, Community, Footer, Membership, Programmes, Testimonials } from "./sections/index";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className=" bg-black text-white">
      <Nav />
      <section className="padding-x">
        <Hero />
      </section>
      <section className="padding">
        <Programmes />
      </section>
      <section className="padding">
        <Membership />
      </section>
      <section className="padding bg-white text-black">
        <Testimonials />
      </section>
      <section className="padding">
        <Community />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </main>
  );
};

export default App;
