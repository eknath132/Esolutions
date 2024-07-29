import React, {useState} from 'react'
import { MenuItem, Grid, Menu } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

interface ISelector {
    valor: string; 
    array: string[]; 
    cambiarValor: (arr: string) => void
    mes?: boolean
}

export const Selector: React.FC<ISelector> = ({valor, array, cambiarValor, mes}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const abrir = Boolean(anchorEl);

    const abrirMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const cerrarMenu = () => {
        setAnchorEl(null);
    };

    const elegirFechaAnterior = (valor: string) => {
        let posicion = array.findIndex(arr => arr === valor)
        if(mes && posicion === 0) {
            return cambiarValor('Dic')
        }
        cambiarValor(array[posicion - 1])
    }

    const elegirFechaSiguiente = (valor: string) => {
        let posicion = array.findIndex(arr => arr === valor)
        if(mes && posicion === 11) {
            return cambiarValor('Ene')
        }
        cambiarValor(array[posicion + 1])
    }

    return (
        <Grid item container columnSpacing={1}>
            <Grid item onClick={() => elegirFechaAnterior(valor)} sx={{cursor: 'pointer'}}>
                <KeyboardArrowLeftIcon/>
            </Grid>
            <Grid item>
                <Grid item container alignItems={'center'} sx={{cursor:'pointer'}} onClick={abrirMenu}>
                    <Grid item>
                        {valor}
                    </Grid>
                    <Grid item ml={1} sx={{display:'flex'}} >
                        <KeyboardArrowDownIcon fontSize='small'/>
                    </Grid>
                </Grid>
            </Grid>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={abrir}
                onClose={cerrarMenu}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
                sx={{marginLeft:'-16px', marginTop:'20px'}}
            >
                {array.map(arr => <MenuItem onClick={() => {cambiarValor(arr); setAnchorEl(null)}}> { arr } </MenuItem>)}
            </Menu>
            <Grid item onClick={() => elegirFechaSiguiente(valor)} sx={{cursor: 'pointer'}}>
                <KeyboardArrowRightIcon/>
            </Grid>
        </Grid>
    )
}