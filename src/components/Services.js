import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeServices && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.services;
      var services = this.props.resumeServices.map(function (services) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={services.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(services)}>
                <div>
                  <img
                    src={services.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{services.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {services.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="services">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{services}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;