import Layout from "./components/layout/layout";
import GifsPage from "./pages/GifsPage";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import StickersPage from "./pages/StickersPage";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import AdminPage from "./pages/AdminPage";

function App() {
  const user = {'role':'admin'}
  localStorage.setItem("user",JSON.stringify(user))
return(
  <Router>
    <MainNavbar/>
    <Routes>
      <Route path="/gifs" element={<GifsPage/>}/>
      <Route path="/stickers" element={<PrivateRoute><StickersPage/></PrivateRoute>}/>
      <Route path="/admin" element={<AdminRoute><AdminPage/></AdminRoute>}/>
    </Routes>
  </Router>
)
}

export default App

// Ynwg8SNkFbWkzBg1io7Lh8t7viv7Mg8K --> API KEY