-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 07 nov. 2023 à 21:58
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
(51, 'Avocado');

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
(1, 1, 1, 1, 1, 1),
(2, 1, 1, 1, 1, 2),
(3, 2, 2, 2, 2, 1);

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
(5, 'Cool and Serve.', ' Once the pie is done baking, remove it from the oven and let it cool on a wire rack. ...', NULL, 1);

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
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `recipes`
--

INSERT INTO `recipes` (`id`, `name`, `description`, `image`, `category_id`, `rating`, `setting_id`, `serves`, `time`) VALUES
(1, 'Recipe1', 'Description for Recipe1', NULL, 2, 4, 5, 6, '01:54:00'),
(2, 'Recipe2', 'Description for Recipe2', NULL, 4, 5, 3, 2, '02:02:00'),
(3, 'Recipe3', 'Description for Recipe3', NULL, 3, 3, 2, 7, '01:38:00'),
(4, 'Recipe4', 'Description for Recipe4', NULL, 3, 4, 1, 5, '01:55:00'),
(5, 'Recipe5', 'Description for Recipe5', NULL, 10, 1, 1, 5, '01:36:00'),
(6, 'Recipe6', 'Description for Recipe6', NULL, 7, 4, 3, 7, '02:15:00'),
(7, 'Recipe7', 'Description for Recipe7', NULL, 10, 2, 4, 6, '02:24:00'),
(8, 'Recipe8', 'Description for Recipe8', NULL, 8, 4, 5, 8, '02:35:00'),
(9, 'Recipe9', 'Description for Recipe9', NULL, 4, 2, 4, 4, '01:35:00'),
(10, 'Recipe10', 'Description for Recipe10', NULL, 2, 3, 5, 4, '01:43:00'),
(11, 'Recipe11', 'Description for Recipe11', NULL, 4, 2, 2, 6, '01:31:00'),
(12, 'Recipe12', 'Description for Recipe12', NULL, 2, 3, 5, 4, '02:22:00'),
(13, 'Recipe13', 'Description for Recipe13', NULL, 10, 1, 2, 7, '01:24:00'),
(14, 'Recipe14', 'Description for Recipe14', NULL, 5, 5, 2, 8, '02:22:00'),
(15, 'Recipe15', 'Description for Recipe15', NULL, 4, 5, 5, 2, '02:22:00'),
(16, 'Recipe16', 'Description for Recipe16', NULL, 5, 2, 1, 1, '02:47:00'),
(17, 'Recipe17', 'Description for Recipe17', NULL, 5, 2, 1, 7, '02:39:00'),
(18, 'Recipe18', 'Description for Recipe18', NULL, 6, 3, 1, 8, '01:25:00'),
(19, 'Recipe19', 'Description for Recipe19', NULL, 2, 5, 1, 8, '02:01:00'),
(20, 'Recipe20', 'Description for Recipe20', NULL, 5, 2, 5, 3, '01:50:00'),
(21, 'Recipe21', 'Description for Recipe21', NULL, 6, 3, 2, 4, '02:45:00'),
(22, 'Recipe22', 'Description for Recipe22', NULL, 10, 1, 3, 4, '02:42:00'),
(23, 'Recipe23', 'Description for Recipe23', NULL, 4, 5, 1, 1, '01:38:00'),
(24, 'Recipe24', 'Description for Recipe24', NULL, 9, 4, 3, 7, '02:46:00'),
(25, 'Recipe25', 'Description for Recipe25', NULL, 6, 2, 5, 8, '02:54:00'),
(26, 'Recipe26', 'Description for Recipe26', NULL, 1, 4, 3, 3, '02:14:00'),
(27, 'Recipe27', 'Description for Recipe27', NULL, 10, 2, 4, 8, '01:31:00'),
(28, 'Recipe28', 'Description for Recipe28', NULL, 5, 2, 1, 3, '01:39:00'),
(29, 'Recipe29', 'Description for Recipe29', NULL, 5, 2, 2, 1, '02:51:00'),
(30, 'Recipe30', 'Description for Recipe30', NULL, 7, 2, 3, 3, '02:24:00'),
(31, 'Recipe31', 'Description for Recipe31', NULL, 5, 4, 1, 2, '01:09:00'),
(32, 'Recipe32', 'Description for Recipe32', NULL, 3, 4, 1, 3, '02:22:00'),
(33, 'Recipe33', 'Description for Recipe33', NULL, 5, 2, 5, 8, '02:34:00'),
(34, 'Recipe34', 'Description for Recipe34', NULL, 2, 5, 4, 7, '01:26:00'),
(35, 'Recipe35', 'Description for Recipe35', NULL, 7, 3, 1, 8, '01:22:00'),
(36, 'Recipe36', 'Description for Recipe36', NULL, 10, 5, 2, 6, '01:06:00'),
(37, 'Recipe37', 'Description for Recipe37', NULL, 8, 2, 1, 3, '01:43:00'),
(38, 'Recipe38', 'Description for Recipe38', NULL, 5, 4, 3, 4, '02:42:00'),
(39, 'Recipe39', 'Description for Recipe39', NULL, 3, 5, 2, 3, '02:51:00'),
(40, 'Recipe40', 'Description for Recipe40', NULL, 5, 1, 1, 4, '01:52:00'),
(41, 'Recipe41', 'Description for Recipe41', NULL, 8, 4, 3, 2, '02:04:00'),
(42, 'Recipe42', 'Description for Recipe42', NULL, 5, 3, 1, 3, '02:25:00'),
(43, 'Recipe43', 'Description for Recipe43', NULL, 3, 1, 2, 3, '02:29:00'),
(44, 'Recipe44', 'Description for Recipe44', NULL, 3, 5, 1, 5, '02:38:00'),
(45, 'Recipe45', 'Description for Recipe45', NULL, 4, 1, 4, 8, '02:34:00'),
(46, 'Recipe46', 'Description for Recipe46', NULL, 5, 5, 2, 2, '02:09:00'),
(47, 'Recipe47', 'Description for Recipe47', NULL, 9, 1, 2, 8, '01:52:00'),
(48, 'Recipe48', 'Description for Recipe48', NULL, 9, 4, 5, 2, '02:12:00'),
(49, 'Recipe49', 'Description for Recipe49', NULL, 2, 2, 4, 2, '01:02:00'),
(50, 'Recipe50', 'Description for Recipe50', NULL, 8, 2, 5, 1, '02:56:00');

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
(2, 2, 2);

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
(2, 'pie filling', 1);

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
  `username` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT pour la table `ingredient_section`
--
ALTER TABLE `ingredient_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `instructions`
--
ALTER TABLE `instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT pour la table `recipe_subcategory`
--
ALTER TABLE `recipe_subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
