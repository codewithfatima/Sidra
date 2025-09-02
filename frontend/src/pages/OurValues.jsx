import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


const OurValues = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.dir() === 'rtl';

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen bg-yellow-50 px-8 py-12 ${isRTL ? 'text-right' : 'text-left'} sm:px-6 md:px-10 lg:px-16 text-black leading-relaxed`}>

      <h1 className='text-5xl font-bold mt-20 text-center sm:text-4xl md:text-5xl'>
        {t("ourValuesTitle")}
      </h1>
      <span className="bg-yellow-500 w-10 h-1 rounded-full mt-2 mb-8 mx-auto block"></span>

      <div className='max-w-7xl mx-auto'>
        <p className="mb-6 text-xl">{t("competitivenessText")}</p>

        <h3 className="text-3xl font-semibold text-yellow-700 mb-3">{t("competitivenessDimensions")}</h3>
        <ul className="list-decimal list-inside mb-10 space-y-2">
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>{t("competitivenessList.qualityLabel")}</strong> {t("competitivenessList.quality")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>{t("competitivenessList.costLabel")}</strong> {t("competitivenessList.cost")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>{t("competitivenessList.innovationLabel")}</strong> {t("competitivenessList.innovation")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>{t("competitivenessList.efficiencyLabel")}</strong> {t("competitivenessList.efficiency")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>{t("competitivenessList.reputationLabel")}</strong> {t("competitivenessList.reputation")}</li>
        </ul>

        <p className="mb-8 text-xl">{t("profitabilityText")}</p>

        <h3 className="text-3xl font-semibold text-yellow-700 mb-2">{t("profitabilityDimensions")}</h3>
        <ul className="list-decimal list-inside mb-6 space-y-2">
          <li className='text-lg'><strong className='text-yellow-600 text-xl font-semibold'>{t("profitabilityList.grossProfitLabel")}</strong> {t("profitabilityList.grossProfit")}</li>
          <li className='text-lg'><strong className='text-yellow-600 text-xl font-semibold'>{t("profitabilityList.operatingProfitLabel")}</strong> {t("profitabilityList.operatingProfit")}</li>
          <li className='text-lg'><strong className='text-yellow-600 text-xl font-semibold'>{t("profitabilityList.netProfitLabel")}</strong> {t("profitabilityList.netProfit")}</li>
        </ul>

        <p className='text-lg mb-5'>{t("growthText")}</p>
        <p className='text-lg mb-8'><strong className='text-yellow-600 font-bold text-lg'>{t("growthMeaningLabel")}</strong> {t("growthMeaning")}</p>

        <h3 className="text-3xl font-semibold text-yellow-700 mb-4">{t("growthIndicatorsTitle")}</h3>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>{t("growthIndicators.revenueGrowthLabel")}</strong> {t("growthIndicators.revenueGrowth")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>{t("growthIndicators.profitGrowthLabel")}</strong> {t("growthIndicators.profitGrowth")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>{t("growthIndicators.customerGrowthLabel")}</strong> {t("growthIndicators.customerGrowth")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>{t("growthIndicators.marketShareGrowthLabel")}</strong> {t("growthIndicators.marketShareGrowth")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>{t("growthIndicators.assetGrowthLabel")}</strong> {t("growthIndicators.assetGrowth")}</li>
        </ul>

        <p className='text-lg mb-7'>{t("impactText1")}</p>
        <p className='mb-10 text-lg'>{t("impactText2")}</p>

        <h2 className="text-3xl font-bold text-yellow-700 mb-4">{t("impactDimensionsTitle")}</h2>
        <ul className="list-decimal list-inside space-y-2">
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-lg'>{t("impactList.socialLabel")}</strong> {t("impactList.social")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-lg'>{t("impactList.economicLabel")}</strong> {t("impactList.economic")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-lg'>{t("impactList.educationalLabel")}</strong> {t("impactList.educational")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-lg'>{t("impactList.environmentalLabel")}</strong> {t("impactList.environmental")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-lg'>{t("impactList.emotionalLabel")}</strong> {t("impactList.emotional")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-lg'>{t("impactList.cognitiveLabel")}</strong> {t("impactList.cognitive")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-lg'>{t("impactList.behavioralLabel")}</strong> {t("impactList.behavioral")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-lg'>{t("impactList.moralLabel")}</strong> {t("impactList.moral")}</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-lg'>{t("impactList.psychologicalLabel")}</strong> {t("impactList.psychological")}</li>
        </ul>
      </div>
    </motion.div>

  )
}

export default OurValues
