import { render, screen } from '@testing-library/react';
import {Slider} from "./components/Slider";
import App from './App';



test("Slider Checking whether it works or not", () => {
  render(<Slider />);
})