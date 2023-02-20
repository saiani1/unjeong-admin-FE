import { basicRequest } from './base';

const SERVICE = '/api/admin/vacation';

export const getVacationDays = async date => {
  const res = await basicRequest.get({ SERVICE }, { date });
  return res;
};

export const addVacationDay = async date => {
  const res = await basicRequest.post({ SERVICE }, { date });
  return res;
};

export const cancelVacationDay = async date => {
  const res = await basicRequest.delete({ SERVICE }, { date });
  return res;
};
