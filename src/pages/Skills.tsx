import Tags from "../components/Tags";
import { SKILL_GROUPS } from "../data";

export default function Skills() {
  return (
    <section className="page on" aria-label="Skills">
      <h1>Skills</h1>
      <p className="lead">Advanced spreadsheet work is the core. Code and BI tools extend it.</p>
      <div className="skills-grid">
        {SKILL_GROUPS.map((g) => (
          <div key={g.title}>
            <h3>{g.title}</h3>
            <Tags items={g.items} />
          </div>
        ))}
      </div>
    </section>
  );
}
