import { classNames } from '../classNames';

it("should accept any number of arguments ", () => {
    const result1 = classNames('dog', 'cat');
    const result2 = classNames('dog', 'cat', 'cow');

    expect(result1).toBe('dog cat');
    expect(result2).toBe('dog cat cow');
});

it("should return pure string if no args is passed", () => {
    const result = classNames();

    expect(result).toBe('');
});

it("should ignore args that are not obj or string", () => {
    const result = classNames([], 10, () => {});

    expect(result).toBe('');
});

it("if arg is a string it appends in returned answer", () => {
    const result = classNames('tree', 'house');

    expect(result).toBe('tree house');
});

it("if arg is an object its key appends in returned answer if its value 'truthy'", () => {
    const result = classNames({ tree: true, house: 0, winter: '', summer: 1 });

    expect(result).toBe('tree summer');
});
