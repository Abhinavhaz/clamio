
import React from "react";
import Box from "@mui/material/Box";
import { Container, Stack, Typography, Button, Grid } from "@mui/material";
import RewardNavbar from "./RewardNavbar";
import img from "../../assets/moneybag.png";
import key from "../../assets/key.png";
import dollar from "../../assets/dollar.png";
import gift from "../../assets/gift.png";
import hero1 from "../../assets/bro.png";
import hero2 from "../../assets/reward2.png";
import shield1 from "../../assets/kiba.png";
import shield2 from "../../assets/shield2.png";
import shield3 from "../../assets/shield3.png";

function Reward() {
  const data = [
    { img: key, title: "Sign in", text: "Get Registered through CLAMIO with ZERO Registration Charges" },
    { img: dollar, title: "View Rewards", text: "Get access to your personalised rewards dashboard" },
    { img: gift, title: "Earn Points", text: "Earn CLAMIO reward points on every referral and product sell " },
  ];

  const data2 = [
    { img: shield1, title: <><span style={{ color: "#FCC917" }}>CLAMIO</span> Debut</>, text1: ".1 Sale/1 Referral " },
    { img: shield2, title: <><span style={{ color: "#FCC917" }}>CLAMIO</span> Star</>, text1: ".100 Sale/ 25 Referrals", text2: ".Redeem your CLAMIO Coins " },
    { img: shield3, title: <><span style={{ color: "#FCC917" }}>CLAMIO</span> Boss</>, text1: ".5000 Sales", text2: ".Redeem your CLAMIO Coins", text3: ".4.5% Discount on Transactional Charges " },
  ];

  return (
    <>
      <RewardNavbar />
      <Box sx={{ backgroundColor: 'black', color: 'white', width: "100vw" }}>
        <Container sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}>
          <Stack py={7} alignItems="flex-start" spacing={2} sx={{ flex: 1 }}>
            <Typography variant="h5" color="white" sx={{ textAlign: 'left' }}>
              <span style={{ color: '#FFDB58' }}>CLAMIO</span> Rewards Program
            </Typography>

            <Typography variant="subtitle1" color="white" sx={{ textAlign: 'left', fontSize: "16px" }}>
              Refer CLAMIO to fellow creators or sell 100 Digital Products through CLAMIO, &<br />
              <span style={{ color: '#FFDB58', fontSize: "24px" }}> earn Rs. 50000* </span>
            </Typography>

            <Button sx={{ backgroundColor: "#D9D9D9", color: "black", textTransform: "none", fontWeight: 600, width: "200px" }}>View DashBoard</Button>
          </Stack>

          <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "center", md: "flex-end" }, mt: { xs: 4, md: 0 } }}>
            <img src={img} alt="img" style={{ width: "100%", maxWidth: "320px", height: "auto" }} />
          </Box>
        </Container>
      </Box>
{/* .........................................top box */}



      <Container>
        <Stack>
          <Typography variant="h6" sx={{ fontFamily: "unset", fontSize: '40px', fontWeight: '500', lineHeight: '60px', textAlign: 'center' }}>
            Getting Started is Easy
          </Typography>
        </Stack>

        <Grid container spacing={4} justifyContent="center" mt={10}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Box sx={{ height: "200px", width: "200px", background: "#FFDB58", borderRadius: "50%", padding: "15px", margin: "auto", textAlign: "center" }}>
                <img src={item.img} style={{ transform: "translateY(40%)", height: "100px", width: "126px" }} alt="Key" />
                <Typography variant="h6" pt={15} sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" pt={2}>
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 20, mb: 6 }}>
          <Button sx={{ backgroundColor: "#FFDB58", color: "black", fontWeight: 600, width: "300px", height: "50px" }}>
            Start Selling
          </Button>
        </Box>
      </Container>
{/* .....................................................2nd box */}





      <Container sx={{ mb: "150px" }}>
        <Stack>
          <Typography variant="h6" sx={{ fontFamily: "unset", fontSize: '40px', fontWeight: '500', lineHeight: '60px', textAlign: 'center' }}>
            Getting Reward is Easy
          </Typography>
        </Stack>

        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={6}>
            <Stack alignItems="flex-start">
              <Typography variant="h6" sx={{ fontWeight: "800", fontFamily: "unset", mb: "2%" }}>
                Refer To Creators
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "unset", textAlign: 'left' }}>
                On every successful referral you will earn 500 CLAMIO Reward Coins.<br />
                Every 100 coin = Rs. 1
              </Typography>
              <Box mt={2}>
                <img src={hero1} alt="Refer To Creators" style={{ width: "100%", maxWidth: "300px" }} />
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack alignItems="flex-start">
              <Box mb={2}>
                <img src={hero2} alt="Sell 100 Products" style={{ width: "100%", maxWidth: "300px" }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "800", fontFamily: "unset", textAlign: 'left', mb: "2%" }}>
                Sell 100 Products
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "unset", textAlign: 'left' }}>
                On every successful sale of 100 Product you will earn 10,000<br />
                CLAMIO Reward Coins.<br />
                Every 100 coin = Rs. 1
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
{/* ..............................................3rd box....


 */}
      <Container sx={{ mb: "100px" }}>
        <Stack>
          <Typography variant="h6" sx={{ fontFamily: "unset", fontSize: '40px', fontWeight: '500', lineHeight: '60px', textAlign: 'center' }}>
            How to Level up and Earn Rewards
          </Typography>
        </Stack>

        <Grid container spacing={0} justifyContent="space-around" mt={10}>
          {data2.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <Box sx={{ height: "auto", width: "200px", borderRadius: "50%", padding: "100px", textAlign: "center" }}>
                <img src={item.img} style={{ width: "100%", height: "100%" }} alt="Shield" />
                <Typography variant="h6" pt={15} sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Box>
                  <Typography variant="body2" pt={2} sx={{ textAlign: "left" }}>
                    <p>{item.text1} </p>
                    <p>{item.text2 ? item.text2 : ""}</p>
                    <p>{item.text3 ? item.text3 : ""}</p>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* ......................last one */}
    </>
  );
}

export default Reward;
