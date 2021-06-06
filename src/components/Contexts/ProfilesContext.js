import React from 'react';
import profiles from '../../resources/profiles';

const ProfilesContext = React.createContext({
    profile: {},
    profiles: profiles,
    setProfile: () => {},
});

export const ProfilesProvider = ProfilesContext.Provider;

export default ProfilesContext;
