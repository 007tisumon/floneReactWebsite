import React from 'react'
import Animated from './Animated'
import Banner from './Banner'
import HomeBlog from './HomeBlog'
import HomeShop from './HomeShop'
import Support from './Support'

const HomePage = () => {
    return (
        <>
            <Banner />
            <Support />
            <HomeShop />
            <HomeBlog />
            <Animated />
        </>
    )
}

export default HomePage