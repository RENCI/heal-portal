# HEAL Portal Proof-of-Concept

# development

- clone this repo
- `$ cd ./api`
- `$ npm ci`
- `$ npm run develop`
- `$ cd ../client`
- `$ npm ci`
- `$ npm start`

api config/admin dashboard on port 1337

client application on port 3000


---

## API (Strapi)

- Users
- Content
    + Pages
    + Documents
    + ...

## Client (React)



### Auth

```
[API]                         [CLIENT]

       <--------------------  login view
              req auth
       -------------------->  - y: render app
              res auth        - n: render login

```

### Pages

```
[API]                         [CLIENT]

       <--------------------
             req pages
       -------------------->  - convert to html/ast
         res pages (as md)    - component swap (e.g., links)

```
