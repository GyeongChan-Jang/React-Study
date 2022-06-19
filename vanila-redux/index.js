import { createStore } from 'redux'

const divToggle = document.querySelector('.toggle')
const counter = document.querySelector('h1')
const btnIncrease = document.querySelector('#increase')
const btnDecrease = document.querySelector('#decrease')

// 액션의 이름 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

// 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH })
const increase = (difference) => ({ type: INCREASE, difference })
const decrease = () => ({ type: DECREASE })

// 초기값 설정
const initialState = {
  toggle: false,
  counter: 0
}

// reducer 함수 정의 -> 변화를 일으키는 함수

// state가 undefined일 때는 initialState 기본값으로 사용
function reducer(state = initialState, action) {
  // action.thpe에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불면성 유지
        toggle: !state.toggle
      }
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

// store 생성
const store = createStore(reducer)

const render = () => {
  const state = store.getState() // 현태 상태를 불러옵니다
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add('active')
  } else {
    divToggle.classList.remove('active')
  }
  // 카운터 처리
  counter.innerText = state.counter
}

// store의 상태가 변경될 때마다 render 함수를 실행합니다
const listener = () => {
  console.log('상태가 업데이트됨')
}
const unsubscribe = store.subscribe(listener)

// unsubscribe() // 추후 구독을 비활성화할 때 함수를 호출

// render()
store.subscribe(render)

// 액션 발생
divToggle.addEventListener('click', () => store.dispatch(toggleSwitch()))
btnIncrease.addEventListener('click', () => store.dispatch(increase(1)))
btnDecrease.addEventListener('click', () => store.dispatch(decrease()))
