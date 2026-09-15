import React from 'react';

const TechnologyCard = () => {
    return (
        <div className='container grid grid-cols-3 gap 4'>

                            <div className='flex justify-between items-center'>
                                {developer.icon} {developer.badge}
                            </div>
                            <p>{developer.name}</p>
                            <p>{developer.description}</p>
                            <div className='flex justify-between items-center'>
                                {developer.category}{developer.difficulty}{developer.rating}
                            </div>
                            <div>
                                <button> Add to Stack</button>
                            </div>

                        </div>
    );
};

export default TechnologyCard;