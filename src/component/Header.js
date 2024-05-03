import '../App.css';
import gmail from '../resources/gmail.svg';
import call from '../resources/call.svg';
import github from '../resources/github.svg';
import linkedin from '../resources/linkedin.svg';

function Header() {
    return (
      <div className="header">
        <nav>
          <ul>
            <li><a href="#header">Home</a></li>
            <li><a href="#about_me">About</a></li>
            <li><a href="#getInTouch">Contact</a></li>
          </ul>
        </nav>
  
        <ul className="nav-icon">
          <li><a href="mailto:prashantsinghsca@gmail.com"><img src={gmail} alt="Gmail logo" /></a></li>
          <li><a href="tel:+917352579915"><img src={call} alt="Call logo" /></a></li>
          <li><a href="https://github.com/prashant17d97"><img src={github} alt="Github logo" /></a></li>
          <li><a href="https://www.linkedin.com/in/prashant-d97/"><img src={linkedin} alt="Linkedin logo" /></a></li>
        </ul>
      </div>
    );
  }

  export default Header;