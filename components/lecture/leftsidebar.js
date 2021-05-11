import styles from "../../styles/Lecturepage.module.css";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function Leftsidebar(props){

    const category=props.category;

    return(
        <div className={styles.categorySidebar}>
            <Typography variant="h5" >
                Lecture Categories
            </Typography>
            <ul>

                { category.map((c,i) =>
                   <li key={i}>
                       <a  href="#" onClick={()=>props.changecat(c.name)}
                           className={`list-group-item ${props.activecategory ==c.name ? 'active' : ''}`}>
                           {c.name}
                       </a>
                   </li>
                )
                }

            </ul>
        </div>
    )
}