import { render } from '@testing-library/react';
import Header from './Header';

test('renders Header', () => {
  const { baseElement } = render(<Header />);
  expect(baseElement).toBeInTheDocument();
});
