"use client"

import { useState } from "react";
let random = Math.floor(Math.random() * 100)

export default function Home() {
  const [number, setNumber] = useState(0)
  const [msg, setMsg] = useState("Börja gissa för att se svaret: ")

  function handlelogic() {
    if (number > random) {
      setMsg("Talet för högt")
    } else if (number < random) {
      setMsg("Talet för lågt")
    } else {
      setMsg("Rätt!")
    }
  }

  return (
    <div className="w-full h-screen bg-slate-300 flex justify-center text-center">
      <div className="flex flex-col max-w-80 justify-center align-middle m-auto">
        <h1 className="text-slate-900">Gissa talet</h1>
        {msg}
        <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))} />
        <button onClick={handlelogic}>Gissa</button>
      </div>
    </div>
  );
}
