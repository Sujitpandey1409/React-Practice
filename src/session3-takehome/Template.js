import "./team.css";
import teamData from "./data";

export default function Team({ style }) {
  return teamData.map((el) => (
    <div key={el.id} className="team-member" style={el.colors}>
      <img src={el.URL} alt="" />
      <h2>{el.name}</h2>
      <h3>{el.roll}</h3>
      <p>{el.bio}</p>
    </div>
  ));
}
