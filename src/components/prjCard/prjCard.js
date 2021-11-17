import React, { Component } from "react";
import "./prjCard.css";
import Button from "../../components/button/Button";

class prjCard extends Component {
  render() {
    const prj = this.props.prj;
    const theme = this.props.theme;
    return (
      <div className="prj-card" >
        <p className="prj-card-company" style={{ color: theme.text }}>
            {prj["name"]}
        </p>

        <div className="prj-card-body-div">
          <p
            className="prj-card-description"
            style={{ color: theme.text }}
          >
            {prj["description"].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </p>
          <div className="prj-btn-div">
            <div className="prj-btn">
              <Button
                text="Certificate"
                newTab={true}
                href={prj.url}
                theme={theme}
                className="portfolio-repo-btn"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default prjCard;
