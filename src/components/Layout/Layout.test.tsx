import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout'; // Adjust the import path as necessary

describe('Layout Component', () => {
  it('renders the header component', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the children passed to it', () => {
    const testMessage = 'This is a child component';
    render(
      <Layout>
        <div>{testMessage}</div>
      </Layout>
    );

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
