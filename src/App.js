import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      superheroes: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ superheroes: json }));
  }

  render() {
    //Search
    const { superheroes, searchField } = this.state;
    const filteredHeroes = superheroes.filter((hero) =>
      hero.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <h1> Super Heroes</h1>
        <SearchBox placeholder="search here" handleChange = {(e) => this.setState({ searchField: e.target.value })} />
        <CardList superheroes={filteredHeroes}></CardList>
      </div>
    );
  }
}

export default App;
