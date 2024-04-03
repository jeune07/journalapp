import {createSlice} from "@reduxjs/toolkit"


export const journalSlice =  createSlice({
    name: "journal",
    initialState:{
        isSaving: false,
        messageSaved:"",
        notes:[],
        activeNote:null,
        
    },
    reducers:{

        

        savingNewNote: (state)=> {
            state.isSaving =true
        },

        addNewEmptyNote: (state, action)=> {
            state.notes.push(action.payload);
            state.isSaving=  false

        },
        setActiveNote: (state, action)=> {
            state.activeNote  = action.payload;

        },
        setNotes: (state, action)=> {

        },
        setSaving: (state)=> {

        },
        updateNote: (state, action)=> {

        },
        deleteById: (state, action)=> {

        },
    }
})

export const {deleteById,updateNote,setSaving,setNotes,setActiveNote,addNewEmptyNote,savingNewNote} = journalSlice.actions;