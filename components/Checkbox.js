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
            className={`${className} h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600`}
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor={props.name} className="font-medium text-gray-900">
            {props.label}
          </label>{' '}
        </div>
      </div>
    ),
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
