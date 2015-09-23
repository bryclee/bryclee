'use strict';

module.exports = function IndexModel(posts) {
    return {
        posts: posts || []
    };
};
