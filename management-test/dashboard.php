<?php

session_start();


if(!isset($_SESSION['user_id'])){

    header("Location: login.php");

    exit;

}


?>


<!DOCTYPE html>

<html lang="uk">

<head>

<meta charset="UTF-8">

<title>Особистий кабінет</title>

<link rel="stylesheet" href="css/style.css">

</head>


<body>


<header>


<div class="logo">
Менеджмент Тест
</div>


<nav>

<a href="index.php">
Головна
</a>


<a href="logout.php">
Вийти
</a>


</nav>


</header>



<div class="form-container">


<h2>

Вітаємо,
<?= $_SESSION['fullname'] ?>

</h2>


<p>
Ви увійшли у свій особистий кабінет.
</p>



<a href="categories.html" class="button">

Почати тестування

</a>


</div>


</body>

</html>