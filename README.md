# LesBonsArtisans

Bonjour ! Vous pouvez trouvez dans ce repo, ma première **API** en *Node.js* utilisant *Express* et *MongoDB* ainsi que ma première page en *React.js* utilisant *Material-UI*

Vous pouvez retrouver des images de l'application web dans le dossier `./app_pictures`, j'éspère que vous les trouverez à votre goût ^^

## API

### Model

=> You can find the structure of the Product's Table inside the `REST_API/models/product.js`.

  ```js
  const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    warranty_years: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
});
```

### Routes

#### Getting All Products

```js
router.get('/', async(req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
```
=> When the **get** method is called on the url `http://localhost:3001/products`, return every **Product** inside your *Database*

### Getting one Product by Id

```js
router.get('/:id', getProduct, (req, res) => {
    res.json(res.product)
});
```
=> When the **get** method is called on the url `http://localhost:3001/products/{id}`, return the **Product** that has the same `{id}`

### Creating one Product

```js
router.post('/', async(req, res) => {
    const product = new Product({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        warranty_years: req.body.warranty_years,
        available: req.body.available
    });

    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});
```
=> When the **post** method is called on the url `http://localhost:3001/products`, create a **Product** with the informations inside the *request*

### Updating one Product

```js
router.patch('/:id', getProduct, async(req, res) => {
    if (req.body.name != null) {
        res.product.name = req.body.name
    }
    if (req.body.type != null) {
        res.product.type = req.body.type
    }
    if (req.body.price != null) {
        res.product.price = req.body.price
    }
    if (req.body.rating != null) {
        res.product.rating = req.body.rating
    }
    if (req.body.warranty_years != null) {
        res.product.warranty_years = req.body.warranty_years
    }
    if (req.body.available != null) {
        res.product.available = req.body.available
    }
    try {
        const updatedProduct = await res.product.save()
        res.json(updatedProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});
```
=> When the **patch** method is called on the url `http://localhost:3001/products/{id}`, update the **Product** that has the same `{id}`, only if new informations are inside the *request*

### Deleting one Product

```js
router.delete('/:id', getProduct, async(req, res) => {
    try {
        await res.product.remove()
        res.json({ message: 'Deleted Subscriber' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});
```
=> When the **delete** method is called on the url `http://localhost:3001/products/{id}`, delete the **Product** that has the same `{id}`
