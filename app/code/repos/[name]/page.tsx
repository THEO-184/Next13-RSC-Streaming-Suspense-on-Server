import RepoComponent from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import React, { Suspense } from "react";

const SingleRepoPage = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<div className="card">
			<Link href="/code/repos" className="text-blue-400 underline">
				Back To Repositories
			</Link>
			<Suspense fallback={<div>Loading repo...</div>}>
				{/* @ts-expect-error Server Component */}
				<RepoComponent name={name} />
			</Suspense>

			<Suspense fallback={<div>Loading directories...</div>}>
				{/* @ts-expect-error Server Component */}
				<RepoDirs name={name} />
			</Suspense>
		</div>
	);
};

export default SingleRepoPage;
