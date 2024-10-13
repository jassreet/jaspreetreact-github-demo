import { render, screen } from '@testing-library/react';
import App from '../App';  // Adjust the path to your App component

test('renders the app component', () => {
    render(<App />);
    const linkElement = screen.getByText(/your expected text/i);
    expect(linkElement).toBeInTheDocument();
});
