import { TbColumns3 } from "react-icons/tb";
import { FC } from "react";

interface ColumnsFilterProps {
  isColors: boolean;
  isColumns: boolean;
  setIsGap: (value: boolean) => void;
  setIsColors: (value: boolean) => void;
  setIsColumns: (value: boolean) => void;
  numberOfColumns: number | null;
  setNumberOfColumns: (value: number) => void;
}

const ColumnsFilter: FC<ColumnsFilterProps> = ({
  isColors,
  setIsGap,
  setIsColors,
  setIsColumns,
  isColumns,
  numberOfColumns,
  setNumberOfColumns,
}) => {
  return (
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
  );
};

export default ColumnsFilter;
