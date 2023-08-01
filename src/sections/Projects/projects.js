import './projects.css'
function Projects() {
    return (
      <div className='projcontainer' id='projects'>
          <div className='fullbgleft'>

          <h2 className='maintitle'>Some of My Projects</h2>
          <div className='projcontent'>

            <div className='AWSCloudCaptain'>
                  <h3>AWS CSA & Cloud Captain</h3>
                  <p>Worked as a CSA intern in the Networking Domain at AWS. Sponsored by AWS as one of the few Cloud Captains in the U.S region. I organize, lead, and teach students cloud concepts via hands-on applications with a direct focus on AWS Security.</p>
                  <img className='projimg'  src={require('./icons/AWS.jpg')} alt="AWS"/>
              </div>

              <div className='Malware'>
                  <h3>Malware Analyst</h3>
                  <p>Created a C++ RAT for live static & dynamic malware analysis. Gave a Professional presentation explaining the use of assembly, static analysis tools (Ghidra), & dynamic analysis to understand malware. </p>
                  <img className='projimg'  src={require('./icons/Ghidra.png')} alt="Ghidra"/>
              </div>

              <div className='homeserver'>
                  <h3>Home Lab Server</h3>
                  <p>Dedicated Dell PowerEdge Server for home lab use, used to increase skillset with a wide variety of tools & concepts</p>
                  <img className='projimg' src={require('./icons/Proxmox.png')} alt="Proxmox"/>
              </div>


              <div className='seedingproj'>
                  <h3>Security software Engineer</h3>
                  <p>Full stack application development for seeding tournaments organizers. Responsible for implementing DevSecOps & agile software development practices, integration/development, providing team security advising, and application security.</p>
                  <img className='projimg' src={require('./icons/github.png')} alt="Github"/>
              </div>



              <div className='smart'>
                  <h3>Engineering & Cyber Project</h3>
                  <p>Designed and developed an automated water control system that regulates temperature and water level based on sensor or user input. Also developed a lightweight remote security detection system to enhance monitoring and locking functionality in areas with poor light or when other security devices are compromised (such as cameras)</p>
                  <img className='projimg' src={require('./icons/hardware.jpg')} alt="hardware"/>
              </div>



              <div className='workexperience'>
                  <h3>System Administrator for Small Business</h3>
                  <p>Served as the sound engineer and live video transmission manager for 4+ years & Managed the network infrastructure/configuration. Provided software & security counseling for new applications or hardware implementations</p>
                  <img className='projimg' src={require('./icons/vmix.png')} alt="Vmix"/>
              </div>


              <div className='webdev'>
                  <h3>Assistant Web Developer</h3>
                  <p>Aided in the development of a series of web applications to help the Houston community ranging from the nutritional conditions of Houston residents, providing additional college information, and a web app that encourages and informs young voters about political news to increase voter turnout </p>
                  <img className='projimg' src={require('./icons/React-icon.png')} alt="React"/>
              </div>

              <div className='unilog'>
                  <h3>Automated University Logger & Project Orbiter</h3>
                  <p>Created an automated login process using selenium to protect against shoulder surfing when passwords must be entered manually in a compromised environment (ie face ID will not work because of mask) & Team project that usese google text-to-speech API to develop our own smart assistant </p>
                  <img className='projimg'  src={require('./icons/Python.png')} alt="Python"/>
              </div>






          </div>
          </div>
          <div className='floorbgleft'/>
          


      </div>
    );
  }
  
  export default Projects;