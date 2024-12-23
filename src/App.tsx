import "./App.css";
import ErrorBoundary from "./components/ErrorBoundaries";
import { Layaout } from "./components/Layaout";

function App() {
  return (
    <ErrorBoundary>
      <Layaout />
    </ErrorBoundary>
  );
}

export default App;
