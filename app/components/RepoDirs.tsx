import Link from "next/link";
import React from "react";
import { revalidateObj } from "../code/repos/page";

const RepoDirs = async ({ name }: { name: string }) => {
	const contents = await fetchRepoContents(name);
	const dirs = contents.filter((content) => content.type === "dir");

	return (
		<div>
			<h3>Directories</h3>
			<ul>
				{dirs.map((dir) => {
					return (
						<li key={dir.path}>
							<Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default RepoDirs;

async function fetchRepoContents(name: string): Promise<RepoDirResponse> {
	const contents = await fetch(
		`https://api.github.com/repos/THEO-184/${name}/contents`,
		revalidateObj
	);
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const response = await contents.json();
	return response;
}

export type RepoDirResponse = RepoDirsData[];

export interface RepoDirsData {
	name: string;
	path: string;
	sha: string;
	size: number;
	url: string;
	html_url: string;
	git_url: string;
	download_url?: string;
	type: string;
	_links: Links;
}

export interface Links {
	self: string;
	git: string;
	html: string;
}
