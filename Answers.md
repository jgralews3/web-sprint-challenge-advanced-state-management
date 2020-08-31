1. What problem does the context API help solve?

Distributing large amounts of props across components, including sharing props from one component to another component on another branch of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are functions that are general enough to use in different components. Reducers set up state to be placed in the store and regulate actions. Store is a centralized state management set up and distributed throughout the components. The store is considered thusly because it is immutable and has no side effects.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is "global" while Component state is "local". You use App-state when setting up values you want across multiple components, while you use comp-state for things only needed in that specific component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows the interception of and modification of actions. It allows the action-creators to have logic in them, enhancing their functionality.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer Redux. While there is more boilerplate setup, it's much more straight-forward once it's done.
