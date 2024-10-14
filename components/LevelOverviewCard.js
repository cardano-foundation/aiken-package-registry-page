import Image from 'next/image'

const LevelOverviewCard = ({ className, ...props }) => (
  <div className={`${className} relative flex flex-col items-center justify-center py-5 px-6 rounded-3xl border border-cf-gray-300/25 shadow-sm bg-cf-offwhite`}>
    <Image
      className="h-[74px] w-auto"
      src={`/${props.icon}`}
      alt={props.alt}
      priority={true}
      width={74}
      height={74}
    />
    <span className="mt-3 text-[1.7rem] font-bold">{props.title}</span>
  </div>
)

export default LevelOverviewCard

