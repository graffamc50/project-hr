



import React from "react";

// core components
import IndexNavbar from '../components/IndexNavbar.js';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer.js';

// sections for demo sheet

import Signup from "./Pieces/Signup.js";


export default function Index() {
    React.useEffect(() => {
        document.body.classList.toggle("index-page");
      // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("index-page");
        };
    }, []);
    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
            <PageHeader />
            <div className="main" id="signUp">
                <Signup />
            </div>
            <Footer />
            </div>
        </>
    );
}
