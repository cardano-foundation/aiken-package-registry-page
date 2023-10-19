import Image from 'next/image'

const CarouselCard = ({ className, ...props }) => (
  <div className="border-1 max-w-xs rounded-3xl shadow">
    <a href="#">
      <Image
        className="h-[350px] w-[400px] rounded-t-3xl shadow-lg"
        src={`/${props.image}`}
        alt={props.title}
        priority={true}
        width={400}
        height={350}
      />
    </a>
    <div className="h-[320px] p-5">
      <a href="#">
        <h5 className="mb-4 mt-10 text-center text-2xl font-bold tracking-tight text-cf-blue-600">
          {props.title}
        </h5>
      </a>
      <p className="mb-7 h-[107px] text-center text-xl font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
      <a
        href="#"
        className="block items-center text-center text-xl font-medium text-cf-red-600 focus:outline-none"
        onClick={(e) => props.setModuleOverview(props.title)}
      >
        Read more
      </a>
    </div>
  </div>
)

export default CarouselCard
