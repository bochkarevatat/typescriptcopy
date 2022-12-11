import Movie from '../domain/Movie';

test('correctly create a class object',() => {
const expected = new Movie(1002, '', 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 200);
const recieved = {
        id: 1002,
        name: '',
        author: 'Мстители',
        year: 2012,
        country: 'США',
        tagline: 'Avengers Assemble!',
        genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
        length: 137,
        price: 200
  }; 
expect(expected).toEqual(recieved)
})