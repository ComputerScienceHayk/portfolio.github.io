import React from 'react';

const Portfolio = () => {
  return (
      <section id="portfolio" className="portfolio">
          <div className="row">
              <div className="col-lg-12">
                <ul className="filters text-center">
                    <li className="active" data-filter="*">
                        <a href="#!"><i className="fas fa-star-of-life"></i> All</a>
                    </li>
                    <li data-filter=".Web">
                        <a href="#!"><i className="fas fa-globe"></i> Web</a>
                    </li>
                    <li data-filter=".desktop">
                        <a href="#!"><i className="fas fa-mobile"></i> Mobile</a>
                    </li>
                </ul>
              </div>
              <div className="projects">
                  <div className="row">
                    <div className="col-lg-4 item Web html css jquery">
                        <div className="project">
                            <div className="project-head">
                                <img src="http://dnevozhai.com/work/shopping_card.jpg" alt="card" className="img-fluid card-img" />
                                <div className="project-overlay">
                                    <h2>Some H</h2>
                                </div>
                                <div className="project-hover">
                                    <p>
                                        Some Huynya Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error pariatur, eveniet omnis. Fugit unde, sint saepe minus assumenda tempora quam delectus adipisci, voluptatibus ipsam consequatur, sit velit libero quos voluptas.
                                    </p>
                                </div>
                            </div>
                            <div className="project-body text-center">
		                        <h3 className="title">Web</h3>

                                <ul className="filters filters-tag text-center">
                                tag:
                                <li data-filter=".html"><a href="#!">HTML</a></li>
                                <li data-filter=".css"><a href="#!">CSS</a></li>
                                <li data-filter=".jquery"><a href="#!">jQuery</a></li>
                                </ul>

                                <div className="btn-group" role="group">
                                <a href="#!" className="btn  project-btn"><i className="fas fa-code"></i> Code</a>
                                <a href="#!" className="btn  project-btn"><i className="far fa-eye"></i> View</a>
                                </div>
		                    </div>
                        </div>
                    </div>
                    <div className="col-lg-4 item Web html css jquery">
                        <div className="project">
                            <div className="project-head">
                                <img src="http://dnevozhai.com/work/music_player.jpg" alt="" className="img-fluid card-img" />
                                <div className="project-overlay">
                                    <h2>Nare website-portfolio</h2>
                                </div>
                                <div className="project-hover">
                                    <p>
                                        Nane Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error pariatur, eveniet omnis. Fugit unde, sint saepe minus assumenda tempora quam delectus adipisci, voluptatibus ipsam consequatur, sit velit libero quos voluptas.
                                    </p>
                                </div>
                            </div>
                            <div className="project-body text-center">
                                <h3 className="title">Web</h3>

                                <ul className="filters filters-tag text-center">
                                    tag:
                                    <li data-filter=".html"><a href="#!">HTML</a></li>
                                    <li data-filter=".css"><a href="#!">CSS</a></li>
                                    <li data-filter=".jquery"><a href="#!">jQuery</a></li>
                                </ul>

                                <div className="btn-group" role="group">
                                    <a href="#!" className="btn  project-btn"><i className="fas fa-code"></i> Code</a>
                                    <a href="#!" className="btn  project-btn"><i className="far fa-eye"></i> View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 item desktop">
                        <div className="project">
                            <div className="project-head">
                                <img src="http://dnevozhai.com/work/amazfit_pairing.gif" alt="" className="img-fluid card-img" />
                                <div className="project-overlay">
                                    <h2>Android App </h2>
                                </div>
                                <div className="project-hover">
                                <p>
                                    Mobile Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aspernatur quaerat ut eaque consequuntur. In quas molestias, culpa incidunt quia autem ullam recusandae qui alias! Non, labore tempore repudiandae cumque.
                                </p>
                                </div>
		                    </div>
                            <div className="project-body text-center">
                                <h3 className="title">mobile</h3>

                                <ul className="filters filters-tag text-center">
                                tag:
                                <li data-filter=".psd"><a href="#!">Flutter, Dart</a></li>
                                </ul>

                                <div className="btn-group" role="group">
                                <a href="#!" className="btn  project-btn"><i className="fas fa-code"></i> Code</a>
                                <a href="#!" className="btn  project-btn"><i className="far fa-eye"></i> View</a>
                                </div>
		                    </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Portfolio;
