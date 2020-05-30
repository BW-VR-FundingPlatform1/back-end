const bcrypt = require('bcryptjs')
const db = require("./backer-model")
const jwt = require('jsonwebtoken')
const restrict = require("../middleware/auth")


const router = require("express").Router()

router.get("/",  async (req, res, next) => {
    try {
      res.json(await db.list());
    } catch (err) {
      next(err);
    }
  });

router.get("/projects", restrict(),  async (req, res, next) => {
    try {
      res.json(await db.projectList());
    } catch (err) {
      next(err);
    }
  });

router.post("/register", async (req, res, next) => {
    try {
        const {username} = req.body
        const user = await db.findBy({username}).first()
        if (user) {
          return res.status(409).json({
            message: "username is already taken"
          })
        }
        const newUser = await db.insert(req.body)
        res.status(201).json(newUser)
      } catch(err) {
        next(err)
      }
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
            const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {expiresIn: '1hr'})

            res.cookie("token", token)
            res.json({
              message: `Welcome ${user.username}! :)`,
              token: token,
              username: user.username

            })
        } catch(err) {
          next(err)
        }
      });
      
      module.exports = router;