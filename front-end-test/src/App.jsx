import NavBar from "./components/NavBar";
import FloatCard from "./components/FloatCard";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <FloatCard className="flex justify-center w-[914]" />
    </div>
  );
}

export default App;
