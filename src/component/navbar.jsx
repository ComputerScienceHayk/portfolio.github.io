import React from 'react';

const Navbar = () => {
  return (
    <div className="Navbar">
     <nav className="nav">

<button className="nav-toggle"><span>Menu</span></button>

<ul className="nav-menu">
  <li>
      <a href="#head">Home</a>
  </li>
  <li>
      <a href="#about">About</a>
  </li>
  <li>
      <a href="#experience">Expirience</a>
  </li>
  <li>
      <a href="#portfolio">Portfolio</a>
  </li>
  <li>
      <a href="#skills">Skills</a>
  </li>
  <li>
      <a href="#contact">Contact me</a>
  </li>
</ul>

<div className="nav-morph" 
     data-open="M 300,-1.9235101 C 947.48798,352.73374 368.08761,564.6745 301.42857,1052.3622" 
     data-close="M 300,-1.9235101 C -43.940589,374.16231 223.80189,644.6745 301.42857,1052.3622">
  <svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="none">
      <path fill="none" d="M 300,-1.9235101 C 304.63084,565.59088 299.51618,538.96021 301.42857,1052.3622"/>
  </svg>
</div>

</nav>
    </div>
  );
}

export default Navbar;
