const About = () => {
  return (
    <section className="about">
      <section className="about__wrapper">
        <h1 className="about__title">About the series</h1>
        <main className="about__detail-wrapper">
          <section className="about__detail">
            <p>
              Game of Thrones is an American fantasy drama television series
              created by David Benioff and D.B. Weiss for HBO. It is an adaption
              of A Song of Ice and Fire, a series of fantasy novels by George
              R.R. Martin, the first of which is A Game Of Thrones.
            </p>
            <p>
              The show was shot in the UK, Canada, Croatia, Iceland, Malta,
              Morocco and Spain. It premiered on HBO in the United States on
              April 17, 2011 and concluded on May 19, 2019, with 73 episodes
              broadcast over eight seasons.
            </p>
            <p>
              Set on the fictional continents of Westeros and Essos, Game Of
              Thrones has a large ensemble cast and follows several story arcs
              throughout the course of the show.
            </p>
          </section>

          <section className="about__detail about-detail--positioned">
            <p>
              Game of Thrones attracted a record viewership on HBO and has a
              broad, active, and international fan base. Critics have praised
              the series for its acting, complex characters, story, scope, and
              production values, although it's frequent use of nudity and
              violence has been subject to criticism.
            </p>
            <p>
              The series received 59 Primetime Emmy Awards, the most by a drama
              series, including Outstanding Drama Series in 2015, 2016, 2018 and
              2019.
            </p>
          </section>
        </main>
      </section>
    </section>
  );
};

export default About;
