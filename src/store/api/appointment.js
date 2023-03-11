import { basicRequest } from './base';

const SERVICE = '/api/admin/appointment';

export const getThisDayAppointment = async (date, token) => {
  const params = { date };
  const res = await basicRequest.get(SERVICE, {
    params,
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const getMonthAppointment = async (date, token) => {
  const params = { date };
  const res = await basicRequest.get(`${SERVICE}/daily`, {
    params,
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
