'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Select({ className, label, options, selected, onChange }) {
  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Label className="text-cf-blue-600 font-semibold text-xl">{label}</Listbox.Label>
            <Listbox.Button className="relative w-full mt-3 cursor-default rounded-[0.875rem] bg-white p-6 pr-10 text-left text-cf-blue-900 shadow-sm ring-1 ring-inset ring-cf-gray-50 focus:outline-none focus:ring-2 focus:ring-cf-blue-600 text-lg sm:leading-6">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-slate-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-[0.875rem] bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-lg">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-cf-blue-600 text-white' : 'text-cf-blue-900',
                        'relative cursor-default select-none py-2 pl-8 pr-4'
                      )
                    }
                    value={option}
                  >
                    {({ active }) => (
                      <>
                        <span className={classNames(selected.name === option.name ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {option.name}
                        </span>

                        {selected.name === option.name ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-cf-blue-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
