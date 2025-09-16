import React from 'react';
import Profile from '../components/Profile/Profile.js';
// import Products from '../components/Products/Products.js';
import Blog from '../components/Blog/Blog';
import Newsletter from '../components/Newsletter/Newsletter';
import NavBar from '../components/NavBar/navBar.js';

const HomePage = () => {
  return (
    <main>
       {/* <NavBar/>  */}
      <Profile />
      <hr style={{ margin: '2rem 0' }} />
      {/* <Products />
      <hr style={{ margin: '2rem 0' }} /> */}
      <Blog />
      <hr style={{ margin: '2rem 0' }} />
      <Newsletter />
    </main>
  );
};

export default HomePage;