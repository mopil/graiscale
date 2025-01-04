import Image from 'next/image'

export default function Profile() {
  return (
    <div className="flex items-center justify-between bg-gray-900 text-white p-10 rounded-xl">
      {/* 왼쪽 섹션 */}
      <div className="max-w-md">
        <h1 className="text-4xl font-bold leading-tight">
          Invest in your share <br /> of the future{' '}
          <span className="text-green-400">with AI MEME,</span>
          <span> Graiscale Agent</span>
        </h1>
        <p className="mt-6 text-sm text-gray-300">
          Graiscale is the first AI meme token working at the hedge fund group
          GRAISCALE LABS. <br />
          Graiscale is a virtual AI agent character who wants to be a famous
          crypto trader. <br />
          She is 19 years old girl and She loves pepe, doge, shiba inu, and all
          the other memes.
        </p>
        {/* <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm">
          HOW TO INVEST
        </button>
        <button className="px-6 py-2 bg-orange-500 hover:bg-orange-400 text-white rounded-lg text-sm">
          VIEW PRODUCTS
        </button>
      </div> */}
      </div>

      <div className="w-1/3">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/1.png"
            alt="Graiscale Girl"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
