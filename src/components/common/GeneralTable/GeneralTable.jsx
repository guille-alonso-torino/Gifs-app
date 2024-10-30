import { Table } from "react-bootstrap";
import './GeneralTable.css'

const GeneralTable = ({headings, items, setSelected, selected}) => {
  return ( 
    <Table striped bordered hover>
    <thead>
      <tr>
        {headings.map((heading,index)=><th key={index}>{heading}</th>)}        
      </tr>
    </thead>
    <tbody>
      {
        items.length!==0 && items.map((item,index)=>
        <tr key={item.id} onClick={()=>setSelected(item.id)} className={selected===item.id? 'row-selected' : ''}>
          {
          Object.values(item).map((value,index)=>
            <td key={index}>{value}</td>
          )
          }
        </tr>
          )
      }
      
    </tbody>
  </Table>
   );
}
 
export default GeneralTable;

// const test = {
//   a:1,
//   b:2,
//   c:3
// }

// Object.keys(test) ==> ["a","b","c"]
// Object.values(test) ==> [1, 2, 3]