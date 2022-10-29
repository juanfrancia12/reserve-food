// * INTERFACE

export interface USERTYPE {
  id: number
  name: string
  permissions: string[]
  roles: string[]
}

// * USUSARIO

export const USER: USERTYPE = {
  id: 1,
  name: "Usuario",
  permissions: [],
  roles: [],
}

// * ROLES

export const USER_STUDENT: USERTYPE = {
  id: 1,
  name: "Usuario rol estudiante",
  permissions: [],
  roles: ["student"],
}

export const USER_PROFESSOR: USERTYPE = {
  id: 1,
  name: "Usuario rol docente",
  permissions: [],
  roles: ["professor"],
}

export const USER_OBU_MANAGER: USERTYPE = {
  id: 1,
  name: "Usuario rol encargado de OBU",
  permissions: [],
  roles: ["obu-manager"],
}

// * PERMISOS

export const USER_OBU_MANAGER_PERMISSIONS: USERTYPE = {
  id: 1,
  name: "Usuario rol encargado de OBU y permiso para crear, editar, eliminar y actualizar",
  permissions: ["food-create", "food-edit", "food-delete", "food-update"],
  roles: ["obu-manager"],
}

export const DATA_USER_BACKEND = USER

// *** VERIFICAR TIPO DE USUARIO

export const isUser = !!DATA_USER_BACKEND

export const isUser_student =
  isUser && DATA_USER_BACKEND.roles.includes("student")

export const isUser_professor =
  isUser && DATA_USER_BACKEND.roles.includes("professor")

export const isUser_obu_manager =
  isUser && DATA_USER_BACKEND.roles.includes("obu-manager")

export const isUser_food_create =
  isUser &&
  isUser_obu_manager &&
  DATA_USER_BACKEND.permissions.includes("food-create")

export const isUser_food_edit =
  isUser &&
  isUser_obu_manager &&
  DATA_USER_BACKEND.permissions.includes("food-edit")

export const isUser_food_delete =
  isUser &&
  isUser_obu_manager &&
  DATA_USER_BACKEND.permissions.includes("food-delete")

export const isUser_food_update =
  isUser &&
  isUser_obu_manager &&
  DATA_USER_BACKEND.permissions.includes("food-update")

// export const USER_ANALYTICS: USERTYPE = {
//   id: 1,
//   name: "Usuario permiso analisis",
//   permissions: ["analize"],
//   roles: [],
// }

/*
const ADMIN_ANALYTICS = ["admin", "analize"];

const isUser = (USER: USERTYPE) => !!USER;
const isUser_admin = !!USER_ADMIN && USER_ADMIN.roles.includes("admin");
const isUser_analize =
  !!USER_ANALYTICS && USER_ANALYTICS.permissions.includes("analize");
const isUser_admin_analize =
  !!USER_ADMIN_ANALYTICS &&
  USER_ADMIN_ANALYTICS.permissions.includes("analize") &&
  USER_ADMIN_ANALYTICS.roles.includes("admin");

console.log(isUser(USER));
console.log({ isUser_admin });
console.log({ isUser_analize });
console.log({ isUser_admin_analize });

*/
