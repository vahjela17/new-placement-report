import HttpError from '@wasp/core/HttpError.js'

export const createEntry = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Entry.create({
    data: {
      itemNumber: args.itemNumber,
      itemName: args.itemName,
      account: args.account,
      accountNumber: args.accountNumber,
      caseStack: args.caseStack,
      caseDrop: args.caseDrop,
      btg: args.btg,
      usagePerMonth: args.usagePerMonth,
      startDate: args.startDate,
      endDate: args.endDate,
      salesRepName: args.salesRepName,
      area: args.area,
      user: { connect: { id: context.user.id } }
    }
  });
}
