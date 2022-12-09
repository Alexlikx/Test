import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../../UI/Card/Card';
import Container from '../../UI/Container.styled';
import SmallTitle from '../../UI/SmallTitleOfBlock/SmallTitle';
import TitleOfBlock from '../../UI/TitleOfBlock/TitleOfBlock';
import StyledServices from './Services.styled';
import icon1 from './svg/icon.svg';
import icon2 from './svg/icon3.svg';
import icon3 from './svg/icon2.svg';
import iconn5 from './svg/iconn5.svg';
import cafe from './svg/cafe.svg';
import map from './svg/map.svg';
import trending from './svg/trending.svg';
import scheme from './svg/scheme.svg';
import audit from './svg/audit.svg';
import optimization from './svg/optimizatoin.svg';
import { motion } from 'framer-motion';

const Services = () => {
    const { t } = useTranslation();


    const AnimationText = {
        hidden: {
            opacity: 0,
            y: 70,
        },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2 },
        }),
    };

    const changeTab = (e) => {
        const path = e.target.dataset.set;
        document.querySelectorAll('.tab').forEach(e => e.classList.remove('active'));
        document.querySelector(`[data-target="${path}"]`).classList.add('active');
        document.querySelectorAll('.tab-link').forEach(e => e.classList.remove('active-link'));
        e.target.classList.add('active-link');
    }

    return (
        <StyledServices id='services'>
            <TitleOfBlock title={t('description.services')} />
            <div className='services-tabs'>
                <div className="tabs-headers">
                    <Container>
                        <div className="tabs-links">
                            <div>
                                <p onClick={changeTab} data-set='one' className='tab-link active-link'>{t('description.service1')}</p>
                            </div>
                            <div>
                                <p onClick={changeTab} data-set='two' className='tab-link'>{t('description.service2')}</p>
                            </div>
                            {/* <div>
                                <p onClick={changeTab} data-set='three' className='tab-link'>{t('description.service3')}</p>
                            </div>
                            <div>
                                <p onClick={changeTab} data-set='four' className='tab-link'>{t('description.service4')}</p>
                            </div> */}
                            <div>
                                <p onClick={changeTab} data-set='five' className='tab-link'>{t('description.service5')}</p>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='tabs-content'>
                    <Container>
                        <div className="grid-tabs">
                            <div className="tab-1 tab active" data-target='one'>
                                <motion.div className="grid-tab" initial={"hidden"}
                                    whileInView={"visible"}
                                    variants={AnimationText}
                                    custom={0}>
                                    <Card svg={icon1} title={t('description.corporateFinance1')} />
                                    <Card svg={icon2} title={t('description.corporateFinance2')} />
                                    <Card svg={icon3} title={t('description.corporateFinance3')} />
                                </motion.div>
                            </div>
                            <div className="tab-2 tab" data-target='two'>
                                <SmallTitle title={t('description.service4')} />
                                <motion.div className="grid2-tab" initial={"hidden"}
                                    whileInView={"visible"}
                                    variants={AnimationText}
                                    custom={0}>
                                    <Card svg={audit} title={t('description.MarketAnalytics1')} />
                                    <Card svg={icon2} title={t('description.MarketAnalytics2')} />
                                    <Card svg={icon3} title={t('description.MarketAnalytics3')} />
                                </motion.div>
                                <SmallTitle title={t('description.service3')} />
                                <motion.div className="grid2-tab" initial={"hidden"}
                                    whileInView={"visible"}
                                    variants={AnimationText}
                                    custom={0}>
                                    <Card svg={iconn5} title={t('description.RealEstate1')} />
                                    <Card svg={map} title={t('description.RealEstate2')} />
                                    <Card svg={optimization} title={t('description.RealEstate3')} />
                                    <Card svg={scheme} title={t('description.RealEstate4')} />
                                    <Card svg={trending} title={t('description.RealEstate5')} />
                                </motion.div>
                            </div>
                            {/* <div className="tab-3 tab" data-target='three'>
                                <motion.div className="grid-tab-5" initial={"hidden"}
                                    whileInView={"visible"}
                                    variants={AnimationText}
                                    custom={0}>
                                    <Card svg={iconn5} title={t('description.RealEstate1')} />
                                    <Card svg={map} title={t('description.RealEstate2')} />
                                    <Card svg={optimization} title={t('description.RealEstate3')} />
                                    <Card svg={scheme} title={t('description.RealEstate4')} />
                                    <Card svg={trending} title={t('description.RealEstate5')} />
                                </motion.div>
                            </div>
                            <div className="tab-4 tab" data-target='four'>
                                <motion.div className="grid-tab" initial={"hidden"}
                                    whileInView={"visible"}
                                    variants={AnimationText}
                                    custom={0}>
                                    <Card svg={audit} title={t('description.MarketAnalytics1')} />
                                    <Card svg={icon2} title={t('description.MarketAnalytics2')} />
                                    <Card svg={icon3} title={t('description.MarketAnalytics3')} />
                                </motion.div>
                            </div> */}
                            <div className="tab-5 tab" data-target='five'>
                                <motion.div className="grid-tab" initial={"hidden"}
                                    whileInView={"visible"}
                                    variants={AnimationText}
                                    custom={0}>
                                    <Card svg={cafe} title={t('description.FoodServices')} />
                                </motion.div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div >
        </StyledServices >
    );
}

export default Services;
