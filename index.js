//RESUELVE LOS EJERCICIOS AQUI
//1) Cuadrado de cada elemento (Map)
const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = (numbers) =>{
    return numbers.map(numero => Math.pow(numero, 2));
}
const result1 = elevados(numbers)
console.log(result1);

//2) template string
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const generarFrase = (foodList)=>{
        return foodList.map(food =>{
    switch (food) {
        case 'Pizza':
            return 'Como soy de Italia, amo comer Pizza';
        case 'Ramen':
            return 'Como soy de Japón, amo comer Ramen';
        case 'Paella':
            return 'Como soy de Valencia, amo comer Paella';
        case 'Entrecot':
            return 'Aunque no como carne, el Entrecot es sabroso';
        default:
            return 'No he encontrado coincidencia';
        }
    });
}
const result2 = generarFrase(foodList);
console.log(result2)

//3)Acceder al objeto del array

const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

  const crearFrases = (staff)=>{
        return staff.map(personal=>{
        return `${personal.name} es ${personal.role} y le gusta ${personal.hobbies[0]} y ${personal.hobbies[1]}`;
  })
}
const result3 = crearFrases(staff)
console.log(result3);

//4) Impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosImpares = (numbers2)=>{
    const impares = numbers2.filter(numero => numero % 2 !== 0);
    return impares;
}
const result4 = numerosImpares(numbers2)
console.log(result4);

//Filtrar platos veganos y mostrar sentencia

const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

const filtraVeganos = (foodList2) => {
    return foodList2
        .filter(food => food.isVeggie === true)
        .map(food => `Que rico ${food.name} me voy a comer!`);
        
    }
    
const result5 = filtraVeganos(foodList2);
console.log(result5);

//6) 
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
const calcularPrecio = (inventory)=>{
    const mayores = inventory.filter(producto => producto.price > 300);
    return mayores.map(producto => producto.name);
}
const result6 = calcularPrecio(inventory);
console.log(result6)

//7) Multiplicacion 
const numeros3 = [39, 2, 4, 25, 62];

const multiplicarNumeros = (numeros3)=>{
    multiplicacion = numeros3.reduce((count, numero) => count *= numero);
    return multiplicacion;
}
const result7 = multiplicarNumeros(numeros3);
console.log(result7);

//8)Concatenar para generar frase
const sentenceElements = [
    'Me',
    'llamo',
    'Luis',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];

  const concatenarPalabra = (sentenceElements)=>{   
    fraseCompleta = sentenceElements.reduce((count, frase)=>count +' '+frase )
    return fraseCompleta.trim();
  }
  const result8 = concatenarPalabra(sentenceElements);
  console.log(result8);

//9)Monto total de code

const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];

  const calcularMonto = (books)=>{
    return books.reduce((count,book)=>{
        if(book.category === 'code'){
            count += book.price;
        }
        return count;
    }, 0);
  }
  const result9 = calcularMonto(books);
  console.log(result9)