import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'
import Person from '../../public/images/person.jpeg'
import ModuleImage from '../../public/images/module-image.jpeg'

export default function Overview() {
  const cards = [
    {
      title: 'Module 1',
      text: 'Introduces the foundation of blockchain, from the main components of a typical blockchain network',
      link: 'link',
      image: ModuleImage,
    },
    {
      title: 'Module 2',
      text: 'Builds on the concepts introduced in module 1. It defines the transactions models used in blockchain',
      link: 'link',
      image: ModuleImage,
    },
  ]

  const people = [
    {
      name: 'John',
      position: 'Technical Blockchain Educator',
      image: Person,
    },
    {
      name: 'John',
      position: 'Technical Blockchain Educator',
      image: Person,
    },
    {
      name: 'John',
      position: 'Technical Blockchain Educator',
      image: Person,
    },
    {
      name: 'John',
      position: 'Technical Blockchain Educator',
      image: Person,
    },
    {
      name: 'John',
      position: 'Technical Blockchain Educator',
      image: Person,
    },
    {
      name: 'John',
      position: 'Technical Blockchain Educator',
      image: Person,
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
          <h1 className="mb-4 text-5xl font-bold">
            Cardano Blockchain Certified Associate (CBCA) Course Overview
          </h1>
        </div>
        <div className="absolute h-screen w-full bg-[url('/noise-light.png')] bg-repeat opacity-25"></div>
      </section>
      <section className="relative -mt-40 flex items-center justify-center overflow-hidden pb-10 pt-10">
        <div className="mt-8 grid grid-cols-2 gap-6">
          {cards.map((card, key) => (
            <div key={key} className="max-w-xs rounded-lg shadow">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src={card.image}
                  alt={card.title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-cf-blue-600">
                    {card.title}
                  </h5>
                </a>
                <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">
                  {card.text}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-center text-sm font-medium text-cf-red-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Read more
                  <svg
                    className="ml-2 h-3.5 w-3.5"
                    aria-hidden="true"
                    xmlns={card.link}
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex items-center justify-center overflow-hidden">
        <div className="h-86 mb-20 w-3/4 justify-center rounded-md border-2 border-solid p-4 shadow-sm">
          <div className="grid grid-cols-2 place-items-center gap-2">
            <div>
              <div className="mb-4 text-3xl font-bold text-cf-blue-600">
                Module 2 Overview
              </div>
              <div className="mb-4 text-sm">
                Builds on the concepts introduced in module 1. It defines the
                transactions models used in blockchain, including account-based,
                Unspent Transaction Output and extended Unspent Transaction
                Output.
              </div>
              <div className="mb-4 text-sm">
                It examines the content of a block and the role of the block
                producer. Module 2 also explains how the risks against
                double-spending and Sybil attacks are mitigated, the causes of
                soft and hard forks and the importance of incentive mechanisms.
                It concludes with a look at layer 1 and layer 2 scaling
                solutions.
              </div>
            </div>
            <div>
              <Image
                src="/images/module.svg"
                alt="Example SVG"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative items-center justify-center overflow-hidden bg-cf-blue-600 pb-10">
        <div className="h-46 m-auto flex w-3/4 items-center justify-center rounded-md bg-cf-yellow-600 p-4 shadow-sm">
          <div className="grid grid-cols-2 place-items-center gap-2">
            <div className="mb-4 text-xl font-bold">
              Interested in learning about Blockchain? Download Cardano
              Blockchain Certified Associate (CBCA) Course Brochure
            </div>
            <Button className="w-64 bg-black text-sm text-white">Download Brochure</Button>
          </div>
        </div>
        <div className="m-auto flex max-w-2xl flex-col items-center text-center text-white">
          <h1 className="mt-5 text-center text-4xl font-bold">
            Course Creators and Contributors
          </h1>
          <div className="mt-8 grid grid-cols-3 gap-8 xl:gap-4">
            {people.map((person, key) => (
              <div key={key} className="rounded-lg bg-cf-blue-200 p-1 shadow">
                <div className="m-px mt-5 flex flex-col items-center pb-5">
                  <Image
                    className="mb-3 h-20 w-20 rounded-full shadow-lg"
                    src={person.image}
                    alt={person.name}
                  />
                  <h5 className="mb-1 text-xl font-medium dark:text-white">
                    {person.name}
                  </h5>
                  <span className="text-sm">{person.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
