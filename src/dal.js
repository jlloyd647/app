/////////////////////////////////////////////
//   create new User
/////////////////////////////////////////////
function createUser(user, cb) {
  db = cloudant.db.use('_users')

  db.insert(user, function(err, user) {
    if (err) return cb(err)
    cb(null, user)
  })
}
