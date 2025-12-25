import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { MainPage as ElectricMain, PaymentsPage as ElectricPayments, ThankyouPage as ElectricThankyou } from './pages/AppElectrica';
import { MainPage as ClassicalMain, PaymentsPage as ClassicalPayments, ThankyouPage as ClassicalThankyou } from './pages/App2';
import { MainPage as PianoMain, PaymentsPage as PianoPayments, ThankyouPage as PianoThankyou } from './pages/AppPiano';
import { MainPage as CantoMain, PaymentsPage as CantoPayments, ThankyouPage as CantoThankyou } from './pages/AppCanto';
import { MainPage as ContrabaixoMain, PaymentsPage as ContrabaixoPayments, ThankyouPage as ContrabaixoThankyou } from './pages/AppContrabaixo';
import { MainPage as JazzMain, PaymentsPage as JazzPayments, ThankyouPage as JazzThankyou } from './pages/AppJazz';
import { MainPage as BluesMain, PaymentsPage as BluesPayments, ThankyouPage as BluesThankyou } from './pages/AppBlues';
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen">
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