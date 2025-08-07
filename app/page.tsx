import Hero from './components/Hero';
import Projects from './components/Projects';
import Products from './components/Products';
import Feed from './components/Feed';
import About from './components/About';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Products />
      <Feed />
    </>
  );
}
