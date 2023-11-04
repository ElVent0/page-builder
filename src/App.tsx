import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { Toaster } from "react-hot-toast";
import { Item } from "./types";

const App = () => {
  const [rows, setRows] = useState<Item[]>([]);

  const createNewRow = (newRow: Item) => {
    setRows((prev) => [...prev, newRow]);
  };

  return (
    <div className="py-10 relative">
      <Header createNewRow={createNewRow} />
      <Content rows={rows} setRows={setRows} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
