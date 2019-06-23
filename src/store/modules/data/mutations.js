/* Mutations are synchronous changes to the data. Whenever we want to change something in the state in an instant manner
we 'commit' mutations. 
As you see below the mutation is a setter. The mutation instantly asigns a value to the state */

export default {
    setData: (state, data) => {
        console.log(state.Data);
        state.Data = data;
        state.loadingData = false;
    }
}