import { nanoid } from "nanoid";
import { Spinner} from "react-bootstrap";
import { Link } from "react-router-dom";
import GifCard from "../components/GifCard/GifCard";
import {axiosInstance} from "../config/axios";
import useGet from "../hooks/useGet";

const StickersPage = () => {
    const [stickers, loading, ToastContainer] = useGet('/stickers/trending?api_key='+ import.meta.env.VITE_APP_GIPHY_API_KEY,axiosInstance);
    return ( 
        <>
        <h1><Link to="/gifs">volver</Link></h1>
        {
          loading?
          <Spinner/>
          :
          stickers.map((sticker) => <GifCard key={nanoid()} image={sticker.images.original.url} title={sticker.title}/>)
        }
         <ToastContainer></ToastContainer>
        </>
     );
}
 
export default StickersPage;