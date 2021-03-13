import React/*, { useState }*/ from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';

class Product extends React.Component {

    constructor(props) {
        super(props)

        /* ---------------
        Declaration of the variables that i wanted to use to connect my 
        TextField with my 'data' array inside the functions, but it doesnt work ^^
        --------------- */

        this.state = {
            ProductState: '',
            name: '',
            type: '',
            price: '',
            rating: '',
            warranty_years: '',
            available: '',
            idUpdate: '',
            nameUpdate: '',
            typeUpdate: '',
            priceUpdate: '',
            ratingUpdate: '',
            warranty_yearsUpdate: '',
            availableUpdate: '',
            idDel: ''
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
    (Working with manual declaration of data but doesnt work with
    'this.state.*' still dont know why ^^)
    --------------- */

    postData() {

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

    }

    /*onUpdateData() {
        const { nameUpdate, typeUpdate, priceUpdate, ratingUpdate, warranty_yearsUpdate, availableUpdate } = this.state;
    }*/

    /* ---------------
    updateData() -> Update Product with informations given in the 'data' variable
    (Working with manual declaration of data but doesnt work with
    'this.state.*' still dont know why ^^)
    --------------- */

    updateData(id) {

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

    }

    /*onDetData() {
        const { idDel } = this.state;
    }*/

    /* ---------------
    delData() -> Delete Product with the 'id' given in the TextField
    (Working with manual declaration of data but doesnt work with
    'this.state.*' still dont know why ^^)
    --------------- */

    delData() {

        const id = this.state.idDel;
        const url = "http://localhost:3001/products/" + id;

        axios.delete(url)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
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
                        variant="outlined"
                        placeholder="Enter Name"
                        onChangeText={(name) => this.setState({ name })}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Type"
                        variant="outlined"
                        placeholder="Enter Type"
                        onChangeText={(type) => this.setState({ type })}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Rating"
                        variant="outlined"
                        placeholder="Enter Rating"
                        onChangeText={(rating) => this.setState({ rating })}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Price"
                        variant="outlined"
                        placeholder="Enter Price"
                        onChangeText={(price) => this.setState({ price })}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Warranty Years"
                        variant="outlined"
                        placeholder="Enter Warranty Years"
                        onChangeText={(warranty_years) => this.setState({ warranty_years })}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Available"
                        variant="outlined"
                        placeholder="True or False"
                        onChangeText={(available) => this.setState({ available })}
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
                        variant="outlined"
                        placeholder="Enter Id"
                        onChangeText={(idUpdate) => this.setState({ idUpdate })}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        placeholder="Enter Name"
                        onChangeText={(name) => this.setState({ name })}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Type"
                        variant="outlined"
                        placeholder="Enter Type"
                        onChangeText={(type) => this.setState({ type })}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Rating"
                        variant="outlined"
                        placeholder="Enter Rating"
                        onChangeText={(rating) => this.setState({ rating })}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Price"
                        variant="outlined"
                        placeholder="Enter Price"
                        onChangeText={(price) => this.setState({ price })}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Warranty Years"
                        variant="outlined"
                        placeholder="Enter Warranty Years"
                        onChangeText={(warranty_years) => this.setState({ warranty_years })}
                    />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                    <TextField
                        label="Available"
                        variant="outlined"
                        placeholder="True or False"
                        onChangeText={(available) => this.setState({ available })}
                    />
                    </div>
                </form>
                    <button onClick={this.updateData(this.state.idUpdate)}>Update</button>
                    </div>
                    <div>
                    <h3>Delete Product</h3>
                        <form>
                            <div style={{marginBottom: '15px'}}>
                            <TextField
                                label="Id"
                                variant="outlined"
                                placeholder="Enter Id"
                                onChangeText={(idDel) => this.setState({ idDel })}
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