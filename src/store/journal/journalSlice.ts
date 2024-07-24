import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface JournalState {
	isSaving: boolean;
	messageSaved: string;
	notes: INote[];
	active?: INote;
}

const initialState: JournalState = {
	isSaving: false,
	messageSaved: '',
	notes: [],
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
		deleteNoteById: (state, action: PayloadAction<any>) => {},
	},
});

// Action creators are generated for each case reducer function
export const {
	savingNewNote,
	addNewEmptyNote,
	setActiveNote,
	setNotes,
	setSaving,
	updateNote,
	deleteNoteById,
} = journalSlice.actions;
