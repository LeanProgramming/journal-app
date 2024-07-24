import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INote } from '../../types';

export interface JournalState {
	isSaving: boolean;
	messageSaved: string;
	notes: INote[];
	active: INote | null;
}

const initialState: JournalState = {
	isSaving: false,
	messageSaved: '',
	notes: [],
	active: null,
};

export const journalSlice = createSlice({
	name: 'journal',
	initialState,
	reducers: {
		savingNewNote: state => {
			state.isSaving = true;
		},
		addNewEmptyNote: (state, action: PayloadAction<INote>) => {
			state.notes.push(action.payload);
			state.isSaving = false;
		},
		setActiveNote: (state, action: PayloadAction<INote>) => {
			state.active = action.payload;
			state.messageSaved = '';
		},
		setNotes: (state, action: PayloadAction<INote[]>) => {
			state.notes = action.payload;
		},
		setSaving: state => {
			state.isSaving = true;
			state.messageSaved = '';
		},
		updateNote: (state, action: PayloadAction<INote>) => {
			state.isSaving = false;
			state.notes = state.notes.map(note => {
				if (note.id == action.payload.id) {
					return action.payload;
				}
				return note;
			});
			state.messageSaved = `${action.payload.title}, actualizada correctamente.`;
		},
		setPhotosToActiveNote: (state, action: PayloadAction<any>) => {
			if (!state.active!.imageURLs) {
				state.active!.imageURLs = [];
			}
			state.active!.imageURLs = [...state.active!.imageURLs, ...action.payload];
			state.isSaving = false;
		},
		clearNotesLogout: state => {
			state.isSaving = false;
			state.messageSaved = '';
			state.notes = [];
			state.active = null;
		},
		deleteNoteById: (state, action: PayloadAction<string>) => {
			state.isSaving = false;
			state.active = null;
			state.notes = state.notes.filter(note => note.id !== action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addNewEmptyNote,
	clearNotesLogout,
	deleteNoteById,
	savingNewNote,
	setActiveNote,
	setNotes,
	setPhotosToActiveNote,
	setSaving,
	updateNote,
} = journalSlice.actions;
