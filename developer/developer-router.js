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

router.get('/:id/projects', restrict(), async (req, res, next) => {
  try {
      const { id } = req.params
      const project = await db.findProject(id)
      
      if (project) {
        return res.status(200).json(project)
    } else {
        return res.status(404).json({ message: "Could not find project with this Id." })
    }

} catch(err) {
      next(err)
    }
});


router.post('/:id/projects',  (req, res, next) => {
  const { id } = req.params;
  const project = req.body;

  db.insertProject({...project, developer_id: id})
      .then(project => {
          res.status(200).json(project)
      })
      .catch(err => {
          console.log(err)
          res.status(500).json({message: "Unable to add a new project"})
      })
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
        const newUser = await db.add(req.body)
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