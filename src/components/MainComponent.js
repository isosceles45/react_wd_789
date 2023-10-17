import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ContactForm from "./ContactForm";

const MainComponent = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Counter />
            <Routes>
              <Route path="/contact" element={<ContactForm />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};
export default MainComponent;
