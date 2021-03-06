var xhr = require('./xhr');

exports.login = function(username, password) {

    var options = {

        method: 'POST',

        url: '/api/auth',

        data: JSON.stringify({

            username: username,
            password: password
        }),

        headers: {

            'Content-Type': 'application/json'
        }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

exports.posts = function(type) {

    var options = {

        url: '/api/entries/' + type,

        headers: {

            'X-Key': apiKey()
        }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response).data;
    });
};

exports.post = function(id) {

    var options = {

        url: '/api/entry/' + encodeURIComponent(id),

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response).data;
    });
};

exports.entryInfo = function(id) {

    var options = {

        url: '/api/entry/' + encodeURIComponent(id) + '/info',

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response).data;
    });
};

// Retrieves the given post comments.

exports.comments = function(id) {

    var options = {

        url: '/api/post/' + encodeURIComponent(id) + '/comments',

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response).data;
    });
};

// Removes the given comment.

exports.removeComment = function(id) {

    var options = {

        method: 'DELETE',

        url: '/api/comment/' + encodeURIComponent(id),

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

exports.updatePost = function(id, data) {

    var options = {

        method: 'PUT',

        url: '/api/entry/' + id,

        data: JSON.stringify(data),

        headers: { 'X-Key': apiKey(), 'Content-Type': 'application/json' }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

exports.savePost = function(data) {

    var options = {

        method: 'POST',

        url: '/api/entry',

        data: JSON.stringify(data),

        headers: { 'X-Key': apiKey(), 'Content-Type': 'application/json' }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

// Removes the given post.

exports.removePost = function(id) {

    var options = {

        method: 'DELETE',

        url: '/api/entry/' + encodeURIComponent(id),

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

exports.directory = function(directory) {

    var options = {

        url: '/api/directory/' + encodeURIComponent(window.btoa(directory)),

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response).data;
    });
};

exports.createDirectory = function(directory, subdirectory) {

    var options = {

        method: 'POST',

        url: '/api/directory/' + encodeURIComponent(window.btoa(directory)) + '/' +
            encodeURIComponent(subdirectory),

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

exports.removeDirectory = function(directory) {

    var options = {

        method: 'DELETE',

        url: '/api/directory/' + encodeURIComponent(window.btoa(directory)),

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

// Retrieves file metainfo.

exports.file = function(file) {

    var options = {

        url: '/api/file/' + encodeURIComponent(window.btoa(file)),

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

// Removes the given file.

exports.removeFile = function(file) {

    var options = {

        method: 'DELETE',

        url: '/api/file/' + encodeURIComponent(window.btoa(file)),

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

// Retrieves all users.

exports.users = function() {

    var options = {

        url: '/api/users',

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response).data;
    });
};

// Retrieves the given user.

exports.user = function(id) {

    var options = {

        url: '/api/user/' + encodeURIComponent(id),

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response).data;
    });
};

// Updates the given user.

exports.updateUser = function(id, data) {

    var options = {

        method: 'PUT',

        data: JSON.stringify(data),

        url: '/api/user/' + encodeURIComponent(id),

        headers: { 'X-Key': apiKey(), 'Content-Type': 'application/json' }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

// Saves the new user.

exports.saveUser = function(data) {

    var options = {

        method: 'POST',

        data: JSON.stringify(data),

        url: '/api/user',

        headers: { 'X-Key': apiKey(), 'Content-Type': 'application/json' }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

// Removes the given user.

exports.removeUser = function(id) {

    var options = {

        method: 'DELETE',

        url: '/api/user/' + encodeURIComponent(id),

        headers: { 'X-Key': apiKey() }
    };

    return xhr(options).then(function(response) {

        return JSON.parse(response);
    });
};

// Checks whether the API key has been set.

exports.hasKey = function() {

    return !!sessionStorage.getItem('api-key');
};

var apiKey = exports.apiKey = function() {

    var key = sessionStorage.getItem('api-key');

    if (!key) {

        throw new Error('API key is not set');
    }

    return key;
};
