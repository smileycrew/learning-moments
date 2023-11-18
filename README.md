# README
## Writing a Readme
Write the steps needed to run this application. Leave yourself some notes or key learning moments while building this application

<!-- The Plan -->
This application will have several views, and just like in Honey Rae Repairs, you will begin to build these views piece by piece. Before you get started, however, having an end product in mind will help with your decision making process as you build. What components will you build? What will your routes be? What components can you reuse? Some guidance will be given for these decisions and others will be left up to you.

Below is a list of user stories describing every feature you will implement in this project. Carefully read the user stories for each view of this application, then, build a wireframe representing each view and its features. Of course, feel free to review your wireframe with an instructor when you are finished.

Revisit the Honey Rae's Wireframe chapter for guidance on building this wireframe.

The Nav Bar
A navbar will persist in each view, allowing the user to navigate through the views of the application. The links on the navbar are as follows:

All Posts > links to the view of all the posts
My Posts > links to the view of the logged in user's posts
Favorites > links to the view of the logged in user's liked posts
New Post > links to the view of the new post form
Profile > links to the view of the logged in user's profile
Logout > will logout the user
🖥 New Post
A form for the user to create a new post with a title, body, and topic.

Given the user wishes to create a new post
When the user clicks on New Post in the Nav Bar
Then a form to create a new post will display

Given the user wishes to select a topic for the post
When the user clicks on the topic dropdown
Then a list of the topics should appear

Given the user has entered a title for the post
And the user has entered the body for the post
And the user has selected a topic for the post
When the user clicks the save button
Then the post will save to the database and the application will navigate to the My Posts view

🖥 Home/All Posts
A view for all the posts.

Given the user wishes to view a list of all the posts
When the user is at the home route or visits the All Posts view
Then the title, topic and number of likes will display for each post in the database.

Given the user wishes to filter the posts by topic
When the user clicks on the topic dropdown
And chooses a topic
Then only the posts about the selected topic will display

Given the user wishes to search for a post
When the user enters a search term in the search input field
Then only the posts with a title that contains the search term will display

Given the user wishes to view a post
When the user clicks on the title of a post
Then the application will navigate to the Post Details view for the post

🖥 Post Details
A view for the user to read a post

Given the user wishes to read a post
When the user has clicked to view a specific post
Then the title, author, topic, date, body, and number of likes should display for the post.

Given the user wishes to view the profile of the author
When the user clicks the author's name
Then the application will navigate to the Profile View for the author

Given the user is not the author of the post
Then a button to like the post should display
When the user clicks the like button
Then the like relationship will save to the database and the application will navigate to the Favorites view

Given the user is the author of the post
Then a button to edit the post should display
When the user clicks the edit button
Then the application will navigate to the Edit Post view for the post

🖥 Edit Post
A view to edit a post

Given the user wishes to edit their post
When the user clicks to edit a post
Then a form to edit will display, populated with the current values for the post

Given the user wishes to save their changes
When the user clicks on the save button
Then the post will be updated in the database and the application will navigate to the My Posts view

🖥 My Posts
A view for all the posts the user has written

Given the user wishes to view a list of posts they have written
When the user visits the My Posts view
Then the title will display for each post the user has written. A button to delete will display next to each post.

Given the user wishes to view their post
When the user clicks on the title of the post
Then the application will navigate to the Post Details view for the post

Given the user wishes to delete their post
When the user clicks on the delete button
Then the post will be deleted from the database and no longer display on the page.

🖥 Favorites
A view for all the posts the user has liked

Given the user wishes to view a list of the posts they have liked
When the user visits the Favorites view
Then the title will display for each post the user has liked. A button to remove to post from their favorites will display next to each post

Given the user wishes to view one of their favorite posts
When the user clicks on the title of the post
Then the application will navigate to the Post Details view for the post

Given the user wishes to unlike a post
When the user clicks on the remove button
Then the like relationship will be deleted from the database and no longer display on the page.

🖥 User Profile
A view for the details of a user

Given the user wishes to view either their profile or another user's profile
When the user visits the User Profile view
Then the full name, cohort number, number of posts written will display for the selected user

Given the user is viewing their profile
Then a button to edit should display
When the user clicks the edit button
Then the application will navigate to the Edit Profile view

🖥 Edit Profile
A form for the user to edit their profile

Given the user wishes to edit their profile
When the user visits the Edit Profile view
Then a form will display to edit the user's full name and cohort number

Given the user wishes to save their changes
When the user clicks the save button
Then the user will be updated in the database and the application will navigate to the User Profile view for the logged in user