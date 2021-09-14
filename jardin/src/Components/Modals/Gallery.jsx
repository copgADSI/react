import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import pedagogia from "../../Images/pedagogia.jpg";
import Alimentacion from "../../Images/Alimentacion.jpg";
import cuidado from "../../Images/cuidado.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

const images = [
    {
      id: 1,
      url: pedagogia,
      title: "Pegagogía Infantil",
      featured: true,
    },
    {
      id: 2,
      url: Alimentacion,
      title: "Alimentación Infatil",
      featured: true,
    },
    {
      id:3,
      url:cuidado,
      title:"Cuidado de niños",
      featured:true,
    }
  ];

export default function GallerryP() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={200} gap={1} className={classes.imageList}>
        {images.map((item) => (
          <ImageListItem key={item.url} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>
            <img src={item.url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              position="top"
              actionIcon={
                <IconButton aria-label={`star ${item.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
