import "../styles/sections/Testimonial.css"
import MyImage from "../assets/A-removebg-preview.png"

const Testimonial = () => {
  return (
    <div className="testimonials">
      <h3>testimonials</h3>
      <p>Read what others have to say</p>
      <div className="testimonials-content">
        <div className="testimonial">
          <h5>
            Working with Tuyishime Hope Wilberforce has been an absolute
            pleasure. Their expertise in software engineering is evident in
            every project they tackle.
          </h5>
          <p>2024-01-1</p>
          <div className="client">
            <img src={MyImage} alt="" />
            <div>
              <h5>Tuyishime Kyrie</h5>
              <p>Software engineer at andela</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <h5>
            Their attention to detail, problem-solving skills, and commitment to
            delivering high-quality solutions make them an invaluable asset to
            any team.
          </h5>
          <p>2024-03-1</p>
          <div className="client">
            <img src={MyImage} alt="" />
            <div>
              <h5>Tuyishime Hope</h5>
              <p>Software engineer at andela</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <h5>
            I highly recommend Tuyishime Hope Wilberforce for their
            professionalism, dedication, and technical proficiency.
          </h5>
          <p>2024-04-2</p>
          <div className="client">
            <img src={MyImage} alt="" />
            <div>
              <h5>Wilberforce</h5>
              <p>Software engineer at andela</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial