import Image from 'next/image'

const PersonCard = ({ className, ...props }) => (
  <div
    className={`relative flex flex-col items-center justify-start rounded-3xl px-7 py-8 shadow-sm bg-white/10`}
  >
    <div className="flex flex-col items-center w-auto">
      <Image
        className="h-52 w-52 rounded-full shadow-lg object-cover object-center"
        src={`/${props.image}`}
        alt={props.name}
        priority={true}
        width={416}
        height={416}
      />
      <span className="my-4 text-[1.75rem] font-medium text-white">{props.name}</span>
      <span className="text-xl text-white text-center">{props.position}</span>
    </div>
  </div>
)

export default PersonCard
