import {collection, doc, setDoc} from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote,savingNewNote} from "./journalSlice";


export const startNewNote =()=> {

    return async(dispatch,getState)=> {
     const  {uid} = getState().auth;       

     const newNote = {
            title:"",
            body:"",
            date: new Date().getTime()
        };

        const newDoc =doc(collection(FirebaseDB,`${uid}/journal/notes`));
        const  setDocResp = await setDoc(newDoc,newNote);
        //console.log({newDoc, setDocResp})
        newNote.id = newDoc.id;     

        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
        dispatch(savingNewNote())
        
        

    }

    
}