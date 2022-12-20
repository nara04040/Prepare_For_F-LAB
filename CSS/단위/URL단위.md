# URL단위

## 예시코드

```html
<!DOCTYPE html>
<html>
    <head>
        <title>CSS3 Property Basic</title>
        <style>
            body {
                background-image: url('~~.jpg')
            }
        </style>
    </head>
    <body>
        <h1>Lorem ipsum Lorem ipsum</h1>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum.</p>
    </body>
</html>
```

url 경로 표시 방법 :

1. 현재 폴더의 ~~.jpg라면 
"background-image: url('~~.jpg')" 라고 작성

2. 현재폴더 내부에 있는 Other폴더의 ~~.jpg 
background-image: url('Other/~~.jpg')

3. 루트폴터의 ~~.jpg
background-image: url('/~~.jpg')