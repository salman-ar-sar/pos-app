import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import BillsList from "../pages/Bills/BillsList";
import NewBill from "../pages/Bills/NewBill";
import ViewBill from "../pages/Bills/ViewBill";
import Home from "../pages/Home";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="bills">
            <Route index element={<BillsList />} />
            <Route path=":invoiveNo" element={<ViewBill />} />
            <Route path="new" element={<NewBill />} />
          </Route>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
