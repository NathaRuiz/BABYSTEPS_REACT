import "./App.css";
import Card from "./components/Card";
import ShowHide from "./components/ShowHide";
import vehicles from "./data/vehicles";

function App() {
  const vehiclesList = vehicles.map(vehicle => {
    return <Card title={vehicle.name} description={vehicle.description}/>
  })
  return (
    <div className="App">
      <h1>Hola React</h1>
      <div className="container">
        {vehiclesList}
      </div>
      <ShowHide></ShowHide>
    </div>
  );
}

export default App;
