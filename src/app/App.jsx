import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./layout/Layout"
// import Home from "./pages/Home"
import Welcome from "./pages/Welcome"
import SingIn from "./pages/SingIn"
import SingUp from "./pages/SingUp"
import ForgotPassword from "./pages/ForgotPassword"

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/singin" element={<SingIn />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App