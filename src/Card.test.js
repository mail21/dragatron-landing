import { render, screen } from '@testing-library/react';
import Card from './Card';

test('should renders cards description', () => {
  const mockDataTest = {
    title: 'ALL ACCESS MEMBERSHIP',
    price: '$299/Month',
    listStatus: ['1', '1', '1', '1', '1', '1'],
  };
  render(
    <Card
      isPopular={true}
      price={mockDataTest.price}
      listStatus={mockDataTest.listStatus}
      title={mockDataTest.title}
    />
  );
  expect(screen.getByText('POPULAR.')).toBeInTheDocument();
  expect(screen.getByText('ALL ACCESS MEMBERSHIP')).toBeInTheDocument();
  expect(screen.getByText('Promote yourself & reach thousands of user globaly')).toBeVisible();
});

test('should not render Popular', () => {
  const mockDataTest = {
    title: 'ALL ACCESS MEMBERSHIP',
    price: '$299/Month',
    listStatus: ['1', '1', '1', '1', '1', '1'],
  };
  render(
    <Card
      isPopular={false}
      price={mockDataTest.price}
      listStatus={mockDataTest.listStatus}
      title={mockDataTest.title}
    />
  );
  expect(screen.queryByText('POPULAR.')).not.toBeInTheDocument();
});
