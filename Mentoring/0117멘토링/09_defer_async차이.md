# defer , async의 차이

script 태그에 async , defer속성을 이용한다면 로딩순서를 제어할 수 있다.

<br>

### async

asnyc속성을 사용한다면 script태그를 만나도 html파싱이 중단되지 않는다.

script로드와 html parsing이 함께 이뤄지다 script로드가 끝난다면 html파싱이 잠시 중단되고 script실행이 완료된 이후 다시 재개된다.

<br>

<img src="https://velog.velcdn.com/post-images%2Ftakeknowledge%2Ffd6a6960-2404-11ea-addc-59a0f147306b%2Fimage.png">

<br>

### defer

defer속성을 사용한다면 async와 비슷하게 html파싱이 함께 이뤄진다. 하지만 html파싱과정이 중단되지 않고 html파싱이 완료되고 난 이후 script를 실행합니다.

<br>

<img src="https://velog.velcdn.com/post-images%2Ftakeknowledge%2F808d77a0-2406-11ea-a53a-abac3e9de1b1%2Fimage.png">
