import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IFooterWebpartProps {
  description: string;
  context: WebPartContext;
  prefLang: string;
  wantToStayInTheLoopTitle: string,
  buttonText: string;
  buttonLink: string;
  updateWebPart: () => void;
}
