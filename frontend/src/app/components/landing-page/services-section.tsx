import { SERVICES } from '@/lib/landing-constans'

import { SectionLanding } from './section-landing'
import Image from 'next/image'

/**
 * Component that renders a section of the landing page showing the services that the application offers.
 *
 * This component renders a section with a title and a list of services. Each service is represented by an image, a title and a description.
 *
 * @returns A JSX element representing the services section.
 */

export const ServicesSection = () => {
  return (
    <SectionLanding
      id="features"
      component="section"
      className="flex flex-col gap-[48px] py-16 md:gap-[80px] lg:py-24"
    >
      <h2 className="sr-only">Nuestros servicios</h2>
      <h3 className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
        {`¿Por qué elegir nuestra plataforma?`}
      </h3>
      <div className="flex w-full flex-col gap-12 md:flex-row">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center justify-center gap-4 text-center md:gap-6"
          >
            <Image
              src={service.src}
              alt={service.title}
              width={200}
              height={200}
              className="h-[200px] w-[200px]"
            />
            <h4 className="text-md font-bold">{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </SectionLanding>
  )
}
