import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo } from 'react';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startSaveNote } from '../../store/journal/thunks';




//import { startSaveNote } from '../../store/journal/thunks';



export const NoteView = () => {
   // const MySwal = withReactContent(Swal)

    const dispatch  = useDispatch()
    const {activeNote: note,messageSaved} = useSelector(state =>state.journal)
    const {title, date, body, imagesURLs, id, onInputChange,formState} = useForm(note)
    const dateString = date ? new Date(date).toLocaleDateString() : '';
    const  {isSaving, activeNote} =useSelector(state  => state.journal)


    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    // useEffect(() => {     

    //     if (messageSaved && messageSaved.length > 0) {
    //         Swal.fire("Note actualized", messageSaved, "success"); 
    //     }
    //     Swal.fire("Note actualized", messageSaved, "success");

    // //     MySwal.fire({
    // //         title: <p>Hello World</p>,
    // //         didOpen: () => {
    // //           // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    // //           MySwal.showLoading()
    // //         },
    // //       }).then(() => {
    // //         MySwal.fire(<p>Shorthand works too</p>)
    // //       })
    //  }, [messageSaved])

    const onSaveNote = ()=> {
        dispatch(startSaveNote())
    }
    
    
    const onFileInputChange=({target}) => {
        if(target.file ===0) return
        //dispatch(startLoadingFiles(target.files))

    }



  return (
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ mb: 1 }}
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >{dateString}</Typography>
        </Grid>
        <Grid item>

            {/* <input 
            type="file"
            multiple
            ref={fileInputRef}
            onChange={onFileInputChange}
             /> */}

            <IconButton
                color="primary"
                desabled={isSaving}
                style={{display:"none"}}
                onClick={()=> fileInputRef.current.click()}
            >                
                <UploadOutlined/>
            </IconButton>

             
            <Button
             color="primary"
             sx={{ padding: 2 }             
             }
             onClick = {onSaveNote}
             >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
                name="title"
                value={title}
                onChange={onInputChange}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
                name="body"
                value={body}
                onChange={onInputChange}
            />
        </Grid>

        {/* Image gallery */}
        <ImageGallery />

    </Grid>
  )
}
