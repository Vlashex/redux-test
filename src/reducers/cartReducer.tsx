const ADD_TO_CART = "ADD_TO_CART"
const DELETE_CART = "DELETE_CART"
interface cartAction {
    type: string,
    payload?: any
}

interface reposReducer {
    cart: Array<{
        img_url: string,
        name: string,
        content: string,
        price: string
    }>
}

const defaultState:reposReducer =  { "cart":
    [
        {
            "img_url": 'https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/45.jpg',
            "name": 'Пицца с сыром',
            "content": 'Получите нашу классическую сырную пиццу Манхэттен с соусом и корочкой на ваш выбор.',
            "price": '$15.95'
        }
    ]
}

export const cartReducer = (state = defaultState, action:cartAction) => {
    switch(action.type){
        case ADD_TO_CART:
            return {...state, cart: [...state.cart, action.payload]}
        case DELETE_CART:
            return {...state, cart: [...state.cart.filter((element) => element.name !== action.payload)]}
        default:
            return state
    }
}