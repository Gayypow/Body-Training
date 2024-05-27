import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ConfigProvider } from "antd";
import Player from "./pages/Player";

function App() {
  return (
    <ConfigProvider>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
