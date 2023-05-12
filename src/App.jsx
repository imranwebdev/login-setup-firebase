import React from "react"
import Home from "./pages/home"
import Nav from "./componenet/nav"
import Singin from "./pages/singin";
import  {Routes,Route} from 'react-router-dom';
import SingUp from "./pages/singup";

function App() {
  return (
    <>

<Routes>
  <Route path="/"element={<Nav/>}>
 <Route path="home"element={<Home/>}/>
 <Route path="singin"element={<Singin/>}/>
 <Route path="singup"element={<SingUp/>}/>
  </Route>
  
</Routes>
    </>
  )
}

export default App
