import { collection, doc, setDoc } from "firebase/firestore/lite";
import { AppDispatch, RootState } from "../store"
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helper";


export const startNewNote = () => {

    return async (dispatch: AppDispatch, getState: () => RootState) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth;        
        
        const newNote: INewNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        
        const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes`) );

        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote(newNote as INote) )
        dispatch( setActiveNote(newNote as INote) )
    }
};

export const startLoadingNotes = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        const { uid } = getState().auth; 
        if(!uid) throw new Error('El UID del usuario no existe.');
        
        const notes = await loadNotes(uid);
        
        dispatch( setNotes(notes) )
    }
};