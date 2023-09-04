import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import '../../styles/Pokemon.css';

export default function PokemonCard({ name, image, types }) {

    const getTypeImage = (type) => {
        const imagePath = `${process.env.PUBLIC_URL}/assets/icons/${type}.png`;

        // Defina os textos específicos para cada tipo com base em pokeTypeInfo
        let spanText;
        switch (type) {
            default:
                spanText = "Erro";
                break;

            case "bug":
                spanText = "Terrestre";
                break;

            case "grass":
                spanText = "Grama";
                break;

            case "poison":
                spanText = "Veneno";
                break;

            case "fire":
                spanText = "Fogo";
                break;

            case "water":
                spanText = "Água";
                break;

            case "normal":
                spanText = "Normal";
                break;

            case "flying":
                spanText = "Voador";
                break;

            case "electric":
                spanText = "Elétrico";
                break;

            case "ground":
                spanText = "Terrestre";
                break;

            case "fairy":
                spanText = "Fada";
                break;
        }

        return (
            <div className={`pokeTypeBg pokeTypeInfo ${type}`}>
                <img src={imagePath} alt={type} />
                <span className="pokeTypeText">{spanText}</span>
            </div>
        );
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
                    <Box>
                        <Typography gutterBottom variant="h5" component="div" align="center">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" align="center">
                            <div className="pokeType">
                                {types.map((type) => (
                                    <div key={type.type.name} className={`pokeTypeBg ${type.type.name}`}>
                                        {getTypeImage(type.type.name)}
                                    </div>
                                ))}
                            </div>
                        </Typography>
                    </Box>
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