
import React from "react"
import { Grid } from "@mui/material"
import "./login.css"
import { Outlet } from "react-router-dom";




function Login() {
    return (
        <Grid>
            <Grid sx={{ backgroundColor: "white", margin: "0px", height: "450px" }}>
                <Grid className="logo_cont">
                    <img src="https://www.nicepng.com/png/full/786-7864433_amazon-india-prevents-it-burnout-and-collects-business.png" className="login_logo" />
                </Grid>
                <Grid className="login_box">
                    <div className="border">
                        <span className="login_text"> Sign-In </span>

                        <div className="txt_cont">
                            <span className="login_emailtxt"> Email or mobile phone number </span><br />
                            <input type="text" placeholder="enter email or phone" className="login_ip" />
                            <br />
                            <button className="login_button">Continue</button>
                        </div>
                        <span className="txt">By continuing, you agree to terms and condition of Use and Privacy Notice</span>

                    </div>

                </Grid>
                <span className="new_txt">New to Amazon ?</span>
                <Grid className="sign_up">
                    <button className="sign_but"> Create your Amazon account</button>
                </Grid>
            </Grid>
            <Outlet />
        </Grid>



    )
}

export default Login; 