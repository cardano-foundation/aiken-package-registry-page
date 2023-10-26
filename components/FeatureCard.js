import Image from 'next/image'

const FeatureCard = ({ className, ...props }) => (
  <div className={`${className} relative flex flex-col items-center justify-start h-84 py-5 px-7 shadow-sm rounded-3xl bg-white/[.15]`}>
    <Image
      className="h-[74px] w-auto"
      src={`/${props.icon}`}
      alt={props.alt}
      priority={true}
      width={74}
      height={74}
    />

    <h1 className="text-xl uppercase font-bold text-white mt-5 text-center">{props.title}</h1>
    <span className="text-xl text-white mt-5 text-center">{props.description}</span>
  </div>
)

export default FeatureCard
