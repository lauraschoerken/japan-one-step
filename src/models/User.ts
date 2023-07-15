export interface User {
	id: string
	token?: string
	name: string
	email: string
}

export interface PostUser {
	name: string
	email: string
}

export interface userRole {
	idRole: string
	role: string
	permissions: string[]
	isAcademicsRequired: boolean
}
