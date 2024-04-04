import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/sections/Home.css";
import "../styles/sections/Contact.css";
import Map from "../assets/map.png"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  message: string;
};
export const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,

    reset
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
       const requestBody = JSON.stringify({
         email: data.email,
         message: data.message,
       });
      const response = await fetch(
        "https://mybrandbackend-q8gq.onrender.com/api/messages/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody,
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(watch("email")); // watch input value by passing the name of it
  // const [formData,setFormData] = useState({});
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetch(
  //         "https://mybrandbackend-q8gq.onrender.com/api/blogs"
  //       );
  //       const response = await data.json();
  //       console.log(response);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <div className="Home App">
      <Header />
      <div className="contact">
        <div className="content">
          <h2>
            Let's <span className="connect">Connect</span> and Create
            <span className="together">Together</span>
          </h2>
          <p>
            Reach out and let's start a conversation! Whether you have a project
            in mind, a question to ask, or just want to connect, I'm here. Drop
            a message below, and let's turn your ideas into reality.
          </p>
          <div className="address">
            <p>Email: tuyishimehope01@gmail.com</p>
            <p>Address: kigali, Rwanda</p>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Email</label>
              <input
                type="text"
                id="email"
                placeholder="Type your Email"
                required
                {...register("email")}
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                placeholder="Type your Message"
                id="message"
                required
                {...register("message")}
              ></textarea>

              <span className="error"></span>
            </div>
            <button className="btn-submit">submit</button>
          </form>
        </div>
        <div className="location">
          <img src={Map} alt="" className="imgs" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
