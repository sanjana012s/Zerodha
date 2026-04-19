import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../home/Hero'; // Import the Hero component

describe('Hero Component', () => {
  test('render the hero image', () => {
    render(<Hero />);
    
    const heroImage = screen.getByAltText('Hero Image');

    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', '/media/images/homeHero.png');
  });
});