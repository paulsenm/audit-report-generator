import { useState } from 'react';

import EnabledNoLogin from './components/EnabledNoLogin';
import DisabledNoLogin from './components/DisabledNoLogin';
import ComputerNoLogin from './components/ComputerNoLogin';
import NonExpirePW from './components/NonExpirePW';
import AdminAccounts from './components/AdminAccounts';
import SecurityGroups from './components/SecurityGroups';
import DistributionLists from './components/DistributionLists';

function App(){
    const [activeList, setActiveList] = useState(null);

    const handleCategoryClick = (category) => {
        setActiveList(category);
    }

    return (
        <div className=' nw-container'>
            <div className='display-4 text-center nw-header'>
                NWYC Audit
            </div>
            <div className='row btns-row'>
                <div className='col btns-col'>
                    <div className='category-btns'>
                    <button className='btn btn-warning m-2 category-btn' onClick={() => handleCategoryClick('EnabledNoLogin')}>Enabled No Logins 90 Days</button>
                    <button className='btn btn-warning m-2 category-btn' onClick={() => handleCategoryClick('DisabledNoLogin')}>Disabled No Logins 90 Days</button>
                    <button className='btn btn-warning m-2 category-btn' onClick={() => handleCategoryClick('ComputerNoLogin')}>Computers w/ No Logins 90 Days</button>
                    <button className='btn btn-danger m-2 category-btn' onClick={() => handleCategoryClick('NonExpirePW')}>Non-Expiring Passwords</button>
                    <button className='btn btn-danger m-2 category-btn' onClick={() => handleCategoryClick('AdminAccounts')}>Admin Accounts</button>
                    <button className='btn btn-primary m-2 category-btn' onClick={() => handleCategoryClick('SecurityGroups')}>Security Groups</button>
                    <button className='btn btn-primary m-2 category-btn' onClick={() => handleCategoryClick('DistributionLists')}>Distribution Lists</button>
                    </div>
                    {activeList === 'EnabledNoLogin' && <EnabledNoLogin />}
                    {activeList === 'DisabledNoLogin' && <DisabledNoLogin />}
                    {activeList === 'ComputerNoLogin' && <ComputerNoLogin />}
                    {activeList === 'NonExpirePW' && <NonExpirePW />}
                    {activeList === 'AdminAccounts' && <AdminAccounts />}
                    {activeList === 'SecurityGroups' && <SecurityGroups />}
                    {activeList === 'DistributionLists' && <DistributionLists />}

                </div>
            </div>
        </div>
    );
}

export default App;