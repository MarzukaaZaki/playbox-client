import React, { useEffect, useState } from 'react';

const Toys = () => {
    const [toys, setToys] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/all')
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            setToys(result);
        })
    },[])
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>Toy Name with Picture</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    { toys?.map( (toy)=>
                        <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={toy.img} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{toy.toyname}</div>
                                    <div className='text-sm'>{toy.name}</div>
                                    
                                </div>
                            </div>
                        </td>
                        <td>
                        {toy.category}
                            
                        </td>
                        <td>${toy.price}</td>
                        <td>{toy.quantity}</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    
                   ) }
                </tbody>
                <tfoot>
                    <tr>
                        <th>Toy Name with Picture</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default Toys;