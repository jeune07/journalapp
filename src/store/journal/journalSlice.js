import {createSlice} from "@reduxjs/toolkit"


export const journalSlice =  createSlice({
    name: "journal",
    initialState:{
        isSaving: true,
        messageSaved:"",
        notes:[],
        activeNote:null,
        
    },
    reducers:{
        addNewEmptyNote: (state, action)=> {

        },
        setActiveNote: (state, action)=> {

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

export const {deleteById,updateNote,setSaving,setNotes,setActiveNote,addNewEmptyNote} = journalSlice.actions;