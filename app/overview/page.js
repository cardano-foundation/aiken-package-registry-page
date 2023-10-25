import OverviewPage from '@/components/OverviewPage'

export const metadata = {
  title: 'Cardano Academy',
  description: 'Learn about the blockchain and Cardano with our free online courses.',
  openGraph: {
    // openGraphImage
    title: 'Cardano Academy',
    description: 'Learn about the blockchain and Cardano with our free online courses.',
  },
}

export default function Overview() {
  return (
    <OverviewPage />
  )
}
