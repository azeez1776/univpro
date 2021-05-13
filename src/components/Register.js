import React from 'react';
import './Register.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from 'react-bootstrap/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            top: '-3ch'

        },
    },
}));


function Register() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validationSchema: yup.object({
            username: yup
                .string('Enter your username')
                .required('username is required'),
            email: yup
                .string('Enter your email')
                .required('username is required'),
            password: yup
                .string('Enter your password')
                .min(8, 'Password should be of minimum 8 characters length')
                .required('Password is required'),
            passwordConfirm: yup
                .string('Confirm password')
                .oneOf([yup.ref('password'), null], 'Password must match')
        }),
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    const classes = useStyles();

    return (
        <div className="register">
            <Container fluid="md">
                <div className="register_info">
                    <h2 style={{ position: 'relative', left: 50, top: -50 }}>Register</h2>
                    <form className={classes.root} onSubmit={formik.handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            label="username"
                            variant="standard"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="register_error">{formik.errors.username}</div>
                        ) : null}

                        <TextField
                            id="outlined-basic"
                            label="E-mail"
                            variant="standard"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange} />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="register_error">{formik.errors.email}</div>
                        ) : null}

                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            variant="standard"
                            value={formik.values.password}
                            onChange={formik.handleChange} />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="register_error">{formik.errors.password}</div>
                        ) : null}

                        <TextField
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            name="passwordConfirm"
                            variant="standard"
                            value={formik.values.passwordConfirm}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
                            <div className="register_error">{formik.errors.passwordConfirm}</div>
                        ) : null}
                        <div className="register_sub">
                            <input type="submit" value="Sign Up" className="register_but" />
                        </div>
                        <span class="register_psw">Already have an account? <a href="#" style={{ textDecoration: 'none' }}>Sign In</a></span>
                    </form>

                </div>
            </Container>
        </div>
    )
}

export default Register
