
import { Button, Container, Stack, Typography ,Box,TextField,Rating} from "@mui/material"
import Menubar from "../Menubar/Menubar"
import img1 from"../../assets/home3.1.png"
import img2 from"../../assets/Star4.png"
import img3 from"../../assets/home3.2.png"

import ContentCopyIcon from '@mui/icons-material/ContentCopy';




function Home3(){

    const data2=[
        {img:img2,title:"Easy to Use"},
        {img:img2,title:"Easy Return"},
        {img:img2,title:"Return in 10 Days"},
        {img:img2,title:"Google Certified"},
       
    ]



    const data=[

        {title:"Product A", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product B", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product C", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product D", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product E", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product F", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
    ]
return(
    <>
    <Menubar/>
    
    
    
    <Container  sx={{
                   
                    // backgroundColor:"pink",
                       position: "absolute",
                       top: 100,
                       right:50,
                       
                       // zIndex: 1000 // to ensure it stays on top
                   }}  >
      
   {/* .............................. */}
   
   


   <Box sx={{display:"flex",justifyContent:"space-between", width:"100%",position:"relative"}}>
   <Stack>
   <Typography variant="h5" fontFamily="syne" fontWeight={700}>
   Product A
   </Typography>
   </Stack>
   
   
   <Stack  >
   <Button sx={{ backgroundColor: "#FFDB58", color: "black", fontWeight: 600, width: "200px" , height:"50px"}}>
                          Edit
                       </Button>
   </Stack>
   </Box>



{/* ..................... */}

   <Box mb={12}sx={{display:"flex",justifyContent:"space-between", width:"100%"}}>
   <Stack>
   <img src={img1} />
   </Stack>
   
   
   <Stack  textAlign="justify" padding="30px">
   <Typography py={2}sx={{display:"flex",flexDirection:"column", textDecoration: "underline"}} fontWeight={600}>Details</Typography>

  <Typography variant="body2">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
   eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

   <Typography fontWeight={800}>Rs.25</Typography>
  </Typography>

   </Stack>

   </Box>
  
   
   <Box >
    <Typography variant="h4" fontFamily="syne" fontWeight={700}>

        Payouts Higlights
    </Typography>
</Box>

<Stack mb={20} display="flex" flexDirection="row" justifyContent="space-around" spacing={0} mt={10}>

{data2.map((item)=>(
<Box sx={{height:"115px",width:"225px",borderRadius:"50%", padding:"10px"}} >

<img src={item.img} style={{ width:"71px",height:"71px" }} alt="Key" />

<Typography variant="h6"  sx={{fontWeight: 600,fontFamily:"syne"}}>
    {item.title}
</Typography> 
<Box  >

</Box>
</Box>
))}
</Stack>



<Box  sx={{position:"absolute"}}>
    <Typography variant="h4" fontFamily="syne" fontWeight={700}>

      Share your Creativity:
    </Typography>

</Box>

<Box pt={10}
pb={20}
      sx={{
        width: 900,
        maxWidth: '100%',
        borderRadius:"10px",

      }}
    >
      <TextField fullWidth  sx={{backgroundColor:"#D9D9D9",borderRadius:"20px"}} label="https://product1" id="fullWidth" /> <ContentCopyIcon  sx={{position:"absolute" , padding:"20px"}}/>
      
    <Box py={6}  sx={{position:"absolute"}}>
    <img  src={img3} />

</Box>

    </Box>





    <Box sx={{position:"absolute"}}>
    <Typography variant="h4" fontFamily="Poppins" fontWeight={700}>

        Product Listing:
    </Typography>
</Box>

    <Stack display="flex" flexDirection="row"    flexWrap="wrap"  gap={3} justifyContent="flex-start" alignItems="flex-start" mb={10} mt={10}>
   {data.map((item)=>(
   <Box sx={{height:"180px",width:"242px",border:"1px solid black", display:"flex",flexDirection:"column" ,alignItems:"flex-start",borderRadius:"10px",padding: 2 }} >
   
   <Stack>
   <Box sx={{width:"80px", height:"60px", backgroundColor:"#FCC917"}}/>
   <Typography variant="h6"  sx={{fontWeight: 600, textAlign:"left"}}>
       {item.title}
     
   </Typography> 
   
   </Stack>
  
   <Stack>
   <Typography variant="body2" mt={0}  sx={{textAlign:"left",font:"16px"}} >
   {item.par}
   </Typography> 
   </Stack>
  

   </Box>

   ))}
   </Stack>











   
   
   </Container>
   
    </>
)

}
export default Home3