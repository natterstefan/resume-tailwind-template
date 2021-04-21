import React from 'react'
import { FaPencilAlt, FaWarehouse } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { HiOutlineSpeakerphone } from 'react-icons/hi'

import { IItem } from '@/types/types'

import { SectionTitle } from '../section-title'

const ITEMS: IItem[] = [
  {
    icon: FaPencilAlt,
    title: 'Copywrite',
    text:
      'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.',
  },
  {
    icon: FaWarehouse,
    title: 'Ecommerce',
    text:
      'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.',
  },
  {
    icon: FiMonitor,
    title: 'Web Design',
    text:
      'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.',
  },
  {
    icon: HiOutlineSpeakerphone,
    title: 'Marketing',
    text:
      'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.',
  },
]

export const WhatIDo = () => {
  return (
    <div className="px-4 mx-auto space-y-4">
      <SectionTitle>
        <span>What I do</span>
      </SectionTitle>
      <div className="flex flex-wrap -mx-6">
        {ITEMS.map(item => (
          <div
            key={item.title}
            className="flex w-full px-6 mt-4 space-x-6 md:w-1/2"
          >
            <div className="py-2 text-lg text-green-500 md:text-3xl">
              <item.icon />
            </div>
            <div>
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
