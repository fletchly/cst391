import {execute} from "../service/mysql.connector";
import {OkPacket} from 'mysql'
import {rolesQueries, usersQueries} from "./auth.queries";
import {Role, User} from "./auth.model";

// === Users ===

// Create user
export const createUser = async (user: User) => {
    return execute<OkPacket>(usersQueries.createUser, [user.username, user.password, user.role]);
};

// Read all users
export const readUsers = async () => {
    return execute<User[]>(usersQueries.readUsers, []);
};

// Read user by ID
export const readUsersById = async (userId: number) => {
    const result = await execute<User[]>(usersQueries.readUserById, [userId]);
    return result.length > 0 ? result[0] : null;
};

export const readUsersByUsername = async (username: string) => {
    const result = await execute<User[]>(usersQueries.readUserByUsername, [username]);
    return result.length > 0 ? result[0] : null;
}

// Update user
export const updateUser = async (user: User) => {
    return execute<OkPacket>(usersQueries.updateUser, [user.username, user.password, user.role, user.userId]);
};

// Delete user
export const deleteUser = async (userId: number) => {
    return execute<OkPacket>(usersQueries.deleteUser, [userId]);
};

// === Roles ===

// Create role
export const createRole = async (role: Role)=> {
    return execute<OkPacket>(rolesQueries.createRole, [role.roleName]);
};

// Read all roles
export const readRoles = async () => {
    return execute<Role[]>(rolesQueries.readRoles, []);
};

// Read role by ID
export const readRoleById = async (roleId: number) => {
    return execute<Role>(rolesQueries.readRoleById, [roleId]);
};

// Update role
export const updateRole = async (role: Role) => {
    return execute<OkPacket>(rolesQueries.updateRole, [role.roleName, role.roleId]);
};

// Delete role
export const deleteRole = async (roleId: number) => {
    return execute<OkPacket>(rolesQueries.deleteRole, [roleId]);
};