import { useState } from "react";
import TierList from "./components/TierList";
import "./App.css";
import OperatorList from "./components/OperatorList";

function App() {
  const arrayTierTest = [
    { id: 1, content: "A" },
    { id: 2, content: "B" },
    { id: 3, content: "C" },
    { id: 4, content: "D" },
  ];

  const TierRows = [
    {
      id: "S",
      contetns: [
        {
          id: "Hoshiguma",
          image:
            "https://gamepress.gg/arknights/sites/arknights/files/game-images/avatars/char_136_hsguma_1.png",
          profession: "Defender",
          archetype: "protector",
        },
        {
          id: "Nightingale",
          image:
            "https://gamepress.gg/arknights/sites/arknights/files/game-images/avatars/char_179_cgbird_1.png",
          profession: "Medic",
          archetype: "AoE",
        },
      ],
    },
    {
      id: "A",
      contetns: [
        {
          id: "Liskarm",
          image:
            "https://gamepress.gg/arknights/sites/arknights/files/game-images/avatars/char_107_liskam_1.png",
          profession: "Defender",
          archetype: "Sentinel",
        },
      ],
    },
    { id: "B", contetns: [] },
    { id: "C", contetns: [] },
  ];

  const [tierListState, setTierListState] = useState(TierRows);

  function removeFromTier(OperatorId) {
    console.log("removing operator ", OperatorId);
    setTierListState((prevData) =>
      prevData.filter((data) => data.id != prevData.id)
    );
  }
  return (
    <>
      <main className="read-the-docs">
        <TierList tierRows={tierListState} removeFromTier={removeFromTier} />
        <OperatorList list={arrayTierTest} />
      </main>
    </>
  );
}

export default App;
