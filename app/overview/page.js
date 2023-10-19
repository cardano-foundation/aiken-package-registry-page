"use client";
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'
import PersonCard from '@/components/PersonCard'
import CarouselCard from '@/components/CarouselCard'

export default function Overview() {
  const [moduleOverview, setModuleOverview] = useState('Module 1')

  useEffect(() => {
    console.log(moduleOverview, '???????');
  }, [moduleOverview])

  const cards = [
    {
      title: 'Module 1',
      description:
        'Introduces the foundation of blockchain, from the main components of a typical blockchain network',
      link: 'link',
      image: 'module-image.svg',
      overview_description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain, including account-based, Unspent Transaction Output and extended Unspent Transaction Output.',
    },
    {
      title: 'Module 2',
      description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain',
      link: 'link',
      image: 'module-image.svg',
      overview_description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain, including account-based, Unspent Transaction Output and extended Unspent Transaction Output.',
    },
    {
      title: 'Module 3',
      description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain',
      link: 'link',
      image: 'module-image.svg',
      overview_description:
        'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain, including account-based, Unspent Transaction Output and extended Unspent Transaction Output.',
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
          <h1 className="mb-4 w-[800px] text-6xl font-bold">
            Cardano Blockchain Certified Associate (CBCA) Course Overview
          </h1>
        </div>
        <div className="absolute h-screen w-full bg-[url('/noise-light.png')] bg-repeat opacity-25"></div>
      </section>

      {/* Module carousel  section */}
      <section className="relative -mt-40 flex items-center justify-center overflow-hidden pb-10 pt-10">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <CarouselCard
              key={index}
              title={card.title}
              description={card.description}
              link={card.link}
              image={card.image}
              setModuleOverview={setModuleOverview}
            />
          ))}
        </div>
      </section>

      {/* Module overview description from carousel section */}
      <section className="mb-24 flex h-[740px] items-center justify-center">
        <div className="h-86 mb-20 flex h-[560px] w-[1264px] items-center justify-center rounded-3xl border-2 border-solid p-4 shadow-sm ">
          <div className="grid grid-cols-1 place-items-center gap-10 p-20 sm:grid-cols-2">
            <div>
              <div className="mb-10 text-5xl font-bold text-cf-blue-600">
                Module 2 Overview
              </div>
              <div className="mb-4 text-xl font-extralight text-cf-gray-600">
                Builds on the concepts introduced in module 1. It defines the
                transactions models used in blockchain, including account-based,
                Unspent Transaction Output and extended Unspent Transaction
                Output.
              </div>
              <div className="mb-4 text-xl font-extralight text-cf-gray-600">
                It examines the content of a block and the role of the block
                producer. Module 2 also explains how the risks against
                double-spending and Sybil attacks are mitigated, the causes of
                soft and hard forks and the importance of incentive mechanisms.
                It concludes with a look at layer 1 and layer 2 scaling
                solutions.
              </div>
            </div>
            <div className="hidden items-center justify-center sm:block">
              <Image
                src="/images/module.svg"
                alt="Example SVG"
                width={350}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Creators and Contributors section */}
      <section className="relative bg-cf-blue-600 py-12 sm:py-40">
        {/* Floating Brochure Box */}
        <div className="absolute left-1/2 top-0 -mt-32 flex w-full max-w-7xl -translate-x-1/2 transform flex-col items-center justify-center rounded-3xl bg-cf-yellow-600 px-6 py-14 shadow-lg sm:px-8 lg:px-12">
          <div className="flex-col sm:flex-row grid grid-flow-row-dense grid-cols-3">
            <div className="mb-4 text-4xl font-bold col-span-2">
              Interested in learning about Blockchain? Download Cardano
              Blockchain Certified Associate (CBCA) Course Brochure
            </div>
            <div className='flex items-center'>
              <Button className="py-12 w-full bg-cf-blue-900 text-3xl text-white sm:text-[1.75rem] col-span-1">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h2 className="mb-6 mt-20 w-[750px] text-center text-6xl font-bold text-white">
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
