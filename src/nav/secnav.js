import React from "react"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "./scenav.css"
import { Link } from "react-router-dom";



export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Trending', 'Digital & electronics ', 'Shop by department', 'Program & features', 'Help & settings'].map((text, index) => (
                    <ListItem key={text} disablePadding  >
                        <Divider />
                        <ListItemButton className="list" >
                            <ListItemText primary={text} />
                            <List >
                                {['Option 1', 'Option 2', 'Option 3'].map((text, index) => (
                                    <ListItem key={text} disablePadding className="list"  >
                                        <ListItemButton>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <div>
                {['All'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            <div className="head">
                                Hello,<Link to="/login"> <span className="sign_but">Sign in</span></Link>
                            </div>
                            {list(anchor)},
                        </Drawer>
                    </React.Fragment>
                ))}   <Button color="inherit" size="small" >Best Seller</Button> <Button color="inherit" size="small" >Mobiles</Button> <Button color="inherit" size="small" >Today's Deals</Button> <Button color="inherit" size="small" >Customer Service</Button> <Button color="inherit" size="small" >Books</Button> <Button color="inherit" size="small" >Electronics</Button>
                <Button color="inherit" size="small" >prime</Button> <Button color="inherit" size="small" >Fashion</Button> <Button color="inherit" size="small" >New Releases</Button> <Button color="inherit" size="small" >Home & Kitchen</Button> <Button color="inherit" size="small"> Coupon </Button>    <Button color="inherit" size="small" > Amazon Pay </Button>             <a href="https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping&hl=en_IN&gl=US" target={"_blank"} >    <Button >     Download  App  </Button></a>
            </div>
        </div>
    );
};

export { TemporaryDrawer };    