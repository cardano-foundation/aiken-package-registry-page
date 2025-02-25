'use client'
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'
import TargetCard from '@/components/TargetCard'
import LevelOverviewCard from '@/components/LevelOverviewCard'
import FeatureCard from '@/components/FeatureCard'
import 'react-multi-carousel/lib/styles.css'

export default function Masterclass() {
  // Summary cards
  const summary = [
    {
      icon: 'clock-green.svg',
      alt: 'Icon depicting a clock',
      title: '2-4 hours',
    },
    {
      icon: 'suitcase.svg',
      alt: 'Icon depicting a suitcase',
      title: 'Business',
    },
    {
      icon: 'vision.svg',
      alt: 'Icon depicting a screen with a an eye',
      title: 'Facilitated',
    },
    {
      icon: 'tag.svg',
      alt: 'Icon depicting a tag',
      title: 'Free',
    },
  ]

  // Targets cards
  const targets = [
    {
      icon: 'masterclass-target-1.svg',
      alt: 'Icon depicting a network of people',
      description:
        '<strong>Blockchain Basics:</strong><br/> Grasp the fundamental components and how they work together.',
    },
    {
      icon: 'masterclass-target-2.svg',
      alt: 'Icon depicting a person sitting in front of their laptop chatting online',
      description:
        '<strong>Generational Insights:</strong><br/>Understand the evolution of blockchain technology and its implications.',
    },
    {
      icon: 'masterclass-target-3.svg',
      alt: 'Icon depicting a monitor with a graduate cap',
      description:
        '<strong>Public Permissionless Blockchains:</strong><br/>Explore the operating model, key features, and considerations for your business.',
    },
    {
      icon: 'masterclass-target-4.svg',
      alt: 'Icon depicting a paper airplane with a message',
      description:
        '<strong>Blockchain Adoption Framework:</strong><br/> Learn how to assess if blockchain is the right fit for your specific needs.',
    },
    {
      icon: 'masterclass-target-5.svg',
      alt: 'Icon depicting a monitor with code on it',
      description:
        '<strong>Application Design and Value Propositions:</strong><br/>Discover how to design effective blockchain applications that deliver real value.',
    },
    {
      icon: 'masterclass-target-6.svg',
      alt: 'Icon depicting a keyboard and a code symbol',
      description:
        '<strong>Real-World Impact Analysis:</strong><br/> Evaluate the potential benefits and challenges of blockchain implementation.',
    },
  ]

  // Features cards
  const features = [
    {
      icon: 'suitcase-green.svg',
      alt: 'Icon depicting a green suitcase',
      title: 'built for business',
      description:
        'Foundational blockchain education, purpose-built for industry professionals focused on enterprise solutions.',
    },
    {
      icon: 'knowledge.svg',
      alt: 'Icon depicting a globe and a stack of books',
      title: 'cutting-edge content',
      description:
        'Written, reviewed and facilitated by experts based on the most up-to-date information and best practices.',
    },
    {
      icon: 'tutorial-2.svg',
      alt: 'Icon depicting a video playing on a monitor',
      title: 'interactive live training',
      description:
        'Interactive workshop and networking opportunity designed to enable and accelerate blockchain enterprise adoption.',
    },
  ]

  return (
    <main>
      <section className="relative isolate flex items-center justify-center overflow-hidden bg-cf-blue-600 py-36 pb-16 sm:pb-56 sm:pt-48">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-5xl font-bold text-cf-offwhite sm:text-[90px]">
              Blockchain Masterclass
            </h1>
            <p className="mt-8 text-center text-xl text-cf-offwhite sm:mt-12 sm:text-2xl ">
              Are you ready to revolutionize your business with blockchain
              technology?
            </p>
            <Link href="/partner">
              <Button className="mt-14 w-60 bg-cf-offwhite py-5 text-3xl text-black sm:text-[1.75rem] xl:w-80">
                Partner with us
              </Button>
            </Link>
          </div>
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
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center space-y-8 px-6 py-12 pb-12 sm:space-y-36 sm:px-8 sm:pb-32 sm:pt-28 lg:px-12">
        {/* Floating Levels Box */}
        <div className="bg-cf-green-900 absolute left-1/2 -mt-48 hidden w-full max-w-5xl -translate-x-1/2 transform flex-col items-center justify-center rounded-3xl p-4 shadow-lg sm:p-8 lg:flex">
          <div className="my-6 grid w-full max-w-4xl grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {summary.map((level, index) => (
              <LevelOverviewCard
                key={index}
                alt={level.alt}
                icon={level.icon}
                title={level.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Course section */}
      <section className="bg-white pb-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h2 className="mb-6 text-center text-4xl font-bold text-cf-blue-600 sm:text-6xl">
            Blockchain Masterclass
          </h2>
          <p className="pt-6 text-center text-lg text-cf-blue-600 sm:text-xl">
            Request an exclusive in-person masterclass and gain the essential
            knowledge to harness the <br /> power of blockchain for your
            organization.
          </p>
          <h1 className="border-cf-green-900 mb-10 mt-12 rounded-full border-2 border-dotted px-4 py-2 text-2xl font-bold text-cf-blue-600 sm:text-center">
            Key Takeaways
          </h1>
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

      {/* Badges Section */}
      <section className="relative isolate flex items-center justify-center overflow-hidden bg-cf-blue-900 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 sm:px-8 lg:flex-row lg:px-12">
          <div className="flex flex-col items-center lg:w-1/2 lg:items-start">
            <Image
              className="mb-4 block h-24 w-24 lg:hidden"
              src="/masterclass-partner.png"
              alt="Masterclass Partner"
              priority={true}
              width={96}
              height={96}
            />
            <h2 className="mb-6 text-center text-4xl font-bold text-white lg:text-left">
              Are you ready to revolutionize your business with blockchain
              technology?
            </h2>
            <Link href="/partner">
              <Button className="mt-8 bg-white px-8 py-5 text-3xl sm:text-[1.75rem]">
                Partner with us
              </Button>
            </Link>
          </div>
          <div className="mt-8 lg:mt-0 lg:flex lg:w-1/2 lg:justify-end">
            <Image
              className="hidden lg:block"
              src="/masterclass-partner.png"
              alt="Masterclass Partner"
              priority={true}
              width={350}
              height={350}
            />
          </div>
        </div>

        {/* Background gradient shapes  */}
        <div
          className="left-[calc(50% + 2rem)] safari-fix absolute bottom-[calc(0%-56rem)] -z-10 h-[20rem] w-[20rem] overflow-hidden rounded-full bg-gradient-to-t from-[#030321] via-[#032247] to-[#030321] mix-blend-plus-lighter blur-[256px] sm:h-[22rem] sm:w-[22rem]"
          aria-hidden="true"
        />
        <div
          className="safari-fix absolute left-[-25rem] top-[-25rem] -z-10 h-[40rem] w-[40rem] overflow-hidden rounded-full bg-gradient-to-br from-[#030321] to-[#036ECD] opacity-50 mix-blend-plus-lighter blur-[256px] sm:h-[72rem] sm:w-[72rem]"
          aria-hidden="true"
        />
        <div className="absolute right-0 top-0 -z-10 h-full w-full bg-[url('/noise-light.png')] bg-repeat mix-blend-overlay"></div>
      </section>

      {/* Features section */}
      <section className="relative bg-cf-blue-600 pb-12 sm:pb-40 sm:pt-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h2 className="mt-16 text-center text-5xl font-bold text-white sm:mb-2 sm:mt-0 sm:text-6xl">
            Learn blockchain, your way
          </h2>
          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-9">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                alt={feature.alt}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
