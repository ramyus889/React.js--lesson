import { useState } from "react";

function App() {
  const [open] = useState(false);
  return (
    <div className="flex items-center justify-between border-b-2 border-white px-5 py-3">
      <div className="">Frontend</div>
      <div className="flex items-center gap-5">
        <a href="/App" className={`${open ? "text-red-500" : ""}`}>
          Home
        </a>
        <a href="/About" className={`${open ? "text-red-500" : ""}`}>
          About
        </a>
        <a href="/Backend" className={`${open ? "text-red-500" : ""}`}>
          Backend
        </a>
      </div>
    </div>
  );
}

export default App;
