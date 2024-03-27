import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import '@testing-library/jest-dom/extend-expect';
import theme from '../../theme'; 
import Header from './Header'; 

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByText('Cushon ISA')).toBeInTheDocument();
  });

  it('contains a menu button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByLabelText('menu')).toBeInTheDocument();
  });

  it('displays the correct title', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByText('Cushon ISA')).toBeInTheDocument();
  });

  it('has an avatar with the letter U', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    const avatar = screen.getByText('U');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('class', expect.stringContaining('MuiAvatar-root'));
  });

  it('contains "My Account" text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByText('My Account')).toBeInTheDocument();
  });
});
