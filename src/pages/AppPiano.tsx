import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSectionPiano';
import { BenefitsSection } from '../components/BenefitsSectionPiano';
import { TestimonialsSection } from '../components/TestimonialsSectionPiano';
import { PricingSection } from '../components/PricingSectionPiano';
import { FAQSection } from '../components/FAQSectionPiano';
import { CTASection } from '../components/CTASectionPiano';
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
  return <Payments onConfirm={() => navigate('/curso-piano/obrigado')} onBack={() => navigate('/')} />;
}

function ThankyouPage() {
  return <ThankYou />;
}


export { MainPage, PaymentsPage, ThankyouPage };