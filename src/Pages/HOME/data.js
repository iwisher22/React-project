import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PreviewIcon from '@mui/icons-material/Preview';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import {Route } from 'react-router-dom';

 export const datas=[
{
    id:1,
    title: "Add a Book",
    description: "Add your Book page and information",
    icon:  <AddAPhotoIcon />,
    route: "/add-book"
},
{
    id:2,
    title: "View a Book",
    description: "View your Book page and information",
    icon:  <PreviewIcon />,
    route: "/view-book"
},
{
    id:3,
    title: "Search a Book",
    description: "Search your Book page and information",
    icon:  <SavedSearchIcon />
}
];