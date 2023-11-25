import { prismaORM } from "../db/config.js";



export async function createUser(name, email, password, image) {
  const role = await prismaORM.role.create({
    data: {
      name: 'USER_ROLE',
    },
  });

  const user = await prismaORM.user.create({
    data: {
      name,
      email,
      password,
      image, 
      roleId: role.id, 
    },
  });

  console.log('User Created', user);
}

createUser()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prismaORM.$disconnect();
  });
