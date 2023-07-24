import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalHeaderLayout from "../components/GlobalHeaderLayout";
import About from "../pages/About";
import Home from "../components/Home";
import Characters from "../pages/Characters";
import Plot from "../pages/Plot";
import CharacterDetails from "../pages/Characters-details";
import PageNotFound from "../pages/PageNotFound";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalHeaderLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/plot" element={<Plot />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
