import { useEffect } from "react";
import * as model from "./store";
import { AppRouter } from "./AppRouter";

function App() {
  useEffect(() => {
    model.fetchPositionsFx();
  }, []);

  return <AppRouter />;
}

export default App;
