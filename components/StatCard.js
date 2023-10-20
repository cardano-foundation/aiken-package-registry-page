import Image from 'next/image'

const StatCard = ({ className, ...props }) => (
  <div className={`${className} relative flex flex-col items-center justify-center py-5 px-6 rounded-3xl border border-cf-gray-300/25 shadow-sm`}>
    <Image
      className="h-[74px] w-auto"
      src={`/${props.icon}`}
      alt={props.alt}
      priority={true}
      width={74}
      height={74}
    />
    <span className="mt-6 text-6xl text-cf-blue-600 font-bold">{props.stat}</span>
    <span className="text-2xl text-cf-blue-900">{props.description}</span>
  </div>
)

export default StatCard
