import React from "react";
import Title from "./Title";
import Hobbies from "./Hobbies";
import about from "../data/about";

function About() {
  return (
    // TODO Arrumar fonrmatação do about, quando grande um do lado do outro, quando pequeno um em cima do outro
    //TODO Adicionar cor e borda aos elementos do hobbie
    <div className=" p-3">
      <Title>About me </Title>
      <div className="flex flex-col lg:flex-row my-5 xl:w-fit justify-evenly items-center">
        <div className="flex flex-col max-w-xl max-h-1/2 lg:w-1/3 sm:w-screen border-2 rounded-md border-pink-500">
          <img src="assets/me.jpg" className="w-full  max-h-96 object-cover rounded-t-md" />

          <div className="flex flex-col items-center justify-center p-1.5 ">
            <div className="text-stone-800 dark:text-white rounded-b-md p-5 h-fit w-full ">
              ~👾 Developer, student and in love with technology.
              Started coding and playing around with Python when I was 13, since then, I've been discovering the limits of my imagination, bringing my ideas to life using code and hardware!
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:w-1/2 ">
          <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-2">
            {about.map((hobbie) => (
              <Hobbies
                imgUrl={hobbie.imgUrl}
                desc={hobbie.desc}
                hobbie={hobbie.hobbie}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
