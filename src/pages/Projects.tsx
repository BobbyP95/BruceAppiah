import Tags from "../components/Tags";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section className="page on" aria-label="Projects">
      <h1>Projects</h1>
      <p className="lead">Selected work across spreadsheet automation, data integration and front-end development.</p>

      {PROJECTS.map((p) => (
        <div className="project" key={p.title}>
          <h2>{p.title}</h2>
          <ul>
            {p.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <Tags items={p.tags} />
          {p.codeSamples && (
            <p><a className="btn btn--outline" href="#contact">Ask for code samples</a></p>
          )}
        </div>
      ))}
    </section>
  );
}
