function login(email, password, callback) {
  const request = require('request');

  const apiKey = "__YOUR_API_KEY_HERE__";
  const options = {
    url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    method: 'POST',
    form: {
      email,
      password
    }
  };
  request.post(options, function(err, response, body) {
    if (err) return callback(err);
    const user = JSON.parse(body);
        
    if (user.error) return callback();

    callback(null, {
      user_id: user.localId,
      displayName: user.displayName,
      email: user.email
    });
  });
}
