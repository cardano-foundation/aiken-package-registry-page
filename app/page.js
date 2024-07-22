import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import StatCard from '@/components/StatCard'
import FeatureCard from '@/components/FeatureCard'
import TargetCard from '@/components/TargetCard'

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
    stat: '621',
    description: 'Testers',
    icon: 'tester.svg',
    alt: 'Icon depicting a person sitting at their laptop',
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
      'Enhance your profile by becoming an accredited associate or expert. Coming soon.',
  },
]

const targets = [
  {
    icon: 'networking.svg',
    alt: 'Icon depicting a network of people',
    description:
      '<strong>Business Professionals, decision-makers, entrepreneurs</strong> who want to learn more about blockchain for their businesses',
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
      '<strong>General public</strong> interested in blockchain, and in working with blockchain in the future.',
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
            <Link href="/partner">
              <Button className="mt-14 bg-white w-60 xl:w-80 py-5 text-3xl text-cf-blue-600 sm:text-[1.75rem]">
                Partner with Us
              </Button>
            </Link>
            <Link href="https://learn.academy.cardanofoundation.org/register">
              <Button className="mt-4 bg-white w-60 xl:w-80 py-5 text-3xl text-cf-blue-600 sm:text-[1.75rem]">
                Start Learning
              </Button>
            </Link>
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

      {/* About section / will be uncommented */}
      {/* <section className="bg-cf-blue-600 py-12 sm:py-40">
        <div className="flex justify-center items-center mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex flex-col justify-center items-start lg:pr-24">
            <h2 className="text-5xl sm:text-6xl text-white font-bold mb-6">
              About the Academy
            </h2>
            <p className="text-white text-lg sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /><br />

              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />

              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br />

              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Image
            className="hidden lg:block"
            src="/landing_mockup2.png"
            alt="Cardano Academy Mobile Dashboard"
            priority={true}
            width={490}
            height={500}
          />
        </div>
      </section> */}

      {/* Course section */}
      <section className="bg-white pb-48 pt-12 sm:pb-64 sm:pt-40">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h2 className="mb-6 text-4xl font-bold text-cf-blue-600 sm:text-center sm:text-6xl">
            Cardano Blockchain Certified <br /> Associate (CBCA) Course Overview
          </h2>
          <p className="pt-6 text-lg text-cf-blue-600 sm:text-center sm:text-xl">
            Launching the Cardano Academy’s first certified course with: Cardano
            Blockchain Certified <br />
            Associate (CBCA) Course. No prior knowledge or experience of
            blockchain is needed.
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
      </section>

      {/* Features section */}
      <section className="relative bg-cf-blue-600 pb-12 pt-80 sm:pb-40 sm:pt-64">
        {/* Floating CTA */}
        <div className="absolute left-1/2 top-0 -mt-32 flex w-full max-w-7xl -translate-x-1/2 transform flex-col items-center justify-center rounded-3xl bg-cf-green-600 px-6 py-14 shadow-lg sm:px-8 lg:px-12">
          <h2 className="mb-6 text-center text-4xl font-bold text-cf-blue-900 sm:text-5xl">
            Start your learning journey today!
          </h2>
          <h3 className="mb-8 text-center text-4xl text-cf-blue-900 sm:text-xl">
            <strong>Launch:</strong> December 14th 2023
          </h3>
          <div className="flex flex-col sm:flex-row">
            <Link href="https://learn.academy.cardanofoundation.org/register">
              <Button className="mb-2 w-72 bg-cf-blue-900 px-8 py-5 text-3xl text-white sm:mb-0 sm:mr-8 sm:text-[1.75rem]">
                Start Learning
              </Button>
            </Link>
            <Link href="/overview">
              <Button className="w-72 bg-white px-8 py-5 text-3xl text-cf-blue-900 sm:text-[1.75rem]">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h2 className="text-center mt-16 sm:mt-0 text-5xl font-bold text-white sm:mb-6 sm:text-6xl">
            Learn blockchain, your way
          </h2>
          <p className="pt-2 text-center text-xl text-white">
            Interested in learning about Blockchain?
          </p>

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

      {/* Target audience section */}
      <section className="relative bg-white py-12 sm:py-40">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h2 className="mb-6 text-center text-5xl font-bold text-cf-blue-600 sm:text-6xl">
            Who is the course for?
          </h2>

          <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-9">
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

      {/* CTA Section */}
      <section className="relative bg-cf-blue-600 py-12 sm:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <h2 className="mb-6 text-center text-5xl font-bold text-white">
            CBCA Certification Coming Soon!
          </h2>
          <p className="max-w-4xl text-center text-xl text-cf-offwhite">
            The Cardano Foundation is pleased to announce that for the CBCA
            course, you will soon have the opportunity to obtain the Associate
            Certification. The examination bookings will be made available in
            the first half of 2024.
          </p>
          {/* <Link href="/partner-with-us">
            <Button className="bg-white px-8 py-5 text-3xl text-cf-blue-600 sm:text-[1.75rem]">
              Partner with Us
            </Button>
          </Link> */}
        </div>
      </section>
    </main>
  )
}
