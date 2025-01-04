export default function Header() {
  return (
    <header className="relative flex items-center justify-center w-full">
      <h1 className="text-7xl font-extrabold text-white relative">
        GRAISCALE LABS
        <span className="absolute inset-0 translate-x-2 translate-y-2 text-gray-700 blur-lg opacity-60"></span>
        <span className="absolute inset-0 -translate-x-2 -translate-y-2 text-gray-900 blur-md opacity-50"></span>
      </h1>
    </header>
  )
}
