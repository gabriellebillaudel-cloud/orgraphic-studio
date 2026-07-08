export default function Sidebar() {
  const items = [
    "🏠 Dashboard",
    "🎨 Œuvres",
    "📅 Calendrier",
    "🤖 IA Studio",
    "📈 Instagram",
    "💬 Messages",
    "⚙️ Paramètres",
  ];

  return (
    <aside className="w-64 min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-10">🎨 Orgraphic</h1>

      <nav className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="px-4 py-3 rounded-xl hover:bg-white/10 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}