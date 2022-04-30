import {render } from '@testing-library/react';
import App from './App';

describe('Getflix test suite', () => {
  it('should display the home page', () => {

    const { getByText, getByTestId } = render(<App />);

    expect(getByText("OMDb API")).toBeInTheDocument();
    expect(getByTestId("search-input-field")).toBeInTheDocument();
    expect(getByText("The movie list is empty, please search for them.")).toBeInTheDocument();
  });
});
