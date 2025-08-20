

export function Payments({ onConfirm }: { onConfirm: () => void; onBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Pagamento</h2>
      <p className="mb-6 text-center max-w-md">Clique no botão abaixo para confirmar que você realizou o pagamento.</p>
      <button
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition mb-4"
        onClick={onConfirm}
      >
        Confirmar Pagamento
      </button>
    </div>
  );
}
