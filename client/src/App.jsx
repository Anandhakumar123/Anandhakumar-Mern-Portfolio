import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { useEffect } from "react";
import Loader from "./components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  ReloadData,
  SetPortfolioData,
  ShowLoading,
} from "./redux/rootSlice";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";

function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );

  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      console.log(response.data);
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData]);

  return (
    <div>
      <BrowserRouter>
        {loading ? <Loader /> : null}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin-login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
