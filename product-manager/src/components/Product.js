import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';

class Product extends React.Component {

    constructor(props) {
        super(props)

        /* ---------------
        Declaration of the variables that I'll use to connect my 
        TextField with my 'data' array inside the functions
        --------------- */

        this.state = {
            ProductState: null,
            name: null,
            type: null,
            price: null,
            rating: null,
            warranty_years: null,
            available: null,
            idUpdate: null,
            nameUpdate: null,
            typeUpdate: null,
            priceUpdate: null,
            ratingUpdate: null,
            warranty_yearsUpdate: null,
            availableUpdate: null,
            idDel: null
        }
    }

    /* ---------------
    componentDidMount() -> Get all Products inside yout Database's Table
    --------------- */

    componentDidMount() {
        axios.get('http://localhost:3001/products')
            .then((data) => {
                console.log(data);
                this.setState({
                    ProductState: data
                }, () => {
                    console.log(this.state.ProductState)
                })
            }).catch((err) => {
                console.log(err);
            })
    }

    /* ---------------
    postData() -> Create Product with informations given in the 'data' variable
    --------------- */

    postData = () => {

        const data = {
            "name": this.state.name,
            "type": this.state.type,
            "price": this.state.price,
            "rating": this.state.rating,
            "warranty_years": this.state.warranty_years,
            "available": this.state.available
        }

        axios.post('http://localhost:3001/products', data)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })

        this.refreshPage()

    }

    /* ---------------
    updateData() -> Update Product with informations given in the 'data' variable
    --------------- */

    updateData = () => {

        const id = this.state.idUpdate

        const data = {
            "name": this.state.nameUpdate,
            "type": this.state.typeUpdate,
            "price": this.state.priceUpdate,
            "rating": this.state.ratingUpdate,
            "warranty_years": this.state.warranty_yearsUpdate,
            "available": this.state.availableUpdate
        }

        const url = "http://localhost:3001/products/" + id;

        axios.patch(url, data)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })

            this.refreshPage()

    }

    /* ---------------
    delData() -> Delete Product with the 'id' given in the TextField
    --------------- */

    delData = () => {

        const id = this.state.idDel;
        const url = "http://localhost:3001/products/" + id;

        axios.delete(url)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })

        this.refreshPage()

    }

    /* ---------------
    refreshPage() -> Reload page automaticaly, to update data inside
    the Product's Board at the top of the page  
    --------------- */

    refreshPage = () => {
        window.location.reload(false);
    }

    /* ---------------
    handleTextFieldChange() -> The missing piece of my Project ^^
    Pretty impressive function that take the "name" of the "TextField"
    to change value of the "state variable" that has the same name 
    --------------- */

    handleTextFieldChange = (event) => {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // ----- View -----

    render() {
        return (
            <div>
                <h1>Products Page</h1>
                <p>Welcome to our Products page</p>
                <h3>Create Product</h3>
                <form>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        placeholder="Enter Name"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Type"
                        name="type"
                        variant="outlined"
                        placeholder="Enter Type"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Rating"
                        name="rating"
                        variant="outlined"
                        placeholder="Enter Rating"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Price"
                        name="price"
                        variant="outlined"
                        placeholder="Enter Price"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Warranty Years"
                        name="warranty_years"
                        variant="outlined"
                        placeholder="Enter Warranty Years"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Available"
                        name="available"
                        variant="outlined"
                        placeholder="True or False"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                </form>
                <div>
                    <button onClick={this.postData}>Sumit</button>
                </div>
                <div>
                <h3>Update Product</h3>
                <form>
                <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Id"
                        name="idUpdate"
                        variant="outlined"
                        placeholder="Enter Id"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Name"
                        name="nameUpdate"
                        variant="outlined"
                        placeholder="Enter Name"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Type"
                        name="typeUpdate"
                        variant="outlined"
                        placeholder="Enter Type"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Rating"
                        name="ratingUpdate"
                        variant="outlined"
                        placeholder="Enter Rating"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Price"
                        name="priceUpdate"
                        variant="outlined"
                        placeholder="Enter Price"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Warranty Years"
                        name="warranty_yearsUpdate"
                        variant="outlined"
                        placeholder="Enter Warranty Years"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Available"
                        name="availableUpdate"
                        variant="outlined"
                        placeholder="True or False"
                        onChange={this.handleTextFieldChange}
                    />
                    </div>
                </form>
                    <button onClick={this.updateData}>Update</button>
                    </div>
                    <div>
                    <h3>Delete Product</h3>
                        <form>
                            <div style={{marginBottom: '15px'}}>
                            <TextField
                                label="Id"
                                name="idDel"
                                variant="outlined"
                                placeholder="Enter Id"
                                onChange={this.handleTextFieldChange}
                            />
                            </div>
                        </form>
                        <div style={{marginBottom: '50px'}}>
                            <button onClick={this.delData}>Delete</button>
                        </div>
                </div>
            </div>
        )
    }

}
export default Product;