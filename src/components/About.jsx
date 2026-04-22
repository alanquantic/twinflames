export default function About() {
  return (
    <section id="about" className="py-16 px-8 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto flex items-center gap-8">
        <div className="flex-1">
          <div className="w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg shadow-lg"></div>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Sobre Graciela</h2>
          <p className="text-lg text-gray-700 mb-4">
            Graciela es una experta en coaching de Llamas Gemelas con una dedicación profunda
            al crecimiento personal y la ascensión espiritual.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Su enfoque utiliza técnicas modernas de coaching combinadas con sabiduría ancestral
            para ayudarte a entender y fortalecer tu conexión más profunda.
          </p>
          <p className="text-lg text-gray-700">
            Con años de experiencia, Graciela ha transformado la vida de cientos de personas
            en su viaje hacia la evolución espiritual.
          </p>
        </div>
      </div>
    </section>
  )
}
