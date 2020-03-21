import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
		<div className="f1">
			<div className="icon-wrap flex row">
		      <a href="https://www.linkedin.com/in/haikaz-bashoyan/">
		        <div className="flex icon" id="icon-2">
		          <i className="fab fa-linkedin"></i>
		        </div>
		      </a>
		      <a href="https://www.facebook.com/computerscience.hayk">
		        <div className="flex icon" id="icon-3">
		          <i className="fab fa-facebook"></i>
		        </div>
		      </a>
		      <a href="https://vk.com/computerscience.hayk">
		        <div className="flex icon" id="icon-5">
		          <i className="fab fa-vk"></i>
		        </div>
		      </a>
		      <a href="https://telegram.me/Haykaz">
		        <div className="flex icon" id="icon-3">
		          <i className="fab fa-telegram-plane"></i>
		        </div>
		      </a>
		      <a href="https://github.com/HaykazBashoyan">
		        <div className="flex icon" id="icon-3">
		          <i className="fab fa-github"></i>
		        </div>
		      </a>
		    </div>
		</div>
		<div className="f2">
			<div className="cntr">
				Designed by <a href="https://nanekharatyan.com">ՆաՆե</a>
				Built by <a href="#about">Հայկ</a>
			</div>
		</div>
	</footer>
  );
}

export default Footer;
