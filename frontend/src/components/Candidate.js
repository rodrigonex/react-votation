import React from "react";
import Info from "./Info";
import Name from "./Name";
import Picture from "./Picture";
import Porcentage from "./Porcentage";
import Position from "./Position";
import Votes from "./Votes";

import css from "./candidate.module.css"
import Popularity from "./Popularity";

export default function Candidate({ candidate, position, previousVote, previousPorcentag }) {
  const { name, votes, id, percentage, popularity } = candidate;
  const imageSource = `${id}.jpg`;
  return (
    <div className={css.containerFlex}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} previous={previousVote} />
        <Porcentage previous={previousPorcentag} percentage={percentage} />
        <Popularity value={popularity} />
      </Info>
      
    </div>
  );
}
