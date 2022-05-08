import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='container row row-cols-1 row-cols-lg-1'>
            <div style={{fontFamily:'baloo2,cursive'}} className='mt-5'>
                <h5>What's defference between JavaScript and Node.js ?</h5>
                <small>Ans: JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</small>
            </div>
            <div style={{fontFamily:'baloo2,cursive'}} className='mt-5'>
                <h5>What's differences between SQL and NoSQL databases ?</h5>
                <small>Ans: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</small>
            </div>
            <div style={{fontFamily:'baloo2,cursive'}} className='mt-5'>
                <h5>When should you use nodejs and when should you use mongodb ?</h5>
                <small>Ans: MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js. Node.js is a Javascript-based environment that is easily understood by most of the browsers. Here, the Javascript is Server-Side instead of serving client-side. Node.js is definitely fast and it allows to explore a dynamic range of data at real-time.</small>
            </div>
            <div style={{fontFamily:'baloo2,cursive'}} className='my-5'>
                <h5>What is the purpose of jwt and how does it work ?</h5>
                <small>Ans: JWTs are used as a secure way to authenticate users and share information. Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn't been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT. <br /><br />
                
                A JWT is a  string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.<br /><br />

                Once decoded, you will get JSON strings: <br />
                1. The header and payload.<br />
                2. The signature. <br /><br />

                The JOSE header contains the type of token — JWT in this case — and the signing algorithm.<br /> 
                The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. <br /><br />

                The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </small>
            </div>
            </div>
        </div>
    );
};

export default Blogs;