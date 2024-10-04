

import Homepage from './Components/Homepage';
import SinglePost from './Components/SinglePost';
import Blogs from './Components/Blogs';
import Error from './Components/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Header from './Header';



function App() {
  return (
    <>
    <Router>
      <Header/>
 
<Routes>

  <Route path="/"  element={<Homepage/>} exact />
  
  <Route path="/Blog/blog/:slug"  element={<SinglePost/>}  />

  <Route path="/blog"  element={<Blogs/>}  />
  
  

   <Route path="*"  element={<Error/>}  />
</Routes>


</Router>
    </>
  );
}

export default App;
