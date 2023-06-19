// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// test('renders a link to Little Lemon Website', () => {
//   render(<App />);
//   const linkElement = screen.getByText("Little Lemon Restaurant");
//   expect(linkElement).toBeInTheDocument();
// });

import { fireEvent, render, screen } from "@testing-library/react";
import {FeedbackForm} from "../src/components/lab-w3/Form";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    const rangeInput = screen.getByLabelText(/Score:/)
    fireEvent.change(rangeInput,{target : {value : score}})

    const textField = screen.getByLabelText(/Comments:/)
    fireEvent.change(textField, {target:{value : comment}})

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    const rangeInput = screen.getByLabelText(/Score:/)
    fireEvent.change(rangeInput,{target : {value : score}})

    const textField = screen.getByLabelText(/Commsents:/)
    fireEvent.change(textField, {target:{value : ""}})
    
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);


    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});
