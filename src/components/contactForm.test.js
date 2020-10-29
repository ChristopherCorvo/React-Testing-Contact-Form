// we need to import react because our tests will run in the virtual DOM
import React from 'react'

// import RTL testing library
import {fireEvent, render, screen} from '@testing-library/react'

// import component to be tested
import ContactForm from '../components/ContactForm'

// ------- First Test -----------
// This tests only job is to test if the ContactForm component can succesfully render
// to the DOM. 
test('Render ContactForm to the DOM', () => {
    
    //Render the ContactForm component
    
})

//-------- Test 2 -------------
// First Name Input Tests: 

test ('ContactForm succesfully submits input data', ()=> {
    render(<ContactForm/>)

    const firstName = screen.getByLabelText(/firstName/i)
    const lastName = screen.getByLabelText(/lastName/i)
    const email = screen.getByLabelText(/email/i)
    const message = screen.getByLabelText(/message/i)

    fireEvent.change(firstName, {target: {value: 'Chr'}})
    fireEvent.change(lastName, {target: {value: 'Corvo'}})
    fireEvent.change(email, {target: {value: 'none@gmail.com'}})
    fireEvent.change(message, {target: {value: '123'}})

    const submitButton = screen.getByText(/submit/i)

    fireEvent.click(submitButton)

    const firstNameTextCheck = screen.getByText(/chr/i)
    const lastNameTextCheck = screen.getByText(/corvo/i)
    const emailTextCheck = screen.getByText(/none@gmail.com/i)
    const messageTextCheck = screen.getByText(/123/i)

    expect(firstNameTextCheck).toBeInTheDocument()
    expect(lastNameTextCheck).toBeInTheDocument()
    expect(emailTextCheck).toBeInTheDocument()
    expect(messageTextCheck).toBeInTheDocument()
})
