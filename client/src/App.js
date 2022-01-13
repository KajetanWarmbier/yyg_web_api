import { useSelector } from "react-redux";
import Login from "./components/Login";

function App() {
  const jwtToken = useSelector((state) => state.jwtToken);

  // if (jwtToken === "") {
  //   return <Login />;
  // }

  return <div className="App"></div>;
}

export default App;
