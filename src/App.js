import MenuBar from "./components/MenuBar";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mousePos, setMousePos] = useState({});
  const [filterLetter, setFilterLetter] = useState("A");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-[100vh] w-full">
      <div className="flex h-full">
        {mousePos.x <= 75 ? (
          <div className="flex w-[5%] menu-bar">
            <MenuBar
              filterLetter={filterLetter}
              setFilterLetter={setFilterLetter}
            ></MenuBar>
            <div className="p-8 text-8xl text-[#ffa31a]">{filterLetter}</div>
          </div>
        ) : (
          <div className="p-8 text-8xl text-[#ffa31a]">{filterLetter}</div>
        )}
      </div>
    </div>
  );
}

export default App;
