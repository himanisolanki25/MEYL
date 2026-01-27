# MEYL - meals, delivered
# MEYL - Meal + Mail

# Low level planning

# Why async can be used with componentDidMount and not with useEffect callback
Because componentDidMount have nothing to do with the return type. React does not use its value. If its a promise, react ignores it;
And useEffect expects the callback to return: either undefined or a cleanup function not a promise.