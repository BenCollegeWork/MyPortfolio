import mongoose from 'mongoose';
const contactsSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: 'First name is required'
    },
    lastname: {
        type: String,
        trim: true,
        required: 'Last name is required'
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        required: 'Email is required'   
    }
});
export default mongoose.model('Contacts', contactsSchema);