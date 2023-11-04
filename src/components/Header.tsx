import { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../types";
import toast from "react-hot-toast";
import { generate } from "random-words";
import ColumnsFilter from "./ColumnsFilter";
import ColorsFilter from "./ColorsFilter";
import GapsFilter from "./GapsFilter";

interface HeaderProps {
  createNewRow: (newRow: Item) => void;
}

const Header: FC<HeaderProps> = ({ createNewRow }) => {
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
      createNewRow({
        numberOfColumns,
        color,
        id: uuidv4(),
        teamName: generate(),
        gap,
      });
      toast.success("Row is added");
    } else {
      toast.error("You have to choose number of Columns");
    }
  };

  return (
    <div className="w-1/4 flex justify-around items-center bg-white py-4 rounded-md relative ml-auto mr-auto shadow-md mb-6">
      <ColumnsFilter
        isColors={isColors}
        setIsGap={setIsGap}
        setIsColors={setIsColors}
        setIsColumns={setIsColumns}
        isColumns={isColumns}
        numberOfColumns={numberOfColumns}
        setNumberOfColumns={setNumberOfColumns}
      />
      <ColorsFilter
        isColumns={isColumns}
        setIsGap={setIsGap}
        setIsColumns={setIsColumns}
        setIsColors={setIsColors}
        isColors={isColors}
        color={color}
        setColor={setColor}
      />
      <GapsFilter
        isColumns={isColumns}
        setIsColors={setIsColors}
        setIsColumns={setIsColumns}
        setIsGap={setIsGap}
        isGap={isGap}
        gap={gap}
        setGap={setGap}
      />
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
