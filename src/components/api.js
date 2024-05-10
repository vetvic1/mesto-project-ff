const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-12',
  headers: {
    authorization: '3e7f1ddd-d9bd-4f89-89f9-39ccd7f0243e',
    'Content-Type': 'application/json'
  }
}

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }  
    return Promise.reject(`Ошибка: ${res.status}`);
}

const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
      .then(handleResponse)
  }; 

const getUserProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(handleResponse)
}; 

const updateProfile = (name, description) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    body: JSON.stringify({name: name, about: description}),    
    headers: config.headers
  })
    .then(handleResponse)
};

const updateAvatar = (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    body: JSON.stringify({avatar: avatar}),
    headers: config.headers
  })
    .then(handleResponse)
};

const uploadCard = (card) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    body: JSON.stringify(card), 
    headers: config.headers
  })
    .then(handleResponse)
};


const deleteLike = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(handleResponse)
} 

const addLike = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(handleResponse);
} 

const deleteCardServer = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(handleResponse)
};

export {getInitialCards, getUserProfile, updateProfile, updateAvatar, uploadCard, deleteLike, addLike, deleteCardServer}