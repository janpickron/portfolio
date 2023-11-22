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
                  I am recognized for my dependability, conscientiousness, and
                  boundless enthusiasm, coupled with an unwavering dedication to
                  hard work. With a wealth of experience spanning over 20 years
                  in the tech community, I am eager to bring a unique
                  perspective to any team.
                </p>
                <p>
                  I am actively seeking opportunities to leverage my skills in
                  collaboration, drawing upon a background that reflects my
                  commitment to web accessibility. My passion lies in ensuring
                  equal access to technology for all individuals, fostering
                  inclusivity and aligning with principles of fairness and
                  empowerment.
                </p>
                <p>
                  In my extensive career, I have consistently demonstrated a
                  commitment to learning and staying abreast of the latest tech
                  tools. Designing and building exceptional websites is not
                  merely a job for me; it is a passion imbued with genuine love.
                </p>
                <p>
                  Beyond the tech realm, I find joy in paddleboarding at the
                  beach, engaging in racquet sports, immersing myself in
                  mysterious books, and enjoying the company of my two black and
                  white cats, Bonnie and Clyde.
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
