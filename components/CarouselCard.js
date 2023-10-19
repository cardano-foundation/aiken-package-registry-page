import Image from 'next/image'

const CarouselCard = ({ className, ...props }) => (
  <div className="h-[669px] w-[832px] max-w-xs rounded-3xl shadow-xl my-10">
    <Image
      className="h-[350px] w-[400px] rounded-t-3xl shadow-lg"
      src={`/${props.image}`}
      alt={props.title}
      priority={true}
      width={400}
      height={350}
    />
    <div className="h-[320px] p-5">
      <h5 className="mb-4 mt-4 text-center text-2xl font-bold tracking-tight text-cf-blue-600">
        {props.title}
      </h5>
      <p className="mb-7 h-[107px] text-center text-xl font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
      <div
        className="mb-16 block cursor-pointer items-center text-center text-xl font-medium text-cf-red-600"
        onClick={(e) => props.setModuleOverview(props.title)}
      >
        Read more
      </div>
    </div>
  </div>
)

export default CarouselCard
