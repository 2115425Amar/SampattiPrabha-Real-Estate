**Full Stack Real Estate App using MERN Stack, Prisma, and Socket.io**

A full-featured Real Estate web application built using the MERN stack, integrated with Prisma for database management, JWT and Cookies for secure user authentication, and real-time chat functionality with Socket.io. This project covers a wide range of modern web development techniques and ensures a responsive, interactive user experience.

### **Key Features:**
- **Frontend:** Developed using React.js, styled for responsiveness across devices using CSS, with state management via Context API.
- **Backend:** Powered by Node.js and Express.js, utilizing Prisma ORM for database interactions with MongoDB.
- **User Authentication:** Secure user login and registration system using JWT and Cookies for authentication and session management.
- **Real-Time Chat:** Integrated Socket.io for real-time messaging between users (e.g., between buyers and sellers).
- **Routing:** Client-side routing using React Router DOM, including protected routes for authenticated users only.
- **CRUD Operations:** Full Create, Read, Update, Delete (CRUD) functionality for property listings.
- **File Upload:** Image upload functionality for property listings to enhance the user experience.

### **Technologies Used:**
- **Frontend:** React.js, CSS, Context API, Zustand, React Router DOM
- **Backend:** Node.js, Express.js, Prisma ORM, MongoDB
- **Real-Time Communication:** Socket.io for live messaging
- **Authentication:** JWT, Cookies
- **Other Libraries:** React Leaflet for interactive maps, useRef for auto-scroll in chat, Zustand for state management

This project provides a robust and scalable platform for managing real estate listings, enabling users to view, search, and communicate about properties in real-time.




![alt text](ER-DIAGRAM/1.png)
<!-- ------------------------------------ -->
![alt text](ER-DIAGRAM/2.png)


{
    "clientName": "Thunder Client",
    "collectionName": "realState",
    "collectionId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
    "dateExported": "2024-09-28T11:09:00.989Z",
    "version": "1.2",
    "folders": [
        {
            "_id": "c8db7df8-009b-4c5d-bbe0-d6c83a54c814",
            "name": "chats",
            "containerId": "",
            "created": "2024-09-20T19:34:56.921Z",
            "sortNum": 10000
        },
        {
            "_id": "2c41df3b-b86d-498b-a442-d46080dd1e13",
            "name": "Messages",
            "containerId": "",
            "created": "2024-09-21T07:24:48.408Z",
            "sortNum": 20000
        }
    ],
    "requests": [
        {
            "_id": "2344f66d-6b59-46ef-8256-5555fa61f7e2",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "http://localhost:8000/api/auth/register",
            "url": "http://localhost:8000/api/auth/register",
            "method": "POST",
            "sortNum": 10000,
            "created": "2024-08-18T20:34:53.169Z",
            "modified": "2024-09-26T08:34:47.978Z",
            "headers": [
                {
                    "name": "Content-Type",
                    "value": "application/json"
                }
            ],
            "body": {
                "type": "json",
                "raw": "{\n  \"username\": \"wolf\",\n  \"email\": \"wolf@wolf.com\",\n  \"password\": \"wolf\"\n}\n",
                "form": []
            }
        },
        {
            "_id": "458af6ce-a510-4722-8bd7-5638231f5383",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "login",
            "url": "http://localhost:8000/api/auth/login",
            "method": "POST",
            "sortNum": 20000,
            "created": "2024-08-19T10:56:44.442Z",
            "modified": "2024-09-26T08:35:29.384Z",
            "headers": [],
            "body": {
                "type": "json",
                "raw": "{\n  \"username\":\"wolf\",\n  \"password\":\"wolf\"\n}",
                "form": []
            }
        },
        {
            "_id": "a25d4f06-881c-49ee-9217-5921d0608559",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "logout",
            "url": "http://localhost:8000/api/auth/logout",
            "method": "POST",
            "sortNum": 30000,
            "created": "2024-08-19T11:34:51.994Z",
            "modified": "2024-08-30T11:59:38.251Z",
            "headers": [
                {
                    "name": "Cookie",
                    "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjUwMTg4NzUsImV4cCI6MTcyNTAyNjA3NX0.Agl6n2U9FglshyTNhp1VKYqnGrBoCC0uZp0K-qmwggg"
                }
            ]
        },
        {
            "_id": "66eceb47-17c7-4991-b87b-8aecfa0dc165",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "test/protectedRoute",
            "url": "http://localhost:8000/api/test/should-be-logged-in",
            "method": "GET",
            "sortNum": 40000,
            "created": "2024-08-20T20:39:12.845Z",
            "modified": "2024-08-30T11:55:39.605Z",
            "headers": [
                {
                    "name": "Cookie",
                    "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjUwMTg4NzUsImV4cCI6MTcyNTAyNjA3NX0.Agl6n2U9FglshyTNhp1VKYqnGrBoCC0uZp0K-qmwggg"
                }
            ]
        },
        {
            "_id": "a3f9f369-c6f9-4573-b886-d795d1c3bef1",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "isAdmin",
            "url": "http://localhost:8000/api/test/should-be-Admin",
            "method": "GET",
            "sortNum": 50000,
            "created": "2024-08-20T21:56:09.539Z",
            "modified": "2024-08-30T11:55:51.548Z",
            "headers": [
                {
                    "name": "Cookie",
                    "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjUwMTg4NzUsImV4cCI6MTcyNTAyNjA3NX0.Agl6n2U9FglshyTNhp1VKYqnGrBoCC0uZp0K-qmwggg"
                }
            ]
        },
        {
            "_id": "ff841da8-b5b9-44b5-8ec1-fdb40bd4d52a",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "getUsers",
            "url": "http://localhost:8000/api/users/",
            "method": "GET",
            "sortNum": 60000,
            "created": "2024-08-20T22:51:46.394Z",
            "modified": "2024-08-30T12:15:36.593Z",
            "headers": []
        },
        {
            "_id": "ce6e0475-222b-460d-a5aa-8c5f9abdfac5",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "getSingleUser",
            "url": "http://localhost:8000/api/users/66c32a7094cc344f2351361d",
            "method": "GET",
            "sortNum": 70000,
            "created": "2024-09-10T12:29:20.652Z",
            "modified": "2024-09-23T14:57:38.959Z",
            "headers": []
        },
        {
            "_id": "337979fc-4ef2-4c3e-a3e6-ece97620cf95",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "updateUser",
            "url": "http://localhost:8000/api/users/66ee8a9edf9cc1659c3394f6",
            "method": "PUT",
            "sortNum": 80000,
            "created": "2024-09-10T12:30:42.728Z",
            "modified": "2024-09-23T15:01:21.897Z",
            "headers": [],
            "body": {
                "type": "json",
                "raw": "{\n  \"username\":\"mogambo\",\n  \"email\":\"mogambo\",\n  \"password\":\"mogambo\"\n}",
                "form": []
            }
        },
        {
            "_id": "392435ac-b917-4870-9400-c3c6909332c4",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "deleteUser",
            "url": "",
            "method": "GET",
            "sortNum": 90000,
            "created": "2024-09-10T12:32:16.558Z",
            "modified": "2024-09-10T12:32:16.558Z",
            "headers": []
        },
        {
            "_id": "4179c516-228d-484c-9738-dc2a2706b670",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "render-register",
            "url": "https://majarproject-2-1.onrender.com/api/auth/register",
            "method": "POST",
            "sortNum": 100000,
            "created": "2024-09-13T14:22:09.481Z",
            "modified": "2024-09-13T14:23:09.259Z",
            "headers": [],
            "body": {
                "type": "json",
                "raw": "{\n    \"username\":\"amargupta\",\n    \"email\":\"amarg2@gmail.com\",\n    \"password\":\"123456\"\n}",
                "form": []
            }
        },
        {
            "_id": "7533372a-b0fb-49f1-90d5-93bfca3a1eea",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "getPosts",
            "url": "http://localhost:8000/api/posts",
            "method": "GET",
            "sortNum": 110000,
            "created": "2024-09-14T13:04:05.756Z",
            "modified": "2024-09-26T12:07:47.876Z",
            "headers": []
        },
        {
            "_id": "791ab6d9-4320-49e2-813d-d068da6a3840",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "getPost",
            "url": "http://localhost:8000/api/post/66f54be0ad86a5b568401617",
            "method": "GET",
            "sortNum": 120000,
            "created": "2024-09-14T13:52:08.830Z",
            "modified": "2024-09-26T11:59:09.766Z",
            "headers": []
        },
        {
            "_id": "6a953712-e79d-46a8-96a4-8ec7fb73e1f5",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "updatePost",
            "url": "",
            "method": "GET",
            "sortNum": 130000,
            "created": "2024-09-14T14:03:45.812Z",
            "modified": "2024-09-14T14:03:45.812Z",
            "headers": []
        },
        {
            "_id": "889ed307-1f91-48d8-9bca-72e8fd8315de",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "c8db7df8-009b-4c5d-bbe0-d6c83a54c814",
            "name": "getChats",
            "url": "http://localhost:8000/api/chats",
            "method": "GET",
            "sortNum": 140000,
            "created": "2024-09-20T19:35:09.291Z",
            "modified": "2024-09-21T08:29:30.592Z",
            "headers": [
                {
                    "name": "Cookie",
                    "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjY5MDYyODMsImV4cCI6MTcyNjkxMzQ4M30.77P9E8HqmcEKiZYGu7B2wXtKlRIcGXZAfi0FWuTv2Rw"
                }
            ]
        },
        {
            "_id": "c0f92780-700c-454e-a99d-d914d939841f",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "c8db7df8-009b-4c5d-bbe0-d6c83a54c814",
            "name": "get Chat",
            "url": "http://localhost:8000/api/chats/66ee8d9271698856c49eba50",
            "method": "GET",
            "sortNum": 150000,
            "created": "2024-09-21T07:15:26.141Z",
            "modified": "2024-09-21T09:12:15.020Z",
            "headers": []
        },
        {
            "_id": "b9ca4c8d-cb01-4dd2-bf18-808db67a9f23",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "c8db7df8-009b-4c5d-bbe0-d6c83a54c814",
            "name": "Add Chat",
            "url": "http://localhost:8000/api/chats",
            "method": "POST",
            "sortNum": 160000,
            "created": "2024-09-21T07:16:04.763Z",
            "modified": "2024-09-21T09:10:43.022Z",
            "headers": [],
            "body": {
                "type": "json",
                "raw": "{\n  \"receiverId\":\"66c4fbf9a20b1658c9bd38fb\"\n}",
                "form": []
            }
        },
        {
            "_id": "6a89eaf1-d8f7-4013-9f63-2b3cfc315064",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "c8db7df8-009b-4c5d-bbe0-d6c83a54c814",
            "name": "Read Chat",
            "url": "",
            "method": "GET",
            "sortNum": 170000,
            "created": "2024-09-21T07:23:02.871Z",
            "modified": "2024-09-21T07:23:02.871Z",
            "headers": []
        },
        {
            "_id": "edc8d08c-9775-41ed-84f4-fc7ebdc514f6",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "2c41df3b-b86d-498b-a442-d46080dd1e13",
            "name": "Add Message",
            "url": "http://localhost:8000/api/messages/66ee8d9271698856c49eba50",
            "method": "POST",
            "sortNum": 180000,
            "created": "2024-09-21T07:25:15.808Z",
            "modified": "2024-09-21T17:13:34.225Z",
            "headers": [],
            "body": {
                "type": "json",
                "raw": "{\n  \"text\":\"second message\"\n}",
                "form": []
            }
        },
        {
            "_id": "f05908e1-1140-48e3-b8ba-e19b40095822",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "logout-atlas",
            "url": "https://majarproject-2-1.onrender.com/api/auth/logout",
            "method": "POST",
            "sortNum": 190000,
            "created": "2024-09-24T23:25:43.758Z",
            "modified": "2024-09-24T23:26:11.852Z",
            "headers": []
        },
        {
            "_id": "fb30f9cc-9ab0-438b-81db-23d0d7df8293",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "createPost",
            "url": "http://localhost:8000/api/posts",
            "method": "POST",
            "sortNum": 200000,
            "created": "2024-09-26T08:38:58.501Z",
            "modified": "2024-09-26T12:05:25.678Z",
            "headers": [],
            "body": {
                "type": "json",
                "raw": "{\r\n  \"postData\": {\r\n    \"title\": \"Title2\",\r\n    \"price\": 111,\r\n    \"images\": [\r\n      \"https://plus.unsplash.com/premium_photo-1684341008404-af4df3d54615?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D\"\r\n    ],\r\n    \"address\": \"Address1\",\r\n    \"city\": \"city1\",\r\n    \"bedroom\": 11,\r\n    \"bathroom\": 111,\r\n    \"type\": \"rent\",\r\n    \"property\": \"apartment\",\r\n    \"latitude\": \"21.5074\",\r\n    \"longitude\": \"-0.1278\"\r\n  },\r\n  \"postDetail\": {\r\n    \"desc\": \"Desc 1\",\r\n    \"utilities\": \"Owner is responsible\",\r\n    \"pet\": \"Allowed\",\r\n    \"income\": \"3x income\",\r\n    \"size\": 88,\r\n    \"school\": 1200,\r\n    \"bus\": 800,\r\n    \"restaurant\": 1500\r\n  }\r\n}\r\n",
                "form": []
            }
        },
        {
            "_id": "b1d350d0-accb-4f34-a0b9-f7f077a6e1db",
            "colId": "17944e97-6c9f-49f6-a3d3-e519afe34f03",
            "containerId": "",
            "name": "Delete Post",
            "url": "",
            "method": "GET",
            "sortNum": 210000,
            "created": "2024-09-26T11:28:15.636Z",
            "modified": "2024-09-26T11:28:15.636Z",
            "headers": []
        }
    ],
    "ref": "nKFx9uCQyvTl7Xx3rOoZ7pOnhiPBs4PZT6wUlz65qv7asJIslNCOmKo35hHVjnYoE9ExsSFqnpVsJ9VJ1NI20A"
}