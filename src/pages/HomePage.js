import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { TableRow } from '@mui/material';

import IndoorMap from "./IndoorMap"
export default function HomePage() {
    const [menu, setMenu] = useState('1');
    const [sideBar, setSideBar] = useState(false);

    const handleChange = (event, newValue) => {
        setMenu(newValue);
    };

    const handleOpen = () => {
        setSideBar(true);
    };

    const handleClose = () => {
        setSideBar(false);
    };

    return (
        <div>
            <Card>
                <div><Button onClick={handleOpen}>Open Drawer</Button>
                    <Typography sx={{ minWidth: 100 }}>Booking system</Typography></div>
            </Card>
            <Drawer open={sideBar} onClose={handleClose}>
                <Box sx={{ width: 250 }} role="presentation" onClick={handleClose} onKeyDown={handleClose}>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemText primary="home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemText primary="2" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemText primary="3" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItemButton>
                            <ListItemText primary="Contact Us" />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
            <Card sx={{ width: '75%', mx: "auto", marginTop: "40px" }}>
                <TabContext value={menu} style={{ textAlign: "center" }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
                <IndoorMap />
            </Card>
        </div>
    );
}
