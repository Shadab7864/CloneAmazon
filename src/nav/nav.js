import React from "react"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link,Outlet} from "react-router-dom"

import { Grid,Button,Drawer,List,Divider, ListItem, ListItemButton, ListItemText} from "@mui/material";
import "./nav.css";
import { Box } from "@mui/system";
import TemporaryDrawer from "./secnav";



export default class Nav extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            left:[false],
        }
    }


    
    render()
    {
        return(
            <Grid>
                <Grid sm={1} lg="auto" className="nav">
                    <div className="logo">
                        <img src= "https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png?fit=561%2C160&ssl=1" className="logo1"/>
                    </div>
                    <Grid sm="0" lg="auto" md="auto" className="adr">
                        <span className="font"> <AddLocationAltIcon fontSize="small" /></span>
                        <span className="adj"> Hello <br/>select your address</span>
                    </Grid>
                    <Grid  className="srch" > 
                    <input type="text" placeholder="Search" className="srch1"  /> <Button sx={{color:"Black[500]",backgroundColor:"#FFD700"}} ><SearchIcon/></Button>
                    </Grid>
                    <div className="nation">
                    Nation
                    </div>
                    <Grid sm="auto" className="log">
                    
                    <span className="hel">Hello,</span>
                    <Button color="inherit" size="small" >
                    <span className="acc">Sign In</span><br/>
                    </Button>
                    <Button color="inherit" size="small" >
                    <span className="acc">Accounts & Lists</span>
                    </Button>
                    </Grid>
                    <Grid className="return" sm="auto" md="auto" lg="auto">
                    <Button sx={{color:"white"}} > Returns & Orders </Button>
                    </Grid>
                    <Grid className="cart">
                       <Button sx={{color:"white"}} > <AddShoppingCartIcon/> </Button>
                    </Grid>
                </Grid>
                <Grid  sm="auto" lg="auto" md="auto" className="nav2">
                    <TemporaryDrawer/>
                </Grid>
                </Grid>
        )
    }
}
