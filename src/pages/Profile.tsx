
import { Stack, Typography, colors } from "@mui/material"

const Profile = () =>{
    
    return <>
    <Stack position={"relative"}>
        <img src="./public/images/bg.webp" style={{width : '100%', height : '300px', objectFit : 'cover'}}  />
        <img src="./public/images/anime-2.png" style={{ border : ' white  solid 8px ',borderRadius : '50%' , width: '150px', height : ' 150px', position : 'absolute',objectFit : 'cover' , top :'60%',left:'45%'}}  />
    </Stack>
    <Stack sx={{ m : '10%', p : '5%', bgcolor : '#f2eeee',  borderRadius : '16px'}} >
        <Typography> Name : Nguy Tai</Typography>

    </Stack>
    </>
}

export default Profile