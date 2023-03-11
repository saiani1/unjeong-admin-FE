import { basicRequest } from './base';

const SERVICE = '/api/admin/appointment';

export const getThisDayAppointment = async (date, token) => {
  const res = await basicRequest.get(`${SERVICE}?date=${date}`, {
    headers: {
      Authorization: token,
    },
  });
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

export const getRequireContactCustomer = async token => {
  const res = await basicRequest.get(`${SERVICE}/required-contact`, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const rescheduledCustomer = async (code, token) => {
  const res = await basicRequest.post(
    `${SERVICE}/reschedule/${code}`,
    {},
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return res;
};
