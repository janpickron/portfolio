import React from "react";
import headshot from "../jan_headshot.jpg";

const About = () => {
  return (
    <div className={"section"} id="about">
      <div className={"section-content"}>
        <h1>About</h1>
        <table>
          <tbody>
            <tr className="about-content">
              <td>
                <p>
                  People said that I am dependable, conscientious, energetic,
                  enthusiastic, never gives up, and a dedicated hard worker.
                </p>
                <p>
                  I am looking for an opportunity to use my skills and years of
                  experience that brings a different perspective to any team. I
                  enjoy collaborating with others on projects. My goal is to
                  find a position that aligns with my values. Web accessibility
                  is my passion to ensure that all people have equal access to
                  technology.
                </p>
                <p>
                  With 20+ years in the tech community, I am committed learning
                  and staying current with "tech tools". Designing and building
                  amazing websites is not just a nine-to-five job for me, it is
                  a passion with love!
                </p>
                <p>
                  Outside of technology, paddleboarding at a beach, swinging
                  racquet sports, reading mysterious books, and toying with my
                  two black and white cats, Bonnie and Clyde are what I enjoy.
                </p>
              </td>
              <td>
                <img
                  src={headshot}
                  className="jan-headshot"
                  alt="Headshot of Janice Pickron"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
