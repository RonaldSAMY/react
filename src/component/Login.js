import React,{useState} from 'react';

const Login = () => {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [httpOnProcess,setProcess] = useState(false)
    const [errors,setErrors] = useState([])

    const submitBtn = {
        border:'0.6px solid rgba(181,201,230,0.4)',
        boxShadow: '0px -1px 15px -6px rgba(181,201,230,1)',
    }


    const submit = () => {

        setProcess(true) 
        // signIn(username,password)
        // .then(res=>{
        //     setProcess(false)
        //     console.log(res.data)
        //     if(res.data.token !== undefined){
        //         dis(SignIn(res.data.token))
        //         dis(checkUser())
        //     }          
        //    // return <Redirect to='/available'></Redirect>
        // })
        // .catch(err=>{
        //     setProcess(false)
        //     setErrors([...errors,'Username ou mdp n\'est pas bon'])
        // })
    }

    const checkSignIn = () =>{
        setErrors([])
        if(username.length === 0){
            setErrors([...errors,'Username doit pas être vide'])
        }

        if(password.length === 0){
            setErrors([...errors,'Mot De Pass doit pas être vide'])
        }
        if(password.length !== 0 && username.length !== 0) {
            submit()
        }
    }



    const Errors = () => {
        if(errors.length !== 0) {
            return(
                <ul>
                    {errors.map((e,idx)=>{
                        return(<li key={idx}>{e}</li>)
                    })}
                </ul>
            )
        } else {
            return (<div></div>)
        }
    }

    const Button = () => {
        if(httpOnProcess) {
            return (
                <button className='btn col-4 mx-auto' style={submitBtn} disabled>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </button>
            )
        } else {
            return(
                <button className='btn col-4 mx-auto' style={submitBtn} onClick={checkSignIn}>
                    Login
                </button>
            )
        }
    }

    return (
        <div className='mt-5'>
            <h1 className='text-center'>Connectez vous pour voir les idées</h1>
            {Errors()}
            <form className='col-5 mx-auto'>
                <div class="form-group">
                    <label for="email">Adresse Email</label>
                    <input type="email" class="form-control" id="email" placeholder="E-mail" value={username} onChange={ event => setUsername(event.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Mot De Passe" value={password}
                     onChange={event => setPassword(event.target.value)}/>
                </div>
                <div className='mt-5 row '>
                    {Button()}
                </div>
                {/* <div className='row mx-auto'>
                    <button type="submit" class=" col-2 btn btn-outline-success text-center mt-3">Login</button>
                </div> */}
            </form>
        </div>
    );
}

export default Login;
