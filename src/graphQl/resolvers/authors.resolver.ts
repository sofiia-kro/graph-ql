import { usersRepository } from '@repositories';

const resolveAuthorsList = async () => {
  await usersRepository.getManyByFilter({});
};

const authorsResolver = { resolveAuthorsList };
export default authorsResolver;
