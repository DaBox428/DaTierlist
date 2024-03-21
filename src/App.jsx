import { useState, createRef, useEffect } from "react";
import TierList from "./components/TierList";
import "./App.css";
import OperatorList from "./components/OperatorList";
import { useScreenshot, createFileName } from "use-react-screenshot";

import axios from "axios";

let TierRows = {
  S: [],
  A: [],
  B: [],
  C: [],
};

const EmptyTierRows = {
  S: [],
  A: [],
  B: [],
  C: [],
};

let didInit = false;

let AllOperatorsList = [
  {
    id: "Executor the Ex Foedere",
    image:
      "https://gamepress.gg/arknights/sites/arknights/files/2023-06/%E5%A4%B4%E5%83%8F_%E5%9C%A3%E7%BA%A6%E9%80%81%E8%91%AC%E4%BA%BA.png",
    profession: "Guard",
    archetype: "Reaper",
  },
  {
    id: "Rathalos S Noir Corne",
    image:
      "https://gamepress.gg/arknights/sites/arknights/files/2023-03/%E5%A4%B4%E5%83%8F_%E7%81%AB%E9%BE%99S%E9%BB%91%E8%A7%92.png",
    profession: "Guard",
    archetype: "Musha",
  },
  {
    id: "Qiubai",
    image:
      "https://gamepress.gg/arknights/sites/arknights/files/2023-02/%E5%A4%B4%E5%83%8F_%E4%BB%87%E7%99%BD.png",
    profession: "Guard",
    archetype: "Ranged",
  },
  /*   {
    id: "Liskarm",
    image:
      "https://gamepress.gg/arknights/sites/arknights/files/game-images/avatars/char_107_liskam_1.png",
    profession: "Defender",
    archetype: "Sentinel",
  },
  {
    id: "Nightingale",
    image:
      "https://gamepress.gg/arknights/sites/arknights/files/game-images/avatars/char_179_cgbird_1.png",
    profession: "Medic",
    archetype: "AoE",
  },
  {
    id: "Hoshiguma",
    image:
      "https://gamepress.gg/arknights/sites/arknights/files/game-images/avatars/char_136_hsguma_1.png",
    profession: "Defender",
    archetype: "protector",
  }, */
];

let TotalOperators = AllOperatorsList.length;

function App() {
  const [tierListState, setTierListState] = useState(TierRows);

  const [allOperatorsListState, setAllOperatorsListState] =
    useState(AllOperatorsList);

  const [showRubbishBin, setShowRubbishBin] = useState(false);

  const [showCameraIcon, setShowCameraIcon] = useState(false);

  function getOperators() {
    axios({
      method: "GET",
      url: "https://datierlist-backend.onrender.com/getOperators",
      mode: "no-cors",

      proxy: {
        host: "localhost",
        port: 27017,
      },
    }).then((response) => {
      AllOperatorsList = response.data;
      setAllOperatorsListState(response.data);

      console.log(AllOperatorsList);
    });
  }

  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      getOperators();
    }
  });

  function removeFromTier(OperatorId, TierId) {
    let OperatorObject = tierListState[TierId].find((x) => x.id === OperatorId);
    setAllOperatorsListState((prevState) => [...prevState, OperatorObject]);
    setTierListState((prevState) => {
      let newArray = prevState[TierId].filter((item) => {
        return item.id !== OperatorId;
      });
      let ArrayToCheckLength = allOperatorsListState;
      let newTier = prevState;
      newTier[TierId] = newArray;

      if (ArrayToCheckLength.length + 1 == TotalOperators) {
        setShowRubbishBin(false);
        setShowCameraIcon(false);
      }

      return { ...newTier };
    });
  }

  function removeFromAllOperatorsList(OperatorId) {
    setAllOperatorsListState((prevState) => {
      let newArray = prevState.filter((item) => {
        return item.id !== OperatorId;
      });

      return [...newArray];
    });
  }

  function SendToTier(OperatorId, TierLetter) {
    let operator = allOperatorsListState.find((x) => x.id === OperatorId);

    setTierListState((prevState) => {
      let newArray = prevState[TierLetter];
      newArray.push(operator);

      let newTier = prevState;
      newTier[TierLetter] = newArray;

      return { ...newTier };
    });
    removeFromAllOperatorsList(OperatorId);
    setShowRubbishBin(true);
    setShowCameraIcon(true);
  }

  function resetTierList() {
    const tempEmpty = EmptyTierRows;
    setTierListState(() => {
      return { ...tempEmpty };
    });
    console.log("inside reset", AllOperatorsList);
    setAllOperatorsListState(AllOperatorsList);

    setShowRubbishBin(false);
    setShowCameraIcon(false);
  }

  return (
    <>
      <div ref={ref}>
        <img
          src="https://pbs.twimg.com/media/EVPZSSzUUAIBswf?format=jpg&name=large"
          className="w-full h-full -z-10 absolute bg-cover bg-center top-0 left-0 blur-sm "
        />
        <div>
          <TierList tierRows={tierListState} removeFromTier={removeFromTier} />
        </div>
      </div>
      <div>
        <OperatorList
          list={allOperatorsListState}
          tierRows={tierListState}
          SendToTier={SendToTier}
          showRubbishBin={showRubbishBin}
          resetTierList={resetTierList}
          showCameraIcon={showCameraIcon}
          takeScreenshot={downloadScreenshot}
        />
      </div>
    </>
  );
}

export default App;
