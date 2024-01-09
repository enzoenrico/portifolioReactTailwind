/* eslint-disable react/jsx-key */
import { React, useState, useEffect } from "react";
import portfolio from "../data/portfolio";
import blogPosts from "../data/blogPosts";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";
import ArticleItem from "./ArticleItem";

import ScrollCarousel from 'scroll-carousel-react'

function Portfolio() {
  const [data, setData] = useState(new Set())
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=enzoenrico').then(response => {
      return response.json()
    }).then(data => {
      setData(data)
      setIsloading(false)
    }
    )
  }, [])

  if (isLoading) {
    return (
      <div> Loading ... </div>
    )
  }
  return (
    <>
      <Title>Projects & Articles</Title>
      <div className="flex flex-col md:flex-row items-center justify-center p-5">
        <div className={`md:flex md:flex-row  md:w-full md:overflow-x-scroll md:gap-4 md:scroll-smooth md:p-3 flex flex-col gap-4 p-2`} >
          {data.map((item) => (
          <ArticleItem
            key={item.id}
            title={item.title}
            stack={[...item.tag_list]}
            imageUrl={item.cover_image}
            url={item.url}
          />
        ))}
        {portfolio.map((project) => (
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}

          />
        ))}

      </div>
    </div >
    </>
  );
}

export default Portfolio;
