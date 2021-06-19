import TextField from '@material-ui/core/TextField';
import styles from "../../styles/Contact.module.css";
import Button from "@material-ui/core/Button";
import React from "react";



export default function ContactForm() {

    return(
        <form noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Name" variant="outlined" className={styles.textfield} />
            <TextField id="outlined-basic" label="Subject" variant="outlined" className={styles.textfield} />
            <TextField id="outlined-basic" label="Email" variant="outlined" className={styles.textfield} />
            <TextField id="outlined-basic" label="Number" variant="outlined" className={styles.textfield} />
            <TextField
                id="outlined-multiline-static"
                label="Your Messege"
                multiline
                rows={4}
                variant="outlined"
                className={styles.textarea}
                fullWidth
                margin="normal"
                placeholder="Write Your Messege Here"
            />
            <Button  className="button_contact" >
                Contact
            </Button>


        </form>
    )
}