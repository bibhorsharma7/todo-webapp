import Home from "../app/page";
import { render, screen, fireEvent } from "@testing-library/react";

describe("To-Do List Application", () => {
  test("Application renders", () => {
    render(<Home />);
    expect(screen.getByText("Add New Task")).toBeInTheDocument();
  });

  test("Adds new task", () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("Title");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });
});