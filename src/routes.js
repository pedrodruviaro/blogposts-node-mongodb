const express = require("express");
const blogController = require("./controllers/blogController");
const routes = express.Router();

// GET
routes.get("/", blogController.index);

routes.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

routes.get("/new-blog", (req, res) => {
  res.render("new-blog", { title: "Create New Blog" });
});

routes.get("/blog/:id", blogController.getSingleBlog);

// POST
routes.post("/new-blog", blogController.createNewBlog);

//DELETE
routes.delete("/blog/:id", blogController.delete);

module.exports = routes;
