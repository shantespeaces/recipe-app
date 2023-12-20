-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 20 déc. 2023 à 21:01
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `recettes`
--

-- --------------------------------------------------------

--
-- Structure de la table `background_colors`
--

CREATE TABLE `background_colors` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `background_colors`
--

INSERT INTO `background_colors` (`id`, `name`) VALUES
(1, '#FFE6E1'),
(2, '#FFF6C8'),
(3, '#CAF3FC'),
(4, '#FFE4CC'),
(5, '#BCF5EB'),
(6, '#C6C5C5'),
(7, '#000000'),
(8, '#FFFFFF');

-- --------------------------------------------------------

--
-- Structure de la table `borders`
--

CREATE TABLE `borders` (
  `id` int(11) DEFAULT NULL,
  `border_style_id` varchar(150) NOT NULL,
  `width` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `border_styles`
--

CREATE TABLE `border_styles` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `border_styles`
--

INSERT INTO `border_styles` (`id`, `name`) VALUES
(NULL, 'solid'),
(NULL, 'dotted'),
(NULL, 'dashed'),
(NULL, 'double'),
(NULL, 'none'),
(NULL, 'solid'),
(NULL, 'dotted'),
(NULL, 'dashed'),
(NULL, 'double'),
(NULL, 'none');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Appetizers and starters'),
(2, 'Sauces and dressings'),
(3, 'Breakfast and brunch'),
(4, 'Drinks and cocktails'),
(5, 'Side dishes'),
(6, 'Desserts'),
(7, 'Main dishes'),
(8, 'Snacks'),
(9, 'Lunch'),
(10, 'Salades'),
(11, 'Soups and Stews');

-- --------------------------------------------------------

--
-- Structure de la table `fonts`
--

CREATE TABLE `fonts` (
  `id` int(11) NOT NULL,
  `font_style_id` int(11) NOT NULL,
  `font_color_id` int(11) NOT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `font_colors`
--

CREATE TABLE `font_colors` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `font_colors`
--

INSERT INTO `font_colors` (`id`, `name`) VALUES
(1, 'black'),
(2, 'white'),
(3, 'grey');

-- --------------------------------------------------------

--
-- Structure de la table `font_styles`
--

CREATE TABLE `font_styles` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `font_styles`
--

INSERT INTO `font_styles` (`id`, `name`) VALUES
(1, 'Edu TAS Beginner'),
(2, 'marydale'),
(3, 'Dancing Script'),
(4, 'Caveat'),
(5, 'Shadows Into Light'),
(6, 'Indie Flower'),
(7, 'Kalam'),
(8, 'Sacramento'),
(9, 'Architects Daughter');

-- --------------------------------------------------------

--
-- Structure de la table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ingredients`
--

INSERT INTO `ingredients` (`id`, `name`) VALUES
(1, 'Salt'),
(2, 'Pepper'),
(3, 'Sugar'),
(4, 'Flour'),
(5, 'Eggs'),
(6, 'Milk'),
(7, 'Butter'),
(8, 'Olive Oil'),
(9, 'Garlic'),
(10, 'Onion'),
(11, 'Tomato'),
(12, 'Potato'),
(13, 'Carrot'),
(14, 'Spinach'),
(15, 'Broccoli'),
(16, 'Chicken'),
(17, 'Beef'),
(18, 'Pork'),
(19, 'Fish'),
(20, 'Shrimp'),
(21, 'Rice'),
(22, 'Pasta'),
(23, 'Cheese'),
(24, 'Yogurt'),
(25, 'Lemon'),
(26, 'Lime'),
(27, 'Cilantro'),
(28, 'Basil'),
(29, 'Thyme'),
(30, 'Rosemary'),
(31, 'Oregano'),
(32, 'Cumin'),
(33, 'Paprika'),
(34, 'Soy Sauce'),
(35, 'Honey'),
(36, 'Mustard'),
(37, 'Ketchup'),
(38, 'Mayonnaise'),
(39, 'Vinegar'),
(40, 'Sesame Oil'),
(41, 'Chili Powder'),
(42, 'Black Beans'),
(43, 'Kidney Beans'),
(44, 'Lentils'),
(45, 'Chickpeas'),
(46, 'Mushrooms'),
(47, 'Bell Pepper'),
(48, 'Zucchini'),
(49, 'Eggplant'),
(50, 'Cabbage'),
(51, 'Avocado'),
(52, 'winter squash'),
(53, 'mexican seasoning'),
(54, 'mixed spice'),
(55, 'honey'),
(56, 'butter'),
(57, 'olive oil'),
(58, 'salt'),
(59, 'prepared pizza crust'),
(60, 'sausage patty'),
(61, 'eggs'),
(62, 'milk'),
(63, 'salt and pepper'),
(64, 'cheese'),
(65, 'ground beef'),
(66, 'yellow onions'),
(67, 'diced tomatoes'),
(68, 'tomato paste'),
(69, 'tomato soup'),
(70, 'rotel tomatoes'),
(71, 'kidney beans'),
(72, 'water'),
(73, 'chili powder'),
(74, 'ground cumin'),
(75, 'salt'),
(76, 'lettuce'),
(77, 'cheddar cheese'),
(78, 'flour'),
(79, 'sugar'),
(80, 'baking powder'),
(81, 'baking soda'),
(82, 'egg'),
(83, 'buttermilk'),
(84, 'vegetable oil'),
(85, 'vanilla extract'),
(86, 'cinnamon'),
(87, 'nutmeg'),
(88, 'all-purpose flour'),
(89, 'white sugar'),
(90, 'butter'),
(91, 'vanilla extract'),
(92, 'baking powder'),
(93, 'eggs'),
(94, 'milk'),
(95, 'salt'),
(96, 'ground cinnamon'),
(97, 'ground nutmeg'),
(98, 'sugar'),
(99, 'cream cheese'),
(100, 'confectioners\' sugar'),
(101, 'whipped topping'),
(102, 'vanilla extract'),
(103, 'graham cracker crust'),
(104, 'instant vanilla pudding mix'),
(105, 'milk'),
(106, 'bananas'),
(107, 'strawberries'),
(108, 'whipped topping'),
(109, 'graham cracker crust');

-- --------------------------------------------------------

--
-- Structure de la table `ingredient_section`
--

CREATE TABLE `ingredient_section` (
  `id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `measurement_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `ingredient_section`
--

INSERT INTO `ingredient_section` (`id`, `ingredient_id`, `section_id`, `measurement_id`, `quantity`, `recipe_id`) VALUES
(1, 1, 2, 9, 4, 1),
(3, 2, 1, 3, 2, 1),
(4, 52, 3, 10, 11, 1),
(5, 53, 3, 2, 3, 1),
(6, 54, 3, 5, 6, 1),
(7, 55, 1, 7, 12, 1),
(8, 56, 1, 2, 12, 1),
(9, 57, 1, 10, 8, 1),
(10, 1, 1, 7, 13, 1),
(11, 59, 2, 10, 9, 1),
(12, 60, 2, 7, 14, 1),
(13, 5, 2, 11, 9, 1),
(14, 7, 5, 1, 15, 2),
(15, 1, 4, 11, 4, 2),
(16, 10, 5, 9, 6, 2),
(17, 17, 9, 11, 10, 66),
(18, 10, 9, 8, 14, 66),
(19, 11, 9, 11, 9, 66),
(20, 68, 9, 8, 2, 66),
(21, 69, 9, 6, 2, 66),
(22, 70, 9, 9, 1, 66),
(23, 43, 10, 10, 10, 66),
(24, 72, 10, 6, 10, 66),
(25, 41, 10, 1, 11, 66),
(26, 32, 10, 4, 13, 66),
(27, 1, 10, 5, 13, 66),
(28, 76, 10, 4, 8, 66),
(29, 77, 10, 6, 13, 66),
(30, 39, 13, 5, 12, 67),
(31, 12, 13, 3, 14, 67),
(32, 9, 13, 7, 4, 67),
(33, 28, 13, 6, 4, 67),
(34, 29, 13, 8, 10, 67),
(35, 57, 14, 8, 9, 67),
(36, 38, 14, 5, 14, 67),
(37, 1, 14, 3, 5, 67),
(38, 2, 14, 1, 6, 67),
(39, 47, 14, 4, 2, 67),
(40, 48, 14, 4, 4, 67),
(41, 11, 11, 9, 11, 68),
(42, 39, 11, 7, 9, 68),
(43, 79, 11, 1, 6, 68),
(44, 1, 11, 8, 3, 68),
(45, 2, 11, 4, 14, 68),
(46, 80, 11, 1, 1, 68),
(47, 11, 12, 7, 6, 69),
(48, 39, 12, 9, 11, 69),
(49, 79, 12, 7, 12, 69),
(50, 1, 12, 1, 12, 69),
(51, 2, 12, 5, 14, 69),
(52, 80, 12, 10, 4, 69),
(53, 81, 11, 5, 13, 70),
(54, 82, 11, 4, 11, 68),
(55, 6, 12, 5, 4, 69),
(56, 23, 12, 9, 3, 69),
(57, 83, 12, 5, 2, 69),
(58, 11, 12, 9, 9, 69),
(59, 29, 12, 9, 4, 70),
(60, 40, 13, 4, 2, 70),
(61, 41, 13, 9, 2, 70),
(62, 9, 13, 8, 6, 70),
(63, 84, 13, 11, 7, 70),
(64, 25, 13, 4, 10, 70),
(65, 26, 13, 11, 9, 70),
(66, 41, 14, 1, 4, 70),
(67, 57, 14, 6, 12, 70),
(68, 18, 15, 4, 6, 71),
(69, 34, 15, 9, 9, 71),
(70, 9, 15, 4, 6, 71),
(71, 28, 15, 1, 10, 71),
(72, 41, 15, 5, 8, 71),
(73, 42, 15, 6, 5, 71),
(74, 1, 15, 3, 9, 71),
(75, 27, 15, 3, 9, 71),
(76, 11, 15, 6, 4, 71),
(77, 79, 15, 10, 14, 71),
(78, 10, 15, 3, 9, 71),
(79, 39, 15, 11, 9, 71),
(80, 55, 15, 7, 5, 71),
(81, 86, 16, 11, 15, 71),
(82, 87, 16, 4, 1, 71),
(83, 46, 16, 5, 8, 71),
(84, 32, 16, 6, 9, 71),
(85, 81, 16, 9, 2, 71),
(86, 103, 16, 3, 11, 71),
(87, 18, 16, 5, 12, 71),
(88, 34, 16, 3, 11, 71),
(89, 9, 16, 3, 4, 71),
(633, 13, 5, 6, 4, 64),
(634, 13, 7, 6, 4, 64),
(635, 51, 6, 4, 5, 64),
(636, 102, 7, 1, 1, 64),
(637, 17, 7, 1, 1, 64),
(638, 80, 5, 4, 1, 64),
(639, 80, 5, 4, 1, 64),
(640, 30, 5, 6, 1, 64),
(641, 22, 6, 2, 4, 64),
(642, 78, 8, 4, 1, 65),
(643, 98, 8, 4, 1, 65),
(644, 78, 8, 4, 1, 65),
(645, 98, 8, 4, 1, 65),
(646, 25, 8, 11, 3, 65),
(647, 89, 11, 4, 1, 245),
(648, 88, 12, 4, 1, 246),
(649, 98, 12, 4, 3, 246),
(650, 88, 13, 4, 1, 246),
(651, 98, 13, 4, 3, 246),
(652, 89, 13, 9, 3, 246),
(653, 51, 14, 7, 2, 247),
(654, 51, 15, 7, 2, 247),
(655, 106, 15, 6, 1, 247),
(656, 92, 16, 9, 1, 248),
(657, 92, 17, 9, 1, 248),
(658, 80, 18, 9, 1, 249),
(659, 80, 19, 9, 1, 249),
(660, 106, 19, 5, 0, 249),
(661, 3, 20, 4, 2, 250),
(662, 4, 21, 5, 1, 273),
(663, 20, 22, 10, 1, 273),
(664, 9, 23, 1, 1, 275),
(665, 13, 24, 10, 1, 276),
(666, 19, 25, 4, 3, 276),
(667, 86, 26, 4, 2, 277),
(668, 86, 27, 4, 2, 278),
(669, 51, 28, 11, 1, 280),
(670, 71, 28, 4, 4, 280),
(671, 16, 29, 8, 2, 282),
(672, 48, 30, 1, 1, 283),
(673, 13, 31, 8, 1, 284),
(674, 15, 32, 10, 1, 285),
(675, 13, 33, 10, 1, 286),
(676, 50, 34, 8, 1, 287),
(677, 39, 35, 9, 3, 288),
(678, 49, 36, 1, 1, 289),
(679, 3, 37, 10, 1, 290),
(680, 50, 38, 9, 1, 291),
(681, 13, 39, 9, 1, 292),
(682, 4, 40, 3, 1, 293),
(683, 3, 41, 8, 1, 294),
(684, 85, 42, 6, 1, 295),
(685, 85, 43, 8, 6, 304),
(686, 85, 44, 9, 1, 0),
(687, 50, 45, 10, 1, 306),
(688, 106, 46, 8, 1, 322);

-- --------------------------------------------------------

--
-- Structure de la table `instructions`
--

CREATE TABLE `instructions` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `instructions`
--

INSERT INTO `instructions` (`id`, `description`, `recipe_id`) VALUES
(1, ' Gather the ingredients for the pie crust, which typically include flour, butter, salt, and cold water. ...', 1),
(2, ' Preheat your oven according to the recipe instructions. ...', 1),
(3, ' Choose your pie filling, which could be sweet (e.g., fruit, custard) or savory (e.g., meat, vegetables). ...', 1),
(4, 'Pour the prepared filling into the pie crust. ...', 1),
(5, ' Once the pie is done baking, remove it from the oven and let it cool on a wire rack. ...', 1),
(6, ' Once the pie is done baking, remove it from the oven and let it cool on a wire rack. ...', 1),
(7, 'make a choice and proceed with recipe', 1),
(8, 'depending on size of squash , cut into half or fourths', 1),
(9, 'remove seeds', 2),
(10, 'for spicy squash , drizzle olive oil or melted butter over each cut squash piece', 2),
(11, 'season with mexican seasoning mix ii', 2),
(12, 'for sweet squash , drizzle melted honey , butter , grated piloncillo over each cut squash piece', 2),
(13, 'season with sweet mexican spice mix', 2),
(14, 'bake at 350 degrees , again depending on size , for 40 minutes up to an hour , until a fork can easily pierce the skin', 64),
(15, 'be careful not to burn the squash especially if you opt to use sugar or butter', 64),
(16, 'if you feel more comfortable , cover the squash with aluminum foil the first half hour , give or take , of baking', 64),
(17, 'if desired , season with salt', 64),
(18, 'preheat oven to 425 degrees f', 64),
(19, 'press dough into the bottom and sides of a 12 inch pizza pan', 64),
(20, 'bake for 5 minutes until set but not browned', 64),
(21, 'cut sausage into small pieces', 65),
(22, 'whisk eggs and milk in a bowl until frothy', 65),
(23, 'spoon sausage over baked crust and sprinkle with cheese', 65),
(24, 'pour egg mixture slowly over sausage and cheese', 65),
(25, 's& p to taste', 65),
(26, 'bake 15-20 minutes or until eggs are set and crust is brown', 66),
(27, 'brown ground beef in large pot', 66),
(28, 'add chopped onions to ground beef when almost brown and sautee until wilted', 66),
(29, 'add all other ingredients', 66),
(30, 'add kidney beans if you like beans in your chili', 66),
(31, 'cook in slow cooker on high for 2-3 hours or 6-8 hours on low', 66),
(32, 'serve with cold clean lettuce and shredded cheese', 67),
(33, 'place potatoes in a large pot of lightly salted water and bring to a gentle boil', 67),
(34, 'cook until potatoes are just tender', 67),
(35, 'drain', 68),
(36, 'place potatoes in a large bowl and add all ingredients except the \"alouette\"', 67),
(37, 'mix well and transfer to a buttered 8x8 inch glass baking dish with 2 inch sides', 67),
(38, 'press the potatoes with a spatula to make top as flat as possible', 67),
(39, 'set aside for 2 hours at room temperature', 67),
(40, 'preheat oven to 350f', 67),
(41, 'spread \"alouette\" evenly over potatoes and bake 15 minutes', 67),
(42, 'divide between plates', 0),
(43, 'garnish with finely diced red and yellow bell peppers', 0),
(44, 'mix all ingredients& boil for 2 1 / 2 hours , or until thick', 0),
(45, 'pour into jars', 68),
(46, 'I use \"old\" glass ketchup bottles', 0),
(47, 'it is not necessary for these to \"seal\"', 0),
(48, '\'my Amish mother-in-law has been making this her entire life , and has never used a \'sealed\' jar for this recipe , and it\'s always been great !\'', 0),
(49, 'combine ingredients in blender', 0),
(50, 'cover and blend until smooth', 68),
(51, 'sprinkle with ground cinnamon', 0),
(52, 'makes about 2 cups', 0),
(53, 'toast the fennel seeds and lightly crush them', 0),
(54, 'place all the ingredients in a bowl , stir well', 0),
(55, 'cover and leave to marinate', 0),
(56, 'keep refrigerated and use within 1 to 2 days', 0),
(57, 'in a medium saucepan combine all the ingredients for sauce#1 , bring to a full rolling boil , reduce heat to medium low and simmer for 1 hour , stirring often', 0),
(58, 'rub the ribs with soy sauce , garlic , ginger , chili powder , pepper , salt and chopped cilantro , both sides !', 0),
(59, 'wrap ribs in heavy duty foil', 0),
(60, 'let stand 1 hour', 0),
(61, 'preheat oven to 350 degrees', 0),
(62, 'place ribs in oven for 1 hour , turning once after 30 minutes', 0),
(63, '3 times during cooking the ribs open foil wrap and drizzle ribs with sauce#1', 0),
(64, 'place all the ingredients for sauce#2 in a glass or plastic bowl , whisk well and set aside', 0),
(65, 'remove ribs from oven and place on serving platter', 0),
(66, 'offer both sauces at table to drizzle over ribs', 0),
(67, 'crumble cookies into a 9-inch pie plate , or cake pan', 0),
(68, 'pat down to form an even layer', 0),
(69, 'drizzle 1 cup of chocolate topping evenly over the cookies with a small spoon', 0),
(70, 'scoop the vanilla ice cream on top of the chocolate and smooth down', 0),
(71, 'cover with half of the sliced bananas', 0),
(72, 'top with strawberry ice cream', 0),
(73, 'cover and freeze until firm', 0),
(74, 'before serving , top with 1 / 4 cup chocolate topping , whipped cream , and sliced bananas', 0),
(75, 'preheat oven to 350 degrees', 0),
(76, 'butter two 9x5\" loaf pans', 0),
(77, 'cream the sugar and the butter until light and whipped', 0),
(78, 'add the bananas , eggs , lemon juice , orange rind', 0),
(79, 'beat until blended uniformly', 0),
(80, 'be patient , and beat until the banana lumps are gone', 0),
(81, 'sift the dry ingredients together', 0),
(82, 'fold lightly and thoroughly into the banana mixture', 0),
(83, 'pour the batter into prepared loaf pans', 0),
(84, 'bake for 45 to 55 minutes , until the loaves are firm in the middle and the edges begin to pull away from the pans', 0),
(85, 'cool the loaves on racks for 30 minutes before removing from the pans', 0),
(86, 'freezes well', 0),
(87, 'a', 273),
(88, 'b', 273),
(89, 'd', 273),
(90, 'a', 273),
(91, 'b', 273),
(92, 'd', 273),
(93, 'n', 275),
(94, 'm', 275),
(95, 'a', 275),
(96, 'instruction 1', 276),
(97, 'instruction 2', 276),
(98, 'instruction 1', 276),
(99, 'instruction 2', 276),
(100, 'instruction 1', 277),
(101, 'instruction 1', 278),
(102, 'mush it up', 280),
(103, 'v', 282),
(104, 'vvv', 283),
(105, 'ddd', 284),
(106, 'c', 285),
(107, 'd', 286),
(108, 'cc', 287),
(109, 'e', 289),
(110, 'c', 292);

-- --------------------------------------------------------

--
-- Structure de la table `measurements`
--

CREATE TABLE `measurements` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `measurements`
--

INSERT INTO `measurements` (`id`, `name`) VALUES
(1, 'tbsp'),
(2, 'tsp'),
(3, 'oz'),
(4, 'cup'),
(5, 'lb'),
(6, 'ml'),
(7, 'g'),
(8, 'kg'),
(9, 'l'),
(10, 'gal'),
(11, 'unit');

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `comment` varchar(150) NOT NULL,
  `color_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `note_colors`
--

CREATE TABLE `note_colors` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `note_colors`
--

INSERT INTO `note_colors` (`id`, `name`, `recipe_id`) VALUES
(1, '#FB2E65', 0),
(2, '#FBE72E', 0),
(3, '#2ED1FB', 0),
(4, '#FB9B2E', 0),
(5, '#5BE541', 0),
(6, '#00E1C2', 0);

-- --------------------------------------------------------

--
-- Structure de la table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `setting_id` int(11) DEFAULT NULL,
  `serves` int(11) NOT NULL,
  `time` time NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `recipes`
--

INSERT INTO `recipes` (`id`, `name`, `description`, `image`, `category_id`, `rating`, `setting_id`, `serves`, `time`, `user_id`) VALUES
(1, 'Annie\'s Famous Apple Pie', 'Apple pie is a classic dessert that combines the sweet and tart flavors of sliced apples with warm spices like cinnamon, nutmeg, and sometimes a hint of cloves. The filling is typically made by layering thinly sliced apples in a pastry crust, often mixed with sugar, butter, and spices. The top of the pie is usually covered with a second layer of pastry or a crumbly streusel made from flour, butter, and sugar. Once baked, it yields a golden-brown crust with bubbling, caramelized apples inside. It\'s often served warm and can be accompanied by a scoop of vanilla ice cream or a dollop of whipped cream for an extra indulgent treat.', '/img/recipes/1/200x200.jpg', 10, 2, 5, 8, '03:45:00', 1),
(2, 'Home made bread', 'Homemade bread is a delightful project that yields delicious results! Here\'s a simple recipe for a basic homemade bread. Enjoy!', '/img/recipes/2/200x200.jpg', 8, 4, 3, 8, '00:30:00', 1),
(64, 'Miso-Butter Roast Chicken ', 'autumn is my favorite time of year to cook! this recipe can be prepared either spicy or sweet, your choice! two of my posted mexican-inspired seasoning mix recipes are offered as suggestions.', '/img/recipes/64/512x512.jpg', 10, 4, NULL, 9, '03:25:00', 1),
(65, 'Crispy Salt and Pepper Potatoes', 'this recipe calls for the crust to be prebaked a bit before adding ingredients. feel free to change sausage to ham or bacon. this warms well in the microwave for those late risers.', '/img/recipes/65/200x200.jpg', 1, 2, NULL, 8, '03:40:00', 1),
(66, 'Thanksgiving Mac and Cheese', 'this modified version of \'mom\'s\' chili was a hit at our 2004 christmas party. we made an extra-large pot to have some left to freeze but it never made it to the freezer. it was a favorite by all. perfect for any cold and rainy day. you won\'t find this one in a cookbook. it is truly an original.', '/img/recipes/66/200x200.jpg', 10, 1, NULL, 5, '03:55:00', 1),
(67, 'Italian Sausage and Bread Stuffing', 'this is a super easy, great-tasting, make-ahead side dish that looks like you spent a lot more time preparing than you actually do. plus, most everything is done in advance. the times do not reflect the standing time of the potatoes.', '/img/recipes/67/200x200.jpg', 4, 4, NULL, 9, '00:30:00', 66),
(68, 'Newton\'s Law', 'my dh\'s Amish mother raised him on this recipe. he much prefers it over store-bought ketchup. it was a taste I had to acquire, but now my ds\'s also prefer this type of ketchup. enjoy!', '/img/recipes/68/200x200.jpg', 8, 2, NULL, 4, '02:45:00', 66),
(69, 'Warm Comfort', 'my husband made these up last week, very tasty, he liked them because they were easy.', '/img/recipes/69/200x200.jpg', 5, 3, NULL, 8, '00:10:00', 66),
(70, 'Apples and Oranges', 'my Italian mil was thoroughly impressed by my non-Italian treatment of her olives. they are great appetizers and condiments to your fav pasta.(from the Vancouver Sun) ps. cook time includes fridge time', '/img/recipes/70/200x200.jpg', 3, 2, NULL, 8, '00:35:00', 66),
(71, 'Turmeric Hot Toddy', 'this recipe is posted by request and was originally from chef Sam Choy\'s cookbook', '/img/recipes/71/200x200.jpg', 8, 5, NULL, 7, '02:25:00', 66),
(72, 'Instant Pot Lamb Haleem', 'easy one-pot dinner. ', '/img/recipes/72/200x200.jpg', 10, 1, NULL, 3, '02:20:00', 24),
(73, 'Spiced Lentil and Caramelized Onion Baked Eggs', 'from Ann Hodgman\'s', '/img/recipes/73/200x200.jpg', 1, 3, NULL, 8, '00:20:00', 25),
(74, 'Hot Pimento Cheese Dip', 'horseradish is one of my favorite condiments as well as cranberry sauce. this is sweet and hot. I enjoy it on a smoked turkey & swiss sandwich, but also good alongside baked ham or roast beef.', '/img/recipes/74/200x200.jpg', 11, 3, NULL, 6, '02:40:00', 23),
(75, 'Spiral Ham in the Slow Cooker', 'simple but sexy. this was in my local newspaper\'s food section. cook time reflects refrigeration time. I\'ve been asked several times if this should be baked. just to clarify, no, it is not, it is a refrigerator dessert. I\'m not sure why it contains raw egg, but most tiramisu recipes do too.', '/img/recipes/75/200x200.jpg', 6, 4, NULL, 6, '00:20:00', 25),
(76, 'Butternut Squash and Apple Soup', 'I\'d have to say that this is a labor of love dish, but I give you my word that this recipe is better than Bush\'s. enjoy! oh, and also, this recipe is easily doubled. in fact, I think it turns out better when it is.', '/img/recipes/76/200x200.jpg', 9, 3, NULL, 8, '01:45:00', 25),
(77, 'Caesar Salad Roast Chicken', 'my boss gave me this recipe several years ago. the recipe supposedly came from the', '/img/recipes/77/200x200.jpg', 1, 5, NULL, 7, '03:40:00', 2),
(78, 'Chicken and Rice With Leeks and Salsa Verde', 'this will prove a blessing to everyone who takes it. it is soothing and relaxing, quieting to the nerves, has many good qualities, and is perfectly harmless. you can get the ingredients from any good health food store. you could up this to 1 cup each or lessen it to 1/8 cup each, according to your preference.', '/img/recipes/78/200x200.jpg', 3, 2, NULL, 2, '01:05:00', 23),
(79, 'Gorditas con Camarones', 'here\'s and old standby I enjoy from time to time. it\'s from an old newspaper clipping I cut out years ago. very tasty.', '/img/recipes/79/200x200.jpg', 11, 2, NULL, 9, '02:35:00', 2),
(80, 'Enfrijoladas', 'a favorite from a local restaurant no longer in business. not an authentic Mexican chile relleno, but a crispy, flaky version.', '/img/recipes/80/200x200.jpg', 10, 1, NULL, 8, '01:30:00', 7),
(81, 'Caramelized Plantain Parfait', 'a little different, and oh so good. I include these when making up candy trays, as gifts, at Christmas time.', '/img/recipes/81/200x200.jpg', 8, 4, NULL, 4, '03:50:00', 18),
(82, 'Chicken and Potato Gratin ', 'easy one-pot dinner.', '/img/recipes/82/200x200.jpg', 8, 5, NULL, 9, '02:45:00', 1),
(83, 'Kale and Pumpkin Falafels ', 'wonderful comfort food from Rozanne Gold, a favorite cookbook author. this is a creamless creamed soup and it\'s delicious. it\'s made thick with potatoes and rich with butter. the color of this soup is stunning.', '/img/recipes/83/200x200.jpg', 6, 1, NULL, 7, '02:05:00', 7),
(84, 'Maple and Chile Roasted Squash ', 'thickened with a mix of cooked oats and vegies, this soup has all the flavor of the original with a fraction of the fat stuff. low in cholesterol too!', '/img/recipes/84/200x200.jpg', 6, 5, NULL, 5, '02:20:00', 6),
(85, 'Chhena Poda (Spiced Cheesecake)', 'delicious, crunchy fried chicken. this recipe came from the', '/img/recipes/85/200x200.jpg', 9, 2, NULL, 5, '01:25:00', 9);

-- --------------------------------------------------------

--
-- Structure de la table `recipe_subcategory`
--

CREATE TABLE `recipe_subcategory` (
  `id` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `recipe_subcategory`
--

INSERT INTO `recipe_subcategory` (`id`, `recipe_id`, `subcategory_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 21),
(4, 1, 22),
(5, 66, 2),
(6, 67, 10),
(7, 1, 23),
(8, 1, 16),
(9, 2, 8),
(10, 2, 17),
(11, 2, 14),
(12, 1, 18),
(13, 64, 3),
(14, 64, 5),
(15, 64, 16),
(16, 65, 1),
(17, 66, 8),
(19, 65, 6),
(20, 68, 3),
(21, 68, 8),
(22, 68, 14),
(23, 69, 23),
(24, 67, 4),
(34, 64, 5),
(35, 64, 10),
(36, 0, 1),
(37, 0, 2),
(38, 0, 3),
(39, 0, 10),
(40, 0, 11),
(41, 0, 12),
(42, 0, 9),
(43, 0, 8),
(44, 0, 7),
(45, 177, 14),
(46, 177, 13),
(47, 177, 12),
(48, 178, 16),
(49, 178, 15),
(50, 178, 14),
(51, 184, 23),
(52, 184, 17),
(53, 184, 12),
(54, 185, 7),
(55, 185, 6),
(56, 185, 5),
(57, 186, 1),
(58, 187, 14),
(59, 188, 4),
(60, 208, 1),
(61, 209, 1),
(62, 210, 1),
(63, 220, 1),
(64, 271, 23),
(65, 273, 3),
(66, 273, 2),
(67, 273, 8),
(68, 273, 7),
(69, 275, 1),
(70, 276, 16),
(71, 277, 1),
(72, 278, 1),
(73, 280, 16),
(74, 280, 19),
(75, 280, 22),
(76, 280, 14),
(77, 280, 5),
(78, 282, 1),
(79, 282, 7),
(80, 284, 14),
(81, 285, 17),
(82, 306, 4);

-- --------------------------------------------------------

--
-- Structure de la table `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sections`
--

INSERT INTO `sections` (`id`, `title`, `recipe_id`) VALUES
(1, 'Pie Crust', 1),
(2, 'Pie Filling', 1),
(3, 'Special Topping', 1),
(4, 'Best bread ever!', 2),
(5, 'Chicken', 64),
(6, 'Stuffing', 64),
(7, 'Sauce', 64),
(8, 'Roast your potatoes', 65),
(9, 'Pasta', 66),
(10, 'Sauce', 66),
(11, 'Make your drink', 68),
(12, 'Make your drink', 69),
(13, 'meat', 67),
(14, 'Stuffing', 67),
(15, 'image test', 247),
(16, 'carrotte', 248),
(17, 'nouvelle recette', 248),
(18, 'carrotte', 249),
(19, 'nouvelle recette', 249),
(20, 'nouvelle recette', 250),
(21, 'crust', 273),
(22, 'filling', 273),
(23, 'a', 275),
(24, 'best ever', 276),
(25, 'best2', 276),
(26, 'crust', 277),
(27, 'crust', 278),
(28, 'liquify', 280),
(29, 'v', 282),
(30, 'c', 283),
(31, 's', 284),
(32, 'c2d@gmail.com', 285),
(33, 'c', 286),
(34, 'creat', 287),
(35, 'v', 288),
(36, 'e', 289),
(37, 'cd@gmail.com', 290),
(38, 'carol', 291),
(39, 'cd@gmail.com', 292),
(40, 'vvvv', 293),
(41, 'test', 294),
(42, 'vvv', 295),
(43, 'v', 304),
(44, 'vanilla', 0),
(45, 'cd@gmail.com', 306),
(46, 'bob\'s famous recipe', 322);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `sections_ingredients`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `sections_ingredients` (
`section_id` int(11)
,`section_name` varchar(150)
,`ingredient_id` int(11)
,`ingredient_name` varchar(150)
,`measurement_id` int(11)
,`measurement_name` varchar(150)
,`quantity` int(11)
,`recipe_id` int(11)
,`recipe_name` varchar(150)
);

-- --------------------------------------------------------

--
-- Structure de la table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `font_id` int(11) NOT NULL,
  `border_id` int(11) NOT NULL,
  `background-color_id` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `subcategories`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `subcategories` (
`subcategory_id` int(11)
,`subcategory_name` varchar(150)
,`recipe_subcategory_id` int(11)
,`id` int(11)
,`recipe_id` int(11)
,`recipe_name` varchar(150)
);

-- --------------------------------------------------------

--
-- Structure de la table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `name`) VALUES
(1, 'platters and dishes to share'),
(2, 'hot'),
(3, 'cold'),
(4, 'bite sized'),
(5, 'Vegetables'),
(6, 'salty'),
(7, 'baked goods'),
(8, 'sweet'),
(9, 'sandwiches, pitas and pizzas'),
(10, 'meat'),
(11, 'pasta'),
(12, 'rice, grains and legumes'),
(13, 'pastries'),
(14, 'fruity'),
(15, 'breads'),
(16, 'healthy'),
(17, 'vegetarien'),
(18, 'vegan'),
(19, 'nut & peanut free'),
(20, 'dairy free'),
(21, 'sugar free'),
(22, 'egg free'),
(23, 'gluten free');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(155) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(155) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`) VALUES
(1, 'Shanté', 'Shante@gmail.com', 'password', '/img/users/1/200x200.jpg'),
(66, 'bob', 'bob@gmail.com', 'Password1234_', '/img/users/66/512x512.jpg');

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `user_recipes`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `user_recipes` (
`id` int(11)
,`name` varchar(150)
,`description` text
,`image` varchar(150)
,`time` time
,`serves` int(11)
,`rating` int(11)
,`category_id` int(11)
,`user_id` int(11)
,`user_image` varchar(155)
);

-- --------------------------------------------------------

--
-- Structure de la vue `sections_ingredients`
--
DROP TABLE IF EXISTS `sections_ingredients`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `sections_ingredients`  AS SELECT `sections`.`id` AS `section_id`, `sections`.`title` AS `section_name`, `ingredients`.`id` AS `ingredient_id`, `ingredients`.`name` AS `ingredient_name`, `measurements`.`id` AS `measurement_id`, `measurements`.`name` AS `measurement_name`, `ingredient_section`.`quantity` AS `quantity`, `recipes`.`id` AS `recipe_id`, `recipes`.`name` AS `recipe_name` FROM ((((`sections` join `ingredient_section` on(`sections`.`id` = `ingredient_section`.`section_id`)) join `ingredients` on(`ingredient_section`.`ingredient_id` = `ingredients`.`id`)) join `measurements` on(`ingredient_section`.`measurement_id` = `measurements`.`id`)) join `recipes` on(`ingredient_section`.`recipe_id` = `recipes`.`id`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `subcategories`
--
DROP TABLE IF EXISTS `subcategories`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `subcategories`  AS SELECT `sub_categories`.`id` AS `subcategory_id`, `sub_categories`.`name` AS `subcategory_name`, `recipe_subcategory`.`id` AS `recipe_subcategory_id`, `sub_categories`.`id` AS `id`, `recipes`.`id` AS `recipe_id`, `recipes`.`name` AS `recipe_name` FROM ((`recipe_subcategory` join `sub_categories` on(`recipe_subcategory`.`subcategory_id` = `sub_categories`.`id`)) join `recipes` on(`recipe_subcategory`.`recipe_id` = `recipes`.`id`)) ;

-- --------------------------------------------------------

--
-- Structure de la vue `user_recipes`
--
DROP TABLE IF EXISTS `user_recipes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `user_recipes`  AS SELECT `recipes`.`id` AS `id`, `recipes`.`name` AS `name`, `recipes`.`description` AS `description`, `recipes`.`image` AS `image`, `recipes`.`time` AS `time`, `recipes`.`serves` AS `serves`, `recipes`.`rating` AS `rating`, `categories`.`id` AS `category_id`, `users`.`id` AS `user_id`, `users`.`image` AS `user_image` FROM ((`recipes` join `users` on(`recipes`.`user_id` = `users`.`id`)) join `categories` on(`recipes`.`category_id` = `categories`.`id`)) ;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `background_colors`
--
ALTER TABLE `background_colors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `fonts`
--
ALTER TABLE `fonts`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `font_colors`
--
ALTER TABLE `font_colors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `font_styles`
--
ALTER TABLE `font_styles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ingredient_section`
--
ALTER TABLE `ingredient_section`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `instructions`
--
ALTER TABLE `instructions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `measurements`
--
ALTER TABLE `measurements`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `note_colors`
--
ALTER TABLE `note_colors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `recipe_subcategory`
--
ALTER TABLE `recipe_subcategory`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `background_colors`
--
ALTER TABLE `background_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `fonts`
--
ALTER TABLE `fonts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `font_colors`
--
ALTER TABLE `font_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `font_styles`
--
ALTER TABLE `font_styles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT pour la table `ingredient_section`
--
ALTER TABLE `ingredient_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=689;

--
-- AUTO_INCREMENT pour la table `instructions`
--
ALTER TABLE `instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT pour la table `measurements`
--
ALTER TABLE `measurements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `note_colors`
--
ALTER TABLE `note_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=380;

--
-- AUTO_INCREMENT pour la table `recipe_subcategory`
--
ALTER TABLE `recipe_subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT pour la table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT pour la table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
