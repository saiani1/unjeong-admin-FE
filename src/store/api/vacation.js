import { basicRequest } from './base';

const SERVICE = '/api/admin/vacation';

export const getVacationDays = async () => {
  const res = await basicRequest.get(SERVICE);
  return res;
};

export const addVacationDay = async (date, token) => {
  const params = { vacationDate: date };
  const res = await basicRequest.post(SERVICE, params, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const cancelVacationDay = async (date, token) => {
  const params = { vacationDate: date };
  const res = await basicRequest.delete(SERVICE, {
    data: params,
    headers: {
      Authorization: token,
    },
  });
  return res;
};
