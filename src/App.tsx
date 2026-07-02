import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { Project } from "./pages/project";
import { Services } from "./pages/services";
import { Contact } from "./pages/contact";
import { ServicesDetail } from "./pages/servicesDetails";
import "./App.css";

// The landing page: all your sections stacked together, same as before.
const Landing = () => (
  <>
    <Home />
    <Project />
    <Services />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<ServicesDetail />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/hire-me" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
