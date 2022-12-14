import React , {useEffect,useState} from 'react'
import './css/UserPanel.css'
import Login from '../Components/Users/Login'
import UserHeader from '../Components/Users/UserHeader'
import {
    Link, Outlet 
  } from "react-router-dom";
import {Container,Box, Typography, Toolbar,IconButton, Button,Badge , Grid} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person4Icon from '@mui/icons-material/Person4';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ArticleIcon from '@mui/icons-material/Article';
import SecurityIcon from '@mui/icons-material/Security';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const UserPanel = () => {
  
const [isLoggedIn, setLogin] = useState(true);
const [toggle, settoggle] = useState(false);

const togglebtn = ()=>{

if(toggle){
  settoggle(false)
}else{

  settoggle(true)
}

}



const hidetoggle = () =>{

  settoggle(false);


}



  return (
     <> {isLoggedIn && 
     <div>
  <UserHeader/>
 <div className="userpanel">


 <Container sx={{display:{xs:'none', sm:'block'}}} maxWidth="xl" style={{width:'300px', backgroundColor:'#F5F9FC', height:'100vh'}}>
   

   
   
  <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }} className='gridcontainer'>
 
 <Grid item xs={12} className='gridbox' >
 <DashboardIcon style={{color:'#5442f2'}} />
 <Link style={{textDecoration:'none', color:'black' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/userdashboard'>Dashboard</Link>
 
 
 </Grid>
 
 <Grid item xs={12} className='gridbox'>
 <Person4Icon style={{color:'#EA661C'}} />
 <Link style={{textDecoration:'none', color:'black' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/userkyc'>Profile</Link>
 </Grid>


 <Grid item xs={12} className='gridbox' >
 <AccountBalanceWalletIcon style={{color:'#0082FC'}} />
 <Link style={{textDecoration:'none', color:'black' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/wallet'>Wallet</Link>
 </Grid>


 
 <Grid item xs={12} className='gridbox'>
 <EqualizerIcon style={{color:'#19B6A4'}} />
 <Link  style={{textDecoration:'none', color:'black' , fontSize:'16px' , marginLeft:'10px'}} to='/trade'>Buy Coins</Link>
 </Grid>
 
 <Grid item xs={12} className='gridbox'>
 <ArticleIcon style={{color:'#1392DE'}}/>
 <Link  style={{textDecoration:'none', color:'black' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/tradehistory'>Trade History</Link>
 </Grid>

 <Grid item xs={12} className='gridbox'>
 <RequestPageIcon style={{color:'#AEB5BB'}}/>
 <Link  style={{textDecoration:'none', color:'black' , fontSize:'16px',marginLeft:'10px'}} to='/userpanel/transactionhistory'>Transaction History</Link>
 </Grid>


 <Grid item xs={12} className='gridbox' >
 <SecurityIcon style={{color:'#0082FC'}} />
 <Link style={{textDecoration:'none', color:'black' , fontSize:'16px',marginLeft:'10px'}} to='/login'>Security</Link>
 </Grid>

 <Grid item xs={12} className='gridbox' >
 <PersonAddIcon style={{color:'#22A3D0'}} />
 <Link style={{textDecoration:'none', color:'black' , fontSize:'16px',marginLeft:'10px'}} to='/registration'>Referral</Link>
 
 
 </Grid>


 <Grid item xs={12} className='gridbox' >
 <PowerSettingsNewIcon style={{color:'#0082FC'}} />
 <Link style={{textDecoration:'none', color:'black' , fontSize:'16px',marginLeft:'10px'}} to='/Logout'>Logout</Link>
 </Grid>



</Grid>



 </Container>
 <Container maxWidth="xl" >
   <Container maxWidth="lg" style={{backgroundColor:'#F5F9FC'}}>
   <Outlet />
   </Container>

 </Container>

 <Box sx={{display:{xs:'block', sm:'none' , position:'fixed' , bottom:0, height:'38px' , width:'100vh' ,zIndex:5 , display:'flex' , justifyContent:'center' , alignItems:'center' , backgroundColor:'#171B26'}}}>
 this BCEX

 </Box>
 </div> 
 </div> 
 }
 </>  
    )
}

export default UserPanel