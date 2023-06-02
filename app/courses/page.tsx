"use client";

import React from "react";
import Courses from "../components/Courses";

const CoursesPage = () => {
	return (
		<div>
			{/* @ts-expect-error */}
			<Courses />
		</div>
	);
};

export default CoursesPage;
