import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

import Routing from "./routing/Routing";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
