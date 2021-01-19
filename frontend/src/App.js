import React, { useState, useEffect } from "react";

import Candidates from "./components/Candidates";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

export default function App() {
  const [candidates, SetCandidates] = useState([]);
  const [previousVotes, SetPreviousVotes] = useState([]);
  const [previousPorcentage, SetPreviousPorcentage] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8080/votes")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const LocalPreviousVotes = candidates.map(({ id, votes }) => {
            return { id, votes };
          });

          const LocalPreviousPorcentage = candidates.map(
            ({ id, percentage }) => {
              return { id, percentage };
            }
          );

          SetCandidates(json.candidates);
          SetPreviousVotes(LocalPreviousVotes);
          SetPreviousPorcentage(LocalPreviousPorcentage);
        });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [candidates]);

  if (candidates.length === 0) {
    return <Spinner description="Carregando.." />;
  }

  return (
    <div>
      <Header title="Votação" />
      <Candidates
        previousPorcentage={previousPorcentage}
        previousVotes={previousVotes}
        candidates={candidates}
      />
    </div>
  );
}
