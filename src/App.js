import React from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends React.Component {
  state = {
    persons: [
      { name: "Max", age: 69 },
      { name: "Bo", age: 65 },
      { name: "Ma", age: 62 }
    ],
    showPersons: false
  };
  // switchNameHandler = newName => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 59 },
  //       { name: "Bob", age: 49 },
  //       { name: "Maple", age: 62 }
  //     ]
  //   });
  // };
  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "bigboi", age: 69 },
        { name: "smalboi", age: 65 },
        { name: event.target.value, age: 62 }
      ]
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHandler = personIndex => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>This is my first React Project...</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          show names
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
