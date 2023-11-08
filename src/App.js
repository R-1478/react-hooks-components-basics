import React from "react";
import Article from "./Article";
import Comment from "./Comment";
const nav = <Navbar>I'm a link!</Navbar>
const home = <Home>Home!</Home> 
const about = <About>About!</About>
function App() {
  return (
    <>
    <div>
      {nav} 
      {home}
      {about}
      <Article />
      <Comment />
    </div>
    </>
  );
}

export default App;
