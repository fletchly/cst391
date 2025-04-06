export const usersQueries = {
    // Create user
    createUser: `INSERT INTO onotes.users (username, password, role) VALUES (?, ?, ?);`,

    // Read all users
    readUsers: `SELECT * FROM onotes.users;`,

    // Read user by id
    readUserById: `SELECT * FROM onotes.users WHERE user_id = ?;`,

    // Read user by username
    readUserByUsername: `SELECT * FROM onotes.users WHERE username = ?;`,

    // Update user
    updateUser: `UPDATE onotes.users SET username = ?, password = ?, role = ? WHERE user_id = ?;`,

    // Delete user
    deleteUser: `DELETE FROM onotes.users WHERE user_id = ?;`,
};

export const rolesQueries = {
    // Create role
    createRole: `INSERT INTO onotes.roles (role_name) VALUES (?);`,

    // Read all users
    readRoles: `SELECT * FROM onotes.roles;`,

    // Read user by ID
    readRoleById: `SELECT * FROM onotes.roles WHERE role_id = ?;`,

    // Update role
    updateRole: `UPDATE onotes.roles SET role_name = ? WHERE role_id = ?;`,

    // Delete role
    deleteRole: `DELETE FROM onotes.roles WHERE role_id = ?;`,
};