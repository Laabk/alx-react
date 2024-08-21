import React from "react";
import CourseList from "./CourseList";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    render(<CourseList />);
    expect(screen.getByText(/Course name/i)).toBeInTheDocument();
  });

  it("renders 5 different rows", () => {
    render(<CourseList listCourses={listCourses} />);
    expect(screen.getAllByRole("row")).toHaveLength(5);
    expect(screen.getByText("ES6")).toBeInTheDocument();
    expect(screen.getByText("Webpack")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders correctly when passed a list of courses", () => {
    render(<CourseList listCourses={listCourses} />);
    expect(screen.getAllByRole("row")).toHaveLength(5);
    expect(screen.getByText("ES6")).toBeInTheDocument();
    expect(screen.getByText("Webpack")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
