import { AppBar, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCrypto } from '../Contexts/CryptoContext'

export const Header = () => {

    // using context here for INR to USD


    const { currency, setCurrency } = useCrypto();
    // console.log(currency)


    // for dark theme
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });



    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Link to="/" style={{ fontWeight: "bold", flex: 1, color: "gold", fontFamily: "Montserrat" }}><Typography >Crypto Menia</Typography></Link>
                        <Select variant='outlined' style={{
                            width: 100,
                            height: 40,
                            marginRight: 15
                        }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"INR"}>INR</MenuItem>
                            <MenuItem value={"USD"}>USD</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}
