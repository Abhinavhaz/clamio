
import {React,useState }from "react";
import Box from "@mui/material/Box";
import { Container, Stack, Typography,Select ,MenuItem,useMediaQuery,IconButton} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import HouseIcon from '@mui/icons-material/House';
import InventoryIcon from '@mui/icons-material/Inventory';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Menubar.module.css"
import { Link } from "react-router-dom";

function Menubar(){
    const isMobile = useMediaQuery("(max-width:900px)");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <header>
            <Box py={3} sx={{ width: '100%',color:"black" }}>
                <Container maxWidth="xl"

                sx={{ display: "flex", justifyContent: "space-between"}}>
                    <Stack
                        direction="row"
                       
                    
                    //    backgroundColor="black"
                    >
<stack>
    <Box sx={{width:"50px",height:"50px" , backgroundColor:"#F2F60B",borderRadius:"50%"}}/>
</stack>


                         <Select value="username" 
                          sx={{
                            '.MuiOutlinedInput-notchedOutline': { border: 0 },
                            // '&:hover .MuiOutlinedInput-notchedOutline': { border: 0 },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 0 }
                        }}  >
                            <MenuItem  value="username">Username</MenuItem>
                        </Select>

                    </Stack>
                    {/* .................................................................. */}




                    <Stack
                        direction="row"
                        spacing={4}
                        py={1}
                      
                        
                    >
                        <Typography variant="subtitle1"  fontWeight={700}>
                           Go to Explore
                        </Typography>
                        <Typography variant="subtitle1"   fontWeight={700} >
                           Refer and Earn
                        </Typography>

                        <NotificationsIcon/>
                        
                    </Stack>
                </Container>
                <hr  style={{ width: '100vw'}}/>
                


            </Box>
        </header>


    <Container maxWidth="xl">
<Stack alignItems="flex-start"

 spacing={2} 
 className={[styles.navlinks, menuOpen && styles.active]}
>
                   <Typography variant="subtitle1"  fontWeight={700}>
                   < Link to="/Home" style={{ textDecoration: "none", color: "inherit" }}>  <HouseIcon/> Home</Link>
                        </Typography>
                        <Typography variant="subtitle1"   fontWeight={700} >
                        < Link to="/Products" style={{ textDecoration: "none", color: "inherit" }}> <InventoryIcon/> Products </Link>
                        </Typography>
                        <Typography variant="subtitle1"  fontWeight={700}>
                        < Link to="/Payout" style={{ textDecoration: "none", color: "inherit" }}>    <MonetizationOnIcon/> Payouts</Link>
                        </Typography>
                        <Typography variant="subtitle1"   fontWeight={700} >
                        <Link to="/Reward" style={{ textDecoration: "none", color: "inherit" }}><EmojiEventsIcon/>  Rewards </Link>
                        
                        </Typography>

                        {isMobile && (
                <IconButton
                  onClick={() => setMenuOpen(false)}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 32,
                    color: "white",
                    // background:"white"
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}

</Stack>
{isMobile && (
              <IconButton onClick={() => setMenuOpen(true)}   sx={{
                position: "absolute",
                top: '80px',
             left:"15px"
                // color: "white",
                // background:"white"
              }}>
                <MenuIcon />
              </IconButton>
            )}
<hr style={{ height:'200%',transform: 'rotate(90deg)',marginTop:"900px",marginLeft:"-75%"}}/>

</Container>


</>
    );
}
export default Menubar
