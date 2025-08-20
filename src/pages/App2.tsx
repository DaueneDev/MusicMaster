import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PricingSection } from '../components/PricingSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';
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
  return <Payments onConfirm={() => navigate('/curso-guitarra-acustica/obrigado')} onBack={() => navigate('/')} />;
}

function ThankyouPage() {
  return <ThankYou />;
}


export { MainPage, PaymentsPage, ThankyouPage };