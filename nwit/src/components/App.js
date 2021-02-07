import React, { useState } from "react";
import AppRouter from "components/Router";
import fbase from "fbase";

function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  return (
  <><AppRouter isLoggedIn={isLoggedIn} />
  <footer>&copy; Nwit {new Date().getFullYear()} Nwit</footer>
  </> 
   );
}

export default App;
