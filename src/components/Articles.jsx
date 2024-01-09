import React, { useEffect, useState } from "react";
import Title from "./Title";


function Articles() {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=enzoenrico').then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
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
        <div className="flex justify-center items-center">
            {data.map((item) => (
                <div key={item.id} className="grid w-10 p-2 grid-flow-row grid-rows-1 rounded-2xl border-pink-500 min-w-fit">
                    <a href={item.url}>
                        <div>
                            <img src={item.cover_image} />
                            <p>{item.title}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )

}

export default Articles;