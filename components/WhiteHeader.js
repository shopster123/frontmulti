import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Mta from '../assets/svgs/mtlg2.svg'
import Burger from '../assets/svgs/burger.svg'
import { useTranslations } from 'next-intl';

const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    text-align: left;
    height: 54px;
    display:flex;
    align-items: center;
    z-index:999 ;
`

function WhiteHeader() {
    const header = useRef(null)
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const wrapper = header.current;
        if (scrollY >= 50) {
            wrapper.style.backgroundColor = 'white';
        } else {
            wrapper.style.backgroundColor = 'transparent';
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const t = useTranslations('MobileHeader')
    return (
        <Wrapper ref={header} className='d-flex d-lg-none'>
            <Container fluid="lg" className='px-3 px-lg-5 d-block d-lg-none'>
                <Row className='align-items-center justify-content-between'>
                    <Col xs="auto">
                        <Mta />
                    </Col>
                    <Col xs="auto" className='d-none d-md-block'>
                        <Row className='gx-3 align-items-center'>
                            <Col xs="auto">
                                <span style={{ fontWeight: 600, fontSize: '14px' }}>
                                    {t('getStarted')}
                                </span>
                            </Col>
                            <Col xs="auto">
                                <span style={{ fontWeight: 600, fontSize: '14px' }}>
                                    {t('advertise')}
                                </span>
                            </Col>
                            <Col xs="auto">
                                <span style={{ fontWeight: 600, fontSize: '14px' }}>
                                    {t('learn')}
                                </span>
                            </Col>
                            <Col xs="auto">
                                <span style={{ fontWeight: 600, fontSize: '14px' }}>
                                    {t('support')}
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="auto" className='d-none d-md-block'>
                        <span style={{ fontWeight: 600, fontSize: '14px' }}>
                            {t('helpCenter')}
                        </span>
                    </Col>
                    <Col xs="auto" className='d-block d-md-none'>
                        <Burger />
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )

}

export default WhiteHeader