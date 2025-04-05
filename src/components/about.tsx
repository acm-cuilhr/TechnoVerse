export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-header">
          <h2>About</h2>
          <p>
            TechnoVerse is a two-day event that aims to bring together the tech
            enthusiasts from all over the Lahore. The event will be held on 18th
            and 19th May, 2024 at COMSATS University Islamabad, Lahore Campus.
            The event will feature a variety of competitions.
          </p>
        </div>

        <div className="about-box rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="about-item">
              <div className="icon text-turquoise text-4xl">
                <i className="bi bi-cash-stack"></i>
              </div>
              <h3>Prize Pool</h3>
              <p>350K+</p>
            </div>
            <div className="about-item">
              <div className="icon text-turquoise text-4xl">
                <i className="bi bi-trophy-fill"></i>
              </div>
              <h3>Modules</h3>
              <p>9</p>
            </div>
            <div className="about-item">
              <div className="icon text-turquoise text-4xl">
                <i className="bi bi-bookmarks-fill"></i>
              </div>
              <h3>Categories</h3>
              <p>7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
