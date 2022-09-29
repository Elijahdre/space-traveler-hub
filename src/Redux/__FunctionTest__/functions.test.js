import Reducer, { fetchRockets } from '../rocket/rocketSlice';

const payload = [
  {
    booked: false,
    description:
      'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    flickr_images: [
      'https://imgur.com/DaCfMsj.jpg',
      'https://imgur.com/azYafd8.jpg',
    ],
    id: 1,
    rocket_name: 'Falcon 1',
  },
];

describe('testing for slice functions', () => {
  const initialState = {
    rockets: [],
    status: 'idle',
  };

  const pendingState = { type: fetchRockets.pending };
  const fulfilledState = { type: fetchRockets.fulfilled, payload };

  it('Test for thunk pending state', () => {
    expect(Reducer(initialState, pendingState)).toEqual({
      rockets: [],
      status: 'pending',
    });
  });
  it('Test for thunk fulfiled state', () => {
    expect(Reducer(initialState, fulfilledState)).toEqual({
      rockets: payload,
      status: 'idle',
    });
  });
});
