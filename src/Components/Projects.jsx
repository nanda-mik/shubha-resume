import { Description } from "./Description";

export const Projects = ({ Projects }) => {
  return (
    <section className="Projects-experience section" id="Projects">
      <h2 className="section-title">Projects</h2>
      <div className="experience__container bd-grid">
        {Projects.map((proyect) => (
          <Proyect key={proyect.company} {...proyect} />
        ))}
      </div>
    </section>
  );
};

const Proyect = ({ name, company, period, description }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">
          {name} - {company}
        </h3>
        <span className="experience__proyect">{period}</span>
        {description.map((desc, i) => <Description key={i} desc={desc} />)}
      </div>
    </div>
  );
};
