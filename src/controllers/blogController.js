const Blog = require("../models/blog");

module.exports = {
  async createNewBlog(req, res) {
    const newBlog = req.body;
    const doc = new Blog(newBlog);

    await doc.save();

    res.redirect("/");
  },

  async index(req, res) {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.render("index", { title: "Home", blogs: blogs });
  },

  async getSingleBlog(req, res) {
    const id = req.params.id;

    const blog = await Blog.findById(id);

    res.render("details", { title: blog.title, blog: blog });
  },

  delete(req, res) {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
      .then((result) => {
        res.json({ redirect: "/blogs" });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
