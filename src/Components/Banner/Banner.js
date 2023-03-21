
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import "../../Component CSS/banner.css"
import Carousel from './Carousel'


export const Banner = () => {
    return (
        <div className='banner'>
            <Container className="banner-content">
                <div className="tagline">
                    <Typography
                        variant='h2'
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat"
                        }}
                    >
                        Crypto Hunter
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        style={{
                            color: "darkgray",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat"
                        }}
                    >
                        Get all info regarding your favourite crypto currency

                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    )
}
