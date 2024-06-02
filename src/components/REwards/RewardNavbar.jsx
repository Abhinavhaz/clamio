import React from "react";
import Box from "@mui/material/Box";
import { Container, Stack, Typography } from "@mui/material";

function RewardNavbar() {
    return (
        <header>
            <Box sx={{ width: '100%', backgroundColor: 'black', color: 'white' }}>
                <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Stack
                        direction="row"
                        spacing={0}
                        alignItems="center"
                        justifyContent="space-between"
                        py={1}
                    >
                        <Typography variant="subtitle1" color="white">
                            Create and Sell
                        </Typography>
                    </Stack>
                    {/* .................................................................. */}
                    <Stack
                        direction="row"
                        spacing={4}
                        py={1}
                    >
                        <Typography variant="subtitle1" color="white">
                            Community
                        </Typography>
                        <Typography variant="subtitle1" color="white">
                            Creator
                        </Typography>
                        <Typography variant="subtitle1" color="white">
                            Explore
                        </Typography>
                        <Typography variant="subtitle1" color="white">
                            Join
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </header>
    );
}

export default RewardNavbar;
