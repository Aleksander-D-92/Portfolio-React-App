import React from "react";
import {Typography} from "@material-ui/core";

interface Props {
    value: string,
    description?: string
}

function AboutMeListTitle(props: Props) {
    return (
        <>
            <Typography variant={'h5'}
                        color={'textPrimary'}
                        style={{textDecoration: 'underline'}}>
                {props.value}
            </Typography>
            {props.description !== undefined &&
            <Typography variant={'subtitle1'}
                        color={'textSecondary'}>
                {props.description}
            </Typography>}

        </>
    )
}

export {AboutMeListTitle}
