import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { Toaster } from "react-hot-toast";
import { Item } from "./types";

const App = () => {
  const [rows, setRows] = useState<Item[]>([]);

  return (
    <div className="py-10 relative">
      <Header setRows={setRows} />
      <Content rows={rows} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
