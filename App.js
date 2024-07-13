// const h1 = document.createElement('h1');
// h1.innerHTML = 'Hello World!';
// document.querySelector('#root').appendChild(h1);

const h1 = React.createElement('div', { id: 'Parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, 'Hello World'),
    React.createElement('h2', {}, 'Hello World'),
  ]),
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, 'Hello World'),
    React.createElement('h2', {}, 'Hello World'),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(h1);
