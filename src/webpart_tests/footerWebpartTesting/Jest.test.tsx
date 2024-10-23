///<reference types="jest"/>


import * as React from 'react';
import { render } from '@testing-library/react';
import FooterWebpart from '../../webparts/footerWebpart/components/FooterWebpart';
import { IFooterWebpartProps } from '../../webparts/footerWebpart/components/IFooterWebpartProps';
import { WebPartContext } from '@microsoft/sp-webpart-base';


//describe ("Child Component", () => {
//  it ("should render child component", () => {
//    render (<FooterWebpartWebPart/>)
//  });

 // it ("should contain Hello in content", () => {
   // const {getByText} = render (<FooterWebpart/>);
    //const text = getByText('Hello');
    //expect(text).toBeDefined();
  //});
//});

describe("FooterWebpart Component", () => {
    const defaultProps: IFooterWebpartProps = {
        prefLang: 'en',
        wantToStayInTheLoopTitle: 'Stay Updated',
        buttonText: 'Subscribe',
        updateWebPart: jest.fn(),
        description: '',
        context: new WebPartContext,
        buttonLink: ''
    };

    it("should render the FooterWebpart component", () => {
        const { container } = render(<FooterWebpart {...defaultProps} />);
        expect(container).toBeInTheDocument();
    });
    
      it("should display the want to stay in the loop title", () => {
        const { getByText } = render(<FooterWebpart {...defaultProps} />);
        const title = getByText('Stay Updated');
        expect(title).toBeDefined();
      });
    
      it("should contain a button with the correct text", () => {
        const { getByText } = render(<FooterWebpart {...defaultProps} />);
        const button = getByText('Subscribe');
        expect(button).toBeDefined();
        expect(button.closest('a')).toHaveAttribute('href', 'https://example.com/subscribe');
      });
    
      it("should render all sections correctly", () => {
        const { getByText } = render(<FooterWebpart {...defaultProps} />);
        expect(getByText('About Us')).toBeDefined();
        expect(getByText('Site Links')).toBeDefined();
        expect(getByText('Support Links')).toBeDefined();
      });
});
