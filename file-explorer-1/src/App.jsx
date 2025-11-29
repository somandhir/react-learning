import React from "react";
import FileExplorer from "./Components/FileExplorer";
import data from './data.json'

function App() {
  return (
    <div>
      <FileExplorer data={data} />
    </div>
  );
}

export default App;
