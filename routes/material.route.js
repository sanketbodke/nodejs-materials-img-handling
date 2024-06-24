import { Router } from "express";
import { getAllMaterials, getMaterialById, addNewMaterial, updateMaterial, deleteMaterial } from "../controller/material.controller.js"
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/create").post(
    upload.fields([
        {
            name: "imageUrl",
            maxCount: 1
        },
    ]),
    addNewMaterial
)

router.route("/").get(getAllMaterials)
router.route("/:id").get(getMaterialById)
router.route("/:id").put(updateMaterial)
router.route("/:id").delete(deleteMaterial)

export default router