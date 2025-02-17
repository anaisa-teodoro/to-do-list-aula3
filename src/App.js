import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./style/App.css";
import TaskDetailsPage from "./pages/TaskDetailsPage";

function App() {
  return (
    <TaskProvider>
      <Router>
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/:id" element={<TaskDetailsPage/>} />
        
        </Routes>
        <Footer />
       
      </Router>
    </TaskProvider>
  );
}

export default App;