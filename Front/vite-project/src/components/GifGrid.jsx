import { useEffect,useState } from "react";
import { GifItem } from "./GifItem";

const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TS05xNbZLIYdmO7ug3Bx9dn6xl1x7cHP&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const resp = await fetch(url);
    const {data} = await resp.json()
    const gifs = data.map( (img) => {
        console.log(img);
        return {
            id:img.id,
            title:img.title,
            url:img.images.fixed_width_downsampled.url,
        }
    });

    return gifs;
}

export const GifGrid = ({category}) => {
    console.log(`${category}`);
    const [images,setImages] = useState([]);
    
    const getImages = async() => {
        const res = await getGifs(category);
        setImages(res)
    }
    useEffect( () =>{
        getImages();
    },[]);
    return(
        <>
            <h3>{category}</h3>
            <div>
                {
                    images.map(
                        (image,key) => {
                            return <GifItem key={key} {...image}/>
                        }
                    )
                }
            </div>
        </>
    )
}