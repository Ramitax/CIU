import Header from "./components/Header";
import Footer from "./components/Footer";
import Service from "./components/Service";
import { useState } from "react";

function App () {
  const year = new Date().getFullYear();

  // Creamos un state
  const [services, agregarServicios] = useState([
    {
      id: 1, 
      servicio: "Pagina", 
      valor:  50000
    },
    {
      id: 2, 
      servicio: "App", 
      valor:  100000
    },
    {
      id: 3, 
      servicio: "Bot", 
      valor:  10000
    },
  ]);
  return (
    <div>
      <Header/>
      <h1>Ramiro Ambrosetti</h1>
      {
        services.map( (service) => <Service data = {service}/> )
      }
      <Footer
        year = { year }
      />
      
    </div>
  );
}

export default App;
