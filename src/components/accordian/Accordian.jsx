import { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSimpleSelect(id) {
    setSelected(id);
    if (selected === id) setSelected(null);
  }

  console.log(selected);

  return (
    <div className="wrapper">
      <button className="btn">Enabled multiselection</button>
      {data && data.length ? (
        data.map((item) => (
          <div
            onClick={() => handleSimpleSelect(item.id)}
            key={item.id}
            className="container"
          >
            <h2 className="title">{item.question}</h2>
            <span className="plus">+</span>
            {selected !== null && selected === item.id && (
              <p className="answer">{item.answer}</p>
            )}
          </div>
        ))
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
}

export default Accordian;
