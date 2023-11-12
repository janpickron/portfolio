import React from "react";
import { projects } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const textStyle = {
  color: "black"
};

const Project = () => {
  return (
    <div className={"section"} id="project">
      <div className={"section-content"}>
        <h1>Projects</h1>
        <Container>
          <table>
            <tbody>
            
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
                        <br />
                      </a>
                    </td>

                    <td>
                    <a
                        href={x.link}
                        target="parent"
                        key={index}
                      >
                      <img
                        src={x.image}
                        height={200}
                        width={170}
                        link={x.link}
                        alt={x.alt}
                        style={{border:"2px solid #333",}}
                        className="square bg-primary rounded"
                      ></img>
                      </a>
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
