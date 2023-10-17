import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <section className="relative isolate min-h-screen flex justify-center items-center bg-cf-blue-900 overflow-hidden">
        <div
          className="absolute left-[calc(50% + 2rem)] bottom-[calc(0%-56rem)] -z-10 overflow-hidden blur-[256px] w-[72rem] h-[72rem] rounded-full bg-gradient-to-t from-[#030321] via-[#032247] to-[#05A6EC]"
          aria-hidden="true"
        />
        <div
          className="absolute opacity-60 left-[-25rem] top-[-25rem] -z-10 overflow-hidden blur-[256px] w-[72rem] h-[72rem] rounded-full bg-gradient-to-br from-cf-blue-400 to-cf-blue-200"
          aria-hidden="true"
        />
        <div
          className="absolute opacity-70 right-[-96rem] top-[-72rem] -z-10 overflow-hidden blur-[256px] w-[156rem] h-[156rem] rounded-full bg-gradient-to-bl from-cf-blue-300 to-[#05A6EC]"
          aria-hidden="true"
        />
        <div class="w-full h-screen bg-[url('/noise-light.png')] bg-repeat opacity-25"></div>
      </section>
    </main>
  )
}
