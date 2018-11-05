import React, {Component} from "react";

export default ({isLoading, error}) => {
    if (isLoading) {
        return <div>😆~~，Component is Loading.</div>;
    } else if (error) {
        return <div>😢~~，Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
};
