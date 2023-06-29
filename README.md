# Money Mingle

### Getting Started

1. Fork this template repo
2. Create a PostgreSQL database
3. Create a `.env` file and define environment variables for your PostgreSQL credentials. See the `knexfile.js` file for needed variables.
4. Run the command `npm run kickstart`

### Mission Statement

Our web platform restructures the operation of rotating savings associations (susu) for African and Caribbean families. By simplifying susu management, facilitating transparent transactions, and encouraging responsible financial practices, we empower these communities to achieve their financial goals, build generational wealth, and create a brighter future.


### Who We Serve

Our application serves African and Caribbean families who are interested in participating in rotating savings associations (susu) and are seeking a modernized and efficient platform to facilitate their susu activities. Target audience would include individuals or families within communities who value financial inclusion, economic empowerment and community support.

### Product Overview

Our application is a comprehensive web platform designed to revolutionize the way rotating savings (susu) operate, with a specific focus on serving African and Caribbean families. It offers a modern and efficient solution to facilitate susu activities, providing users with a seamless and secure experience. 

Key Features of our application include:
* **Group Management and Creation**: Users can easily create new susu groups or join existing ones through the web application. 
* **Contribution Tracking**: The application provides a comprehensive dashboard that allows users to track their contributions, ensuring transparency and accountability. Participants can view their individual contributions, outstanding payments and historical records enabling them to stay informed about their financial commitments. 
* **sending and receiving Invitations**: Users are allowed to receive invitations to a susu while the owner of the susu Can send Invitations to other users.
* **Deleting a susu**: As an owner of a susu, Users are allowed to delete their susu. 

### Summary

According to Prana Circle a SuSu is a community based savings practice where family and friends come together in order to borrow and lend money to each other. This is a popular way to save in a lot of countries around the world. Susu is known by different names in different countries like ”Susu”in the Caribbean, “Tanda” in Mexico and so on. A group of people get together and contribute a set amount towards the financial goal of one person in the group. This happens every week or month where the money is distributed to a different member in rotation, until everyone has received a payout towards their financial goals.

Many African and Caribbean populations face significant challenges when it comes to their financial well-being. Limited access to formal banking institutions, coupled with poor financial structures and bureautic hurdles, often restrict their ability to save and access credit. In such circumstances, traditional savings mechanisms like Susu play a crucial role in supporting these communities. Research indicates that African and Caribbean populations experience difficulties in establishing credit and savings in their new home countries, such as the United States. Due to a lack of credit history or savings they often rely on informal support networks within their communities instead of formal banking institutions or credit card companies, which are often hesitant to lend to them in the first place. As a result, these communities have embraced savings groups like Susu as a means to overcome financial barriers. 




### Technologies  
We built MayaSnax using the following technologies:

![](./readme-img/Screenshot%20(68).png)

The frontend was built using HTML, CSS, JavaScript, React, and MaterialUI. The backend was built using Node and Express, bcrypt for password hashing, a PostgreSQL database, and Knex to connect our server to our database.

### ERD

To manage the data necessary for the MayaSnax backend, we have implemented the following schema in our PostgreSQL database:

![](./readme-img/Screenshot%20(70).png)

### Key API Endpoints

The MayaSnax API provides the following endpoints:

| endpoint | description | example |
| - | - | - |
| `/api/susu/:id` | Get all the information for a specific susu| `GET /api/susu/2` |
| `/api/susuform` | Post to Join a susu | `POST /api/susuform` |
| `/api/susu` | Post a Brand new susu | `POST /api/susu` |
| `/api/susu/:id` | Deletes a specific susu | `Delete /api/susu/2` |
| `/api/invites/:id` | Get all the invites for a specific user| `GET /api/invites/1` |
| `/api//invites` | Post a invite| `POST /api/invites` |
| `/api/invites/:id` | deletes an invite| `Delete /api/invites/1` |

