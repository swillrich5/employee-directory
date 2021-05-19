import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from './components/Title/title.js';
import './App.css';

class App extends Component {

  state = {
    employees: []
  }

      // When this component mounts, search the Giphy API for pictures of kittens
      componentDidMount() {
        console.log("I'm in componentDidMount()");
        this.getEmployees();
      }

      getEmployees = () => {
        console.log("I'm in getEmployees()");
        const URL = "https://randomuser.me/api/?inc=id,picture,name,email,dob,phone&nat=us&results=20";
        axios.get(URL)
        .then( res => {
          const employees = res.data.results;
          console.log(employees);
          this.setState({employees});
        })
        .catch(err => console.log(err));
      }


    


  render() {
    return(
      <Wrapper>
        <Title>Employee Directory</Title>
        <table className="table table-striped">
        <thead className="text-center">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(employee => 
                <EmployeeCard
                  // searchEmployees={this.searchEmployees}
                  id={employee.id.value}
                  key={employee.id.value}
                  image={employee.picture.medium}
                  name={employee.name.last + ', ' + employee.name.first}
                  email={employee.email}
                  dob={employee.dob}
                  phone={employee.phone}
                />
          )}
        </tbody>

        </table>

      </Wrapper>
    )
  }
}

// function App() {
//   return (
//     <div className="container-fluid">
//         <Title />
//     </div>

//   );
// }

export default App;
