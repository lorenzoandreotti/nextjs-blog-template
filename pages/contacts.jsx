import Footer from "../components/Footer";
import Header from "../components/Header";
import { useForm } from "react-hook-form";

let submitting = false;

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //  console.log(data);
    submitting = true;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
    submitting = false;
  };
  //   console.log(errors);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow flex-col space-y-4 px-4">
        <h1 className="text-5xl font-bold text-green-500">Contacts</h1>
        <form
          name="contact"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          className="mx-auto flex w-screen max-w-md flex-col space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Name</label>
            <input
              className="border-green-300 focus:border-green-500 focus:outline-none focus:ring-green-500"
              type="text"
              name="name"
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
              name="email"
              id="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
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
              name="select"
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
              name="message"
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
              name="terms"
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
            disabled={submitting}
          >
            {submitting ? (
              <svg
                aria-hidden="true"
                class="mr-2 h-8 w-8 animate-spin fill-white text-green-700"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
