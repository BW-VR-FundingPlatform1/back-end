const supertest = require('supertest')
const Users = require("../developer/developer-model")
const backers = require("../backers/backer-model")
const server = require('../server')
const db = require("../data/dbConfig")

describe('POST /register', () => {
    it('should register new user', () => {
    return supertest(server)
        .post('/register')
        .send({username: "hello", password: "world"})
        .then(response => {
            expect(response.status).toBeTruthy();
        })
    })
    it('should return {message: Unable to register"}', ()=>{
        return supertest(server)
        .post('/register')
        .then(response =>{
            expect(response.type).toMatch(/text/i);
        })
    })
})
  
describe('POST /login', () => {
it('should allow user to login successfully', () => {
    return supertest(server)
        .post('/login')
        .send({id : 1, username: 'hello', password: 'world'})
        .then(response =>{
            expect(response.status).toBeTruthy();
        })
    })

it("should return a welcome text", function() {
    return supertest(server)
            .post("/login")
            .then(res => {
            expect(res.type).toMatch(/text/i);
            })
        })
})

describe("GET /", function() {
    it("should return a response", function() {
    
        return supertest(server)
        .get("/")
        .then(response => {
        expect(response.status).toBeTruthy();
        })
    })
    it("returns a 404 status code for routes that don't exist", () => {
        return supertest(server).get("/doesnotexist").expect(404)
    })
    
    })

    describe("login endpoint tests", () => {
        beforeEach(async () => {
          await db("myProjects").truncate();
        });
      
        it("logs into entrepreneur", async () => {
          await supertest(server)
            .post("/api/entrepreneur/login")
            .send({ 
                username: "some1234441",
                 password: "stuff", 
                 FirstName: "hey", 
                 LastName: "there", 
                 phone: "1234567890", 
                 email: "null@null.com" })
            .then(res => {
              expect(res.type).toBe("application/json");
            });
        });
      
        it("logs into backer", async () => {
          await supertest(server)
            .post("/api/backer/login")
            .send({   
            username: "some123141", 
            password: "stuff", 
            FirstName: "hey", 
            LastName: "there", 
            phone: "1234567890", 
            email: "null@null.com"  })
            .then(res => {
              expect(res.type).toBe("application/json");
            })
        });
        
      });