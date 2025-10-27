import { createBrowserRouter } from "react-router-dom";
import "./App.css"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"about",
    element: <About/>,
  },
])
const App =()=>{
  return <h1>Hello React Project</h1>
}

export default App; 