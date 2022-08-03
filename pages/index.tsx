import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <div className='min-h-screen'>
        <Header />
        <div className='mt-10'></div>
        {/* <Trendin /> */}
        <div className='mt-20'></div>
        {/* <CMCTable /> */}
      </div>
    </div>
  )
}

export default Home
