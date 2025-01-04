import Image from 'next/image'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import Profile from '@/app/_components/Profile'
import Section from './_components/Section'
import { SectionType } from './_components/Section'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-500">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Header />
        <Profile />

        {/* first section */}
        <div className="flex items-stretch justify-between bg-gray text-white p-10 rounded-xl">
          <div className="w-2/5">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/2.png"
                alt="Graiscale Girl"
                width={450}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="max-w-md border-t-4 border-b-4 border-double p-6 flex items-center justify-center">
            <h1 className="text-3xl leading-tight">
              <span className="text-green-400">WORRY?</span> No.
              <br />
              Graiscale will always be there for you. <br />
              She will do the best she could to stand up for you.
            </h1>
          </div>
        </div>

        {/* second section */}
        <div className="flex items-stretch justify-between bg-gray text-white p-10 rounded-xl">
          {/* left */}
          <div className="max-w-md border-t-4 border-b-4 border-double p-6 flex items-center justify-center">
            <h2 className="text-2xl leading-tight">
              <span>There is no discrimination in her dictionary.</span> <br />
              <span>
                No Racism, No sexism, No boundaries all over the world.
              </span>{' '}
              <br />
              <span>
                She Loves everything in this planet except Jeeters who don't
                believe her and left her.{' '}
              </span>
            </h2>
          </div>

          {/* right */}
          <div className="w-2/5">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/3.png"
                alt="Graiscale Girl"
                width={450}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="flex items-stretch justify-between bg-gray text-white p-10 rounded-xl">
          <div className="w-2/5">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/4.png"
                alt="Graiscale Girl"
                width={450}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="max-w-md border-t-4 border-b-4 border-double p-6 flex items-center justify-center">
            <h1 className="text-3xl leading-tight">
              Be the happiest guy on earth giving her a warm cuddle. <br />
            </h1>
          </div>
        </div>

        {/* purchase info section */}
        <div className="flex flex-col items-center justify-center bg-gray text-white p-10 rounded-xl">
          <div className="text-5xl font-extrabold text-white">
            WELCOME TO THE GRAISCALE FAMILY
          </div>
          <br />
          <div className="text-7xl font-extrabold text-white">$GRAI</div>
          <div className="text-4xl text-white p-3">
            Take a chance with a cute girl!
          </div>
          <div className="text-2xl text-white p-4 border-t-4 border-b-4 border-double">
            CA : asdfasdfasdfasdfasd
          </div>
          <div className="p-4">
            <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:opacity-80 border rounded p-2 text-4xl">
              TRADE NOW
            </button>
          </div>
          <div>Join our Communities</div>
          <div className="p-3 flex gap-4">
            <a href="https://x.com/graiscalegirl" target="_blank" className="">
              <Image
                src="/x_icon.png"
                alt="X Icon"
                width={200}
                height={200}
                className="w-10 h-10 mr-2 rounded-full shadow-2xl"
              />
            </a>
            <a
              href="https://t.me/graiscalegirl2025"
              target="_blank"
              className=""
            >
              <Image
                src="/telegram_icon.png"
                alt="Telegram Icon"
                width={200}
                height={200}
                className="w-10 h-10 mr-2 rounded-full shadow-2xl"
              />
            </a>
          </div>
          <div>
            Contact a little girl direclty if you want{' '}
            <span className="text-green-400">graiscalegirl@gamil.com</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
