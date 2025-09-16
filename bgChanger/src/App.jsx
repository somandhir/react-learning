import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-2xl bg-white px-3 py-1 rounded-2xl">
          <button onClick={()=>setColor("oklch(57.7% 0.245 27.325)")} className="outline-none px-4 bg-red-600 py-1 rounded-full text-white shadow-lg ">
            Red
          </button>
          <button onClick={()=>setColor("oklch(66.6% 0.179 58.318)")} className="outline-none px-4 bg-amber-600 py-1 rounded-full text-white shadow-lg ">
            amber
          </button>
          <button onClick={()=>setColor("oklch(59.6% 0.145 163.225)")} className="outline-none px-4 bg-emerald-600 py-1 rounded-full text-white shadow-lg ">
            emerald
          </button>
          <button onClick={()=>setColor("oklch(54.1% 0.281 293.009)")} className="outline-none px-4 bg-violet-600 py-1 rounded-full text-white shadow-lg ">
            violet
          </button>
          <button onClick={()=>setColor("oklch(44.6% 0.043 257.281)")} className="outline-none px-4 bg-slate-600 py-1 rounded-full text-white shadow-lg ">
            slate
          </button>
          <button onClick={()=>setColor("oklch(60% 0.118 184.704)")} className="outline-none px-4 bg-teal-600 py-1 rounded-full text-white shadow-lg ">
            teal
          </button>
          <button onClick={()=>setColor("oklch(64.8% 0.2 131.684)")} className="outline-none px-4 bg-lime-600 py-1 rounded-full text-white shadow-lg ">
            lime
          </button>
      
        </div>
      </div>
    </div>
  );
}

export default App;
