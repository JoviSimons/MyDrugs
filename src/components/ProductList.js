import { Link } from 'react-router-dom';
import {Card, CardContent, CardActionArea, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProductList = ({ onAdd, products}) => {
  return (
    <div>
    <Container>
    <Row>
      {products.map(product => (
        <Col md={3}>
        <div key={product.id} >
            <Link style={{ textDecoration: 'none' }} to={`/product/details`}>
                <Card sx={{ }}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        { product.name }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        { product.description }
                        </Typography>
                        <Button onClick={() => onAdd(product)} variant="text">Add to cart</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
            </div>
        </Col>
      ))}
    </Row>
    </Container>
    </div>
  );
}
 
export default ProductList;