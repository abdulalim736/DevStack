import React from 'react';
import type { iDeveloper } from '../../devtype';

const DeveloperStack = ({ Developers }: { Developers: iDeveloper[] }) => {
    console.log(Developers, 'developers from DeveloperStack');

    return 
        <div>
             {
                Developers.map((developer) => {

                    return <div>
                        { developer.id}
                    </div>

                    
                })

                

            }


        </div>
    
};

export default DeveloperStack;