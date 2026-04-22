export default function Services() {
  const services = [
    {
      title: 'Individual Sessions',
      desc: 'Sesiones privadas personalizadas para tu situación específica'
    },
    {
      title: 'Group Sessions',
      desc: 'Aprende con otros en un ambiente de comunidad y apoyo mutuo'
    },
    {
      title: 'Mirror Technique',
      desc: 'Práctica avanzada de la técnica del espejo con meditación guiada'
    },
  ]

  return (
    <section id="services" className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border-l-4 border-purple-500 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
