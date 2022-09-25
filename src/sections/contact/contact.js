import './contact.css'
function Contact() {
    return (
      <div className='contactcontainer' id='contact'>
        <div className='socialscontainer'>
          <div>
              <h2 className='contactitle' >Feel Free to Reach out :)</h2>
              <div >
              <ul><la><a className='socials' href='https://www.linkedin.com/in/eduardo-corazon-21b362222/'><img className='socialimg' src={require('./linkedin.png')} alt="Linkedin"/> LinkedIn</a></la></ul>
              <ul><la><a className='socials' href='https://github.com/EduardoCorazon'><img className='socialimg' src={require('./github.png')} alt="github"/> Github</a></la></ul>
              <ul><la><a className='socials' href='https://tryhackme.com/p/MercenaryHarpy6'><img className='socialimg' src={require('./THM.png')} alt="github"/> TryHackMe</a></la></ul>
              </div>
              
              
          </div>
        </div>

      </div>
    );
  }
  
  export default Contact;