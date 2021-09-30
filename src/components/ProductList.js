import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProductList = ({ products }) => {
  return (
    <div>
    <Container>
    <Row>
      {products.map(product => (
        <Col md={4}>
        <div key={product.id} >
            <Link to={`/product/details`}>
                <Card sx={{ }}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        { product.name }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        { product.description }
                        </Typography>
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