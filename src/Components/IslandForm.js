import { useState } from "react";

export default function IslandForm({ island }) {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");

  function handleName(event) {
    setname(event.target.value);
  }
  function handleNumber(event) {
    setnumber(event.target.value);
  }
  function submited() {
    window.confirm(
      `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${number}`
    );
  }
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" onChange={handleName} />
      <input
        placeholder="Type Phone Number"
        type="tel"
        onChange={handleNumber}
      />
      <button className="book" onClick={submited}>
        Book for today!
      </button>
    </div>
  );
}
