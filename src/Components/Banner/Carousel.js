import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import '../../Component CSS/carousel.css';
import { TrendingCoins } from "../../Config/api"
import { useCrypto } from '../../Contexts/CryptoContext';
const Carousel = () => {
    const { currency } = useCrypto();//currency used from context API
    const [trending, setTrending] = useState([]);



    // for fetching data in carousel
    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        setTrending(data);
    }


    console.log(trending);


    useEffect(() => {
        fetchTrendingCoins();
    }, [currency])


    const items = trending.map((coin) => {
        return (
            <Link className=''
                to={`/coins/${coin.id}`}
            >
                <img src={coin?.image}
                    alt={coin.name}
                    height="80"
                    style={{ marginBottom: 10 }}
                />

                <span>{coin?.symbol}</span>
            </Link>
        )
    })

    const responsive = {
        0: {
            items: 2
        },
        512: {
            items: 5
        }
    }

    return (
        <div className='carousel'>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                responsive={responsive}
                autoPlay
                items={items}
                disableButtonsControls
            />

        </div>
    )
}

export default Carousel;