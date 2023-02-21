/* eslint-disable prefer-destructuring */
import dayjs from 'dayjs';

function transform({ TODAY }) {
  const firstDate = dayjs(TODAY).startOf('month').format('D d').split(' ');
  const lastDate = dayjs(TODAY).endOf('month').format('D d').split(' ');
  const dateArr = [];
  let date = 1;

  for (let i = 0; i < 6; i += 1) {
    const tmpArr = [];
    let firstWeek = i === 0 ? firstDate[1] : 0;

    if (firstWeek > 0) {
      while (firstWeek > 0) {
        tmpArr.push('00');
        firstWeek -= 1;
        if (firstWeek === 0) break;
      }
      firstWeek = firstDate[1];
    }

    let isLastDate = false;

    for (let j = 0; j < 7 - firstWeek; j += 1) {
      if (date < 10) tmpArr.push(`0${date}`);
      else tmpArr.push(String(date));
      if (!isLastDate) {
        if (date === Number(lastDate[0])) {
          isLastDate = true;
          date = 0;
        } else {
          date += 1;
        }
      }
    }
    dateArr.push(tmpArr);
    if (date === 0) break;
  }
  return dateArr;
}

export default transform;
