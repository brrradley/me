import ATF from "./components/atf";
import Quote from "./components/quote";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
//--
import { quotesArray } from "./data/data_arrays";

export default function App() {
  return (
    <main className="flex flex-col items-center">
      <article className="h-full flex flex-col text-center max-w-4xl justify-center items-center">
        <ATF />
        <Quote data={quotesArray[0]} />
        <Skills id="skills" />
        <Quote data={quotesArray[1]} />
        <Projects id="projects" />
        <Quote data={quotesArray[2]} />
        <Reviews id="reviews" />
      </article>
      <Footer />
    </main>
  );
}
