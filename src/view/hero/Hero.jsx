import './Hero.css';
import myImage from "../../../assets/image/Rohit_Rai_outline.png";

export function Hero(){
    return <div className="hero" id="hero">
      <div className='hero-text'>  
        <h4>Hello</h4>
        <h1>I'm Rohit Rai 😊</h1>
        <h3>Mobile App Developer and Web Developer</h3>
        <h4>From India</h4>
      </div>
        <div className="image">
      
          <img src={myImage} alt="" />
        </div>
    </div>
}