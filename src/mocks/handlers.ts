import { rest } from 'msw';
import { todos } from './mock';

const baseURL = process.env.REACT_APP_BASE_URL;
const delay = process.env.NODE_ENV === 'test' ? 0 : 1500;

const handlers = [
  rest.get(`${baseURL}/get`, (req, res, ctx) => {
    return res(ctx.delay(delay), ctx.status(200), ctx.json(todos));
  }),
  rest.patch(`${baseURL}/patch/:id`, (req, res, ctx) => {
    return res(
      ctx.delay(delay),
      ctx.status(200),
      ctx.json({
        status: 'success',
      }),
    );
  }),
];

export { handlers };
