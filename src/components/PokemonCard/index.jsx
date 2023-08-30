import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import '../../styles/Pokemon.css';


export default function PokemonCard({ name, image, types }) {

    const typeHandler = () => {
        let typeName;
        let typeName1;

        switch (types[0].type.name) {
            default:
                typeName = "Erro";
                break;

            case "bug":
                typeName = "Terrestre";
                break;

            case "grass":
                typeName = "Grama";
                break;

            case "poison":
                typeName = "Veneno";
                break;

            case "fire":
                typeName = "Fogo";
                break;

            case "water":
                typeName = "Água";
                break;

            case "normal":
                typeName = "Normal";
                break;

            case "flying":
                typeName = "Voador";
                break;

            case "electric":
                typeName = "Elétrico";
                break;

            case "ground":
                typeName = "Terrestre";
                break;

            case "fairy":
                typeName = "Fada";
                break;
        }


        if (types[1]) {
            switch (types[1].type.name) {
                default:
                    typeName = "Erro";
                    break;

                case "bug":
                    typeName1 = "Inseto";

                    break;

                case "grass":
                    typeName1 = "Grama";
                    break;

                case "poison":
                    typeName1 = "Veneno";
                    break;

                case "fire":
                    typeName1 = "Fogo";
                    break;

                case "water":
                    typeName1 = "Água";
                    break;

                case "normal":
                    typeName1 = "Normal";
                    break;

                case "flying":
                    typeName1 = "Voador";
                    break;

                case "electric":
                    typeName1 = "Elétrico";
                    break;

                case "ground":
                    typeName1 = "Terrestre";
                    break;

                case "fairy":
                    typeName1 = "Fada";
                    break;
            }
        }

        //console.log(types[0].type.name)

        if (types[1]) {
            return typeName + " | " + typeName1;
        }
        return typeName;
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