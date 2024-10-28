///<reference types="jest"/>

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import FooterWebpart from '../components/FooterWebpart';
import { IFooterWebpartProps } from '../components/IFooterWebpartProps'; 
import { WebPartContext } from '@microsoft/sp-webpart-base';
import '@testing-library/jest-dom';


describe("FooterWebpart Component", () => {
  const mockProps: IFooterWebpartProps = {
    description: 'This is a footer description',
    prefLang: 'en-us',
    wantToStayInTheLoopTitle: 'Stay in the loop',
    buttonText: 'Subscribe to the Newsletter',
    buttonLink: 'https://example.com',
    updateWebPart: jest.fn(),
    context: new WebPartContext
  };

  it("should render FooterWebpart component", () => {
    render(<FooterWebpart {...mockProps} />);
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it("should render the 'Stay in the loop' title", () => {
    render(<FooterWebpart {...mockProps} />);
    expect(screen.getByText(mockProps.wantToStayInTheLoopTitle)).toBeInTheDocument();
  });
});

