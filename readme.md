# react-express-starter-kit
> Boilerplate containing a front-end using React and a back-end api using Express.

### Motivation
Some developers prefer to have back-end code separated from front-end code to promote separation of concerns.  
Some developers prefer to have back-end code together with front-end code because it is more practical.  
This starter kit aims for a middle ground, trying to preserve the goodness of both approaches.

## Getting Started
Clone the repository and remove the .git folder:  
```
$ git clone https://github.com/hexacta/react-express-starter-kit my-app
$ cd my-app
$ rm -rf .git
$ npm install
```

Start development server:  
```
$ npm start
```

That's all, you can now modify any front or back-end code and everything will be reloaded automatically.

## Under the Hood
### Inspiration
- [express-es6-rest-api](https://github.com/developit/express-es6-rest-api) by [Jason Miller](https://github.com/developit)
- [express-mongoose-es6-rest-api](https://github.com/KunalKapadia/express-mongoose-es6-rest-api) by [Kunal Kapadia](https://github.com/KunalKapadia)
- [create-react-app](https://github.com/facebookincubator/create-react-app) by [Facebook](https://github.com/facebookincubator)

### React
The React application is fully contained inside the `web` folder. It is the bare output of `create-react-app`. The only configuration added is the `proxy` in package.json:
```json
	"proxy": "http://localhost:8080/"
```

Aaaand, an example of how to use fetch to call the API:
```js
  handleClick = async e => {
    const response = await fetch("api/books/");
    const books = await response.json();
    this.setState({
      books: books
    })
  };
```

### Express
The `server` folder includes:
- A REST API shell with Express
- Transpiling with BabelJS

And doesn't include:
- Linting
- Testing
- Database

## License

MIT © [Hexacta](https://www.hexacta.com)