import React, { Component } from "react";
import "./ExperienceCard.css";
import Button from "../../components/button/Button";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div
        className="experience-card"
        // style={{ border: `1px solid ${experience["color"]}` }}
      >
        <p className="experience-card-company" style={{ color: theme.text }}>
          <a
            href={experience["company_url"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>{experience["company"]}</u>
          </a>
        </p>

        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <div className="experience-card-logo-div">
                <img
                  className="experience-card-logo"
                  src={require(`../../assests/images/${experience["logo_path"]}`)}
                  alt=""
                />
              </div>
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          <p
            className="experience-card-description"
            style={{ color: theme.text }}
          >
            {experience["description"].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </p>
          <div className="experience-btn-div">
            <div className="experience-btn">
              <Button
                text="Certificate"
                newTab={true}
                href={experience["certificate"]}
                theme={theme}
                className="portfolio-repo-btn"
              />
            </div>
            {experience["link"]?
            <div className="experience-btn">
              <Button
                text="Project Reference"
                newTab={true}
                href={experience["link"]}
                theme={theme}
                className="portfolio-repo-btn"
              />
            </div>:""
          }
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
