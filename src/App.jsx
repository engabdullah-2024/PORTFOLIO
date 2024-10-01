import {Route, Routes} from "react-router-dom"



import About from "./pages/About"
import Contact from "./pages/Contact"

import Portfolio from "./pages/Portfolio"



function App (){
    return <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
       

    </Routes>

}
export default App  