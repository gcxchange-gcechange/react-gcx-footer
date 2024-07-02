/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import * as ReactDom from 'react-dom';
// import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

//import * as strings from 'FooterWebpartWebPartStrings';
import FooterWebpart from './components/FooterWebpart';
import { IFooterWebpartProps } from './components/IFooterWebpartProps';
import { SelectLanguage } from './components/SelectLanguage';

export interface IFooterWebpartWebPartProps {
  description: string;
  prefLang: string;
  wantToStayInTheLoopTitle: string;
  buttonText: string;
  buttonTitle: string;
  buttonLink: string;
}

export default class FooterWebpartWebPart extends BaseClientSideWebPart<IFooterWebpartWebPartProps> {
  private strings:IFooterWebpartWebPartStrings;
  protected async onInit(): Promise<void> {
    this.strings=SelectLanguage(this.properties.prefLang);
  }
  public updateWebPart= async () => {
    this.context.propertyPane.refresh();
    this.render();
  }

  public render(): void {
    const element: React.ReactElement<IFooterWebpartProps> = React.createElement(
      FooterWebpart,
      {
        description: this.properties.description,
        context: this.context,
        prefLang: this.properties.prefLang,
        wantToStayInTheLoopTitle: this.properties.wantToStayInTheLoopTitle,
        buttonText: this.properties.buttonText,
        buttonTitle: this.properties.buttonTitle,
        buttonLink: this.properties.buttonLink,
        updateWebPart:this.updateWebPart
      }
    );
    ReactDom.render(element, this.domElement);
  }



  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  // protected get dataVersion(): Version {
  //   return Version.parse('1.0');
  // }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: this.strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: this.strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: this.strings.DescriptionFieldLabel
                }),
                PropertyPaneDropdown('prefLang', {
                  label: 'Preferred Language',
                  options: [
                    { key: 'account', text: 'Account' },
                    { key: 'en-us', text: 'English' },
                    { key: 'fr-fr', text: 'Français' }
                  ],
                  selectedKey: this.strings.userLang,
                }),
                PropertyPaneTextField('wantToStayInTheLoopTitle', { 
                  label: 'Text for Staying In The Loop'
                }),
                PropertyPaneTextField('buttonText', {
                  label: 'Text for Button',
                }),
                PropertyPaneTextField('buttonTitle', {
                  label: 'Title for Button',
                }),
                PropertyPaneTextField('buttonLink', {
                  label: 'URL for Button',
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
