import React from "react";
import Header from "./pages/components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import About from "./pages/About";
import Contact from "./pages/Contact";

const modulesTypes = [
  {
    component: <Home />,
    to: "/",
  },
  {
    component: <About />,
    to: "/about",
  },
  {
    component: <Contact />,
    to: "/contacs",
  },
  {
    component: <Details />,
    to: "/details",
  },
];

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {modulesTypes.map((val) => {
          return <Route path={val.to} element={val.component} />;
        })}
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/details" element={<Details />} /> */}
      </Routes>
    </>
  );
};

export default App;
