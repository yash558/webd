import { React, useEffect, useState } from 'react'
import Loader from '../Loader/Loader';
const UseEffectApi = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState([]);


    const fetchData = async () => {
        const response = await fetch(" https://jsonplaceholder.typicode.com/users");
        setUser(await response.json());
    }

    const fetchImage = async () => {
        const response = await fetch('');
        const data = await response.blob();
        setImage(URL.createObjectURL(data));

    };



    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="main-content">
                    <h2>List of User's Data</h2>
                    <div className="container-fluid mt-5">
                        <div className="row text-center">

                            {
                                user.map((curElem) => {
                                    return (
                                        <div className="col-12 col-md-3 mt-5">
                                            <div className="card p-1">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="image">
                                                        <img src="https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy" alt="" className='rounded' width={135} />
                                                        <div className="ml-3 w-100">
                                                            <h4 className="mb-0 mt-3 textLeft">{curElem.name}</h4>
                                                            <div className="p-2 mt-2 d-flex rounded text-white stats flex-column">
                                                                <div className="d-flex flex-row"><span className='details'><i className="fa-regular fa-envelope"></i></span> <span className='number1'>{curElem.email}</span></div>
                                                                <div className="d-flex flex-row"><span className='details'><i className="fa-solid fa-phone"></i></span><span className='number1'>{curElem.phone}</span></div>
                                                                <div className="d-flex flex-row"><span className='details'><i className="fa-sharp fa-solid fa-globe"></i></span> <span className='number1'>{curElem.website}</span></div>
                                                                <div className="d-flex flex-row"><span className='details'><i className="fa-regular fa-building"></i></span> <span className='number1'>{curElem.company.name}</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default UseEffectApi