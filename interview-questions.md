# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key would be the ID in the Sightings model due to the has_many sightings the Animal model could have 5 sightings all with different ID's attached to the Animal model

  Researched answer:Foreign key are associate to the Main model so the foreign key of sighting is associated to the Animal model throught the has_many foreign key association, to adjust them you would have to DB:migrate a change to fix the schema in which the key was. Also the foreign key would be apart of the Sightings model but attach to the Animal model. 



2. Which RESTful API routes must always be passed params? Why?

  Your answer: post,get these require params because you are specifically creating a certain post to the database. This would require new data or params to be pass in , otherwise they would be undefined

  Researched answer: Show, edit, Update, Destroy. These 4 need parameters to associate with a specific ID, Also they accept the information that inherenntly creates these individual posts in the database.



3. Name three rails generator commands. What is created by each?

  Your answer: Rails generate controller, generates the model by which the database is formed. 

  Researched answer: rails generate commands create biolerplate code like the Rails generate controller Model, command. (i tried finding examples in the learn syllabus and couldnt, if i could get the page they are located on i can edit this and ensure it is correct.)



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students          Index

method="POST"   /students          Create

method="GET"    /students/new      New  

method="GET"    /students/2       Show

method="GET"    /students/edit/2    edit

method="PATCH"  /students/2      update

method="DELETE" /students/2      destroy



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1 As a developer i can my to do list has a subject and a list of items to do
2 As a user i can see all to do lists
3 As a user i can click on a to do list and access it via a link
4 As a user i can return from that list, to the main page
5 As a user i can select to create a new list, and be redirected to a page to create the list.
6 As a user i can click on the homepage button to return to home
7 As a user i can click a button that submits the to do list and stores it.
8 As a user on submition click return me to the home page
9 As a user i can delete a post via a button.
10 As a user i can update a to do list via the foreign ID