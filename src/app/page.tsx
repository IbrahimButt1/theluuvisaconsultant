export default function Home() {
  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f4ff, #ffffff)",
      }}
    >
      <h1 className="fw-bold display-4 mb-3">
        Navigate Your Future with{" "}
        <span style={{ color: "#e60000" }}>LUU Visa Consultant</span>
      </h1>
      <p className="lead text-secondary mb-4">
        Visa Study • Work Permit • Immigration Guidance <br />
        Professional support to open global opportunities.
      </p>
      <div className="d-flex gap-3">
        <a href="/eligibility" className="btn btn-danger btn-lg">
          Check Eligibility
        </a>
        <a href="/services" className="btn btn-outline-dark btn-lg">
          Explore Services
        </a>
      </div>
    </section>
  );
}