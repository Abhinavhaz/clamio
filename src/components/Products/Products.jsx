
import { Button, Container, Stack, Typography ,Box, Rating} from "@mui/material"
import Menubar from "../Menubar/Menubar"



function Products(){

    const data=[

        {title:"Product A", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product B", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product C", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product D", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product E", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product F", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product G", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product H", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product I", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product J", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product K", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
        {title:"Product L", par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},

        
    ]
    


    return (
<>
<Menubar/>

<Container  sx={{
                   
                    // backgroundColor:"pink",
                       position: "absolute",
                       top: 100,
                       right:50,
                       
                       // zIndex: 1000 // to ensure it stays on top
                   }}  >
    {/* ......................... */} 
    <Box  sx={{position:"absolute"}}>
    <Typography variant="h5" fontFamily="syne" fontWeight={700}>

     Product Listings:
    </Typography>

</Box>
   
   <Stack display="flex" flexDirection="row"    flexWrap="wrap"  gap={2} justifyContent="space-between" alignItems="center" mb={10} mt={10}>
   {data.map((item)=>(
   <Box sx={{height:"180px",width:"242px",border:"1px solid black", display:"flex",flexDirection:"column" ,alignItems:"flex-start",borderRadius:"10px",padding: 2 }} >
   
   <Stack>
   <Box sx={{width:"80px", height:"60px", backgroundColor:"#FCC917"}}/>
   <Typography variant="h6"  sx={{fontWeight: 600, textAlign:"left"}}>
       {item.title}
      <br/> <Rating value={5}  readOnly /> 4.7(1k)
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
export default Products