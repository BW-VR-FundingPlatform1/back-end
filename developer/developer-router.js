const bcrypt = require('bcryptjs')
const restrict = require("../middleware/auth")
const db = require("./developer-model")
const jwt = require('jsonwebtoken')


const router = require("express").Router()

router.get("/",   async (req, res, next) => {
  try {
    res.json(await db.list());
  } catch (err) {
    next(err);
  }
});

router.get("/projects", restrict(), async (req, res, next) => {
  try {
    res.json(await db.projectList());
  } catch (err) {
    next(err);
  }
});

router.get('/:id/projects', restrict(), async (req, res) => {
  try {
      const { id } = req.params
      
     await db.findProject(id)
          .then(project => {
              res.status(200).json(project)
          })
    } catch(err) {
      next(err)
    }
});


router.post('/:id/projects', restrict(),  async (req, res) => {
  try {
      const id = await db.insert(req.body);

      const project = await db.findProjectId(id)

        return res.status(201).json(project)
    } catch(err) {
      next(err)
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
        res.status(201).json(await db.insert(req.body))
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