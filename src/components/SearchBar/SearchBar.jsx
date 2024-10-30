// import { useEffect } from "react";
// import { useState } from "react";
// import axiosInstance from "../../config/axios";

const SearchBar = (props) => {
  // const [search, setSearch] = useState('');
  // const [results, setResults] = useState([])
  // const doSearch = async()=>{
  //   try {
  //     const {data} = await axiosInstance.get(`/search?api_key=${import.meta.env.VITE_APP_GIPHY_API_KEY}&q=${search}`);
  //     setResults(data.data)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
  // useEffect(()=>{
  //   doSearch()
  // },[search])
  // console.log(results)
  return ( 
    <form>
      <input type="text" value={props.busqueda} className='form-control' onChange={props.cambiarBusqueda}/>
    </form>
  );
}
 
export default SearchBar;