import { nanoid } from "nanoid";
import { Spinner } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import {axiosInstance} from "../../config/axios";
import useGet from "../../hooks/useGet";
import GifCard from "../GifCard/GifCard";

const Results = (props) => {
  const [trending, loading, ToastContainer] = useGet('/gifs/trending?api_key='+import.meta.env.VITE_APP_GIPHY_API_KEY,axiosInstance);
  return (
    <>
    {loading? 
    <div className="centered-object">
      <Spinner animation="border"/>
    </div>
    :
    props.resultadosBusqueda.length !==0?
    <div className="d-flex flex-wrap">
      {
        props.resultadosBusqueda.map((result)=> <GifCard key={nanoid()} image={result.images.original.url} title={result.title}/>)
      }
    </div> 
    :
    <div className="d-flex flex-wrap">
      {
        trending.map((result)=> <GifCard key={nanoid()} image={result.images.original.url} title={result.title}/>)
      }
    </div> 
    }
    <ToastContainer/>
    </> 
  );
}
 
export default Results;