import Image from 'next/image'

import { SectionLanding } from './section-landing'

/**
 * A hero section for the landing page.
 *
 * This section renders a hero section with a header, a paragraph, two buttons and an image.
 *
 * @returns A JSX element representing the hero section.
 */

export const HeroSection = () => {
  return (
    <SectionLanding
      id="home"
      className="flex flex-col items-center gap-8 py-16 lg:py-24"
      component={'section'}
    >
      <div className="flex w-full max-w-3xl flex-col gap-6 text-center">
        <h1 className="text-wrap text-3xl font-bold !leading-[120%] sm:text-4xl md:text-5xl">
          {`Revoluciona la gestión académica de tu institución`}
        </h1>
        <p className="text-md md:text-lg">
          {`Nuestra plataforma facilita el seguimiento académico, fomenta la comunicación efectiva y optimiza la organización escolar.`}
        </p>

      </div>

      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src="/hero-section.jpg"
          alt="Hero section image"
          width={1000}
          height={600}
          className="mx-auto rounded-lg border object-cover object-center shadow-xl"
          priority
        />
      </div>
    </SectionLanding>
  )
}
