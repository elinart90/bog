const express = require('express')

const db = require('./config/db')

const app = express();
app.use(express())


//Get all users
app.get('/users', (req, res) => {
    db.query('SELECT * FROM Users', (error, results) => {
        if (error){
            res.status(500).json({ error: error.message});
        }else{
            res.json(results);
        }
    })
})


//create a new user
app.post('/users', (req, res) => {
    const { username, email } = req.body;
    db.query('INSERT INTO Users (username, email) VALUES (?, ?)', [username,email], (error, result) => {
        if(error) {
            res.status(500).json({error: error.message});
        }else {
            res.status(201).json({ userId: result.insertId})
        }
    })
})


// create a new blog post
app.post('/posts', (req, res) {
    const { title, content , userId } = req.body;
    db.query('INSERT INTO BlogPosts (title, content, user_id VALUES (?, ?, ?', [title, content, userId], (error, result) => {
        if(error) {
            res.status(500).json({ error: error.message });
        }else {
            res.status(201).json({ postId: result.insertId });
        }
    })
})


// Get all blog posts
app.get('/posts', (req, res) => {
    db.query('SELECT BlogPosts.*, Users.username FROM BlogPosts JOIN Users ON BlogPosts.user_id = Users.user_id', (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(results);
      }
    });
  });

// Create a new comment
app.post('/comments', (req, res) => {
    const { content, userId, postId } = req.body;
    db.query('INSERT INTO Comments (content, user_id, post_id) VALUES (?, ?, ?)', [content, userId, postId], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ commentId: result.insertId });
      }
    });
  });



  
  // Get all comments for a specific post
  app.get('/posts/:postId/comments', (req, res) => {
    const { postId } = req.params;
    db.query('SELECT Comments.*, Users.username FROM Comments JOIN Users ON Comments.user_id = Users.user_id WHERE Comments.post_id = ?', [postId], (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(results);
      }
    });
  });


const PORT = process.env.PORT || 300;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})




