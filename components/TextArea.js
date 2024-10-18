import React from 'react'

const TextArea = React.forwardRef(
  ({ disabled = false, className, description, ...props }, ref) => (
    <div className="flex flex-col">
      <label htmlFor={props.name} className="text-cf-blue-600 font-semibold text-xl mb-3">
        {props.label}
      </label>
      {description && (
        <p className="text-sm font-semibold  text-cf-blue-600 mb-3">{description}</p>
      )}
      <div className="relative rounded-[0.875rem]">
        <div className="pointer-events-none absolute top-0 left-0 flex items-center pl-6 pt-7">
          {props.icon}
        </div>
        <textarea
          ref={ref}
          disabled={disabled}
          className={`${className} rounded-[0.875rem] border-0 p-6 pl-14 text-cf-blue-900 shadow-sm ring-1 ring-inset ring-cf-gray-50 placeholder:text-cf-gray-100 focus:ring-2 focus:ring-inset focus:ring-cf-blue-600 text-lg sm:leading-6 shadow-sm`}
          {...props}
        />
      </div>
    </div>
  ),
)

TextArea.displayName = 'TextArea'

export default TextArea