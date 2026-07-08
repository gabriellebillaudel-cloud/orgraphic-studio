export default function WelcomeCard() {
  return (
    <div className="bg-black text-white rounded-2xl p-8">
      <h2 className="text-3xl font-bold">Bienvenue dans Orgraphic Studio</h2>
      <p className="text-gray-300 mt-4">
        Ton cockpit pour développer ton audience, préparer tes publications
        et transformer tes œuvres en contenu commercial.
      </p>

      <button className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-medium">
        ✨ Générer une publication
      </button>
    </div>
  );
}