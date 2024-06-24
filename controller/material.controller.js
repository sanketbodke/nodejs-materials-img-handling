import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Material } from "../models/materials.model.js"

// get all materials
const getAllMaterials = asyncHandler(async (req,resp) => {
    const materials = await Material.find()

    if (materials.length === 0) {
        throw new ApiError(404, "Materials not found");
    }

    return resp.status(200).json(
        new ApiResponse(200, materials, "All materials fetched successfully")
    );
})

// get material by id

const getMaterialById = asyncHandler(async (req,resp) => {
    const materialId =  req.params.id

    const material = await Material.findById(materialId)

    if (material.length === 0) {
        throw new ApiError(404, "Material not found");
    }

    return resp.status(200).json(
        new ApiResponse(200, material, "Material fetched successfully")
    );
})

// add new material

const addNewMaterial = asyncHandler(async (req, res) => {
    // get details
    const { name, technology, colors, pricePerGram } = req.body;

    // validation
    if (!name || !technology || !colors || !pricePerGram) {
        throw new ApiError(400, "All fields are required");
    }

    // check if material already exists
    const existedMaterial = await Material.findOne({
        name: name.trim()
    });

    if (existedMaterial) {
        throw new ApiError(409, "Material already exists");
    }

    // check for image
    const imageLocalPath = req.files?.imageUrl?.[0]?.path;

    if (!imageLocalPath) {
        throw new ApiError(400, "Image is required");
    }

    // upload image to cloudinary
    let image;
    try {
        image = await uploadOnCloudinary(imageLocalPath);
    } catch (error) {
        throw new ApiError(500, "Image upload failed");
    }

    // create material object
    const createdMaterial = await Material.create({
        name,
        technology,
        colors,
        pricePerGram,
        imageUrl: image.url
    });

    if (!createdMaterial) {
        throw new ApiError(500, "Something went wrong while creating the material");
    }

    // return response
    return res.status(201).json(
        new ApiResponse(200, createdMaterial, "Material Created Successfully")
    );
});

// update material

const updateMaterial = asyncHandler(async (req,resp) => {
    const materialId =  req.params.id

    // update material by id

    const material = await Material.findByIdAndUpdate(
        materialId,
        req.body, {new: true}
    )

    if (!material) {
        throw new ApiError(404, "Materials not found");
    }

    return resp.status(200).json(
        new ApiResponse(200, material, "Material Updated")
    )
})

// delete material

const deleteMaterial = asyncHandler(async (req,resp) => {
    const materialId =  req.params.id

    const material = await Material.findByIdAndDelete(materialId)

    if (!material) {
        throw new ApiError(404, "Materials not found");
    }

    return resp.status(200).json(
        new ApiResponse(200, "Material Deleted")
    )
})

export {
    getAllMaterials,
    getMaterialById,
    addNewMaterial,
    updateMaterial,
    deleteMaterial
}