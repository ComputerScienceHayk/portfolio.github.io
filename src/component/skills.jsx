import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
			<div className="skills_body">
				<div className="hard_skills">
					<div className="hard_skills_top">
						<div className="flex_center_center">
							<div className="skill_type_wrapper">
								<h3>HARD SKILLS</h3>
							<div className="skills_underline"></div>
							</div>
						</div>
					</div>
					<div className="hard_skills_bottom">
						<div className="hard_skills_bottom_line1">
							<div className="skill_item">
								<img src="images/skills/html5.png" alt="html5" width="50%" />
								<p>HTML5</p>
							</div>
							<div className="skill_item">
								<img src="images/skills/css.svg" alt="CSS3" width="45%" />
								<p>CSS3</p>
							</div>
							<div style="justify-content: space-evenly;" class="skill_item">
								<img src="images/skills/less.svg" alt="less" style="width: 90%" />
								<p>less</p>
							</div>
						</div>
						<div className="hard_skills_bottom_line2">
							<div class="skill_item">
								<img src="images/skills/js.png" alt="JS" width="50%" />
								<p>JavaScript</p>
							</div>
							<div className="skill_item">
								<img src="images/skills/react.png" alt="react" width="60%" />
								<p>React JS</p>
							</div>
						</div>
						<div className="hard_skills_bottom_line3">
							<div className="skill_item">
								<img src="images/skills/node.png" alt="node" width="80%" />
								<p>Node JS</p>
							</div>
							<div style="justify-content: space-evenly;" class="skill_item">
								<img src="images/skills/express.jpg" alt="express" width="80%" />
								<p>Express</p>
							</div>
							<div style="justify-content: space-evenly;" class="skill_item">
								<img src="images/skills/mongo.png" alt="mongo" width="80%" />
								<p>Mongo DB</p>
							</div>
						</div>
					</div>
				</div>
				<div className="skills_partition">
					<svg height="100%" width="100%">
						<line x1="50" y1="0" x2="100" y2="60" style="stroke:#818181;stroke-width:1" />
						<line x1="100" y1="60" x2="0" y2="330" style="stroke:#818181;stroke-width:1" />
						<line x1="0" y1="330" x2="50" y2="500" style="stroke:#818181;stroke-width:1" />
					</svg> 
				</div>
				<div className="soft_skills">
					<div className="soft_skills_top">
						<div className="flex_center_center">
							<div className="skill_type_wrapper">
								<h3>SOFT SKILLS</h3>
								<div className="skills_underline"></div>
							</div>
						</div>
					</div>
					<div className="soft_skills_bottom">
						<div className="soft_skills_bottom_line1">
							<div className="soft_item">
								<img src="images/skills/learn.svg" width="77%" alt="learnability" />
								<p>Learnability</p>
							</div>	
							<div className="soft_item">
								<img src="images/skills/respons.svg" width="70%" alt="responsability" />
								<p>Responsability</p>
							</div>	
							<div className="soft_item">
								<img src="images/skills/emathy.svg" width="80%" alt="empathy" />
								<p>Empathy</p>
							</div>	
						</div>
						<div className="soft_skills_bottom_line2">
							<div className="soft_item">
								<img src="images/skills/enthus.svg" width="70%" alt="enthusiasm" />
								<p>Enthusiasm</p>
							</div>	
							<div className="soft_item">
								<img src="images/skills/teamwork.svg" width="80%" alt="Teamwork" />
								<p>Teamwork</p>
							</div>	
							<div className="soft_item">
								<img src="images/skills/solve.svg" width="82%" alt="Problem Solving" />
								<p>Problem Solving</p>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}

export default Skills;
