import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Mobile Apps I've Created
						</div>

						<div className="subtitle projects-subtitle">
							Below are two mobile apps that I've created during my free time. From design to programming, I handled every aspect of their development independently, pouring my heart and soul into them.
						</div>

						<div className="subtitle projects-subtitle">
							The first app, "Cold Crypto," is a Swift-powered app that enables users to effortlessly track their cryptocurrency addresses. It made its debut on the App Store in 2018.
						</div>

						<div className="subtitle projects-subtitle">
							The second app, Tonality, took a couple of years to bring to life, as I meticulously designed and built every part of the app. Developed using React Native, it enables users to train their ears and master the art of reading music. Tonality was shipped to both the Apple App Store and Google Play Store in 2021.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
