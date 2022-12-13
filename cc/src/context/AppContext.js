import React from "react";

const AppContext = React.createContext({});
AppContext.displayName="AppContext"
export default AppContext;
function AppProvider(props) {
    return <AppContext.Provider {...props} />
}

export {AppProvider}