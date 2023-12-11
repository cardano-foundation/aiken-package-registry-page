'use client'
import Image from 'next/image'
import Button from '@/components/Button'
import PersonCard from '@/components/PersonCard'
import 'react-multi-carousel/lib/styles.css'

export default function Overview() {
  // Carousel cards
  const cards = [
    {
      title: 'Module 1 Overview',
      content: 'Introduces the foundation of blockchain, from the main components of a typical blockchain network, to how consensus algorithms provide a mechanism to reach agreement in decentralized systems. It delves into the Byzantine Generals\' Problem and explains what Byzantine and Practical Byzantine fault-tolerant systems are. This module looks at the key concepts behind proof-of-work and proof-of-stake systems, including their respective limitations. Other proof-based consensus models including proof of authority, proof of Importance and proof of History are briefly explored. Encryption methods are examined and how hash functions and digital signatures provide data authenticity and integrity.',
      image: 'overview/module1.svg',
    },
    {
      title: 'Module 2 Overview',
      content: 'Builds on the concepts introduced in Module 1. It defines the transaction models used in blockchain, including account-based, Unspent Transaction Output, and extended Unspent Transaction Output. It examines the content of a block and the role of the block producer. Module 2 also explains how the risks against double-spending and Sybil attacks are mitigated, the causes of soft and hard forks, and the importance of incentive mechanisms. It concludes with a look at layer 1 and layer 2 scaling solutions.',
      image: 'overview/module2.svg',
    },
    {
      title: 'Module 3 Overview',
      content: 'Focuses on the Cardano blockchain, it describes Cardano’s genesis and genesis entities, and the mission and principles governing Cardano. It looks at the Cardano node and how the eras have developed and enhanced features of the network. Ouroboros, Cardano\'s consensus algorithm, is examined, along with the reward and incentive mechanism of Cardano. The governance process including Cardano Improvement Proposals is explained, along with the role of the Cardano Community. ',
      image: 'overview/module3.svg',
    },
    {
      title: 'Module 4 Overview',
      content: 'Looks at how to get started buying, storing, and transferring ada. It also examines how staking works on Cardano with the staking lifecycle, along with the role of stake pools and stake pool operators. It describes how to create and transfer both native assets and non-fungible tokens and concludes with a look at decentralized applications and exchanges.',
      image: 'overview/module4.svg',
    },
  ]


  // Course Creators and Contributors peo
  const people = [
    {
      name: 'Matthias Benkort',
      position: 'Technical Director of Open Source',
      image: 'contributors/Matthias-Benkort.jpeg',
    },
    {
      name: 'John Greene',
      position: 'Technical Blockchain Educator',
      image: 'contributors/John-Greene.jpeg',
    },
    {
      name: 'Vanessa Hurhangee',
      position: 'Education Manager',
      image: 'contributors/Vanessa-Hurhangee.jpg',
    },
    {
      name: 'Thomas Mayfield',
      position: 'Team Lead - Decentralized  Trust and Identity Solutions',
      image: 'contributors/Thomas-Mayfiel.jpeg',
    },
    {
      name: 'Michiel Bellen',
      position: 'Core Integrations Team Lead',
      image: 'contributors/Michiel-Bellen.jpeg',
    },
    {
      name: 'Denicio Bute',
      position: 'Community Manager',
      image: 'contributors/Denicio-Bute.jpeg',
    },
  ]

  return (
    <main>

      <section className="relative isolate py-36 pb-16 sm:pb-32 sm:pt-48 flex justify-center items-center bg-cf-blue-600 overflow-hidden">
        <div className="flex justify-center items-center mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <h1 className="text-4xl sm:text-6xl text-white leading-tight font-bold text-center">
            Cardano Blockchain <br /> Certified Associate (CBCA) <br /> Course Overview
          </h1>
        </div>

        {/* Background gradient shapes  */}
        <div
          className="absolute mix-blend-plus-lighter brightness-150 opacity-50 left-[-10rem] top-[-12rem] -z-10 overflow-hidden blur-[256px] w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-[#05A6EC] to-[#036ECD] safari-fix"
          aria-hidden="true"
        />
        <div
          className="absolute mix-blend-plus-lighten opacity-50 right-[-32rem] top-[-10rem] -z-10 overflow-hidden blur-[256px] w-[72rem] h-[72rem] rounded-full bg-gradient-to-bl from-[#05A6EC] to-[#05A6EC] safari-fix"
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise-light.png')] bg-repeat mix-blend-overlay -z-10"></div>
      </section>

      {/* Module overview description from carousel section */}
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12 space-y-8 sm:space-y-36 py-12 pb-44 sm:py-40 sm:pb-64">
        {/*map over cards*/}
        {cards.map((card, index) => (
          <div className="flex even:flex-row-reverse space-x-24 even:space-x-reverse items-center" key={card.title}>
            <div className="flex flex-col w-full md:w-2/3">
              <h2 className="text-3xl sm:text-4xl font-bold text-cf-blue-600 mb-2 sm:mb-4">
                {card.title}
              </h2>
              <p className="text-xl text-cf-neutral-gray md:text-justify">{card.content}</p>
            </div>
            <div className="hidden md:flex justify-end w-1/3">
              <Image
                className="max-h-64 w-full"
                src={`/${card.image}`}
                alt={`Image of ${card.title}`}
                priority={true}
                width={416}
                height={416}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Course Creators and Contributors section */}
      <section className="bg-cf-blue-600">
        <div className="relative mx-auto max-w-7xl bg-cf-blue-600 pb-12 sm:pb-40 pt-32 sm:pt-56 md:pt-32 lg:pt-56">
          {/* Floating Brochure Box */}
          <div className="absolute left-1/2 top-0 -mt-32 flex w-full max-w-7xl -translate-x-1/2 transform flex-col items-center justify-center rounded-3xl bg-cf-yellow-600 shadow-lg p-4 sm:p-8 lg:p-16">
            <div className="grid grid-flow-row-dense grid-cols-3 flex-col sm:flex-row">
              <div className="col-span-3 mb-4 text-center text-xl font-semibold md:col-span-2 sm:text-left sm:text-3xl lg:text-4xl">
                Interested in learning about Blockchain? Download Cardano
                Blockchain Certified Associate (CBCA) Course Overview.
              </div>
              <div className="col-span-3 flex items-center justify-center md:col-span-1 sm:flex-row">
                <Button className="mb-2  w-11/12 bg-cf-blue-900 px-8 py-5 text-3xl text-white sm:mb-0 lg:text-[1.75rem]">
                  Download Overview
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
            <h2 className="text-center text-4xl max-w-2xl font-bold text-white sm:text-6xl">
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
