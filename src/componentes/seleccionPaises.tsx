import { useState } from 'react'
import Grid  from "@mui/material/Grid"
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const paises = [
    {
      nombre: 'Argentina',
      imagen: 'https://flagcdn.com/w320/ar.png'
    },
    {
      nombre: 'Brasil',
      imagen: 'https://flagcdn.com/w320/br.png'
    },
    {
      nombre: 'Chile',
      imagen: 'https://flagcdn.com/w320/cl.png'
    },
    {
      nombre: 'Colombia',
      imagen: 'https://flagcdn.com/w320/co.png'
    },
    {
      nombre: 'El Salvador',
      imagen: 'https://flagcdn.com/w320/sv.png'
    },
    {
      nombre: 'Estados Unidos',
      imagen: 'https://flagcdn.com/w320/us.png'
    },
    {
      nombre: 'Guatemala',
      imagen: 'https://flagcdn.com/w320/gt.png'
    },
    {
      nombre: 'México',
      imagen: 'https://flagcdn.com/w320/mx.png'
    },
    {
      nombre: 'Perú',
      imagen: 'https://flagcdn.com/w320/pe.png'
    },
    {
      nombre: 'Paraguay',
      imagen: 'https://flagcdn.com/w320/py.png'
    }
];
  
export const SeleccionPaises = () => {
    const [paisSeleccionado, setPaisSeleccionado] = useState<string>('')

    return (
        <Grid item container sx={{width:'600px', borderRadius:'8px', border:'1px solid black'}} columnSpacing={1} rowSpacing={1}>
            {paises.map(pais => {
                const estaSeleccionado = paisSeleccionado === pais.nombre
                return (
                    <Grid item xs={4} onClick={() => setPaisSeleccionado(pais.nombre)}>
                        <Grid item container px={1} justifyContent={'space-between'} alignItems={'center'} sx={estaSeleccionado ? {boxShadow: '0 0 0 1px #48CFB2', borderRadius:'4px', background:'#EDFAF7', cursor:'pointer'}: {cursor:'pointer'}}>
                            <Grid item>
                                <Grid item container alignItems={'center'} columnSpacing={1}>
                                    <Grid item> <img src={pais.imagen ?? ''} width={'22'} height={'16'}/> </Grid>
                                    <Grid item>
                                        <Typography sx={{fontWeight: '400', fontSize:'12px', lineHeight:'14.4px', color:'#232628'}}>
                                            {pais.nombre} 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {estaSeleccionado &&
                                <Grid item sx={{display:'flex'}}> 
                                    <CheckCircleOutlineIcon fontSize='small' sx={{ color: '#48CFB2' }}/>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                ) 
            }
            )}
        </Grid>
    )
}