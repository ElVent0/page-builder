import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [rows, setRows] = useState([]);

  return (
    <div className="py-10 relative">
      <Header setRows={setRows} toast={toast} />
      <Content rows={rows} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
