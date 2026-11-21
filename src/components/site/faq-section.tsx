import { MessageCircle, Plus } from 'lucide-react'

const questions = [
  { question: 'ما وقت الدخول والخروج؟', answer: 'الدخول من الساعة 4 عصراً والخروج الساعة 2 ظهراً. للدخول المبكر تواصل معنا.' },
  { question: 'كيف أستلم الشقة؟', answer: 'عن طريق كود خاص لباب الشقة، أو باستلام المفتاح من مكتب الاستقبال.' },
  { question: 'كيف أحجز وكيف أدفع؟', answer: 'يتم تأكيد الحجز بدفع عربون، نقداً أو بتحويل بنكي. ابدأ من حاسبة التكلفة أو تواصل معنا عبر واتساب.' },
  { question: 'هل يوجد تأمين؟', answer: 'يختلف مبلغ التأمين حسب الشقة، تواصل معنا لمعرفة التفاصيل.' },
  { question: 'ما سياسة الإلغاء؟', answer: 'عند الإلغاء يُخصم العربون بالكامل.' },
  { question: 'ما الحد الأدنى والأقصى لمدة الإقامة؟', answer: 'الحد الأدنى يوم واحد، ولا يوجد حد أقصى.' },
  { question: 'هل الأسعار تشمل الضريبة والخدمات؟', answer: 'نعم، الأسعار شاملة ضريبة القيمة المضافة، والكهرباء والماء والإنترنت داخلة في السعر.' },
  { question: 'كم مرة تتم النظافة؟', answer: 'النظافة أسبوعية، ويتم تغيير المفروشات بانتظام.' },
  { question: 'هل يوجد واي فاي وموقف سيارات؟', answer: 'نعم، واي فاي بسرعة عالية في الشقق، وموقف سيارات خاص لكل شقة.' },
  { question: 'هل المبنى مناسب لكبار السن وذوي الهمم؟', answer: 'نعم، المبنى مهيأ لكبار السن وذوي الهمم، ويوجد مصعد يخدم كل الأدوار.' },
  { question: 'كم عدد الأشخاص المسموح في كل شقة؟', answer: 'الاستديو: شخصان. غرفة وصالة: شخصان. غرفتان وصالة: 4 أشخاص. ثلاث غرف وصالة: 6 أشخاص.' },
  { question: 'ما شروط الحجز؟', answer: 'للعائلات: إثبات الزواج وكارت العائلة. للشباب: الهوية الوطنية.' },
  { question: 'ما القواعد داخل الشقة؟', answer: 'التدخين والحيوانات الأليفة غير مسموحين، ولا يُسمح نهائياً بالحفلات أو إزعاج السكان.' },
  { question: 'متى يمكنني التواصل معكم؟', answer: 'خدمة العملاء على واتساب متاحة 24 ساعة.' },
]

export function FaqSection() {
  return <section className="faq-section" aria-labelledby="faq-title">
    <div className="section-wrap">
      <div className="faq-heading"><span className="eyebrow">إجابات تهمك</span><h2 id="faq-title">الأسئلة <em>الشائعة</em></h2><p>كل ما تحتاج معرفته قبل الحجز، في مكان واحد.</p></div>
      <div className="faq-list">{questions.map(({ question, answer }) => <details className="faq-item" key={question}>
        <summary><span>{question}</span><Plus aria-hidden="true" /></summary>
        <p>{answer}</p>
      </details>)}</div>
      <a className="faq-contact button-gold" href="https://wa.me/966560920209" target="_blank" rel="noreferrer"><MessageCircle size={18} /> لم تجد إجابة سؤالك؟ تواصل معنا عبر واتساب</a>
    </div>
  </section>
}
