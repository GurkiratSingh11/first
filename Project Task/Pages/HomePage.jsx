import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const HomePage = () => {
  return (
    <>
       <Box component="main" sx={{ flexGrow: 1, p:3 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Stack spacing={2} direction="row">
        <Card sx={{ minWidth: 49 +"%",height:140 }}>
      <CardActionArea>
      <CardContent>
                  <div>
                    <CreditCardIcon/>
                  </div>
                  <Typography gutterBottom variant="h5" component="div">
                  $500.00
                  </Typography>
                  <Typography gutterBottom variant="body2" color="text.secondary">
                    Total Earnings
                  </Typography>
                </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ minWidth: 49 +"%",height:140 }}>
      <CardActionArea>
      <CardContent>
                  <div>
                    <ShoppingBagIcon />
                  </div>
                  <Typography gutterBottom variant="h5" component="div">
                  $900.00
                  </Typography>
                  <Typography gutterBottom variant="body2" color="text.secondary">
                    Total Orders
                  </Typography>
                </CardContent>
      </CardActionArea>
    </Card>
        </Stack>
        </Grid>
        <Grid item xs={4}>
        <Stack spacing={2} direction="column">
        <Card>
      <CardActionArea>
       
        <Stack spacing={2} direction="row">
        <div style={{marginTop:"20px",marginLeft:"20px"}}>
                  <StorefrontIcon/>
                  </div>
        <div style={{padding:"10px 10px 10px 10px"}}>
                  <span style={{fontWeight: "600"}}>$302k</span><br/>
                  <span style={{fontSize:"16px"}}>Total Income</span>
                  </div>
        </Stack>
       
      </CardActionArea>
    </Card>

    <Card >
      <CardActionArea>
        
        <Stack spacing={2} direction="row" >
        <div style={{marginTop:"20px",marginLeft:"20px"}}>
                  <StorefrontIcon/>
                  </div>
        <div style={{padding:"10px 10px 10px 10px"}}>
                  <span style={{fontWeight: "600"}}>$302k</span><br/>
                  <span style={{fontSize:"16px"}}>Total Income</span>
                  </div>
        </Stack>
         
        
      </CardActionArea>
    </Card>
        </Stack>
        </Grid>

        <Grid item xs={8}>
        <Card sx={{ height:60 + "vh"}}>
      <CardActionArea>
        <CardContent>
          
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ height:60 + "vh"}}>
      <CardActionArea>
        <CardContent>
          
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default HomePage;
