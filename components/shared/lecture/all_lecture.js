// import LectureCard from "../cards/lecture_card";
import Grid from '@material-ui/core/Grid';
import Lecturecard from '../card/lecturecard'


export default function Alllecturelist(props){
    const lectures=props.lecturelist;
    return (
        <>
            { lectures && lectures.length && lectures.map((lecturedata,i)=>{
                return(
                    <Grid item xs={12} md={4} key={i}>
                        <Lecturecard lecturedata={ lecturedata }/>
                    </Grid>
                )
            })}
        </>


    )
}