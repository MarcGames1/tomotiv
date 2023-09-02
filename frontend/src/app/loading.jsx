import React from 'react'
import Page from './PageLayout'

const RootLoading = () => {
  return (
    <Page>
      <main className="h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </main>
    </Page>
  );
}

export default RootLoading