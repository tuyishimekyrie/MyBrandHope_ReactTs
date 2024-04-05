import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/sections/Home.css";
import "../styles/sections/Contact.css";
import Map from "../assets/map.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const schema = z.object({
  email: string().min(6, { message: "Email must be in a proper format" }),
  message: string().min(2, { message: "Minimum length are 2" }),
});
type Inputs = z.infer<typeof schema>;
export const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  
  const [controller, setController] = useState<AbortController | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);

    return () => {
      abortController.abort();
    };
  }, []);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const requestBody = JSON.stringify({
        email: data.email,
        message: data.message,
      });
      const response = await apiClient.post(
        "/messages/create",
        requestBody,
        {
          signal : controller?.signal,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };


  console.log(watch("email"));

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
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
              {errors.message && (
                <span className="error">{errors.message.message}</span>
              )}
            </div>
            <button className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
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
