import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import StatCard from '@/components/StatCard'
import FeatureCard from '@/components/FeatureCard'
import TargetCard from '@/components/TargetCard'

const stats = [
  { stat: '4', description: 'Modules', icon: 'globe-book.svg', alt: 'Icon depicting a globe and a stack of books' },
  { stat: '29', description: 'Units', icon: 'online-book.svg', alt: 'Icon depicting a book on a monitor' },
  { stat: '6-8', description: 'Hours', icon: 'duration.svg', alt: 'Icon depicting a stopwatch on a clipboard' },
  { stat: '1600', description: 'Learners', icon: 'globe.svg', alt: 'Icon depicting a globe wearing a graduate cap' },
]

const features = [
  { icon: 'knowledge.svg', alt: 'Icon depicting a globe and a stack of books', description: 'Written and Peer-reviewed by Subject Matter Experts.' },
  { icon: 'cloud.svg', alt: 'Icon depicting a cloud and a graduate cap', description: 'Providing the most up to date content from Subject Matter Experts to Learners as it is released.' },
  { icon: 'tutorial.svg', alt: 'Icon depicting a video playing on a monitor', description: 'Self-paced education tailored to the learner’s journey.' },
  { icon: 'chart.svg', alt: 'Icon depicting a stock chart trending upward', description: 'Free courses accessible anywhere. ' },
  { icon: 'innovation.svg', alt: 'Icon depicting a person with a sparkling lightbulb over their head', description: 'Focus on comprehension and retention.' },
  { icon: 'glass.svg', alt: 'Icon depicting a cube seen through a magnifying glass', description: 'Bite-sized micro learning with assessment.' },
]

const targets = [
  { icon: 'networking.svg', alt: 'Icon depicting a network of people', description: '<strong>Business Professionals, decision-makers, entrepreneurs</strong> who want to learn more about Blockchain for their businesses, and use our course material.' },
  { icon: 'developer.svg', alt: 'Icon depicting a person sitting in front of their laptop chatting online', description: '<strong>General public</strong> who have an interest in blockchain, or are considering working with blockchain in the future.' },
  { icon: 'online-learning.svg', alt: 'Icon depicting a monitor with a graduate cap', description: '<strong>Lecturers, researchers, teachers and trainers</strong> who want to understand the fundamentals of blockchain and/or teach the course material. ' },
  { icon: 'paper-plane.svg', alt: 'Icon depicting a paper airplane with a message', description: '<strong>Students</strong> who are interested in learning about or working in the Blockchain industry.' },
  { icon: 'programming.svg', alt: 'Icon depicting a monitor with code on it', description: 'Traditional <strong>web2 IT professionals</strong> wanting to learn about blockchain and upskill in web3.  ' },
  { icon: 'coding.svg', alt: 'Icon depicting a keyboard and a code symbol', description: '<strong>Blockchain developers and engineers</strong> who will develop and build on Cardano. ' },
]

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="relative isolate pt-36 pb-12 sm:pt-64 sm:pb-40 flex justify-center items-center bg-cf-blue-900 overflow-hidden">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-6xl sm:text-[90px] text-white leading-tight font-bold">Cardano <br /> Academy</h1>
            <p className="text-white text-xl sm:text-2xl mt-8 sm:mt-12">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
            </p>
            <Button className="text-cf-blue-500 bg-white mt-14 text-3xl py-5 px-8">Register Today!</Button>
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
          className="absolute mix-blend-plus-lighter left-[calc(50% + 2rem)] bottom-[calc(0%-56rem)] -z-10 overflow-hidden blur-[256px] w-[72rem] h-[72rem] rounded-full bg-gradient-to-t from-[#030321] via-[#032247] to-[#05A6EC]"
          aria-hidden="true"
        />
        <div
          className="absolute mix-blend-plus-lighter opacity-50 left-[-25rem] top-[-25rem] -z-10 overflow-hidden blur-[256px] w-[72rem] h-[72rem] rounded-full bg-gradient-to-br from-[#05A6EC] to-[#036ECD]"
          aria-hidden="true"
        />
        <div
          className="absolute mix-blend-plus-lighten opacity-50 right-[-96rem] top-[-72rem] -z-10 overflow-hidden blur-[256px] w-[156rem] h-[156rem] rounded-full bg-gradient-to-bl from-[#05A6EC] to-[#05A6EC]"
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise-light.png')] bg-repeat mix-blend-overlay -z-10"></div>
      </section>

      {/* About section */}
      <section className="bg-cf-blue-500 py-12 sm:py-40">
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
      </section>

      {/* Course section */}
      <section className="bg-white pt-12 pb-48 sm:pt-40 sm:pb-64">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <h2 className="text-4xl sm:text-6xl text-cf-blue-500 font-bold mb-6 sm:text-center">
            Cardano Blockchain Certified <br /> Associate (CBCA) Course Overview
          </h2>
          <p className="text-cf-blue-500 text-lg sm:text-xl sm:text-center pt-6">
            Launching the Cardano Academy’s first certified course with: Cardano Blockchain Certified <br />
            Associate (CBCA) Course. No prior knowledge or experience of blockchain is needed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16 gap-6 sm:gap-8 lg:gap-16 w-full">
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
      <section className="relative bg-cf-blue-500 pt-80 pb-12 sm:pt-64 sm:pb-40">
        {/* Floating CTA */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center -mt-32 shadow-lg bg-cf-green-300 py-14 max-w-7xl px-6 sm:px-8 lg:px-12 w-full rounded-3xl">
          <h2 className="text-4xl sm:text-5xl text-cf-blue-900 font-bold mb-12 text-center">
            Register and Start Learning Today!
          </h2>
          <div className="flex flex-col sm:flex-row">
            <Button className="w-64 text-white bg-cf-blue-900 text-3xl py-5 px-8 sm:mr-8 mb-2 sm:mb-0">Register Today!</Button>
            <Button className="w-64 text-cf-blue-900 bg-white text-3xl py-5 px-8">Learn More</Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <h2 className="text-6xl text-white font-bold sm:mb-6 text-center">
            Learn, Your Way
          </h2>
          <p className="text-white text-xl text-center pt-6">
            Interested in learning about Blockchain?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-20 gap-6 sm:gap-8 lg:gap-16 w-full">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                alt={feature.alt}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Target audience section */}
      <section className="relative bg-white py-12 sm:py-40">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <h2 className="text-6xl text-cf-blue-500 font-bold mb-6 text-center">
            Who is the Course For?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:mt-20 gap-6 sm:gap-8 lg:gap-16 w-full">
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
      <section className="relative bg-cf-blue-500 py-12 sm:py-40">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <h2 className="text-5xl text-white font-bold mb-8 text-center">
            Education Institutions and Business Organizations
          </h2>
          <p className="text-white text-xl mb-12">
            Interested in offering this blockchain program to your students or employess?
          </p>
          <Button className="text-cf-blue-900 bg-white text-3xl py-5 px-8 mr-8">Partner With Us Today</Button>
        </div>
      </section>
    </main>
  )
}
