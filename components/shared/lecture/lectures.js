// import React, {useEffect} from 'react';
// import { useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Container from "@material-ui/core/Container";
// import Link from 'next/link'
// import Typography from "@material-ui/core/Typography";
// import Categorysidebar from '../../shared/lecture/category_sidebar'
// import Alllecturelist from '../lecture/all_lecture'
// import {useRouter} from "next/router";
// import {getlecturs} from "../../../actions";
//
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
// }));
//
// export default function LectureList(props) {
//     const classes = useStyles();
//     const lectures =props.lectures;
//     const lecturecategories =props.lecturecategories;
//
//     const [state, setState] = useState({
//         filter: '',
//         playlist_category:'const playlistId ="UU3kG-1vBavgcATRxs0XRFQw"'
//     })
//     const changeCategory =(category,id)=>{
//
//         setState({
//             filter: category ,
//             playlist_category :id,
//
//         })
//     }
//
//
//
//     const router = useRouter()
//
//     useEffect(() => {
//         // Always do navigations after the first render
//         router.push('?playlist=', undefined, { shallow: true })
//     }, [])
//
//     return (
//         <Container>
//             <div>
//                 <Grid container spacing={3}>
//                     <Grid item xs={12} md={3}>
//                         <Categorysidebar category ={lecturecategories || []}
//                                      changecat ={changeCategory}
//                                      activecategory={state.filter}
//                         />
//
//                     </Grid>
//                     <Grid item xs={12} md={9}>
//                         <Typography variant="h4" style={{padding:'25px 0px'}}>
//                             {state.filter ? state.filter : "All Lectures" }
//                         </Typography>
//                         <Grid container spacing={0}>
//                             <Alllecturelist lecturelist={props.lectures}/>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </div>
//         </Container>
//     );
// }
//
// export async function getStaticProps(context) {
//     const playlistId ="UU3kG-1vBavgcATRxs0XRFQw"
//     const lectures = await getlecturs(playlistId);
//     return {
//         props: {
//             lectures,
//         },
//     }
// }