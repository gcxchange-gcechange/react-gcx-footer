declare interface IFooterWebpartWebPartStrings {
  userLang:string;
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  //AboutUsTitle: string;
  //SiteLinksTitle: string;
  //SupportLinksTitle: string;
  WantToStayInTheLoopLinksTitle: string;
  LinkAboutUs: string;
  LinkTerms: string;
  LinkPrivacy: string;
  LinkSupport: string;
  URLAboutUs: string;
  URLTerms: string;
  URLPrivacy: string;
  URLSupport: string;
  URLIntranet: string;
  URLCampus: string;
  LabelCampus:string;
  URLPedia: string;
  LinkGCXchangeDirectory:string;
  URLGCXchangeDirectory:string;
  GovImage:string;
  CanadaImage:string;
  ProtectedTerms: string;
  ProtectedTermsURL: string;
  LinkAccessibility: string;
  URLAccessibility: string;
  GCXchangeColumnTitle:string;
  ExploreColumnTitle: string;
  SupportColumnTitle:string;
  ResourcesColumnTitle: string;
  LinkCommunities:string;
  URLCommunities:string;
  LinkCareerMarketplace: string;
  URLCareerMarketplace: string;
  FAQLink: string;
  URLFAQ: string;
  AskMeAnythingLink: string;
  URLAskMeAnything: string;
}

declare module 'FooterWebpartWebPartStrings' {
  const strings: IFooterWebpartWebPartStrings;
  export = strings;
}
