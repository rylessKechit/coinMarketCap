import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.header}>
        <Image
            src='http://s2.coinmarketcap.com/static/cloud/img/
            coinmarketcap_white_1.svg'
            alt='logo'
            width={220}
            height={220}
        />
    </div>
  )
}

export default Header