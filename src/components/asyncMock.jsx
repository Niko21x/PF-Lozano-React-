// asyncMock.js
const products = [
    {
        id: 1,
        marca: "Fender",
        modelo: "Stratocaster",
        precio: 1000,
        imagen: "/img/fender.png",
        descripcion: "La Fender Stratocaster es una guitarra eléctrica diseñada por Leo Fender, Bill Carson, George Fullerton y Freddie Tavares en 1954.",
        category: "fender", 
    },
    {
        id: 2,
        marca: "Gibson",
        modelo: "Les Paul",
        precio: 1500,
        imagen: "/img/gibson.png",
        descripcion: "La Gibson Les Paul es una guitarra eléctrica de cuerpo sólido que fue vendida por primera vez por la corporación Gibson Guitar en 1952.",
        category: "gibson", 
    },
    {
        id: 3,
        marca: "Ibanez",
        modelo: "RG550",
        precio: 800,
        imagen: "/img/ibanez.png",
        descripcion: "La Ibanez RG550 es conocida por su alta jugabilidad y versatilidad tonal, lo que la hace ideal para una variedad de estilos de música.",
        category: "Ibanez", 
    },
    {
        id: 4,
        marca: "ESP",
        modelo: "EC-1000",
        precio: 1200,
        imagen: "/img/esp.png",
        descripcion: "La ESP EC-1000 ofrece un tono increíble y una sensación suave, lo que la convierte en una de las mejores guitarras eléctricas de su rango de precio.",
        category: "ESP", 
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category.toLowerCase() === categoryId.toLowerCase()));
        }, 500);
    });
};