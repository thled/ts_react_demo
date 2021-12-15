const fs = require('fs');
const path = require('path');

const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript",
  },
];

const authors = [
  {
    id: 1,
    name: "Cory House",
  },
  {
    id: 2,
    name: "Scott Allen",
  },
  {
    id: 3,
    name: "Dan Wahlin",
  },
];

const filepath = path.join(__dirname, "db.json");
const data = JSON.stringify({ courses, authors });

fs.writeFile(filepath, data, (err) => {
  if (err) {
    console.log(err);

    return;
  }
  console.log("Mock DB created");
});
