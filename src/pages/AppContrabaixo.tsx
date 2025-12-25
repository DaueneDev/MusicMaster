import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSectionContrabaixo';
import { BenefitsSection } from '../components/BenefitsSectionContrabaixo';
import { TestimonialsSection } from '../components/TestimonialsSectionContrabaixo';
import { PricingSection } from '../components/PricingSectionContrabaixo';
import { FAQSection } from '../components/FAQSectionContrabaixo';
import { CTASection } from '../components/CTASectionContrabaixo';
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
  return <Payments onConfirm={() => navigate('/curso-contrabaixo/obrigado')} onBack={() => navigate('/')} />;
}

function ThankyouPage() {
  return <ThankYou />;
}

export { MainPage, PaymentsPage, ThankyouPage };
