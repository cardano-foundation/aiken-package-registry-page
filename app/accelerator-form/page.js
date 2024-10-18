'use client'
import 'react-multi-carousel/lib/styles.css'
import { FormHubspot } from '@/lib/hubspot-integration/FormHubspot.component'
import { AcceleratorForm } from '@/lib/hubspot-integration/AcceleratorFormHubspot.component'

export default function Partner() {
  return (
    <main className="bg-cf-blue-1000">
      <section className="relative isolate flex items-center justify-center overflow-hidden bg-cf-green-900 py-36 pb-16 sm:pb-32 sm:pt-48">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-6 sm:px-8 lg:px-12">
          <h1 className="text-center text-4xl font-bold leading-tight text-white sm:text-6xl">
            Cardano Accelerator <br /> Pilot Program <br /> Application Form
          </h1>
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

      <section className="mx-auto w-full max-w-7xl justify-between gap-x-10 gap-y-8 px-6 py-12 text-cf-offwhite sm:px-8 sm:py-40 md:grid-cols-2 lg:gap-x-16 lg:px-12">
        <div className="relative flex w-full max-w-2xl flex-col">
          <div className="rounded-3xl bg-cf-offwhite p-4 sm:p-6">
            <AcceleratorForm />
          </div>
        </div>
      </section>
    </main>
  )
}
