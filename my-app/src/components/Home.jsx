import React from 'react'
import Navbar from './Navbar'
import { useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Table} from 'semantic-ui-react'




      const Home = () =>{
        var [empData, setData] = useState([]);
        useEffect(() => {
          fetchEmployeedata();
        }, []);
        var apLink = "https://jsonplaceholder.typicode.com/users";

          const fetchEmployeedata = () => {
           axios
          .get(apLink)
          .then((response) => {
            setData(response.data);
          })
          .catch();
        };     

        
      
        
              
   
            
              return(
                

              <div>
                    
              <Navbar/>
              

                  <div className="card-body">
                <Table celled className="table" style={{color:"black"}}>
                <Table.Header>
                <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>NAME</Table.HeaderCell>
                <Table.HeaderCell>EMAIL</Table.HeaderCell>
                
                </Table.Row>
                 </Table.Header>
                <Table.Body>
                  {empData.map((item,key) =>{
                    return(
                      <Table.Row>
                        <Table.Cell>{item.id}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.email}</Table.Cell>
                        
           .           </Table.Row>
                    );
                  })}
                </Table.Body>
                </Table>
              </div>
              </div>
      
);


                }

export default Home