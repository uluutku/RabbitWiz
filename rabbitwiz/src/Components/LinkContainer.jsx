import React from "react";
import "./LinkContainer.css";
import LinkContainerCard from "./LinkContainerCard";

function LinkContainer() {
  return (
    <div className="link-container-main">
      <div className="box-cards-container">
        <LinkContainerCard cardTitle={"🐰 RABBITFLIX"} active={true} />
        <LinkContainerCard
          cardTitle={"Coming Soon"}
          active={false}
          font={"Rowdies"}
          grayedOut={true}
        />
        <LinkContainerCard
          cardTitle={"Coming Soon"}
          active={false}
          font={"Rowdies"}
          grayedOut={true}
        />
        <LinkContainerCard
          cardTitle={"Coming Soon"}
          active={false}
          font={"Rowdies"}
          grayedOut={true}
        />
      </div>
    </div>
  );
}

export default LinkContainer;
