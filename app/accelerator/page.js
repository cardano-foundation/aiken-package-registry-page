'use client'
import Image from 'next/image'
import Button from '@/components/Button'
import PersonCard from '@/components/PersonCard'
import Link from 'next/link'
import TargetCard from '@/components/TargetCard'
import LevelOverviewCard from '@/components/LevelOverviewCard'
import FeatureCard from '@/components/FeatureCard'
import AcceleratorCard from '@/components/AcceleratorCard'
import 'react-multi-carousel/lib/styles.css'

export default function Accelerator() {
  // Summary cards
  const summary = [
    {
      icon: 'clock-green.svg',
      alt: 'Icon depicting a clock',
      title: '3 months',
    },
    {
      icon: 'knowledge-green.svg',
      alt: 'Icon depicting a book stack',
      title: '4 modules',
    },
    {
      icon: 'knowledge-2.svg',
      alt: 'Icon depicting a screen with a hat',
      title: 'Online',
    },
    {
      icon: 'tag.svg',
      alt: 'Icon depicting a tag',
      title: 'Free',
    },
  ]

  // Features cards
  const features = [
    {
      icon: 'knowledge.svg',
      alt: 'Icon depicting a globe and a stack of books',
      title: 'cutting-edge content',
      description:
        'Written and reviewed by experts based on the most up-to-date information and best practices.',
    },
    {
      icon: 'tutorial.svg',
      alt: 'Icon depicting a video playing on a monitor',
      title: 'free, learn on the go:',
      description:
        'Free course material is accessible anywhere, anytime from any device.',
    },
    {
      icon: 'cloud.svg',
      alt: 'Icon depicting a stock chart trending upward',
      title: 'retain your knowledge',
      description:
        'Gamified micro-learning delivery to maximize comprehension and retention.',
    },
  ]

  // Accelerator Pilot Program cards
  const accelerators = [
    {
      icon: 'technical-acceleration.svg',
      alt: 'Icon depicting a globe and a stack of books',
      title: 'Technical',
      curriculum: [
        'CBCA + Certification',
        'Technical expertise',
        'Product development',
      ],
    },
    {
      icon: 'commercial.svg',
      alt: 'Icon depicting a video playing on a monitor',
      title: 'Commercial',
      curriculum: [
        'Go to market',
        'Business development',
        'Marketing',
        'Regulatory and compliance',
      ],
    },
    {
      icon: 'acceleration.svg',
      alt: 'Icon depicting a stock of blocks',
      title: 'Acceleration',
      curriculum: ['Operations', 'Communing building', 'Partnerships'],
    },
    {
      icon: 'raising.svg',
      alt: 'Icon depicting a stock chart trending upward',
      title: 'Raising',
      curriculum: [
        'Fundraising preparation',
        'Project catalyst applications',
        'Pitch development',
      ],
    },
  ]

  return (
    <main>
      <section className="bg-cf-green-900 relative isolate flex items-center justify-center overflow-hidden py-36 pb-16 sm:pb-44 sm:pt-48">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-5xl font-bold text-cf-offwhite sm:text-black sm:text-[90px] ">
              Cardano Accelerator <br />
              Pilot Program
            </h1>
            <p className="text-center mt-8 text-xl text-cf-offwhite sm:text-black sm:mt-12 sm:text-2xl">
              Supercharge your Cardano blockchain enterprise venture
            </p>
            <Link href="/partner">
              <Button className="mt-14 w-60 bg-black py-5 text-3xl text-cf-offwhite sm:text-[1.75rem] xl:w-80">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Background gradient shapes  */}
        <div
          className="mix-blend-plus-lighten safari-fix absolute left-[-32rem] top-[-45rem] -z-10 h-[72rem] w-[85rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#05153D] to-[#0033AD] opacity-100 blur-[206px]"
          aria-hidden="true"
        />
        <div
          className="mix-blend-plus-lighten safari-fix absolute left-[-32rem] top-[35rem] -z-10 h-[72rem] w-[72rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#05153D] to-[#0033AD] opacity-100 blur-[206px]"
          aria-hidden="true"
        />
        <div
          className="mix-blend-plus-lighten safari-fix absolute right-[-32rem] top-[15rem] -z-10 h-[72rem] w-[82rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#05153D] to-[#0033AD] opacity-100 blur-[206px]"
          aria-hidden="true"
        />
                <div
          className="mix-blend-plus-lighten safari-fix absolute right-[-32rem] top-[-50rem] -z-10 h-[52rem] w-[80rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#05153D] to-[#0033AD] opacity-100 blur-[206px]"
          aria-hidden="true"
        />
        <div className="absolute right-0 top-0 -z-10 h-full w-full bg-[url('/noise-light.png')] bg-repeat mix-blend-overlay"></div>
      </section>

      {/* Module overview description from carousel section */}
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center space-y-8 px-6 py-12 pb-12 sm:space-y-36 sm:px-8 sm:pb-32 sm:pt-28 lg:px-12">
        {/* Floating Levels Box */}
        <div className="bg-cf-green-900 absolute bottom-12 left-1/2 -mt-32 hidden w-full max-w-5xl -translate-x-1/2 transform flex-col items-center justify-center rounded-3xl p-4 shadow-lg sm:p-8 md:flex">
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

      {/* Accelerator Pilot Program section */}
      <section className="relative pb-12 sm:pb-40">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h2 className="mb-6 text-4xl font-bold sm:text-cf-blue-600 sm:text-center sm:text-6xl">
            Cardano Accelerator Pilot Program
          </h2>
          <p className="pt-6 text-lg text-cf-blue-600 sm:text-center sm:text-xl">
            Are you a business building on Cardano? The Cardano Accelerator
            Pilot Program is designed to <br /> close the gap between proof of
            concept and product-market fit. Empower yourself and your team{' '}
            <br /> with knowledge, and access to a network of experts and
            opportunity.
          </p>
        </div>

        <div className="mx-auto mb-0 mt-12 grid w-full max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 sm:px-8 md:mb-20 lg:grid-cols-4 lg:px-12">
          {accelerators.map((accelerator, index) => (
            <AcceleratorCard
              key={index}
              className=""
              icon={accelerator.icon}
              title={accelerator.title}
              curriculum={accelerator.curriculum}
            />
          ))}
        </div>

        {/* Accelerator Program Floating Box */}
        <div className="bg-cf-green-900 top-35 absolute left-1/2 z-20 hidden w-full max-w-6xl -translate-x-1/2 transform flex-col items-center justify-between rounded-3xl px-6 shadow-lg sm:flex sm:px-16 lg:flex-row ">
          <div className="flex flex-col items-center lg:w-1/2 lg:items-start">
            <h2 className="white mb-6 text-center text-3xl font-bold sm:text-3xl lg:text-left lg:text-4xl">
              Access the business and technical expertise you need to accelerate
              your business
            </h2>
            <a href="/Academy-Overview.pdf" target="_blank">
              <Button className="mt-8 bg-cf-offwhite px-8 py-5 text-3xl sm:text-[1.75rem]">
                Apply now
              </Button>
            </a>
          </div>
          <div className="lg:mt-0 lg:flex lg:w-1/2 lg:justify-end">
            <Image
              className="hidden lg:block"
              src="/accelerator_program.svg"
              alt="Accelerator Program"
              priority={true}
              width={350}
              height={350}
            />
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="relative bg-cf-blue-600 pb-12 sm:pb-40 sm:pt-60">
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
