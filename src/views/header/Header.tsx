import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoIcon from '@material-ui/icons/Info';
import {HeaderLink} from "./HeaderLink";

interface Props {

}

function Header(props: Props) {
    return (
        <>
            <span id={'topOfThePage'}></span>
            <AppBar position="fixed" color={'inherit'}>
                <Toolbar>
                    <HeaderLink svg={<HomeIcon/>}
                                linkName={'Home'}
                                linkPath={'#topOfThePage'}/>
                    <HeaderLink svg={<LibraryBooksIcon/>}
                                linkName={'Skills'}
                                linkPath={'#skillSection'}/>
                    <HeaderLink svg={<AccountTreeIcon/>}
                                linkName={'Projects'}
                                linkPath={'#projectSection'}/>
                    <HeaderLink svg={<InfoIcon/>}
                                linkName={'About Me'}
                                linkPath={'#aboutMeSection'}/>
                </Toolbar>
            </AppBar>
        </>
    )
}

export {Header}
