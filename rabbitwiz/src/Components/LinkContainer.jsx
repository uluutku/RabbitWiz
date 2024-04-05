import React from "react";
import "./LinkContainer.css";
import LinkContainerCard from "./LinkContainerCard";
import { Divider } from "@mui/material";

function LinkContainer() {
  return (
    <div className="link-container-main">
      <div className="box-cards-container">
        <LinkContainerCard cardTitle={"🐰 RABBITFLIX"} active={true} />
        <Divider orientation="vertical" flexItem />
        <LinkContainerCard
          cardTitle={"COMING SOON"}
          active={false}
          font={"Rowdies"}
          grayedOut={true}
        />
        <Divider orientation="vertical" flexItem />
        <LinkContainerCard
          cardTitle={"COMING SOON"}
          active={false}
          font={"Rowdies"}
          grayedOut={true}
        />
        <Divider orientation="vertical" flexItem />
        <LinkContainerCard
          cardTitle={"COMING SOON"}
          active={false}
          font={"Rowdies"}
          grayedOut={true}
        />
      </div>
    </div>
  );
}

export default LinkContainer;
