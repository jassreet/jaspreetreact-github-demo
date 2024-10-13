import { render, screen} from '@testing-library/react';
import App from '../App';

test('renders Hello Deveops text', () => {
    render(<App/>)
    
    const helloEvent = screen.getByText(/Hello Deveops!/i);

    expect(helloElement).toBeInTheDocument();

});
