import React, { Component } from "react";
import Group from "./group";

class GroupStage extends Component {
  state = {
    teams: this.props.teams,
    matchups: [],
  };

  matchPicks = new Map(); // matchCode: "", pick: ""

  handleGroupMatchOnClick = (id, label) => {
    this.matchPicks.set(id, label);
    console.log("Hey!");
    console.log(this.matchPicks);
  };

  render() {
    const { teams } = this.state;

    let groups = teams.map((group) => (
      <Group
        teams={group}
        groupMatchOnClick={this.handleGroupMatchOnClick}
      ></Group>
    ));

    return groups;
  }
}

export default GroupStage;
