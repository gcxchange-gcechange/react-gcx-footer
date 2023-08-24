
import * as strings from 'FooterWebpartWebPartStrings';
// import * as english from '../loc/en-us.js';
// import * as french from '../loc/fr-fr.js';

const english = require("../loc/en-us.js")
const french = require("../loc/fr-fr.js")

export function SelectLanguage(lang: string): IFooterWebpartWebPartStrings {
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
