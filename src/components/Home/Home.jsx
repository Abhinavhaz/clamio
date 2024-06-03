
import { Button, Container, Stack, Typography ,Box} from "@mui/material"
import Menubar from "../Menubar/Menubar"
import { Link } from "react-router-dom"
import plus from "../../assets/plus.png"
import Banner from "../../assets/payout.png"




function Home(){


return(
<>
<Menubar/>

<Container  sx={{
                   
                    //   backgroundColor:"red",
                         position: "absolute",
                         top: 100,
                         right:50,
                         
                         // zIndex: 1000 // to ensure it stays on top
                     }}  >

<Stack mb={10} sx={{height:"372px", width:"1001px",backgroundColor:"#FFDB58",mt:"40px"}}>

<Typography variant="h5" fontWeight={700} mt={-5} textAlign="left">
Input Product Image/Video
</Typography>


    <Stack 
        sx={{ height: "100%", width: "100%" }}
        justifyContent="flex-end"
        alignItems="center">
        <img src={plus} alt="plus" style={{height:"60px",width:"60px",marginBottom:"12px"}}/>
       < Link to="/HomePage2"><Button sx={{ backgroundColor: "white", color: "black", fontWeight: 600, width: "400px" , height:"50px"}}>Create Your Product</Button></Link>
    </Stack>
</Stack>


<Box sx={{position:"absolute",}}>
    <Typography variant="h4" fontFamily="syne" fontWeight={700}>

    Analytics
    </Typography>
</Box>


<Box mt={10} sx={{position:"absolute"}} >
<img src={Banner} />
</Box>






</Container>
</>
)


}
export default Home