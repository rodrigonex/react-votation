import React, { Component } from "react";
import Candidates from "./components/Candidates";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
      previousVotes: [],
      previousPorcentage: [],
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch("http://localhost:8080/votes")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const previousVotes = this.state.candidates.map(({ id, votes }) => {
            return { id, votes };
          });

          const previousPorcentage = this.state.candidates.map(({ id, percentage }) => {
            return { id, percentage };
          });

          this.setState({
            candidates: json.candidates,
            previousVotes,
            previousPorcentage,
          });
        });
    }, 1000);
  }

  render() {
            
            const { candidates, previousVotes, previousPorcentage } = this.state;

    if (candidates.length === 0) {
      return <Spinner description="Carregando.." />;
    }

    return (
      <div>
        <Header title="Votação" />
        <Candidates previousPorcentage={previousPorcentage}  previousVotes={previousVotes} candidates={candidates} />
      </div>
    );
  }
}
