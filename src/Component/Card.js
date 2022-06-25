import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function MediaCard() {
    const [itemCount, setItemCount] = React.useState(1);

  return (
    <Card sx={{ 
        height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
    }}>
      <CardMedia
        component="img"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fruit
        </Typography>
      </CardContent>
      <CardActions>
      <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
