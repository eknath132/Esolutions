import React from 'react';
import MuiPopover  from "@mui/material/Popover"
import MuiButton  from "@mui/material/Button"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Flecha = styled('div')(() => ({
    position: 'absolute',
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderRight: `8px solid #fff`,
    top: 'calc(5% - 8px)',
    left: -8,
}));

const CustomPopover = styled(MuiPopover)(() => ({
    '.MuiPaper-root': {
        overflow: 'visible',
    },
}));

interface IPopover {
    paso: string;
    titulo: string;
    descripcion: string;
    videoDescripcion: string;
    video?: any
}

export const Popover: React.FC<IPopover> = ({ paso, titulo, descripcion, videoDescripcion }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const abrirPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const cerrarPopover = () => {
        setAnchorEl(null);
    };

    const abrir = Boolean(anchorEl);
    const id = abrir ? 'popover' : undefined;

    return (
        <>
            <MuiButton aria-describedby={id} variant="contained" onClick={abrirPopover}>
                Open Popover
            </MuiButton>
            <CustomPopover
                id={id}
                open={abrir}
                anchorEl={anchorEl}
                onClose={cerrarPopover}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Flecha />
                <Grid container py={3} px={4} sx={{width: '284px'}} rowSpacing={3}>
                    <Grid item>
                        <Typography sx={{fontWeight: '300px', fontSize: '12px', lineHeight: '18px', letterSpacing: '0.25px', color: '#0072CE'}}>
                            {paso}
                        </Typography>
                    </Grid>
                    <Grid item container direction={'column'}>
                        <Typography sx={{fontWeight: '800', fontSize:'16px', lineHeight:'22px'}}>
                            {titulo}
                        </Typography>
                        <Typography sx={{fontWeight: '400', fontSize:'12px', lineHeight:'14.4px'}}>
                            {descripcion}
                        </Typography>
                        <Grid item>
                            <Button variant='text' sx={{padding: 0, textTransform:'none'}}>
                                Conoce más
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item sx={{width: '100%', height: '200px'}}>
                        <Grid item sx={{width: '100%', height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', border:'1px solid #000', borderRadius: '8px'}}>
                            Video
                        </Grid>
                        <Typography mt={1} sx={{fontSize: '10px', lineHeight:'15px', letterSpacing: '.25px', textAlign:'center', color: '#0000008A'}}>
                            {videoDescripcion}
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent={'end'} columnSpacing={1}>
                        <Grid item>
                            <Button variant='outlined' sx={{ borderRadius: '100px', textTransform:'none', color: '#7A8FA7', borderColor:'#7A8FA7', '&:hover': {backgroundColor: 'inherit'},}}>
                                Atras
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' sx={{ borderRadius: '100px', textTransform:'none'}}>
                                Siguiente
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CustomPopover>
        </>
    )
}