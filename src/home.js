import { useState } from "react";

const Home = () => {
//    let name = 'israel';
    const [name, setName] = useState('israel');
    const [age, setAge] = useState('23');
    const [blogs, setBlogs] = useState ([
        {title: 'My New Site', body: 'lorem ipsum...', author: 'israel', id: 1},
        {title: 'My Welcome', body: 'lorem ipsum...', author: 'alex', id: 2},
        {title: 'React Tips', body: 'lorem ipsum...', author: 'isaac', id: 3},
    ]);

    const handleClick = () => {
//        name = 'alex';
//        console.log(name);
        setName('alex');
        setAge(45);
    }


    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
        {blogs.map((blog) => (
            <div className = "blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            </div>
        ))}
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {
                handleClickAgain('patricia', e)
            }}>Click Me Again</button>
        </div>
     );
}
 
export default Home;