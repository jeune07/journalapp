import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import {Grid, ListItem,ListItemButton,ListItemIcon,ListItemText} from "@mui/material";
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal/journalSlice';

const SideBarItem = ({ title ="", date, body, imagesURLs =[],id}) => {
    const newTitle = useMemo( () => {

        return  title.length > 17
        ? title.substring(0,17) + "..."
        : title
    },[title])

    const dispatch =useDispatch()
    const onClickActiveNote = () => {
        dispatch(setActiveNote({ title, date, body, imagesURLs, id }))
      }

  return (    
    <>
    <ListItem  disablePadding>
    <ListItemButton onClick={onClickActiveNote}>
        <ListItemIcon>
            <TurnedInNot />
        </ListItemIcon>
        <Grid container>
            <ListItemText primary={ newTitle} />
            <ListItemText secondary={ body} />
        </Grid>
    </ListItemButton>
</ListItem>
</>
  )
}

export default SideBarItem