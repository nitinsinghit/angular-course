describe('Factory: Author', function () {

  // Step 1: define module we are testing
  beforeEach(module('myAppContact'));

  // Step 2: define properties we are testing
  var myAuthor;

  // Step 3: Angular Injection
  beforeEach(inject(function (Author) {
    myAuthor = Author;
    myAuthor.init({
      name: 'Test User',
      email: 'test@test.com',
      phone: '3331118888'
    });
  }));

  // Step 4: Make tests
  it('should be defined', function () {
    expect(myAuthor).toBeDefined();
  });

  it('name should be "Test User"', function () {
    expect(myAuthor.getName()).toBe('Test User');
  });
  it('email should be "Test User"', function () {
    expect(myAuthor.getEmail()).toBe('test@test.com');
  });
  it('phone should be "Test User"', function () {
    expect(myAuthor.getPhone()).toBe('3331118888');
  });

  it('age should be "19"', function () {
    myAuthor.age = 23;
    myAuthor.decreaseAge();
    myAuthor.decreaseAge();
    myAuthor.decreaseAge();
    myAuthor.decreaseAge();
    myAuthor.increaseAge();
    myAuthor.decreaseAge();
    expect(myAuthor.getAge()).toBe(19);
  });

});
