import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainNavbar from "../components/MainNavbar/MainNavbar";
import Results from "../components/Results/Results";
import SideBar from "../components/SideBar/SideBar";
import {axiosInstance} from "../config/axios";

const GifsPage = () => {
   
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([])

  const doSearch = async()=>{
    try {
      const {data} = await axiosInstance.get(`/gifs/search?api_key=${import.meta.env.VITE_APP_GIPHY_API_KEY}&q=${search}`);
      setResults(data.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  
  useEffect(()=>{
    if(isSearching){
        doSearch()
    }
   
  },[search])

  console.log(results)

  const handleChange = (e) => {
    setSearch(e.target.value)
    setIsSearching(true);
  }

  return (
    <>
    <Container fluid>
      <Row>
        <Col xs={12} sm={4} className="layout bg-success">
          <SideBar busqueda={search} cambiarBusqueda = {handleChange} />
        </Col>
        <Col xs={12} sm={8} className="layout bg-warning">
          <Results resultadosBusqueda = {results}/>
        </Col>
      </Row>
    </Container>
    </>
  )
}
 
export default GifsPage;