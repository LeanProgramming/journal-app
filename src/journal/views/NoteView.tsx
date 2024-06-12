import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
    return (
        <Grid container display="row" justifyContent="space-between" sx={{ mb: 1 }}>

            <Grid item>
                <Typography fontSize={39} fontWeight="light">12 de junio, 2024</Typography>
            </Grid>

            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿En qué piensas hoy?"
                    minRows={ 5 }
                />

            </Grid>

            {/* Image gallery */}
            <ImageGallery />
        </Grid>
    )
}