const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');

// Define Item schema and model
const itemSchema = new mongoose.Schema({
    name: 
    {
        type:String,
        required: true}
        ,
    price: {
        type:Number,
        required: true}

});
const Item = mongoose.model('Item', itemSchema);

// Define User schema and model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

// Authentication routes
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log('Signup attempt for:', name, email);
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();
        console.log('User created successfully:', name);
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.error('Signup error:', err);
        if (err.code === 11000) { // Duplicate email
            res.status(400).json({ message: "Email already exists" });
        } else {
            res.status(500).json({ message: "Error creating user" });
        }
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login attempt for email:', email);
        
        // Find user by email
        const user = await User.findOne({ email: email });
        console.log('User found:', user ? 'Yes' : 'No');
        
        if (!user) {
            console.log('No user found with email:', email);
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('Password valid:', isPasswordValid);
        
        if (isPasswordValid) {
            console.log('Login successful for user:', user.name);
            res.status(200).json({ 
                message: "Login successful", 
                user: { name: user.name, email: user.email }
            });
        } else {
            console.log('Invalid password for user:', email);
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: "Server error" });
    }
});

// GET all items
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
});

// POST a new item
router.post('/items', async (req, res) => {
    try {
        const newItem = new Item({
            name: req.body.name,
            price: req.body.price
        });
        await newItem.save();
        res.status(201).json({ message: 'Item added', item: newItem });
    } catch (error) {
        res.status(500).json({ message: 'Error adding item', error });
    }
});

// PUT (update) an existing item
router.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            { name: req.body.name, price: req.body.price },
            { new: true }
        );
        if (updatedItem) {
            res.json({ message: 'Item updated', item: updatedItem });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating item', error });
    }
});

// DELETE an item
router.delete('/items/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (deletedItem) {
            res.json({ message: 'Item deleted', item: deletedItem });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
});

module.exports = router;