import Footer from "./components/Footer";
import Header from "./components/Header";
import { useHashRoute } from "./hooks/useHashRoute";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import type { PageId } from "./routes";

const PAGE_COMPONENTS: Record<PageId, () => JSX.Element> = {
  home: Home,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  contact: Contact,
};

export default function App() {
  const page = useHashRoute();
  const Page = PAGE_COMPONENTS[page];
  return (
    <>
      <Header page={page} />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  );
}
