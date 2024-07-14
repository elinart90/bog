-- Get all users
SELECT * FROM Users;





SELECT BlogPosts.*, Users.username AS author 
FROM BlogPosts 
JOIN Users ON BlogPosts.user_id = Users.user_id;





SELECT Comments.*, Users.username AS commenter 
FROM Comments 
JOIN Users ON Comments.user_id = Users.user_id 
WHERE Comments.post_id = 1;






SELECT BlogPosts.title, COUNT(Comments.comment_id) AS comment_count 
FROM BlogPosts 
LEFT JOIN Comments ON BlogPosts.post_id = Comments.post_id 
GROUP BY BlogPosts.post_id;





SELECT * FROM BlogPosts 
WHERE user_id = 1;
