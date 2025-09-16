import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const [show, setShow] = useState(false);

  const colors = [
    { name: "Red", code: "#EF4444" },
    { name: "Orange", code: "#F97316" },
    { name: "Amber", code: "#F59E0B" },
    { name: "Yellow", code: "#EAB308" },
    { name: "Lime", code: "#84CC16" },
    { name: "Green", code: "#22C55E" },
    { name: "Emerald", code: "#10B981" },
    { name: "Teal", code: "#14B8A6" },
    { name: "Cyan", code: "#06B6D4" },
    { name: "Sky", code: "#0EA5E9" },
    { name: "Blue", code: "#3B82F6" },
    { name: "Indigo", code: "#6366F1" },
    { name: "Violet", code: "#8B5CF6" },
    { name: "Purple", code: "#A855F7" },
    { name: "Fuchsia", code: "#D946EF" },
    { name: "Pink", code: "#EC4899" },
    { name: "Rose", code: "#F43F5E" },
    { name: "Gray", code: "#6B7280" },
    { name: "Slate", code: "#64748B" },
    { name: "Zinc", code: "#71717A" },
    { name: "Mint Green", code: "#98FF98" },
    { name: "Coral", code: "#FF7F50" },
    { name: "Turquoise", code: "#40E0D0" },
    { name: "Lavender", code: "#E6E6FA" },
    { name: "Peach", code: "#FFDAB9" },
  ];

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex top-12 right-12">
          <button
            onClick={() => setShow(!show)}
            className=" flex rounded-full bg-white text-xl font-semibold text-black px-4 py-1 "
          >
            Change Background Color
          </button>
        </div>
        {show && (
          <div className="  flex items-center justify-center  text-black">
            <div className="relative w-60  bg-white rounded-lg p-4 flex flex-col items-center">
              <p>
                Choose your color:{" "}
                <span className="absolute cursor-pointer right-0 top-0 " onClick={() => setShow(false)}>
                  ❌
                </span>
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {colors.map((clr, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setColor(clr.code);
                    }}
                    className={`w-8 h-8 rounded-full ${
                      clr.code === color ? "border-2 border-black" : "border-0"
                    }`}
                    style={{ backgroundColor: clr.code }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
