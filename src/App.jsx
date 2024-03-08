import { useState } from "react";
import TierList from "./components/TierList";
import "./App.css";
import OperatorList from "./components/OperatorList";

let TierRows = {
  S: [
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

  A: [
    {
      id: "Liskarm",
      image:
        "https://gamepress.gg/arknights/sites/arknights/files/game-images/avatars/char_107_liskam_1.png",
      profession: "Defender",
      archetype: "Sentinel",
    },
  ],
  B: [],
  C: [],
};

const arrayTierTest = [
  { id: 1, content: "A" },
  { id: 2, content: "B" },
  { id: 3, content: "C" },
  { id: 4, content: "D" },
];

function App() {
  const [tierListState, setTierListState] = useState(TierRows);

  function removeFromTier(OperatorId, TierId) {
    setTierListState((prevState) => {
      let newArray = prevState[TierId].filter((item) => {
        return item.id !== OperatorId;
      });

      let newTier = prevState;
      newTier[TierId] = newArray;
      console.log(newTier);
      return { ...newTier };
    });
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
