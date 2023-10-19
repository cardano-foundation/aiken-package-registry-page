import React from 'react'

const Input = React.forwardRef(
    ({ disabled = false, className, ...props }, ref) => (
      <div className="flex flex-col">
        <label htmlFor={props.name} className="text-cf-blue-600 font-semibold text-xl mb-3">
          {props.label}
        </label>
        <div class="relative rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
            {props.icon}
          </div>
          <input
            ref={ref}
            disabled={disabled}
            className={`${className} rounded-[0.875rem] border-0 p-6 pl-14 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-cf-gray-100 focus:ring-2 focus:ring-inset focus:ring-cardano-600 text-lg sm:leading-6`}
            {...props}
          />
        </div>
      </div>
    ),
)

Input.displayName = 'Input'

export default Input
