
import './skills.css'







function Skills() {
    return (
      <>
      <div className='skillscontainer' >
      
        <div className='skcontainer'>



          <div className='portcontainer'>
        
        <div className='fullbgright'>
          <div>
              <h2 className='maintitle' id='portfolio'>Technical Skills</h2>
              <div className='portcontent'>
                <div className='skillslist'>
              <h3 style={{borderBottom: 'solid'}}>Cybersecurity skills</h3>
              <ul><li>Security Frameworks, Incident Response & Risk Management, Cloud Security Controls, PKI, Threat and Vulnerability Management, Networking</li></ul>
                
                <ul><li>Penetration Testing:
                <ul><li>Wireshark, Burp Suite, Metasploit, Kali Linux, Reverse Engineering</li></ul>
                </li>
                </ul>
                <ul><li>Defence & Security
                <ul><li>Splunk Enterprise, Nessus, Pfsense, Snort (IPS), Secure Firewall Configuration</li></ul>
                </li></ul>
               
                
              
              <div>
              <a className='thmbadge' href='https://tryhackme.com/p/MercenaryHarpy6'>
                    <img className='thmimg' src={require('./THMprofile.png')} alt="TryHackMe"/>
              </a>
              </div>
              
              </div>




                <div className='Virtualizationcontainer'>
                <h3 style={{borderBottom: 'solid'}}>Virtualization Skills</h3>
              <ul><li>Rancher Kubernetes Management, Portainer, Docker, Windows Server & Active Directories</li></ul>
              <ul><li>Proxmox, VMwareESXi, Remote Server Management (iDrac), Linux (Debian & Arch)</li></ul>
              <ul><li>PKI and reverse proxies, secure network configuration & secure remote access with VPNs</li></ul>  
              
                </div>




                <div className='languageslist'>
              <h3 style={{borderBottom: 'solid'}} >Programming Skills</h3>

              
              <ul><li>DevSecOps & Agile Development oriented, Front-end developer</li></ul>
              <ul><li>Programming Languages:
                <ul><li>Python, bash, PowerShell, C/C++, MySQL, React JS., HTML & CSS</li>
                </ul></li>
                
                
                <h3 className='githubtitle'>My github</h3>
                <a className='githublink' href='https://github.com/EduardoCorazon'>
                <img className='gitbox' src="http://ghchart.rshah.org/EduardoCorazon" alt="Eduardo Corazon's Github chart" />
                </a>
              </ul>
              </div>



                <div className='hardwarecontainer'>
                <h3 style={{borderBottom: 'solid'}}>Hardware & OT Skills</h3>
              <ul><li>Microprocessors & Digital Design, Electrical Engineering Circuits, Systems Programming</li></ul>
              <ul><li>Tools:
              <ul><li>Autodesk Fusion360 (For 3D printing)</li></ul>
              <ul><li>LTspice & PSpice (For circuit Analysis)</li></ul>
              <ul><li>Octave </li></ul>
              </li></ul>
                </div>
                



              </div>
          </div>
          </div>

          <div className='floorbgright'/>
      </div>




        </div>
      </div>
      </>
    );
  }
  
  export default Skills;