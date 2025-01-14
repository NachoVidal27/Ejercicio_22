const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Rutas relacionadas al panel de control (Admin) 3.4:
// ...

router.get("/", adminController.showArticles)
router.get("/nuevo", adminController.showCreateForm);
router.get("/eliminar/:id", adminController.deleteId)
router.post("/nuevo",adminController.createArticle);
router.get("/editar/:id",adminController.showEdit)  //Render de edit
router.patch("/editar/:id",adminController.editArticle)



module.exports = router 