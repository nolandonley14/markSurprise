import "./styles.css";

export default function Card(props) {
  return (
    <div>
      <img className="pics" src={props.img} alt=""></img>
      <h3>{props.name}</h3>
      <h4>{props.desc}</h4>
    </div>
  );
}
