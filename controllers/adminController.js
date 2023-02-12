const { Article } = require("../models");


async function showArticles(req, res) {
  const articles = await Article.findAll();
  res.render("articles", { articles });
}

const showCreateForm = function (req, res) {
  console.log("holis");
  res.render("new");
};


async function deleteId(req, res) {
  Article.destroy({
    where: {id: req.params.id}
  })
  return res.redirect("/admin")
}


async function createId(req,res){
  Article.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    image: req.body.image
  })
  return res.redirect("/admin")

}





module.exports = {
  showCreateForm,
  showArticles,
  deleteId,
  createId
};
