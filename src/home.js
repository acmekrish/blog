const Home = () => {

    const handleClick = (e) => {
        console.log('hello boys', e)
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {
                handleClickAgain('patricia', e)
            }}>Click Me Again</button>
        </div>
     );
}
 
export default Home;