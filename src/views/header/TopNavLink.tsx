import React from "react";
import {Button, Typography} from "@material-ui/core";
import {HashLink} from "react-router-hash-link";

interface Props {
    svg: React.ReactNode
    linkName: string,
    linkPath: string,
}

function TopNavLink(props: Props) {
    return (
        <Button color={'inherit'}
                className={'ml-4'}
                component={HashLink}
                to={`/${props.linkPath}`}
                smooth={true}>
            {props.svg}
            <Typography variant={'h6'}
                        className={'ml-1'}>
                {props.linkName}
            </Typography>
        </Button>
    )
}

export {TopNavLink}
