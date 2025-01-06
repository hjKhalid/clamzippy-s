import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import AQIChecker from "./components/AQIChecker";
import Footer from "./components/Footer";
import contentData from "./data/content.json";
import Navbar from "./components/Navbar";

function App() {
  const [content, setContent] = useState({});

  useEffect(() => {
    // Simulating fetching JSON data
    setContent(contentData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <Navbar />
      <main className="p-4">
        {Object.entries(content).map(([key, value]) => (
          <Section key={key} title={key} content={value} />
        ))}
        <AQIChecker />
      </main>
      <Footer />
    </div>
  );
}

export default App;
