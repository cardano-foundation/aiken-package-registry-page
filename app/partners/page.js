import Image from 'next/image'
import Link from 'next/link'
import PartnerCard from '@/components/PartnerCard'

export default function Partners() {
  const partners = [
    {
      image: 'person1.jpg',
      imageAlt: 'Person holding their phone and smiling',
      icon: 'satellite.svg',
      iconAlt: 'Icon depicting a satellite',
      title: 'Business Organisation and Enterprise',
      description: 'Lobortis mauris, massa sed scelerisque lectus nec in non sed eget purus urna, mi eu facilisi augue vel urna feugiat sit libero habitasse molestie habitant et morbi tincidunt pretium purus risus mauris condimentum diam ultrices.',
    },
    {
      image: 'person2.jpg',
      imageAlt: 'Person looking their phone looking inspired',
      icon: 'online-learning2.svg',
      iconAlt: 'Icon depicting a monitor with a graduate cap on it',
      title: 'Universities and Education Institutions',
      description: 'Lobortis mauris, massa sed scelerisque lectus nec in non sed eget purus urna, mi eu facilisi augue vel urna feugiat sit libero habitasse molestie habitant et morbi tincidunt pretium purus risus mauris condimentum diam ultrices.',
    },
    {
      image: 'person3.jpg',
      imageAlt: 'Person holding a clipboard and chatting to another person',
      icon: 'network-globe.svg',
      iconAlt: 'Icon depicting a globe with a network',
      title: 'Public Sector Organisations and NGOs',
      description: 'Lobortis mauris, massa sed scelerisque lectus nec in non sed eget purus urna, mi eu facilisi augue vel urna feugiat sit libero habitasse molestie habitant et morbi tincidunt pretium purus risus mauris condimentum diam ultrices.',
    },
    {
      image: 'person4.jpg',
      imageAlt: 'Person writing something down on a sheet of paper',
      icon: 'online-class.svg',
      iconAlt: 'Icon depicting a monitor with an online meeting on it',
      title: 'Education Platforms and Training Organisations',
      description: 'Lobortis mauris, massa sed scelerisque lectus nec in non sed eget purus urna, mi eu facilisi augue vel urna feugiat sit libero habitasse molestie habitant et morbi tincidunt pretium purus risus mauris condimentum diam ultrices.',
    },
  ]

  return (
    <main>
      {/* Hero section */}
      <section className="relative isolate pt-36 sm:pt-48 flex justify-center items-center bg-white overflow-hidden px-2">
        <div className="flex justify-between items-center mx-auto max-w-7xl p-6 sm:p-8 lg:p-16  w-full border border-cf-gray-600 rounded-3xl">
          <div className="flex flex-col justify-center items-start sm:pr-24">
            <h1 className="text-5xl sm:text-6xl text-cf-blue-600 leading-tight font-bold">
              Education <br />
              Partnerships with <br />
              Cardano Academy
            </h1>
            <p className="text-cf-neutral-gray text-lg sm:text-lg mt-8 sm:mt-12">
              Condimentum integer netus mauris tristique dui ridiculus netus metus augue. Accumsan odio in gravida velit tellus auctor feugiat sed adipiscing habitasse mauris. <br /><br />

              Duis ultrices suspendisse. Euismod quis sit commodo ante lobortis tristique varius aliquam morbi diam amalesuada enim ac orci eget dignissim massa commodo. <br /><br />

              Condimentum integer netus mauris tristique dui ridiculus netus metus augue. Accumsan odio in gravida velit tellus auctor feugiat sed adipiscing habitasse mauris. <br />
            </p>
          </div>
          <Image
            className="hidden lg:block"
            src="/partners.svg"
            alt="Cardano Academy Mobile Dashboard"
            priority={true}
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Partner with us cards */}
      <section className="bg-white py-12 sm:py-24">
        <div className="flex justify-start items-center mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-5xl sm:text-6xl text-cf-blue-600 font-bold mb-8 sm:mb-20">
              Partner with us
            </h2>
            <div className="space-y-6 sm:space-y-12">
              {partners.map((partner, index) => (
                <PartnerCard
                  key={index}
                  image={partner.image}
                  imageAlt={partner.imageAlt}
                  icon={partner.icon}
                  iconAlt={partner.iconAlt}
                  title={partner.title}
                  description={partner.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
