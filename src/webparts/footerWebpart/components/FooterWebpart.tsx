import * as React from 'react';
import styles from './FooterWebpart.module.scss';
import { IFooterWebpartProps } from './IFooterWebpartProps';
import { Image, ImageFit, IImageProps } from 'office-ui-fabric-react';
import { escape } from '@microsoft/sp-lodash-subset';

import { SelectLanguage } from './SelectLanguage';


export default class FooterWebpart extends React.Component<IFooterWebpartProps, {}> {

  public strings = SelectLanguage(this.props.prefLang);

  public render(): React.ReactElement<IFooterWebpartProps> {
    console.log(this.props.context.pageContext);
    const fip1: IImageProps = {
      src: require("../../../../assets/sig-en.svg"),
      imageFit: ImageFit.contain,
      width: 300,
      height: 150,
    };
    const fip2: IImageProps = {
      src: require("../../../../assets/wmms.svg"),
      imageFit: ImageFit.contain,
      width: 180,
      height: 140,
    };

    return (
      <footer className={ styles.footerWebpart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className="ms-Grid">
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-lg4">
                  <div className={ styles.footerHeadLabel }>{this.strings.AboutUsTitle}</div>
                  <ul className={ styles.footerList }>
                    <li><a href={`${this.strings.URLAboutUs}`} target="_blank">{this.strings.LinkAboutUs}</a></li>
                    <li><a href={`${this.strings.URLTerms}`}>{this.strings.LinkTerms}</a></li>
                    <li><a href={`${this.strings.URLPrivacy}`}>{this.strings.LinkPrivacy}</a></li>
                  </ul>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-lg4">
                  <div className={ styles.footerHeadLabel }>{this.strings.SiteLinksTitle}</div>
                  <ul className={ styles.footerList }>
                    <li><a href={`${this.strings.URLIntranet}`} target="_blank">GCintranet</a></li>
                    <li><a href="https://gcconnex.gc.ca/" target="_blank">GCconnex</a></li>
                    <li><a href={`${this.strings.URLCampus}`} target="_blank">GCcampus</a></li>
                    <li><a href={`${this.strings.URLPedia}`} target="_blank">GCpedia</a></li>
                    <li><a href="https://gccollab.ca/" target="_blank">GCcollab</a></li>
                  </ul>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-lg4">
                  <div className={ styles.footerHeadLabel }>{this.strings.SupportLinksTitle}</div>
                  <ul className={ styles.footerList }>
                    <li><a href={`${this.strings.URLSupport}`} target="_blank">{this.strings.LinkSupport}</a></li>
                  </ul>
                </div>
              </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg6">
                  <Image
                    {...fip1}
                    alt=""
                  />
                </div>
                <div className="ms-Grid-col ms-lg6">
                  <Image
                    {...fip2}
                    alt=""
                    className={styles.fipImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
