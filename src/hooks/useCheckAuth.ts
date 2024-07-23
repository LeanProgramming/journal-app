import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
    const { status } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
  
      onAuthStateChanged( FirebaseAuth, async ( user) => {
        if(!user) return dispatch(logout({errorMessage: ''}));
  
        const { uid, email, displayName, photoURL } = user;
  
        dispatch( login({ uid, email, displayName, photoURL } ) );
        dispatch(startLoadingNotes());
        
      } );
    }, [])

    return {
        status,
    }
}
