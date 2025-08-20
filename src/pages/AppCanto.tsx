import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSectionCanto';
import { BenefitsSection } from '../components/BenefitsSectionCanto';
import { TestimonialsSection } from '../components/TestimonialsSectionCanto';
import { PricingSection } from '../components/PricingSectionCanto';
import { FAQSection } from '../components/FAQSectionCanto';
import { CTASection } from '../components/CTASectionCanto';
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
  return <Payments onConfirm={() => navigate('/curso-canto-voz/obrigado')} onBack={() => navigate('/')} />;
}

function ThankyouPage() {
  return <ThankYou />;
}


export { MainPage, PaymentsPage, ThankyouPage };