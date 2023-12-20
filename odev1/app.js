import axios from "axios";

const getUser = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const {data: user} = await axios(
            "https://jsonplaceholder.typicode.com/users/"+user_id
        );
        const {data: post} = await axios(
            "https://jsonplaceholder.typicode.com/posts?userId="+user_id
        );
        
        const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
            posts: post.map(post => ({
                id: post.id,
                title: post.title,
                body: post.body
            }))
        }
        
        console.log(userData);
        resolve(user,post);
    });
};

export default getUser;