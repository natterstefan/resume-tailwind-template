import React, { ReactElement } from 'react'

export const SectionTitle = ({ children }: { children: ReactElement }) => {
  return (
    <h2 className="relative inline-block pb-2 text-2xl font-bold title">
      {children}
    </h2>
  )
}
