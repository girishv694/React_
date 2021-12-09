import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Girishv', () => {
  render(<App />);
  const linkElement = screen.getByText(/Girishv/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders paragraph', () => {
  render(<App />);
  const another = document.querySelector(".paragraph")

  expect(another).toBeInTheDocument();
});


test('renders myid', () => {
  render(<App />);
  const another = screen.getByTestId("name")

  expect(another).toBeInTheDocument();
  expect(another).toHaveTextContent("my name")
});


test('renders value', () => {
  render(<App />);
  const another = document.querySelector(".value")

  expect(another).toBeInTheDocument();
  expect(another).toHaveTextContent(0)
});


test('render button',() =>{
  const {getByText} = render(<App/>);
  const another = document.querySelector("button");
  expect(another).toBeInTheDocument();
  expect(another).toHaveTextContent("ADD")
 
})

