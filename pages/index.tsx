import WalletInfo from '@/components/atoms/WalletInfo'
import { Layout, Page } from '@/components/templates'

const Home = () => {
  return (
    <Page title="SUMMARY.MAIN">
      <Layout>
        <WalletInfo />
      </Layout>
    </Page>
  )
}

export default Home
