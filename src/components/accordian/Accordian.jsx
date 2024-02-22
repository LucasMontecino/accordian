import { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enabledMultiselect, setEnabledMultiselect] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  function handleMultiSelect(id) {
    let copyMulti = [...multiSelected];

    const findIndex = copyMulti.indexOf(id);

    if (findIndex === -1) {
      copyMulti.push(id);
    } else {
      copyMulti.splice(findIndex, 1);
    }
    setMultiSelected(copyMulti);
  }

  function handleSimpleSelect(id) {
    setSelected(id);
    if (selected === id) setSelected(null);
  }

  function handleButton() {
    setEnabledMultiselect(!enabledMultiselect);
    setSelected(null);
    setMultiSelected([]);
  }

  console.log(selected, enabledMultiselect, multiSelected);

  return (
    <div className="wrapper">
      <button
        className={`${enabledMultiselect ? "btn err" : "btn"}`}
        id="my-btn"
        onClick={handleButton}
      >
        {enabledMultiselect
          ? "Disabled multiselection"
          : "Enabled multiselection"}
      </button>
      {data && data.length ? (
        data.map((item) => (
          <div
            onClick={() =>
              enabledMultiselect
                ? handleMultiSelect(item.id)
                : handleSimpleSelect(item.id)
            }
            key={item.id}
            className="container"
          >
            <h2 className="title">{item.question}</h2>
            <span className="plus">+</span>
            {(multiSelected.indexOf(item.id) !== -1 && (
              <p className="answer">{item.answer}</p>
            )) ||
              (selected === item.id && <p className="answer">{item.answer}</p>)}
          </div>
        ))
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
}

export default Accordian;
