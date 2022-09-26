import Footer from "../components/Footer";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Contact = () => {
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (data) => {
    fetch("/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...data }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));

    setSubmitted(true);
    console.log(data);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow flex-col space-y-4 px-4">
        <h1 className="text-5xl font-bold text-green-500">Contact</h1>
        {!submitted && (
          <form
            name="contact-form"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-screen max-w-md flex-col space-y-4"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <p className="hidden">
              <label>
                Do not fill this out if you are human:{" "}
                <input name="bot-field" />
              </label>
            </p>
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Name</label>
              <input
                className="border-green-300 focus:border-green-500 focus:outline-none focus:ring-green-500"
                type="text"
                id="name"
                {...register("name", { required: true, maxLength: 80 })}
              />
              <span className="text-red-500">
                {errors.name?.type === "required" && "Name is required"}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                className="border-green-300 focus:border-green-500  focus:ring-green-500"
                type="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: emailRegex,
                })}
              />
              <span className="text-red-500">
                {errors.email?.type === "required" && "email is required"}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="select">Topic</label>
              <select
                {...register("topic", { required: true })}
                className="border-green-300 focus:border-green-500  focus:ring-green-500"
                id="select"
              >
                <option value="1">Topic 1</option>
                <option value="2">Topic 2</option>
                <option value="3">Topic 3</option>
              </select>
              <span className="text-red-500">
                {errors.topic?.type === "required" && "Topic is required"}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="border-green-300 focus:border-green-500  focus:ring-green-500"
                id="message"
                rows="5"
              ></textarea>

              <span className="text-red-500">
                {errors.message?.type === "required" && "Message is required"}
              </span>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <input
                {...register("terms", { required: true })}
                className="border-green-300 text-green-500  focus:border-green-500 focus:ring-green-500"
                type="checkbox"
                id="terms"
              />
              <label htmlFor="terms">I agree to the terms and conditions</label>

              <span className="text-red-500">
                {errors.terms?.type === "required" && "Terms is required"}
              </span>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center bg-green-500 px-3 py-2 text-white  focus:border-green-500 focus:outline-none focus:ring-green-500 active:bg-green-600"
            >
              Submit
            </button>
          </form>
        )}
        {submitted && (
          <h5>Thanks for submitting! We&apos;ll reach out ASAP!</h5>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
