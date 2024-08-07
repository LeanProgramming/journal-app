import {
	DeleteOutline,
	SaveOutlined,
	UploadOutlined,
} from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../store';
import { ChangeEvent, useEffect, useMemo, useRef } from 'react';
import {
	setActiveNote,
	startDeletingNote,
	startSaveNote,
	startUploadingFiles,
} from '../../store/journal';
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

	const fileInputRef = useRef<HTMLInputElement>(null);

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

	const onFileInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		if (target.files?.length === 0) return;

		dispatch(startUploadingFiles(target.files as FileList));
	};

	const onDelete = () => {
		dispatch(startDeletingNote());
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
				<input
					type='file'
					multiple
					ref={fileInputRef}
					onChange={onFileInputChange}
					style={{ display: 'none' }}
				/>

				<IconButton
					color='primary'
					disabled={isSaving}
					onClick={() => fileInputRef.current!.click()}
				>
					<UploadOutlined />
				</IconButton>

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

			<Grid container justifyContent='end'>
				<Button
					onClick={onDelete}
					sx={{ mt: 2 }}
					color='error'
					disabled={isSaving}
				>
					<DeleteOutline />
					Borrar
				</Button>
			</Grid>
			{note && note.imageURLs && <ImageGallery images={note.imageURLs} />}
		</Grid>
	);
};
