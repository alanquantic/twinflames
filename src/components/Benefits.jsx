export default function Benefits() {
  const benefits = [
    { icon: '💑', title: 'Understand Relationships', desc: 'Comprende la conexión profunda' },
    { icon: '🌱', title: 'Personal Healing', desc: 'Sana tu ser interior' },
    { icon: '✨', title: 'Spiritual Growth', desc: 'Crece espiritualmente' },
    { icon: '🕊️', title: 'Conflict Management', desc: 'Maneja conflictos con amor' },
    { icon: '⚡', title: 'Alignment & Balance', desc: 'Alinea tu energía' },
    { icon: '👑', title: 'Empowerment', desc: 'Empodera tu vida' },
  ]

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
