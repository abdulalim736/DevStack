import React, { use } from 'react';
import type { iDeveloper } from '../../devtype';
import DeveloperStack from './DeveloperStack';

interface developersProps {
    developersPromise: Promise<iDeveloper[]>;
}

const Developers = ({ developersPromise }: developersProps) => {

    const Developers = use(developersPromise);

    return (

         <div>
            <DeveloperStack Developers={Developers} />
        </div>


    );

};
export default Developers;