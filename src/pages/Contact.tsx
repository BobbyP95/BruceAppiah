import { EMAIL, PHONE } from "../data";

export default function Contact() {
  return (
    <section className="page on" aria-label="Contact">
      <h1>Let's talk.</h1>
      <p className="lead">
        Need a report automated, a dashboard built or messy data cleaned up? Send a note and I'll reply
        with how I'd approach it.
      </p>

      <div className="grid contact-grid">
        <div className="card">
          <h3>Email</h3>
          <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
        <div className="card">
          <h3>Phone</h3>
          <p><a href={PHONE.href}>{PHONE.label}</a></p>
        </div>
        <div className="card">
          <h3>Availability</h3>
          <p>Open to work across all US time zones (GMT+0).</p>
        </div>
      </div>

      <p className="contact-cta">
        <a className="btn" href={`mailto:${EMAIL}?subject=Project%20enquiry`}>Email Bobby</a>
      </p>
      <p className="hint">References available on request.</p>
    </section>
  );
}
