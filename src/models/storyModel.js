const mongoose = require('mongoose')

const storySchema = mongoose.Schema(
    {
        _id:
        {
            type:Number,
            required:true,
            unique:true
        },
        story:
        {
            type: String,
            required: [true, 'Share your story here']
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Story', storySchema);

module.exports = Story;