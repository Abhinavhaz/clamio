
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container, Stack, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

function RewardNavbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header>
                <Box sx={{ width: '100%', backgroundColor: 'black', color: 'white' }}>
                    <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1 }}>
                        <Typography variant="subtitle1" color="white">
                            Create and Sell
                        </Typography>
                        {isMobile ? (
                            <>
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleMenuToggle}
                                >
                                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                                </IconButton>
                                {menuOpen && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "64px",
                                            right: 0,
                                            width: "20%",
                                            backgroundColor: "white",
                                            // zIndex: 1
                                        }}
                                    >
                                        <Stack
                                            direction="column"
                                            alignItems="center"
                                            spacing={2}
                                            py={2}
                                        >
                                         
                                       <Link to="/Home"  style={{ textDecoration: "none", color: "inherit" }}><Typography variant="subtitle1" color="black">Go to Home</Typography></Link>   
                                         <Typography variant="subtitle1" color="black">Community</Typography>
                                            <Typography variant="subtitle1" color="black">Creator</Typography>
                                            <Typography variant="subtitle1" color="black">Explore</Typography>
                                            <Typography variant="subtitle1" color=" black">Join</Typography>
                                        </Stack>
                                    </Box>
                                )}
                            </>
                        ) : (
                            <Stack direction="row" spacing={4}>
                                       <Link to="/Home"  style={{ textDecoration: "none", color: "inherit" }}><Typography variant="subtitle1" color="white">Go to Home</Typography></Link>   
                                
                                <Typography variant="subtitle1" color="white">Community</Typography>
                                <Typography variant="subtitle1" color="white">Creator</Typography>
                                <Typography variant="subtitle1" color="white">Explore</Typography>
                                <Typography variant="subtitle1" color="white">Join</Typography>
                            </Stack>
                        )}
                    </Container>
                </Box>
            </header>
        </>
    );
}

export default RewardNavbar;
