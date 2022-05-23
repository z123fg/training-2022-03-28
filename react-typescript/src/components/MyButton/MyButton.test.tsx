import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import MyButton from "./MyButton";

//test suite
describe("MyButton test cases", () => {
    test("snapshot test", () => {
        const view = render(<MyButton>SUBMIT</MyButton>);
        expect(view.asFragment()).toMatchSnapshot();
    });

    test("MyButton component should mount without error", async () => {
        render(<MyButton>SUBMIT</MyButton>);
        const buttonEl = await screen.findByRole("button");
        expect(buttonEl).toBeInTheDocument();
    });

    test("MyButton should change its style based on variant type", async () => {
        const { rerender } = render(<MyButton >SUBMIT</MyButton>);
        const buttonEl = await screen.findByRole("button");
        expect(buttonEl).toHaveClass("btn-primary-contained");
        rerender(<MyButton variant="outlined">SUBMIT</MyButton>);
        expect(buttonEl).toHaveClass("btn-primary-outlined");

        rerender(<MyButton variant="text">SUBMIT</MyButton>);
        expect(buttonEl).toHaveClass("btn-primary-text");
    });

    test("MyButton should change its style based on color type", async () => {
        const { rerender } = render(<MyButton >SUBMIT</MyButton>);
        const buttonEl = await screen.findByRole("button");
        expect(buttonEl).toHaveClass("btn-primary-contained");
        rerender(<MyButton color="secondary">SUBMIT</MyButton>);
        expect(buttonEl).toHaveClass("btn-secondary-contained");

        rerender(<MyButton color="default">SUBMIT</MyButton>);
        expect(buttonEl).toHaveClass("btn-default-contained");
    });

    test("MyButton should change its style based on size type", async () => {
        const { rerender } = render(<MyButton >SUBMIT</MyButton>);
        const buttonEl = await screen.findByRole("button");
        expect(buttonEl).toHaveClass("btn-medium");
        rerender(<MyButton size="small">SUBMIT</MyButton>);
        expect(buttonEl).toHaveClass("btn-small");

        rerender(<MyButton size="large">SUBMIT</MyButton>);
        expect(buttonEl).toHaveClass("btn-large");
    });

    test("MyButton should be disabled with disabled props provided. onClick should be invoked on click if MyButton is not disabled", async () => {
        const mockClickHandler = jest.fn();
        const { rerender } = render(<MyButton onClick={mockClickHandler}>SUBMIT</MyButton>);
        const buttonEl = await screen.findByRole("button");
        fireEvent.click(buttonEl);
        expect(mockClickHandler).toBeCalledTimes(1);
        rerender(<MyButton onClick={mockClickHandler} disabled>SUBMIT</MyButton>);
        fireEvent.click(buttonEl);
        expect(mockClickHandler).toBeCalledTimes(1);
    });
    
    test("MyButton should have ripple animation on click", async () => {
        render(<MyButton>SUBMIT</MyButton>);
        const buttonEl = await screen.findByRole("button");
        let rippleEls = screen.queryAllByTestId("ripple-element");
        expect(rippleEls).toHaveLength(0)
        fireEvent.click(buttonEl);
        rippleEls = screen.queryAllByTestId("ripple-element");
        expect(rippleEls).toHaveLength(1);
        fireEvent.animationEnd(rippleEls[0]);
        rippleEls = screen.queryAllByTestId("ripple-element");
        expect(rippleEls).toHaveLength(0);
    });


})