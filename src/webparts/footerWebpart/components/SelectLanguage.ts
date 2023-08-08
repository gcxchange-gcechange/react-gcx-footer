import * as strings from 'FooterWebpartWebPartStrings';
import * as french from '../loc/fr-fr.js';
import * as english from '../loc/en-us.js';


export function SelectLanguage(lang:string):IFooterWebpartWebPartStrings {
  switch(lang) {
    case "en-us": {
      return english;
    }
    case "fr-fr": {
      return french;
    }
    default: {
      return strings;
    }
 }
}