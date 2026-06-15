const Contact = () => {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-wrapper">

        <h1 className="contact-heading">
          GET IN TOUCH
        </h1>

        <a
          href="mailto:komal.work1626@gmail.com"
          className="contact-mail"
        >
          komal.work1626@gmail.com
        </a>

        <div className="contact-info">
          <p>📞 +91 9022611305</p>
          <p>     &nbsp;&nbsp;  Pune, Maharashtra</p>
        </div>

        <div className="social-area">

          <h3>Social : </h3>

          <div className="social-grid">

            <a
              href="https://linkedin.com/in/komalshinde16/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/komalshinde16"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            {/* <a
              href="mailto:komal.work1626@gmail.com"
            >
              Gmail
            </a> */}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;