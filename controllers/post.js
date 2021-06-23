const Post = require("../models/post");

exports.getPost = (req, res) => {
  const posts = Post.find()
    .select("_id title body")
    .then((posts) => res.json({ posts: posts }))
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  post.save().then((result) => {
    res.json({
      post: result,
    });
  });
};
