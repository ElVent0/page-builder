import { FC, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { TbColumns3 } from "react-icons/tb";
import { IoMdColorFilter } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../types";
import toast from "react-hot-toast";
import { generate } from "random-words";

interface HeaderProps {
  setRows: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Header: FC<HeaderProps> = ({ setRows }) => {
  const [isColumns, setIsColumns] = useState(false);
  const [isColors, setIsColors] = useState(false);
  const [isGap, setIsGap] = useState(false);
  const [numberOfColumns, setNumberOfColumns] = useState<number | null>(null);
  const [color, setColor] = useState("#818CF8");
  const [gap, setGap] = useState(0);

  const onCreate = () => {
    if (numberOfColumns) {
      setNumberOfColumns(null);
      setColor("#818CF8");
      setIsColumns(false);
      setIsColors(false);
      setIsGap(false);
      setRows((prev) => [
        ...prev,
        { numberOfColumns, color, id: uuidv4(), teamName: generate(), gap },
      ]);
      toast.success("Row is added");
    } else {
      toast.error("You have to choose number of Columns");
    }
  };

  console.log(gap);

  return (
    <div className="w-1/4 flex justify-around items-center bg-white py-4 rounded-md relative ml-auto mr-auto shadow-md mb-6">
      <div className="flex items-center gap-4 relative after:content-[''] after:absolute after:bg-gray-200 after:-top-1 after:-right-3.5 after:w-0.5 after:h-12">
        <button
          type="button"
          className="flex justify-center w-24 gap-1 items-center py-2 rounded-md duration-300 border border-indigo-600 hover:bg-indigo-200"
          onClick={() => {
            if (isColors || setIsGap) {
              setIsColors(false);
              setIsGap(false);
            }
            setIsColumns(!isColumns);
          }}
        >
          {numberOfColumns ? (
            <p className="text-indigo-600">({numberOfColumns})</p>
          ) : (
            <TbColumns3 className="text-indigo-600 text-lg" />
          )}
          <p>Columns</p>
        </button>
        {isColumns && (
          <ul className="absolute top-16 -left-4 w-32 bg-white py-3 px-4 rounded-md z-50 shadow-md">
            {[...Array(4).keys()].map((item) => (
              <li
                key={item}
                className="flex justify-center  items-center mb-2 last-of-type:mb-0"
              >
                <button
                  type="button"
                  className="block w-full rounded-md bg-gray-100 py-1 duration-300 hover:bg-indigo-200"
                  onClick={() => {
                    setIsColumns(false);
                    setNumberOfColumns(item + 1);
                  }}
                >
                  {item + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex gap-2 items-center relative after:content-[''] after:absolute after:bg-gray-200 after:-top-1 after:-right-3.5 after:w-0.5 after:h-12">
        <button
          type="button"
          className="flex justify-center gap-1 w-20 items-center py-2 rounded-md duration-300 border border-indigo-600 hover:bg-indigo-200"
          onClick={() => {
            if (isColumns || setIsGap) {
              setIsColumns(false);
              setIsGap(false);
            }
            setIsColors(!isColors);
          }}
        >
          <div
            className="bg-indigo-400 rounded-md p-1"
            style={{ backgroundColor: color }}
          >
            <IoMdColorFilter className="text-white" />
          </div>
          <p>Color</p>
        </button>
        {isColors && (
          <div className="absolute top-16 -left-4 p-3 rounded-md bg-white shadow-md z-50 ">
            <HexColorPicker
              color={color}
              onChange={setColor}
              className=""
              style={{ width: "90px", height: "180px" }}
            />
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center relative after:content-[''] after:absolute after:bg-gray-200 after:-top-1 after:-right-3.5 after:w-0.5 after:h-12">
        <button
          type="button"
          className="flex justify-center gap-1 w-16 items-center py-2 rounded-md duration-300 border border-indigo-600 hover:bg-indigo-200"
          onClick={() => {
            if (isColumns || setIsColors) {
              setIsColumns(false);
              setIsColors(false);
            }
            setIsGap(!isGap);
          }}
        >
          <p className="text-indigo-600">({gap})</p>
          <p>Gap</p>
        </button>
        {isGap && (
          <div className="absolute top-16 -left-9 w-32 bg-white py-3 px-4 rounded-md z-50 shadow-md">
            <input
              type="range"
              className="w-full cursor-pointer"
              min="0"
              max="20"
              step="4"
              value={gap}
              onChange={(e) => {
                setGap(Number(e.target.value));
              }}
            />
          </div>
        )}
      </div>
      <button
        type="button"
        className="py-2 px-5 text-white rounded-md bg-indigo-400 duration-300 hover:bg-indigo-600"
        onClick={onCreate}
      >
        Create
      </button>
    </div>
  );
};

export default Header;
