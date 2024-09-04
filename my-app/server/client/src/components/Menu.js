import { useState,useEffect } from 'react';


const Menu = () => {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // sending resquest to backend to get menu
        fetch('/menu')
        .then(response => {
            console.log('Response status:', response.status);  // Confirm status is 200
            console.log('Response content-type:', response.headers.get('content-type'));  // Check the content type
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // waiting for respnonse and converting to json
            return response.json(); 
        })
        .then (data => {
            // save the menu items in our components state
            console.log(data); 
            setMenuItems(data);
        })
        .catch (error => {
            // catch any error and print the error
            console.error('Error fetching menu data', error);
        });
    }, []); // The empty array means this effect only runs once when the component loads

    return (
        <div className="menu-container">
            <h1> Our Menu update</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item._id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Menu;