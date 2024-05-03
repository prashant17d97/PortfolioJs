import '../App.css';
import arrow from '../resources/arrow_up.svg';
import scrollToUp from '../HelperFunction.js';


function ScrollToTop() {
    return (
      <div id="scrollToTop" className="scroll-to-top">
        <a href="#header" onClick={scrollToUp}>
          <img src={arrow} alt="" />
        </a>
      </div>
    );
  }

  export default ScrollToTop;