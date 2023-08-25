/* eslint-disable @typescript-eslint/no-var-requires */

import * as strings from 'FooterWebpartWebPartStrings';

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
