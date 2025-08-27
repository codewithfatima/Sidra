import React from 'react'
import { useTranslation } from 'react-i18next';

const OurValues = () => {
    const { t, i18n } = useTranslation();
   
  const isRTL = i18n.dir() === 'rtl';

  return (
<div className={`min-h-screen bg-yellow-100 px-8 py-12 ${isRTL ? 'text-right' : 'text-left'} sm:px-6 md:px-10 lg:px-16 text-black leading-relaxed`}>
      
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
</div>


    // <div className={`min-h-screen bg-yellow-100 px-8 py-12 ${isRTL ? 'text-right' : 'text-left'} sm:px-6 md:px-10 lg:px-16 text-black leading-relaxed`}>

    //    {/* <div className="min-h-screen bg-yellow-100 px-8 py-12 text-right sm:px-6 md:px-10 lg:px-16 text-black leading-relaxed"> */}
    //   <h1 className='text-5xl font-bold mt-20 text-center sm:text-4xl md:text-5xl'>قيمنا </h1>
    //   <span className="bg-yellow-500 w-10 h-1 rounded-full mt-2 mb-8 mx-auto block"></span>
    //   <div className='max-w-7xl mx-auto '>
    //     <p className="mb-6 text-xl">
    //       التنافسية تعني قدرة الفرد أو المؤسسة أو الدولة على التفوق في وق أو مجال معين مقارنة بالآخرين.
    //       هي باختصار مدى قدرتك على أن تكون أفضل من منافسيك في تقديم منتج، خدمة، أو قيمة ما.
    //     </p>

    //     <h3 className="text-3xl font-semibold text-yellow-700 mb-3 text-right">أبعاد التنافسية:</h3>
    //     <ul className="list-decimal list-inside mb-10 space-y-2 text-right text-black">
    //       <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>الجودة:</strong> تقديم منتجات أو خدمات بجودة أعلى من المنافسين.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>التكلفة / السعر:</strong> القدرة على تقديم أسعار مناسبة مع الحفاظ على ربحية.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>الابتكار:</strong> إدخال أفكار وحلول جديدة تجعل العميل يفضلك على غيرك.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>السرعة والكفاءة:</strong> إنجاز الأعمال بسرعة ودقة أكبر من الآخرين.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>السمعة والعلامة التجارية:</strong> قوة الثقة والولاء المرتبط باسمك.</li>
    //     </ul>

    //     <p className="mb-8 text-xl">
    //       الربحية تعني قدرة المشروع أو الشركة على تحقيق أرباح، أي أن تكون الإيرادات (الدخل) أكبر من التكاليف والمصروفات.
    //     </p>

    //     <h3 className="text-3xl font-semibold text-yellow-700 mb-2">أبعاد الربحية:</h3>
    //     <ul className="list-decimal list-inside mb-6 space-y-2">
    //       <li className='text-lg'> <strong className='text-yellow-600 text-xl font-semibold'>الربح الإجمالي: </strong>الفرق بين الإيرادات وتكلفة البضاعة أو الخدمة المباشرة.</li>
    //       <li className='text-lg'> <strong className='text-yellow-600 text-xl font-semibold'>الربح التشغيلي: </strong> ما يتبقى بعد خصم المصاريف التشغيلية مثل الرواتب والإيجارات.</li>
    //       <li className='text-lg'> <strong className='text-yellow-600 text-xl font-semibold'>صافي الربح: </strong> المبلغ النهائي بعد خصم كل المصاريف بما فيها الضرائب والفوائد.</li>
    //     </ul>

    //     <p className='text-lg mb-5 '>
    //       النمو في عالم الأعمال يعني الزيادة أو التوسع في حجم أو أداء الشركة بمرور الوقت .
    //     </p>

    //     <p className='text-lg mb-8'><strong className='text-yellow-600 font-bold text-lg'>. بمعنى آخر  :
    //        </strong>هو التطور الكمي أو النوعي الذي يحقق تقدم الشركة مقارنة بوضعها السابق.</p>

    //     <h3 className="text-3xl font-semibold text-yellow-700 mb-4">مؤشرات قياس:</h3>
    //     <ul className="list-disc list-inside mb-8 space-y-2">
    //       <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>نمو الإيرادات: </strong> نسبة زيادة الدخل مقارنة بالعام السابق.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>نمو الأرباح: </strong> تطور صافي الأرباح على مدى فترة معينة.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>نمو عدد العملاء / المشتركين: </strong> مثل زيادة عدد أولياء الأمور أو المشتركين في منتج.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>نمو الحصة السوقية:  </strong>هل حصتك من السوق أصبحت أكبر من قبل؟</li>
    //       <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>نمو الأصول: </strong> مثل امتلاك فروع جديدة أو معدات أكثر.</li>
    //     </ul>

    //     <p className='text-lg mb-7'>الأثر يعني النتيجة أو التأثير العميق الذي يتركه عمل أو قرار أو مشروع على الأشخاص أو المجتمع أو السوق أو البيئة.</p>
    //     <p className='mb-10 text-lg'>. هو ليس فقط ما نحققه من أرباح أو نمو مباشر، بل ما نتركه من تغيير ملموس ومستدام في الآخرين وفي البيئة المحيطة بنا </p>

    //     <h2 className="text-3xl font-bold text-yellow-700 mb-4">أبعاد الأثر</h2>
    //     <ul className="list-decimal list-inside space-y-2">
    //       <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر الاجتماعي: </strong> تحسين حياة الناس، دعم الأسر والمجتمع.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر الاقتصادي: </strong> خلق فرص عمل، زيادة الدخل والاستثمار، تحريك الاقتصاد المحلي.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر التعليمي / المعرفي: </strong> رفع مستوى وعي وفكر الأطفال أو الموظفين، نشر قيم ومهارات جديدة.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر البيئي: </strong> تقليل الهدر، الاعتماد على ممارسات صديقة للبيئة.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر العاطفي / القيمي: </strong> بناء الثقة والولاء، إلهام الآخرين للسير على نفس الطريق.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر المعرفي: </strong> تنمية التفكير والقدرة على الفهم والاستيعاب، حب التعلم.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر السلوكي:  </strong>غرس عادات إيجابية مثل التعاون واحترام الوقت، تقليل السلوكيات السلبية.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر القيمي والأخلاقي: </strong> تعزيز قيم مثل الصدق، الأمانة، المسؤولية، والانتماء.</li>
    //       <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر النفسي والعاطفي: </strong> بناء الثقة بالنفس، التعبير عن المشاعر، وتعزيز الشعور بالأمان.</li>
    //     </ul>


    //   </div>
    // </div>
  )
}

export default OurValues
