const { Router } = require('express')
const router = Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')


// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Invalid email').isEmail(),
        check('password', 'Invalid password').isLength({min: 6})
    ],
    async (req, res) => {
        try {

            const { name, email, password } = req.body

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
            }

            const candidate = await User.findOne({ email: email })

            if (candidate) {
                return res.status(400).json({
                    message: 'user exists'
                })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            
            const user = new User({
                name: name, 
                email: email, 
                password: hashedPassword
            })

            await user.save()

            res.status(200).json({message: 'Successful registration'})
            
        } catch (err) {
            res.status(501).json({message: err.message})
        }
    }
    
)

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Invalid email').isEmail()
    ],
    async (req, res) => {
        try {

            const { email, password } = req.body

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
            }

            const user = await User.findOne({ email: email })

            if (!user) {
                return res.status(400).json({
                    message: 'User does not exist'
                })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch) {
                return res.status(400).json({
                    message: 'Wrong email or password'
                })
            }


            const token = jwt.sign(
                { userId: user.id }, 
                config.get('jwtSecret'),
                { expiresIn: 60 * 60 }
            )

            return res.status(200).json({
                userId: user.id,
                token: token
            })

            
        } catch (err) {
            res.status(501).json({message: err.message})
        }
    }
    
)

module.exports = router