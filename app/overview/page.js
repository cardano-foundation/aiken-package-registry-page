'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import PersonCard from '@/components/PersonCard'
import CarouselCard from '@/components/CarouselCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function Overview() {
  const [moduleOverview, setModuleOverview] = useState('Module 1')

  // Carousel responsive scaling
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const cards = [
    {
      title: 'Module 1',
      description:
        'Introduces the foundation of blockchain, from the main components of a typical blockchain network',
      image: 'module-image.jpeg',
      overview_description:
        'Module 1: Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain, including account-based, Unspent Transaction Output and extended Unspent Transaction Output.',
      overview_description_2:
        'It examines the content of a block and the role of the block producer. Module 2 also explains how the risks against double-spending and Sybil attacks are mitigated, the causes of soft and hard forks and the importance of incentive mechanisms. It concludes with a look at layer 1 and layer 2 scaling solutions.',
    },
    {
      title: 'Module 2',
      description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain',
      image: 'module-image.jpeg',
      overview_description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain, including account-based, Unspent Transaction Output and extended Unspent Transaction Output.',
      overview_description_2:
        'It examines the content of a block and the role of the block producer. Module 2 also explains how the risks against double-spending and Sybil attacks are mitigated, the causes of soft and hard forks and the importance of incentive mechanisms. It concludes with a look at layer 1 and layer 2 scaling solutions.',
    },
    {
      title: 'Module 3',
      description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain',
      image: 'module-image.jpeg',
      overview_description:
        'Module 3: Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain, including account-based, Unspent Transaction Output and extended Unspent Transaction Output.',
      overview_description_2:
        'It examines the content of a block and the role of the block producer. Module 2 also explains how the risks against double-spending and Sybil attacks are mitigated, the causes of soft and hard forks and the importance of incentive mechanisms. It concludes with a look at layer 1 and layer 2 scaling solutions.',
    },
    {
      title: 'Module 4',
      description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain',
      image: 'module-image.jpeg',
      overview_description:
        'Module 4: Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain, including account-based, Unspent Transaction Output and extended Unspent Transaction Output.',
      overview_description_2:
        'It examines the content of a block and the role of the block producer. Module 2 also explains how the risks against double-spending and Sybil attacks are mitigated, the causes of soft and hard forks and the importance of incentive mechanisms. It concludes with a look at layer 1 and layer 2 scaling solutions.',
    },
  ]

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
    <main className="">
      <section className="relative isolate flex h-[70vh] items-center justify-center overflow-hidden bg-cf-blue-900">
        <div
          className="left-[calc(50% + 2rem)] absolute bottom-[calc(0%-56rem)] -z-10 h-[72rem] w-[72rem] overflow-hidden rounded-full bg-gradient-to-t from-[#030321] via-[#032247] to-[#05A6EC] blur-[256px]"
          aria-hidden="true"
        />
        <div
          className="absolute left-[-25rem] top-[-25rem] -z-10 h-[72rem] w-[72rem] overflow-hidden rounded-full bg-gradient-to-br from-cf-blue-400 to-cf-blue-200 opacity-60 blur-[256px]"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-96rem] top-[-72rem] -z-10 h-[156rem] w-[156rem] overflow-hidden rounded-full bg-gradient-to-bl from-cf-blue-300 to-[#05A6EC] opacity-70 blur-[256px]"
          aria-hidden="true"
        />
        <div className="relative z-10 flex max-w-2xl flex-col items-center text-center text-white">
          <h1 className="mb-4 w-[800px] text-4xl sm:text-6xl font-bold px-52 sm:px-0">
            Cardano Blockchain Certified Associate (CBCA) Course Overview
          </h1>
        </div>
        <div className="absolute h-screen w-full bg-[url('/noise-light.png')] bg-repeat opacity-25"></div>
      </section>

      {/* Module Carousel section */}
      <section className="relative -mt-40 overflow-hidden px-60">
        <Carousel arrows infinite responsive={responsive}>
          {cards.map((card, index) => (
            <CarouselCard
              className="m-auto flex justify-center"
              key={index}
              title={card.title}
              description={card.description}
              link={card.link}
              image={card.image}
              setModuleOverview={setModuleOverview}
            />
          ))}
        </Carousel>
      </section>

      {/* Module overview description from carousel section */}
      <section className="mb-24 flex h-[740px] items-center justify-center">
        <div className="h-86 mb-20 flex h-[560px] w-[1264px] items-center justify-center rounded-3xl border-2 border-solid p-4 shadow-xl">
          <div className="lg:my-22 lg:mx-24 grid grid-cols-1 gap-16 sm:grid-cols-2">
            <div>
              {selectedCard && (
                <div>
                  <div className="s,m:mb-10 text-4xl font-bold text-cf-blue-600">
                    {selectedCard.title} Overview
                  </div>
                  <div className="my-4 text-xl font-extralight text-cf-gray-600">
                    {selectedCard.overview_description}
                  </div>
                  <div className="text-xl font-extralight text-cf-gray-600">
                    {selectedCard.overview_description_2}
                  </div>
                </div>
              )}
            </div>
            <div className="m-auto hidden items-center justify-center sm:block">
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
      <section className="relative bg-cf-blue-600 pt-80 pb-12 sm:pt-64 sm:pb-40">
        {/* Floating Brochure Box */}
        <div className="absolute left-1/2 top-0 -mt-32 flex w-full max-w-7xl -translate-x-1/2 transform flex-col items-center justify-center rounded-3xl bg-cf-yellow-600 px-6 py-14 shadow-lg sm:px-8 lg:px-12">
          <div className="grid grid-flow-row-dense grid-cols-3 flex-col p-4 sm:flex-row">
            <div className="col-span-3 mb-4 text-xl text-center sm:text-left font-semibold sm:col-span-2 sm:text-4xl">
              Interested in learning about Blockchain? Download Cardano
              Blockchain Certified Associate (CBCA) Course Brochure
            </div>
            <div className="flex items-center sm:flex-row">
              <Button className="w-11/12w-72 text-white bg-cf-blue-900 text-3xl sm:text-[1.75rem] py-5 px-8 sm:mr-8 mb-2 sm:mb-0">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h2 className="text-6xl text-white font-bold sm:mb-6 text-center">
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
      </section>
    </main>
  )
}
