# VariableEnvironment

VariableEnvironment에 담기는 내용은 LexicalEnvironment와 같지만 최초 실행 시의 스냅샷을 유지한다는 점이 다르다.

실행 컨텍스트를 생성할 때 VariableEnvironment에 정보를 먼저 담고, 이를 복사하여 LexicalEnvironment를 만든다.

이후 사용하는 실행환경은 LexicalEnvironment를 활용한다.

VariableEnvironment와 LexicalEnvironment의 내부는 environmentRecord와 outer-EnvironmentReference로 구성되어 있다.

