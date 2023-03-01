import ProjectFilterOption from '@enum/ProjectFilterOption'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import useClickOutside from '@hooks/useClickOutside'
import React, { FC, useEffect, useRef } from 'react'

interface Option {
  value: string
  name: string
}

interface SearchBoxProps {
  placeholder: string
  options: Option[]
  defaultOption?: string
  onSearchInfoChange: (keyword: string, projectFilterOption: ProjectFilterOption) => void
}

const SearchBox: FC<SearchBoxProps> = ({ placeholder, options, defaultOption, onSearchInfoChange }) => {
  const [query, setQuery] = React.useState('')
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [selectedOption, setSelectedOption] = React.useState<Option>(options[0])
  const elementRef = useRef<HTMLDivElement>(null)

  useClickOutside(elementRef, () => setDropdownOpen(false))

  useEffect(() => {
    onSearchInfoChange(query, selectedOption.value as ProjectFilterOption)
  }, [query, selectedOption])

  useEffect(() => {
    if (defaultOption) {
      const defaultSelectedOption = options.find((option) => option.value === defaultOption)
      if (defaultSelectedOption) {
        setSelectedOption(defaultSelectedOption)
      }
    }
  }, [defaultOption, options])

  return (
    <div className="flex items-center px-4 py-2 border border-gray-300 rounded-full">
      <MagnifyingGlassIcon className="w-6" />
      <input
        type="text"
        className="w-full py-2 pl-4 pr-20 bg-transparent focus:outline-none"
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          e.preventDefault()
          setQuery(e.target.value)
        }}
      />
      <div className="relative inline-block ml-2 text-left">
        <div>
          <button
            aria-label="Toggle dropdown menu"
            type="button"
            className="flex items-center justify-center w-8 h-8 text-gray-500 border border-gray-300 rounded-full hover:text-gray-700 hover:border-gray-400 focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        {dropdownOpen && (
          <div ref={elementRef} className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg">
            <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    selectedOption?.value === option.value ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  onClick={() => {
                    setQuery('')
                    setSelectedOption(option)
                    setDropdownOpen(false)
                  }}
                  role="menuitem"
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBox
