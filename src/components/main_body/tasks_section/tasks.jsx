import React from "react";

import "./tasks.css";

import IndividualCards from "./individual_cards/individual_cards";

export default function Tasks() {
    return (<section className="tasks_container">
        <IndividualCards></IndividualCards>
        <IndividualCards></IndividualCards>
      
  </section>)
}
