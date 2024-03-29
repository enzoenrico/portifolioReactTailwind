import Title from "./Title";
function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/8dab5dcc-2d42-481e-9528-66cdf9c8238b"
          method="POST"
          className="flex flex-col w-full md:w-7/12 sm:w-7/12"
        >
          <Title>Got an idea for a project? Shoot me a message!</Title>
          <input
            type="text"
            name="name"
            placeholder="Your name goes here"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none hover:scale-105 transition duration-300"
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email goes here"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none hover:scale-105 transition duration-300"
          />
          <textarea
            name="message"
            placeholder="Tell me about your idea"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none hover:scale-105 transition duration-300"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:scale-110 transition duration-300" 
          >
            Let's make something amazing!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
