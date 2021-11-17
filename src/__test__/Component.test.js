import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { MemoryRouter } from 'react-router';
import ProductList from '../components/ProductList';

it('renders home text', async () => {
  render(
    <MemoryRouter>  
      <Home />
    </MemoryRouter>
  );  
  const headingElement = screen.getByText(/Home/i)
  expect(headingElement).toBeInTheDocument();
});

it('renders api call', async () => {
  render(
    <MemoryRouter>  
      <ProductList />
    </MemoryRouter>
  );  
  const headingElement = await screen.findByText(/Home/i)
  expect(headingElement).toBeInTheDocument();
});
