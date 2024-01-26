import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import UseStatePage from "./pages/hooks/useState.tsx";
import UseEffectPage from "./pages/hooks/useEffect.tsx";
import UseMemoPage from "./pages/hooks/useMemo.tsx";
import UseCallBackPage from "./pages/hooks/useCallBack.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-state" element={<UseStatePage />} />
        <Route path="/use-effect" element={<UseEffectPage />} />
        <Route path="/use-memo" element={<UseMemoPage />} />
        <Route path="/use-callback" element={<UseCallBackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
