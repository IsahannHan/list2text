import { createContext, useState } from 'react';
import profileList from '../../resources/profiles';

export const ProfilesContext = createContext();

const ProfilesProvider = (props) => {
    const [profiles, setProfiles] = useState(profileList);
    
    const addProfile = (profile) => {
        setProfiles([...profiles, profile]);
    };
    const removeProfile = (id) => {
        setProfiles(profiles.filter((p) => p.id === id));
    };

    return (
        <ProfilesContext.Provider value={{ profiles, addProfile, removeProfile }}>
            {props.children}
        </ProfilesContext.Provider>
    );
};

export default ProfilesProvider;