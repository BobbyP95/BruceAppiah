import SpreadsheetTable from "../components/SpreadsheetTable";
import { WHAT_I_DO } from "../data";

export default function Home() {
  return (
    <section className="page on" aria-label="Home">
      <h1>Spreadsheets that run themselves.</h1>
      <p className="lead">
        I'm an MS Excel and data operations specialist. I build automated reports, KPI dashboards and
        validation systems so teams spend less time fixing data and more time using it.
      </p>
      <p>
        <a className="btn" href="#contact">Work with me</a>
        <a className="btn btn--outline" href="#projects">See my projects</a>
      </p>

      <SpreadsheetTable />

      <h2>What I do</h2>
      <div className="grid">
        {WHAT_I_DO.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
