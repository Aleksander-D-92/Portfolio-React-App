import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {Grid, Typography} from "@material-ui/core";

interface Props {
    value: string
}

function SectionTitle(props: Props) {
    return (
        <>
            <Grid item={true} xs={12}>
                <ScrollAnimation animateIn="animate__backInDown" className={'mb-3 mt-3'}>
                    <Typography variant={'h2'} align={'center'}>
                        {props.value}
                    </Typography>
                </ScrollAnimation>
            </Grid>
        </>
    )
}

export {SectionTitle}
