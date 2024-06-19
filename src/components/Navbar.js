// NavS.js
import React from 'react';

const NavS = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Navbar</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
      </button>
    </nav>
  );
};

export default NavS;