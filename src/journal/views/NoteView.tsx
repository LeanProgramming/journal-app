import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect, useMemo } from 'react';
import { setActiveNote, startSaveNote } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
	const {
		active: note,
		messageSaved,
		isSaving,
	} = useAppSelector(state => state.journal);
	const dispatch = useAppDispatch();

	const { date, body, title, onInputChange, formState } = useForm(note);

	const dateString = useMemo(() => {
		const newDate = new Date(date);

		return newDate.toLocaleString('es-ES', {
			year: 'numeric',
			day: 'numeric',
			month: 'long',
		});
	}, [date]);

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (messageSaved.length > 0) {
			Swal.fire('Nota actualizada', messageSaved, 'success');
		}
	}, [messageSaved]);

	const onSaveNote = () => {
		dispatch(startSaveNote());
	};

	return (
		<Grid
			container
			display='row'
			justifyContent='space-between'
			sx={{ mb: 1 }}
			className='animate__animated animate__fadeIn animate__faster'
		>
			<Grid item>
				<Typography fontSize={39} fontWeight='light'>
					{dateString}
				</Typography>
			</Grid>

			<Grid item>
				<input type='file' multiple />

				<Button
					disabled={isSaving}
					color='primary'
					sx={{ padding: 2 }}
					onClick={onSaveNote}
				>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='Ingrese un título'
					label='Título'
					sx={{ border: 'none', mb: 1 }}
					name='title'
					value={title}
					onChange={onInputChange}
				/>

				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder='¿En qué piensas hoy?'
					minRows={5}
					name='body'
					value={body}
					onChange={onInputChange}
				/>
			</Grid>

			{/* Image gallery */}
			<ImageGallery />
		</Grid>
	);
};
