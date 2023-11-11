// Дано

const users = [
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      email: 'john.doe@example.com',
      city: 'New York',
      salary: 55000
    },
    {
      id: 2,
      name: 'Alice Smith',
      age: 22,
      email: 'alice.smith@example.com',
      city: 'Los Angeles',
      salary: 48000
    },
    {
      id: 3,
      name: 'Robert Johnson',
      age: 32,
      email: 'robert.johnson@example.com',
      city: 'Chicago',
      salary: 62000
    },
    {
      id: 4,
      name: 'Emily Wilson',
      age: 25,
      email: 'emily.wilson@example.com',
      city: 'San Francisco',
      salary: 58000
    },
    {
      id: 5,
      name: 'Michael Brown',
      age: 30,
      email: 'michael.brown@example.com',
      city: 'Miami',
      salary: 60000
    }
  ];


// 1. Трансформуйте дані, так щоб кожен user мав лише поля `id`, `age`, `name` (map)

const updated = users.map(({id, age, name}) => ({
        id,
        age,
        name,
}));

console.log(updated);

// 2. В усіх користувачів день народження 🎉, додайте кожному по 1 року (map)

const newAge = updated.map(userAge => ({
    ...userAge,
    age: userAge.age + 1,
}));

console.log(newAge);

// 3. Додайте кожному користувачеві поле `birthYear` - рік його народження (залежно від віку) (map)

const userBirthYear = newAge.map (user => ({
    ...user,
    birthYear: 2023 - user.age,
}));

console.log(userBirthYear);

// 4. Знайдіть користувача з Miami (find)

const userSearch = users.find (user => user.city === "Miami");

console.log(userSearch);



