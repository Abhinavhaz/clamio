
import { Button, Container, Stack, Typography ,Box,TextField,InputAdornment} from "@mui/material"
import { Link } from "react-router-dom"
import Menubar from "../Menubar/Menubar"
import plus from "../../assets/plus.png"
import { typography } from "@mui/system"

function HomePage2(){

    

    const data=[

        {title:"Category Name", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Category Name", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Category Name", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Category Name", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Category Name", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Category Name", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
    ]
    const  xyz = 
    
    <TextField
        InputProps={{
       sx:{ height:"60px", width:"317px",borderRadius:"10px",backgroundColor:"#D9D9D9"  ,border:"1px solid black"},
    
         startAdornment: (
           <InputAdornment 
             position="start"
             sx={{ marginLeft:"120px", width: '100%' }}
           >
             Input Area
           </InputAdornment>
         ),
       }}
     />
   
     

    return(
<>
        <Menubar/>
        
        
<Container  sx={{
                   
                //    backgroundColor:"red",
                      position: "absolute",
                      top: 100,
                      right:50,
                      
                      // zIndex: 1000 // to ensure it stays on top
                  }}  >
   
   


                   
   <Box sx={{position:"absolute",                      }}>
    <Typography variant="h4" fontFamily="unset" fontWeight={500}>

        Create Something New
    </Typography>
</Box>

  

<Stack mt={20} mb={12} direction="row" sx={{ justifyContent: "space-between", width: '100%'}}>
    
<Box >
    {/* .....................biggerbox...... */}
    
<Stack sx={{height:"372px", width:"419px",backgroundColor:"#FFDB58",mt:"10px"}}>

<Typography variant="h5" fontWeight={700} mt={-10} textAlign="left">
Input Product Image/Video
</Typography>


    <Stack 
        sx={{ height: "100%", width: "100%" }}
        justifyContent="center"
        alignItems="center">
        <img src={plus} alt="plus" style={{height:"60px",width:"60px",}}/>
    </Stack>
</Stack>
{/* ................................................................3 boxes */}
<Box maxWidth="xl" sx={{display:"flex",padding:"8px",mt:"10px",}}>

    < Stack sx={{height:"118px", width:"123px",backgroundColor:"#FFDB58",marginRight:"20px",}}>
    <Stack 
        sx={{ height: "100%", width: "100%" }}
        justifyContent="center"
        alignItems="center">
        <img src={plus} alt="plus" style={{height:"30px",width:"30px",}}/>
    </Stack>
    </Stack>

    <Stack  sx={{height:"118px", width:"123px",backgroundColor:"#FFDB58",marginRight:"20px"}}>
         <Stack 
        sx={{ height: "100%", width: "100%" }}
        justifyContent="center"
        alignItems="center">
        <img src={plus} alt="plus" style={{height:"30px",width:"30px",}}/>
    </Stack>
    </Stack>

    <Stack  sx={{height:"118px", width:"123px",backgroundColor:"#FFDB58",}}>
        <Stack 
        sx={{ height: "100%", width: "100%" }}
        justifyContent="center"
        alignItems="center">
        <img src={plus} alt="plus" style={{height:"30px",width:"30px",}}/>

    </Stack>
    
    </Stack>

</Box>



</Box>
{/* ...............first two boxes */}



{/* .............................2nd ele..................... */}
<Box sx={{mt:"-10px"}}>

<Box  mt={-7} mb={6} >
<Typography variant="h5"  fontWeight={700} textAlign="left">
Input Product name
</Typography>
</Box>




<Box

pb={5}
      
    >
      <TextField
        InputProps={{
       sx:{  width:"552px",borderRadius:"10px",backgroundColor:"#D9D9D9"  ,border:"1px solid black"},
    
         startAdornment: (
           <InputAdornment 
             position="start"
             sx={{ marginLeft:"150px", width: '100%' }}
           >
             Input Area
           </InputAdornment>
         ),
       }}
     />
    </Box>

    
<Typography variant="h5" textAlign="left"fontWeight={700}>
Input Product Description
</Typography>

    <TextField
        multiline
        rows={10} 
        
        sx={{
          width: "535px",
          height: "391px",
          backgroundColor:" #D9D9D9",
          border: "1px solid black",
          '& .MuiOutlinedInput-root': {
            height: '100%',
            '& fieldset': {
              borderColor: 'black',
            },
          },
        }}
      />
</Box>

</Stack>
{/* .................................upppr half.................................. */}





<Box sx={{position:"absolute"}}>
    <Typography variant="h4" fontFamily="Poppins" fontWeight={700}>

      Input  Product Category
    </Typography>
</Box>

    <Stack display="flex" flexDirection="row"    flexWrap="wrap"  gap={3} justifyContent="flex-start" alignItems="flex-start" mt={30} mb={10} >
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





   <Box >
    <Typography variant="h5" fontFamily="Poppins" fontWeight={700}>

    Your Product Highlights
    </Typography>
</Box>









<Box mb={10} display="flex" justifyContent="space-around" py={4}  >
  <Stack >
    <Box py={2} justifyContent="space-around">
      Feature 1 {xyz}
    </Box>
    
    <Box   py={2}>
    Feature 2
      {xyz}
    </Box>
    <Box  py={2}>
    Feature 3
      {xyz}
    </Box>
    <Box>
    Feature 4
      {xyz}
    </Box>
  </Stack>
  <Stack>
    <Box  py={2}>
    Feature 5
      {xyz}
    </Box>
    <Box  py={2} >
    Feature 6
      {xyz}
    </Box>
    <Box  py={2}>
    Feature 7
      {xyz}
    </Box>
    <Box >
    Feature 8
      {xyz}
    </Box>
  </Stack>
</Box>




<Box  sx={{position:"absolute"}}>
    <Typography variant="h4" fontFamily="syne" fontWeight={700}>

      Share your Creativity:
    </Typography>

</Box>

<Box pt={10}
pb={20}
      sx={{
        width: 500,
        maxWidth: '100%',
        borderRadius:"10px",

      }}
    >
      <TextField fullWidth  sx={{backgroundColor:"#D9D9D9",borderRadius:"20px"}} label="₹" id="fullWidth" /> 
      
    <Box py={6}  sx={{position:"absolute"}}>
    

</Box>

    </Box>


<Box display="flex" mb={10} >
<Stack marginRight="70px" >
<Button sx={{ backgroundColor: "#FFDB58", color: "black", fontWeight: 600, width: "200px" , height:"50px"}}>Cancel</Button>
</Stack>

<Stack>
< Link to="/Home3">
<Button sx={{ backgroundColor: "#FFDB58", color: "black", fontWeight: 600, width: "200px" , height:"50px"}}>Launch Product</Button>
</Link>
</Stack>
</Box>

</Container> 
        </>
    )
}
export default HomePage2





