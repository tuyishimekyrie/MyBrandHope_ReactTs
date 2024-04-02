import MyImage from '../assets/A-removebg-preview.png'
import '../styles/sections/AboutMe.css'
const AboutMe = () => {
  return (
    <div className="about">
      <img src={MyImage} alt="" />
      <div className="about-content">
        <h2>About</h2>
        <p>
          Hey👋, my name is Tuyishime Hope Wilberforce! I'm a self-taught
          developer & designer from Kigali, Rwanda, who is really into unique
          designs, user experience and writing clean code. Speaking of myself
          while studying B.com(Hons) in Software engineering at Adventist
          university of central africa (Surprise!), web development crossed my
          way and since then my journey as a developer begun. Currently I'm
          working as a freelance developer, I've always taken deep interest in
          designing and developing beautiful websites for my clients which focus
          on providing the best experience for everyone using them. I am here to
          give in all of it and make sure that my work becomes my identity.
          Being a minimalist, my belief is to make things simple and very
          specific. I'm open to learning and working my level best to make the
          results near to perfect.
        </p>
      </div>
    </div>
  );
}

export default AboutMe