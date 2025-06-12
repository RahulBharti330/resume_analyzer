import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Notebook from "./pages/Notebook";
import ResumeCompare from "./pages/ResumeCompare";
import ResumeEditor from "./pages/ResumeEditor";

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notebook" element={<Notebook />} />
                <Route path="/compare/:resumeId" element={<ResumeCompare />} />
                <Route path="/edit/:resumeId" element={<ResumeEditor />} />
            </Routes>
        </Router>
    );
}

export default App;