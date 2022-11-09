export const loggerMiddleware = (store) => (next) => (action)=> {
    // if we receive an action without type
    if (!action.type){
        return next(action)
    }
    console.log('type', action.type)
    console.log('payload', action.payload)
    console.log('currentState', store.getState())

    next(action)

    console.log('next state', store.getState())

}