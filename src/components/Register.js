import React from 'react';
import './Register.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            paddinf: '20ch'
        },
    },
}));

function Register() {

    const classes = useStyles();

    return (
        <div className="register">
            <div className="register_info">
                <h2 style={{ left: 50 }}>Register</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="First Name" variant="standard" />
                    <TextField id="outlined-basic" label="Last Name" variant="standard" />
                    <TextField id="outlined-basic" label="E-mail" variant="standard" />
                    <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" />
                    <TextField id="outlined-password-input" label="Confirm Password" type="password" autoComplete="current-password" variant="standard" />
                    <div className="register_sub">
                        <input type="submit" value="Submit" className="register_but" />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register
