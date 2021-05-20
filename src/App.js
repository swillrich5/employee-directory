import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from './components/Title/title.js';
import './App.css';

class App extends Component {

  state = {
    employees: [],
    filteredEmployees: [],
    nonFilteredEmployees: [],
    searchField: "",
    currentSort: 'default'
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
      // console.log(employees);
      const nonFilteredEmployees = employees;
      this.setState({employees, nonFilteredEmployees});
     })
    .catch(err => console.log(err));
  }

  filterBySearch = (event) => {
    const { name, value } = event.target;
    // console.log("name = " + name);
    // console.log("value = " + value);

    console.log(this.state.nonFilteredEmployees);
    const employees = this.state.nonFilteredEmployees.filter(employee => employee.name.last.toLowerCase().includes(value.toLowerCase()));

    this.setState({ employees, [name]: value, currentSort: 'default'});
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

  sortFunction = (a, b) => {
    let fa = a.name.last;
    let fb = b.name.last;

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;      
    }

    return 0;
  }

  sortByName = () => {
    // const { currentSort, employees } = this.state;
    console.log(this.state.currentSort);
    console.log(this.state.employees);
    if (this.state.currentSort === 'default') {
      // const employees = this.state.employees.sort(this.state.employees.last);
      const employees = [].concat(this.state.employees)
        .sort((a, b) => a.name.last > b.name.last ? 1 : -1);

      const currentSort = 'ascending';
      this.setState({ currentSort, employees });
    } else if (this.state.currentSort === 'ascending') {
      const employees = this.state.employees.reverse();
      const currentSort = 'descending';
      this.setState({ currentSort, employees });
    } else {
      const employees = this.state.employees.reverse();
      const currentSort = 'ascending';
      this.setState({ currentSort, employees });
    }
  }


  render() {
    return(
      <Wrapper>
        <Title>Employee Directory</Title>
        
        <div className="align-items-center mx-auto">
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
        <thead className="text-center align-center">
          <tr>
            <th scope="col"><button type="button" className="btn bg-transparent" >Image</button></th>
            <th scope="col"><button id="name-sort" type="button" className="btn bg-transparent" onClick={() => this.sortByName()}>Name</button></th>
            <th scope="col"><button type="button" className="btn bg-transparent ">Phone</button></th>
            <th scope="col"><button type="button" className="btn bg-transparent ">Email</button></th>
            <th scope="col"><button type="button" className="btn bg-transparent ">DOB</button></th>

            {/* <th scope="col">Image</th>
            <th id="name-sort" scope="col"><a href="true" onClick={() => this.sortByName()}>Name</a></th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th> */}
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
                dob={new Date(employee.dob.date).toLocaleDateString('en-US')}                  
                phone={employee.phone}
                hidden={false}
              />
          )}
        </tbody>

        </table>

      </Wrapper>
    )
  }
}

export default App;
