// import React, { useState, useEffect } from 'react';
import './Login.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from 'react-bootstrap/Container';
// import { useScreenType } from '../responsive/mediaQuery';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',

        },
    },
}));




function Login() {

    // const [screen1, setScreen1] = useState(false);


    // const screen = useScreenType();
    // useEffect(() => {

    //     if (screen === "screen1") {
    //         setScreen1(true)
    //     }
    // })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: yup.object({
            username: yup
                .string('Enter your username')
                .required('username is required'),
            password: yup
                .string('Enter your password')
                .min(8, 'Password should be of minimum 8 characters length')
                .required('Password is required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const classes = useStyles();

    return (
        <div className="login">
            <Container fluid="md">
                {/* <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(3, 5, 94);"></stop>
                        <stop offset="100%" style="stop-color: rgb(2, 61, 138);"></stop>
                    </linearGradient>
                </defs>
                <path id="blob" d="M379.5,349.5Q365,449,263,426.5Q161,404,96.5,327Q32,250,89,160.5Q146,71,260,52.5Q374,34,384,142Q394,250,379.5,349.5Z" fill="url(#gradient)"></path>
            </svg> */}
                <div className="login_info">
                    <h2 style={{ position: 'relative', left: 70, top: -20 }}>Sign In</h2>
                    <form className={classes.root} onSubmit={formik.handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            name="username"
                            label="username"
                            variant="standard"
                            value={formik.values.username}
                            onChange={formik.handleChange}


                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div style={{ color: 'red' }}>{formik.errors.username}</div>
                        ) : null}
                        <TextField
                            id="outlined-password-input"
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div style={{ color: 'red' }}>{formik.errors.password}</div>
                        ) : null}
                        <div className="login_sub">
                            <input type="submit" value="Sign In" className="login_but" />
                        </div>
                    </form>
                    <hr className="login_hr" />
                    <span class="login_psw">Forgot <a href="#" style={{ textDecoration: 'none' }}>password?</a></span>
                </div>
            </Container>
        </div>
    )
}

export default Login
