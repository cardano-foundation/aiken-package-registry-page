import Image from 'next/image'

const TargetCard = ({ className, ...props }) => (
  <div className={`${className} relative flex flex-col items-center justify-start h-80 py-5 px-7 rounded-3xl border border-cf-gray-300/25 shadow-sm`}>
    <Image
      className="h-[74px] w-auto"
      src={`/${props.icon}`}
      alt={props.alt}
      priority={true}
      width={74}
      height={74}
    />
    <span className="text-xl text-center text-cf-blue-900 mt-5" dangerouslySetInnerHTML={{__html: props.description}}></span>
  </div>
)

export default TargetCard
