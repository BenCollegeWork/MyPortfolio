import Educations from '../models/educations.model.js';
import extend from 'lodash/extend.js'
import errorHandler from '../helpers/dbErrorHandler.js'

const create = async (req, res) => {
    const educations = new Educations(req.body);
    try {
        await educations.save()
        return res.status(200).json({
            message: "Successfully added education!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
};

const list = async (req, res) => {
    try {
        let educations = await Educations.find().select('title firstname lastname email completion description');
        res.json(educations)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
};

const educationByID = async (req, res, next, id) => {
    try {
        let education = await Educations.findById(id)
        if (!education) {
            return res.status(400).json({
                error: "Education not found"
            })
        }
        req.education = education
        next()
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
};

const read = (req, res) => {
    return res.json(req.education)
}

const update = async (req, res) => {
    try {
        let education = req.education
        education = extend(education, req.body)
        await education.save()
        res.json(education)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
};

const remove = async (req, res) => {
    try {
        let education = req.education
        let deletedEducation = await education.deleteOne()
        res.json(deletedEducation)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
};

const removeAll = async (req, res) => {
    try {
        await Educations.deleteMany({})
        return res.status(200).json({
            message: "All educations have been deleted."
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
};

export default {
    create,
    list,
    educationByID,
    read,
    update,
    remove,
    removeAll
}