import React from "react";
import { projects } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const textStyle = {
  color: "white",
};

const Project = () => {
  return (
    <div className={"section-dark"} id="project">
      <div className={"section-content"}>
        <h1>Projects</h1>
        <Container>
          <table>
            <tbody>
              <br />
              {projects &&
                projects.map((x, index) => (
                  <tr key={index}>
                    <td className="project-content">
                      <a
                        href={x.link}
                        target="parent"
                        key={index}
                        style={textStyle}
                      >
                        {x.title}
                        <br /> <br />
                        {x.description}
                        <br /> <br />
                      </a>
                    </td>

                    <td>
                      <img
                        src={x.image}
                        height={200}
                        width={170}
                        link={x.link}
                        alt="screenshot"
                      ></img>
                      <br />
                      <br />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Container>
      </div>
    </div>
  );
};

export default Project;
