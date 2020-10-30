import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '../components/ContactForm'

// need to go over this code for deeper understanding
test('Fills out form', async () => {
  // Arrange
  const { getByTestId, findByTestId } = render(<ContactForm />)

  const expectedFirstName = "Chris"
  const expectedLastName = "Corvo"
  const expectedEmail = "none@email.com"

  const firstName = getByTestId('firstName')
  const lastName = getByTestId('lastName')
  const email = getByTestId('email')

  const button = getByTestId('submit')

  // Act
  fireEvent.change(firstName, { target: { value: expectedFirstName } })
  fireEvent.change(lastName, { target: { value: expectedLastName } })
  fireEvent.change(email, { target: { value: expectedEmail } })
  fireEvent.click(button)

  // Assert

  expect(firstName.value.length).toBeGreaterThan(3)
  expect(firstName.value).toBe(expectedFirstName)
  expect(lastName.value).toBe(expectedLastName)
  expect(email.value).toBe(expectedEmail)

//   await waitFor(() => findByTestId('print-out'))
})