import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });

  it('ball increments, resets balls and strikes', () => {
    const { getByText } = render(<Dashboard />);
    const btn = getByText(/add ball/i);
    const balls = document.querySelector('#balls');
    const strikes = document.querySelector('#strikes');
    fireEvent.click(btn);
    fireEvent.click(btn);
    getByText(balls, /2/);
    fireEvent.click(btn);
    getByText(balls, /3/);
    fireEvent.click(btn);
    getByText(balls, /0/);
    getByText(strikes, /0/);
  });

  it('strike increments, resets balls and strikes', () => {
    const { getByText } = render(<Dashboard />);
    const btn = getByText(/add strike/i);
    const balls = document.querySelector('#balls');
    const strikes = document.querySelector('#strikes');

    fireEvent.click(btn);
    getByText(strikes, /1/);
    fireEvent.click(btn);
    getByText(strikes, /2/);
    fireEvent.click(btn);
    getByText(strikes, /0/);
    getByText(balls, /0/);
  });

  it('fouls increment strikes to a max of 2', () => {
    const { getByText } = render(<Dashboard />);
    const btn = getByText(/add foul/i);
    const strikes = document.querySelector('#strikes');

    fireEvent.click(btn);
    getByText(strikes, /1/);
    fireEvent.click(btn);
    getByText(strikes, /2/);
    fireEvent.click(btn);
    getByText(strikes, /2/);
  });

  it('hits increment hits and reset balls and strikes', () => {
    const { getByText } = render(<Dashboard />);
    const btn = getByText(/add hit/i);
    const btnballs = getByText(/add ball/i);
    const btnstrikes = getByText(/add strike/i);
    const balls = document.querySelector('#balls');
    const strikes = document.querySelector('#strikes');
    const hits = document.querySelector('#hits');

    fireEvent.click(btn);
    getByText(hits, /1/);
    fireEvent.click(btnballs);
    getByText(balls, /1/);
    getByText(hits, /1/);
    fireEvent.click(btnstrikes);
    getByText(balls, /1/);
    getByText(strikes, /1/);
    getByText(hits, /1/);
    fireEvent.click(btn);
    getByText(balls, /0/);
    getByText(strikes, /0/);
    getByText(hits, /2/);
  });
});


