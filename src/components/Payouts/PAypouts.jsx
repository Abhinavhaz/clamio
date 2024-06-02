import { Button, Container, Stack, Typography ,Box} from "@mui/material"
import Menubar from "../Menubar/Menubar"
import Banner from "../../assets/payout.png"



function Payout(){


const data=[

    {title:"Last 7Days",price:"Rs.25"},
    {title:"Last  30 Days",price:"Rs.700"},
    {title:"Total Earnings",price:"Rs.5977"}

]


return(
<>
<Menubar/>




<Container  sx={{
                   
                //  backgroundColor:"pink",
                    position: "absolute",
                    top: 100,
                    right:50,
                    
                    // zIndex: 1000 // to ensure it stays on top
                }}  >
    <Box sx={{display:"flex",justifyContent:"space-between", width:"100%"}}>
<Stack>
<Typography variant="h5" fontFamily="syne">
Payouts
</Typography>
</Stack>


<Stack  >
<Button sx={{ backgroundColor: "#FFDB58", color: "black", fontWeight: 600, width: "200px" , height:"50px"}}>
                       Settings
                    </Button>
</Stack>
</Box>
{/* .............................. */}


<Stack display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={10} mt={10}>
{data.map((item)=>(
<Box sx={{height:"146px",width:"242px",border:"1px solid black",borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"space-around" }} >



<Typography variant="h6"  sx={{fontWeight: 600}}>
    {item.title}
</Typography> 

<Typography variant="body2" pt={2}  fontWeight={800}fontSize={30}>
{item.price}
</Typography> 
</Box>
))}
</Stack>




<Box sx={{position:"absolute"}}>
    <Typography variant="h4" fontFamily="syne" fontWeight={700}>

        Payouts History:
    </Typography>
</Box>





<Box sx={{position:"absolute"}} >
<img src={Banner} />


</Box>

</Container>



</>

)

}
export default Payout