import { FC } from "react";
import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";
import { Item } from "../types";
import { useRotation } from "../hooks";

interface ContentProps {
  rows: Item[];
}

const Content: FC<ContentProps> = ({ rows }) => {
  const { mouseX, mouseY } = useRotation();

  return (
    <ul className="grid gap-3 w-1/4 ml-auto mr-auto relative">
      {rows.map((item, index) => (
        <li
          key={index}
          className={`grid bg-white p-2 pt-5 rounded-md shadow-md relative overflow-hidden`}
        >
          <div
            className="w-full h-2 absolute"
            style={{ backgroundColor: item.color }}
          ></div>
          <p className="mb-2 font-bold">Team {index + 1}</p>
          <ul className="grid grid-cols-4 gap-2">
            {[...Array(item.numberOfColumns).keys()].map((_, index) => {
              const avatar = createAvatar(botttsNeutral, {
                seed: `${
                  parseInt(item.id.replace(/-/g, ""), 16) * (index + 1)
                }`,
              }).toDataUriSync();

              return (
                <li key={index} className="bg-gray-100 p-2 rounded-md relative">
                  <div className="animate-bounce">
                    <img
                      src={avatar}
                      alt="avatar image"
                      className="rounded-md shadow-md"
                      style={{
                        transform: `rotateY(${
                          (window.innerWidth / 2 - mouseX) / 14
                        }deg) rotateX(${
                          (window.innerHeight / 2 + mouseY - 800) / 14
                        }deg)`,
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Content;
