import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./Principal.png"
								alt="Principal"
								className="work-image"
							/>
							<div className="work-title">Principal Financial Group</div>
							<div className="work-subtitle">
								Software Engineer III
							</div>
							<div className="work-duration">2020 - Present</div>
						</div>

						<div className="work">
							<img
								src="./Principal.png"
								alt="Principal"
								className="work-image"
							/>
							<div className="work-title">Principal Financial Group</div>
							<div className="work-subtitle">
								Cyber Security Analyst II
							</div>
							<div className="work-duration">2015 - 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
