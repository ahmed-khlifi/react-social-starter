import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import AuthRoute from "./routes/AuthRoute";
function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />

      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="Profile" element={<h1>Profile</h1>} />
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
