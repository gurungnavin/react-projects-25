import { useState } from "react";
import data from "./accordian.data.js"
import ToggleButton from "../ToggleButton.jsx";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [isOn, setIsOn] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // console.log(isOn);

  const handleSingleSelection = (getCurrentId) => {
    // Toggles the selection: if the current ID is already selected, it will be deselected (set to null);
    // otherwise, the current ID will be selected.
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    // let spread out the array in varialbe
    let copyMultiple = [...multiple];
    let findIndexOfMultiple = copyMultiple.indexOf(getCurrentId);
    // if findIndexOfMultiple is -1, that means, empty & we have to push().
    //console.log(findIndexOfMultiple);
    if (findIndexOfMultiple === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfMultiple, 1);
    setMultiple(copyMultiple);
  };
  
  //console.log(selected, multiple);

  return (
    <div className="w-full min-h-lvh flex items-center justify-center flex-col bg-blue-100 pt-20 pb-10">
      <div className="mb-4 flex items-center gap-4">
        <p>
          Multi Selection{" "}
          <span className={`${isOn ? "text-red-600" : "text-black"} font-bold`}>
            {`${isOn === false ? "OFF" : "ON"}`}
          </span>
        </p>
        <ToggleButton isOn={isOn} setIsOn={setIsOn} />
      </div>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="bg-green-300 min-h-16 w-[700px] mb-2 rounded-tl-xl rounded-tr-xl"
          >
            <div
              className="cursor-pointer"
              onClick={() =>
                isOn
                  ? handleMultiSelection(item.id)
                  : handleSingleSelection(item.id)
              }
            >
              <div className="flex items-center justify-between w-auto h-11 px-8 py-2 text-xl">
                <h3>{item.question}</h3>
                <span className="font-bold text-xs">
                  {isOn
                    ? multiple.indexOf(item.id) !== -1
                      ? "閉じる"
                      : "開く"
                    : selected === item.id
                    ? "閉じる"
                    : "開く"}
                </span>
              </div>
              {isOn
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="bg-green-100 px-8 py-4 text-xl">
                      {item.answer}
                    </div>
                  )
                : selected === item.id && (
                    <div className="bg-green-100 px-8 py-4 text-xl">
                      {item.answer}
                    </div>
                  )}
            </div>
          </div>
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
};

export default Accordian;
