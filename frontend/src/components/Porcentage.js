import React from "react";
import CountUp from "react-countup";

export default function Porcentage({ percentage, previous }) {
  return (
    <div>
      <CountUp
        start={previous || 0}
        end={percentage}
        duration={0.6}
        decimals={2}
        decimal=","
        suffix="%"
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  );
}
