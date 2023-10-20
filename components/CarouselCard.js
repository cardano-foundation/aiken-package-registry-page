import Image from 'next/image'

const CarouselCard = ({ className, ...props }) => (
  <div className="my-10 bg-white rounded-3xl shadow-lg mx-4">
    <Image
      className="rounded-t-3xl w-full"
      src={`/${props.image}`}
      alt={props.title}
      priority={true}
      width={400}
      height={350}
    />
    <div className="px-2 sm:px-10 py-4 pb-10">
      <h5 className="mb-6 text-center text-3xl font-bold tracking-tight text-cf-blue-600">
        {props.title}
      </h5>
      <p className="mb-6 text-center text-xl font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
      <div
        className="block cursor-pointer items-center text-center text-xl font-medium text-cf-red-600"
        onClick={(e) => props.setModuleOverview(props.title)}
      >
        Learn more →
      </div>
    </div>
  </div>
)

export default CarouselCard
