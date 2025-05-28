const menu = [
    {
        id: 1,
        image: "images/maggi1.jpg",
        name: "Maggi",
        category: "Breakfast",
        price: "30 Rs",
        Description: "A timeless comfort food, Maggi brings the perfect balance of spice and warmth. Whether it's the classic flavor or your custom creation, the soft noodles embrace the savory, tangy seasoning and its filled with some ...",
    },
    {
        id: 2,
        image: "images/Aalu pakoda.jpg",
        name: "Aloo Pakoda",
        category: "Breakfast",
        price: "30 Rs",
        Description: "Crispy on the outside, soft on the inside, Aloo Pakoda is a flavorful treat that pairs perfectly with a hot cup of tea. The spiced potato filling and the golden, crunchy coating make it a mouthwatering snack ...",
    },
    {
        id: 3,
        image: "images/chole-kulcha.jpg",
        name: "Chole Kulche",
        category: "Lunch",
        price: "35 Rs",
        Description: "Chole Kulche bursts with bold spices—tangy chickpeas simmered in masala, paired with soft, buttery kulchas. A street food favorite, it’s hearty, zesty, and full of North Indian soul and it is flabourful and some spicy....",
    },
    {
        id: 4,
        image: "images/butter naan.jpg",
        name: "Butter Naan",
        category: "Lunch",
        price: "70 Rs",
        Description: "Warm, soft, and buttery, a well-made butter naan melts in your mouth with each bite. Perfectly paired with curries, this indulgent flatbread brings together the rich flavors of Indian food and it is best combines with the Afgani Chap....",
    },
    {
        id: 5,
        image: "images/Manchurian.jpg",
        name: "Manchurian",
        category: "Evening",
        price: "50 Rs",
        Description: "Tangy, and bursting with flavor, Manchurian is a popular Indo-Chinese delicacy. Deep-fried vegetables or meat are coated in a luscious, spicy sauce that combines sweet, sour, and savory flavors, making...",
    },
    {
        id: 6,
        image: "images/pizza.jpg",
        name: "Pizza",
        category: "Lunch",
        price: "110 Rs",
        Description: "A slice of pizza is a slice of happiness—crispy crust, gooey melted cheese, and your choice of delicious toppings. The perfect balance of flavors and textures, pizza is always satisfying food and it is delecious at every time ...",
    },
    {
        id: 7,
        image: "images/Chilli patato.jpg",
        name: "Chilli potato",
        category: "Evening",
        price: "80 Rs",
        Description: "Crispy fried potatoes coated in a tangy, spicy sauce create a flavor-packed dish that’s both crunchy and fiery. With every bite, you get a perfect blend of savory heat and irresistible crunch...",
},
    {
        id: 8,
        image: "images/garlic-bread.avif",
        name: "Garlic Bread",
        category: "Evening",
        price: "90 Rs",
        Description: "Buttery, toasted, and infused with the rich aroma of garlic, garlic bread is the perfect companion to any meal. Crispy on the outside and soft on the inside, it’s a savory, satisfying snack...",
    },
    {
        id: 9,
        image: "images/Tanduri- chap.jpg",
        name: "Tandoori Chap",
        category: "Dinner",
        price: "120 Rs",
        Description: "A rustic and aromatic bread, Tandoori Chap is baked to perfection in a clay oven, giving it a smoky flavor that is hard to resist. Soft, slightly charred, and fragrant, it’s a delightful ...",
    },
    {
        id: 10,
        image: "images/chilli-paneer.avif",
        name: "Chili Paneer",
        category: "Dinner",
        price: "110 Rs",
        Description: " A beloved Indo-Chinese dish, Chili Paneer is a perfect blend of bold flavors, with crispy chunks of paneer (Indian cottage cheese) enveloped in a spicy tangy flavors—crispy paneer cubes tossed in garlic, soy, and chili sauce....",
    },
    {
        id: 11,
        image: "images/malaichap.avif",
        name: "Malai Chap",
        category: "Dinner",
        price: "110 Rs",
        Description: "Tender, juicy, and marinated to perfection, Malai Chap is a succulent treat grilled to a smoky finish. The creamy marinade infuses the chicken with rich flavors, creating a melt-in-your-mouth. Malai Chap is a delecious food and its flabour ...",

        
    },
    {
        id: 12,
        image: "images/cheese-burger.jpg",
        name: "Cheese Burger",
        category: "Dinner",
        price: "110 Rs",
        Description: "A cheese burger is a timeless classic, offering the perfect combination of a juicy, seasoned patty, melted cheese, and soft, toasted buns. The rich, savory flavors from the beef or chicken the flabour of cheese burger...",

        
    },
    {
        id: 13,
        image: "images/gulabjamun.jpg",
        name: "Gulab Jamun",
        category: "Dinner",
        price: "110 Rs",
        Description: "A classic Indian dessert, Gulab Jamun is a sweet indulgence made from soft, melt-in-the-mouth milk solids that are deep-fried to a golden perfection. Soaked in a fragrant,  each bite releases...",

        
    },
    {
        id: 14,
        image: "images/kabab.webp",
        name: "Veg Kebab",
        category: "Evening",
        price: "60 Rs",
        Description: " Veg Kebabs are an irresistible vegetarian delight, where spiced vegetables are mixed with aromatic herbs and roasted to perfection. These skewered treats are usually served with a tangy...",

        
    },
    {
        id: 15,
        image: "images/coffee.jpg",
        name: "Cold Coffee",
        category: "Lunch",
        price: "80 Rs",
        Description: "A refreshing, energizing beverage, cold coffee is the perfect drink for those seeking both caffeine and cool refreshment. Blended with ice, milk, and a hint of coffee, it provides a smooth...",

        
    },
    {
        id: 16,
        image: "images/desert.jpeg",
        name: "Dessert",
        category: "Lunch",
        price: "60 Rs",
        Description: "Desserts are the grand finale to any meal, offering a sweet and satisfying end to your culinary experience. From creamy cheesecakes .Desert food likely refers to food deserts, are regions...",

        
    },
    {
        id: 17,
        image: "images/chocolate-pastry.jpg",
        name: "Pastry",
        category: "Dinner",
        price: "80 Rs",
        Description: "Pastries come in countless forms—flaky, layered, filled, or glazed. From Danish swirls to puff pastry delights, each bite offers texture, richness, and sweetness baked into golden perfection....",

        
    },
    {
        id: 18,
        image: "images/afgani-chap.webp",
        name: "Afghani Chap",
        category: "Dinner",
        price: "110 Rs",
        Description: " Afghani Chap is a succulent, tandoor-cooked flatbread known for its rich, smoky flavor. It’s made with soft, it a slightly crispy exterior and a tender, buttery inside.It’s a staple in many ...",

        
    },
   
    {
        id: 19,
        image: "images/smoothi.webp",
        name: "Smoothies",
        category: "Breakfast",
        price: "99 Rs",
        Description: " Smoothies are a delicious and nutritious way to start your day or refuel after a workout. Packed with vitamins, minerals, and antioxidants, they offer a quick, convenient, and customizable  ...",

        
    },
];

export default menu;