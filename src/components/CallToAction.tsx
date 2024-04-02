import { Link } from 'react-router-dom';
import ctn from '../assets/ctn.png'
import "../styles/sections/CallToAction.css"

export const CallToAction = () => {
  return (
    <div className="ctn">
      <img src={ctn} />
      <div className="ctn-content">
        <h2>are you ready?</h2>
        <h3>be a part of the next big thing</h3>
        <Link to="./UI/pages/Contact.html">Schedule a call</Link>
      </div>
    </div>
  );
}
