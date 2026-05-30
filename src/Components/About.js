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
              <td className="about-me">
                <p>
                  I am recognized for my dependability, conscientious approach, and consistent enthusiasm, supported by a strong commitment to quality work. With over 20 years of experience in the tech industry, I bring a broad perspective and a deep passion for creating meaningful, user-centered digital experiences.</p>

                <p>I am actively seeking opportunities where I can apply my expertise in collaboration and web accessibility, with a focus on ensuring equal access to technology for all users. Inclusively is central to my work and reflects my commitment to fairness, usability, and empowerment.</p>

                <p>Throughout my career, I have prioritized continuous learning, staying current with evolving tools, standards, and best practices in the industry. Designing and building impactful websites is more than a profession for me—it is a creative pursuit driven by purpose and problem-solving.</p>

                <p>Outside of technology, I enjoy paddleboarding, playing racquet sports, reading mystery novels, and spending time with my tuxedo cats, Bonnie and Clyde.</p>
                 
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
