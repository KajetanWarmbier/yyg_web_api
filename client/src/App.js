// import { useSelector } from "react-redux";
// import Login from "./components/LoginScreen/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeMain from "./components/HomeScreen/HomeMain";
import Nav from "./components/Navbar/Nav";
import PicMain from "./components/PicturesScreen/PicMain";
import UsersMain from "./components/UsersScreen/UsersMain";

function App() {
  // const jwtToken = useSelector((state) => state.jwtToken);

  // if (jwtToken === "") {
  //   return <Login />;
  // }

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="flex bg-slate-300 rounded-md min-w-max h-[80vh] mx-4 mt-5">
          <Routes>
            <Route exact path="/" element={<HomeMain />} />
            <Route exact path="/pictures" element={<PicMain />} />
            <Route exact path="/users" element={<UsersMain />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
