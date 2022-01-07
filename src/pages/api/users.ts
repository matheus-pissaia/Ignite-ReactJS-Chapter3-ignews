import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Matheus' },
    { id: 2, name: 'Ana' },
    { id: 3, name: 'Maya' },
  ]

  return response.json(users)
}