import React from 'react';

const About = () => {
  return (
    <section id="about" className="abt">
			<h1>About</h1>
			<div className="about_wrapper">
				<div className="about_left">
					<div className="my_pic">
						<img src="images/me.png" alt="me" />
					</div>
				</div>
				<div className="about_right">
					<div className="terminal">
						<div className="term_top">software@engineer#hayk:~$</div>
						<div className="term_body"><span id="typeWriter"></span></div>
					</div>	
				</div>
			</div>
		</section>
  );
}

export default About;
