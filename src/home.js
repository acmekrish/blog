import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
//    let name = 'israel';
    const [name, setName] = useState('israel');
    const [age, setAge] = useState('23');


    const [names, setNames] = useState('alex');

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

    useEffect(() => {
        console.log('Use Effect Ran');
        console.log({names});
    }, [names]);


    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    const handleDelete = (id, e) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
        console.log(e);
    }


    return ( 
        <div className="home">
            <BlogList blogs= {blogs} title = "All Blogs!" handleDelete = {handleDelete}/>
            <BlogList blogs= {blogs.filter ((blog) => blog.author === 'isaac')} title = "Mario's Blogs"/>
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={(e) => {handleClick(e)}}>Click Me</button>
            <button onClick={(e) => {
                handleClickAgain('patricia', e)
            }}>Click Me Again</button>
            <button onClick={() => setName('israel')}> Change Name</button>
        </div>
     );
}
 
export default Home;