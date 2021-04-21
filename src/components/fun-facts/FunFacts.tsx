import React from 'react'
import { FaPencilAlt, FaWarehouse } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { HiOutlineSpeakerphone } from 'react-icons/hi'

import { IItem } from '@/types/types'

import { SectionTitle } from '../section-title'

const ITEMS: IItem[] = [
  {
    icon: FaPencilAlt,
    title: 'Happy Clients',
    text: '578',
  },
  {
    icon: FaWarehouse,
    title: 'Working Hours',
    text: '4780',
  },
  {
    icon: FiMonitor,
    title: 'Awards Won',
    text: '15',
  },
  {
    icon: HiOutlineSpeakerphone,
    title: 'Coffee Consumed',
    text: '3',
  },
]

export const FunFacts = () => {
  return (
    <div className="px-4 mx-auto space-y-4">
      <SectionTitle>
        <span>Fun Facts</span>
      </SectionTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(item => (
          <div
            key={item.title}
            className="flex flex-col items-center w-full p-6 mt-4 space-y-4 border-2 border-gray-300 rounded-lg transform transition-all delay-200 ease-in-out hover:shadow-xl hover:-translate-y-0.5"
          >
            <item.icon className="text-lg text-green-500 md:text-3xl" />
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p className="text-6xl text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
