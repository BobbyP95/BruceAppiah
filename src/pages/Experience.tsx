import { EDUCATION, JOBS } from "../data";

export default function Experience() {
  return (
    <section className="page on" aria-label="Experience">
      <h1>Experience</h1>
      <p className="lead">From utility data reporting to building automation systems for a growing operations team.</p>

      {JOBS.map((job) => (
        <div className="job" key={job.title}>
          <div className="job__when">{job.when}</div>
          <div>
            <h3>{job.title}</h3>
            <p className="job__company">{job.company}</p>
            <ul>
              {job.bullets?.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}

      <div className="job">
        <div className="job__when">Education</div>
        <div>
          {EDUCATION.map((e) => (
            <div key={e.title}>
              <h3>{e.title}</h3>
              <p className="job__company">{e.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
