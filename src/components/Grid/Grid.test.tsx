import { render } from '@testing-library/react';
import Grid from './Grid';

test('renders Grid', () => {
    const { baseElement } = render(<Grid />);
    expect(baseElement).toBeInTheDocument();
});
