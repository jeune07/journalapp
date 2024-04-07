import {collection, doc, setDoc} from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote,savingNewNote, setNotes, setSaving, updateNote} from "./journalSlice";
import { loadNotes } from "../../helpers/loadNote";


export const startNewNote =()=> {

    return async(dispatch,getState)=> {
        dispatch(savingNewNote())
        

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
      
        

    }

    
}


// export const startNewLoadingNotes =()=> {

//     return async(dispatch,getState)=> {

//         const  {uid} = getState().auth; 
//         if(! uid) throw new Error("The UId does not exist");
//         const notes= await  loadNotes(uid)

//         dispatch(setNotes("this the note without the id", notes))
        
//     }    

// }

export const startNewLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth; 
        if (!uid) throw new Error("The UId does not exist");
        
        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));
    }
}





export const startSaveNote =()=> {

    return async (dispatch,getState)=> {
        dispatch(setSaving())
        const  {uid} = getState().auth;
       const {activeNote: notes} = getState().journal
       const noteToFireStore = {...notes}
       delete noteToFireStore.id

       const docRef = doc(FirebaseDB,`${uid}/journal/notes/ ${notes.id}`)
       await  setDoc(docRef,noteToFireStore,{merge:true})

       dispatch(updateNote(notes))
    }
    
}