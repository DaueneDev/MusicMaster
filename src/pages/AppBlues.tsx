import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSectionBlues';
import { BenefitsSection } from '../components/BenefitsSectionBlues';
import { TestimonialsSection } from '../components/TestimonialsSectionBlues';
import { PricingSection } from '../components/PricingSectionBlues';
import { FAQSection } from '../components/FAQSectionBlues';
import { CTASection } from '../components/CTASectionBlues';
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
  return <Payments onConfirm={() => navigate('/curso-guitarra-blues/obrigado')} onBack={() => navigate('/')} />;
}

function ThankyouPage() {
  return <ThankYou />;
}

export { MainPage, PaymentsPage, ThankyouPage };
