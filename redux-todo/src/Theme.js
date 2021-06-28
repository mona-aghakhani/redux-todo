import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, {useMemo} from "react";
import {useSelector} from "react-redux";


export default function Theme(props){
    const darkmod = useSelector((state) => state.theme.dark)

    const Theme = useMemo(() => createMuiTheme({
        palette: {
            type: darkmod ? 'dark':'light'
        },
    }), [darkmod]);


    return ( <ThemeProvider theme={Theme}>
                {props.children}
            </ThemeProvider>)
}