const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I worked with Gonçalo, he was very helpful and fast to respond
                to my inquiry to help with the elaboration of the website from scratch
                and all technical problems. "
              </span>
              <span className="person">José Esteves</span>
              <span className="job">Owner - Lukat</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " We asked Gonçalo to build an application that could read many types of prescriptions and 
                transform them into tables, which the pacients could use to remember the medicine they need.
                He always looked to get the most details he could before we started the project. 
                It was a great experience to work with him. "
              </span>
              <span className="person">Simão Silva</span>
              <span className="job">Doctor - Portuguese HealthCare</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
