import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeInTheDocument();
});
