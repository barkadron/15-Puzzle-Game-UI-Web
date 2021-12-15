import { render } from '@testing-library/react';
import Main from './Main';

test('renders Main', () => {
  const { baseElement } = render(<Main />);
  expect(baseElement).toBeInTheDocument();
});
