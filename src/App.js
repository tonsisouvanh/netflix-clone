import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/signup" element={<Signup />}>
            </Route>
            <Route path="/movie/:id" element={<MovieDetail />}>
            </Route>
            <Route path="/account" element={<ProtectedRoute>
              <Account />
            </ProtectedRoute>}>
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
