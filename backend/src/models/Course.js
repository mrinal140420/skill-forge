const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['DSA', 'DBMS', 'OS', 'CN', 'OOP', 'System Design', 'AI/ML Basics', 'Cyber Security'],
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner',
    },
    durationHours: {
      type: Number,
      required: true,
      min: 1,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    thumbnailUrl: {
      type: String,
      default: 'https://via.placeholder.com/300x200?text=Course',
    },
    description: {
      type: String,
      required: true,
    },
    tags: [String],
    syllabusModules: [
      {
        _id: mongoose.Schema.Types.ObjectId,
        title: String,
        contentType: {
          type: String,
          enum: ['video', 'text'],
        },
        durationMin: Number,
      },
    ],
    prerequisites: [mongoose.Schema.Types.ObjectId],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Generate slug from title
courseSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }
  next();
});

module.exports = mongoose.model('Course', courseSchema);
