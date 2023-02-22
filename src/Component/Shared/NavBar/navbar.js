import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BlurOnIcon from '@mui/icons-material/BlurOn';
import './navbar.css'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import FoodBankIcon from '@mui/icons-material/FoodBank';




const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate();


    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="navbar">
            <div className="navcontainer">
                <div className="logo">
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        style={{
                            fontSize: "30px",
                        }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                backgroundColor: 'black',
                                borderRadius: '5px',
                                padding: '0px 8px 0px 8px',
                                color: "Orange"
                            }}>
                            Rapid Basket </Paper>
                    </Typography>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    {menuOpen ?
                        <CloseIcon /> :
                        <MenuOpenIcon />}
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>

                    <ul>
                        <li>
                            <Button
                                style={{
                                    color: "black",
                                    marginLeft: "-20px"
                                }}
                                variant="text" startIcon={<HomeIcon />} onClick={() => { navigate("/") }}>
                                Home
                            </Button>
                        </li>
                        <li>
                            <Button
                                style={{
                                    color: "black",
                                    marginLeft: "-20px"

                                }} variant="text" startIcon={<FastfoodIcon />} onClick={() => { navigate("/Menu2") }}>
                                Menu
                            </Button>
                        </li>
                        <li>
                            <Button
                                style={{
                                    color: "black",
                                    marginLeft: "-20px"
                                }} variant="text" startIcon={<ReceiptLongIcon />} onClick={() => { navigate("/Orders") }}>
                                Orders
                            </Button>
                        </li>
                        <li>
                            <Button
                                style={{
                                    color: "black",
                                    marginLeft: "-20px"
                                }} variant="text" startIcon={<InfoIcon />} onClick={() => { navigate("/About") }}>
                                About
                            </Button>
                        </li>
                        <li>
                            <Button
                                style={{
                                    color: "black",
                                    marginLeft: "-20px"
                                }} variant="text" startIcon={<AccountBoxIcon />} onClick={() => { navigate("/Profile") }}>
                                Profile
                            </Button>
                        </li>
                        <li>
                            <Button
                                style={{
                                    color: "black",
                                    marginLeft: "-20px"
                                }} variant="text" startIcon={<HistoryIcon />} onClick={() => { navigate("/OrderHistory") }}>
                                Order_History
                            </Button>
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar