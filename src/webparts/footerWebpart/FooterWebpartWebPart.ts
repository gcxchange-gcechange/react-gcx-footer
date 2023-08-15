import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
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
}

export default class FooterWebpartWebPart extends BaseClientSideWebPart<IFooterWebpartWebPartProps> {
  private strings:IFooterWebpartWebPartStrings;

  public render(): void {
    const element: React.ReactElement<IFooterWebpartProps> = React.createElement(
      FooterWebpart,
      {
        description: this.properties.description,
        context: this.context,
        prefLang: this.properties.prefLang,
      }
    );
    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    this.strings=SelectLanguage(this.properties.prefLang);
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
              ]
            }
          ]
        }
      ]
    };
  }
}
