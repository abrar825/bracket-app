import logo from "./logo.svg";
import "./App.css";
import GroupStage from "./components/groupStage";
import Navbar from "./components/navbar";
const groups = [
  { groupName: "Group A", teams: ["QAT", "ECU", "SEN", "NED"] },
  { groupName: "Group B", teams: ["ENG", "IRN", "USA", "WAL"] },
  { groupName: "Group C", teams: ["ARG", "POL", "KSA", "MEX"] },
  { groupName: "Group D", teams: ["AUS", "DEN", "FRA", "TUN"] },
  { groupName: "Group E", teams: ["CRC", "GER", "JAP", "ESP"] },
  { groupName: "Group F", teams: ["BEL", "CAN", "CRO", "MAR"] },
  { groupName: "Group G", teams: ["BRA", "CMR", "SRB", "SUI"] },
  { groupName: "Group H", teams: ["GHA", "POR", "ROK", "URU"] },
];

const theGroups = [
  ["QAT", "ECU", "SEN", "NED"],
  ["ENG", "IRN", "USA", "WAL"],
  ["ARG", "POL", "KSA", "MEX"],
  ["AUS", "DEN", "FRA", "TUN"],
  ["CRC", "GER", "JAP", "ESP"],
  ["BEL", "CAN", "CRO", "MAR"],
  ["BRA", "CMR", "SRB", "SUI"],
  ["GHA", "POR", "ROK", "URU"],
];

function App() {
  console.log(groups);
  return (
    <div className="App">
      <Navbar />
      <form>
        <div class="name form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              placeholder="Enter name"
            />
          </div>
        </div>
      </form>
      <div className="groups">
        <GroupStage teams={theGroups} />
      </div>
    </div>
  );
}

export default App;
