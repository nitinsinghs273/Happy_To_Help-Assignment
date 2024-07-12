import React from "react";
import BasketballPlayerCard from "./components/BasketballPlayerCard";

function App() {
  const player = {
    name: "LeBron James",
    image: "LeBronJames.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5,
    },
    about:
      "LeBron James is an American professional basketball player who plays for the Los Angeles Lakers of the National Basketball Association (NBA). He is considered one of the greatest basketball players in history.",
  };

  return (
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
        about={player.about}
      />
    </div>
  );
}

export default App;
