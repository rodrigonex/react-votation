import React from "react";
import FlipMove from "react-flip-move";

import Candidate from "./Candidate";
import Card from "./Card";

export default function Candidates({ candidates, previousVotes, previousPorcentage }) {
  return (
    <div>
      <FlipMove>
        {candidates.map((candidate, index) => {
          const { id } = candidate;
          const previousVoteObject = previousVotes.find((item) => item.id === id);

          const previousVote = !!previousVoteObject ? previousVoteObject.votes : 0;

          const previousPorcentageObject = previousPorcentage.find((item) => item.id === id);

          const previousPorcentag = !!previousPorcentageObject ? previousPorcentageObject.percentage : 0;


          return (
            <div key={id}>
              <Card>
                <Candidate previousPorcentag={previousPorcentag} previousVote={previousVote} candidate={candidate} position={index + 1} />
              </Card>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}
