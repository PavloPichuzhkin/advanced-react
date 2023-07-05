import React from 'react'
import { useTranslation } from 'react-i18next'
import { Test } from 'entities/Test'

const AboutPage = () => {
    const { t } = useTranslation('about')
    return (
        <div>
            <Test defaultCount={5}/>
            <div>
                {t('About Page')}
            </div>
            <div>
                {t('description.part1')}
                {t('Test')}
            </div>
        </div>
    )
}

export default AboutPage
