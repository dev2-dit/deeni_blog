import Head from 'next/head'

export default function Meta(props) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, uc-fitscreen=yes"
            />
            <title>{props.title || ""} - {props.description || ""}</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>
    )
}