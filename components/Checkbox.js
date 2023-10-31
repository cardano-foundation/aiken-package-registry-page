import React from 'react'

const Checkbox = React.forwardRef(
    ({ disabled = false, className, ...props }, ref) => (
      <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            ref={ref}
            disabled={disabled}
            type="checkbox"
            {...props}
            className={`${className} h-4 w-4 rounded border-cf-gray-100 text-cf-blue-600 focus:ring-cf-blue-600`}
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor={props.name} className="font-medium text-cf-blue-900" dangerouslySetInnerHTML={{__html: props.label}}>
          </label>{' '}
        </div>
      </div>
    ),
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
