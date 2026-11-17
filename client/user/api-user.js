const API_BASE = '/api/users';

const handleResponse = async (response) => {
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to parse response JSON:', error);
        throw error;
    }
};

const handleError = (error) => {
    console.error('API call failed:', error);
    throw error;
};

const create = async (user) => {
    try {
        const response = await fetch(`${API_BASE}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        return await handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};

const list = async (signal) => {
    try {
        const response = await fetch(`${API_BASE}`, {
            method: 'GET',
            signal: signal,
        });
        return await handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};

const read = async ({ userId }, { t }, signal) => {
    try {
        const response = await fetch(`${API_BASE}/${userId}`, {
            method: 'GET',
            signal: signal,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${t}`,
            },
        });
        return await handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};

const update = async ({ userId }, { t }, user) => {
    try {
        const response = await fetch(`${API_BASE}/${userId}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${t}`,
            },
            body: JSON.stringify(user),
        });
        return await handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};

const remove = async ({ userId }, { t }) => {
    try {
        const response = await fetch(`${API_BASE}/${userId}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${t}`,
            },
        });
        return await handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};

export { create, list, read, update, remove };