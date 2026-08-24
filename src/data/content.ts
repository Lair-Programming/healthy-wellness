export interface Meal {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  calories: number;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  cookTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  calories: number;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snacks';
  tags: string[];
  ingredients: string[];
  instructions: string[];
  nutrition: {
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
  };
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export const meals: Meal[] = [
  {
    id: 'grilled-chicken-bowl',
    name: 'Grilled Chicken Bowl',
    description: 'Tender grilled chicken over brown rice with roasted vegetables and a light herb dressing.',
    category: 'High Protein',
    price: 12.5,
    image: 'https://images.pexels.com/photos/12916877/pexels-photo-12916877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    calories: 520,
  },
  {
    id: 'avocado-salad',
    name: 'Avocado Salad',
    description: 'Fresh mixed greens, creamy avocado, cherry tomatoes, and a zesty lemon vinaigrette.',
    category: 'Vegetarian',
    price: 9.95,
    image: 'https://images.pexels.com/photos/6327667/pexels-photo-6327667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    calories: 380,
  },
  {
    id: 'healthy-breakfast-bowl',
    name: 'Healthy Breakfast Bowl',
    description: 'Warm oatmeal topped with fresh berries, banana slices, chia seeds, and a drizzle of honey.',
    category: 'Breakfast',
    price: 7.5,
    image: 'https://images.pexels.com/photos/4725751/pexels-photo-4725751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    calories: 340,
  },
  {
    id: 'salmon-rice-bowl',
    name: 'Salmon Rice Bowl',
    description: 'Flame-grilled salmon over seasoned rice with fresh greens and pickled vegetables.',
    category: 'High Protein',
    price: 14.95,
    image: 'https://images.pexels.com/photos/11129150/pexels-photo-11129150.png?auto=compress&cs=tinysrgb&h=650&w=940',
    calories: 580,
  },
];

export const recipes: Recipe[] = [
  {
    id: 'banana-oatmeal',
    name: 'Healthy Banana Oatmeal',
    description: 'Creamy oatmeal cooked with ripe banana, topped with berries and a sprinkle of nuts.',
    image: 'https://images.pexels.com/photos/6050721/pexels-photo-6050721.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '15 min',
    difficulty: 'Easy',
    calories: 320,
    category: 'Breakfast',
    tags: ['Vegetarian', 'Low Sugar'],
    ingredients: [
      '1 cup rolled oats',
      '1 ripe banana, mashed',
      '1 cup almond milk',
      '1 tbsp chia seeds',
      '1/2 cup fresh blueberries',
      '1 tbsp chopped walnuts',
      '1 tsp honey (optional)',
    ],
    instructions: [
      'Combine oats, almond milk, and mashed banana in a small saucepan over medium heat.',
      'Stir continuously for 5-7 minutes until the oats are creamy and cooked through.',
      'Remove from heat and stir in chia seeds.',
      'Transfer to a bowl and top with blueberries, walnuts, and a drizzle of honey.',
      'Serve warm and enjoy immediately.',
    ],
    nutrition: { protein: '12g', carbs: '52g', fat: '8g', fiber: '7g' },
  },
  {
    id: 'chicken-avocado-salad',
    name: 'Chicken Avocado Salad',
    description: 'Grilled chicken breast over fresh greens with creamy avocado and a light citrus dressing.',
    image: 'https://images.pexels.com/photos/5192433/pexels-photo-5192433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '25 min',
    difficulty: 'Easy',
    calories: 450,
    category: 'Lunch',
    tags: ['High Protein'],
    ingredients: [
      '2 boneless chicken breasts',
      '1 ripe avocado, sliced',
      '4 cups mixed greens',
      '1 cup cherry tomatoes, halved',
      '1/4 red onion, thinly sliced',
      '2 tbsp olive oil',
      '1 tbsp lemon juice',
      'Salt and pepper to taste',
    ],
    instructions: [
      'Season chicken breasts with salt and pepper, then grill for 6-8 minutes per side until fully cooked.',
      'Let the chicken rest for 5 minutes, then slice into strips.',
      'In a large bowl, combine mixed greens, cherry tomatoes, and red onion.',
      'Top with sliced avocado and grilled chicken strips.',
      'Whisk together olive oil and lemon juice, drizzle over the salad, and toss gently before serving.',
    ],
    nutrition: { protein: '38g', carbs: '12g', fat: '22g', fiber: '6g' },
  },
  {
    id: 'grilled-chicken-bowl-recipe',
    name: 'Grilled Chicken Bowl',
    description: 'A protein-packed bowl with grilled chicken, brown rice, and roasted seasonal vegetables.',
    image: 'https://images.pexels.com/photos/12916877/pexels-photo-12916877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '35 min',
    difficulty: 'Medium',
    calories: 520,
    category: 'Dinner',
    tags: ['High Protein'],
    ingredients: [
      '2 chicken breasts',
      '1 cup brown rice',
      '2 cups broccoli florets',
      '1 red bell pepper, sliced',
      '1 tbsp olive oil',
      '1 tsp garlic powder',
      '1 tsp smoked paprika',
      'Fresh parsley for garnish',
    ],
    instructions: [
      'Cook brown rice according to package instructions and set aside.',
      'Season chicken with garlic powder, smoked paprika, salt, and pepper.',
      'Grill chicken for 7-8 minutes per side until juices run clear.',
      'Roast broccoli and bell pepper with olive oil at 200°C for 15 minutes.',
      'Assemble the bowl with rice on the bottom, vegetables on one side, and sliced chicken on top.',
      'Garnish with fresh parsley and serve.',
    ],
    nutrition: { protein: '42g', carbs: '48g', fat: '14g', fiber: '5g' },
  },
  {
    id: 'vegetable-pasta',
    name: 'Vegetable Pasta',
    description: 'Whole-grain pasta tossed with fresh tomatoes, arugula, and a light olive oil dressing.',
    image: 'https://images.pexels.com/photos/15550299/pexels-photo-15550299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '20 min',
    difficulty: 'Easy',
    calories: 410,
    category: 'Dinner',
    tags: ['Vegetarian'],
    ingredients: [
      '200g whole-grain pasta',
      '2 cups cherry tomatoes, halved',
      '2 cups fresh arugula',
      '3 cloves garlic, minced',
      '3 tbsp olive oil',
      '1/4 cup grated parmesan',
      'Fresh basil leaves',
      'Salt and pepper to taste',
    ],
    instructions: [
      'Cook pasta in boiling salted water according to package directions.',
      'In a large pan, heat olive oil and sauté garlic until fragrant.',
      'Add cherry tomatoes and cook for 5 minutes until they soften.',
      'Drain pasta and toss it with the tomato mixture.',
      'Stir in arugula, season with salt and pepper, and top with parmesan and basil.',
    ],
    nutrition: { protein: '14g', carbs: '62g', fat: '16g', fiber: '8g' },
  },
  {
    id: 'salmon-rice-bowl-recipe',
    name: 'Salmon Rice Bowl',
    description: 'Flame-grilled salmon over seasoned rice with fresh greens and pickled vegetables.',
    image: 'https://images.pexels.com/photos/11129150/pexels-photo-11129150.png?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '30 min',
    difficulty: 'Medium',
    calories: 580,
    category: 'Dinner',
    tags: ['High Protein'],
    ingredients: [
      '2 salmon fillets',
      '1 cup jasmine rice',
      '1 cup spinach',
      '1/2 cup pickled cucumber',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tsp grated ginger',
      'Sesame seeds for garnish',
    ],
    instructions: [
      'Cook jasmine rice and set aside.',
      'Season salmon with salt and grill skin-side down for 4 minutes, then flip and cook 3 more minutes.',
      'Whisk soy sauce, sesame oil, and ginger for the dressing.',
      'Assemble bowls with rice, spinach, pickled cucumber, and salmon on top.',
      'Drizzle with dressing and sprinkle sesame seeds before serving.',
    ],
    nutrition: { protein: '36g', carbs: '55g', fat: '18g', fiber: '3g' },
  },
  {
    id: 'fruit-yogurt-bowl',
    name: 'Fruit Yogurt Bowl',
    description: 'Creamy Greek yogurt topped with fresh seasonal fruits, nuts, and a drizzle of honey.',
    image: 'https://images.pexels.com/photos/6823328/pexels-photo-6823328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '10 min',
    difficulty: 'Easy',
    calories: 280,
    category: 'Snacks',
    tags: ['Vegetarian', 'Low Sugar'],
    ingredients: [
      '1 cup Greek yogurt',
      '1/2 cup strawberries, sliced',
      '1/2 cup blueberries',
      '1 kiwi, peeled and sliced',
      '2 tbsp granola',
      '1 tbsp mixed nuts',
      '1 tsp honey',
    ],
    instructions: [
      'Spoon Greek yogurt into a serving bowl.',
      'Arrange strawberries, blueberries, and kiwi slices on top.',
      'Sprinkle granola and mixed nuts over the fruit.',
      'Drizzle with honey and serve immediately.',
    ],
    nutrition: { protein: '18g', carbs: '38g', fat: '7g', fiber: '5g' },
  },
];

export const services: Service[] = [
  {
    id: 'meal-delivery',
    icon: 'Truck',
    title: 'Healthy Meal Delivery',
    description: 'Fresh and healthy meals delivered conveniently to your door, so you never have to compromise on nutrition.',
    benefits: ['Freshly prepared daily', 'Flexible delivery slots', 'Eco-friendly packaging', 'No cooking required'],
    image: 'https://images.pexels.com/photos/6969764/pexels-photo-6969764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'meal-planning',
    icon: 'CalendarCheck',
    title: 'Meal Planning',
    description: 'Simple, personalized meal plans based on your goals, preferences, and dietary needs.',
    benefits: ['Custom weekly plans', 'Goal-based planning', 'Smart grocery lists', 'Dietary preference support'],
    image: 'https://images.pexels.com/photos/15319040/pexels-photo-15319040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'nutrition-consultation',
    icon: 'Stethoscope',
    title: 'Nutrition Consultation',
    description: 'Professional guidance from certified nutritionists to help you make healthier food choices.',
    benefits: ['1-on-1 expert advice', 'Personalized nutrition plan', 'Progress tracking', 'Flexible online sessions'],
    image: 'https://images.pexels.com/photos/8844891/pexels-photo-8844891.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'weekly-subscription',
    icon: 'Package',
    title: 'Weekly Meal Subscription',
    description: 'Choose your healthy meals for the entire week and let us handle the rest with convenient weekly deliveries.',
    benefits: ['Save up to 20%', 'Skip or pause anytime', 'Weekly rotating menu', 'Priority delivery'],
    image: 'https://images.pexels.com/photos/30635719/pexels-photo-30635719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'lifestyle-support',
    icon: 'HeartPulse',
    title: 'Healthy Lifestyle Support',
    description: 'Simple tips, resources, and ongoing support to help you build sustainable healthy habits.',
    benefits: ['Weekly wellness tips', 'Habit tracking tools', 'Community support', 'Expert articles & guides'],
    image: 'https://images.pexels.com/photos/8770407/pexels-photo-8770407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const stats = [
  { label: 'Healthy Meals', value: '250+', icon: 'UtensilsCrossed' },
  { label: 'Recipes', value: '180+', icon: 'BookOpen' },
  { label: 'Happy Customers', value: '15K+', icon: 'Smile' },
  { label: 'Wellness Services', value: '12', icon: 'HeartPulse' },
];

export const featuredCategories = [
  {
    title: 'Healthy Meals',
    description: 'Chef-prepared nutritious meals delivered fresh to your door.',
    icon: 'UtensilsCrossed',
    link: '/services',
    image: 'https://images.pexels.com/photos/6065181/pexels-photo-6065181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Fresh Recipes',
    description: 'Simple, healthy recipes you can cook at home in minutes.',
    icon: 'BookOpen',
    link: '/recipes',
    image: 'https://images.pexels.com/photos/5759141/pexels-photo-5759141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Wellness Services',
    description: 'Expert nutrition coaching and personalized meal planning.',
    icon: 'HeartPulse',
    link: '/services',
    image: 'https://images.pexels.com/photos/15319047/pexels-photo-15319047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Healthy Products',
    description: 'Curated healthy snacks and pantry essentials for everyday living.',
    icon: 'ShoppingBasket',
    link: '/services',
    image: 'https://images.pexels.com/photos/9874981/pexels-photo-9874981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const whyChooseUs = [
  {
    title: 'Fresh Ingredients',
    description: 'We source locally grown, seasonal ingredients for every meal and recipe.',
    icon: 'Sprout',
  },
  {
    title: 'Easy Healthy Choices',
    description: 'Pre-planned meals and simple recipes make healthy eating effortless.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Simple Recipes',
    description: 'Cook delicious healthy meals at home with straightforward, step-by-step guides.',
    icon: 'ChefHat',
  },
  {
    title: 'Convenient Services',
    description: 'Delivery, subscriptions, and consultations designed around your busy schedule.',
    icon: 'Clock',
  },
];

export const values = [
  { title: 'Healthy Living', description: 'We believe everyone deserves access to nutritious, wholesome food.', icon: 'Leaf' },
  { title: 'Quality', description: 'We never compromise on the freshness and quality of our ingredients.', icon: 'Award' },
  { title: 'Simplicity', description: 'Healthy eating should be simple, not complicated or stressful.', icon: 'Sparkles' },
  { title: 'Trust', description: 'We build lasting relationships through transparency and honesty.', icon: 'ShieldCheck' },
  { title: 'Sustainability', description: 'We prioritize eco-friendly packaging and responsible sourcing.', icon: 'Recycle' },
];

export const faqs = [
  {
    question: 'How can I order a healthy meal?',
    answer: 'Browse our menu of healthy meals, select the ones you like, and choose a delivery time that works for you. Your meals will be freshly prepared and delivered to your door.',
  },
  {
    question: 'Do you provide meal plans?',
    answer: 'Yes! We offer personalized meal plans based on your goals and dietary preferences. Our nutrition experts create weekly plans tailored specifically to your needs.',
  },
  {
    question: 'Can I save recipes?',
    answer: 'Absolutely. Click the "Save Recipe" button on any recipe detail page to add it to your personal collection for easy access later.',
  },
  {
    question: 'How can I contact WellnessHub?',
    answer: 'You can reach us through our contact form, by email at hello@wellnesshub.com, or by phone at +1 (555) 123-4567. We are available Monday to Saturday, 8am to 8pm.',
  },
];
