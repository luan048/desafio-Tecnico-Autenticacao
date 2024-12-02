# Technical challenge

Back-end technical challenge with authentication

## Summary
- [Technologies Used](#1-technologies-used)
- [How to install the project on my machine?](#3-how-to-install-on-my-machine)
- [About the Project](#3-about-the-project)

</br>
</br>

### 1 Technologies used
Technologies used in this project: 
</br>
![Nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)&nbsp; </br>
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)&nbsp; </br> 
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp; </br>

</br>

### 2 How to install the project on my machine?

#### 1 Clone this repository on your machine and run it in any IDE.

#### 2 Install all dependencies
  ```bash
  $ npm install
  ```
#### 3 To run on server
  ```bash
  $ npm run dev
  ```

</br>

### 3 About the Project
This project is for a technical challenge, which consists of an API, with operations to create a common user, </br> 
and list some information about him, as well as create an administrator user, being the only one allowed to enter </br>
the route of listing information about all users registered. In this api, I used an in-memory database; jwt for authentication; </br>
and some other frames to facilitate login operations, where using bycrypt, not even the admin will be able to know the user's password, as it will be encrypted, thus allowing security and ease for everyone.
