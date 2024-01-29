import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import '../../styles/Pokemon.css';
import '../../styles/Modal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function PokemonCard({ name, image, types }) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const getTypeImage = (type) => {
        const imagePath = `${process.env.PUBLIC_URL}/assets/icons/${type}.png`;

        // Defina os textos específicos para cada tipo com base em pokeTypeInfo
        let spanText;
        switch (type) {
            default:
                spanText = type;
                break;

            case "bug":
                spanText = "Inseto";
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

            case "ice":
                spanText = "Gelo";
                break;

            case "steel":
                spanText = "Aço";
                break;

            case "ghost":
                spanText = "Fantasma";
                break;

            case "rock":
                spanText = "Pedra";
                break;

            case "fighting":
                spanText = "Lutador";
                break;

            case "psychic":
                spanText = "Psiquico";
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
            <div className='modalContainer'>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    className="modalPokemon"
                    overlayClassName="modalOverlay"
                    contentLabel="Modal Pokemon"
                >
                    <div className='modalContainerPokeImg'>
                        <div className='containerPokeInfo'>
                            <div className='namePoke'>
                                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{name}</h2>
                                <CardMedia
                                    component="img"
                                    height="120"
                                    image={image}
                                    alt={name}
                                    classes={{ root: 'cardPoke' }}
                                />
                            </div>
                        </div>
                    </div>
                    <p>
                        Ainda estou trabalhando nisso !
                    </p>
                    <div className='buttonContainer'>
                        <button className='modalButton' onClick={closeModal}>Fechar</button>
                    </div>
                </Modal>
            </div>
            <CardActionArea onClick={openModal}>
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