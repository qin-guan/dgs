import { c } from '@dgs/contracts';
import { initQueryClient } from '@ts-rest/react-query'

export const client = initQueryClient(c, {
  baseUrl: 'http://localhost:4200',
  baseHeaders: {},
});

