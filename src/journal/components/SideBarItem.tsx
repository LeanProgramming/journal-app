import { TurnedInNot } from '@mui/icons-material';
import {
	Grid,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { useMemo } from 'react';
import { useAppDispatch } from '../../store';
import { setActiveNote } from '../../store/journal';

interface SideBarItemProps {
	note: INote;
}

export const SideBarItem = ({ note }: SideBarItemProps) => {
	const { id, title, body } = note;

	const dispatch = useAppDispatch();

	const newTitle = useMemo(() => {
		return title.length > 17 ? title.substring(0, 17) + '...' : title;
	}, [title]);

	const onClickNote = () => {
		dispatch(setActiveNote(note));
	};

	return (
		<ListItem key={id} disablePadding>
			<ListItemButton onClick={onClickNote}>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<Grid container>
					<ListItemText primary={newTitle} />
					<ListItemText secondary={body} />
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
