import bcrypt from 'bcrypt';

export const encryptPassword = async (password: string) => {
  const passwordEncriptada = await bcrypt.hash(password, 10);

  return passwordEncriptada;
};
