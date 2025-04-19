import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import blogData from "../data/blog";

test("renders the correct child components", () => {
  render(<App />);

  // Check for overall layout structure
  expect(document.querySelector(".App")).toBeInTheDocument();
  expect(document.querySelector(".App header")).toBeInTheDocument();
  expect(document.querySelector(".App main")).toBeInTheDocument();

  // Check if article titles from blogData.posts are rendered
  blogData.posts.forEach((post) => {
    expect(screen.getByText(post.title)).toBeInTheDocument();
  });
});
