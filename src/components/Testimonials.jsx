export default function Testimonials() {
  const testimonials = [
    {
      name: 'María',
      text: 'Graciela cambió mi vida. Su coaching me ayudó a entender mi conexión de manera profunda.',
      rating: 5
    },
    {
      name: 'Carlos',
      text: 'Las sesiones fueron transformadoras. Realmente sentí el cambio en mi energía y relación.',
      rating: 5
    },
    {
      name: 'Ana',
      text: 'El enfoque de Graciela es amoroso, profesional y muy efectivo. Altamente recomendado.',
      rating: 5
    },
    {
      name: 'Juan',
      text: 'Gracias a la técnica del espejo y las meditaciones, encontré paz en mi conexión de llamas gemelas.',
      rating: 5
    },
  ]

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-6 border rounded-lg bg-gray-50">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
