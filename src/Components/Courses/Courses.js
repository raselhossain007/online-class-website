import React from 'react';
import './Courses.css'
import Course from '../../Components/Course/Course';
import fakeData from "../../fakeData"
import { useState } from 'react';
import Cart from '../../Components/Cart/Cart';

const Courses = () => {
    
    const[courses,setCourses] = useState(fakeData);

    const [cart,setCart] = useState([])

    const handleAddClick = (course) =>{
        console.log('Button Clicked', course);
        const newCart = [...cart,course];
        setCart(newCart);
    }
   
    return (
        <div className="row mt-5">
            <div className="col-8">
                <div className="row">
                    {
                        courses.map(course => <Course handleAddClick = {handleAddClick} name= {course}></Course>)
                    }
                </div>
            </div>

            <div className="col-4 cart-container">
                    <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Courses;