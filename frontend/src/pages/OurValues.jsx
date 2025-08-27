import React from 'react'
import { useTranslation } from 'react-i18next';

const OurValues = () => {
    const { t, i18n } = useTranslation();
   
  const isRTL = i18n.dir() === 'rtl';

  return (
       <div className="min-h-screen bg-yellow-100 px-8 py-12 text-right sm:px-6 md:px-10 lg:px-16 text-black leading-relaxed">
      <h1 className='text-5xl font-bold mt-20 text-center sm:text-4xl md:text-5xl'>قيمنا </h1>
      <span className="bg-yellow-500 w-10 h-1 rounded-full mt-2 mb-8 mx-auto block"></span>
      <div className='max-w-7xl mx-auto '>
        <p className="mb-6 text-xl">
          التنافسية تعني قدرة الفرد أو المؤسسة أو الدولة على التفوق في وق أو مجال معين مقارنة بالآخرين.
          هي باختصار مدى قدرتك على أن تكون أفضل من منافسيك في تقديم منتج، خدمة، أو قيمة ما.
        </p>

        <h3 className="text-3xl font-semibold text-yellow-700 mb-3 text-right">أبعاد التنافسية:</h3>
        <ul className="list-decimal list-inside mb-10 space-y-2 text-right text-black">
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>الجودة:</strong> تقديم منتجات أو خدمات بجودة أعلى من المنافسين.</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>التكلفة / السعر:</strong> القدرة على تقديم أسعار مناسبة مع الحفاظ على ربحية.</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>الابتكار:</strong> إدخال أفكار وحلول جديدة تجعل العميل يفضلك على غيرك.</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>السرعة والكفاءة:</strong> إنجاز الأعمال بسرعة ودقة أكبر من الآخرين.</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>السمعة والعلامة التجارية:</strong> قوة الثقة والولاء المرتبط باسمك.</li>
        </ul>

        <p className="mb-8 text-xl">
          الربحية تعني قدرة المشروع أو الشركة على تحقيق أرباح، أي أن تكون الإيرادات (الدخل) أكبر من التكاليف والمصروفات.
        </p>

        <h3 className="text-3xl font-semibold text-yellow-700 mb-2">أبعاد الربحية:</h3>
        <ul className="list-decimal list-inside mb-6 space-y-2">
          <li className='text-lg'> <strong className='text-yellow-600 text-xl font-semibold'>الربح الإجمالي: </strong>الفرق بين الإيرادات وتكلفة البضاعة أو الخدمة المباشرة.</li>
          <li className='text-lg'> <strong className='text-yellow-600 text-xl font-semibold'>الربح التشغيلي: </strong> ما يتبقى بعد خصم المصاريف التشغيلية مثل الرواتب والإيجارات.</li>
          <li className='text-lg'> <strong className='text-yellow-600 text-xl font-semibold'>صافي الربح: </strong> المبلغ النهائي بعد خصم كل المصاريف بما فيها الضرائب والفوائد.</li>
        </ul>

        <p className='text-lg mb-5 '>
          النمو في عالم الأعمال يعني الزيادة أو التوسع في حجم أو أداء الشركة بمرور الوقت .
        </p>

        <p className='text-lg mb-8'><strong className='text-yellow-600 font-bold text-lg'>. بمعنى آخر  :
           </strong>هو التطور الكمي أو النوعي الذي يحقق تقدم الشركة مقارنة بوضعها السابق.</p>

        <h3 className="text-3xl font-semibold text-yellow-700 mb-4">مؤشرات قياس:</h3>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>نمو الإيرادات: </strong> نسبة زيادة الدخل مقارنة بالعام السابق.</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>نمو الأرباح: </strong> تطور صافي الأرباح على مدى فترة معينة.</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>نمو عدد العملاء / المشتركين: </strong> مثل زيادة عدد أولياء الأمور أو المشتركين في منتج.</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>نمو الحصة السوقية:  </strong>هل حصتك من السوق أصبحت أكبر من قبل؟</li>
          <li className='text-lg'><strong className='text-yellow-600 font-semibold text-xl'>نمو الأصول: </strong> مثل امتلاك فروع جديدة أو معدات أكثر.</li>
        </ul>

        <p className='text-lg mb-7'>الأثر يعني النتيجة أو التأثير العميق الذي يتركه عمل أو قرار أو مشروع على الأشخاص أو المجتمع أو السوق أو البيئة.</p>
        <p className='mb-10 text-lg'>. هو ليس فقط ما نحققه من أرباح أو نمو مباشر، بل ما نتركه من تغيير ملموس ومستدام في الآخرين وفي البيئة المحيطة بنا </p>

        <h2 className="text-3xl font-bold text-yellow-700 mb-4">أبعاد الأثر</h2>
        <ul className="list-decimal list-inside space-y-2">
          <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر الاجتماعي: </strong> تحسين حياة الناس، دعم الأسر والمجتمع.</li>
          <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر الاقتصادي: </strong> خلق فرص عمل، زيادة الدخل والاستثمار، تحريك الاقتصاد المحلي.</li>
          <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر التعليمي / المعرفي: </strong> رفع مستوى وعي وفكر الأطفال أو الموظفين، نشر قيم ومهارات جديدة.</li>
          <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر البيئي: </strong> تقليل الهدر، الاعتماد على ممارسات صديقة للبيئة.</li>
          <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر العاطفي / القيمي: </strong> بناء الثقة والولاء، إلهام الآخرين للسير على نفس الطريق.</li>
          <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر المعرفي: </strong> تنمية التفكير والقدرة على الفهم والاستيعاب، حب التعلم.</li>
          <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر السلوكي:  </strong>غرس عادات إيجابية مثل التعاون واحترام الوقت، تقليل السلوكيات السلبية.</li>
          <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر القيمي والأخلاقي: </strong> تعزيز قيم مثل الصدق، الأمانة، المسؤولية، والانتماء.</li>
          <li className='text-lg'><strong className='text-yellow-600 text-lg font-semibold'>الأثر النفسي والعاطفي: </strong> بناء الثقة بالنفس، التعبير عن المشاعر، وتعزيز الشعور بالأمان.</li>
        </ul>
      </div>
    </div>
  )
}

export default OurValues
