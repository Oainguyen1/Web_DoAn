const moongose = require('moongose')
const userSchema = new moongose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, default: false, required: true},
        phone: {type: Number, required: true},
        access_token: {type: String, required: true},
        refresh_token: {type: String, required: true},
        
    },
    {
        timestamps: true
    }
);
const User = moongose.model("User", userSchema);
module.exports = User;