import React from 'react';

const FetchError = ({
    error,
    onRetry
}) => (
    <div>
        <p>Couldn't Fetch Todos. {error}</p>
        <button onClick={onRetry}>Retry</button>
    </div>
)

export default FetchError;