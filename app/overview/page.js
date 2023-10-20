'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import PersonCard from '@/components/PersonCard'
import CarouselCard from '@/components/CarouselCard'
import Carousel from 'react-multi-carousel'
import CarouselRightArrow from '@/components/CarouselRightArrow'
import CarouselLeftArrow from '@/components/CarouselLeftArrow'
import 'react-multi-carousel/lib/styles.css'

export default function Overview() {
  const [moduleOverview, setModuleOverview] = useState('Module 1')

  // Carousel responsive scaling
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1500, min: 1200 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 1200, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  // Carousel cards
  const cards = [
    {
      title: 'Module 1',
      description:
        'Introduces the foundation of blockchain, from the main components of a typical blockchain network',
      image: 'M1_carousel.svg',
      overview_description:
        'Module 1: Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain, including account-based, Unspent Transaction Output and extended Unspent Transaction Output.',
      overview_description_2:
        'It examines the content of a block and the role of the block producer. Module 2 also explains how the risks against double-spending and Sybil attacks are mitigated, the causes of soft and hard forks and the importance of incentive mechanisms. It concludes with a look at layer 1 and layer 2 scaling solutions.',
    },
    {
      title: 'Module 2',
      description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain',
      image: 'M2_carousel.svg',
      overview_description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain, including account-based, Unspent Transaction Output and extended Unspent Transaction Output.',
      overview_description_2:
        'It examines the content of a block and the role of the block producer. Module 2 also explains how the risks against double-spending and Sybil attacks are mitigated, the causes of soft and hard forks and the importance of incentive mechanisms. It concludes with a look at layer 1 and layer 2 scaling solutions.',
    },
    {
      title: 'Module 3',
      description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain',
      image: 'M3_carousel.svg',
      overview_description:
        'Module 3: Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain, including account-based, Unspent Transaction Output and extended Unspent Transaction Output.',
      overview_description_2:
        'It examines the content of a block and the role of the block producer. Module 2 also explains how the risks against double-spending and Sybil attacks are mitigated, the causes of soft and hard forks and the importance of incentive mechanisms. It concludes with a look at layer 1 and layer 2 scaling solutions.',
    },
    {
      title: 'Module 4',
      description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain',
      image: 'M4_carousel.svg',
      overview_description:
        'Module 4: Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain, including account-based, Unspent Transaction Output and extended Unspent Transaction Output.',
      overview_description_2:
        'It examines the content of a block and the role of the block producer. Module 2 also explains how the risks against double-spending and Sybil attacks are mitigated, the causes of soft and hard forks and the importance of incentive mechanisms. It concludes with a look at layer 1 and layer 2 scaling solutions.',
    },
  ]


  // Course Creators and Contributors peo
  const people = [
    {
      name: 'Matthias Benkort',
      position: 'Technical Director of Open Source',
      image: 'person.svg',
    },
    {
      name: 'John Greene',
      position: 'Technical Blockchain Educator',
      image: 'person.svg',
    },
    {
      name: 'Vanessa Hurhangee',
      position: 'Education Manager',
      image: 'person.svg',
    },
    {
      name: 'Thomas Mayfield',
      position: 'Team Lead - Decentralized  Trust and Identity Solutions',
      image: 'person.svg',
    },
    {
      name: 'Michiel Bellen',
      position: 'Integrations  Core Team Lead',
      image: 'person.svg',
    },
    {
      name: 'Denicio Bute',
      position: 'Community Manager',
      image: 'person.svg',
    },
  ]

  // Find the card with the matching title
  const selectedCard = cards.find((card) => card.title === moduleOverview)

  return (
    <main>

      <section className="relative isolate pt-36 pb-64 sm:pt-48 flex justify-center items-center bg-cf-blue-600 overflow-hidden">
        <div className="flex justify-center items-center mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <h1 className="text-5xl sm:text-6xl text-white leading-tight font-bold text-center">
            Cardano Blockchain <br /> Certified Associate (CBCA) <br /> Course Overview
          </h1>
        </div>

        {/* Background gradient shapes  */}
        <div
          className="absolute mix-blend-plus-lighter brightness-150 opacity-50 left-[-10rem] top-[-12rem] -z-10 overflow-hidden blur-[256px] w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-[#05A6EC] to-[#036ECD]"
          aria-hidden="true"
        />
        <div
          className="absolute mix-blend-plus-lighten opacity-50 right-[-32rem] top-[-10rem] -z-10 overflow-hidden blur-[256px] w-[72rem] h-[72rem] rounded-full bg-gradient-to-bl from-[#05A6EC] to-[#05A6EC]"
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise-light.png')] bg-repeat mix-blend-overlay -z-10"></div>
      </section>

      {/* Module Carousel section */}
      <section className="relative mx-auto -mt-40 max-w-7xl overflow-hidden">
        <Carousel
          arrows
          infinite
          responsive={responsive}
          itemClass="flex lg:odd:pl-48 lg:even:pr-48 px-12"
          customLeftArrow={<CarouselLeftArrow/>}
          customRightArrow={<CarouselRightArrow/>}
        >
          {cards.map((card, index) => (
            <CarouselCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              setModuleOverview={setModuleOverview}
            />
          ))}
        </Carousel>
      </section>

      {/* Module overview description from carousel section */}
      <section className="mx-auto my-12 mb-36 flex h-[740px] max-w-7xl items-center justify-center px-4 xl:px-0">
        <div className="h-86 mb-20 flex items-center justify-center rounded-3xl border border-solid p-4 shadow-sm">
          <div className="lg:my-22 grid grid-cols-1 gap-16 md:grid-cols-2 lg:mx-24">
            <div className="py-12">
              {selectedCard && (
                <div>
                  <div className="mb-10 text-3xl sm:text-4xl font-bold text-cf-blue-600">
                    {selectedCard.title} Overview
                  </div>
                  <div className="my-4 text-lg sm:text-xl text-cf-neutral-gray">
                    {selectedCard.overview_description}
                  </div>
                  <div className="text-lg sm:text-xl text-cf-neutral-gray">
                    {selectedCard.overview_description_2}
                  </div>
                </div>
              )}
            </div>
            <div className="m-auto hidden items-center justify-center md:block">
              <Image
                src="/module-overview.svg"
                alt="Example SVG"
                width={350}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Creators and Contributors section */}
      <section className="bg-cf-blue-600">
        <div className="relative mx-auto max-w-7xl bg-cf-blue-600 pb-12 pt-64 sm:pb-40 sm:pt-64">
          {/* Floating Brochure Box */}
          <div className="absolute left-1/2 top-0 -mt-32 flex w-full max-w-7xl -translate-x-1/2 transform flex-col items-center justify-center rounded-3xl bg-cf-yellow-600 px-6 py-14 shadow-lg sm:px-8 lg:px-12">
            <div className="grid grid-flow-row-dense grid-cols-3 flex-col p-4 sm:flex-row">
              <div className="col-span-3 mb-4 text-center text-xl font-semibold sm:col-span-2 sm:text-left sm:text-4xl">
                Interested in learning about Blockchain? Download Cardano
                Blockchain Certified Associate (CBCA) Course Brochure
              </div>
              <div className="col-span-3 flex items-center justify-center sm:col-span-1 sm:flex-row">
                <Button className="mb-2  w-11/12 bg-cf-blue-900 px-8 py-5 text-3xl text-white sm:mb-0 sm:mr-8 sm:text-[1.75rem]">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
            <h2 className="text-center text-4xl  font-bold text-white sm:mb-6 sm:text-6xl">
              Course Creators and Contributors
            </h2>
            <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-9">
              {people.map((person, index) => (
                <PersonCard
                  key={index}
                  image={person.image}
                  name={person.name}
                  position={person.position}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
