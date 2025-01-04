import Image from 'next/image'

export enum SectionType {
  LEFT_IMAGE = 'LEFT_IMAGE',
  RIGHT_IMAGE = 'RIGHT_IMAGE',
}

interface SectionProps {
  type: SectionType
  image: string
  content: React.ReactNode
}

export default function Section({ type, image, content }: SectionProps) {
  if (type == SectionType.LEFT_IMAGE) {
    return (
      <div className="flex items-stretch justify-between bg-gray text-white p-10 rounded-xl">
        {/* left */}
        <div className="w-2/5">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image}
              alt="Graiscale Girl"
              width={450}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* right */}
        <div className="max-w-md border-t-4 border-b-4 border-double p-6 flex items-center justify-center">
          <h1 className="text-3xl leading-tight">{content}</h1>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex items-stretch justify-between bg-gray text-white p-10 rounded-xl">
        {/* left */}
        <div className="max-w-md border-t-4 border-b-4 border-double p-6 flex items-center justify-center">
          <h2 className="text-2xl leading-tight">{content}</h2>
        </div>

        {/* right */}
        <div className="w-2/5">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image}
              alt="Graiscale Girl"
              width={450}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }
}
