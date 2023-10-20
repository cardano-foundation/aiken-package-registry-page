import Image from 'next/image'
import Button from '@/components/Button'

const PartnerCard = ({ className, ...props }) => (
  <div className={`${className} relative flex items-center justify-start py-8 px-4 sm:py-16 sm:px-12 rounded-3xl border border-cf-gray-300/25 shadow-sm`}>
    <div className="relative isolate hidden w-1/2 md:block -mt-[1.25rem]">
      <Image
        className="w-full rounded-3xl h-auto"
        src={`/${props.image}`}
        alt={props.imageAlt}
        priority={true}
        width={1064}
        height={822}
      />
      <div className="absolute right-[-1.25rem] bottom-[-1.25rem] -z-10 w-1/2 h-[75%] rounded-3xl bg-cf-blue-900"></div>
    </div>

    <div className="w-full md:w-1/2 flex flex-col md:pl-16">
      <Image
        className="w-[54px] h-auto mb-8"
        src={`/${props.icon}`}
        alt={props.iconAlt}
        priority={true}
        width={74}
        height={74}
      />
      <h2 className="text-4xl sm:text-[2.5rem] text-cf-blue-600 font-bold mb-6">
        {props.title}
      </h2>
      <p className="text-cf-neutral-gray text-lg sm:text-lg">
        {props.description}
      </p>
      <div className="mt-8">
        <Button className="text-white bg-cf-blue-600 text-lg py-5 px-8">Contacts Us to Become a Partner</Button>
      </div>
    </div>
  </div>
)

export default PartnerCard
