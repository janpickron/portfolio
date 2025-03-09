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
                I am recognized for my dependability, conscientiousness, and boundless enthusiasm, paired with an unwavering dedication to hard work. With over 20 years of experience in the tech industry, I bring a unique perspective and a deep passion for creating meaningful digital experiences.
</p>
<p>
I am actively seeking opportunities where I can leverage my expertise in collaboration and web accessibility, driven by my commitment to ensuring equal access to technology for all. Inclusive is at the heart of my work, aligning with principles of fairness and empowerment.
</p>
<p>
Throughout my career, I have remained committed to continuous learning, staying up to date with the latest industry tools and best practices. For me, designing and building exceptional websites is more than just a profession—it is a passion fueled by creativity and purpose.
</p>
<p>
Outside of tech, I enjoy paddleboarding at the beach, playing racquet sports, diving into mystery books, and spending time with my two black-and-white cats, Bonnie and Clyde.
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
