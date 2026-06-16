
import * as React from 'react';
import styles from './FooterWebpart.module.scss'
import { IFooterWebpartProps } from './IFooterWebpartProps';
import { Image, ImageFit, IImageProps, Stack, StackItem} from "@fluentui/react";
import { SelectLanguage } from './SelectLanguage';
 


export default class FooterWebpart extends React.Component<IFooterWebpartProps> {

  public strings = SelectLanguage(this.props.prefLang);

  public componentDidUpdate = async (prevProps: IFooterWebpartProps): Promise<void> => {
    if (prevProps.prefLang !== this.props.prefLang) {
      this.strings = SelectLanguage(this.props.prefLang);
      await this.props.updateWebPart();
    }
  };

  public render(): React.ReactElement<IFooterWebpartProps> {
    // const aburl= this.props.context.pageContext.web.absoluteUrl;
    const {
      wantToStayInTheLoopTitle,
      buttonText,
      buttonLink
    } = this.props;
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

    const isButtonPropertiesAvailable = buttonText && buttonLink;

    // const customSpacingStackTokens: IStackTokens = {
    //   childrenGap: '44'
    // };


      return (
      <footer className={styles.footerWebpart} role="contentinfo">
        <div className={styles.container}>
          <div className={styles.row}>
            <Stack horizontal wrap   horizontalAlign="space-between">
              <StackItem grow={false} className={styles.footerColumn} style={{marginRight:'22px'}}>
                <section aria-labelledby="gcxchange-heading">
                  <h3 className={ styles.footerHeadLabel } id="gcxchange-heading">{this.strings.GCXchangeColumnTitle}</h3>
                  <ul className={ styles.footerList }>
                    <li><a href={`${this.strings.URLAboutUs}`} target="_blank" rel="noreferrer">{this.strings.LinkAboutUs}</a></li>
                    <li><a href={`${this.strings.URLTerms}`}>{this.strings.LinkTerms}</a></li>
                    <li><a href={`${this.strings.URLPrivacy}`}>{this.strings.LinkPrivacy}</a></li>
                    <li><a href={`${this.strings.URLAccessibility}`}>{this.strings.LinkAccessibility}</a></li>
                  </ul>
                </section>
              </StackItem>
             
              <StackItem grow={false} className={styles.footerColumn} style={{marginRight:'22px', marginLeft:'22px'}}>
                <section aria-labelledby="explore-heading">
                  <h3 className={ styles.footerHeadLabel } id="explore-heading">{this.strings.ExploreColumnTitle}</h3>
                  <ul className={ styles.footerList }>
                    <li><a href={`${this.strings.URLCommunities}`} target="_blank" rel="noreferrer">{this.strings.LinkCommunities}</a></li>
                    <li><a href={`${this.strings.URLCareerMarketplace}`} target="_blank" rel="noreferrer">{this.strings.LinkCareerMarketplace}</a></li>
                  </ul>
                </section>
              </StackItem>
              
              <StackItem grow={false} className={styles.footerColumn} style={{marginRight:'22px', marginLeft:'22px'}}>
                <section aria-labelledby="support-heading">
                  <h3 className={ styles.footerHeadLabel } id="support-heading">{this.strings.SupportColumnTitle}</h3>
                  <ul className={ styles.footerList }>
                    <li><a href={`${this.strings.URLSupport}`} target="_blank" rel="noreferrer">{this.strings.LinkSupport}</a></li>
                    <li><a href={`${this.strings.URLFAQ}`} target="_blank" rel="noreferrer">{this.strings.FAQLink}</a></li>
                    <li><a href={`${this.strings.URLGCXchangeDirectory}`}  target="_blank" rel="noreferrer">{this.strings.LinkGCXchangeDirectory}</a></li>
                    <li><a href={`${this.strings.AskMeAnythingLink}`} target="_blank" rel="noreferrer">{this.strings.AskMeAnythingLink}</a></li>
                  </ul>
                </section>
              </StackItem>
                
              <StackItem grow={false} className={styles.footerColumn} style={{marginLeft:'22px'}}>
                 <section aria-labelledby="resources-heading">
                    <h3 className={ styles.footerHeadLabel } id="resources-heading">{this.strings.ResourcesColumnTitle}</h3>
                    <ul className={ styles.footerList }>
                      <li><a href={`${this.strings.URLIntranet}`} target="_blank" rel="noreferrer">GCintranet</a></li>
                      <li><a href={`${this.strings.URLPedia}`} target="_blank" rel="noreferrer">GCpedia</a></li>
                      <li><a href="https://gccollab.ca/" target="_blank" rel="noreferrer">GCcollab</a></li>
                      <li><a href={`${this.strings.URLCampus}`} target="_blank" rel="noreferrer">{this.strings.LabelCampus}</a></li>
                    </ul>
                  </section>
              </StackItem>
          
                {isButtonPropertiesAvailable && (
                  <section aria-labelledby="want-to-stay-in-the-loop">
                      <h3 className={ styles.footerHeadLabel } id="want-to-stay-in-the-loop">{wantToStayInTheLoopTitle}</h3>
                      <ul className={ styles.button }>
                          {buttonText && buttonLink && (
                            <a href={`${buttonLink}`} target="_blank" rel="noreferrer" className={styles.newsletterButton}>
                          {buttonText}
                        </a>
                        )}
                      </ul>
                  </section>
                )}

            </Stack>
          </div>

        <div className={styles.row}>              
          <Stack  horizontal horizontalAlign='space-between' wrap>
                <StackItem>
                  <Image {...fip1} alt={this.strings.GovImage}/>
                </StackItem>
                <StackItem style={{marginRight:'62px'}}>
                  <Image {...fip2} alt={this.strings.CanadaImage} className={styles.fipImg} />
                </StackItem>

          </Stack>
        </div>
      </div>      
      </footer>
    );
  }
}
