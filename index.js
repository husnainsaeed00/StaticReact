// function NavBar(){
//     return(
//         <nav>
//             <h2>this is the NavBar in the React</h2>
//         </nav>
//     )
// }

// ReactDOM.render(<NavBar/>,document.getElementById('root'))

// const h1 =document.createElement('h1')
// h1.className='header'
// h1.textContent = 'this is written with the help of valnilla JavaScript'
// document.getElementById('root').append(h1) 

const page = (
    <div>
        <h1>React Logo</h1>
        <br/>
       <h1>Fun Facts About React</h1> 
       <br></br>
       <ul>
            <li>here is the first one </li>
            <li>here is the first one </li>
            <li>here is the first one </li>
            <li>here is the first one </li>
            <li>here is the first one </li>
       </ul>
    </div>
);

ReactDOM.render(page, document.getElementById('root'));
