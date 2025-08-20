import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSectionElectrica';
import { BenefitsSection } from '../components/BenefitsSectionElectrica';
import { TestimonialsSection } from '../components/TestimonialsSectionElectrica';
import { PricingSection } from '../components/PricingSectionElectrica';
import { FAQSection } from '../components/FAQSectionElectrica';
import { CTASection } from '../components/CTASectionElectrica';
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
  return <Payments onConfirm={() => navigate('/curso-guitarra-electrica/obrigado')} onBack={() => navigate('/')} />;
}

function ThankyouPage() {
  return <ThankYou />;
}


export { MainPage, PaymentsPage, ThankyouPage };