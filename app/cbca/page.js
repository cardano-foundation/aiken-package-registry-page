'use client'
import Image from 'next/image'
import Button from '@/components/Button'
import PersonCard from '@/components/PersonCard'
import Link from 'next/link'
import TargetCard from '@/components/TargetCard'
import LevelOverviewCard from '@/components/LevelOverviewCard'
import 'react-multi-carousel/lib/styles.css'

export default function Cbca() {
  // Levels cards
  const levels = [
    {
      icon: 'technical.svg',
      alt: 'Icon depicting a screwdrivers on a laptop',
      title: 'Technical',
    },
    {
      icon: 'knowledge-2.svg',
      alt: 'Icon depicting a screen with a hat',
      title: 'Self-paced',
    },
    {
      icon: 'beginner.svg',
      alt: 'Icon depicting a searching mobile phone',
      title: 'Beginner',
    },
    {
      icon: 'certified.svg',
      alt: 'Icon depicting a certificate',
      title: 'Certified',
    },
  ]

  // Carousel cards
  const cards = [
    {
      title: 'Module 1 Overview',
      content:
        "Introduces the foundation of blockchain, from the main components of a typical blockchain network, to how consensus algorithms provide a mechanism to reach agreement in decentralized systems. It delves into the Byzantine Generals' Problem and explains what Byzantine and Practical Byzantine fault-tolerant systems are. This module looks at the key concepts behind proof-of-work and proof-of-stake systems, including their respective limitations. Other proof-based consensus models including proof of authority, proof of Importance and proof of History are briefly explored. Encryption methods are examined and how hash functions and digital signatures provide data authenticity and integrity.",
      image: 'overview/module1.svg',
    },
    {
      title: 'Module 2 Overview',
      content:
        'Builds on the concepts introduced in Module 1. It defines the transaction models used in blockchain, including account-based, Unspent Transaction Output, and extended Unspent Transaction Output. It examines the content of a block and the role of the block producer. Module 2 also explains how the risks against double-spending and Sybil attacks are mitigated, the causes of soft and hard forks, and the importance of incentive mechanisms. It concludes with a look at layer 1 and layer 2 scaling solutions.',
      image: 'overview/module2.svg',
    },
    {
      title: 'Module 3 Overview',
      content:
        "Focuses on the Cardano blockchain, it describes Cardano’s genesis and genesis entities, and the mission and principles governing Cardano. It looks at the Cardano node and how the eras have developed and enhanced features of the network. Ouroboros, Cardano's consensus algorithm, is examined, along with the reward and incentive mechanism of Cardano. The governance process including Cardano Improvement Proposals is explained, along with the role of the Cardano Community. ",
      image: 'overview/module3.svg',
    },
    {
      title: 'Module 4 Overview',
      content:
        'Looks at how to get started buying, storing, and transferring ada. It also examines how staking works on Cardano with the staking lifecycle, along with the role of stake pools and stake pool operators. It describes how to create and transfer both native assets and non-fungible tokens and concludes with a look at decentralized applications and exchanges.',
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

  const targets = [
    {
      icon: 'networking.svg',
      alt: 'Icon depicting a network of people',
      description:
        '<strong>CTOs and CIOs </strong> who want a deeper understanding of the technology and principles underpinning decentralized networks and Cardano.',
    },
    {
      icon: 'developer.svg',
      alt: 'Icon depicting a person sitting in front of their laptop chatting online',
      description:
        '<strong>Lecturers, researchers, teachers,</strong> and trainers who want to understand the fundamentals of blockchain and/or teach the course material.',
    },
    {
      icon: 'online-learning.svg',
      alt: 'Icon depicting a monitor with a graduate cap',
      description:
        '<strong>Students</strong> who are interested in learning about or working in the blockchain industry.',
    },
    {
      icon: 'paper-plane.svg',
      alt: 'Icon depicting a paper airplane with a message',
      description:
        'Traditional <strong>web2 IT professionals</strong> wanting to learn about blockchain and upskill in web3.',
    },
    {
      icon: 'programming.svg',
      alt: 'Icon depicting a monitor with code on it',
      description:
        '<strong>Blockchain developers and engineers</strong> who will develop and build on the Cardano Blockchain.',
    },
    {
      icon: 'coding.svg',
      alt: 'Icon depicting a keyboard and a code symbol',
      description:
        '<strong>Implementation partners</strong> looking to expand their solution stack to include decentralized networks and Cardano.',
    },
  ]

  return (
    <main>
      <section className="relative isolate flex items-center justify-center overflow-hidden bg-cf-blue-600 py-36 pb-16 sm:pb-52 sm:pt-48">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-6 sm:px-8 lg:px-12">
          <h1 className="text-center text-4xl font-bold leading-tight text-white sm:text-6xl">
            Cardano Blockchain <br /> Certified Associate (CBCA) <br /> Course
            Overview
          </h1>
        </div>

        {/* Background gradient shapes  */}
        <div
          className="safari-fix absolute left-[-10rem] top-[-12rem] -z-10 h-[36rem] w-[36rem] overflow-hidden rounded-full bg-gradient-to-br from-[#05A6EC] to-[#036ECD] opacity-50 mix-blend-plus-lighter blur-[256px] brightness-150"
          aria-hidden="true"
        />
        <div
          className="mix-blend-plus-lighten safari-fix absolute right-[-32rem] top-[-10rem] -z-10 h-[72rem] w-[72rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#05A6EC] to-[#05A6EC] opacity-50 blur-[256px]"
          aria-hidden="true"
        />
        <div className="absolute right-0 top-0 -z-10 h-full w-full bg-[url('/noise-light.png')] bg-repeat mix-blend-overlay"></div>
      </section>

      {/* Module overview description from carousel section */}
      <section className="mx-auto flex w-full max-w-7xl flex-col space-y-8 px-6 py-12 pb-12 sm:space-y-36 sm:px-8 sm:pb-32 sm:pt-28 lg:px-12">
        {/* Floating Levels Box */}
        <div className="bg-cf-green-900 absolute left-1/2 -mt-64 hidden w-full max-w-5xl -translate-x-1/2 transform flex-col items-center justify-center rounded-3xl p-4 shadow-lg sm:p-8 lg:flex">
          <div className="my-6 grid w-full max-w-4xl grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {levels.map((level, index) => (
              <LevelOverviewCard
                key={index}
                alt={level.alt}
                icon={level.icon}
                title={level.title}
              />
            ))}
          </div>
        </div>

        {cards.map((card, index) => (
          <div
            className="flex items-center space-x-24 even:flex-row-reverse even:space-x-reverse"
            key={card.title}
          >
            <div className="flex w-full flex-col md:w-2/3">
              <h2 className="mb-2 text-3xl font-bold text-cf-blue-600 sm:mb-4 sm:text-4xl">
                {card.title}
              </h2>
              <p className="text-xl text-cf-neutral-gray md:text-justify">
                {card.content}
              </p>
            </div>
            <div className="hidden w-1/3 justify-end md:flex">
              <Image
                className="max-h-72 w-full"
                src={`/${card.image}`}
                alt={`Image of ${card.title}`}
                priority={true}
                width={416}
                height={416}
              />
            </div>
          </div>
        ))}

        <div className="mt-8 flex flex-col items-center sm:mt-16 sm:flex-row sm:justify-center">
          <Link
            target="_blank"
            href="https://ucarecdn.com/169dbd24-b9d1-4a00-a8b7-0e4302b8a82f/"
            className="flex items-center sm:justify-center"
          >
            <Button className="w-62 mb-2 bg-cf-blue-600 px-8 py-5 text-3xl text-white sm:mb-0 sm:mr-4 sm:text-[1.75rem]">
              Download course overview
            </Button>
            <Image
              className="ml-4 hidden h-[65px] w-auto sm:block"
              src={`/ada-logo.svg`}
              alt="ada logo"
              priority={true}
              width={72}
              height={72}
            />
          </Link>
        </div>
      </section>

      {/* CBCA Certification Section */}
      <section className="relative isolate flex items-center justify-center overflow-hidden bg-cf-blue-900 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 sm:px-8 lg:flex-row lg:px-12">
          <div className="flex flex-col items-center lg:w-1/2 lg:items-start">
            <Image
              className="mb-4 block h-24 w-24 lg:hidden"
              src="/certified_cbca.svg"
              alt="Certified CBCA"
              priority={true}
              width={96}
              height={96}
            />
            <h2 className="mb-6 text-center text-5xl font-bold text-white lg:text-left">
              CBCA Certification
            </h2>
            <p className="max-w-4xl text-center text-xl text-cf-offwhite lg:text-left">
              The Cardano Foundation is pleased to announce that certification
              for the Cardano Blockchain Certified Associate (CBCA) Course is
              live. To make a booking, and get certified, click below
            </p>
            <Link
              target="_blank"
              href="https://home.pearsonvue.com/cardanofoundation"
            >
              <Button className="mt-8 bg-white px-8 py-5 text-3xl sm:text-[1.75rem]">
                Get Certified
              </Button>
            </Link>
          </div>
          <div className="mt-8 lg:mt-0 lg:flex lg:w-1/2 lg:justify-end">
            <Image
              className="hidden lg:block"
              src="/certified_cbca.svg"
              alt="Certified CBCA"
              priority={true}
              width={450}
              height={450}
            />
          </div>
        </div>

        {/* Background gradient shapes  */}
        <div
          className="left-[calc(50% + 2rem)] safari-fix absolute bottom-[calc(0%-56rem)] -z-10 h-[20rem] w-[20rem] overflow-hidden rounded-full bg-gradient-to-t from-[#030321] via-[#032247] to-[#0033AD] mix-blend-plus-lighter blur-[256px] sm:h-[72rem] sm:w-[72rem]"
          aria-hidden="true"
        />
        <div
          className="safari-fix absolute left-[-25rem] top-[-25rem] -z-10 h-[40rem] w-[40rem] overflow-hidden rounded-full bg-gradient-to-br from-[#0033AD] to-[#036ECD] opacity-50 mix-blend-plus-lighter blur-[256px] sm:h-[72rem] sm:w-[72rem]"
          aria-hidden="true"
        />
        <div
          className="mix-blend-plus-lighten safari-fix absolute right-[-96rem] top-[-72rem] -z-10 h-[118rem] w-[118rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#0033AD] to-[#05A6EC] opacity-50 blur-[256px] sm:h-[156rem] sm:w-[156rem]"
          aria-hidden="true"
        />
        <div className="absolute right-0 top-0 -z-10 h-full w-full bg-[url('/noise-light.png')] bg-repeat mix-blend-overlay"></div>
      </section>

      {/* Target audience section */}
      <section className="relative bg-white py-12 sm:py-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h2 className="mb-6 text-center text-5xl font-bold text-cf-blue-600 sm:text-6xl">
            Who is the course for?
          </h2>
          <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:mb-12 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-9">
            {targets.map((target, index) => (
              <TargetCard
                key={index}
                icon={target.icon}
                alt={target.alt}
                description={target.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Course Creators and Contributors section */}
      <section className="bg-cf-blue-600">
        <div className="relative mx-auto max-w-7xl bg-cf-blue-600 pb-12 pt-12 sm:pb-40 sm:pt-56 md:pt-32 lg:pt-56">
          {/* Floating Brochure Box */}
          <div className="absolute left-1/2 top-4 -mt-32 hidden w-full max-w-7xl -translate-x-1/2 transform flex-col items-center justify-center rounded-3xl bg-cf-yellow-600 p-4 shadow-lg sm:flex sm:p-8 lg:p-14">
            <div className="flex flex-col items-center">
              <div className="mb-4 text-center text-xl font-semibold sm:text-3xl lg:text-4xl">
                Your open resource to blockchain mastery
              </div>
              <div className="mb-4 text-center text-lg sm:text-xl lg:text-2xl">
                Download{' '}
                <strong>CBCA’s quality-verified course material</strong> to
                learn offline or for incorporation into your curriculum and
                training plans
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <Link href="https://ucarecdn.com/218901af-0411-4b70-b144-8524ee669e4a/" target="_blank">
                  <Button className="mb-2 w-11/12 whitespace-nowrap bg-cf-blue-900 px-8 py-5 text-2xl text-white sm:mb-0 lg:text-[1.75rem]">
                    Download course material
                  </Button>
                </Link>
                <Link href="https://github.com/cardano-foundation/cardano-academy/" target="_blank">
                  <Button className="mb-2 w-11/12 whitespace-nowrap bg-cf-blue-900 px-8 py-5 text-2xl text-white sm:mb-0 lg:text-[1.75rem]">
                    Github repository
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
            <h2 className="max-w-2xl text-center text-4xl font-bold text-white sm:mt-12 sm:text-6xl">
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
