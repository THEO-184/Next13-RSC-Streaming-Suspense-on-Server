import Link from "next/link";
import React from "react";

const Courses = async () => {
	const courses = await fetchCourses();

	return (
		<div className="courses">
			{courses.map((course) => {
				return (
					<div key={course.id} className="card">
						<h2>{course.title}</h2>
						<small>Level: {course.level}</small>
						<p>{course.link}</p>
						<Link href={course.link} target="_blank" className="btn">
							Go to Course
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Courses;

async function fetchCourses(): Promise<CoursesResponse> {
	const response = await fetch("http://localhost:3002/api/courses");
	const courses = await response.json();
	return courses;
}

export type CoursesResponse = CoursesData[];

export interface CoursesData {
	id: number;
	title: string;
	description: string;
	link: string;
	level: string;
}
