<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        html {
            font-size: 10px;
            font-family: "Lato", Arial, Helvetica, sans-serif;
        }
        section {
            width: 100%;
            height: 100vh;
            color: #fff;
            background: linear-gradient(-45deg, #EE7752, #e73c7e, #23a6d5, #23d5ab);
            background-size: 400% 400%;
            position: relative;
            animation: change 10s ease-in-out infinite;
        }
        h1 {
            font-size: 5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            border: 3px solid #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 5rem 10rem;
        }
        @keyframes change {
            0% {
                background-position: 0 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0 50%;
            }
        }
    </style>
</head>
<body>
    <section>
        <h1>Animated background</h1>
    </section>
</body>
</html>