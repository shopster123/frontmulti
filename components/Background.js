import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { styled } from 'styled-components'
import Logo from '../assets/svgs/mtlg2.svg'
import Menu from '../assets/svgs/menu.svg'
import Back from '../assets/svgs/backSvg.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const HeaderWrapper = styled.div`
        top: -1px;
        z-index: -1;
        width: 100%;
    `
const ContentWrapper = styled.div`
        padding: 1rem 1.5rem;
        background-color: #f5f6f6;
        .cont {
            max-width: 1000px;
            margin: auto;
        }
    `
const LogoWrapper = styled.div`
        text-align: left;
            svg {
                width:66px;
                height: auto;
            }
    `
const SecondWrapper = styled.div`
        height: 85px;
        width: 100%;
        display: flex;
        align-items: center;
        margin: auto;
        max-width: 600px;
        padding-inline: 1rem;
    `
const Title = styled.div`
        font-family: 'HelveticaBold';
        font-size: 14px;
        color: #344854;
    `
const BlueBg = styled.div`
        height: 300px;
        background-color: #1c2b33;
        display: flex;
        align-items: center;
    `

// import { useTranslations } from 'next-intl';

function Background() {
    const t = useTranslations('HelpCenter');

    return (
        <>
            <HeaderWrapper>
                <ContentWrapper>
                    <Row className='align-items-center justify-content-between g-0 cont'>
                        <Col xs={9} md={'11'}>
                            <LogoWrapper>
                                <Logo />
                            </LogoWrapper>
                        </Col>
                        <Col xs={2} md={'auto'}>
                            <Image
                                alt=''
                                src={'/assets/images/person.webp'}
                                width={40}
                                height={40}
                            />
                        </Col>
                        <Col xs={1} md={'auto'}>
                            <Menu />
                        </Col>
                    </Row>
                </ContentWrapper>

                <SecondWrapper>
                    <Row className='w-100 g-0'>
                        <Col>
                            <Title>{t('businessHelpCenter')}</Title>
                        </Col>
                        <Col xs={'6'} className='text-center'>
                            <Row className='gx-2 justify-content-center align-items-center'>
                                <Col xs={'auto'}>
                                    <Back />
                                </Col>
                                <Col xs={'auto'}>
                                    <Title>{t('getSupport')}</Title>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </SecondWrapper>

                <BlueBg>
                    <div className='text-start px-4' style={{ color: '#fff', fontSize: '48px', maxWidth: '1000px', margin: 'auto', letterSpacing: '.5px', lineHeight: '58px' }}>
                        {t('heading')}
                    </div>
                </BlueBg>

                <div className='pt-5 text-start px-4' style={{ maxWidth: '1000px', margin: 'auto' }}>
                    <div className='pb-4' style={{ fontSize: '18px', color: '#465a69' }}>
                        {t('intro')}
                    </div>

                    <div style={{ fontSize: '24px' }} className='pb-4'>
                        {t('beforeYouBegin')}
                    </div>

                    <div className='pb-5' style={{ fontSize: '18px', color: '#465a69' }}>
                        {t('adminNote')}
                    </div>

                    <div style={{ fontSize: '24px' }} className='pb-4'>
                        {t('howToAdd')}
                    </div>

                    <div className='pb-4' style={{ fontSize: '18px', color: '#465a69' }}>
                        {t('stepsTitle')}
                    </div>

                    <div className='pb-4' style={{ fontSize: '18px', color: '#465a69' }}>
                        {t('step1')}
                    </div>

                    <div className='pb-4' style={{ fontSize: '18px', color: '#465a69' }}>
                        {t('step2')} <span className='text-dark fw-bold'>{t('payments')}</span>
                    </div>

                    <div className='pb-4' style={{ fontSize: '18px', color: '#465a69' }}>
                        {t('step3')} <span className='text-dark fw-bold'>{t('add')}</span>
                    </div>

                    <div className='pb-4' style={{ fontSize: '18px', color: '#465a69' }}>
                        {t('step4')}
                    </div>

                    <div className='pb-4' style={{ fontSize: '18px', color: '#465a69' }}>
                        {t('step5')} <span className='text-dark fw-bold'>{t('continue')}</span>, {t('step5Cont')}
                    </div>
                </div>
            </HeaderWrapper>
        </>
    );
}


export default Background