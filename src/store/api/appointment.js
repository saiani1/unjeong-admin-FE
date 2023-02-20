import { basicRequest } from './base';

const SERVICE = '/api/admin/appointment';

export const getTodayAppointment = async date => {
  const res = await basicRequest.get(`${SERVICE}/${date}`);
  return res;
};

export const getMonthAppointment = async (date, token) => {
  const res = await basicRequest.get(`${SERVICE}/daily?date=${date}`, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const getRequireContactCustomer = async () => {
  const res = await basicRequest.get(`${SERVICE}/require-contact`);
  return res;
};
