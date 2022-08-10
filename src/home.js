import { useState, /*useEffect */} from "react";
import BlogList from "./BlogList";
import useFetch from './useFetch';
const Home = () => {
//    let name = 'israel';
    const [name, setName] = useState('israel');
    const [age, setAge] = useState('23');
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
   // const [isPending, setIsPending] = useState(true);
   // const [error, setError] = useState (null);


    //const [names, setNames] = useState('alex');

   // const [blogs, setBlogs] = useState ( null
       // [{title: 'My New Site', body: 'lorem ipsum...', author: 'israel', id: 1},
      //  {title: 'My Welcome', body: 'lorem ipsum...', author: 'alex', id: 2},
      //  {title: 'React Tips', body: 'lorem ipsum...', author: 'isaac', id: 3},]
   // );

    const handleClick = () => {
//        name = 'alex';
//        console.log(name);
        setName('alex');
        setAge(45);
    }



    // useEffect(() => {
    //     setTimeout(()=> {
    //     fetch('http://localhost:8000/blogs')
    //     .then(res => {
    //         if(!res.ok) {
    //             throw Error('Could not resolve data')
    //         }
    //         return res.json();
    //     })
    //     .then( data => {
    //         console.log(data);
    //         setBlogs(data)
    //         setIsPending(false)
    //         setError(null);
    //     })
    //     .catch(err => {
    //         setIsPending(false);
    //         setError(err.message);
    //         console.log(err.message);
    //     })
    // }, 1000)
    //   //  console.log('Use Effect Ran');
    //    // console.log({names});
    // }, [/*names*/]);


    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

   /* const handleDelete = (id, e) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
        console.log(e);
    } */

     


    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs= {blogs} title = "All Blogs!" /*handleDelete = {handleDelete}*//>}
            {blogs && <BlogList blogs= {blogs.filter ((blog) => blog.author === 'isaac')} title = "Mario's Blogs"/> }
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