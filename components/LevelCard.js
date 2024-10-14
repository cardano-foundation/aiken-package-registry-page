import Image from 'next/image'

const LevelCard = ({ className, ...props }) => (
  <div className={`${className} relative flex items-center justify-center mx-6 md:mx-0 py-3  rounded-3xl border border-cf-gray-300/25 shadow-lg`}>
    <Image
      className="h-[37px] w-auto"
      src={`/${props.icon}`}
      alt={props.alt}
      priority={true}
      width={37}
      height={37}
    />
    <span className="ml-4 text-[1rem] text-black font-bold">{props.title}</span>
  </div>
)

export default LevelCard