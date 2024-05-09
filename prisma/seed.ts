// import Feedback from '@/app/feedback/page';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createCategoryIfNotExists(categoryName: string) {
  const existingCategory = await prisma.productCategory.findFirst({
    where: { name: categoryName },
  });

  if (!existingCategory) {
    await prisma.productCategory.create({
      data: {
        name: categoryName,
      },
    });
    console.log(`Created product category: ${categoryName}`);
  } else {
    console.log(`Product category '${categoryName}' already exists`);
  }
}

async function createBeverageProduct(
  name: string,
  description: string,
  weight: string,
  price: number,
  image?: string
) {
  // Find the product category for beverages
  const category = await prisma.productCategory.findUnique({
    where: { name: "beverages" },
  });

  if (!category) {
    console.log("Beverages category does not exist, please create it first.");
    return;
  }

  // Check if the product already exists to avoid duplicates
  const existingProduct = await prisma.product.findFirst({
    where: {
      name: name,
      productCategoryId: category.productCat, // Ensure you use the correct identifier here
    },
  });

  if (!existingProduct) {
    // If the product does not exist, create it
    await prisma.product.create({
      data: {
        name: name,
        description: description,
        productCategoryId: category.productCat,
        weight: weight,
        price: price,
        image: null,
        note: null,
      },
    });
    console.log(`Created product: ${name}`);
  } else {
    console.log(`Product ${name} already exists.`);
  }
}

async function createBurgerProduct(
  name: string,
  description: string,
  weight: string,
  price: number,
  image?: string
) {
  // Find the product category for beverages
  const category = await prisma.productCategory.findUnique({
    where: { name: "burgers" },
  });

  if (!category) {
    console.log("Burgers category does not exist, please create it first.");
    return;
  }

  // Check if the product already exists to avoid duplicates
  const existingProduct = await prisma.product.findFirst({
    where: {
      name: name,
      productCategoryId: category.productCat, // Ensure you use the correct identifier here
    },
  });

  if (!existingProduct) {
    // If the product does not exist, create it
    await prisma.product.create({
      data: {
        name: name,
        description: description,
        productCategoryId: category.productCat,
        weight: weight,
        price: price,
        image: null,
        note: null,
      },
    });
    console.log(`Created product: ${name}`);
  } else {
    console.log(`Product ${name} already exists.`);
  }
}

async function createPizzaProduct(
  name: string,
  description: string,
  weight: string,
  price: number,
  image?: string
) {
  // Find the product category for beverages
  const category = await prisma.productCategory.findUnique({
    where: { name: "pizzas" },
  });

  if (!category) {
    console.log("Pizzas category does not exist, please create it first.");
    return;
  }

  // Check if the product already exists to avoid duplicates
  const existingProduct = await prisma.product.findFirst({
    where: {
      name: name,
      productCategoryId: category.productCat, // Ensure you use the correct identifier here
    },
  });

  if (!existingProduct) {
    // If the product does not exist, create it
    await prisma.product.create({
      data: {
        name: name,
        description: description,
        productCategoryId: category.productCat,
        weight: weight,
        price: price,
        image: null,
        note: null,
      },
    });
    console.log(`Created product: ${name}`);
  } else {
    console.log(`Product ${name} already exists.`);
  }
}

async function createDessertProduct(
  name: string,
  description: string,
  weight: string,
  price: number,
  image?: string
) {
  // Find the product category for beverages
  const category = await prisma.productCategory.findUnique({
    where: { name: "desserts" },
  });

  if (!category) {
    console.log("Desserts category does not exist, please create it first.");
    return;
  }

  // Check if the product already exists to avoid duplicates
  const existingProduct = await prisma.product.findFirst({
    where: {
      name: name,
      productCategoryId: category.productCat, // Ensure you use the correct identifier here
    },
  });

  if (!existingProduct) {
    // If the product does not exist, create it
    await prisma.product.create({
      data: {
        name: name,
        description: description,
        productCategoryId: category.productCat,
        weight: weight,
        price: price,
        image: null,
        note: null,
      },
    });
    console.log(`Created product: ${name}`);
  } else {
    console.log(`Product ${name} already exists.`);
  }
}

async function createFeedback(
  tableId: number,
  answers: [number, number, number, string]
) {
  // Check if the table exists
  const existingTable = await prisma.table.findUnique({
    where: { tableId: tableId },
  });

  if (!existingTable) {
    console.log("Table does not exist.");
    return;
  }

  const existingFeedback = await prisma.feedback.findFirst({
    where: {
      tableId: tableId,
      answerFour: answers[3],
    },
  });

  if (existingFeedback) {
    console.log("Feedback already exists.");
    return;
  }

  // Create the feedback
  await prisma.feedback.create({
    data: {
      answerOne: answers[0],
      answerTwo: answers[1],
      answerThree: answers[2],
      answerFour: answers[3],
      tableId: tableId,
    },
  });
  console.log(`Created feedback for table ${tableId}.`);
}

async function createOrder(
  tableId: number,
  products: { productId: number; quantity: number; orderStatus: string }[]
) {
  const existingTable = await prisma.table.findUnique({
    where: { tableId: tableId },
  });

  if (!existingTable) {
    console.log("Table does not exist.");
    return;
  }

  const orderDetails = products.map((product) => {
    const { productId, quantity, orderStatus } = product;
    return {
      tableId: tableId,
      productId: productId,
      orderStatus: orderStatus,
      quantity: quantity,
    };
  });

  await prisma.order.createMany({
    data: orderDetails,
  });

  console.log(`Created order for table ${tableId}.`);
}

async function main() {
  await createCategoryIfNotExists("burgers");
  await createCategoryIfNotExists("pizzas");
  await createCategoryIfNotExists("desserts");
  await createCategoryIfNotExists("beverages");

  // Creating products
  await createBeverageProduct(
    "Coca Cola",
    "Coca-Cola, a timeless classic, delights anyone with its iconic blend of refreshing carbonation and invigorating sweetness. With its crisp and satisfying taste, Coca-Cola provides an unmatched experience that quenches thirst and brings moments of joy to any occasion.",
    "355ml",
    200,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171063/coca_cola_bv0buf.png"
  );
  await createBeverageProduct(
    "Dr Pepper",
    "Dr Pepper, a unique fusion of 23 flavors, offers a tantalizing taste experience unlike any other soft drink. Its rich, bold flavor profile, featuring hints of cherry, vanilla, and caramel, promises to captivate taste buds and leave customers craving more with every sip.",
    "355ml",
    200,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171064/dr_pepper_mda2lg.png"
  );
  await createBeverageProduct(
    "Fanta",
    "Fanta, with its vibrant colors and refreshing fruit flavors, is a delightful choice for those seeking a burst of excitement in every sip. Its fizzy, fruity taste transports customers to a world of fun and flavor, making it the perfect companion for any occasion.",
    "355ml",
    200,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171064/fanta_c1vxvj.png"
  );
  await createBeverageProduct(
    "Canada Dry",
    "Canada Dry, with its crisp and invigorating ginger flavor, offers a refreshing escape from the ordinary. Perfectly balanced and effervescent, it`s the ideal beverage choice for those seeking a refreshing pick-me-up with a hint of sophistication.",
    "355ml",
    200,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171064/ginger_ale_fsxwp8.png"
  );
  await createBeverageProduct(
    "Pepsi",
    "Pepsi, renowned for its bold and irresistible taste, delivers a satisfying burst of refreshment with every sip. Whether enjoyed on its own or paired with your favorite snack, Pepsi promises a timeless and uplifting experience that`s perfect for any occasion.",
    "355ml",
    200,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171063/pepsi_af7a0n.png"
  );
  await createBeverageProduct(
    "Root Beer",
    "Root Beer, with its rich and creamy flavor profile, offers a nostalgic taste experience that delights the senses. Its unique blend of herbs and spices creates a refreshing beverage that`s perfect for indulging in on a hot summer day or as a special treat anytime.",
    "355ml",
    200,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171064/root_beer_g9eyt6.png"
  );

  await createBurgerProduct(
    "Banff burger",
    "Experience the taste of the Rockies with our Banff Burger, featuring juicy Alberta beef topped with savory bacon, melted cheddar cheese, and a tangy barbecue sauce, all nestled between two fluffy brioche buns.",
    "240g",
    21000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1714873718/banff_burger_nuar14.png"
  );

  await createBurgerProduct(
    "Brampton burger",
    "Indulge in the bold flavors of our Brampton Burger, featuring a perfectly grilled patty topped with caramelized onions, crispy bacon, fresh lettuce, ripe tomatoes, and a dollop of creamy garlic aioli, all sandwiched between a toasted sesame seed bun.",
    "260g",
    20000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1714873719/brampton_burger_yitoyu.png"
  );

  await createBurgerProduct(
    "Calgary burger",
    "Savor the spirit of the Stampede with our Calgary Burger, boasting a flame-grilled beef patty smothered in zesty barbecue sauce, melted pepper jack cheese, crispy onion rings, and a kick of jalapenos, all served on a toasted artisan bun.",
    "255g",
    19000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1714873719/calgary_burger_bxqsa4.png"
  );

  await createBurgerProduct(
    "Edmonton burger",
    "Dive into the heart of Alberta with our Edmonton Burger, featuring a mouthwatering beef patty topped with gooey mozzarella cheese, tangy barbecue sauce, crunchy lettuce, ripe tomatoes, and a drizzle of house-made ranch dressing, all hugged by a toasted pretzel bun.",
    "250g",
    22000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1714873720/edmonton_burger_tvdthl.png"
  );

  await createBurgerProduct(
    "Hamilton burger",
    "Get a taste of Ontario with our Hamilton Burger, showcasing a succulent beef patty layered with smoky Canadian bacon, melted Swiss cheese, crisp lettuce, sliced pickles, and a smear of tangy mustard, all sandwiched between a soft potato bun.",
    "250g",
    21500,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1714873722/hamilton_burger_mcxhgx.png"
  );

  await createBurgerProduct(
    "Kitchener burger",
    "Embark on a flavor journey with our Kitchener Burger, highlighting a chargrilled beef patty crowned with gooey cheddar cheese, crispy bacon, tangy barbecue sauce, fresh lettuce, and sliced red onions, all served on a toasted brioche bun.",
    "245g",
    22300,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1714873722/kitchener_burger_vqdvx1.png"
  );

  await createBurgerProduct(
    "Nanaimo burger",
    "Transport your taste buds to the West Coast with our Nanaimo Burger, featuring a savory beef patty topped with melted provolone cheese, grilled pineapple slices, crispy bacon, lettuce, tomato, and a drizzle of teriyaki sauce, all nestled within a toasted Hawaiian bun.",
    "240g",
    23000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1714873722/nanaimo_burger_byhtsd.png"
  );

  await createBurgerProduct(
    "Regina burger",
    "Taste the prairie flavors with our Regina Burger, showcasing a juicy beef patty topped with smoky bacon, melted Gouda cheese, tangy barbecue sauce, crunchy onion rings, and a dollop of creamy coleslaw, all served on a toasted sesame seed bun.",
    "225g",
    23000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1714873723/regina_burger_reqffd.png"
  );

  await createBurgerProduct(
    "StJohns burger",
    "Experience East Coast charm with our St. John`s Burger, featuring a succulent beef patty topped with tangy Newfoundland pickles, crispy fried cod filet, creamy tartar sauce, fresh lettuce, and a sprinkle of dill, all hugged by a toasted potato bun.",
    "235g",
    24000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1714873725/stjohns_burger_mwth9j.png"
  );

  await createBurgerProduct(
    "Surrey burger",
    "Spice up your meal with our Surrey Burger, boasting a flame-grilled beef patty smothered in spicy pepper jack cheese, jalapeno slices, crispy bacon, fresh lettuce, ripe tomatoes, and a kick of chipotle mayo, all served on a toasted ciabatta bun.",
    "230g",
    18000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1714873718/surrey_burger_c9a3qd.png"
  );

  await createPizzaProduct(
    "Abbotsford pizza",
    "Experience a slice of culinary delight with our Abbotsford Pizza, featuring a crispy thin crust topped with premium marinara sauce, gooey mozzarella cheese, and your choice of mouthwatering toppings, delivering a perfect balance of flavors in every bite.",
    "800g",
    27000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171561/abbotsford_pizza_iq8em0.png"
  );

  await createPizzaProduct(
    "Brampton pizza",
    "Delight your taste buds with our Brampton Pizza, showcasing a hand-tossed dough base topped with tangy tomato sauce, generous portions of savory meats, fresh vegetables, and a blend of melted cheeses, creating a satisfying and hearty pizza experience.",
    "780g",
    28000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171576/brampton_pizza_szquts.png"
  );

  await createPizzaProduct(
    "Calgary pizza",
    "Savor the taste of the west with our Calgary Pizza, boasting a unique combination of smoky barbecue sauce, tender grilled chicken, crisp bacon, caramelized onions, and a blend of cheddar and mozzarella cheeses, offering a deliciously bold and savory flavor profile.",
    "830g",
    29000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171576/calgary_pizza_twic8k.png"
  );

  await createPizzaProduct(
    "Hamilton pizza",
    "Treat yourself to a taste of tradition with our Hamilton Pizza, featuring a classic thick crust piled high with zesty tomato sauce, savory pepperoni, hearty Italian sausage, fresh mushrooms, and melted mozzarella cheese, delivering a comforting and satisfying pizza experience.",
    "790g",
    27000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171572/hamilton_pizza_vfv688.png"
  );

  await createPizzaProduct(
    "Kitchener pizza",
    "Indulge in a culinary masterpiece with our Kitchener Pizza, showcasing a flavorful Neapolitan-style crust topped with San Marzano tomato sauce, creamy buffalo mozzarella, fresh basil leaves, and a drizzle of extra virgin olive oil, creating a simple yet exquisite pizza that's sure to impress.",
    "840g",
    28000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171571/kitchener_pizza_bcy0gm.png"
  );

  await createPizzaProduct(
    "Regina pizza",
    "Embark on a flavor journey with our Regina Pizza, featuring a crispy thin crust topped with tangy barbecue sauce, tender pulled pork, caramelized onions, and a blend of mozzarella and cheddar cheeses, offering a delicious fusion of sweet and savory flavors.",
    "800g",
    30000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171570/regina_pizza_q8zl1e.png"
  );

  await createPizzaProduct(
    "Saskatoon pizza",
    "Discover a taste of the prairies with our Saskatoon Pizza, boasting a hearty whole wheat crust topped with robust tomato sauce, locally sourced Saskatoon berries, savory Canadian bacon, and creamy goat cheese, delivering a unique and flavorful pizza experience.",
    "690g",
    30000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171567/saskatoon_pizza_vw4hln.png"
  );

  await createPizzaProduct(
    "Surrey pizza",
    "Indulge in a slice of paradise with our Surrey Pizza, showcasing a crispy thin crust piled high with vibrant tomato sauce, fresh vegetables, succulent grilled chicken, and a blend of melted cheeses, creating a delightful and wholesome pizza option.",
    "750g",
    31000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171566/surrey_pizza_f4b5w6.png"
  );

  await createPizzaProduct(
    "Vancouver pizza",
    "Experience the essence of the Pacific Northwest with our Vancouver Pizza, featuring a chewy sourdough crust topped with tangy tomato sauce, sustainable seafood, crisp vegetables, and a sprinkle of artisanal cheese, offering a fresh and flavorful taste of the coast.",
    "850g",
    29000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171563/vancouver_pizza_kpmijb.png"
  );

  await createPizzaProduct(
    "Windsor pizza",
    "Dive into a taste sensation with our Windsor Pizza, showcasing a fluffy deep-dish crust filled with robust marinara sauce, a generous layer of mozzarella cheese, and your choice of premium toppings, delivering a hearty and satisfying pizza experience that's perfect for sharing.",
    "900g",
    33000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171562/windsor_pizza_deli8x.png"
  );

  await createDessertProduct(
    "Cheesecake",
    "Indulge in creamy perfection with our Cheesecake, featuring a velvety smooth filling atop a buttery graham cracker crust, finished with your choice of sweet fruit compote or decadent chocolate ganache drizzle.",
    "200g",
    17000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171844/cheesecake_eb5cph.png"
  );

  await createDessertProduct(
    "Chocolate cake",
    "Dive into chocolate heaven with our Chocolate Cake, boasting layers of moist chocolate sponge generously filled and frosted with rich chocolate buttercream, creating a luscious treat that satisfies every chocolate lover's cravings.",
    "220g",
    16000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171841/chocolate_cake_v28mkg.png"
  );

  await createDessertProduct(
    "Fudge cake",
    "Treat yourself to pure indulgence with our Fudge Cake, showcasing dense layers of fudgy chocolate cake adorned with thick, velvety chocolate ganache, delivering an irresistible combination of rich flavors and decadent textures.",
    "230g",
    16000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171840/fudge_cake_npq7yv.png"
  );

  await createDessertProduct(
    "Muffin",
    "Start your day on a delightful note with our freshly baked Muffins, available in an array of flavors such as blueberry, banana nut, or double chocolate chip, each offering a moist and fluffy texture bursting with flavor in every bite.",
    "240g",
    15000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171837/muffin_hwwcyj.png"
  );

  await createDessertProduct(
    "Sundae ice cream",
    "Cool off with our Sundae Ice Cream, featuring scoops of creamy vanilla ice cream topped with your choice of decadent toppings such as hot fudge, caramel sauce, chopped nuts, whipped cream, and a cherry on top, creating a classic dessert that never fails to delight.",
    "250g",
    14000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171835/sundae_icecream_gzkfy5.png"
  );

  await createDessertProduct(
    "Strawberry cake",
    "Taste the essence of summer with our Strawberry Cake, showcasing layers of light and airy vanilla sponge filled with fresh strawberry compote and frosted with fluffy whipped cream, offering a refreshing burst of fruity sweetness in every forkful.",
    "250g",
    13000
  );

  await createDessertProduct(
    "Tiramisu",
    "Indulge in Italian elegance with our Tiramisu, featuring layers of espresso-soaked ladyfingers and velvety mascarpone cheese, dusted with cocoa powder for a rich and creamy dessert experience reminiscent of a cozy café in Italy.",
    "190g",
    14000,
    "https://res.cloudinary.com/da8jnpdza/image/upload/v1715171836/strawberry_cake_ncw1jm.png"
  );

  createFeedback(1, [5, 4, 3, "This is the best place I have been to."]);

  createOrder(1, [
    { productId: 1, quantity: 2, orderStatus: "pending" },
    { productId: 2, quantity: 1, orderStatus: "pending" },
    { productId: 3, quantity: 3, orderStatus: "pending" },
    { productId: 4, quantity: 2, orderStatus: "pending" },
  ]);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error("Error during category creation:", e);
  process.exit(1);
});

// npx prisma db seed                     - run the seed file(updates seeds.ts file)
// npx prisma migrate dev --name somename - create a new migration(updates the schema.prisma file)
