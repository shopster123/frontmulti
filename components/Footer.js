import React from 'react'
import  Mta from '../assets/images/mta.svg'
import styled from 'styled-components'
import { useTranslations } from 'next-intl';


const Wrapper = styled.div`
    background-color: #407FFE;
    margin-top: 70px;
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;
    color: #fff;
    p {
        margin-bottom: 10px;
    }
    .fontbold {
        font-weight: bold;
    }
    .row p {
        font-size: 14px;
    }
`
function Footer() {
    const t = useTranslations('Footer')
    return (
    <Wrapper className="footer" id="futeri">
        <div className="container">
            <Mta width={100} />
            <p className='py-4'>
                {t('intro')} <span>{t('metaPage')}</span>
            </p>

            <div className="row text-start">
                <div className="col-lg col-6">
                    <p className="fontbold">{t('sections.marketing.title')}</p>
                    <p>{t('sections.marketing.success')}</p>
                    <p>{t('sections.marketing.measurement')}</p>
                    <p>{t('sections.marketing.industries')}</p>
                    <p>{t('sections.marketing.inspiration')}</p>
                    <p>{t('sections.marketing.events')}</p>
                    <p>{t('sections.marketing.news')}</p>
                    <p>{t('sections.marketing.sitemap')}</p>
                </div>

                <div className="col-lg col-6">
                    <p className="fontbold">{t('sections.objectives.title')}</p>
                    <p>{t('sections.objectives.presence')}</p>
                    <p>{t('sections.objectives.awareness')}</p>
                    <p>{t('sections.objectives.discovery')}</p>
                    <p>{t('sections.objectives.leads')}</p>
                    <p>{t('sections.objectives.sales')}</p>
                    <p>{t('sections.objectives.loyalty')}</p>
                </div>

                <div className="col-lg col-6">
                    <p className="fontbold">{t('sections.pages.title')}</p>
                    <p>{t('sections.pages.getStarted')}</p>
                    <p>{t('sections.pages.setup')}</p>
                    <p>{t('sections.pages.manage')}</p>
                    <p>{t('sections.pages.promote')}</p>
                    <p>{t('sections.pages.messaging')}</p>
                    <p>{t('sections.pages.insights')}</p>
                </div>

                <div variant="dontshowonmobile col-lg" className="col">
                    <p className="fontbold">{t('sections.ads.title')}</p>
                    <p>{t('sections.ads.getStarted')}</p>
                    <p>{t('sections.ads.buying')}</p>
                    <p>{t('sections.ads.formats')}</p>
                    <p>{t('sections.ads.placement')}</p>
                    <p>{t('sections.ads.audience')}</p>
                    <p>{t('sections.ads.measure')}</p>
                    <p>{t('sections.ads.manage')}</p>
                </div>

                <div className="col-lg col-6">
                    <p className="fontbold">{t('sections.resources.title')}</p>
                    <p>{t('sections.resources.adsGuide')}</p>
                    <p>{t('sections.resources.helpCenter')}</p>
                    <p>{t('sections.resources.audienceNetwork')}</p>
                    <p>{t('sections.resources.blueprint')}</p>
                    <p>{t('sections.resources.developers')}</p>
                    <p>{t('sections.resources.partners')}</p>
                    <p>{t('sections.resources.instagram')}</p>
                    <p>{t('sections.resources.support')}</p>
                </div>
            </div>
        </div>
    </Wrapper>
)

}

export default Footer