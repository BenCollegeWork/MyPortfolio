import Contacts from '../models/contacts.model.js';
import extend from 'lodash/extend.js';
import errorHandler from '../helpers/dbErrorHandler.js';

const list = async (req, res) => {
    try {
        let contacts = await Contacts.find().select('firstname lastname email');
        res.json(contacts);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

const contactByID = async (req, res, next, id) => {
    try {
        let contact = await Contacts.findById(id);
        if (!contact) {
            return res.status(400).json({
                error: "Contact not found"
            });
        }
        req.contact = contact;
        next();
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

const read = (req, res) => {
    return res.json(req.contact);
}

const create = async (req, res) => {
    const contact = new Contacts(req.body);
    try {
        await contact.save();
        return res.status(200).json({
            message: "Successfully created contact!"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

const update = async (req, res) => {
    try {
        let contact = req.contact;
        contact = extend(contact, req.body);
        await contact.save();
        res.json(contact);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

const remove = async (req, res) => {
    try {
        let contact = req.contact;
        let deletedContact = await contact.deleteOne();
        res.json(deletedContact);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

const removeAll = async (req, res) => {
    try {
        await Contacts.deleteMany({});
        return res.status(200).json({
            message: "Successfully deleted all contacts!"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

export default {
    list,
    contactByID,
    read,
    create,
    update,
    remove,
    removeAll
};