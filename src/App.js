import "./styles.css";
import Card from "./Card.js";

export default function App() {
  return (
    <div className="App">
      <h1>MERC GANG</h1>
      <div className="cardContainer">
        <Card name="Nolan Donley" img="/images/nolan.png" desc="Superior" />
        <Card name="Mark Shepherd" img="/images/mark.png" desc="Inferior" />
      </div>
    </div>
  );
}
