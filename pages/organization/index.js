import Meta from "../../components/meta";
import Layout from "../../components/layout";
import Container from "@material-ui/core/Container";
import styles from "../../styles/Home.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import OrganizationCArd from "../../components/cards/organization_card";
import {getOrganizations} from '../../actions';


export default function allOrganization(organizations){
    const organization =organizations.organizations
    return(
        <div>
            <Layout>
                <Meta
                    title="Organization"
                />
                <Container>
                    <div className={styles.home_blogs}>
                        <Grid container spacing={3} className={styles.home_organization_section}>
                            <Grid item xs={12}>
                                <Typography variant="body1" className={styles.section_title}>
                                    <span className={styles.blog_seperator}/>Oragnization
                                </Typography>
                                <Typography variant="h4" className="section_subehading" >
                                    Related Oragnization
                                </Typography>
                            </Grid>

                            {
                                organization && organization.length && organization.map((org,i)=>{
                                    return(
                                        <Grid item xs={12} md={4} key={i}>
                                            <OrganizationCArd organizationdata={org}/>
                                        </Grid>
                                    )

                                })
                            }
                        </Grid>
                    </div>

                </Container>

            </Layout>
        </div>
    )
}

export async function getStaticProps(context) {

    const organizations = await getOrganizations();
    return {
        props: {
            organizations
        },
    }
}