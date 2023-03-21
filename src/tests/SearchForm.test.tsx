import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import SearchForm from "../components/SearchForm";

const handFetch = (location: string, term:string):void => {}

test('loading spinner is on when fetch is taking place', () => {
  render(<SearchForm  handFetch={handFetch} isLoading={true} title="Search Form"/>);

  expect(screen.getByRole('status')).toBeTruthy()
});
test('should contain form inputs that work', () => {
  render(<SearchForm  handFetch={handFetch} isLoading={false} title="Search Form"/>);
  let location = screen.getByPlaceholderText('Location');
  let term = screen.getByPlaceholderText('Term');

  expect(location).toBeTruthy()
  expect(term).toBeTruthy()

  fireEvent.change(location,{target: { value: "New York"}})
  fireEvent.change(term,{target: { value: "Pizza"}})

  // @ts-ignore
  expect(location.value).toBe("New York");
  // @ts-ignore
  expect(term.value).toBe("Pizza");
});
