import "./MenuBar.css";

function MenuBar({ filterLetter, setFilterLetter }) {
  return (
    <div className="h-full flex flex-col justify-between py-4 px-4">
      {[...Array(26)].map((value, index) => (
        <div
          className={
            "text-center text-lg text-white " +
            (filterLetter === String.fromCharCode(65 + index)
              ? "cursor-not-allowed opacity-0"
              : "cursor-pointer hover:text-[#ffa31a] hover:text-5xl")
          }
          key={index}
          onClick={() => setFilterLetter(String.fromCharCode(65 + index))}
        >
          {String.fromCharCode(65 + index)}
        </div>
      ))}
    </div>
  );
}

export default MenuBar;
