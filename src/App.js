import Home from "./pages/Home/Home";
import SignIn from './pages/SignIn';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reservation from "./pages/Reservation/Reservation";
import MyReservations from "./pages/MyReservations/MyReservations";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/reservation/:id" element={<Reservation />} />
                  <Route path="/myreservations" element={<MyReservations />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
              </Route>
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
