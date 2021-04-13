import React, { FunctionComponent } from 'react'

const Content: FunctionComponent = ({ children }) => {
  return <div>{children}</div>
}

export function Page({ children }: React.PropsWithChildren<any>) {
  return (
    <div className="container w-full p-4 mx-auto sm:p-6 sm:py-[50px]">
      {children}{' '}
    </div>
  )
}

Page.Content = Content
