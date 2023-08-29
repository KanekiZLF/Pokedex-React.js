import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import '../../styles/Pokemon.css';

export default function PokemonCard({ name, image, types }) {

    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <div className="thumbnailContainer">
                    <div className='imageContainer'>
                        <CardMedia className='imageContainer'
                            component="img"
                            height="120"
                            image={image}
                            alt={name}
                        />
                    </div>
                </div>
                <CardContent className='pokemonName'>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" align="center">
                        {typeHandler()}
                    </Typography>

                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions> */}
        </Card>
    );
}