export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="text-xl font-bold">Twin Flames</div>
      <div className="flex gap-8">
        <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
        <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
        <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
        <div className="relative group">
          <button className="text-gray-700 hover:text-gray-900">More</button>
          <div className="hidden group-hover:block absolute bg-white shadow-lg rounded-md p-2 z-10">
            <a href="#pricing" className="block px-4 py-2 hover:bg-gray-100">Plans</a>
            <a href="#appointments" className="block px-4 py-2 hover:bg-gray-100">Appointments</a>
            <a href="#faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</a>
          </div>
        </div>
        <a href="#blog" className="text-gray-700 hover:text-gray-900">Blog</a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
      </div>
    </nav>
  )
}
