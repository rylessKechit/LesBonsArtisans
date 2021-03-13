// Import Packages

import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import axios from 'axios'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './App.css';

// Style calls for our view

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

// Product Board and Search Bar

function App() {

  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("")

  const getProductData = async () => {
    try {
      const data = await axios.get('http://localhost:3001/products')
      console.log(data.data);
      setProduct(data.data);
    }
    catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getProductData()
  },[])

  // ----- 

  return (
    <div className="App">
      <h1>Products Page</h1>
      <div style={{marginBottom: '15px'}}>
        <input
          type="text"
          placeholder="Search here"
          onChange={e => {
            setSearch(e.target.value)
          }}
        />
      </div>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Id</StyledTableCell>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell>Product Type</StyledTableCell>
            <StyledTableCell>Product Price</StyledTableCell>
            <StyledTableCell>Product Rating</StyledTableCell>
            <StyledTableCell>Product Warranty Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.filter((item) => {
            if (search === "") {
              return item;
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })
          .map((item) => {
            return (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                {item._id}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell>
                {item.type}
              </StyledTableCell>
              <StyledTableCell>
                {item.price}
              </StyledTableCell>
              <StyledTableCell>
                {item.rating}
              </StyledTableCell>
              <StyledTableCell>
                {item.warranty_years}
              </StyledTableCell>
            </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>

    <Product />
    
    </div>
  );
}

export default App;
