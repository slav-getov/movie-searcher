import { useState } from "react";
import GlobalStyleProvider from "./components/GlobalStyleProvider";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyleProvider />
      Test
    </>
  );
};

export default App;
