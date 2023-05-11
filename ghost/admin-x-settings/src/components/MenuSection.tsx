import React from 'react';
import SettingGroupHeader from './SettingGroupHeader';

interface Props {
    name?: string;
    children?: React.ReactNode;
}

const MenuSection: React.FC<Props> = ({ name, children }) => {
    return (
        <>
            {name && <SettingGroupHeader name={name} />}
            {children &&
                <ul className="mt-[-8px] mb-10">
                    {children}
                </ul>
            }
        </>
    );
}

export default MenuSection;