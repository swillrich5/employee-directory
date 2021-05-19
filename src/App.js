import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from './components/Title/title.js';
import SearchForm from "./components/SearchForm";
import './App.css';

// const formatDate = dob => {
//   return dob.toLocaleDateString();
// }

class App extends Component {

  state = {
    employees: [],
    searchField: ""
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

  filterBySearch = event => {
    const { name, value } = event.target;
    console.log("name = " + name);
    console.log("value = " + value);
    console.log(this.state.employees);
    // const employees = this.state.employees.filter(employee => employee.name.last.toLowerCase().includes(value.toLowerCase()));
    const employees = this.state.employees.map(employee => {
      if (!employee.name.last.toLowerCase().includes(value.toLowerCase)) {
        document.querySelector("#employee-card").visibility = "hidden";
      }
      else {
        document.querySelector("#employee-card").visibility = "visible";
      }
      return(employee);
    });

    this.setState({employees, [name]: value});
    // this.setState({[name]: value});
  }
    
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
      searchField: ""
    });
  };


  render() {
    return(
      <Wrapper>
        <Title>Employee Directory</Title>
        {/* <SearchForm 
          employees={this.state.employees}
          handleInputChange={this.handleInputChange}
        /> */}
        <div className="col-8 align-items-center mx-auto">
          <input 
            value={this.state.searchField}
            id="search-field"
            name="searchField"
            onChange={this.filterBySearch}
            type="text"
            placeholder="Search"
          />
        </div>
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
                  dob={new Date(employee.dob.date.substring(0, 9)).toLocaleDateString('en-US')}                  
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
