import React from 'react'
import { useTranslation } from "react-i18next"
import "./FAQPage.css"

const FAQPage = () => {

    const { t, i18n } = useTranslation()
    return (
        <>
            <div className="container">
                <h2>{t("faq.question1")}</h2>
                <p>{t("faq.text")}</p>
                <h3>{t("faq.subtitle1")}</h3>
                <p>{t("faq.text2")}</p>
                <p>{t("faq.example")}</p>
                <h3>{t("faq.chooseFilters")}</h3>
                <p>{t("faq.afterFilters")}</p>
                <h3>{t("faq.chooseCurrency")}</h3>
                <h3>{t("faq.possibleCurrency")}</h3>
                <h2>{t("faq.display")}</h2>
                <ol>
                    <li className='faqList'><p>{t("faq.prices")}</p></li>
                    <li className='faqList'><p>{t("faq.income")}</p></li>
                </ol>
                <h3>{t("faq.sort")}</h3>
            </div>
        </>
    )
}

export default FAQPage;

