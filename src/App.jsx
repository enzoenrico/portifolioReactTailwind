import React from "react";
import Intro from "./components/Intro";
import Portifolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Articles from "./components/Articles";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Console from "./components/Console";
import About from "./components/About";

function App() {
  // Handle Theme Switch
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  const dociconDark = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512 " className="w-6 h-6">
      <path
        d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
        className="w-6 h-6"
      />
    </svg>
  );
  const dociconLight = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"className="w-6 h-6" fill="white">
      <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"className="w-6 h-6"/></svg>
  );

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-10 top-4 bg-pink-500 hover:bg-pink-600 text-lg rounded-md dark:bg-orange-300 dark:hover:bg-orange-400 transition duration-300"
      >
        {theme === "dark" ? sun : moon}
      </button>

      <a href="assets/cv.pdf" target="_blank">
        <button
          type="button"
          className="fixed p-2 z-10 right-10 top-20 bg-pink-500 hover:bg-pink-600 text-lg rounded-md dark:bg-orange-300 dark:hover:bg-orange-400 transition duration-300 "

        >
          {theme === 'dark'? dociconDark : dociconLight}
        </button>
      </a>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-white min-h-screen font-inter transition-colors duration-300">
        <div className="w-11/12 mx-auto h-full ">
          {/* <Intro /> */}
          <Console />
          <Portifolio />
          <Timeline />
          <About />
          <Contact />
          <Footer />

        </div>
      </div>
    </>
  );
}

export default App;
