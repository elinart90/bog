-- Insert sample users
INSERT INTO Users (username, email) VALUES 
('Elinart', 'john@example.com'),
('Nart-Eli', 'jane@example.com');

-- Insert sample blog posts
INSERT INTO BlogPosts (title, content, user_id) VALUES 
('First Post', 'This is the content of the first post', 1),
('Second Post', 'This is the content of the second post', 1),
('Third Post', 'This is the content of the third post', 2);

-- Insert sample comments
INSERT INTO Comments (content, user_id, post_id) VALUES 
('Great post!', 2, 1),
('Very informative.', 1, 2),
('Thanks for sharing!', 2, 2),
('Nice read.', 1, 3),
('I enjoyed this post.', 2, 3);
