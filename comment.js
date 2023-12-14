//Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

// Create comment
// api/comment
router.post('/',
    auth,
    commentController.createComment
);

// Get all comments
router.get('/',
    commentController.getComments
);

// Update comment via ID
router.put('/:id',
    auth,
    commentController.updateComment
);

// Delete comment via ID
router.delete('/:id',
    auth,
    commentController.deleteComment
);

module.exports = router;
