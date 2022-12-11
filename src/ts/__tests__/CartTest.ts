import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie'

test('',() => {
    const cart = new Cart();
    const expected = cart.items.length
    expect(expected).toBe(0)
});

test('add a new items to a cart',()=>{
    const cart = new Cart();
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    cart.add(book);
    const expected = cart.items;
    const recieved = [book];
    expect(expected).toEqual(recieved)
})
test('should total cost (excluding discount)',()=> {
    const cart = new Cart();
    
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    cart.add(book);
    cart.add(musicAlbum);
    expect(cart.getTotalCostExcludingDiscount()).toBe(2900)
})
test('should total cost (with discount)',()=> {
    const cart = new Cart();
    
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    cart.add(book);
    cart.add(musicAlbum);
    expect(cart.getTotalCostIncludingDiscount(10)).toBe(2610)
})
test('should remove an object from the array by the passed id',() =>{
    const cart = new Cart();
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    const movie = new Movie(1002, '', 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 200);

    cart.add(book);
    cart.add(movie);
    cart.add(musicAlbum);
    cart.getDeleteItem(1001);
    expect(cart.items).toEqual([movie, musicAlbum])
})
