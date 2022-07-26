import React,{useState} from 'react'
import { useOmcCon34 } from '../../context/omc34/contextOmcCon34';
import Spinner from 'react-bootstrap/esm/Spinner';
import { Table } from 'rsuite';
import Button from 'rsuite/Button';
import "rsuite/dist/rsuite.min.css";
import { ReactDOM } from 'react';
import { AutoComplete, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { SearchBarProps } from 'rsuite/esm/Picker/SearchBar';




function ListaConsulta(props) {
  const fakeTreeData = [
    {
      "id": "1",
      "labelName": "Car",
      "status": "ENABLED",
      "children": [
        {
          "id": "1-1",
          "labelName": "Mercedes Benz",
          "status": "ENABLED",
          "count": 460
        },
        {
          "id": "1-2",
          "labelName": "BMW",
          "status": "ENABLED",
          "children": [
            {
              "id": "1-2-1",
              "labelName": "2 series",
              "status": "ENABLED",
              "count": 103,
              "children": [
                {
                  "id": "1-2-1-1",
                  "labelName": "Sporty hatchback",
                  "status": "DISABLED",
                  "count": 502
                },
                {
                  "id": "1-2-1-2",
                  "labelName": "Coupe",
                  "status": "ENABLED",
                  "count": 502
                },
                {
                  "id": "1-2-1-3",
                  "labelName": "Roadster",
                  "status": "DISABLED"
                },
                {
                  "id": "1-2-1-4",
                  "labelName": "Multi-function wagon",
                  "status": "DISABLED"
                },
                {
                  "id": "1-2-1-5",
                  "labelName": "Station wagon",
                  "status": "DISABLED",
                  "count": 34
                }
              ]
            },
            {
              "id": "1-2-2",
              "labelName": "The intention of customers",
              "status": "ENABLED",
              "count": 364,
              "children": [
                {
                  "id": "1-2-2-1",
                  "labelName": "Financial plan",
                  "status": "DISABLED"
                },
                {
                  "id": "1-2-2-2",
                  "labelName": "Appointment test drive",
                  "status": "ENABLED"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "2",
      "labelName": "Game",
      "status": "ENABLED",
      "count": 834,
      "children": [
        {
          "id": "2-1",
          "labelName": "Online game",
          "status": "DISABLED"
        },
        {
          "id": "2-2",
          "labelName": "Mobile game",
          "status": "ENABLED"
        }
      ]
    },
    {
      "id": "3",
      "labelName": "Digital",
      "status": "ENABLED",
      "count": 534,
      "children": [
        {
          "id": "3-1",
          "labelName": "Mobile phone",
          "status": "ENABLED",
          "children": []
        },
        {
          "id": "3-2",
          "labelName": "Computer",
          "status": "DISABLED"
        },
        {
          "id": "3-3",
          "labelName": "Watch",
          "status": "ENABLED"
        }
      ]
    }
  ]
  
  const prueba ={'childre':[{'name':'juan'},{'name':'rosa'}]} 


  console.log(typeof(prueba))

const [data, setdata] = useState(fakeTreeData);

 const capturar = (e)=>{
  console.log()
  if(e.target.value.length===0){
    setdata(fakeTreeData)
  }else{
    setdata(data.filter((data)=>data.labelName.toUpperCase().includes(e.target.value.toUpperCase())))
  } 
     
 }
 


  return (
    <div>   
       
       <input type='search' placeholder='Buscar' height='50px' width='400px' onChange={(e)=>capturar(e)}  />
       
       <Table
      isTree
      bordered
      cellBordered
      rowKey="id"
      height={600}
      rowHeight={50}
      data={data}
      style={{width:'90%',margin:'auto',marginTop:'40px'}}
      // onRowClick={(data)=>{
      //   console.log(data)
      // }}  
      
      /** shouldUpdateScroll: whether to update the scroll bar after data update **/
      shouldUpdateScroll={true}

           
      onExpandChange={(isOpen, rowData) => {
        console.log(isOpen, rowData);
      }}

      renderTreeToggle={(icon, rowData) => {
        if (rowData.children && rowData.children.length === 0) {
          return (<div style={{width:'10px', height:'10px'}} className="spinner-border" role="status">
        </div>);
        }
        return icon;
      }}
      
    >

      <Table.Column flexGrow={1} labelName='Name' >
        <Table.HeaderCell style={{backgroundColor:'#999', color:'#fff'}}>Label</Table.HeaderCell>
        <Table.Cell dataKey="labelName" />
      </Table.Column>

      <Table.Column width={100}  labelName='Name'>
        <Table.HeaderCell tyle={{backgroundColor:'#999', color:'#fff'}}>Status</Table.HeaderCell>
        <Table.Cell dataKey="status" />
      </Table.Column>

      <Table.Column width={100} labelName='Name'>
        <Table.HeaderCell style={{backgroundColor:'#999', color:'#fff'}}>Count</Table.HeaderCell>
        <Table.Cell dataKey="count" />
      </Table.Column>
      <Table.Column width={100} >
        <Table.HeaderCell>
               EDITAR
        </Table.HeaderCell>
        <Table.Cell style={{}}>
          {(rowData)=>{
            return (
              // <button className='btn btn-dark' onClick={()=>console.log(rowData)}>
              //   Edit
              // </button>
              <Button appearance="primary" color='black' onClick={()=>alert(rowData.labelName)} >Edit</Button>
            )
          }}
        </Table.Cell>
      </Table.Column>
      
    </Table>
     
    </div>
  )
}


export default ListaConsulta

