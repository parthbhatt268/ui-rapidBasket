import { rest } from 'msw';

export const handlers = [
  rest.get('https://api-rapidbasket.onrender.com/api/v1/rapidBasket/getfooditems', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 'success',
        data: {
          user: [
            {
              _id: '6416fe71b640ff8f1a621a6c',
              name: 'Hyderabadi Veg Biryani',
              category: 'Indian',
              price: 180,
              description: 'This Hyderabadi Veg Biryani is an authentic Indian vegetarian recipe packed full of your favorite rice, veggies, and spices.',
              __v: 0,
            },
            {
              _id: '6417006d3b0bd75c06fbb21f',
              name: 'Paneer Tikka Masala',
              category: 'Indian',
              price: 180,
              description: 'Description for Paneer Tikka Masala',
              __v: 0,
            },
            // Add more items as needed
          ],
        },
      })
    );
  }),
];
