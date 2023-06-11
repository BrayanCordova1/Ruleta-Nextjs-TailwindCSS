import React from "react";
import Roulette from "react-custom-roulette";

export default function Ruleta() {
  const data = [
    { option: "Opción 1", style: { backgroundColor: "#FF2E63", textColor: "#FFFFFF" } },
    { option: "Opción 2", style: { backgroundColor: "#00B8A9", textColor: "#FFFFFF" } },
    { option: "Opción 3", style: { backgroundColor: "#FDBB2F", textColor: "#FFFFFF" } },
    { option: "Opción 4", style: { backgroundColor: "#0052D4", textColor: "#FFFFFF" } },
    { option: "Opción 5", style: { backgroundColor: "#7E2553", textColor: "#FFFFFF" } },
    { option: "Opción 6", style: { backgroundColor: "#FF6B35", textColor: "#FFFFFF" } },
  ];

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * data.length);
    const selectedOption = data[randomNumber].option;
    console.log(`Opción seleccionada: ${selectedOption}`);
  };

  return (
    <div>
      <Roulette
        mustStartSpinning={false}
        prizeNumber={2}
        data={data}
        radius={150}
        spinAngleStart={0}
        spinTime={3000}
        onStopSpinning={handleClick}
      />
    </div>
  );
}
