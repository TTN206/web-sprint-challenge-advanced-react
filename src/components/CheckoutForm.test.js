import React from "react";
import { screen,render } from "@testing-library/react"; // needed for testing
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'; // needed for testing

// Write up the two tests here and make sure they are testing what the title shows

test('sanity test', () => {
    expect(true).toBeTruthy() // making sure testing is running!
})

test("form header renders", () => {
    render (<CheckoutForm />) //Arrange
    const header = screen.getByText(/checkout form/i) //Act
    expect(header).toBeInTheDocument(); //Assert
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />) // Arrange: rendering the checkoutForm
     // Act: finding the first name by type
    const first = screen.getByLabelText(/first name:/i) 
    userEvent.type(first, "Tim")
     // Act: finding the last name by type
    const last = screen.getByLabelText(/last name:/i) 
    userEvent.type(last, "Nguyen") 
     // Act: finding the address by type
    const add = screen.getByLabelText(/address:/i) 
    userEvent.type(add, "321 faker street")
     // Act: finding the city by type
    const city = screen.getByLabelText(/city:/i) 
    userEvent.type(city, "someplace")
     // Act: finding the state by type
    const state = screen.getByLabelText(/state:/i) 
    userEvent.type(add, "WA")
     // Act: finding the zip code by type
    const zip = screen.getByLabelText(/zip:/i) 
    userEvent.type(zip, "12345")
     // Act: find the button by role
    const butt = screen.getByRole("button")
    userEvent.click(butt)

    //find the success message
    const successMsg = screen.getByTestId("successMessage")

    //Assert: confirm the success message is on the page
    expect(successMsg).toBeInTheDocument();
    const fnText = screen.queryByText(/tim/i)
    const lnText = screen.queryByText(/nguyen/i)
    const addText = screen.queryByText(/321 faker street/i)
    const cityText = screen.queryByText(/someplace/i)
    const stateText = screen.queryByText(/WA/i)
    const zipText = screen.queryByText(/12345/i)

    expect(fnText).toBeInTheDocument();
    expect(lnText).toBeInTheDocument();
    expect(addText).toBeInTheDocument();
    expect(cityText).toBeInTheDocument();
    expect(stateText).toBeInTheDocument();
    expect(zipText).toBeInTheDocument();
});
