import { FC } from "react";

interface GapsFilterProps {
  isColumns: boolean;
  setIsColors: (value: boolean) => void;
  setIsColumns: (value: boolean) => void;
  setIsGap: (value: boolean) => void;
  isGap: boolean;
  gap: number;
  setGap: (value: number) => void;
}

const GapsFilter: FC<GapsFilterProps> = ({
  isColumns,
  setIsColors,
  setIsColumns,
  setIsGap,
  isGap,
  gap,
  setGap,
}) => {
  return (
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
  );
};

export default GapsFilter;
