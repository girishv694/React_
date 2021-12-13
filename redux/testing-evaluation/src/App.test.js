import { render, screen } from '@testing-library/react';
import App from './App';
import convert from './Convert'
import Conv from './Conv'

test('renders Home page ', () => {
  render(<App />);
  const linkElement = screen.getByText(/KB to MB/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Home page ', () => {
  render(<App />);
  const linkElement = screen.getByText(/MB to KB/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders KB to MB page ', () => {
  expect(convert(1024)).toBe("1.000");
});

test('renders MB to KB page ', () => {
  expect(Conv(2)).toBe("2048.000");
});




