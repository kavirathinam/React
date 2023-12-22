import React,{useRef} from 'react';
const LoginForm=()=>{
    //initialize the ref
    const emailRef=useRef();
    const passwordRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
       //accessing the data
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        //tranforming data
        const formData={
            email,password,
        };
        //console log
        console.log(formData);
        //clearing the value
        emailRef.current.value="";
        passwordRef.current.value="";
        //focusing the email input box
        emailRef.current.focus();
        // passwordref.current.focus();
    };
return(
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="email" placeholder="email" ref={emailRef}/>
            </div>
            <div>
                <input type="password" placeholder="password" ref={passwordRef}/>
            </div>
            <button>LOGIN</button>
        </form>
    </div>
)
};
export default LoginForm;