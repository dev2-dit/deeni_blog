import CardMedia from "@material-ui/core/CardMedia";
import Image from "next/image";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import React, {useState} from "react";
import Modal from '@material-ui/core/Modal';
import styles from '../../../styles/Organization.module.css'
import CloseIcon from '@material-ui/icons/Close';
import LanguageIcon from '@material-ui/icons/Language';
import Divider from "@material-ui/core/Divider";




export default function OrganizationCard(props){

    const data=props.organizationdata;
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div  className={styles.paper}>
            <div className={styles.modalheader}>
                <Image
                    src="/demoimage/assunnah.png"
                    alt="blog_image"
                    width={200}
                    height={150}
                />

                <CloseIcon onClick={()=>setOpen(false)} className={styles.closeicon}/>

            </div>
            <Divider style={{margin:'15px 0px'}}/>
            <Typography variant="subtitle1" color="textSecondary">
                তাইবাহ একাডেমি একটি অলাভজনক, অরাজনৈতিক এবং পূর্ণত মানবকল্যাণে নিবেদিত সেবামূলক প্রতিষ্ঠান। এই প্রতিষ্ঠান মানবতার শিক্ষক, মানুষের মুক্তি ও শান্তির দূত, মানবসেবার আদর্শ, মহানবী হযরত মুহাম্মদ সা.-এর পদাঙ্ক অনুসরণ করে আর্তমানবতার সেবা, সমাজ সংস্কার, মহত্তম নীতিচেতনার সঞ্চার, কর্মসংস্থান তৈরি, দারিদ্র্য বিমোচন, ইসলামী তমদ্দুনের প্রসার, বহুমুখী শিক্ষায়ন প্রকল্প পরিচালনা, শিক্ষাবৃত্তি প্রদান, ত্রাণ বিতরণ, বিনামূল্যে স্বাস্থ্যসেবা প্রদান, মাদকনিরোধী ও যৌতুকবিরোধী পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি মৌখিক, লৈখিক ও আন্তর্জালিক সকল প্রচারমাধ্যম ব্যবহার করে মানুষকে মহান আল্লাহর আনুগত্য ও তাঁর রাসূলের অনুকরণে সত্য ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে। বাংলাদেশের নন্দিত ইসলামিক চিন্তক-লেখক-সংস্কারক অধ্যাপক ড. খোন্দকার আবদুল্লাহ জাহাঙ্গীর (রহ.)-এর দাওয়াতের নীতি ও পদ্ধতিতে কাজ করে তাঁর রেখে যাওয়া আস-সুন্নাহ ট্রাস্টের মহৎ কার্যক্রম আরও বিস্তৃত ও গতিশীল করে সারাদেশে ছড়িয়ে দিতে চায়
            </Typography>
            <Divider style={{margin:'15px 0px'}}/>
            <Typography variant="subtitle1" color="textSecondary" style={{display:'flex',justifyContent:'center'}}>
                <LanguageIcon/><span style={{marginTop:'-3px 0px'}}>www.taibahacademy.com</span>
            </Typography>
            <Divider style={{margin:'15px 0px'}}/>

        </div>
    );

    return (
        <>
            <Card className={styles.root} onClick={handleOpen}>
                <CardMedia>
                    <Image
                        src="/demoimage/assunnah.png"
                        alt="blog_image"
                        width={200}
                        height={150}
                    />
                </CardMedia>
                <div className={styles.details}>
                    <CardContent className={styles.content}>
                        <Typography component="h5" variant="h5">
                            তাইবাহ একাডেমি
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            তাইবাহ একাডেমি একটি অলাভজনক, মানবকল্যাণে নিবেদিত আরও দেখুন
                        </Typography>
                    </CardContent>
                </div>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}

            </Modal>
        </>


    )
}