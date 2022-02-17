## useRef

- useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않습니다.
- 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면,
- useRef 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있습니다.
- useRef 는 리액트 저장소를 이용해 값을 저장하기 때문에, 언제든지 접근 - 조회 - 수정이 가능하다.

```js
// setting focus when the component loads ONLY []
// Uncaught TypeError: Cannot read properties of undefined (reading 'focus') -> if no ref={userRef} inside input
// 처음에, useRef() 훅스를 불러온다 -> 빈깡통을 넣는다 -> 내가 focus를 주고 싶은곳을 찾아가서 -> ref값을 넣어준다. -> 리로딩이 되면 -> 태그에 focus를 준다.
// useRef()는 다용도로 사용할 수 있다. 예를들어, const fileInput = useRef(); fileInput.current.value = null; 직접 찾아가서, 값을 null을 줄수 있다.
// 공통적인 요소는, ref={fileInput} 태그안에 꼭 넣어줘야한다. 태그와 훅스를 연결시켜 태그를 원하는대로 manipulate를 할 수 있다.
// DOM manipulation
/*
        https://react.vlpt.us/basic/12-variable-with-useRef.html
        https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
        https://yoonjong-park.tistory.com/entry/React-useRef-%EB%8A%94-%EC%96%B8%EC%A0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%EA%B0%80

        useRef Hook 은 DOM 을 선택하는 용도 외
        컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리
        **useRef 로 관리하는 변수는 값이 바뀌어도 컴포넌트 리렌더링 X
        이 값을 수정 할때에는 .current 값을 수정, 조회 할 때에는 .current 를 조회

        useRef는 일반적인 자바스크립트 객체입니다 즉 heap 영역에 저장됩니다
        그래서 어플리케이션이 종료되거나 가비지 컬렉팅 될 때 까지 -> 참조할 때 마다 같은 메모리 주소를 가지게 되고,
        같은 메모리 주소를 가지기 때문에 === 연산이 항상 true를 반환하고, 값이 바뀌어도 리렌더링 되지 않습니다.

        하지만 함수 컴포넌트 내부에 변수를 선언한다면, 렌더링 될 때마다 값이 초기화 됩니다.
        컴포넌트는 그 컴포넌트의 state나 props가 변경될 때마다 호출되는데(re-rendering)
        함수형 컴포넌트는 일반 자바스크립트 함수와 마찬가지로 호출될 때마다 함수 내부에 정의된 로컬 변수들을 초기화합니다. 
        
  */

useEffect(() => {
  userRef.current.focus();
}, []);
```
