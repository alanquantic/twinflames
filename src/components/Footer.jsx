export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Twin Flames Coaching</h3>
          <p className="text-gray-400">Ascensión espiritual a través del coaching de llamas gemelas</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <p className="text-gray-400 mb-2">📍 Aguascalientes, Mexico</p>
          <p className="text-gray-400 mb-2">📧 info@twinflamesmastersof.love</p>
          <p className="text-gray-400">📱 +52 (123) 456-7890</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Twin Flames Masters. All rights reserved.</p>
      </div>
    </footer>
  )
}
