import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import LevelCard from '@/components/LevelCard'
import StatCard from '@/components/StatCard'
import FundamentalStatCard from '@/components/FundamentalStatCard'
import FeatureCard from '@/components/FeatureCard'
import { SignUpHubspot } from '@/lib/hubspot-integration/SignUpHubspot.component'

export const metadata = {
  title: 'Blockchain Course',
  description:
    'In-depth training course to get you from beginner to advanced blockchain knowledge. Free access to high-quality, up-to-date, self-paced learning material.',
  openGraph: {
    // openGraphImage
    title: 'Blockchain Course',
    description:
      'In-depth training course to get you from beginner to advanced blockchain knowledge. Free access to high-quality, up-to-date, self-paced learning material.',
  },
}

const stats = [
  {
    stat: '4',
    description: 'Modules',
    icon: 'globe-book.svg',
    alt: 'Icon depicting a globe and a stack of books',
  },
  {
    stat: '29',
    description: 'Units',
    icon: 'online-book.svg',
    alt: 'Icon depicting a book on a monitor',
  },
  {
    stat: '3,954',
    description: 'Learners',
    icon: 'tester.svg',
    alt: 'Icon depicting a person sitting at their laptop',
  },
]

const statsFundamentals = [
  {
    stat: '5',
    description: 'Modules',
    icon: 'globe-book.svg',
    alt: 'Icon depicting a globe and a stack of books',
  },
  {
    stat: '1.5',
    description: 'Hours',
    icon: 'clock.svg',
    alt: 'Icon timer',
  },
]

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

const levelsFundamentals = [
  {
    icon: 'business.svg',
    alt: 'Icon depicting a briefcase',
    title: 'Business',
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
]

const features = [
  {
    icon: 'knowledge.svg',
    alt: 'Icon depicting a globe and a stack of books',
    title: 'cutting-edge content',
    description:
      'Written and reviewed by experts based on the most up-to-date information and best practices.',
  },
  {
    icon: 'growth.svg',
    alt: 'Icon depicting a cloud and a graduate cap',
    title: 'learn at your own pace',
    description:
      'Self-paced knowledge transfer tailored to your learning style and personal journey.',
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
  {
    icon: 'innovation.svg',
    alt: 'Icon depicting a person with a sparkling lightbulb over their head',
    title: 'test your knowledge',
    description:
      'Gain confidence in your new skills with assessments to access understanding.',
  },
  {
    icon: 'glass.svg',
    alt: 'Icon depicting a cube seen through a magnifying glass',
    title: 'get certified',
    description:
      'Learn to earn digital badges and get certified to validate your skills and accelerate your career.',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="relative isolate flex items-center justify-center overflow-hidden bg-cf-blue-900 pb-12 pt-36 sm:pb-40 sm:pt-64">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-[90px]">
              Learn About
              <br /> Blockchain
            </h1>
            <p className="mt-8 text-xl text-white sm:mt-12 sm:text-2xl">
              Empowering the digital architects of the{' '}
              <br className="hidden sm:block" />
              future.
            </p>
            <div className="mt-14 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/partner">
                <Button className="w-48 bg-white py-4 text-2xl text-cf-blue-600 sm:text-[1.5rem] xl:w-60">
                  Partner with Us
                </Button>
              </Link>
              <Link target="_blank" href="https://learn.academy.cardanofoundation.org/register">
                <Button className="w-48 bg-white py-4 text-2xl text-cf-blue-600 sm:text-[1.5rem] xl:w-60">
                  Start Learning
                </Button>
              </Link>
            </div>
          </div>
          <Image
            className="hidden lg:block"
            src="/landing_mockup.png"
            alt="Cardano Academy Mobile Dashboard"
            priority={true}
            width={500}
            height={500}
          />
        </div>

        {/* Background gradient shapes  */}
        <div
          className="left-[calc(50% + 2rem)] safari-fix absolute bottom-[calc(0%-56rem)] -z-10 h-[20rem] w-[20rem] overflow-hidden rounded-full bg-gradient-to-t from-[#030321] via-[#032247] to-[#05A6EC] mix-blend-plus-lighter blur-[256px] sm:h-[72rem] sm:w-[72rem]"
          aria-hidden="true"
        />
        <div
          className="safari-fix absolute left-[-25rem] top-[-25rem] -z-10 h-[40rem] w-[40rem] overflow-hidden rounded-full bg-gradient-to-br from-[#05A6EC] to-[#036ECD] opacity-50 mix-blend-plus-lighter blur-[256px] sm:h-[72rem] sm:w-[72rem]"
          aria-hidden="true"
        />
        <div
          className="mix-blend-plus-lighten safari-fix absolute right-[-96rem] top-[-72rem] -z-10 h-[118rem] w-[118rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#05A6EC] to-[#05A6EC] opacity-50 blur-[256px] sm:h-[156rem] sm:w-[156rem]"
          aria-hidden="true"
        />
        <div className="absolute right-0 top-0 -z-10 h-full w-full bg-[url('/noise-light.png')] bg-repeat mix-blend-overlay"></div>
      </section>

      {/* Course section */}
      <section className="bg-white pb-32 pt-12 sm:pt-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h1 className="border-cf-green-900 mb-10 rounded-full border-2 border-dotted px-4 py-2 text-2xl font-bold text-cf-blue-600 sm:text-center">
            Featured course
          </h1>
          <h2 className="mb-6 text-center text-4xl font-bold text-cf-blue-600 sm:text-6xl">
            Cardano Blockchain Certified
            <br /> Associate (CBCA)
          </h2>
          <div className="my-6 grid w-full max-w-4xl grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 ">
            {levels.map((level, index) => (
              <LevelCard
                key={index}
                alt={level.alt}
                icon={level.icon}
                title={level.title}
              />
            ))}
          </div>
          <p className="pt-6 text-lg text-cf-blue-600 sm:text-center sm:text-xl">
            Gain a comprehensive introduction to blockchain, with an extra focus
            on the Cardano technology. <br />
            Go from the fundamentals to advanced concepts, plus take an in-depth
            look at the Cardano
            <br />
            blockchain and how to get started.
          </p>
          <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 md:gap-9 lg:grid-cols-3 lg:gap-16">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                alt={stat.alt}
                icon={stat.icon}
                stat={stat.stat}
                description={stat.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center sm:mt-16 sm:flex-row sm:justify-center">
          <Link target="_blank" href="https://learn.academy.cardanofoundation.org/register">
            <Button className="mb-2 w-72 bg-cf-blue-900 px-8 py-5 text-3xl text-white sm:mb-0 sm:mr-8 sm:text-[1.75rem]">
              Start learning
            </Button>
          </Link>
          <Link href="/cbca">
            <Button className="bg-cf-green-900 w-72 px-8 py-5 text-3xl sm:text-[1.75rem]">
              Learn More
            </Button>
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
              href="https://www.pearsonvue.com/us/en/cardanofoundation.html"
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

      {/* Fundamentals section */}
      <section className="bg-white pb-32 pt-12  sm:pt-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h1 className="mb-10 rounded-full bg-cf-blue-600 px-6 py-3 text-4xl font-bold text-white sm:text-center">
            Coming soon!
          </h1>
          <h2 className="mb-6 text-center text-4xl font-bold text-cf-blue-600 sm:text-6xl">
            Blockchain Fundamentals
          </h2>
          <div className="my-6 grid w-full max-w-2xl grid-cols-1 gap-9 lg:grid-cols-3">
            {levelsFundamentals.map((level, index) => (
              <LevelCard
                key={index}
                alt={level.alt}
                icon={level.icon}
                title={level.title}
              />
            ))}
          </div>
          <p className="pt-6 text-lg text-cf-blue-600 sm:text-center sm:text-xl">
            This foundational course covers the fundamentals of blockchain and
            is ideal for learners who are new <br />
            to blockchain and interested in what it is, how it works and its
            evolving use cases and <br />
            applications.
          </p>
          <div className="mt-16 grid w-full max-w-xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            {statsFundamentals.map((stat, index) => (
              <FundamentalStatCard
                key={index}
                alt={stat.alt}
                icon={stat.icon}
                stat={stat.stat}
                description={stat.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center sm:mt-16 sm:flex-row sm:justify-center">
          <Link href="/blockchain-fundamentals" className="flex items-center">
            <Button className="w-62 mb-2 bg-cf-blue-900 px-8 py-5 text-3xl text-white sm:mb-0 sm:mr-4 sm:text-[1.75rem]">
              Learn more
            </Button>
          </Link>
        </div>
      </section>

      {/* Badges Section */}
      <section className="relative isolate flex items-center justify-center overflow-hidden bg-cf-blue-900 py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 sm:px-8 lg:flex-row lg:px-12">
          <div className="flex flex-col items-center lg:w-1/2 lg:items-start">
            <Image
              className="mb-4 block h-24 w-24 lg:hidden"
              src="/business_learn_fundamentals.svg"
              alt="Business Learn Fundamentals"
              priority={true}
              width={96}
              height={96}
            />
            <h2 className="mb-6 text-center text-5xl font-bold text-white lg:text-left">
              Learn and share badges
            </h2>
            <p className="max-w-4xl text-center text-xl text-cf-offwhite lg:text-left">
              Sign up to receive the latest course and badge updates.
            </p>
            <div className="p-4 sm:p-6">
              <SignUpHubspot />
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:flex lg:w-1/2 lg:justify-end">
            <Image
              className="hidden lg:block"
              src="/business_learn_fundamentals.svg"
              alt="Business Learn Fundamentals"
              priority={true}
              width={470}
              height={470}
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
      <section className="relative bg-cf-blue-600 pb-12 sm:pb-40 sm:pt-32">
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

        <div className="absolute bottom-[-6rem] left-1/2 z-20 hidden w-full max-w-7xl -translate-x-1/2 transform flex-col items-center justify-center rounded-3xl bg-cf-yellow-600 p-4 shadow-lg sm:flex sm:p-8 lg:p-10">
          <div className="flex flex-col items-center">
            <div className="mb-8 text-center text-xl font-semibold sm:text-3xl lg:text-4xl">
              Start your learning journey today!
            </div>
            <div className="flex items-center justify-center">
              <a
                href="https://learn.academy.cardanofoundation.org/register"
                target="_blank"
              >
                <Button className="mb-2 w-11/12 whitespace-nowrap bg-cf-blue-900 px-8 py-5 text-3xl text-white sm:mb-0 lg:text-[1.75rem]">
                  Register now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
