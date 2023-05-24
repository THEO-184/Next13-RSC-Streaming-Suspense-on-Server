import React from "react";
import { Repo } from "../code/repos/interfaces.repos";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";

async function fetchRepo(name: string): Promise<Repo> {
	const response = await fetch(`https://api.github.com/repos/THEO-184/${name}`);
	const repo = await response.json();
	return repo;
}

const RepoComponent = async ({ name }: { name: string }) => {
	const repo = await fetchRepo(name);
	console.log("repo", repo);

	return (
		<>
			<h2>{repo.name}</h2>
			<p>{repo.description}</p>
			<div className="card-stats">
				<div className="card-stat">
					<FaStar />
					<span>{repo.stargazers_count}</span>
				</div>
				<div className="card-stat">
					<FaCodeBranch />
					<span>{repo.forks_count}</span>
				</div>
				<div className="card-stat">
					<FaEye />
					<span>{repo.watchers_count}</span>
				</div>
			</div>
		</>
	);
};

export default RepoComponent;
