import React from "react";
import NavBar from "./pages/NavBar";
import Hero from "./components/Hero";
import Category from "./pages/Category";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="container py-14 flex flex-col gap-5 md:flex-row">

      <Category color={"bg-yellow-500"}/>
      <Category color={"bg-green-500"}/>
      <Category color={"bg-red-500"}/>

      </div>
    </>
  );
};

export default App;
