const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const Course = new Schema({
    name: { type: String},
    decription: { type: String},
    title: { type: String},
    video_id: { type: String},
    level: { type: String},
    img: { type: String},
    slug: { type: String},
    deleted: { type: Boolean, default: true}
},
{
    timestamp: true,
}
);

Course.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
