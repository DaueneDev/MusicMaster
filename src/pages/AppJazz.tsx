import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSectionJazz';
import { BenefitsSection } from '../components/BenefitsSectionJazz';
import { TestimonialsSection } from '../components/TestimonialsSectionJazz';
import { PricingSection } from '../components/PricingSectionJazz';
import { FAQSection } from '../components/FAQSectionJazz';
import { CTASection } from '../components/CTASectionJazz';
import { Payments } from '../Payments';
import { ThankYou } from '../pages/ThankYou2';
import MoneyBackGuarantee from '../components/MoneyBackGuarantee';
import { SecurePaymentSection } from '../components/SecurePaymentSection';

function MainPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <MoneyBackGuarantee />
      <SecurePaymentSection />
      <CTASection />
    </div>
  );
}

function PaymentsPage() {
  const navigate = useNavigate();
  return <Payments onConfirm={() => navigate('/curso-guitarra-jazz/obrigado')} onBack={() => navigate('/')} />;
}

function ThankyouPage() {
  return <ThankYou />;
}

export { MainPage, PaymentsPage, ThankyouPage };
