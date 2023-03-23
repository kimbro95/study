import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// describe => Test Suites 그룹화
describe("Greeting Component", () => {
  test("renders Hello world! as a test", () => {
    // Arrange
    render(<Greeting />);

    // Assert
    const helloWorldElement = screen.getByText("Hello World", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see u If the button was Not clicked", () => {
    // Arrange
    render(<Greeting />);

    // Assert
    const outputElement = screen.getByText("good to see u", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed" If the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see u!" If the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see u", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
