import React, { useEffect, useState } from "react";
import Title from "./Title";
import ArticleItem from "./ArticleItem";

function Articles() {
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
            <Title>Published Articles</Title>
            <div className="flex flex-col md:flex-row items-center justify-center m-5">
                <div className="flex justify-center items-center">
                    {data.map((item) => (
                        <ArticleItem
                            key={item.id}
                            title={item.title}
                            stack={[...item.tag_list]}
                            imageUrl={item.cover_image}
                            url={item.url}
                        />
                    ))}
                </div>
            </div>
        </>
    )

}

export default Articles;