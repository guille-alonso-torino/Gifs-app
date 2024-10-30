import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

const SideBarContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`


const SideBar = (props) => {

  return (
    <SideBarContainer>
      <SearchBar busqueda={props.busqueda} cambiarBusqueda={props.cambiarBusqueda}/>
    </SideBarContainer> 
  );
}
 
export default SideBar;