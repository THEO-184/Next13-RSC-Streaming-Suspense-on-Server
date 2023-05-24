import RepoComponent from "@/app/components/Repo";
import Link from "next/link";
import React from "react";

const SingleRepoPage = async ({
	params: { name },
}: {
	params: { name: string };
}) => {
	return (
		<div className="card">
			<Link href="/code/repos" className="text-blue-400 underline">
				Back To Repositories
			</Link>
			{/* @ts-expect-error Server Component */}
			<RepoComponent name={name} />
		</div>
	);
};

export default SingleRepoPage;
