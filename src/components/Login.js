import React from 'react';
import './Login.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',

        },
    },
}));




function Login() {

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
        </div>
    )
}

export default Login
