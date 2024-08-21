import React from "react";
import CourseListRow from "./CourseListRow";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    render(<CourseListRow textFirstCell="test" />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("should render one cell with colspan = 2 when textSecondCell null", () => {
    render(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);
    const cell = screen.getByText("test");
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveAttribute('colspan', '2');
  });

  it("should render two cells when textSecondCell not null", () => {
    render(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);
    const cells = screen.getAllByText("test");
    expect(cells).toHaveLength(2);
  });
});
