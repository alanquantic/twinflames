export default function Pricing() {
  const plans = [
    { name: '2 Private Sessions', price: '$210', sessions: '2 sessions' },
    { name: '4 Private Sessions', price: '$400', sessions: '4 sessions' },
    { name: 'One-on-One Session', price: '$111', sessions: 'Single session' },
    { name: 'Group Session', price: '$123', sessions: 'Group rate' },
  ]

  return (
    <section id="pricing" className="py-16 px-8 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Planes y Precios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.sessions}</p>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition mb-3">
                PayPal
              </button>
              <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition">
                More Info
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
