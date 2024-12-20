// import { useState } from 'react';
import frontMenu from '../assets/menu/1.png';
import backMenu from '../assets/menu/2.png';

const Menu = () => {
    // const [menuItems, setMenuItems] = useState([]);

    // useEffect(() => {
    //     // sending request to backend to get menu
    //     fetch('/menu')
    //         .then(response => {
    //             console.log('Response status:', response.status);  // Confirm status is 200
    //             console.log('Response content-type:', response.headers.get('content-type'));  // Check the content type
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             // waiting for response and converting to json
    //             return response.json();
    //         })
    //         .then(data => {
    //             // save the menu items in our component's state
    //             console.log(data);
    //             setMenuItems(data);
    //         })
    //         .catch(error => {
    //             // catch any error and print the error
    //             console.error('Error fetching menu data', error);
    //         });
    // }, []); // The empty array means this effect only runs once when the component loads

    return (
        <div id="menu" className="container mt-5">
          <h2 className="text-center mb-5">Our Menu</h2>
          <div className="row">
            <div className="menu-photos">
              <img src={frontMenu} alt="Menu front side" className="menu-photo"/>
              <img src={backMenu} alt="Menu back side" className="menu-photo"/>
            </div>
            {/* Commented out dynamic menu rendering */}
            {/* {menuItems.map(item => (
              <div key={item._id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img src={item.image || "https://via.placeholder.com/350"} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><strong>${item.price.toFixed(2)}</strong></p>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
    );
};

export default Menu;
