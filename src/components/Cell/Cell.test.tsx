import { render } from '@testing-library/react';
import Cell from './Cell';

test('renders Cell', () => {
    const { baseElement } = render(<Cell />);
    expect(baseElement).toBeInTheDocument();
});
