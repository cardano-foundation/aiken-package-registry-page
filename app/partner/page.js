'use client'
import 'react-multi-carousel/lib/styles.css'
import { FormHubspot } from '@/lib/hubspot-integration/FormHubspot.component'

export default function Partner() {
  return (
    <main className="bg-cf-blue-1000">
      <section className="relative isolate flex items-center justify-center overflow-hidden bg-cf-blue-600 py-36 pb-16 sm:pb-32 sm:pt-48">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-6 sm:px-8 lg:px-12">
          <h1 className="text-center text-4xl font-bold leading-tight text-white sm:text-6xl">
            Partner with Us
          </h1>
        </div>
        <div
          className="safari-fix absolute left-[-10rem] top-[-12rem] -z-10 h-[36rem] w-[36rem] overflow-hidden rounded-full bg-gradient-to-br from-[#05A6EC] to-[#036ECD] opacity-50 mix-blend-plus-lighter blur-[256px] brightness-150"
          aria-hidden="true"
        />
        <div
          className="mix-blend-plus-lighten safari-fix absolute right-[-32rem] top-[-10rem] -z-10 h-[72rem] w-[72rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#05A6EC] to-[#05A6EC] opacity-50 blur-[256px]"
          aria-hidden="true"
        />
        <div className="absolute right-0 top-0 -z-10 h-full w-full bg-[url('/noise-light.png')] bg-repeat mix-blend-overlay"></div>
      </section>{' '}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-between gap-4 p-8 px-6 text-cf-offwhite sm:px-8 md:grid-cols-2 lg:px-12">
        <div>
          <p className="md:text-3xl">
            Access quality verified{' '}
            <span className="text-cf-green-800 font-bold">
              blockchain education and enablement
            </span>{' '}
            to suit your business.
          </p>
          <p className="mt-4 text-sm md:text-2xl">
            From instructor-led executive masterclasses to scalable on-demand
            e-learning for your entire team.
          </p>
          <ul className="mt-4 list-none space-y-3">
            <li className="text-sm xl:text-xl">
              <span className="text-cf-green-800">✔</span>{' '}
              <span className='font-bold'>Master the fundamentals</span> of blockchain technology
              for business.
            </li>
            <li className="text-sm xl:text-xl">
              <span className="text-cf-green-800">✔</span>{' '}
              <span className='font-bold'>Explore evolving use cases</span> and business benefits
              of blockchain.
            </li>
            <li className="text-sm xl:text-xl">
              <span className="text-cf-green-800">✔</span>{' '}
              <span className='font-bold'>Empower executives </span>for informed digital
              transformation initiatives.
            </li>
            <li className="text-sm xl:text-xl">
              <span className="text-cf-green-800">✔</span>{' '}
              <span className='font-bold'>Equip engineers and developers</span> to build on
              Cardano.
            </li>
          </ul>
        </div>
        <div className="relative flex w-full max-w-2xl flex-col xl:px-6">
          <div className="rounded-2xl bg-cf-offwhite p-4">
            <FormHubspot />
          </div>
        </div>
      </section>
    </main>
  )
}
