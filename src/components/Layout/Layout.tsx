import { Box } from '@mui/material';
import Header from '../Header/Header';
import { LayoutType } from './type';

const Layout = ({ children }: LayoutType) => { 
    return (
        <Box>
            <Header/>
            {children}
        </Box>
    )
}

export default Layout