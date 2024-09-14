import { people } from './data.js';

const data = [
  {
    id: 1,
    name: 'John',
    address: {
      street: '123 Main St',
      city: 'New York',
      postalCode: {
        code: '10001',
        additionalInfo: {
          deliveryInstructions: 'Leave at the door',
        },
      },
    },
    friends: [
      {
        id: 101,
        name: 'Alice',
        address: {
          street: '456 Elm St',
          city: 'Los Angeles',
          postalCode: {
            code: '90001',
            additionalInfo: null,
          },
        },
      },
      {
        id: 102,
        name: 'Bob',
        address: {
          street: '789 Oak St',
          city: 'Chicago',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Jane',
    address: {
      street: '321 Maple St',
      city: 'Boston',
      postalCode: null,
    },
    friends: null,
  },
];

console.log(people?.images?.[0]?.small?.url ?? 'not found');
