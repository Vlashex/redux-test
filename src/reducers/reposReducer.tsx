
interface reposReducer {
    pizza: Array<{
        img_url: string,
        name: string,
        content: string,
        price: string
    }>
}

const DELETE_PIZZA = "DELETE_PIZZA"

const defaultState:reposReducer =  { "pizza":
    [
        {
            "img_url": 'https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/45.jpg',
            "name": 'Пицца с сыром',
            "content": 'Получите нашу классическую сырную пиццу Манхэттен с соусом и корочкой на ваш выбор.',
            "price": '$15.95'
        },
        {
            "img_url": 'https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/7777.jpg',
            "name": 'Пицца пепперони',
            "content": 'Получите нашу классическую пиццу Пепперони с соусом и корочкой на выбор.',
            "price": '$16.35'
        },
        {
            "img_url": 'https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/p1.jpg',
            "name": 'Вегетарианская пицца',
            "content": 'Томатный соус, моцарелла, зеленый перец, лук, свежие грибы, помидоры и маслины.',
            "price": '$19.95'
        }
    ]
}

interface PizzaAction {
    type: string,
    payload?: any
}

export const reposReducer = (state = defaultState, action: PizzaAction) => {
    switch (action.type) {
        
        case DELETE_PIZZA:
            return {...state, pizza: state.pizza.filter(Pizza => Pizza.name !== action.payload)}
            

        default:
            return state
    }
}
