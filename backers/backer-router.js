const bcrypt = require('bcryptjs')
const db = require("./backer-model")
const jwt = require('jsonwebtoken')
const restrict = require("../middleware/auth")


const router = require("express").Router()

router.get("/", restrict(), async (req, res, next) => {
    try {
      res.json(await db.list());
    } catch (err) {
      next(err);
    }
  });

router.post("/register", (req, res, next) => {
    const newUser = req.body
    const hash = bcrypt.hashSync(newUser.password, 12)
  
    newUser.password = hash

    db.insert(newUser)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(({ name, message, code, stack }) => {
      res.status(500).json({ name, message, code, stack })
    }) 
  
  // try {
    //     const {username} = req.body
    //     const user = await db.findBy({username}).first()
    //     if (user) {
    //       return res.status(409).json({
    //         message: "username is already taken"
    //       })
    //     }
    //     res.status(201).json(await db.insert(req.body))
    //   } catch(err) {
    //     next(err)
    //   }
    })

    router.post('/login', async (req, res, next) => {
        // implement login
        const authError = {
          message: "Invalid Credentials",
        }
        try {
          const user = await db.findBy ({ username: req.body.username}).first()
          if(!user) {
            return res.status(401).json(authError)
          }
          const passwordValid = await bcrypt.compare(req.body.password, user.password)
          if (!passwordValid) {
              return res.status(401).json(authError)
          }
          const tokenPayload = {
            userId: user.id,
            userRole: "user",
          }
          res.cookie("token", jwt.sign(tokenPayload, process.env.JWT_SECRET))
          res.json({
            message: `Welcome ${user.username}! :)`,
          })
        } catch(err) {
          next(err)
        }
      });
      
      module.exports = router;