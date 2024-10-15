import Image from 'next/image'

const AcceleratorCard = ({ className, ...props }) => (
  <div
    className={`${className} flex flex-col items-center rounded-lg bg-white p-6 shadow-lg`}
  >
    <Image
      className="mb-4 h-[74px] w-auto"
      src={`/${props.icon}`}
      alt={props.title}
      width={300}
      height={200}
    />
    <h3 className="mb-4 text-2xl font-bold text-cf-blue-600">{props.title}</h3>
    <div className="w-full">
      {props.curriculum.map((item, idx) => (
        <div key={idx} className="flex flex-col">
          <p className="text-dm text-center my-2">{item}</p>
          {idx < props.curriculum.length - 1 && (
            <hr className="my-2 border-gray-300" />
          )}
        </div>
      ))}
    </div>
  </div>
)

export default AcceleratorCard
