import React, { Component } from "react";
import { MDBRadio, MDBBtnGroup } from "mdb-react-ui-kit";

class GroupStage extends Component {
  state = {
    teams: this.props.teams,
    matchups: [],
  };

  matchPicks = [{ matchCode: "", pick: "" }];

  generateMatchups = (teams) => {
    let teamsDup = [...teams];
    let matchups = [];
    for (let team of teams) {
      for (let opponent of teamsDup) {
        if (team !== opponent) {
          matchups.push([team, opponent]);
          this.matchPicks.push({ matchCode: team + "v" + opponent, pick: "" });
          console.log("i");
        }
      }
      teamsDup.splice(0, 1);
    }
    return matchups;
  };

  handleGroupMatchOnClick = (pick) => {};

  render() {
    const { teams } = this.state;
    let matchups = this.generateMatchups(teams);
    console.log(this.matchPicks);

    let matchList = matchups.map((match) => (
      <MDBBtnGroup className="btn-group">
        <MDBRadio
          className="btn"
          btn
          btnColor="primary"
          id={match[0] + match[1]}
          name={match[0] + "v" + match[1]}
          wrapperTag="span"
          label={match[0]}
        />
        <MDBRadio
          className="btn"
          btn
          btnColor="primary"
          id={"Draw" + match[0] + match[1]}
          name={match[0] + "v" + match[1]}
          wrapperClass="mx-2"
          wrapperTag="span"
          label={"Draw"}
          defaultChecked
        />
        <MDBRadio
          className="btn"
          btn
          btnColor="primary"
          id={match[1] + match[0]}
          name={match[0] + "v" + match[1]}
          wrapperTag="span"
          label={match[1]}
        />
      </MDBBtnGroup>
    ));
    return <div className="groupBox m-2">{matchList}</div>;
  }
}

export default GroupStage;
