import { ChevronLeftIcon } from '@heroicons/react/24/outline'

const CarouselLeftArrow = ({ onClick }) => {
  return (
    <div className="absolute top-1/2 bg-cf-green-600 p-3 rounded-full hover:bg-cf-green-700">
      <ChevronLeftIcon onClick={() => onClick()} className="block h-7 w-7 cursor-pointer text-white" aria-hidden="true" />
    </div>
  )
};

export default CarouselLeftArrow
