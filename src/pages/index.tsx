import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Page } from '@/components/page'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageType } from '@/types/next'
import { Header } from '@/components/header'

const IndexPage: NextPageType = () => {
  return (
    <>
      <Head>
        <title>Resumee</title>
      </Head>
      <Page>
        <Page.Content>
          <Header />
        </Page.Content>
      </Page>
    </>
  )
}

IndexPage.layout = AppLayout

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale, ['common']))),
  },
})

export default IndexPage
