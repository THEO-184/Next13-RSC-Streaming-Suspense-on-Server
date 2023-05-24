import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen">
			<h1>Welcome to Nextjs 13 App tutorial</h1>

			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/about/team">Team</Link>
				</li>
			</ul>
		</main>
	);
}
