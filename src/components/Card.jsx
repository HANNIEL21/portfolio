import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/HANNIEL21/repos')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className='cards'>
                {
                    data.map(item => (
                            item.stargazers_count !== 0 ? (
                                <div className="card" key={item.id}>
                                    <div className="card__img">
                                        <img src={item.owner.avatar_url} alt="avatar" />
                                    </div>
                                    <div className="card__body">
                                        <h3 className='card__title'>{item.name}</h3>
                                        <p className='card__text'>{item.description}</p>
                                    </div>
                                    <div className="card__footer">
                                        <a href={`https://hanniel21.github.io/${item.name}/`} target='blank'>
                                            <button className='btn btn-primary'>View</button>
                                        </a>
                                        <a href={item.html_url} target='blank'>
                                            <button className='btn btn-primary'>Github</button>
                                        </a>
                                    </div>
                                </div>
                            ) : null
                        ))
                }
            </div>
        </>
    )
}

export default Card