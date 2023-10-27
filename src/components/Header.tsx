import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { TbColumns3 } from "react-icons/tb";
import { IoMdColorFilter } from "react-icons/io";

const Header = ({ setRows, toast }) => {
  const [isColumns, setIsColumns] = useState(false);
  const [isColors, setIsColors] = useState(false);

  const [numberOfColumns, setNumberOfColumns] = useState(null);
  const [color, setColor] = useState("#818CF8");
  const raws = [1, 2, 3, 4, 5];

  const handleCreate = () => {
    if (numberOfColumns) {
      setNumberOfColumns(null);
      setColor("#818CF8");
      setIsColumns(false);
      setIsColors(false);
      setRows((prev) => [...prev, { numberOfColumns, color }]);
    } else {
      toast.error("You have to choose number of Rows");
    }
  };

  return (
    <div className="w-1/4 flex justify-around items-center bg-white py-4 rounded-md relative ml-auto mr-auto shadow-md mb-6">
      <div className="flex items-center gap-4 relative after:content-[''] after:absolute after:bg-gray-200 after:-top-1 after:-right-5 after:w-0.5 after:h-12">
        <button
          type="button"
          className="flex justify-center w-28 gap-3 items-center py-2 rounded-md bg-gray-100 duration-300 hover:bg-indigo-200"
          onClick={() => {
            if (isColors) {
              setIsColors(!isColors);
            }
            setIsColumns(!isColumns);
          }}
        >
          {numberOfColumns ? (
            <p className="text-indigo-600">({numberOfColumns})</p>
          ) : (
            <TbColumns3 />
          )}
          <p>Rows</p>
        </button>
        {isColumns && (
          <ul className="absolute top-16 -left-5 w-36 bg-white py-3 px-4 rounded-md z-50">
            {raws.map((item) => (
              <li
                key={item}
                className="flex justify-center  items-center mb-2 last-of-type:mb-0"
              >
                <button
                  type="button"
                  className="block w-full rounded-md bg-gray-100 py-1 duration-300 hover:bg-indigo-200"
                  onClick={() => {
                    setIsColumns(false);
                    setNumberOfColumns(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex gap-2 items-center relative after:content-[''] after:absolute after:bg-gray-200 after:-top-1 after:-right-5 after:w-0.5 after:h-12">
        <button
          type="button"
          className="flex justify-center gap-3 w-28 items-center py-2 rounded-md bg-gray-100 duration-300 hover:bg-indigo-200"
          onClick={() => {
            if (isColumns) {
              setIsColumns(!isColumns);
            }
            setIsColors(!isColors);
          }}
        >
          <div
            className="bg-blue-400 rounded-md p-1"
            style={{ backgroundColor: color }}
          >
            <IoMdColorFilter className="text-white" />
          </div>
          <p>Color</p>
        </button>
        {isColors && (
          <div className="absolute top-16 -left-5 p-3 rounded-md bg-white">
            <HexColorPicker
              color={color}
              onChange={setColor}
              className=""
              style={{ width: "124px", height: "192px", zIndex: 50 }}
            />
          </div>
        )}
      </div>
      <button
        type="button"
        className="py-2 px-5 text-white rounded-md bg-indigo-400 duration-300 hover:bg-indigo-600"
        onClick={handleCreate}
      >
        Create
      </button>
    </div>
  );
};

export default Header;