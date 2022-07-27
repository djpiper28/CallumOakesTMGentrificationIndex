import { useState } from 'react'
import GentrificationIndex from "./GentrificationIndex"

function App() {
  return (
    <div className="flex flex-col flex-stretch justify-between space-y-4 p-10 items-center w-full min-h-screen bg-slate-200">
      <h1 className="self-start text-3xl self-center">Callum Oakes' (tm) Gentrification Index</h1>
      <div className="w-full bg-white rounded-3xl p-10">
        <GentrificationIndex/>
      </div>
      <p className="self-center">Copyright 2022 APGL 3.0 (Fuck off google)</p>
    </div>
  )
};

export default App;
