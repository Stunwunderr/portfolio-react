import { Container } from "./styles";

import cssIcon from "../../assets/css.png";
import htmlIcon from "../../assets/html.png";
import jsIcon from "../../assets/javascript.png";
import nodeIcon from "../../assets/nodejs.png";
import reactIcon from "../../assets/reactjs.png";
import tailwindIcon from "../../assets/tailwind.png";
import bootstrapIcon from "../../assets/bootstrap.png";
import materializeIcon from "../../assets/materialize.png";
import vueIcon from "../../assets/vue.png";
import manImage from "../../assets/codewunder.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function About(){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Who's behind the screen?
            Allow me to introduce myself.
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Hey there, I'm the web wizard who turns caffeine into code and dreams into websites! I have a secret superpower: making browsers do my bidding with a wink </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>When not chasing down pesky bugs, I'm probably having an intense debate with my rubber duck debug partner, all while adding some gaming fun and singing to the mix. Ready to join the HTML-arious adventure? Let's code, play, and conquer the virtual universe together! </p>
         
          </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>In the grand symphony of web development, I command an orchestra of languages that harmonize to create captivating web pages.</p>
        
           </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Check out the cool coding languages I've got under my belt:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="skills">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="skills">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <img src={vueIcon} alt="Vue" />
          </ScrollAnimation>
          </div>

          <div className="skills">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="skills">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </ScrollAnimation>
          </div>

          <div className="skills">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </ScrollAnimation>
          </div>
          <div className="skills">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
          </div>

          <div className="skills">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={tailwindIcon} alt="Tailwind" />
          </ScrollAnimation>
          </div>
          
          <div className="skills">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={bootstrapIcon} alt="Bootstrap" />
          </ScrollAnimation>
          </div>
          
          <div className="skills">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={materializeIcon} alt="Materialize Css" />
          </ScrollAnimation>
          </div>


        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={manImage} alt="Myself" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
