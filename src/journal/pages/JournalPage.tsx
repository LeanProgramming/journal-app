import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../store';
import { startNewNote } from '../../store/journal';

export const JournalPage = () => {
	const dispatch = useAppDispatch();
	const { isSaving, active } = useAppSelector(state => state.journal);

	const onClickNewNote = () => {
		dispatch(startNewNote());
	};

	return (
		<JournalLayout>
			{active ? <NoteView /> : <NothingSelectedView />}

			<IconButton
				size='large'
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}
				disabled={isSaving}
				onClick={onClickNewNote}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
