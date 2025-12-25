import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { MainPage as ElectricMain, PaymentsPage as ElectricPayments, ThankyouPage as ElectricThankyou } from './pages/AppElectrica';
import { MainPage as ClassicalMain, PaymentsPage as ClassicalPayments, ThankyouPage as ClassicalThankyou } from './pages/App2';
import { MainPage as PianoMain, PaymentsPage as PianoPayments, ThankyouPage as PianoThankyou } from './pages/AppPiano';
import { MainPage as CantoMain, PaymentsPage as CantoPayments, ThankyouPage as CantoThankyou } from './pages/AppCanto';
import { MainPage as ContrabaixoMain, PaymentsPage as ContrabaixoPayments, ThankyouPage as ContrabaixoThankyou } from './pages/AppContrabaixo';
import { MainPage as JazzMain, PaymentsPage as JazzPayments, ThankyouPage as JazzThankyou } from './pages/AppJazz';
import { MainPage as BluesMain, PaymentsPage as BluesPayments, ThankyouPage as BluesThankyou } from './pages/AppBlues';

type TimeLeft = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (endsAt: Date): TimeLeft => {
  const totalMs = Math.max(0, endsAt.getTime() - Date.now());
  const totalSeconds = Math.floor(totalMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    totalMs,
    days,
    hours,
    minutes,
    seconds,
  };
};

const pad2 = (n: number) => String(n).padStart(2, '0');
export function App() {
  const promoEndsAt = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), 11, 31, 23, 59, 59);
  }, []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(promoEndsAt));
  useEffect(() => {
    const id = window.setInterval(() => {
      setTimeLeft(getTimeLeft(promoEndsAt));
    }, 1000);
    return () => window.clearInterval(id);
  }, [promoEndsAt]);
  const promoEnded = timeLeft.totalMs <= 0;

  return <BrowserRouter>
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black">
        <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-bold tracking-wide text-sm md:text-base text-center md:text-left">
            Promoção de Fim de Ano: entra em 2026 tocando e cantando com confiança
          </div>
          <div className="bg-black/15 rounded-full px-4 py-1 text-sm font-semibold">
            {promoEnded ? (
              <span>Promoção encerrada</span>
            ) : (
              <span>
                Termina em: {timeLeft.days}d {pad2(timeLeft.hours)}:{pad2(timeLeft.minutes)}:{pad2(timeLeft.seconds)}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-screen pt-24 md:pt-16">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curso-guitarra-electrica" element={<ElectricMain />} />
            <Route path="/curso-guitarra-electrica/pagamento" element={<ElectricPayments />} />
            <Route path="/curso-guitarra-electrica/obrigado" element={<ElectricThankyou />} />
            <Route path="/curso-guitarra-acustica" element={<ClassicalMain />} />
            <Route path="/curso-guitarra-acustica/pagamento" element={<ClassicalPayments />} />
            <Route path="/curso-guitarra-acustica/obrigado" element={<ClassicalThankyou />} />
            <Route path="/curso-piano" element={<PianoMain />} />
            <Route path="/curso-piano/pagamento" element={<PianoPayments />} />
            <Route path="/curso-piano/obrigado" element={<PianoThankyou />} />
            <Route path="/curso-canto-voz" element={<CantoMain />} />
            <Route path="/curso-canto-voz/pagamento" element={<CantoPayments />} />
            <Route path="/curso-canto-voz/obrigado" element={<CantoThankyou />} />
            <Route path="/curso-contrabaixo" element={<ContrabaixoMain />} />
            <Route path="/curso-contrabaixo/pagamento" element={<ContrabaixoPayments />} />
            <Route path="/curso-contrabaixo/obrigado" element={<ContrabaixoThankyou />} />
            <Route path="/curso-guitarra-jazz" element={<JazzMain />} />
            <Route path="/curso-guitarra-jazz/pagamento" element={<JazzPayments />} />
            <Route path="/curso-guitarra-jazz/obrigado" element={<JazzThankyou />} />
            <Route path="/curso-guitarra-blues" element={<BluesMain />} />
            <Route path="/curso-guitarra-blues/pagamento" element={<BluesPayments />} />
            <Route path="/curso-guitarra-blues/obrigado" element={<BluesThankyou />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>;
}