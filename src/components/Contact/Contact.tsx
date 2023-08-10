import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.png";
import phoneIcon from "../../assets/phone-icon.png"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>What's the scoop on my incredible projects? I'm itching to know! And hey, the idea of us working together is like peanut butter and jelly – a perfect match! </p>
        <p>Shoot me a message or drop a line. Let's team up and create some tech magic!</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:wisdomtrustgod@gmail.com">wisdomtrustgod@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+2348122390396">(+234) 812-2390-396</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
