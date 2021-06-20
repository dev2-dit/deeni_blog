import styles from '../../../styles/Lecture.module.css'
import Typography from "@material-ui/core/Typography";
import React from "react";
import Link from 'next/link'
import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles({
    appbar_second:{
        paddingLeft:0,
        paddingRight:0,
    }
});

export default function Categorysidebar(props){
    const category=props.category;

    const classes = useStyles();
    const theme = useTheme();
    const isMatches = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return(


        <>
            {isMatches ?

                <div>

                    <Button aria-controls="category-menu" aria-haspopup="true" onClick={handleClick}>
                        <ArrowForwardIosIcon className={styles.menuarrow}/> Categories
                    </Button>
                    <Menu
                        id="category-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                       className={styles.menuitem}
                    >

                        { category.map((c,i) =>
                            <Link href={`?playlist=${c.id}`} key={i}>
                            <a onClick={()=>props.changecat(c.title,c.id)}
                               className={`list-group-item ${props.activecategory ==c.title ? 'active' : ''}`}>
                            <MenuItem onClick={handleClose} key={i}>{c.title}</MenuItem>
                            </a>
                            </Link>
                        )
                        }


                    </Menu>
                </div>

                :
            <div className={styles.categorySidebar}>
            <Typography variant="h5" style={{marginLeft:'-17px'}} >
                Lecture Categories
            </Typography>
            <ul>
                { category.map((c,i) =>
                    <li key={i}>
                        <Link href={`?playlist=${c.id}`}>
                        <a  onClick={()=>props.changecat(c.title,c.id)}
                            className={`list-group-item ${props.activecategory ==c.title ? 'active' : ''}`}>
                            {c.title}
                        </a>
                        </Link>
                    </li>
                )
                }
            </ul>
        </div>
            }
        </>
    )
}