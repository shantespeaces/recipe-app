-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 13 nov. 2023 à 21:18
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
(4, 52, 3, 10, 11, 64),
(5, 53, 3, 2, 3, 64),
(6, 54, 2, 5, 6, 64),
(7, 55, 2, 7, 12, 64),
(8, 56, 1, 2, 12, 64),
(9, 57, 1, 10, 8, 64),
(10, 1, 2, 7, 13, 64),
(11, 59, 2, 10, 9, 65),
(12, 60, 2, 7, 14, 65),
(13, 5, 3, 11, 9, 65),
(14, 6, 3, 1, 15, 65),
(15, 1, 3, 11, 4, 65),
(16, 64, 2, 9, 6, 65),
(17, 17, 2, 11, 10, 66),
(18, 10, 2, 8, 14, 66),
(19, 11, 3, 11, 9, 66),
(20, 68, 1, 8, 2, 66),
(21, 69, 2, 6, 2, 66),
(22, 70, 2, 9, 1, 66),
(23, 43, 3, 10, 10, 66),
(24, 72, 1, 6, 10, 66),
(25, 41, 3, 1, 11, 66),
(26, 32, 3, 4, 13, 66),
(27, 1, 1, 5, 13, 66),
(28, 76, 2, 4, 8, 66),
(29, 77, 2, 6, 13, 66),
(30, 39, 2, 5, 12, 67),
(31, 12, 1, 3, 14, 67),
(32, 9, 3, 7, 4, 67),
(33, 28, 3, 6, 4, 67),
(34, 29, 2, 8, 10, 67),
(35, 57, 2, 8, 9, 67),
(36, 38, 2, 5, 14, 67),
(37, 1, 1, 3, 5, 67),
(38, 2, 1, 1, 6, 67),
(39, 47, 2, 4, 2, 67),
(40, 48, 2, 4, 4, 67),
(41, 11, 2, 9, 11, 68),
(42, 39, 1, 7, 9, 68),
(43, 79, 1, 1, 6, 68),
(44, 1, 1, 8, 3, 68),
(45, 2, 1, 4, 14, 68),
(46, 80, 3, 1, 1, 68),
(47, 11, 1, 7, 6, 68),
(48, 39, 3, 9, 11, 68),
(49, 79, 1, 7, 12, 68),
(50, 1, 1, 1, 12, 68),
(51, 2, 1, 5, 14, 68),
(52, 80, 1, 10, 4, 68),
(53, 81, 3, 5, 13, 68),
(54, 82, 1, 4, 11, 68),
(55, 6, 1, 5, 4, 69),
(56, 23, 1, 9, 3, 69),
(57, 83, 1, 5, 2, 69),
(58, 11, 2, 9, 9, 69),
(59, 29, 2, 9, 4, 70),
(60, 40, 2, 4, 2, 70),
(61, 41, 1, 9, 2, 70),
(62, 9, 1, 8, 6, 70),
(63, 84, 2, 11, 7, 70),
(64, 25, 3, 4, 10, 70),
(65, 26, 2, 11, 9, 70),
(66, 41, 1, 1, 4, 70),
(67, 57, 2, 6, 12, 70),
(68, 18, 1, 4, 6, 71),
(69, 34, 3, 9, 9, 71),
(70, 9, 2, 4, 6, 71),
(71, 28, 3, 1, 10, 71),
(72, 41, 3, 5, 8, 71),
(73, 42, 2, 6, 5, 71),
(74, 1, 3, 3, 9, 71),
(75, 27, 1, 3, 9, 71),
(76, 11, 3, 6, 4, 71),
(77, 79, 2, 10, 14, 71),
(78, 10, 3, 3, 9, 71),
(79, 39, 1, 11, 9, 71),
(80, 55, 3, 7, 5, 71),
(81, 86, 2, 11, 15, 71),
(82, 87, 1, 4, 1, 71),
(83, 46, 3, 5, 8, 71),
(84, 32, 2, 6, 9, 71),
(85, 81, 1, 9, 2, 71),
(86, 103, 1, 3, 11, 71),
(87, 18, 1, 5, 12, 71),
(88, 34, 3, 3, 11, 71),
(89, 9, 3, 3, 4, 71),
(90, 43, 1, 10, 8, 71),
(91, 41, 2, 6, 13, 71),
(92, 5, 3, 3, 3, 71),
(93, 1, 1, 4, 13, 71),
(94, 27, 1, 6, 2, 71),
(95, 11, 2, 7, 4, 71),
(96, 13, 2, 1, 6, 71),
(97, 10, 1, 11, 15, 71),
(98, 39, 2, 2, 9, 71),
(99, 25, 1, 5, 15, 71),
(100, 37, 3, 1, 5, 71),
(101, 8, 1, 1, 7, 71),
(102, 6, 1, 3, 13, 71),
(103, 32, 3, 11, 8, 71),
(104, 40, 3, 7, 2, 71),
(105, 2, 3, 5, 13, 71),
(106, 7, 3, 6, 9, 71),
(107, 21, 3, 4, 15, 71),
(108, 23, 3, 8, 12, 71),
(109, 60, 3, 6, 6, 72),
(110, 55, 3, 7, 10, 72),
(111, 59, 1, 10, 3, 72),
(112, 106, 1, 5, 1, 72),
(113, 54, 1, 1, 1, 72),
(114, 57, 3, 6, 14, 72),
(115, 3, 3, 8, 13, 73),
(116, 90, 1, 5, 14, 73),
(117, 106, 2, 5, 9, 73),
(118, 5, 2, 5, 5, 73),
(119, 25, 3, 6, 14, 73),
(120, 26, 1, 4, 9, 73),
(121, 4, 3, 7, 2, 73),
(122, 81, 2, 9, 8, 73),
(123, 80, 3, 7, 6, 73),
(124, 30, 2, 11, 12, 74),
(125, 82, 3, 8, 11, 74),
(126, 63, 2, 5, 2, 74),
(127, 87, 1, 4, 14, 75),
(128, 91, 2, 10, 15, 75),
(129, 79, 1, 9, 8, 75),
(130, 5, 1, 3, 5, 75),
(131, 81, 2, 1, 6, 75),
(132, 11, 3, 6, 2, 75),
(133, 56, 1, 9, 5, 75),
(134, 44, 2, 3, 14, 76),
(135, 62, 2, 11, 9, 76),
(136, 50, 3, 11, 3, 76),
(137, 29, 3, 5, 4, 76),
(138, 33, 3, 5, 6, 76),
(139, 9, 3, 7, 3, 76),
(140, 1, 1, 1, 6, 76),
(141, 31, 2, 2, 5, 76),
(142, 2, 3, 7, 1, 76),
(143, 7, 1, 5, 1, 76),
(144, 1, 2, 6, 11, 76),
(145, 41, 2, 8, 4, 76),
(146, 3, 2, 8, 12, 76),
(147, 14, 3, 3, 1, 77),
(148, 3, 1, 5, 1, 77),
(149, 42, 2, 1, 13, 77),
(150, 76, 1, 6, 11, 77),
(151, 53, 1, 9, 4, 77),
(152, 1, 3, 11, 1, 77),
(153, 46, 2, 8, 8, 78),
(154, 57, 3, 10, 15, 78),
(155, 61, 2, 8, 4, 78),
(156, 48, 1, 10, 9, 78),
(157, 28, 2, 10, 7, 78),
(158, 18, 3, 7, 13, 79),
(159, 4, 2, 4, 7, 79),
(160, 1, 1, 10, 6, 79),
(161, 36, 2, 3, 6, 79),
(162, 42, 1, 1, 15, 79),
(163, 7, 1, 9, 6, 79),
(164, 70, 3, 7, 9, 79),
(165, 62, 1, 2, 3, 80),
(166, 47, 2, 3, 6, 80),
(167, 23, 2, 6, 5, 80),
(168, 33, 2, 8, 13, 80),
(169, 7, 1, 10, 12, 80),
(170, 100, 2, 10, 14, 81),
(171, 39, 1, 4, 12, 81),
(172, 36, 2, 1, 4, 81),
(173, 10, 3, 7, 12, 82),
(174, 49, 1, 9, 11, 82),
(175, 17, 1, 5, 12, 82),
(176, 34, 1, 8, 12, 82),
(177, 39, 3, 10, 15, 82),
(178, 8, 2, 11, 8, 82),
(179, 72, 1, 2, 4, 82),
(180, 2, 1, 4, 3, 83),
(181, 1, 2, 7, 2, 83),
(182, 12, 1, 8, 8, 83),
(183, 14, 1, 9, 3, 83),
(184, 7, 3, 7, 7, 83),
(185, 17, 3, 10, 15, 83),
(186, 3, 1, 3, 6, 83),
(187, 1, 1, 3, 15, 83),
(188, 10, 3, 7, 4, 84),
(189, 28, 2, 9, 5, 84),
(190, 17, 3, 6, 12, 84),
(191, 8, 3, 11, 5, 84),
(192, 14, 2, 4, 1, 84),
(193, 29, 3, 2, 7, 84),
(194, 11, 1, 3, 5, 84),
(195, 52, 3, 1, 6, 84),
(196, 0, 1, 10, 15, 0);

-- --------------------------------------------------------

--
-- Structure de la table `instructions`
--

CREATE TABLE `instructions` (
  `id` int(11) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `description` text NOT NULL,
  `image` varchar(150) DEFAULT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `instructions`
--

INSERT INTO `instructions` (`id`, `name`, `description`, `image`, `recipe_id`) VALUES
(1, 'Prepare the Pie Crust.', ' Gather the ingredients for the pie crust, which typically include flour, butter, salt, and cold water. ...', NULL, 1),
(2, 'Roll Out the Pie Crust.', ' Preheat your oven according to the recipe instructions. ...', NULL, 1),
(3, 'Prepare the Filling.', ' Choose your pie filling, which could be sweet (e.g., fruit, custard) or savory (e.g., meat, vegetables). ...', NULL, 1),
(4, 'Assemble and Bake. ', 'Pour the prepared filling into the pie crust. ...', NULL, 1),
(5, 'Cool and Serve.', ' Once the pie is done baking, remove it from the oven and let it cool on a wire rack. ...', NULL, 1),
(6, 'Cool and Serve.', ' Once the pie is done baking, remove it from the oven and let it cool on a wire rack. ...', NULL, 2),
(7, NULL, 'make a choice and proceed with recipe', NULL, 64),
(8, NULL, 'depending on size of squash , cut into half or fourths', NULL, 64),
(9, NULL, 'remove seeds', NULL, 64),
(10, NULL, 'for spicy squash , drizzle olive oil or melted butter over each cut squash piece', NULL, 64),
(11, NULL, 'season with mexican seasoning mix ii', NULL, 64),
(12, NULL, 'for sweet squash , drizzle melted honey , butter , grated piloncillo over each cut squash piece', NULL, 64),
(13, NULL, 'season with sweet mexican spice mix', NULL, 64),
(14, NULL, 'bake at 350 degrees , again depending on size , for 40 minutes up to an hour , until a fork can easily pierce the skin', NULL, 64),
(15, NULL, 'be careful not to burn the squash especially if you opt to use sugar or butter', NULL, 64),
(16, NULL, 'if you feel more comfortable , cover the squash with aluminum foil the first half hour , give or take , of baking', NULL, 64),
(17, NULL, 'if desired , season with salt', NULL, 64),
(18, NULL, 'preheat oven to 425 degrees f', NULL, 65),
(19, NULL, 'press dough into the bottom and sides of a 12 inch pizza pan', NULL, 65),
(20, NULL, 'bake for 5 minutes until set but not browned', NULL, 65),
(21, NULL, 'cut sausage into small pieces', NULL, 65),
(22, NULL, 'whisk eggs and milk in a bowl until frothy', NULL, 65),
(23, NULL, 'spoon sausage over baked crust and sprinkle with cheese', NULL, 65),
(24, NULL, 'pour egg mixture slowly over sausage and cheese', NULL, 65),
(25, NULL, 's& p to taste', NULL, 65),
(26, NULL, 'bake 15-20 minutes or until eggs are set and crust is brown', NULL, 65),
(27, NULL, 'brown ground beef in large pot', NULL, 66),
(28, NULL, 'add chopped onions to ground beef when almost brown and sautee until wilted', NULL, 66),
(29, NULL, 'add all other ingredients', NULL, 66),
(30, NULL, 'add kidney beans if you like beans in your chili', NULL, 66),
(31, NULL, 'cook in slow cooker on high for 2-3 hours or 6-8 hours on low', NULL, 66),
(32, NULL, 'serve with cold clean lettuce and shredded cheese', NULL, 66),
(33, NULL, 'place potatoes in a large pot of lightly salted water and bring to a gentle boil', NULL, 67),
(34, NULL, 'cook until potatoes are just tender', NULL, 67),
(35, NULL, 'drain', NULL, 67),
(36, NULL, 'place potatoes in a large bowl and add all ingredients except the \"alouette\"', NULL, 67),
(37, NULL, 'mix well and transfer to a buttered 8x8 inch glass baking dish with 2 inch sides', NULL, 67),
(38, NULL, 'press the potatoes with a spatula to make top as flat as possible', NULL, 67),
(39, NULL, 'set aside for 2 hours at room temperature', NULL, 67),
(40, NULL, 'preheat oven to 350^f', NULL, 67),
(41, NULL, 'spread \"alouette\" evenly over potatoes and bake 15 minutes', NULL, 67),
(42, NULL, 'divide between plates', NULL, 67),
(43, NULL, 'garnish with finely diced red and yellow bell peppers', NULL, 67),
(44, NULL, 'mix all ingredients& boil for 2 1 / 2 hours , or until thick', NULL, 68),
(45, NULL, 'pour into jars', NULL, 68),
(46, NULL, 'I use \"old\" glass ketchup bottles', NULL, 68),
(47, NULL, 'it is not necessary for these to \"seal\"', NULL, 68),
(48, NULL, '\'my Amish mother-in-law has been making this her entire life , and has never used a \'sealed\' jar for this recipe , and it\'s always been great !\'', NULL, 68),
(49, NULL, 'combine ingredients in blender', NULL, 69),
(50, NULL, 'cover and blend until smooth', NULL, 69),
(51, NULL, 'sprinkle with ground cinnamon', NULL, 69),
(52, NULL, 'makes about 2 cups', NULL, 69),
(53, NULL, 'toast the fennel seeds and lightly crush them', NULL, 70),
(54, NULL, 'place all the ingredients in a bowl , stir well', NULL, 70),
(55, NULL, 'cover and leave to marinate', NULL, 70),
(56, NULL, 'keep refrigerated and use within 1 to 2 days', NULL, 70),
(57, NULL, 'in a medium saucepan combine all the ingredients for sauce#1 , bring to a full rolling boil , reduce heat to medium low and simmer for 1 hour , stirring often', NULL, 71),
(58, NULL, 'rub the ribs with soy sauce , garlic , ginger , chili powder , pepper , salt and chopped cilantro , both sides !', NULL, 71),
(59, NULL, 'wrap ribs in heavy duty foil', NULL, 71),
(60, NULL, 'let stand 1 hour', NULL, 71),
(61, NULL, 'preheat oven to 350 degrees', NULL, 71),
(62, NULL, 'place ribs in oven for 1 hour , turning once after 30 minutes', NULL, 71),
(63, NULL, '3 times during cooking the ribs open foil wrap and drizzle ribs with sauce#1', NULL, 71),
(64, NULL, 'place all the ingredients for sauce#2 in a glass or plastic bowl , whisk well and set aside', NULL, 71),
(65, NULL, 'remove ribs from oven and place on serving platter', NULL, 71),
(66, NULL, 'offer both sauces at table to drizzle over ribs', NULL, 71),
(67, NULL, 'crumble cookies into a 9-inch pie plate , or cake pan', NULL, 72),
(68, NULL, 'pat down to form an even layer', NULL, 72),
(69, NULL, 'drizzle 1 cup of chocolate topping evenly over the cookies with a small spoon', NULL, 72),
(70, NULL, 'scoop the vanilla ice cream on top of the chocolate and smooth down', NULL, 72),
(71, NULL, 'cover with half of the sliced bananas', NULL, 72),
(72, NULL, 'top with strawberry ice cream', NULL, 72),
(73, NULL, 'cover and freeze until firm', NULL, 72),
(74, NULL, 'before serving , top with 1 / 4 cup chocolate topping , whipped cream , and sliced bananas', NULL, 72),
(75, NULL, 'preheat oven to 350 degrees', NULL, 73),
(76, NULL, 'butter two 9x5\" loaf pans', NULL, 73),
(77, NULL, 'cream the sugar and the butter until light and whipped', NULL, 73),
(78, NULL, 'add the bananas , eggs , lemon juice , orange rind', NULL, 73),
(79, NULL, 'beat until blended uniformly', NULL, 73),
(80, NULL, 'be patient , and beat until the banana lumps are gone', NULL, 73),
(81, NULL, 'sift the dry ingredients together', NULL, 73),
(82, NULL, 'fold lightly and thoroughly into the banana mixture', NULL, 73),
(83, NULL, 'pour the batter into prepared loaf pans', NULL, 73),
(84, NULL, 'bake for 45 to 55 minutes , until the loaves are firm in the middle and the edges begin to pull away from the pans', NULL, 73),
(85, NULL, 'cool the loaves on racks for 30 minutes before removing from the pans', NULL, 73),
(86, NULL, 'freezes well', NULL, 73);

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
(1, 'Recipe1', 'Description for Recipe1', 'public/img/recipes/1/200x200.jpg', 10, 2, 5, 8, '03:45:00', 1),
(2, 'Crispy Salt and Pepper Potatoes', 'Description for Recipe2', 'public/img/recipes/2/200x200.jpg', 8, 4, 3, 8, '00:30:00', 1),
(64, 'Miso-Butter Roast Chicken With Acorn Squash Panzanella', 'autumn is my favorite time of year to cook! this recipe can be prepared either spicy or sweet, your choice! two of my posted mexican-inspired seasoning mix recipes are offered as suggestions.', 'public/img/recipes/64/200x200.jpg', 10, 4, NULL, 9, '03:25:00', 6),
(65, 'Crispy Salt and Pepper Potatoes', 'this recipe calls for the crust to be prebaked a bit before adding ingredients. feel free to change sausage to ham or bacon. this warms well in the microwave for those late risers.', 'public/img/recipes/65/200x200.jpg', 1, 2, NULL, 8, '03:40:00', 11),
(66, 'Thanksgiving Mac and Cheese', 'this modified version of \'mom\'s\' chili was a hit at our 2004 christmas party. we made an extra-large pot to have some left to freeze but it never made it to the freezer. it was a favorite by all. perfect for any cold and rainy day. you won\'t find this one in a cookbook. it is truly an original.', 'public/img/recipes/66/200x200.jpg', 10, 1, NULL, 5, '03:55:00', 4),
(67, 'Italian Sausage and Bread Stuffing', 'this is a super easy, great-tasting, make-ahead side dish that looks like you spent a lot more time preparing than you actually do. plus, most everything is done in advance. the times do not reflect the standing time of the potatoes.', 'public/img/recipes/67200x200.jpg', 4, 4, NULL, 9, '00:30:00', 7),
(68, 'Newton\'s Law', 'my dh\'s Amish mother raised him on this recipe. he much prefers it over store-bought ketchup. it was a taste I had to acquire, but now my ds\'s also prefer this type of ketchup. enjoy!', 'public/img/recipes/68/200x200.jpg', 8, 2, NULL, 4, '02:45:00', 24),
(69, 'Warm Comfort', 'my husband made these up last week, very tasty, he liked them because they were easy.', 'public/img/recipes/69/200x200.jpg', 5, 3, NULL, 8, '00:10:00', 26),
(70, 'Apples and Oranges', 'my Italian mil was thoroughly impressed by my non-Italian treatment of her olives. they are great appetizers and condiments to your fav pasta.(from the Vancouver Sun) ps. cook time includes fridge time', 'public/img/recipes/70/200x200.jpg', 3, 2, NULL, 8, '00:35:00', 18),
(71, 'Turmeric Hot Toddy', 'this recipe is posted by request and was originally from chef Sam Choy\'s cookbook', 'public/img/recipes/71/200x200.jpg', 8, 5, NULL, 7, '02:25:00', 5),
(72, 'Instant Pot Lamb Haleem', 'easy one-pot dinner. ', 'public/img/recipes/72/200x200.jpg', 10, 1, NULL, 3, '02:20:00', 24),
(73, 'Spiced Lentil and Caramelized Onion Baked Eggs', 'from Ann Hodgman\'s', 'public/img/recipes/73/200x200.jpg', 1, 3, NULL, 8, '00:20:00', 25),
(74, 'Hot Pimento Cheese Dip', 'horseradish is one of my favorite condiments as well as cranberry sauce. this is sweet and hot. I enjoy it on a smoked turkey & swiss sandwich, but also good alongside baked ham or roast beef.', 'public/img/recipes/74/200x200.jpg', 11, 3, NULL, 6, '02:40:00', 23),
(75, 'Spiral Ham in the Slow Cooker', 'simple but sexy. this was in my local newspaper\'s food section. cook time reflects refrigeration time. I\'ve been asked several times if this should be baked. just to clarify, no, it is not, it is a refrigerator dessert. I\'m not sure why it contains raw egg, but most tiramisu recipes do too.', 'public/img/recipes/75/200x200.jpg', 6, 4, NULL, 6, '00:20:00', 25),
(76, 'Butternut Squash and Apple Soup', 'I\'d have to say that this is a labor of love dish, but I give you my word that this recipe is better than Bush\'s. enjoy! oh, and also, this recipe is easily doubled. in fact, I think it turns out better when it is.', 'public/img/recipes/76/200x200.jpg', 9, 3, NULL, 8, '01:45:00', 25),
(77, 'Caesar Salad Roast Chicken', 'my boss gave me this recipe several years ago. the recipe supposedly came from the', 'public/img/recipes/77/200x200.jpg', 1, 5, NULL, 7, '03:40:00', 2),
(78, 'Chicken and Rice With Leeks and Salsa Verde', 'this will prove a blessing to everyone who takes it. it is soothing and relaxing, quieting to the nerves, has many good qualities, and is perfectly harmless. you can get the ingredients from any good health food store. you could up this to 1 cup each or lessen it to 1/8 cup each, according to your preference.', 'public/img/recipes/78/200x200.jpg', 3, 2, NULL, 2, '01:05:00', 23),
(79, 'Gorditas con Camarones', 'here\'s and old standby I enjoy from time to time. it\'s from an old newspaper clipping I cut out years ago. very tasty.', 'public/img/recipes/79/200x200.jpg', 11, 2, NULL, 9, '02:35:00', 2),
(80, 'Enfrijoladas', 'a favorite from a local restaurant no longer in business. not an authentic Mexican chile relleno, but a crispy, flaky version.', 'public/img/recipes/80/200x200.jpg', 10, 1, NULL, 8, '01:30:00', 7),
(81, 'Caramelized Plantain Parfait', 'a little different, and oh so good. I include these when making up candy trays, as gifts, at Christmas time.', 'public/img/recipes/81/200x200.jpg', 8, 4, NULL, 4, '03:50:00', 18),
(82, 'Chicken and Potato Gratin With Brown Butter Cream', 'easy one-pot dinner.', 'public/img/recipes/82/200x200.jpg', 8, 5, NULL, 9, '02:45:00', 1),
(83, 'Kale and Pumpkin Falafels With Pickled Carrot Slaw', 'wonderful comfort food from Rozanne Gold, a favorite cookbook author. this is a creamless creamed soup and it\'s delicious. it\'s made thick with potatoes and rich with butter. the color of this soup is stunning.', 'public/img/recipes/83/200x200.jpg', 6, 1, NULL, 7, '02:05:00', 7),
(84, 'Maple and Chile Roasted Squash With Quinoa Tabouli', 'thickened with a mix of cooked oats and vegies, this soup has all the flavor of the original with a fraction of the fat stuff. low in cholesterol too!', 'public/img/recipes/84/200x200.jpg', 6, 5, NULL, 5, '02:20:00', 6),
(85, 'Chhena Poda (Spiced Cheesecake)', 'delicious, crunchy fried chicken. this recipe came from the', 'public/img/recipes/85/200x200.jpg', 9, 2, NULL, 5, '01:25:00', 9);

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
(2, 2, 2),
(3, 64, 21),
(4, 65, 22),
(5, 66, 2),
(6, 67, 10),
(7, 68, 23),
(8, 69, 16),
(9, 70, 8),
(10, 71, 17),
(11, 72, 14),
(12, 73, 18),
(13, 74, 3),
(14, 75, 5),
(15, 76, 16),
(16, 77, 18),
(17, 78, 18),
(18, 79, 13),
(19, 80, 11),
(20, 81, 16),
(21, 82, 2),
(22, 83, 6),
(23, 84, 23),
(24, 85, 4);

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
(1, 'pie crust', 1),
(2, 'pie filling', 1),
(3, 'part1', 64);

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
  `username` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(155) DEFAULT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `image`, `recipe_id`) VALUES
(1, 'Shanté', 'Shante', 'password', NULL, 1),
(2, 'Tohar', 'YasminesSister', 'password', NULL, 2),
(3, 'John Doe', 'john_doe', 'password', NULL, 30),
(4, 'Sofia Patel', 'sofia_patel', 'password', NULL, 22),
(5, 'Alejandro Rodriguez', 'alejandro_rodriguez', 'password', NULL, 21),
(6, 'Aisha Kim', 'aisha_kim', 'password', NULL, 40),
(7, 'Muhammad Khan', 'muhammad_khan', 'password', NULL, 31),
(8, 'Isabella Silva', 'isabella_silva', 'password', NULL, 25),
(9, 'Yusuke Yamamoto', 'yusuke_yamamoto', 'password', NULL, 26),
(10, 'Lila Patel', 'lila_patel', 'password', NULL, 50),
(11, 'Omar Al-Farsi', 'omar_al_farsi', 'password', NULL, 70),
(12, 'Mia Nguyen', 'mia_nguyen', 'password', NULL, 38),
(13, 'Elijah Kim', 'elijah_kim', 'password', NULL, 57),
(14, 'Zara Gupta', 'zara_gupta', 'password', NULL, 25),
(15, 'Santiago Hernandez', 'santiago_hernandez', 'password', NULL, 52),
(16, 'Amina Khan', 'amina_khan', 'password', NULL, 40),
(17, 'Lucas Chen', 'lucas_chen', 'password', NULL, 26),
(18, 'Anaya Patel', 'anaya_patel', 'password', NULL, 54),
(19, 'Mateo Rodriguez', 'mateo_rodriguez', 'password', NULL, 50),
(20, 'Amara Singh', 'amara_singh', 'password', NULL, 87),
(21, 'Yusuf Ahmed', 'yusuf_ahmed', 'password', NULL, 43),
(22, 'Sakura Tanaka', 'sakura_tanaka', 'password', NULL, 5),
(23, 'Ethan Patel', 'ethan_patel', 'password', NULL, 39),
(24, 'Aaliyah Kim', 'aaliyah_kim', 'password', NULL, 34),
(25, 'Ravi Desai', 'ravi_desai', 'password', NULL, 55),
(26, 'Ayaan Kumar', 'ayaan_kumar', 'password', NULL, 27);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT pour la table `instructions`
--
ALTER TABLE `instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT pour la table `recipe_subcategory`
--
ALTER TABLE `recipe_subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
