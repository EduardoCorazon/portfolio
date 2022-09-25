import './projects.css'
function Projects() {
    return (
      <div className='projcontainer' id='projects'>
          <div className='fullbgleft'>

          <h2 className='maintitle'>Some of My Projects</h2>
          <div className='projcontent'>

              <div className='homeserver'>
                  <h3>Home Lab Server</h3>
                  <p>Dedicated Dell PowerEdge Server for home lab use, used to increase skillset with a wide variety of tools & concepts</p>
                  <img className='projimg' src={require('./Proxmox.png')} alt="Proxmox"/>
              </div>


              <div className='seedingproj'>
                  <h3>Seeding Project (DevSecOps)</h3>
                  <p>Team effort to create a Full stack web application that centralizes user data to create an effective ranking system to assist Tournament Organizers in seeding tournament brackets</p>
                  <img className='projimg' src={require('./github.png')} alt="Github"/>
              </div>



              <div className='smart'>
                  <h3>Engineering & Cyber Project</h3>
                  <p>Designed and developed an automated water control system that regulates temperature and water level based on sensor or user input. Also developed a lightweight remote security detection system to enhance monitoring and locking functionality in areas with poor light or when other security devices are compromised (such as cameras)</p>
                  <img className='projimg' src={require('./hardware.jpg')} alt="hardware"/>
              </div>



              <div className='workexperience'>
                  <h3>Small Business Network & Sound Engineer</h3>
                  <p>Served as the sound engineer and live video transmission manager for 4+ years & Managed the network infrastructure/configuration. Provided software & security counseling for new applications or hardware implementations</p>
                  <img className='projimg' src={require('./vmix.png')} alt="Vmix"/>
              </div>


              <div className='webdev'>
                  <h3>Assistant Web Developer</h3>
                  <p>Aided in the development of a series of web applications to help the Houston community ranging from the nutritional conditions of Houston residents, providing additional college information, and a web app that encourages and informs young voters about political news to increase voter turnout </p>
                  <img className='projimg' src={require('./React-icon.png')} alt="React"/>
              </div>

              <div className='unilog'>
                  <h3>Automated University Logger & Project Orbiter</h3>
                  <p>Created an automated login process using selenium to protect against shoulder surfing when passwords must be entered manually in a compromised environment (ie face ID will not work because of mask) & Team project that usese google text-to-speech API to develop our own smart assistant </p>
                  <img className='projimg'  src={require('./Python.png')} alt="Python"/>
              </div>






          </div>
          </div>
          <div className='floorbgleft'/>
          


      </div>
    );
  }
  
  export default Projects;