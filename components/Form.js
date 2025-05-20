import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl';


const Wrapper = styled.div`
   
    margin: auto;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 54px;
    padding-block: 1rem;

    .redborder {
        border: 1px solid red !important;
    }
    button:disabled {
        opacity: 0.7;
    }

    .radioContainer {
        display: flex;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 15px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: 0.75rem;
        color: #1C2B33;
        font-weight: 500;
        justify-content: space-between;
        align-items: center
    }

    .radioContainer input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        height: 22px;
        width: 22px;
        background-color: #fff;
        border-radius: 50%;
        display: grid;
        place-items: center;
        box-sizing: border-box;
    }

    .radioContainer:hover {
        background-color: #cccccc50;

    }

    .radioContainer input:checked ~ .checkmark {
        /* background-color: #2196F3; */

        background-color: #2196f3;
    }

    .checkmark:after {
        content: "";
        /* position: absolute; */
        display: none;
    }

    .radioContainer input:checked ~ .checkmark:after {
    display: block;
    }

    /* Style the indicator (dot/circle) */
    .radioContainer .checkmark:after { 
        width: 11px;
        height: 11px;
        border-radius: 50%;
        box-sizing: content-box;
        border: 3px solid #fff;
    }
`
const Container = styled.div`
    max-width: 700px;
    margin: auto;
    width: calc(100% - 2rem);
`

const Title = styled.div`
    font-weight: 700;
    color: #1C2B33;
    font-size: 24px;
`

const Btn = styled.button`
    background-color: #0064e0;
    border: 1px solid #0064e0;
    width: 100%;
    color: white;
    font-size: 13px;
    font-weight: 500;
    padding: 14px 20px;
    border-radius: 50px;
    text-transform: none;
    line-height: 1;
`
const Spinner = styled.div`
    width: 15px;
    height: 15px;
    border: 2px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`

function Form({ setStep }) {

    const t = useTranslations('SupportStep')
    return (
        <Container>
            <div className='pt-4 pt-md-0'>
                <Title>
                    {t('title')}
                </Title>
            </div>
            <div className='pt-2' style={{ color: '#1C2B33', fontSize: '16px', lineHeight: 1.3, fontWeight: 600 }}>
                {t('subtitle')}
            </div>

            <Wrapper>
                <label className="radioContainer">
                    {t('options.blocked')}
                    <input type="radio" name="radio" />
                    <div className="checkmark"></div>
                </label>
                <label className="radioContainer">
                    {t('options.pageRestricted')}
                    <input type="radio" name="radio" />
                    <div className="checkmark"></div>
                </label>
                <label className="radioContainer">
                    {t('options.adAccountDisabled')}
                    <input type="radio" name="radio" />
                    <div className="checkmark"></div>
                </label>
                <label className="radioContainer">
                    {t('options.failedPayment')}
                    <input type="radio" name="radio" />
                    <div className="checkmark"></div>
                </label>
                <label className="radioContainer">
                    <div style={{ flexShrink: 1, width: 'calc(100% - 22px)' }}>
                        {t('options.unauthorizedAccess')}
                    </div>
                    <input type="radio" name="radio" />
                    <div className="checkmark"></div>
                </label>
                <label className="radioContainer">
                    {t('options.other')}
                    <input type="radio" name="radio" />
                    <span className="checkmark"></span>
                </label>
                <div className="text-end">
                    <Btn onClick={() => { setStep(2) }}>
                        {t('continue')}
                    </Btn>
                </div>
            </Wrapper>
        </Container>
    )

}

export default Form