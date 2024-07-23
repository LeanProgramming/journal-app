import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface JournalState {
    isSaving: boolean;
    messageSaved: string;
    notes: INote[],
    active?: INote
}

const initialState: JournalState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote: (state) =>{
        state.isSaving = true;
    },
    addNewEmptyNote: (state, action: PayloadAction<INote>) => {
        state.notes.push(action.payload);
        state.isSaving = false;
    },
    setActiveNote: (state, action: PayloadAction<INote>) => {
        state.active = action.payload;
    },
    setNotes: (state, action: PayloadAction<INote[]>) => {
        state.notes = action.payload;
    },
    setSaving: (state, action: PayloadAction<any>) => {

    },
    updateNote: (state, action: PayloadAction<any>) => {

    },
    deleteNoteById: (state, action: PayloadAction<any>) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving,updateNote, deleteNoteById } = journalSlice.actions;