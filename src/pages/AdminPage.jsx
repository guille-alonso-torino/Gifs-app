import { Col, Container, Row, Spinner } from "react-bootstrap";
import { axiosBack } from "../config/axios";
import useGet from "../hooks/useGet";
import GeneralTable from "../components/common/GeneralTable/GeneralTable";

const AdminPage = () => {

const [users, loading] = useGet('/users',axiosBack)
  return ( 
    <Container>
   <h1>admin page</h1>
   <Row>
    <Col>
    {
      loading?
      <Spinner></Spinner>
      :
      <GeneralTable headings={['id','Nombre','Rol']} items={users} ></GeneralTable>
    }
    </Col>
   </Row>
    </Container>
   );
}
 
export default AdminPage;