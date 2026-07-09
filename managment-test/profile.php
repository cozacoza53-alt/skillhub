<?php
session_start();

if (!isset($_SESSION['user_id']) || !isset($_SESSION['fullname'])) {
    header("Location: login.php");
    exit;
}

$fullname = $_SESSION['fullname'];


?>

<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Особистий кабінет</title>

<link rel="stylesheet" href="css/style.css">

<style>

body{
    margin:0;
    font-family:Arial, sans-serif;
    background:#eef2f7;
}

header{
    background:#2c3e50;
    color:white;
    padding:18px 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

header a{
    color:white;
    text-decoration:none;
    margin-left:20px;
    font-weight:bold;
}

.container{
    max-width:1100px;
    margin:40px auto;
}

.welcome{
    background:white;
    padding:30px;
    border-radius:12px;
    box-shadow:0 0 10px rgba(0,0,0,.1);
    text-align:center;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
    margin-top:30px;
}

.card{
    background:white;
    padding:25px;
    border-radius:12px;
    box-shadow:0 0 10px rgba(0,0,0,.1);
    text-align:center;
}

.card h2{
    margin-top:0;
    color:#2c3e50;
}

.value{
    font-size:34px;
    color:#3498db;
    font-weight:bold;
}

.buttons{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:20px;
    margin-top:35px;
}

.btn{
    text-decoration:none;
    color:white;
    background:#3498db;
    padding:15px 35px;
    border-radius:8px;
    transition:.3s;
}

.btn:hover{
    background:#2980b9;
}

.logout{
    background:#e74c3c;
}

.logout:hover{
    background:#c0392b;
}

</style>

</head>

<body>

<header>

<div><b>Менеджмент Тест</b></div>

<nav>
<a href="index.php">Головна</a>
<a href="categories.php">Теорія</a>
<a href="tests.php">Тести</a>
</nav>

</header>

<div class="container">

<div class="welcome">

<h1>Особистий кабінет</h1>

<h2>Вітаємо, <?php echo htmlspecialchars($fullname); ?>!</h2>

<p>Бажаємо успіхів у підготовці до тестування з менеджменту.</p>

</div>

<div class="cards">

<div class="card">
<h2>📝 Пройдено тестів</h2>
<div class="value">0</div>
</div>

<div class="card">
<h2>⭐ Середній бал</h2>
<div class="value">0%</div>
</div>

<div class="card">
<h2>🏆 Останній результат</h2>
<div class="value">—</div>
</div>

<div class="card">
<h2>📚 Доступні теми</h2>
<div class="value">12</div>
</div>

</div>

<div class="buttons">

<a href="theory.php" class="btn">
    📚 Теоретичні матеріали
</a>

<a href="categories.php" class="btn">
📝 Перейти до тестів
</a>



<a href="logout.php" class="btn logout">
🚪 Вийти
</a>

</div>

</div>

</body>
</html>