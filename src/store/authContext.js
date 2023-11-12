import React from 'react'
import { useState } from 'react'

export const authContext = React.createContext({
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
})

export const AuthContextProvider = (props) => {
	const [token, setToken] = useState(null)

	const userIsLoggedIn = !!token

	const loginHandler = (token) => {
		setToken(token)
	}

	const logoutHandler = () => {
		setToken(null)
	}

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	}

	return (
		<authContext.Provider value={contextValue}>
			{props.children}
		</authContext.Provider>
	)
}
