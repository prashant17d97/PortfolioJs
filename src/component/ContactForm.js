import '../App.css';

function ContactForm() {
    return (
      <div className="getInTouch">
        <h2>Get in touch</h2>
        <form className="form" method="POST" name="contact" action="/success" data-netlify="true">
          <div>
            <input type="text" placeholder="First Name" id="firstName" name="firstName" required />
            
            <input type="text" placeholder="Last Name" id="lastName" name="lastName" required />
          </div>
          <div>
            <input type="email" placeholder="Email" id="email" name="email" required />
            <input type="tel" placeholder="Phone" id="phone" name="phone" required />
          </div>
          <div>
            <textarea id="message" name="message" placeholder="Message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  export default ContactForm;