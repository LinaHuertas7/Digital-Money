const API_URL = process.env.NEXT_PUBLIC_API_URL

const endPoints = {
	LOGIN_URL: `${API_URL}/login`,
	REGISTER_URL: `${API_URL}/users`,
	GET_ACCOUNT_URL: `${API_URL}/account`,
	GET_USER_URL: `${API_URL}/users/`,
}

export default endPoints
