import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Selector } from './selector';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/es';

const meses = [
  'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
];

const anios = Array.from({ length: 25 }, (_, i) => (2001 + i).toString());

export const DatePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs('2022-04-17'));
    const [mesSeleccionado, setMesSeleccionado] = useState('Ene')
    const [anioSeleccionado, setAnioSeleccionado] = useState('2023')
    const [diaSeleccionado, setDiaSeleccionado] = useState('01')

    useEffect(() => {
        let mes = meses.findIndex(mes => mes === mesSeleccionado)

        if(mes < 0) {
            return;
        }
        setSelectedDate(dayjs(`${anioSeleccionado}-${mes}-${diaSeleccionado}`))
    },[mesSeleccionado, anioSeleccionado, diaSeleccionado])

    const obtenerDia = (date: Dayjs | null) => {
        if (date) {
        setSelectedDate(date);
        setDiaSeleccionado(date.format('DD'));
        }
    };

    const limpiar = () => {
        let fechaActual = dayjs(new Date());

        let diaFormato = fechaActual.format('DD')
        let mesFormato = fechaActual.format('MMM')
        let anioFormato = fechaActual.format('YYYY')
        setDiaSeleccionado(diaFormato)
        setMesSeleccionado(mesFormato)
        setAnioSeleccionado(anioFormato)
        setSelectedDate(fechaActual)
    }
    return (
        <Grid item container px={3} py={2} rowSpacing={2} sx={{border:'1px solid black', borderRadius:'16px'}}>
            <Grid item container justifyContent={'space-between'} >
                <Grid item>
                    <Selector valor={mesSeleccionado} array={meses} cambiarValor={(valor: string) => setMesSeleccionado(valor)} mes/>
                </Grid>
                <Grid item>
                    <Selector valor={anioSeleccionado} array={anios} cambiarValor={(valor: string) => setAnioSeleccionado(valor)} mes/>
                </Grid>
            </Grid>
            <Grid item container>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
                    <DateCalendar value={selectedDate} sx={{ height: 280,'& .MuiPickersCalendarHeader-root': {display:'none'}}} onChange={obtenerDia}/>
                </LocalizationProvider>
            </Grid>
            <Grid item container justifyContent={'space-between'}>
                <Grid item sx={{width:'47px'}}>
                    <Button variant='text' sx={{textTransform: 'none'}} onClick={() => limpiar()}>
                        Limpiar
                    </Button>
                </Grid>
                <Grid item>
                    <Grid item container columnSpacing={1}>
                        <Grid item >
                            <Button variant='text' sx={{width:'47px', textTransform:'none'}}>
                                Cancelar
                            </Button>
                        </Grid>
                        <Grid item >
                            <Button variant='contained' sx={{width:'47px', textTransform:'none'}}>
                                Aplicar
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
};

