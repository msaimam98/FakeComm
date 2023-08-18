import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../assets/data/items.json'
import {Row, Col, Container} from 'react-bootstrap'
import Card from '../../components/Card/Card'
import { useContext } from 'react'
import AuthContext from '../../context/context'
import { useState, useEffect} from 'react'


const ProductsPage = () => {

  const [data, setData] = useState([])
  const {setAllProducts} = useContext(AuthContext)

  
  const fetchData = () => {
    fetch("https://ypyxvyh1x4.execute-api.us-east-2.amazonaws.com/prod/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setData(data)
        setAllProducts(data)

        
      })
      .catch((error) => console.error(error));

  }
  
  useEffect(() => {
    fetchData()

  }, []);


  return (
    <Container>
      <h1>Products</h1>
      <Row xs={1} md={2} lg={3} className="d-flex justify-content-between h-100 g-3">
        {data.map(item => (
          <Col key={item.id}> <Card {...item} /> </Col>
        ))}
      </Row>

    </Container>
  )
}

export default ProductsPage
{/* <Card {...item} />  */}
