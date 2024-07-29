import { Popover } from './componentes/popover';
import { SeleccionPaises } from './componentes/seleccionPaises';
import { Container, Grid } from '@mui/material';
import { DatePickerComponent } from './componentes/DatePicker.tsx';

function App() {
    return (
        <Container >
            <Grid container p={5} rowSpacing={8}>
                <Grid item xs={6}>
                    <Grid item>
                        <Popover 
                            paso={'Paso 1 de 5'}
                            titulo={'Conoce OneExperience'}
                            descripcion={'Comienza con el recorrido de nuestra nueva plataforma dinámica'}
                            videoDescripcion={'Texto descriptivo'}
                        />
                    </Grid> 
                </Grid>
                <Grid item xs={6}>
                    <SeleccionPaises/>
                </Grid>
                <Grid item xs={12}>
                    <Grid item sx={{width:'360px'}}>
                        <DatePickerComponent/>
                    </Grid>

                </Grid>
            </Grid>
      </Container>
  );
}

export default App;
