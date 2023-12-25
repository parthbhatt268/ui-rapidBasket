import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

/*
We create automated tests to verify that all developer details are accurately displayed on 
the screen during QA testing. 
This eliminates the need for manual verification and saves time in the testing process.
*/
test("Credendial Check", () => {
  render(<About />);
  const credname = screen.getByText(/Parth Bhatt/i); //here i ignores the case
  expect(credname).toBeInTheDocument();
});
