import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {Card, CardContent, CardActionArea, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const localUrl = "http://localhost:9000/MyDrugs/"


const DrugsList = (props) => {

    const {drugType, onAdd} = props
    const [drugs, setDrugs] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchDrugs(drugType.id)
    }, [])

    const fetchDrugs = (id) => 
    axios.get(localUrl+"products/category/"+id)
    .then((response) =>{
      setDrugs(response.data)
      console.log(response.data)
    })
    .catch((error) =>{
        setError(error.response.status)
        console.log(error.response)
    })

    return(
        <div>
        <Container>
            <Row>
            {error && error === 404 && <div>No products found for {drugType.name}</div>}
            {drugs && drugs.map(drug => (
                <Col md={3}>
                    <div title='card' key={drug.id} >
                        <Link style={{ textDecoration: 'none' }} to={`/product/details`}>
                            <Card sx={{ }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            { drug.name }
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            { drug.description }
                                        </Typography>
                                            <Button onClick={() => onAdd(drug)} variant="text">Add to cart</Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </div>
                </Col>
                ))
            }
            </Row>
        </Container>
        </div>
    )
}

export default DrugsList