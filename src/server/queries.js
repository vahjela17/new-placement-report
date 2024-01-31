import HttpError from '@wasp/core/HttpError.js'

export const getEntries = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Entry.findMany({
    where: {
      userId: context.user.id
    }
  });
}